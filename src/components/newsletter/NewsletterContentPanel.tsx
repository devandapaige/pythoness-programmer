import type { ReactNode } from 'react'

type NewsletterContentPanelProps = {
  children: ReactNode
  className?: string
}

/**
 * Faint panel on brand-green-dark so Norwester headings and body text read clearly.
 */
export function NewsletterContentPanel({
  children,
  className = '',
}: NewsletterContentPanelProps) {
  return (
    <div className={`newsletter-content-panel ${className}`.trim()}>{children}</div>
  )
}
