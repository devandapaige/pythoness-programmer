import type { ReactNode } from 'react'

type NewsletterContentPanelProps = {
  children: ReactNode
  className?: string
  /** Archive index cards — tighter padding, slightly more opaque than full issues */
  variant?: 'issue' | 'index'
}

/**
 * Faint panel on brand-green-dark so Norwester headings and body text read clearly.
 */
export function NewsletterContentPanel({
  children,
  className = '',
  variant = 'issue',
}: NewsletterContentPanelProps) {
  const variantClass =
    variant === 'index' ? 'newsletter-content-panel--index' : ''

  return (
    <div className={`newsletter-content-panel ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  )
}
