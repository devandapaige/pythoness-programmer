import sanitizeHtml from 'sanitize-html'

import type { BeehiivPostContent } from '@/types/beehiiv'

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    'img',
    'h1',
    'h2',
    'h3',
    'h4',
    'figure',
    'figcaption',
    'video',
    'source',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'span',
    'div',
    'section',
    'article',
    'style',
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

const extractElementInnerHtmlById = (html: string, elementId: string): string | null => {
  const openTagPattern = new RegExp(
    `<([a-z][a-z0-9]*)\\b[^>]*\\bid=["']${elementId}["'][^>]*>`,
    'i'
  )
  const openMatch = openTagPattern.exec(html)
  if (!openMatch || openMatch.index === undefined) {
    return null
  }

  const tagName = openMatch[1].toLowerCase()
  const contentStart = openMatch.index + openMatch[0].length
  const tagPattern = new RegExp(`</${tagName}>|<${tagName}\\b`, 'gi')
  tagPattern.lastIndex = contentStart

  let depth = 1
  let match: RegExpExecArray | null = tagPattern.exec(html)

  while (match) {
    if (match[0].startsWith(`</${tagName}`)) {
      depth -= 1
      if (depth === 0) {
        return html.slice(contentStart, match.index).trim()
      }
    } else {
      depth += 1
    }
    match = tagPattern.exec(html)
  }

  return null
}

const extractFromHtml = (html: string): string => {
  const trimmed = html.trim()
  if (!trimmed) return ''

  const contentBlocks = extractElementInnerHtmlById(trimmed, 'content-blocks')
  if (contentBlocks) {
    return contentBlocks
  }

  const beehiivBody = extractElementInnerHtmlById(trimmed, 'beehiiv__body')
  if (beehiivBody) {
    return beehiivBody
  }

  const bodyMatch = trimmed.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  if (bodyMatch?.[1]?.trim()) {
    return bodyMatch[1].trim()
  }

  return trimmed
}

export const pickRawPostHtml = (content?: BeehiivPostContent): string => {
  if (!content) return ''

  const candidates = [
    content.free?.web,
    content.free?.rss,
    content.free?.email,
    content.premium?.web,
    content.premium?.email,
  ]

  for (const candidate of candidates) {
    if (candidate?.trim()) {
      return candidate
    }
  }

  return ''
}

export const extractAndSanitizePostHtml = (rawHtml: string): string => {
  if (!rawHtml.trim()) return ''
  const extracted = extractFromHtml(rawHtml)
  return sanitizeHtml(extracted, SANITIZE_OPTIONS).trim()
}
