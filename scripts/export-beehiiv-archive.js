/**
 * One-time export: Beehiiv posts → src/content/newsletter/posts/*.mdx
 *
 * Usage (from repo root, with .env.local):
 *   node scripts/export-beehiiv-archive.js
 */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
require('dotenv').config({ path: path.join(process.cwd(), '.env.local') })
require('dotenv').config()

const BEEHIIV_API_BASE_URL = 'https://api.beehiiv.com/v2'
const LIST_PAGE_LIMIT = 50
const OUTPUT_DIR = path.join(process.cwd(), 'src/content/newsletter/posts')

// Inline HTML helpers (mirrors src/lib/beehiiv/html.ts for Node script use)
const sanitizeHtml = require('sanitize-html')

const SANITIZE_OPTIONS = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    'img', 'h1', 'h2', 'h3', 'h4', 'figure', 'figcaption', 'video', 'source',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'span', 'div', 'section', 'article', 'style',
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    '*': ['class', 'id', 'style', 'align', 'width', 'height', 'colspan', 'rowspan'],
    a: ['href', 'name', 'target', 'rel', 'title'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    video: ['src', 'controls', 'width', 'height', 'poster'],
    source: ['src', 'type'],
    td: ['colspan', 'rowspan'],
    th: ['colspan', 'rowspan'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowVulnerableTags: true,
}

function extractElementInnerHtmlById(html, elementId) {
  const openTagPattern = new RegExp(
    `<([a-z][a-z0-9]*)\\b[^>]*\\bid=["']${elementId}["'][^>]*>`,
    'i'
  )
  const openMatch = openTagPattern.exec(html)
  if (!openMatch || openMatch.index === undefined) return null

  const tagName = openMatch[1].toLowerCase()
  const contentStart = openMatch.index + openMatch[0].length
  const tagPattern = new RegExp(`</${tagName}>|<${tagName}\\b`, 'gi')
  tagPattern.lastIndex = contentStart

  let depth = 1
  let match = tagPattern.exec(html)
  while (match) {
    if (match[0].startsWith(`</${tagName}`)) {
      depth -= 1
      if (depth === 0) return html.slice(contentStart, match.index).trim()
    } else {
      depth += 1
    }
    match = tagPattern.exec(html)
  }
  return null
}

function extractAndSanitizePostHtml(rawHtml) {
  if (!rawHtml?.trim()) return ''
  const trimmed = rawHtml.trim()
  const extracted =
    extractElementInnerHtmlById(trimmed, 'content-blocks') ||
    extractElementInnerHtmlById(trimmed, 'beehiiv__body') ||
    (trimmed.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1]?.trim() ?? trimmed)
  return sanitizeHtml(extracted, SANITIZE_OPTIONS).trim()
}

function pickRawPostHtml(content) {
  if (!content) return ''
  const candidates = [
    content.free?.web,
    content.free?.rss,
    content.free?.email,
    content.premium?.web,
    content.premium?.email,
  ]
  for (const c of candidates) {
    if (c?.trim()) return c
  }
  return ''
}

function isPublishedPost(post) {
  return post.slug?.trim() && !post.hidden_from_feed && post.status !== 'draft'
}

function formatDate(post) {
  const ts = post.displayed_date ?? post.publish_date ?? post.created
  return new Date(ts * 1000).toISOString().slice(0, 10)
}

async function fetchJson(url, apiKey) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error(`Beehiiv API ${res.status}: ${await res.text()}`)
  }
  return res.json()
}

async function listAllPosts(credentials) {
  const posts = []
  let page = 1
  let totalPages = 1

  while (page <= totalPages) {
    const params = new URLSearchParams({
      limit: String(LIST_PAGE_LIMIT),
      page: String(page),
      status: 'all',
      platform: 'all',
      order_by: 'publish_date',
      direction: 'desc',
    })
    params.append('expand', 'free_web_content')
    params.append('expand', 'free_rss_content')

    const url = `${BEEHIIV_API_BASE_URL}/publications/${credentials.publicationId}/posts?${params}`
    const data = await fetchJson(url, credentials.apiKey)
    totalPages = data.total_pages || 1

    for (const post of data.data) {
      if (isPublishedPost(post)) posts.push(post)
    }
    page += 1
  }

  return posts
}

function writeMdx(post, bodyHtml) {
  const frontmatter = {
    title: post.title || post.subject_line,
    date: formatDate(post),
    description: post.preview_text || post.meta_default_description || '',
    author: 'Amanda Nelson',
    image: post.thumbnail_url || '',
    subtitle: post.subtitle || '',
    subject_line: post.subject_line || '',
    beehiiv_id: post.id,
    authors: post.authors || [],
  }

  const body = bodyHtml
    ? `<div class="newsletter-exported-body">\n${bodyHtml}\n</div>\n`
    : '<!-- Export produced empty body; check Beehiiv visibility or API expand flags. -->\n'

  const file = matter.stringify(body, frontmatter)
  const outPath = path.join(OUTPUT_DIR, `${post.slug}.mdx`)
  fs.writeFileSync(outPath, file, 'utf8')
  return outPath
}

async function main() {
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID in .env.local')
    process.exit(1)
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  console.log('Fetching posts from Beehiiv...')
  const posts = await listAllPosts({ apiKey, publicationId })
  console.log(`Found ${posts.length} published posts.`)

  let exported = 0
  let empty = 0

  for (const post of posts) {
    const rawHtml = pickRawPostHtml(post.content)
    const bodyHtml = extractAndSanitizePostHtml(rawHtml)
    if (!bodyHtml) empty += 1
    const outPath = writeMdx(post, bodyHtml)
    exported += 1
    console.log(`  ${post.slug} → ${path.relative(process.cwd(), outPath)}${bodyHtml ? '' : ' (empty body)'}`)
  }

  console.log(`\nDone. Exported ${exported} issues (${empty} with empty body).`)
  if (empty > 0) {
    console.warn('Empty bodies usually mean API expand failed or post has no web content.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
