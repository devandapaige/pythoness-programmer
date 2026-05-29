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

const NEWSLETTER_SECTION_HEADERS = {
  perspective: '/newsletter/assets/email/pythoness-perspective-header.png',
  thisWeek: '/newsletter/assets/db3496f9-3b1b-4566-a1bd-6f8a166f1fbf/2.png',
  tldr: '/newsletter/assets/dcbe0db6-6b06-4714-b1ee-48d9036b9db3/4.png',
  subscribe: '/newsletter/assets/e00bb2b9-903d-4d8b-88db-3a55ed9ce659/3.png',
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
  return `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>`
}

const buildSectionHeaderImage = (imageUrl, alt) =>
  `<div style="padding-left:10px;padding-right:10px"><div style="padding-bottom:20px;padding-left:0px;padding-right:0px;padding-top:20px"><img alt="${escapeHtml(alt)}" style="margin:0 auto 0 auto;width:100%;display:block;border:0;height:auto;" src="${imageUrl}" /></div></div>`

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
      <p style="margin:0;font-size:12px;color:#666666;">
        <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#666666;text-decoration:underline;">Unsubscribe</a>
      </p>
    </td>
  </tr>
</table>`.trim()
}

const buildEmailShell = ({ siteUrl, sections, preheader = '' }) => {
  const bodySections = sections.map((section) => section.html).join('\n')
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
          <tr>
            <td style="padding:12px 0 24px 0;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.6;color:${EMAIL_COLORS.bodyText};">
              ${bodySections}
              ${buildFooterHtml(siteUrl)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

const buildContentSlot = (variableName) => `
<div style="padding-bottom:12px;padding-left:10px;padding-right:10px;padding-top:12px;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.5;color:${EMAIL_COLORS.bodyText};">
  {{{${variableName}}}}
</div>`.trim()

const buildNewsletterSection = (headerImageUrl, alt, variableName) =>
  `${buildSectionHeaderImage(headerImageUrl, alt)}\n${buildContentSlot(variableName)}`

const buildUpNextSection = (upNextHeaderUrl) =>
  buildNewsletterSection(upNextHeaderUrl, 'Up next', 'UP_NEXT_HTML')

const buildReadOnlineSection = () => `
<div style="padding-left:10px;padding-right:10px;">
  ${buildGreenButton('{{{READ_ONLINE_URL}}}', 'Read the full issue →')}
</div>`.trim()

const buildArchiveLinkSection = (archiveUrl) => `
<p style="margin:24px 10px 0 10px;font-family:${EMAIL_FONTS};font-size:15px;line-height:1.6;text-align:center;">
  <a href="${archiveUrl}" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">Browse the newsletter archive</a>
</p>`.trim()

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
          { html: buildSectionHeaderImage(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.perspective), 'Pythoness Perspective') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.thisWeek), 'This Week', 'THIS_WEEK_HTML') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.tldr), "TLDR (Too Long, Didn't Read Summary)", 'TLDR_HTML') },
          { html: buildLinkedSectionHeaderImage(subscribeUrl, sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.subscribe), 'Did a friend forward this to you? Subscribe Here.') },
          { html: buildContentSlot('MAIN_FEATURE_HTML') },
          { html: buildContentSlot('EXTRA_SECTIONS_HTML') },
          { html: buildUpNextSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.upNext)) },
          { html: buildReadOnlineSection() },
          { html: buildLinkedSectionHeaderImage(supportUrl, sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.support), 'Support the Pythoness') },
        ],
      }),
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
    },
    {
      name: 'pythoness-event-reminder',
      alias: 'pythoness-event-reminder',
      from,
      subject: 'Reminder: {{{EVENT_NAME}}}',
      html: buildEmailShell({
        siteUrl,
        sections: [
          { html: buildSectionHeaderImage(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.perspective), 'Pythoness Perspective') },
          { html: buildTextHeaderBar('{{{REMINDER_HEADLINE}}}', 'Event reminder') },
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
          { html: `<div style="padding-left:10px;padding-right:10px;">${buildGreenButton('{{{CALENDAR_URL}}}', 'Add to calendar →')}</div>` },
        ],
      }),
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
          { html: buildSectionHeaderImage(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.perspective), 'Pythoness Perspective') },
          { html: buildTextHeaderBar('Lab Notes', 'New on the blog') },
          {
            html: `
<div style="padding-bottom:12px;padding-left:10px;padding-right:10px;padding-top:12px;">
  <h1 style="margin:0 0 12px 0;font-family:'Open Sans','Segoe UI',sans-serif;font-size:24px;line-height:1.3;color:#2e3d2a;">{{{POST_TITLE}}}</h1>
  <p style="margin:0 0 8px 0;font-family:'Open Sans','Segoe UI',sans-serif;font-size:16px;line-height:1.6;color:#2D2D2D;">{{{POST_DESCRIPTION}}}</p>
  <p style="margin:0;font-family:'Open Sans','Segoe UI',sans-serif;font-size:14px;line-height:1.5;color:#666666;">{{{PUBLISH_DATE}}}</p>
</div>`.trim(),
          },
          { html: buildContentSlot('BODY_HTML') },
          { html: `<div style="padding-left:10px;padding-right:10px;">${buildGreenButton('{{{POST_URL}}}', 'Read on the blog →')}</div>` },
        ],
      }),
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
          { html: buildSectionHeaderImage(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.perspective), 'Pythoness Perspective') },
          { html: buildNewsletterSection(sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.thisWeek), 'This month', 'RECAP_INTRO_HTML') },
          { html: buildTextHeaderBar('{{{RECAP_MONTH}}}', '{{{RECAP_TITLE}}}') },
          { html: buildContentSlot('HIGHLIGHTS_HTML') },
          { html: buildContentSlot('BODY_HTML') },
          { html: buildArchiveLinkSection(archiveUrl) },
          { html: buildLinkedSectionHeaderImage(supportUrl, sectionUrl(siteUrl, NEWSLETTER_SECTION_HEADERS.support), 'Support the Pythoness') },
        ],
      }),
      variables: [
        stringVar('RECAP_MONTH'),
        stringVar('RECAP_TITLE'),
        stringVar('RECAP_INTRO_HTML'),
        stringVar('HIGHLIGHTS_HTML'),
        stringVar('BODY_HTML'),
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
  text: '',
  variables: template.variables.map((variable) => ({
    key: variable.key,
    type: variable.type,
    fallback_value: variable.fallbackValue,
  })),
})

module.exports = {
  getAllBroadcastTemplates,
  getSiteUrl,
  toCreateTemplatePayload,
}
