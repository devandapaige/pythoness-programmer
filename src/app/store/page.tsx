import type { Metadata } from 'next'
import StoreClient from './StoreClient'
import { storeProducts } from '@/lib/store/products'

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Digital products from Pythoness Programmer. Get free downloads or buy paid resources with Stripe checkout.',
  openGraph: {
    title: 'Store | Pythoness Programmer',
    description:
      'Browse free and paid digital products from Pythoness Programmer.',
    url: '/store',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

interface StorePageProps {
  searchParams: Promise<{
    cancelled?: string
  }>
}

export default async function StorePage({ searchParams }: StorePageProps) {
  const { cancelled: cancelledParam } = await searchParams
  const cancelled = cancelledParam === 'true'

  return <StoreClient products={storeProducts} cancelled={cancelled} />
}
