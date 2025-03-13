import { Metadata } from 'next'

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
        <h1 className="text-4xl font-display text-white mb-8">Blog</h1>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
} 