export type StoreProductPricing = 'free' | 'paid'

export interface StoreProduct {
  id: string
  slug: string
  title: string
  description: string
  priceCents: number
  currency: 'usd'
  pricing: StoreProductPricing
  downloadUrl: string
  fileLabel: string
  stripeProductName?: string
}

export interface NewsletterSyncResult {
  configured: boolean
  synced: boolean
  message?: string
}

export interface TransactionalEmailResult {
  configured: boolean
  sent: boolean
  messageId?: string
  message?: string
}

