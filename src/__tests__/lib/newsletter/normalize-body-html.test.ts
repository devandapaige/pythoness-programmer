import { normalizeNewsletterBodyHtml } from '@/lib/newsletter/normalize-body-html'

describe('normalizeNewsletterBodyHtml', () => {
  it('removes inline styles from headings and adds newsletter-heading class', () => {
    const input =
      '<h2 style="color:#2A2A2A;font-family:Open Sans;font-size:24px;">Tool Spotlight</h2>'
    const output = normalizeNewsletterBodyHtml(input)

    expect(output).not.toContain('color:#2A2A2A')
    expect(output).toContain('class="newsletter-heading"')
    expect(output).toMatch(/<h2[^>]*>Tool Spotlight<\/h2>/)
  })

  it('strips embedded style blocks', () => {
    const input = '<style>.x{color:red}</style><h2>Title</h2>'
    const output = normalizeNewsletterBodyHtml(input)

    expect(output).not.toContain('<style')
    expect(output).toContain('newsletter-heading')
  })
})
