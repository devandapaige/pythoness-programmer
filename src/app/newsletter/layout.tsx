import { Metadata } from 'next'
import Link from 'next/link'

import { NewsletterStyles } from '@/components/newsletter/NewsletterStyles'
import { pythonessPerspective } from '@/data/siteCopy'

export const metadata: Metadata = {
  title: `${pythonessPerspective.name} (${pythonessPerspective.scheduleLabel}) | Pythoness Programmer`,
  description: pythonessPerspective.subscribeMetaDescription,
}

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="min-h-screen bg-brand-green-dark"
      style={{ color: 'var(--brand-cream)' }}
    >
      <header className="border-b border-brand-cream/20 bg-brand-green-dark">
        <div className="site-gutter mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/newsletter"
              className="text-xl"
              style={{
                color: '#fff',
                fontFamily: 'var(--font-norwester), sans-serif',
                letterSpacing: '-0.015em',
                textTransform: 'uppercase',
              }}
            >
              Pythoness Perspective
            </Link>
            <Link
              href="/blog"
              className="text-sm"
              style={{ color: 'var(--brand-cream)' }}
            >
              Lab Notes
            </Link>
          </div>
          <p className="pb-4 text-sm text-brand-cream/80">
            {pythonessPerspective.scheduleLabel} — monthly arcs on tech sovereignty, week by week.
          </p>
        </div>
      </header>

      <div className="site-gutter mx-auto max-w-7xl">
        <div
          className="mx-auto max-w-3xl"
          style={{ color: 'var(--brand-cream)' }}
        >
          <NewsletterStyles />
          {children}
        </div>
      </div>
    </div>
  )
}
