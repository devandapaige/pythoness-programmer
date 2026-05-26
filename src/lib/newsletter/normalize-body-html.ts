import { getNewsletterSubscribeUrl, getSiteBaseUrl } from '@/lib/newsletter/config'

/**
 * Prepare legacy newsletter HTML exports for on-site display (dark green background).
 * Strips inline colors/fonts from headings so site CSS can apply Norwester + white text.
 */
export function normalizeNewsletterBodyHtml(html: string): string {
  let result = rewriteLegacyNewsletterLinks(html)

  // Legacy exports include empty <style> placeholders; remove to avoid stray rules.
  result = result.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')

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
