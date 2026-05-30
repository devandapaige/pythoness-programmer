#!/usr/bin/env node
/**
 * Extract Resend broadcast variable HTML from a newsletter MDX export body.
 * Usage: node scripts/extract-resend-variables.js build-your-automation-playbook
 */

const fs = require('fs')
const path = require('path')

const slug = process.argv[2] || 'build-your-automation-playbook'
const mdxPath = path.join(
  __dirname,
  `../src/content/newsletter/posts/${slug}.mdx`
)
const outPath = path.join(
  __dirname,
  `../src/content/newsletter/posts/resend-snippets/${slug}-variables.html`
)

const raw = fs.readFileSync(mdxPath, 'utf8')
const bodyMatch = raw.match(
  /<div class="newsletter-exported-body">([\s\S]*)<\/div>\s*$/m
)
if (!bodyMatch) {
  console.error('No newsletter-exported-body found')
  process.exit(1)
}

const simplifyChunk = (chunk) => {
  let html = chunk
  html = html.replace(/<style>[\s\S]*?<\/style>/gi, '')
  html = html.replace(
    /<div style="padding-left:10px;padding-right:10px"><div style="padding-bottom:20px[^"]*"[^>]*>(?:<a[^>]*>)?<img[^>]*\/?>(?:<\/a>)?<\/div><\/div>/gi,
    ''
  )
  html = html.replace(
    /<div style="font-size:0px[^"]*"[^>]*>[\s\S]*?<\/div><\/div>/gi,
    '\n<hr />\n'
  )
  html = html.replace(/<div[^>]*>/gi, '')
  html = html.replace(/<\/div>/gi, '\n')
  html = html
    .replace(/<p[^>]*>/gi, '<p>')
    .replace(/<h2[^>]*>/gi, '<h2>')
    .replace(/<h3[^>]*>/gi, '<h3>')
    .replace(/<ul[^>]*>/gi, '<ul>')
    .replace(/<li[^>]*>/gi, '<li>')
    .replace(/<b>/gi, '<strong>')
    .replace(/<\/b>/gi, '<\/strong>')
    .replace(/<a class="link" /gi, '<a ')
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(/&amp;/g, '&')
    .replace(/[ \t]+/g, ' ')
    .replace(/>\s+</g, '>\n<')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  return html
}

const sliceBetween = (html, startMarker, endMarker) => {
  const start = html.indexOf(startMarker)
  if (start < 0) return ''
  const end = endMarker ? html.indexOf(endMarker, start + startMarker.length) : html.length
  if (end < 0) return simplifyChunk(html.slice(start))
  return simplifyChunk(html.slice(start, end))
}

const body = bodyMatch[1]

const sections = [
  {
    key: 'THIS_WEEK_HTML',
    content: sliceBetween(body, 'Four weeks ago', '~3 min read'),
  },
  {
    key: 'TLDR_HTML',
    content: sliceBetween(body, '~3 min read', 'MAIN FEATURE — Building'),
  },
  {
    key: 'MAIN_FEATURE_HTML',
    content: sliceBetween(body, 'MAIN FEATURE — Building', 'CURSOR / VSCODE TIP'),
  },
  {
    key: 'TOOL_SPOTLIGHT_HTML',
    content: sliceBetween(body, 'CURSOR / VSCODE TIP', 'Your tech struggles, reflected back'),
  },
  {
    key: 'STRUGGLE_HTML',
    content: sliceBetween(
      body,
      'Your tech struggles, reflected back',
      "The Fire Horse's Callout"
    ),
  },
  {
    key: 'FIRE_HORSE_HTML',
    content: sliceBetween(
      body,
      "The Fire Horse's Callout",
      "WHAT'S NEXT"
    ),
  },
  {
    key: 'UP_NEXT_HTML',
    content: sliceBetween(body, "WHAT'S NEXT", 'The Pythoness Perspective is free'),
  },
  {
    key: 'SUPPORT_HTML',
    content: sliceBetween(body, 'The Pythoness Perspective is free', ''),
  },
]

const fm = raw.match(/^---([\s\S]*?)---/m)
const subject =
  fm?.[1]?.match(/subject_line:\s*(.+)/)?.[1]?.trim() ||
  'Your playbook is the system. Not the tool.'
const description =
  fm?.[1]
    ?.match(/description:\s*>-?\s*([\s\S]*?)(?=\nauthor:|\nimage:|\ntags:)/)?.[1]
    ?.replace(/\n\s+/g, ' ')
    ?.trim() || ''

let out = `<!--
  Resend broadcast variables — ${slug}
  Copy each block into the matching Resend template variable.
  Do not wrap in <table> or paste section header images (template provides those).
-->

<!-- SUBJECT_LINE -->
${subject}

<!-- PREHEADER -->
${description}

<!-- READ_ONLINE_URL -->
https://www.pythonessprogrammer.com/newsletter/${slug}

`

for (const { key, content } of sections) {
  if (!content) {
    console.warn(`Warning: empty section ${key}`)
  }
  out += `<!-- ${key} -->\n${content}\n\n`
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, out)
console.log(`Wrote ${outPath}`)
