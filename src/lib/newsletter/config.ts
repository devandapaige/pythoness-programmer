export const getSiteBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  'https://pythonessprogrammer.com'

/** Canonical on-site signup (Resend), not Beehiiv. */
export const getNewsletterSubscribeUrl = (): string =>
  `${getSiteBaseUrl().replace(/\/+$/, '')}/newsletter/subscribe`

export const getNewsletterReplyTo = (): string =>
  process.env.NEWSLETTER_REPLY_TO ?? 'help@pythonessprogrammer.com'

/** Self-hosted signature image (migrated off Beehiiv CDN). */
export const NEWSLETTER_SIGNATURE_SRC = '/images/email-signature.png'

/** Resolve site-relative asset paths for Open Graph and external consumers. */
export function toAbsoluteAssetUrl(assetPath: string): string {
  if (!assetPath || /^https?:\/\//i.test(assetPath)) return assetPath
  const base = getSiteBaseUrl().replace(/\/+$/, '')
  return `${base}${assetPath.startsWith('/') ? assetPath : `/${assetPath}`}`
}
