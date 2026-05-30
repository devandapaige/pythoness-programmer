import {
  EMAIL_COLORS,
  EMAIL_FONTS,
  EMAIL_HOME_URL,
  MAILING_ADDRESS,
  STRUGGLE_FORM_URL,
  getSignatureUrl,
  getSubscribeUrl,
  getSupportUrl,
} from '@/lib/resend/templates/constants'

export type EmailShellSection = {
  html: string
}

export type BuildEmailShellOptions = {
  siteUrl: string
  sections: EmailShellSection[]
  preheader?: string
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export const buildPreheaderHtml = (preheader: string): string => {
  if (!preheader.trim()) return ''
  const content = preheader.includes('{{{') ? preheader : escapeHtml(preheader)
  return `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${content}</div>`
}

/** Matches Beehiiv/export markup used in newsletter MDX posts. */
export const buildSectionHeaderImage = (imageUrl: string, alt: string): string =>
  `<div style="padding-left:10px;padding-right:10px"><div style="padding-bottom:20px;padding-left:0px;padding-right:0px;padding-top:20px"><img alt="${escapeHtml(alt)}" style="margin:0 auto 0 auto;width:100%;display:block;border:0;height:auto;" src="${imageUrl}" /></div></div>`

/** Top-of-email banner linked to the site homepage. */
export const buildTopEmailHeader = (imageUrl: string, alt: string): string =>
  buildLinkedSectionHeaderImage(EMAIL_HOME_URL, imageUrl, alt)

export const buildLinkedSectionHeaderImage = (
  href: string,
  imageUrl: string,
  alt: string
): string =>
  `<div style="padding-left:10px;padding-right:10px"><div style="padding-bottom:20px;padding-left:0px;padding-right:0px;padding-top:20px"><a href="${href}" rel="nofollow noopener noreferrer" style="text-decoration:none" target="_blank"><img alt="${escapeHtml(alt)}" style="margin:0 auto 0 auto;width:100%;display:block;border:0;height:auto;" src="${imageUrl}" /></a></div></div>`

/** @deprecated Use buildSectionHeaderImage — kept for tests migrating off table banners. */
export const buildImageBanner = buildSectionHeaderImage

export const buildGreenButton = (href: string, label: string): string => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px auto;">
  <tr>
    <td align="center" bgcolor="${EMAIL_COLORS.greenAccent}" style="border-radius:6px;">
      <a href="${href}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:14px 28px;font-family:${EMAIL_FONTS};font-size:16px;font-weight:600;color:#000000;text-decoration:none;border-radius:6px;">
        ${escapeHtml(label)}
      </a>
    </td>
  </tr>
</table>`.trim()

export const buildTextHeaderBar = (
  title: string,
  subtitle?: string
): string => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px 0;background-color:${EMAIL_COLORS.greenDark};border-radius:6px;">
  <tr>
    <td style="padding:24px 28px;font-family:${EMAIL_FONTS};color:${EMAIL_COLORS.cream};text-align:left;">
      <p style="margin:0 0 ${subtitle ? '8px' : '0'} 0;font-size:22px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;line-height:1.3;">${title.includes('{{{') ? title : escapeHtml(title)}</p>
      ${subtitle ? `<p style="margin:0;font-size:15px;line-height:1.5;color:${EMAIL_COLORS.cream};">${subtitle.includes('{{{') ? subtitle : escapeHtml(subtitle)}</p>` : ''}
    </td>
  </tr>
</table>`.trim()

export const buildFooterHtml = (siteUrl: string): string => {
  const subscribeUrl = getSubscribeUrl(siteUrl)
  const signatureUrl = getSignatureUrl()

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

/** One table row inside the white card — isolates each block so pasted HTML cannot close the outer shell. */
export const buildShellRow = (cellHtml: string): string => `
<tr>
  <td style="padding:0 10px 16px 10px;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.5;color:${EMAIL_COLORS.bodyText};vertical-align:top;">
    ${cellHtml}
  </td>
</tr>`.trim()

const asShellRows = (sections: EmailShellSection[]): string =>
  sections
    .map((section) => {
      const html = section.html.trim()
      return html.startsWith('<tr') ? html : buildShellRow(html)
    })
    .join('\n')

export const buildEmailShell = ({
  siteUrl,
  sections,
  preheader = '',
}: BuildEmailShellOptions): string => {
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

/** Variable only — no wrapper div (paste <p> and <ul> from resend-snippets, not Beehiiv exports). */
export const buildContentSlot = (variableName: string): string =>
  `<!-- begin:${variableName} -->\n{{{${variableName}}}}\n<!-- end:${variableName} -->`

export const buildContentSlotRow = (variableName: string): string =>
  buildShellRow(buildContentSlot(variableName))

export const buildNewsletterSection = (
  headerImageUrl: string,
  alt: string,
  variableName: string
): string =>
  `${buildShellRow(buildSectionHeaderImage(headerImageUrl, alt))}\n${buildContentSlotRow(variableName)}`

export const buildUpNextSection = (upNextHeaderUrl: string): string =>
  buildNewsletterSection(upNextHeaderUrl, 'Up next', 'UP_NEXT_HTML')

/** Compact top link for on-the-go readers; full issue stays in HTML body below. */
export const buildReadOnlineTopLink = (
  urlVariable: string,
  label = 'Read Online'
): string =>
  buildShellRow(
    `<p style="margin:0;font-size:14px;line-height:1.5;text-align:right;">
  <a href="{{{${urlVariable}}}}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">${escapeHtml(label)}</a>
</p>`.trim()
  )

/**
 * Minimal plain-text part so Resend broadcasts do not auto-generate a full
 * duplicate of the HTML body (which triggers duplication warnings).
 */
export const buildMinimalPlainText = (readOnlineVariable?: string): string => {
  const lines: string[] = []

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

export const buildEventDetailsCard = (): string => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;">
  <tr>
    <td style="padding:20px 24px;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.6;color:${EMAIL_COLORS.bodyText};">
      <p style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:${EMAIL_COLORS.greenDark};">{{{EVENT_NAME}}}</p>
      <p style="margin:0 0 8px 0;"><strong>When:</strong> {{{EVENT_WHEN}}}</p>
      <p style="margin:0;"><strong>Where:</strong> {{{EVENT_WHERE}}}</p>
    </td>
  </tr>
</table>`.trim()

export const buildEventDetailsRow = (): string => buildShellRow(buildEventDetailsCard())

export const buildGreenButtonRow = (href: string, label: string): string =>
  buildShellRow(buildGreenButton(href, label))

export const buildArchiveLinkSection = (defaultArchiveUrl: string): string => `
<p style="margin:24px 0 0 0;font-family:${EMAIL_FONTS};font-size:15px;line-height:1.6;text-align:center;">
  <a href="${defaultArchiveUrl}" style="color:${EMAIL_COLORS.greenHyperlink};font-style:italic;text-decoration:underline;">Browse the newsletter archive</a>
</p>`.trim()

export const buildArchiveLinkRow = (defaultArchiveUrl: string): string =>
  buildShellRow(buildArchiveLinkSection(defaultArchiveUrl))

export const buildSupportSection = (siteUrl: string, supportImageUrl: string): string =>
  buildLinkedSectionHeaderImage(
    getSupportUrl(siteUrl),
    supportImageUrl,
    'Support the Pythoness'
  )

export const buildSubscribeForwardSection = (
  siteUrl: string,
  subscribeImageUrl: string
): string =>
  buildLinkedSectionHeaderImage(
    getSubscribeUrl(siteUrl),
    subscribeImageUrl,
    'Did a friend forward this to you? Subscribe Here.'
  )

export const buildStruggleSection = (struggleImageUrl: string): string =>
  `${buildShellRow(
    buildLinkedSectionHeaderImage(
      STRUGGLE_FORM_URL,
      struggleImageUrl,
      'The Struggle is Real. Your tech struggles, reflected back. Got one? Send it in.'
    )
  )}\n${buildContentSlotRow('STRUGGLE_HTML')}`
