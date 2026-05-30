import {
  buildEmailShell,
  buildFooterHtml,
  buildSectionHeaderImage,
  buildTopEmailHeader,
  buildUpNextSection,
} from '@/lib/resend/templates/shell'
import { getAllBroadcastTemplates } from '@/lib/resend/templates/definitions'
import {
  EMAIL_HOME_URL,
  STRUGGLE_FORM_URL,
  getBrandHeaderUrl,
  getPerspectiveHeaderUrl,
  getUpNextHeaderUrl,
  MAILING_ADDRESS,
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
    expect(newsletter.html).toContain(EMAIL_HOME_URL)
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.thisWeek)
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.tldr)
    expect(newsletter.html).toContain('alt="This Week"')
    expect(newsletter.html).toContain('<!-- begin:THIS_WEEK_HTML -->')
    expect(newsletter.html).toContain('{{{THIS_WEEK_HTML}}}')
    expect(newsletter.html).not.toContain(
      'padding-bottom:12px;padding-left:10px;padding-right:10px;padding-top:12px'
    )
    expect(newsletter.html).toContain('{{{TLDR_HTML}}}')
    expect(newsletter.html).toContain('{{{MAIN_FEATURE_HTML}}}')
    expect(newsletter.html).toContain('{{{TOOL_SPOTLIGHT_HTML}}}')
    expect(newsletter.html).toContain('{{{STRUGGLE_HTML}}}')
    expect(newsletter.html).toContain('{{{FIRE_HORSE_HTML}}}')
    expect(newsletter.html).toContain('{{{SUPPORT_HTML}}}')
    expect(newsletter.html).not.toContain('{{{EXTRA_SECTIONS_HTML}}}')
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.toolSpotlight)
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.struggle)
    expect(newsletter.html).toContain(NEWSLETTER_SECTION_HEADERS.fireHorse)
    expect(newsletter.html).toContain(STRUGGLE_FORM_URL)
    expect(newsletter.html).toContain('{{{RESEND_UNSUBSCRIBE_URL}}}')
    expect(newsletter.html).toContain('https://pythonessprogrammer.com/images/email-signature.png')
    expect(newsletter.html).toContain('{{{READ_ONLINE_URL}}}')
    expect(newsletter.html).toContain('>Read Online</a>')
    expect(newsletter.html).not.toContain('Read the full issue')
    expect(newsletter.text).toContain('Read online: {{{READ_ONLINE_URL}}}')
    expect(newsletter.text).not.toContain('{{{THIS_WEEK_HTML}}}')
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
    expect(eventTemplate?.html).toContain('<!-- begin:BODY_HTML -->')
    expect(eventTemplate?.html).toContain('{{{EVENT_NAME}}}')
    expect(eventTemplate?.html).not.toContain(
      'padding-bottom:12px;padding-left:10px;padding-right:10px;padding-top:12px'
    )
    expect(eventTemplate?.html).toContain(getBrandHeaderUrl())
    expect(eventTemplate?.html).not.toContain(getPerspectiveHeaderUrl())
    expect(eventTemplate?.html).toContain(EMAIL_HOME_URL)
  })

  it('buildEmailShell footer includes subscribe link', () => {
    const html = buildEmailShell({
      siteUrl,
      sections: [{ html: '<p>Test body</p>' }],
    })

    expect(html).toContain(buildFooterHtml(siteUrl))
    expect(html).toContain('/newsletter/subscribe')
    expect(html).toContain(MAILING_ADDRESS)
    expect(html).toContain(STRUGGLE_FORM_URL)
    expect(html).toContain('Share it in The Struggle is Real')
  })

  it('monthly recap uses brand header and This month section', () => {
    const recap = getAllBroadcastTemplates(siteUrl).find(
      (template) => template.alias === 'pythoness-monthly-recap'
    )

    expect(recap?.html).toContain(getBrandHeaderUrl())
    expect(recap?.html).toContain(NEWSLETTER_SECTION_HEADERS.thisMonth)
    expect(recap?.html).not.toContain(NEWSLETTER_SECTION_HEADERS.thisWeek)
    expect(recap?.html).toContain('<!-- begin:HIGHLIGHTS_HTML -->')
    expect(recap?.html).toContain('{{{SUPPORT_HTML}}}')
    expect(recap?.variables.map((v) => v.key)).toContain('SUPPORT_HTML')
  })

  it('lab notes uses top Read Online and a single BODY_HTML slot', () => {
    const labNotes = getAllBroadcastTemplates(siteUrl).find(
      (template) => template.alias === 'pythoness-lab-notes-update'
    )

    expect(labNotes?.html).toContain('>Read Online</a>')
    expect(labNotes?.html).toContain('{{{POST_URL}}}')
    expect(labNotes?.html).not.toContain('Read on the blog')
    expect(labNotes?.html).not.toContain('{{{POST_DESCRIPTION}}}')
    expect(labNotes?.html).toContain('<!-- begin:BODY_HTML -->')
    expect(labNotes?.html).toContain('{{{BODY_HTML}}}')
  })

  it('buildTopEmailHeader links to homepage', () => {
    const header = buildTopEmailHeader(getBrandHeaderUrl(), 'Pythoness Programmer')
    expect(header).toContain(EMAIL_HOME_URL)
    expect(header).toContain(getBrandHeaderUrl())
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
