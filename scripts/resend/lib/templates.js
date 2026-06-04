/**
 * Node-compatible template builders for the Resend setup script.
 * Mirrors src/lib/resend/templates/* — keep in sync when editing shell layout.
 */

const EMAIL_COLORS = {
  greenDark: '#2e3d2a',
  greenAccent: '#32d24d',
  greenHyperlink: '#156624',
  cream: '#f4f1d3',
  bodyText: '#2D2D2D',
  white: '#ffffff',
}

const EMAIL_FONTS =
  "'Open Sans','Segoe UI','Apple SD Gothic Neo','Lucida Grande','Lucida Sans Unicode',sans-serif"

const SIGNATURE_PATH = '/images/email-signature.png'

const EMAIL_HOME_URL = 'https://www.pythonessprogrammer.com/'

const STRUGGLE_FORM_URL = 'https://forms.fillout.com/t/rXw4rYBaxgus'

const MAILING_ADDRESS = 'P.O. Box 201, New Kent, VA 23124'

const NEWSLETTER_SECTION_HEADERS = {
  brand: '/newsletter/assets/email/pythoness-programmer-header.png',
  perspective: '/newsletter/assets/email/pythoness-perspective-header.png',
  thisWeek: '/newsletter/assets/db3496f9-3b1b-4566-a1bd-6f8a166f1fbf/2.png',
  thisMonth: '/newsletter/assets/email/this-month-header.png',
  tldr: '/newsletter/assets/dcbe0db6-6b06-4714-b1ee-48d9036b9db3/4.png',
  subscribe: '/newsletter/assets/e00bb2b9-903d-4d8b-88db-3a55ed9ce659/3.png',
  toolSpotlight: '/newsletter/assets/481d1df1-1934-4ac6-9848-ddb1f9e3958b/5.png',
  struggle: '/newsletter/assets/be70b3ac-a8e7-41c1-bd53-2d33965f6f5f/6.png',
  fireHorse: '/newsletter/assets/0e7291b2-378e-4161-9f74-86dc0d4ac79e/7.png',
  support: '/newsletter/assets/dee36210-72ca-42e6-bead-22c13378a18e/8.png',
  upNext: '/newsletter/assets/email/up-next-header.png',
}

const toAbsoluteAssetUrl = (siteUrl, assetPath) => {
  const base = siteUrl.replace(/\/+$/, '')
  return `${base}${assetPath.startsWith('/') ? assetPath : `/${assetPath}`}`
}

const sectionUrl = (siteUrl, path) => toAbsoluteAssetUrl(siteUrl, path)

const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  'https://pythonessprogrammer.com'

const getNewsletterFrom = () =>
  process.env.NEWSLETTER_EMAIL_FROM ??
  'Pythoness Perspective <newsletter@pythonessprogrammer.com>'

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const buildPreheaderHtml = (preheader) => {
  if (!preheader.trim()) return ''
  const content = preheader.includes('{{{') ? preheader : escapeHtml(preheader)
  return `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${content}</div>`
}

const buildSectionHeaderImage = (imageUrl, alt) =>
  `<div style="padding-left:10px;padding-right:10px"><div style="padding-bottom:20px;padding-left:0px;padding-right:0px;padding-top:20px"><img alt="${escapeHtml(alt)}" style="margin:0 auto 0 auto;width:100%;display:block;border:0;height:auto;" src="${imageUrl}" /></div></div>`

const buildTopEmailHeader = (imageUrl, alt) =>
  buildLinkedSectionHeaderImage(EMAIL_HOME_URL, imageUrl, alt)

const buildLinkedSectionHeaderImage = (href, imageUrl, alt) =>
  `<div style="padding-left:10px;padding-right:10px"><div style="padding-bottom:20px;padding-left:0px;padding-right:0px;padding-top:20px"><a href="${href}" rel="nofollow noopener noreferrer" style="text-decoration:none" target="_blank"><img alt="${escapeHtml(alt)}" style="margin:0 auto 0 auto;width:100%;display:block;border:0;height:auto;" src="${imageUrl}" /></a></div></div>`

const buildGreenButton = (href, label) => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px auto;">
  <tr>
    <td align="center" bgcolor="${EMAIL_COLORS.greenAccent}" style="border-radius:6px;">
      <a href="${href}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:14px 28px;font-family:${EMAIL_FONTS};font-size:16px;font-weight:600;color:#000000;text-decoration:none;border-radius:6px;">
        ${escapeHtml(label)}
      </a>
    </td>
  </tr>
</table>`.trim()

const buildTextHeaderBar = (title, subtitle) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px 0;background-color:${EMAIL_COLORS.greenDark};border-radius:6px;">
  <tr>
    <td style="padding:24px 28px;font-family:${EMAIL_FONTS};color:${EMAIL_COLORS.cream};text-align:left;">
      <p style="margin:0 0 ${subtitle ? '8px' : '0'} 0;font-size:22px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;line-height:1.3;">${title.includes('{{{') ? title : escapeHtml(title)}</p>
      ${subtitle ? `<p style="margin:0;font-size:15px;line-height:1.5;color:${EMAIL_COLORS.cream};">${subtitle.includes('{{{') ? subtitle : escapeHtml(subtitle)}</p>` : ''}
    </td>
  </tr>
</table>`.trim()

const buildFooterHtml = (siteUrl) => {
  const subscribeUrl = `${siteUrl.replace(/\/+$/, '')}/newsletter/subscribe`
  const signatureUrl = toAbsoluteAssetUrl(siteUrl, SIGNATURE_PATH)

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;border-top:3px solid ${EMAIL_COLORS.greenAccent};">
  <tr>
    <td style="padding:24px 0 0 0;font-family:${EMAIL_FONTS};font-size:14px;line-height:1.6;color:${EMAIL_COLORS.bodyText};text-align:center;">
      <img src="${signatureUrl}" alt="Amanda Nelson, Pythoness Programmer" width="280" style="margin:0 auto 16px auto;width:100%;max-width:280px;height:auto;display:block;border:0;" />
      <p style="margin:0 0 12px 0;">
        <a href="${subscribeUrl}" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">Subscribe to Pythoness Perspective</a>
      </p>
      <p style="margin:0 0 12px 0;">
        Questions? Reply or email <a href="mailto:help@pythonessprogrammer.com" style="color:${EMAIL_COLORS.greenHyperlink};text-decoration:underline;">help@pythonessprogrammer.com</a>
      </p>
      <p style="margin:0 0 12px 0;">
        Got a tech challenge? <a href="${STRUGGLE_FORM_URL}" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">Share it in The Struggle is Real</a>
      </p>
      <p style="margin:0 0 12px 0;font-size:12px;color:#666666;">
        ${escapeHtml(MAILING_ADDRESS)}
      </p>
      <p style="margin:0;font-size:12px;color:#666666;">
        <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#666666;text-decoration:underline;">Unsubscribe</a>
      </p>
    </td>
  </tr>
</table>`.trim()
}

const buildShellRow = (cellHtml) => `
<tr>
  <td style="padding:0 10px 16px 10px;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.5;color:${EMAIL_COLORS.bodyText};vertical-align:top;">
    ${cellHtml}
  </td>
</tr>`.trim()

const asShellRows = (sections) =>
  sections
    .map((section) => {
      const html = section.html.trim()
      return html.startsWith('<tr') ? html : buildShellRow(html)
    })
    .join('\n')

const buildEmailShell = ({ siteUrl, sections, preheader = '' }) => {
  const bodyRows = asShellRows(sections)
  const preheaderHtml = buildPreheaderHtml(preheader)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Pythoness Programmer</title>
</head>
<body style="margin:0;padding:0;background-color:${EMAIL_COLORS.cream};">
  ${preheaderHtml}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${EMAIL_COLORS.cream};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background-color:${EMAIL_COLORS.white};border-radius:8px;">
          ${bodyRows}
          ${buildShellRow(buildFooterHtml(siteUrl))}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

const buildContentSlot = (variableName) =>
  `<!-- begin:${variableName} -->\n{{{${variableName}}}}\n<!-- end:${variableName} -->`

const buildContentSlotRow = (variableName) => buildShellRow(buildContentSlot(variableName))

const buildNewsletterSection = (headerImageUrl, alt, variableName) =>
  `${buildShellRow(buildSectionHeaderImage(headerImageUrl, alt))}\n${buildContentSlotRow(variableName)}`

const buildUpNextSection = (upNextHeaderUrl) =>
  buildNewsletterSection(upNextHeaderUrl, 'Up next', 'UP_NEXT_HTML')

const buildReadOnlineTopLink = (urlVariable, label = 'Read Online') =>
  buildShellRow(
    `<p style="margin:0;font-size:14px;line-height:1.5;text-align:right;">
  <a href="{{{${urlVariable}}}}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">${escapeHtml(label)}</a>
</p>`.trim()
  )

const buildMinimalPlainText = (readOnlineVariable) => {
  const lines = []
  if (readOnlineVariable) {
    lines.push(`Read online: {{{${readOnlineVariable}}}}`, '')
  }
  lines.push(
    '---',
    'Pythoness Programmer',
    MAILING_ADDRESS,
    'Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}'
  )
  return lines.join('\n')
}

const buildStruggleSection = (struggleImageUrl) =>
  `${buildShellRow(
    buildLinkedSectionHeaderImage(
      STRUGGLE_FORM_URL,
      struggleImageUrl,
      'The Struggle is Real. Your tech struggles, reflected back. Got one? Send it in.'
    )
  )}\n${buildContentSlotRow('STRUGGLE_HTML')}`

const buildEventDetailsCard = () => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;">
  <tr>
    <td style="padding:20px 24px;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.6;color:${EMAIL_COLORS.bodyText};">
      <p style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:${EMAIL_COLORS.greenDark};">{{{EVENT_NAME}}}</p>
      <p style="margin:0 0 8px 0;"><strong>When:</strong> {{{EVENT_WHEN}}}</p>
      <p style="margin:0;"><strong>Where:</strong> {{{EVENT_WHERE}}}</p>
    </td>
  </tr>
</table>`.trim()

const buildEventDetailsRow = () => buildShellRow(buildEventDetailsCard())

const buildGreenButtonRow = (href, label) => buildShellRow(buildGreenButton(href, label))

const buildArchiveLinkSection = (archiveUrl) => `
<p style="margin:24px 0 0 0;font-family:${EMAIL_FONTS};font-size:15px;line-height:1.6;text-align:center;">
  <a href="${archiveUrl}" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">Browse the newsletter archive</a>
</p>`.trim()

const buildArchiveLinkRow = (archiveUrl) => buildShellRow(buildArchiveLinkSection(archiveUrl))

const stringVar = (key, fallbackValue = '') => ({
  key,
  type: 'string',
  fallbackValue,
})

const getAllBroadcastTemplates = (siteUrl = getSiteUrl()) => {
  const from = getNewsletterFrom()
  const archiveUrl = `${siteUrl.replace(/\/+$/, '')}/newsletter`
  const subscribeUrl = `${siteUrl.replace(/\/+$/, '')}/newsletter/subscribe`
  const supportUrl = `${siteUrl.replace(/\/+$/, '')}/support`

  return [
    {
      name: 'pythoness-perspective-newsletter',
      alias: 'pythoness-perspective-newsletter',
      from,
      subject: '{{{SUBJECT_LINE}}}',
      html: buildEmailShell({
        siteUrl,
        preheader: '{{{PREHEADER}}}',
        sections: [
          { html: buildTopEmailHeader(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.perspective), 'Pythoness Perspective') },
          { html: buildReadOnlineTopLink('READ_ONLINE_URL') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.thisWeek), 'This Week', 'THIS_WEEK_HTML') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.tldr), "TLDR (Too Long, Didn't Read Summary)", 'TLDR_HTML') },
          { html: buildLinkedSectionHeaderImage(subscribeUrl, sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.subscribe), 'Did a friend forward this to you? Subscribe Here.') },
          { html: buildContentSlotRow('MAIN_FEATURE_HTML') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.toolSpotlight), 'Tool Spotlight', 'TOOL_SPOTLIGHT_HTML') },
          { html: buildStruggleSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.struggle)) },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.fireHorse), 'Fire Horse Wisdom', 'FIRE_HORSE_HTML') },
          { html: buildUpNextSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.upNext)) },
          { html: buildLinkedSectionHeaderImage(supportUrl, sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.support), 'Support the Pythoness') },
          { html: buildContentSlotRow('SUPPORT_HTML') },
        ],
      }),
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
    },
    {
      name: 'pythoness-event-reminder',
      alias: 'pythoness-event-reminder',
      from,
      subject: 'Reminder: {{{EVENT_NAME}}}',
      html: buildEmailShell({
        siteUrl,
        sections: [
          { html: buildTopEmailHeader(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.brand), 'Pythoness Programmer') },
          { html: buildTextHeaderBar('{{{REMINDER_HEADLINE}}}', 'Event reminder') },
          { html: buildEventDetailsRow() },
          { html: buildContentSlotRow('BODY_HTML') },
          { html: buildGreenButtonRow('{{{CALENDAR_URL}}}', 'Add to calendar →') },
        ],
      }),
      text: buildMinimalPlainText(),
      variables: [
        stringVar('REMINDER_HEADLINE', "You're invited"),
        stringVar('EVENT_NAME'),
        stringVar('EVENT_WHEN'),
        stringVar('EVENT_WHERE', 'Online'),
        stringVar('CALENDAR_URL'),
        stringVar('BODY_HTML'),
      ],
    },
    {
      name: 'pythoness-lab-notes-update',
      alias: 'pythoness-lab-notes-update',
      from,
      subject: 'New Lab Note: {{{POST_TITLE}}}',
      html: buildEmailShell({
        siteUrl,
        sections: [
          { html: buildTopEmailHeader(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.brand), 'Pythoness Programmer') },
          { html: buildReadOnlineTopLink('POST_URL') },
          { html: buildTextHeaderBar('Lab Notes', 'New on the blog') },
          { html: buildContentSlotRow('BODY_HTML') },
        ],
      }),
      text: buildMinimalPlainText('POST_URL'),
      variables: [
        stringVar('POST_TITLE'),
        stringVar('POST_DESCRIPTION'),
        stringVar('POST_URL'),
        stringVar('PUBLISH_DATE'),
        stringVar('BODY_HTML'),
      ],
    },
    {
      name: 'pythoness-monthly-recap',
      alias: 'pythoness-monthly-recap',
      from,
      subject: '{{{RECAP_MONTH}}}: {{{RECAP_TITLE}}}',
      html: buildEmailShell({
        siteUrl,
        sections: [
          { html: buildTopEmailHeader(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.brand), 'Pythoness Programmer') },
          { html: buildReadOnlineTopLink('READ_ONLINE_URL') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.thisMonth), 'This month', 'RECAP_INTRO_HTML') },
          { html: buildTextHeaderBar('{{{RECAP_MONTH}}}', '{{{RECAP_TITLE}}}') },
          { html: buildContentSlotRow('HIGHLIGHTS_HTML') },
          { html: buildContentSlotRow('BODY_HTML') },
          { html: buildArchiveLinkRow(archiveUrl) },
          { html: buildLinkedSectionHeaderImage(supportUrl, sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.support), 'Support the Pythoness') },
          { html: buildContentSlotRow('SUPPORT_HTML') },
        ],
      }),
      text: buildMinimalPlainText('READ_ONLINE_URL'),
      variables: [
        stringVar('RECAP_MONTH'),
        stringVar('RECAP_TITLE'),
        stringVar('RECAP_INTRO_HTML'),
        stringVar('HIGHLIGHTS_HTML'),
        stringVar('BODY_HTML'),
        stringVar('SUPPORT_HTML'),
        stringVar('READ_ONLINE_URL'),
        stringVar('ARCHIVE_URL', archiveUrl),
      ],
    },
  ]
}

const toCreateTemplatePayload = (template) => ({
  name: template.name,
  alias: template.alias,
  from: template.from,
  subject: template.subject,
  html: template.html,
  text: template.text,
  variables: template.variables.map((variable) => ({
    key: variable.key,
    type: variable.type,
    fallback_value: variable.fallbackValue,
  })),
})

module.exports = {
  getAllBroadcastTemplates,
  getSiteUrl,
  getNewsletterFrom,
  toCreateTemplatePayload,
}
