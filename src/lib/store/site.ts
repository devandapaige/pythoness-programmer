import 'server-only'

export const getSiteUrl = (): string => {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (configuredSiteUrl) {
    return configuredSiteUrl.replace(/\/+$/, '')
  }

  return 'http://localhost:3000'
}
