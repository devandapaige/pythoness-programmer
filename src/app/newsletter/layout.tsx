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
      <header className="border-b border-brand-purple-accent bg-brand-green-dark">
        <div className="site-gutter-x mx-auto max-w-7xl pb-4 pt-2">
          <div className="flex min-h-12 flex-wrap items-center justify-between gap-3">
            <Link
              href="/newsletter"
              className="font-display text-xl uppercase tracking-tight text-white hover:text-brand-purple-light"
            >
              Pythoness Perspective
            </Link>
            <Link
              href="/blog"
              className="text-sm text-brand-cream hover:text-brand-purple-light"
            >
              Lab Notes
            </Link>
          </div>
          <p className="mt-2 text-sm text-brand-cream/80">
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
