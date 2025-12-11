import { Metadata } from 'next'
import Link from 'next/link'
import { BlogStyles } from '@/components/blog/BlogStyles'

export const metadata: Metadata = {
  title: 'Blog | Pythoness Programmer',
  description: 'Technical articles, coding tips, and industry insights from Pythoness Programmer.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-brand-purple-dark" style={{ color: 'var(--brand-cream)' }}>
      <header className="border-b border-brand-purple-light/30 bg-brand-purple-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/blog" className="text-xl" style={{ color: '#fff', fontFamily: 'var(--font-norwester), sans-serif', letterSpacing: '-0.015em', textTransform: 'uppercase' }}>
                Blog
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/feed.xml"
                className="text-sm"
                style={{ color: 'var(--brand-cream)' }}
              >
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl" style={{ color: 'var(--brand-cream)' }}>
          <BlogStyles />
          {children}
        </div>
      </main>
    </div>
  )
} 