import { NEWSLETTER_SIGNATURE_SRC, toAbsoluteAssetUrl } from '@/lib/newsletter/config'

export const EMAIL_COLORS = {
  greenDark: '#2e3d2a',
  greenAccent: '#32d24d',
  greenHyperlink: '#156624',
  cream: '#f4f1d3',
  purpleAccent: '#d8b9f7',
  bodyText: '#2D2D2D',
  white: '#ffffff',
} as const

export const EMAIL_FONTS =
  "'Open Sans','Segoe UI','Apple SD Gothic Neo','Lucida Grande','Lucida Sans Unicode',sans-serif"

export const EMAIL_HOME_URL = 'https://www.pythonessprogrammer.com/'

export const MAILING_ADDRESS = 'P.O. Box 201, New Kent, VA 23124'

/** Section header images reused across newsletter MDX exports (already on-site). */
export const NEWSLETTER_SECTION_HEADERS = {
  brand: '/newsletter/assets/email/pythoness-programmer-header.png',
  perspective:
    '/newsletter/assets/email/pythoness-perspective-header.png',
  thisWeek: '/newsletter/assets/db3496f9-3b1b-4566-a1bd-6f8a166f1fbf/2.png',
  thisMonth: '/newsletter/assets/email/this-month-header.png',
  tldr: '/newsletter/assets/dcbe0db6-6b06-4714-b1ee-48d9036b9db3/4.png',
  subscribe: '/newsletter/assets/e00bb2b9-903d-4d8b-88db-3a55ed9ce659/3.png',
  toolSpotlight: '/newsletter/assets/481d1df1-1934-4ac6-9848-ddb1f9e3958b/5.png',
  struggle: '/newsletter/assets/be70b3ac-a8e7-41c1-bd53-2d33965f6f5f/6.png',
  fireHorse: '/newsletter/assets/0e7291b2-378e-4161-9f74-86dc0d4ac79e/7.png',
  support: '/newsletter/assets/dee36210-72ca-42e6-bead-22c13378a18e/8.png',
  upNext: '/newsletter/assets/email/up-next-header.png',
} as const

export const getSectionHeaderUrl = (path: string): string =>
  toAbsoluteAssetUrl(path)

export const getPerspectiveHeaderUrl = (): string =>
  getSectionHeaderUrl(NEWSLETTER_SECTION_HEADERS.perspective)

export const getBrandHeaderUrl = (): string =>
  getSectionHeaderUrl(NEWSLETTER_SECTION_HEADERS.brand)

export const getUpNextHeaderUrl = (): string =>
  getSectionHeaderUrl(NEWSLETTER_SECTION_HEADERS.upNext)

export const getSignatureUrl = (): string => toAbsoluteAssetUrl(NEWSLETTER_SIGNATURE_SRC)

export const getSubscribeUrl = (siteUrl: string): string =>
  `${siteUrl.replace(/\/+$/, '')}/newsletter/subscribe`

export const getSupportUrl = (siteUrl: string): string =>
  `${siteUrl.replace(/\/+$/, '')}/support`

export const getDefaultArchiveUrl = (siteUrl: string): string =>
  `${siteUrl.replace(/\/+$/, '')}/newsletter`

export const getBlogUrl = (siteUrl: string): string =>
  `${siteUrl.replace(/\/+$/, '')}/blog`
