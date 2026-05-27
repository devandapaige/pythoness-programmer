import { getNewsletterSubscribeUrl, getSiteBaseUrl } from '@/lib/newsletter/config'

const SECTION_LABEL_CLASS = 'newsletter-section-label'

/**
 * Prepare legacy newsletter HTML exports for on-site display (dark green background).
 * Strips inline colors/fonts from headings so site CSS can apply Norwester + white text.
 */
export function normalizeNewsletterBodyHtml(html: string): string {
  let result = rewriteLegacyNewsletterLinks(html)

  // Legacy exports include empty <style> placeholders; remove to avoid stray rules.
  result = result.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')

  result = markNewsletterSectionLabels(result)

  result = result.replace(/<h([1-6])(\s[^>]*)?>/gi, (_match, level: string, attrs = '') => {
    const withoutStyle = attrs.replace(/\s*style\s*=\s*(['"])[\s\S]*?\1/gi, '')
    const classMatch = withoutStyle.match(/\sclass\s*=\s*(['"])([^'"]*)\1/i)

    if (classMatch) {
      const quote = classMatch[1]
      const classes = classMatch[2].includes('newsletter-heading')
        ? classMatch[2]
        : `${classMatch[2]} newsletter-heading`
      const withClass = withoutStyle.replace(/\sclass\s*=\s*(['"])[^'"]*\1/i, ` class=${quote}${classes}${quote}`)
      return `<h${level}${withClass}>`
    }

    return `<h${level}${withoutStyle} class="newsletter-heading">`
  })

  return result
}

/**
 * Beehiiv export uses <b> for both section labels ("Week 2:") and inline emphasis ("R").
 * CSS :first-child on <b> wrongly treats the first element child as a label when prose
 * precedes it (text nodes are ignored by :first-child). Mark real labels in HTML instead.
 */
export function markNewsletterSectionLabels(html: string): string {
  return html.replace(/<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi, (_match, attrs = '', inner: string) => {
    if (!shouldMarkSectionLabel(inner)) {
      return `<p${attrs}>${inner}</p>`
    }

    let marked = false
    const updated = inner.replace(/<(b|strong)(\s[^>]*)?>/i, (openTag, tag: string, tagAttrs = '') => {
      if (marked) return openTag
      marked = true
      return appendClassToTag(tag, tagAttrs, SECTION_LABEL_CLASS)
    })

    return `<p${attrs}>${updated}</p>`
  })
}

export function shouldMarkSectionLabel(paragraphInner: string): boolean {
  const trimmed = paragraphInner.trim()
  const openingBold = trimmed.match(/^(<(b|strong)(\s[^>]*)?>)([\s\S]*?)(<\/\2>)/i)
  if (!openingBold) return false

  const labelText = openingBold[4].replace(/<[^>]+>/g, '').trim()
  const afterLabel = trimmed.slice(openingBold[0].length).trim()

  if (afterLabel.length === 0) return true
  return labelText.endsWith(':')
}

function appendClassToTag(tag: string, attrs: string, className: string): string {
  if (/\bnewsletter-section-label\b/.test(attrs)) {
    return `<${tag}${attrs}>`
  }
  if (/\bclass\s*=/.test(attrs)) {
    const withClass = attrs.replace(
      /\bclass\s*=\s*(['"])([^'"]*)\1/i,
      (_m, quote: string, classes: string) =>
        `class=${quote}${classes} ${className}${quote}`
    )
    return `<${tag}${withClass}>`
  }
  return `<${tag}${attrs} class="${className}">`
}

/**
 * Map legacy newsletter URLs to on-site archive or Resend signup.
 */
export function rewriteLegacyNewsletterLinks(html: string): string {
  const subscribeBase = getNewsletterSubscribeUrl()
  const siteBase = getSiteBaseUrl().replace(/\/+$/, '')

  let result = html.replace(
    /https?:\/\/newsletter\.pythonessprogrammer\.com\/(?:\?modal=signup|subscribe)([^"'>\s]*)/gi,
    (_match, trailing = '') => {
      const extra = trailing.replace(/&amp;/g, '&')
      const normalizedExtra = extra.startsWith('&') ? `?${extra.slice(1)}` : extra
      return `${subscribeBase}${normalizedExtra}`
    }
  )

  result = result.replace(
    /https?:\/\/(?:www\.)?pythoness\.beehiiv\.com\/p\/([a-z0-9-]+)([^"'>\s]*)/gi,
    (_match, slug: string, trailing = '') => {
      const extra = trailing.replace(/&amp;/g, '&')
      return `${siteBase}/newsletter/${slug}${extra}`
    }
  )

  return result
}

/** @deprecated Use rewriteLegacyNewsletterLinks */
export const rewriteBeehiivSignupLinks = rewriteLegacyNewsletterLinks
