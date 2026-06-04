#!/usr/bin/env node
/**
 * Create a draft Resend broadcast from a newsletter variables JSON file.
 *
 * Usage:
 *   node scripts/resend/create-broadcast-draft.js --dry-run
 *   node scripts/resend/create-broadcast-draft.js --slug human-eyes-readable-contrast-june-2026
 *   node scripts/resend/create-broadcast-draft.js --slug may-2026-monthly-recap
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

const PERSPECTIVE_NEWSLETTER_ALIAS = 'pythoness-perspective-newsletter'
const MONTHLY_RECAP_ALIAS = 'pythoness-monthly-recap'

const PERSPECTIVE_VARIABLE_KEYS = [
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

const MONTHLY_RECAP_VARIABLE_KEYS = [
  'RECAP_MONTH',
  'RECAP_TITLE',
  'RECAP_INTRO_HTML',
  'HIGHLIGHTS_HTML',
  'BODY_HTML',
  'SUPPORT_HTML',
]

const MONTHLY_RECAP_OPTIONAL_KEYS = ['ARCHIVE_URL']

const getRequiredVariableKeys = (templateAlias) => {
  if (templateAlias === MONTHLY_RECAP_ALIAS) {
    return MONTHLY_RECAP_VARIABLE_KEYS
  }
  return PERSPECTIVE_VARIABLE_KEYS
}

const getOptionalVariableKeys = (templateAlias) => {
  if (templateAlias === MONTHLY_RECAP_ALIAS) {
    return MONTHLY_RECAP_OPTIONAL_KEYS
  }
  return []
}

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
  const templateAlias = raw.templateAlias ?? PERSPECTIVE_NEWSLETTER_ALIAS
  const broadcastName =
    raw.broadcastName ?? `${issueSlug} — Pythoness Perspective`

  const requiredKeys = getRequiredVariableKeys(templateAlias)
  const optionalKeys = getOptionalVariableKeys(templateAlias)
  const allKeys = [...requiredKeys, ...optionalKeys]

  const variables = {}
  for (const key of allKeys) {
    if (raw[key] !== undefined) {
      variables[key] = raw[key]
    }
  }

  const missing = requiredKeys.filter((key) => variables[key] === undefined)
  if (missing.length > 0) {
    throw new Error(
      `Missing template variables in ${snippetPath}: ${missing.join(', ')}`
    )
  }

  const localImages = Array.isArray(raw.localImages) ? raw.localImages : []

  return { templateAlias, broadcastName, variables, localImages }
}

const findBroadcastTemplate = (alias) => {
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
  const template = findBroadcastTemplate(templateAlias)
  let { html, subject, text } = renderBroadcast(template, variables)

  if (!skipEmbed && localImages.length > 0) {
    html = embedLocalImagesInHtml(html, localImages, ROOT)
    console.log(
      `Embedded ${localImages.length} compressed image(s) as data URLs (uses emailPath when set).`
    )
  } else if (
    localImages.length === 0 &&
    templateAlias === PERSPECTIVE_NEWSLETTER_ALIAS
  ) {
    console.warn(
      'No localImages in snippet JSON — draft may show broken images until site is deployed.'
    )
  }

  console.log(`Issue slug: ${slug}`)
  console.log(`Template: ${template.alias}`)
  console.log(`Broadcast name: ${broadcastName}`)
  console.log(`Subject: ${subject}`)
  const htmlBytes = Buffer.byteLength(html, 'utf8')
  console.log(`HTML size: ${htmlBytes} bytes`)
  if (htmlBytes > 102_400) {
    console.warn(
      'Warning: HTML exceeds ~100KB — Gmail may clip the message ("View entire message"). Use emailPath in localImages (compressed files under public/images/email/).'
    )
  }

  if (isDryRun) {
    console.log('\nDry run — no API call. Remove --dry-run to create the draft.')
    return
  }

  const apiKey = getApiKey()
  const from = getNewsletterFrom()

  if (updateBroadcastId) {
    await resendFetch(apiKey, `/broadcasts/${updateBroadcastId}`, {
      method: 'PATCH',
      body: JSON.stringify({ html, text, subject, name: broadcastName }),
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
