/**
 * Table-wrapped image markup for email clients (Gmail, Apple Mail, etc.).
 * Avoids bare <p><img> which some editors strip or fail to render.
 */
const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const buildAccessibleEmailImageBlock = (
  src,
  alt,
  { maxWidth = 280, caption } = {}
) => {
  const safeAlt = escapeHtml(alt)
  const captionHtml = caption
    ? `<p style="margin:8px 0 0 0;font-family:'Open Sans',sans-serif;font-size:14px;line-height:1.4;color:#2D2D2D;text-align:center;"><strong>${escapeHtml(caption)}</strong></p>`
    : ''

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:16px 0;">
  <tr>
    <td align="center" style="padding:0 10px;">
      ${captionHtml}
      <img src="${src}" alt="${safeAlt}" width="${maxWidth}" style="display:block;width:100%;max-width:${maxWidth}px;height:auto;border:0;margin:8px auto 0 auto;" />
    </td>
  </tr>
</table>`
}

module.exports = { buildAccessibleEmailImageBlock }
