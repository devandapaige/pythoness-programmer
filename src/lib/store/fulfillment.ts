import 'server-only'
import { subscribeToNewsletter } from '@/lib/resend/newsletter'
import { sendStoreDownloadEmail } from '@/lib/store/email'
import { getStoreProductBySlug } from '@/lib/store/products'
import { createPaidDownloadToken } from '@/lib/store/secureDownload'
import { getSiteUrl } from '@/lib/store/site'

interface RunPaidFulfillmentInput {
  productSlug: string
  customerEmail: string
  sessionId: string
}

const getPaidDownloadGateUrl = (sessionId: string): string => {
  const siteUrl = getSiteUrl()
  const token = createPaidDownloadToken(sessionId)
  return `${siteUrl}/api/store/paid-download?session_id=${encodeURIComponent(
    sessionId
  )}&token=${encodeURIComponent(token)}`
}

export const runPaidFulfillment = async ({
  productSlug,
  customerEmail,
  sessionId,
}: RunPaidFulfillmentInput): Promise<void> => {
  const product = getStoreProductBySlug(productSlug)
  if (!product || product.pricing !== 'paid') {
    return
  }

  const email = customerEmail.trim().toLowerCase()
  if (!email) {
    return
  }

  await Promise.all([
    subscribeToNewsletter({
      email,
      source: `store-${product.slug}`,
    }),
    sendStoreDownloadEmail({
      to: email,
      productTitle: product.title,
      fileLabel: product.fileLabel,
      downloadUrl: getPaidDownloadGateUrl(sessionId),
    }),
  ])
}
