import {
  buildEmailShell,
  buildFooterHtml,
  buildSectionHeaderImage,
  buildUpNextSection,
} from '@/lib/resend/templates/shell'
import { getAllBroadcastTemplates } from '@/lib/resend/templates/definitions'
import {
  getPerspectiveHeaderUrl,
  getUpNextHeaderUrl,
  NEWSLETTER_SECTION_HEADERS,
} from '@/lib/resend/templates/constants'

describe('Resend broadcast templates', () => {
  const siteUrl = 'https://pythonessprogrammer.com'

  it('builds four template definitions', () => {
    const templates = getAllBroadcastTemplates(siteUrl)
    expect(templates).toHaveLength(4)
    expect(templates.map((template) => template.alias)).toEqual([
      'pythoness-perspective-newsletter',
      'pythoness-event-reminder',
      'pythoness-lab-notes-update',
      'pythoness-monthly-recap',
    ])
  })

  it('uses Beehiiv-style section headers and weekly newsletter slots', () => {
    const newsletter = getAllBroadcastTemplates(siteUrl)[0]

    expect(newsletter.html).toContain('padding-left:10px;padding-right:10px')
    expect(newsletter.html).toContain(getPerspectiveHeaderUrl())
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.thisWeek)
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.tldr)
    expect(newsletter.html).toContain('alt="This Week"')
    expect(newsletter.html).toContain('{{{THIS_WEEK_HTML}}}')
    expect(newsletter.html).toContain('{{{TLDR_HTML}}}')
    expect(newsletter.html).toContain('{{{MAIN_FEATURE_HTML}}}')
    expect(newsletter.html).toContain('{{{EXTRA_SECTIONS_HTML}}}')
    expect(newsletter.html).toContain('{{{RESEND_UNSUBSCRIBE_URL}}}')
    expect(newsletter.html).toContain('https://pythonessprogrammer.com/images/email-signature.png')
    expect(newsletter.html).toContain('{{{READ_ONLINE_URL}}}')
  })

  it('includes required variables for event reminder template', () => {
    const eventTemplate = getAllBroadcastTemplates(siteUrl).find(
      (template) => template.alias === 'pythoness-event-reminder'
    )

    expect(eventTemplate?.variables.map((variable) => variable.key)).toEqual([
      'REMINDER_HEADLINE',
      'EVENT_NAME',
      'EVENT_WHEN',
      'EVENT_WHERE',
      'CALENDAR_URL',
      'BODY_HTML',
    ])
    expect(eventTemplate?.html).toContain('{{{CALENDAR_URL}}}')
    expect(eventTemplate?.html).toContain(getPerspectiveHeaderUrl())
  })

  it('buildEmailShell footer includes subscribe link', () => {
    const html = buildEmailShell({
      siteUrl,
      sections: [{ html: '<p>Test body</p>' }],
    })

    expect(html).toContain(buildFooterHtml(siteUrl))
    expect(html).toContain('/newsletter/subscribe')
  })

  it('buildSectionHeaderImage matches newsletter export markup', () => {
    const section = buildSectionHeaderImage(
      getPerspectiveHeaderUrl(),
      'Pythoness Perspective'
    )
    expect(section).toContain('width:100%')
    expect(section).toContain('display:block')
    expect(section).not.toContain('<table role="presentation" width="100%" cellpadding="0"')
  })

  it('buildUpNextSection includes UP_NEXT_HTML slot', () => {
    const section = buildUpNextSection(getUpNextHeaderUrl())
    expect(section).toContain('{{{UP_NEXT_HTML}}}')
    expect(section).toContain(getUpNextHeaderUrl())
  })
})
