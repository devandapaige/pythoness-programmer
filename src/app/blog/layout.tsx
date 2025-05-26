import { Metadata } from 'next'
import Link from 'next/link'

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
    <div className="min-h-screen bg-gradient-to-b from-brand-green-dark to-brand-purple-dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-display text-white">
            <Link
              href="/blog"
              className="hover:underline hover:text-brand-green-accent transition-colors"
              aria-label="Go to all blog posts"
            >
              Blog
            </Link>
          </h1>
          <Link
            href="/feed.xml"
            className="text-white/60 hover:text-brand-green-accent transition-colors flex items-center gap-2"
            aria-label="Subscribe to RSS feed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            RSS
          </Link>
        </div>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
} 