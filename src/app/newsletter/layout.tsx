import { Metadata } from 'next'
import Link from 'next/link'

import { NewsletterStyles } from '@/components/newsletter/NewsletterStyles'

export const metadata: Metadata = {
  title: 'Newsletter | Pythoness Programmer',
  description:
    'Archive of Pythoness Perspective newsletter issues on tech, creativity, and brain-friendly systems.',
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Blog
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-3xl"
          style={{ color: 'var(--brand-cream)' }}
        >
          <NewsletterStyles />
          {children}
        </div>
      </main>
    </div>
  )
}
