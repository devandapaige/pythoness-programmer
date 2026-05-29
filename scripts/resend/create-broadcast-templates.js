#!/usr/bin/env node
/**
 * Create and publish Resend broadcast templates (no emails sent).
 *
 * Usage:
 *   node scripts/resend/create-broadcast-templates.js              # dry-run (default)
 *   node scripts/resend/create-broadcast-templates.js --apply      # create missing + publish
 *   node scripts/resend/create-broadcast-templates.js --apply --update  # update existing + publish
 */

const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const {
  getAllBroadcastTemplates,
  getSiteUrl,
  toCreateTemplatePayload,
} = require('./lib/templates')

const ROOT = path.join(__dirname, '../..')
const CONFIG_PATH = path.join(ROOT, 'config/resend-templates.json')
const RESEND_API_BASE_URL = 'https://api.resend.com'

dotenv.config({ path: path.join(ROOT, '.env') })
dotenv.config({ path: path.join(ROOT, '.env.local') })

const isApply = process.argv.includes('--apply')
const isUpdate = process.argv.includes('--update')

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const getApiKey = () => {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured in .env or .env.local')
  }
  return apiKey
}

const resendFetch = async (apiKey, endpoint, init = {}) => {
  const response = await fetch(`${RESEND_API_BASE_URL}${endpoint}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  })

  const text = await response.text()
  let body = {}
  if (text) {
    try {
      body = JSON.parse(text)
    } catch {
      body = { message: text }
    }
  }

  if (!response.ok) {
    throw new Error(body.message ?? `Resend API error (${response.status})`)
  }

  return body
}

const listTemplates = async (apiKey) => {
  const result = await resendFetch(apiKey, '/templates')
  return result.data ?? []
}

const createTemplate = async (apiKey, payload) =>
  resendFetch(apiKey, '/templates', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

const updateTemplate = async (apiKey, templateId, payload) =>
  resendFetch(apiKey, `/templates/${templateId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })

const publishTemplate = async (apiKey, templateId) =>
  resendFetch(apiKey, `/templates/${templateId}/publish`, {
    method: 'POST',
  })

const printDryRun = (templates) => {
  console.log('Resend broadcast templates — dry run (no API calls)\n')
  console.log(`Site URL: ${getSiteUrl()}\n`)

  templates.forEach((template) => {
    console.log(`• ${template.name}`)
    console.log(`  alias: ${template.alias}`)
    console.log(`  from: ${template.from}`)
    console.log(`  subject: ${template.subject}`)
    console.log(`  html size: ${Buffer.byteLength(template.html, 'utf8')} bytes`)
    console.log(
      `  variables: ${template.variables.map((variable) => variable.key).join(', ')}`
    )
    console.log('')
  })

  console.log('Run with --apply to create templates, or --apply --update to refresh existing ones.')
}

const writeConfig = (records) => {
  fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true })
  fs.writeFileSync(
    CONFIG_PATH,
    `${JSON.stringify({ updatedAt: new Date().toISOString(), templates: records }, null, 2)}\n`
  )
  console.log(`\nWrote template IDs to ${path.relative(ROOT, CONFIG_PATH)}`)
}

const applyTemplates = async (templates) => {
  const apiKey = getApiKey()
  const existing = await listTemplates(apiKey)
  const existingByAlias = new Map(
    existing
      .filter((template) => template.alias)
      .map((template) => [template.alias, template])
  )

  const records = []

  for (const template of templates) {
    const existingTemplate = existingByAlias.get(template.alias)
    const payload = toCreateTemplatePayload(template)

    if (existingTemplate) {
      if (isUpdate) {
        console.log(`Updating ${template.alias} (${existingTemplate.id})...`)
        await updateTemplate(apiKey, existingTemplate.id, payload)
        await sleep(350)
        console.log(`Publishing ${template.alias}...`)
        await publishTemplate(apiKey, existingTemplate.id)
        await sleep(350)
        records.push({
          alias: template.alias,
          name: template.name,
          id: existingTemplate.id,
          status: 'updated',
        })
      } else {
        console.log(`Skipping ${template.alias} — already exists (${existingTemplate.id})`)
        records.push({
          alias: template.alias,
          name: template.name,
          id: existingTemplate.id,
          status: 'existing',
        })
      }
      continue
    }

    console.log(`Creating ${template.alias}...`)
    const created = await createTemplate(apiKey, payload)
    await sleep(350)

    console.log(`Publishing ${template.alias} (${created.id})...`)
    await publishTemplate(apiKey, created.id)
    await sleep(350)

    records.push({
      alias: template.alias,
      name: template.name,
      id: created.id,
      status: 'created',
    })
  }

  writeConfig(records)
}

const main = async () => {
  const templates = getAllBroadcastTemplates()

  if (!isApply) {
    printDryRun(templates)
    return
  }

  await applyTemplates(templates)
}

main().catch((error) => {
  console.error(error.message ?? error)
  process.exit(1)
})
