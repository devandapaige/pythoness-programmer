import { ReactNode } from 'react'

interface LegalLayoutProps {
  children: ReactNode
  title: string
  lastUpdated: string
}

export default function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <article className="prose prose-green prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-display mb-4">{title}</h1>
          <p className="text-gray-600">Last updated: {lastUpdated}</p>
        </header>
        {children}
      </article>
    </div>
  )
} 