/**
 * Prepare Beehiiv-exported HTML for on-site display (dark green background).
 * Strips inline colors/fonts from headings so site CSS can apply Norwester + white text.
 */
export function normalizeNewsletterBodyHtml(html: string): string {
  let result = html

  // Beehiiv export includes empty <style> placeholders; remove to avoid stray rules.
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
