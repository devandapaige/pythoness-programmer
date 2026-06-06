import type { Metadata } from 'next'
import Link from 'next/link'

import { NewsletterSubscribeForm } from '@/components/NewsletterSubscribeForm'
import { pythonessPerspective } from '@/data/siteCopy'

export const metadata: Metadata = {
  title: `Subscribe | ${pythonessPerspective.name}`,
  description: pythonessPerspective.subscribeMetaDescription,
  alternates: {
    canonical: '/newsletter/subscribe',
  },
}

type SubscribePageProps = {
  searchParams: Promise<{
    source?: string
    utm_source?: string
    utm_campaign?: string
  }>
}

export default async function NewsletterSubscribePage({
  searchParams,
}: SubscribePageProps) {
  const params = await searchParams
  const source =
    params.source ??
    params.utm_campaign ??
    params.utm_source ??
    'subscribe-page'

  return (
    <div className="py-6 sm:py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white mb-2">
          {pythonessPerspective.name}
        </h1>
        <p className="text-sm text-brand-green-accent font-medium mb-4">
          {pythonessPerspective.scheduleLabel}
        </p>
        <p className="text-lg text-brand-cream/90 leading-relaxed max-w-xl mx-auto">
          {pythonessPerspective.description}
        </p>
      </header>

      <div className="rounded-2xl border border-brand-cream/20 bg-brand-green-dark/60 p-6 sm:p-8 shadow-lg">
        <NewsletterSubscribeForm source={source} variant="onDark" />
        <p className="mt-6 text-sm text-brand-cream/70 text-center">
          Free. Unsubscribe anytime. Issues come from{' '}
          <span className="whitespace-nowrap">pythonessprogrammer.com</span>.
        </p>
      </div>

      <p className="mt-10 text-center text-sm text-brand-cream/75">
        Already subscribed?{' '}
        <Link href="/newsletter" className="text-brand-green-accent hover:underline">
          Browse the archive
        </Link>
        {' · '}
        <Link href="/blog" className="text-brand-green-accent hover:underline">
          Lab Notes
        </Link>
      </p>
    </div>
  )
}
