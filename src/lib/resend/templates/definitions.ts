import {
  getDefaultArchiveUrl,
  getSectionHeaderUrl,
  NEWSLETTER_SECTION_HEADERS,
} from '@/lib/resend/templates/constants'
import {
  buildArchiveLinkRow,
  buildContentSlotRow,
  buildEmailShell,
  buildEventDetailsRow,
  buildGreenButtonRow,
  buildMinimalPlainText,
  buildNewsletterSection,
  buildReadOnlineTopLink,
  buildSubscribeForwardSection,
  buildSupportSection,
  buildStruggleSection,
  buildTextHeaderBar,
  buildTopEmailHeader,
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
  text: string
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
        html: buildTopEmailHeader(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.perspective),
          'Pythoness Perspective'
        ),
      },
      { html: buildReadOnlineTopLink('READ_ONLINE_URL') },
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
      { html: buildContentSlotRow('MAIN_FEATURE_HTML') },
      {
        html: buildNewsletterSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.toolSpotlight),
          'Tool Spotlight',
          'TOOL_SPOTLIGHT_HTML'
        ),
      },
      {
        html: buildStruggleSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.struggle)
        ),
      },
      {
        html: buildNewsletterSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.fireHorse),
          'Fire Horse Wisdom',
          'FIRE_HORSE_HTML'
        ),
      },
      { html: buildUpNextSection(sectionUrl(NEWSLETTER_SECTION_HEADERS.upNext)) },
      {
        html: buildSupportSection(
          siteUrl,
          sectionUrl(NEWSLETTER_SECTION_HEADERS.support)
        ),
      },
      { html: buildContentSlotRow('SUPPORT_HTML') },
    ],
  })

  return {
    name: 'pythoness-perspective-newsletter',
    alias: 'pythoness-perspective-newsletter',
    from: getNewsletterFrom(),
    subject: '{{{SUBJECT_LINE}}}',
    html,
    text: buildMinimalPlainText('READ_ONLINE_URL'),
    variables: [
      stringVar('SUBJECT_LINE', 'New from Pythoness Perspective'),
      stringVar('PREHEADER'),
      stringVar('THIS_WEEK_HTML'),
      stringVar('TLDR_HTML'),
      stringVar('MAIN_FEATURE_HTML'),
      stringVar('TOOL_SPOTLIGHT_HTML'),
      stringVar('STRUGGLE_HTML'),
      stringVar('FIRE_HORSE_HTML'),
      stringVar('UP_NEXT_HTML'),
      stringVar('SUPPORT_HTML'),
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
        html: buildTopEmailHeader(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.brand),
          'Pythoness Programmer'
        ),
      },
      {
        html: buildTextHeaderBar('{{{REMINDER_HEADLINE}}}', 'Event reminder'),
      },
      { html: buildEventDetailsRow() },
      { html: buildContentSlotRow('BODY_HTML') },
      {
        html: buildGreenButtonRow('{{{CALENDAR_URL}}}', 'Add to calendar →'),
      },
    ],
  })

  return {
    name: 'pythoness-event-reminder',
    alias: 'pythoness-event-reminder',
    from: getNewsletterFrom(),
    subject: 'Reminder: {{{EVENT_NAME}}}',
    html,
    text: buildMinimalPlainText(),
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
        html: buildTopEmailHeader(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.brand),
          'Pythoness Programmer'
        ),
      },
      { html: buildReadOnlineTopLink('POST_URL') },
      {
        html: buildTextHeaderBar('Lab Notes', 'New on the blog'),
      },
      { html: buildContentSlotRow('BODY_HTML') },
    ],
  })

  return {
    name: 'pythoness-lab-notes-update',
    alias: 'pythoness-lab-notes-update',
    from: getNewsletterFrom(),
    subject: 'New Lab Note: {{{POST_TITLE}}}',
    html,
    text: buildMinimalPlainText('POST_URL'),
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
        html: buildTopEmailHeader(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.brand),
          'Pythoness Programmer'
        ),
      },
      {
        html: buildNewsletterSection(
          sectionUrl(NEWSLETTER_SECTION_HEADERS.thisMonth),
          'This month',
          'RECAP_INTRO_HTML'
        ),
      },
      {
        html: buildTextHeaderBar('{{{RECAP_MONTH}}}', '{{{RECAP_TITLE}}}'),
      },
      { html: buildContentSlotRow('HIGHLIGHTS_HTML') },
      { html: buildContentSlotRow('BODY_HTML') },
      { html: buildArchiveLinkRow(archiveUrl) },
      {
        html: buildSupportSection(
          siteUrl,
          sectionUrl(NEWSLETTER_SECTION_HEADERS.support)
        ),
      },
      { html: buildContentSlotRow('SUPPORT_HTML') },
    ],
  })

  return {
    name: 'pythoness-monthly-recap',
    alias: 'pythoness-monthly-recap',
    from: getNewsletterFrom(),
    subject: '{{{RECAP_MONTH}}}: {{{RECAP_TITLE}}}',
    html,
    text: buildMinimalPlainText(),
    variables: [
      stringVar('RECAP_MONTH'),
      stringVar('RECAP_TITLE'),
      stringVar('RECAP_INTRO_HTML'),
      stringVar('HIGHLIGHTS_HTML'),
      stringVar('BODY_HTML'),
      stringVar('SUPPORT_HTML'),
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
