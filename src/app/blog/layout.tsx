import { Metadata } from 'next'
import Link from 'next/link'
import { BlogStyles } from '@/components/blog/BlogStyles'

export const metadata: Metadata = {
  title: 'Lab Notes | Pythoness Programmer',
  description:
    'Lab Notes: overflow ideas, reactions, experiments, and creative project dispatches from Pythoness Programmer.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-brand-green-dark" style={{ color: 'var(--brand-cream)' }}>
      <header className="border-b border-brand-green-accent bg-brand-green-dark">
        <div className="site-gutter-x mx-auto max-w-7xl pb-4 pt-2">
          <div className="flex min-h-12 flex-wrap items-center justify-between gap-3">
            <Link
              href="/blog"
              className="font-display text-xl uppercase tracking-tight text-white hover:text-brand-green-accent"
            >
              Lab Notes
            </Link>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/newsletter"
                className="text-sm text-brand-cream hover:text-brand-green-accent"
              >
                Pythoness Perspective
              </Link>
              <Link
                href="/feed.xml"
                className="text-sm text-brand-cream hover:text-brand-green-accent"
              >
                RSS Feed
              </Link>
            </div>
          </div>
          <p className="mt-2 text-sm text-brand-cream/80">
            Lab Notes is where overflow ideas, reactions to current events, and in-progress creative threads live.
          </p>
        </div>
      </header>

      <div className="site-gutter mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl" style={{ color: 'var(--brand-cream)' }}>
          <BlogStyles />
          {children}
        </div>
      </div>
    </div>
  )
} 