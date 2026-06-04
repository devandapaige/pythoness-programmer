#!/usr/bin/env node
/**
 * Create a draft Resend broadcast from a perspective newsletter variables JSON file.
 *
 * Usage:
 *   node scripts/resend/create-broadcast-draft.js --dry-run
 *   node scripts/resend/create-broadcast-draft.js --slug human-eyes-readable-contrast-june-2026
 *   node scripts/resend/create-broadcast-draft.js --update 9f122f4d-...  # refresh draft HTML
 */

const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const { getAllBroadcastTemplates, getNewsletterFrom } = require('./lib/templates')
const { embedLocalImagesInHtml } = require('./lib/embed-local-images')
const { substituteTemplateVariables } = require('./lib/substitute-template-variables')

const ROOT = path.join(__dirname, '../..')
const SNIPPETS_DIR = path.join(
  ROOT,
  'src/content/newsletter/posts/resend-snippets'
)
const RESEND_API_BASE_URL = 'https://api.resend.com'

const TEMPLATE_VARIABLE_KEYS = [
  'SUBJECT_LINE',
  'PREHEADER',
  'THIS_WEEK_HTML',
  'TLDR_HTML',
  'MAIN_FEATURE_HTML',
  'TOOL_SPOTLIGHT_HTML',
  'STRUGGLE_HTML',
  'FIRE_HORSE_HTML',
  'UP_NEXT_HTML',
  'SUPPORT_HTML',
  'READ_ONLINE_URL',
]

dotenv.config({ path: path.join(ROOT, '.env') })
dotenv.config({ path: path.join(ROOT, '.env.local') })

const getArgValue = (flag) => {
  const index = process.argv.indexOf(flag)
  if (index < 0 || index + 1 >= process.argv.length) return undefined
  return process.argv[index + 1]
}

const isDryRun = process.argv.includes('--dry-run')
const skipEmbed = process.argv.includes('--no-embed-images')
const updateBroadcastId = getArgValue('--update')
const slug =
  getArgValue('--slug') ?? 'human-eyes-readable-contrast-june-2026'

const getApiKey = () => {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured in .env or .env.local')
  }
  return apiKey
}

const getSegmentId = () => {
  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim()
  if (!segmentId) {
    throw new Error(
      'RESEND_NEWSLETTER_SEGMENT_ID is not configured in .env or .env.local'
    )
  }
  return segmentId
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

const loadSnippetPayload = (issueSlug) => {
  const snippetPath = path.join(SNIPPETS_DIR, `${issueSlug}.json`)
  if (!fs.existsSync(snippetPath)) {
    throw new Error(`Snippet file not found: ${snippetPath}`)
  }

  const raw = JSON.parse(fs.readFileSync(snippetPath, 'utf8'))
  const templateAlias =
    raw.templateAlias ?? 'pythoness-perspective-newsletter'
  const broadcastName =
    raw.broadcastName ?? `${issueSlug} — Pythoness Perspective`

  const variables = {}
  for (const key of TEMPLATE_VARIABLE_KEYS) {
    if (raw[key] !== undefined) {
      variables[key] = raw[key]
    }
  }

  const missing = TEMPLATE_VARIABLE_KEYS.filter(
    (key) => variables[key] === undefined
  )
  if (missing.length > 0) {
    throw new Error(
      `Missing template variables in ${snippetPath}: ${missing.join(', ')}`
    )
  }

  const localImages = Array.isArray(raw.localImages) ? raw.localImages : []

  return { templateAlias, broadcastName, variables, localImages }
}

const findPerspectiveTemplate = (alias) => {
  const templates = getAllBroadcastTemplates()
  const template = templates.find((item) => item.alias === alias)
  if (!template) {
    throw new Error(`Template alias not found in repo: ${alias}`)
  }
  return template
}

const renderBroadcast = (template, variables) => {
  const html = substituteTemplateVariables(template.html, variables)
  const subject = substituteTemplateVariables(template.subject, variables)
  const text = substituteTemplateVariables(template.text, variables)
  return { html, subject, text }
}

const main = async () => {
  const { templateAlias, broadcastName, variables, localImages } =
    loadSnippetPayload(slug)
  const template = findPerspectiveTemplate(templateAlias)
  let { html, subject, text } = renderBroadcast(template, variables)

  if (!skipEmbed && localImages.length > 0) {
    html = embedLocalImagesInHtml(html, localImages, ROOT)
    console.log(
      `Embedded ${localImages.length} local image(s) as data URLs for Resend preview.`
    )
  } else if (localImages.length === 0) {
    console.warn(
      'No localImages in snippet JSON — draft may show broken images until site is deployed.'
    )
  }

  console.log(`Issue slug: ${slug}`)
  console.log(`Template: ${template.alias}`)
  console.log(`Broadcast name: ${broadcastName}`)
  console.log(`Subject: ${subject}`)
  console.log(`HTML size: ${Buffer.byteLength(html, 'utf8')} bytes`)

  if (isDryRun) {
    console.log('\nDry run — no API call. Remove --dry-run to create the draft.')
    return
  }

  const apiKey = getApiKey()
  const from = getNewsletterFrom()

  if (updateBroadcastId) {
    await resendFetch(apiKey, `/broadcasts/${updateBroadcastId}`, {
      method: 'PATCH',
      body: JSON.stringify({ html, text, subject }),
    })
    console.log(`\nDraft broadcast updated: ${updateBroadcastId}`)
    console.log('Review in Resend → Broadcasts before sending.')
    return
  }

  const segmentId = getSegmentId()

  const result = await resendFetch(apiKey, '/broadcasts', {
    method: 'POST',
    body: JSON.stringify({
      segment_id: segmentId,
      from,
      subject,
      html,
      text,
      name: broadcastName,
    }),
  })

  const broadcastId = result.id ?? result.data?.id
  console.log('\nDraft broadcast created.')
  if (broadcastId) {
    console.log(`Broadcast ID: ${broadcastId}`)
  }
  console.log('Review in Resend → Broadcasts before sending.')
}

main().catch((error) => {
  console.error(error.message ?? error)
  process.exit(1)
})
