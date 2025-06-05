import { cn } from '@/lib/utils'
import Link from 'next/link'

export type TagPillProps = {
  tag: string
  className?: string
  selected?: boolean
  onClick?: (tag: string) => void
}

// Brand-aligned color mapping with border (contrast) color using CSS variables
const TAG_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  automation: { bg: 'var(--brand-green)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  accessibility: { bg: 'var(--brand-cream)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  wellness: { bg: 'var(--brand-light-purple)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  creativity: { bg: 'var(--brand-blue)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  foundations: { bg: 'var(--brand-cream)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  security: { bg: 'var(--brand-blue)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  community: { bg: 'var(--brand-light-purple)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
  sustainability: { bg: 'var(--brand-green)', text: 'var(--brand-forest)', border: 'var(--brand-purple)' },
}

export function TagPill({ tag, className, selected = false, onClick }: TagPillProps) {
  const key = tag.toLowerCase()
  const style = TAG_STYLES[key] || { bg: 'var(--brand-forest)', text: 'var(--brand-cream)', border: 'var(--brand-purple)' }
  
  const pillContent = (
    <span
      className={cn(
        'inline-flex items-center justify-center cursor-pointer transition-all duration-200',
        selected && 'shadow-[0_0_8px_rgba(255,255,255,0.5)]',
        className
      )}
      style={{
        backgroundColor: style.bg,
        color: style.text,
        border: `3px solid ${selected ? '#FFFFFF' : style.border}`,
        borderRadius: '12px',
        minHeight: '32px',
        minWidth: '90px',
        fontSize: '1.15rem',
        fontFamily: 'var(--font-norwester), sans-serif',
        letterSpacing: '0.02em',
        padding: '0 14px',
        margin: '0 6px 0 0',
        boxSizing: 'border-box',
      }}
    >
      {tag}
    </span>
  )

  if (onClick) {
    return (
      <button
        onClick={() => onClick(tag)}
        className="p-0 bg-transparent border-0"
      >
        {pillContent}
      </button>
    )
  }

  return (
    <Link
      href={`/blog?tag=${encodeURIComponent(tag)}`}
      className="no-underline"
    >
      {pillContent}
    </Link>
  )
} 