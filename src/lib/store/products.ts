import { StoreProduct } from '@/types/store'

export const storeProducts: StoreProduct[] = [
  {
    id: 'digital-spring-cleaning-toolkit',
    slug: 'digital-spring-cleaning-toolkit',
    title: 'Digital Spring Cleaning Toolkit',
    description:
      'A practical worksheet bundle to reset your digital systems without burnout.',
    priceCents: 0,
    currency: 'usd',
    pricing: 'free',
    downloadUrl: '/digital-spring-cleaning/digitalspringcleaningWorksheet.pdf',
    fileLabel: 'Digital Spring Cleaning Worksheet (PDF)',
  },
  {
    id: 'error-proofing-worksheet-pack',
    slug: 'error-proofing-worksheet-pack',
    title: 'Error-Proofing Worksheet Pack',
    description:
      'A paid worksheet pack for building calmer automation systems and reducing repeat mistakes.',
    priceCents: 1900,
    currency: 'usd',
    pricing: 'paid',
    downloadUrl: '/mindful-automation/error-proofing-worksheet.pdf',
    fileLabel: 'Error-Proofing Worksheet (PDF)',
    stripeProductName: 'Error-Proofing Worksheet Pack',
  },
]

export const getStoreProductBySlug = (slug: string): StoreProduct | undefined =>
  storeProducts.find((product) => product.slug === slug)
