import {
  markNewsletterSectionLabels,
  normalizeNewsletterBodyHtml,
  rewriteLegacyNewsletterLinks,
  shouldMarkSectionLabel,
} from '@/lib/newsletter/normalize-body-html'

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

  it('rewrites legacy signup links to the on-site Resend subscribe page', () => {
    const input =
      '<a href="https://newsletter.pythonessprogrammer.com/?modal=signup">Join</a>'
    const output = rewriteLegacyNewsletterLinks(input)

    expect(output).toContain('https://pythonessprogrammer.com/newsletter/subscribe')
    expect(output).not.toContain('beehiiv')
    expect(output).not.toContain('modal=signup')
  })

  it('marks section labels but not inline bold emphasis in paragraphs', () => {
    expect(
      shouldMarkSectionLabel(
        'Still useful. This year we\'re adding the letter <b>R</b> from <b>Y.O.U.R.</b>'
      )
    ).toBe(false)
    expect(shouldMarkSectionLabel('yours <b>and</b> the people')).toBe(false)
    expect(shouldMarkSectionLabel('<b>R</b> is the discipline of designing')).toBe(false)
    expect(shouldMarkSectionLabel('<b>What stays</b>')).toBe(true)
    expect(shouldMarkSectionLabel('<b>Week 2:</b> Rest of the section')).toBe(true)

    const output = markNewsletterSectionLabels(
      '<p>Still useful. letter <b>R</b> from</p><p><b>What stays</b></p>'
    )
    expect(output).toContain('<p>Still useful. letter <b>R</b> from</p>')
    expect(output).toContain('class="newsletter-section-label"')
    expect(output).not.toMatch(/letter <b[^>]*newsletter-section-label[^>]*>R<\/b>/)
  })

  it('rewrites legacy Beehiiv issue URLs to the on-site archive', () => {
    const input =
      '<a href="https://pythoness.beehiiv.com/p/digital-spring-cleaning-deepening-our-grit-journey?utm_source=x">Read</a>'
    const output = rewriteLegacyNewsletterLinks(input)

    expect(output).toContain(
      'https://pythonessprogrammer.com/newsletter/digital-spring-cleaning-deepening-our-grit-journey?utm_source=x'
    )
    expect(output).not.toContain('beehiiv.com')
  })
})
