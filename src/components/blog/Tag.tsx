import { cn } from '@/lib/utils'
import Link from 'next/link'

export type TagPillProps = {
  tag: string
  className?: string
  selected?: boolean
  onClick?: (tag: string) => void
}

// Brand-aligned color mapping with bright color vibe, black text, and black outline
// All tags use bright brand colors (green, blue, fuchsia, light-purple) for cohesive bright aesthetic
const TAG_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  automation: { bg: 'var(--brand-green)', text: '#000000', border: '#000000' },
  accessibility: { bg: 'var(--brand-light-purple)', text: '#000000', border: '#000000' },
  wellness: { bg: 'var(--brand-blue)', text: '#000000', border: '#000000' },
  creativity: { bg: 'var(--brand-fuchsia)', text: '#000000', border: '#000000' },
  foundations: { bg: 'var(--brand-green)', text: '#000000', border: '#000000' },
  security: { bg: 'var(--brand-blue)', text: '#000000', border: '#000000' },
  community: { bg: 'var(--brand-light-purple)', text: '#000000', border: '#000000' },
  sustainability: { bg: 'var(--brand-fuchsia)', text: '#000000', border: '#000000' },
  software: { bg: 'var(--brand-green)', text: '#000000', border: '#000000' },
  workflows: { bg: 'var(--brand-blue)', text: '#000000', border: '#000000' },
}

export function TagPill({ tag, className, selected = false, onClick }: TagPillProps) {
  const key = tag.toLowerCase()
  const style = TAG_STYLES[key] || { bg: 'var(--brand-green)', text: '#000000', border: '#000000' }
  
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
        border: `3px solid ${style.border}`,
        borderRadius: '9999px',
        minHeight: '32px',
        minWidth: '90px',
        fontSize: '1.15rem',
        fontFamily: 'var(--font-norwester), sans-serif',
        letterSpacing: '0.02em',
        padding: '8px 20px',
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