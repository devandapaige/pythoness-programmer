export const getSiteBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  'https://pythonessprogrammer.com'

export const getNewsletterReplyTo = (): string =>
  process.env.NEWSLETTER_REPLY_TO ?? 'help@pythonessprogrammer.com'
