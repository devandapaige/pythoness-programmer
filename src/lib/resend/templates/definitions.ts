import {
  getDefaultArchiveUrl,
  getSectionHeaderUrl,
  NEWSLETTER_SECTION_HEADERS,
} from '@/lib/resend/templates/constants'
import {
  buildArchiveLinkSection,
  buildContentSlot,
  buildEmailShell,
  buildGreenButton,
  buildNewsletterSection,
  buildReadOnlineSection,
  buildSectionHeaderImage,
  buildSubscribeForwardSection,
  buildSupportSection,
  buildTextHeaderBar,
  buildUpNextSection,
} from '@/lib/resend/templates/shell'

export type ResendTemplateVariable = {
  key: string
  type: 'string' | 'number'
  fallbackValue?: string | number
}

export type BroadcastTemplateDefinition = {
  name: string
  alias: string
  from: string
  subject: string
  html: string
  variables: ResendTemplateVariable[]
}

const getSiteUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  'https://pythonessprogrammer.com'

const getNewsletterFrom = (): string =>
  process.env.NEWSLETTER_EMAIL_FROM ??
  'Pythoness Perspective <newsletter@pythonessprogrammer.com>'

const stringVar = (
  key: string,
  fallbackValue = ''
): ResendTemplateVariable => ({
  key,
  type: 'string',
  fallbackValue,
})

const sectionUrl = (path: string) => getSectionHeaderUrl(path)

export const buildNewsletterTemplate = (
  siteUrl = getSiteUrl()
): BroadcastTemplateDefinition => {
  const html = buildEmailShell({
    siteUrl,
    preheader: '{{{PREHEADER}}}',
    sections: [
      {
        html: buildSectionHeaderImage(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.perspective),
          'Pythoness Perspective'
        ),
      },
      {
        html: buildNewsletterSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.thisWeek),
          'This Week',
          'THIS_WEEK_HTML'
        ),
      },
      {
        html: buildNewsletterSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.tldr),
          "TLDR (Too Long, Didn't Read Summary)",
          'TLDR_HTML'
        ),
      },
      {
        html: buildSubscribeForwardSection(
          siteUrl,
          sectionUrl(NEWSLETTER_SECTION_HEADERS.subscribe)
        ),
      },
      { html: buildContentSlot('MAIN_FEATURE_HTML') },
      { html: buildContentSlot('EXTRA_SECTIONS_HTML') },
      { html: buildUpNextSection(sectionUrl(NEWSLETTER_SECTION_HEADERS.upNext)) },
      { html: buildReadOnlineSection() },
      {
        html: buildSupportSection(
          siteUrl,
          sectionUrl(NEWSLETTER_SECTION_HEADERS.support)
        ),
      },
    ],
  })

  return {
    name: 'pythoness-perspective-newsletter',
    alias: 'pythoness-perspective-newsletter',
    from: getNewsletterFrom(),
    subject: '{{{SUBJECT_LINE}}}',
    html,
    variables: [
      stringVar('SUBJECT_LINE', 'New from Pythoness Perspective'),
      stringVar('PREHEADER'),
      stringVar('THIS_WEEK_HTML'),
      stringVar('TLDR_HTML'),
      stringVar('MAIN_FEATURE_HTML'),
      stringVar('EXTRA_SECTIONS_HTML'),
      stringVar('UP_NEXT_HTML'),
      stringVar('READ_ONLINE_URL'),
    ],
  }
}

export const buildEventReminderTemplate = (
  siteUrl = getSiteUrl()
): BroadcastTemplateDefinition => {
  const html = buildEmailShell({
    siteUrl,
    sections: [
      {
        html: buildSectionHeaderImage(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.perspective),
          'Pythoness Perspective'
        ),
      },
      {
        html: buildTextHeaderBar('{{{REMINDER_HEADLINE}}}', 'Event reminder'),
      },
      {
        html: `
<div style="padding-bottom:12px;padding-left:10px;padding-right:10px;padding-top:12px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;">
    <tr>
      <td style="padding:20px 24px;font-family:'Open Sans','Segoe UI',sans-serif;font-size:16px;line-height:1.6;color:#2D2D2D;">
        <p style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:#2e3d2a;">{{{EVENT_NAME}}}</p>
        <p style="margin:0 0 8px 0;"><strong>When:</strong> {{{EVENT_WHEN}}}</p>
        <p style="margin:0;"><strong>Where:</strong> {{{EVENT_WHERE}}}</p>
      </td>
    </tr>
  </table>
</div>`.trim(),
      },
      { html: buildContentSlot('BODY_HTML') },
      {
        html: `<div style="padding-left:10px;padding-right:10px;">${buildGreenButton('{{{CALENDAR_URL}}}', 'Add to calendar →')}</div>`,
      },
    ],
  })

  return {
    name: 'pythoness-event-reminder',
    alias: 'pythoness-event-reminder',
    from: getNewsletterFrom(),
    subject: 'Reminder: {{{EVENT_NAME}}}',
    html,
    variables: [
      stringVar('REMINDER_HEADLINE', "You're invited"),
      stringVar('EVENT_NAME'),
      stringVar('EVENT_WHEN'),
      stringVar('EVENT_WHERE', 'Online'),
      stringVar('CALENDAR_URL'),
      stringVar('BODY_HTML'),
    ],
  }
}

export const buildLabNotesTemplate = (
  siteUrl = getSiteUrl()
): BroadcastTemplateDefinition => {
  const html = buildEmailShell({
    siteUrl,
    sections: [
      {
        html: buildSectionHeaderImage(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.perspective),
          'Pythoness Perspective'
        ),
      },
      {
        html: buildTextHeaderBar('Lab Notes', 'New on the blog'),
      },
      {
        html: `
<div style="padding-bottom:12px;padding-left:10px;padding-right:10px;padding-top:12px;">
  <h1 style="margin:0 0 12px 0;font-family:'Open Sans','Segoe UI',sans-serif;font-size:24px;line-height:1.3;color:#2e3d2a;">{{{POST_TITLE}}}</h1>
  <p style="margin:0 0 8px 0;font-family:'Open Sans','Segoe UI',sans-serif;font-size:16px;line-height:1.6;color:#2D2D2D;">{{{POST_DESCRIPTION}}}</p>
  <p style="margin:0;font-family:'Open Sans','Segoe UI',sans-serif;font-size:14px;line-height:1.5;color:#666666;">{{{PUBLISH_DATE}}}</p>
</div>`.trim(),
      },
      { html: buildContentSlot('BODY_HTML') },
      {
        html: `<div style="padding-left:10px;padding-right:10px;">${buildGreenButton('{{{POST_URL}}}', 'Read on the blog →')}</div>`,
      },
    ],
  })

  return {
    name: 'pythoness-lab-notes-update',
    alias: 'pythoness-lab-notes-update',
    from: getNewsletterFrom(),
    subject: 'New Lab Note: {{{POST_TITLE}}}',
    html,
    variables: [
      stringVar('POST_TITLE'),
      stringVar('POST_DESCRIPTION'),
      stringVar('POST_URL'),
      stringVar('PUBLISH_DATE'),
      stringVar('BODY_HTML'),
    ],
  }
}

export const buildMonthlyRecapTemplate = (
  siteUrl = getSiteUrl()
): BroadcastTemplateDefinition => {
  const archiveUrl = getDefaultArchiveUrl(siteUrl)

  const html = buildEmailShell({
    siteUrl,
    sections: [
      {
        html: buildSectionHeaderImage(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.perspective),
          'Pythoness Perspective'
        ),
      },
      {
        html: buildNewsletterSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.thisWeek),
          'This month',
          'RECAP_INTRO_HTML'
        ),
      },
      {
        html: buildTextHeaderBar('{{{RECAP_MONTH}}}', '{{{RECAP_TITLE}}}'),
      },
      { html: buildContentSlot('HIGHLIGHTS_HTML') },
      { html: buildContentSlot('BODY_HTML') },
      { html: buildArchiveLinkSection(archiveUrl) },
      {
        html: buildSupportSection(
          siteUrl,
          sectionUrl(NEWSLETTER_SECTION_HEADERS.support)
        ),
      },
    ],
  })

  return {
    name: 'pythoness-monthly-recap',
    alias: 'pythoness-monthly-recap',
    from: getNewsletterFrom(),
    subject: '{{{RECAP_MONTH}}}: {{{RECAP_TITLE}}}',
    html,
    variables: [
      stringVar('RECAP_MONTH'),
      stringVar('RECAP_TITLE'),
      stringVar('RECAP_INTRO_HTML'),
      stringVar('HIGHLIGHTS_HTML'),
      stringVar('BODY_HTML'),
      stringVar('ARCHIVE_URL', archiveUrl),
    ],
  }
}

export const getAllBroadcastTemplates = (
  siteUrl = getSiteUrl()
): BroadcastTemplateDefinition[] => [
  buildNewsletterTemplate(siteUrl),
  buildEventReminderTemplate(siteUrl),
  buildLabNotesTemplate(siteUrl),
  buildMonthlyRecapTemplate(siteUrl),
]
