import { BlogPost } from '@/lib/mdx'
import { TagPill } from './Tag'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

interface TagFilterProps {
  posts: BlogPost[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
}

export default function TagFilter({ posts, selectedTag, onTagSelect }: TagFilterProps) {
  const searchParams = useSearchParams()
  const urlTag = searchParams.get('tag')
  
  // Get unique tags from all posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort()

  // If URL has a tag parameter, use that as the selected tag
  const effectiveSelectedTag = urlTag || selectedTag

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onTagSelect(null)}
        className={cn(
          "transition-all duration-200",
          effectiveSelectedTag === null && "shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        )}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          color: '#F4F1DE',
          border: `3px solid ${effectiveSelectedTag === null ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)'}`,
          borderRadius: '12px',
          minHeight: '32px',
          minWidth: '90px',
          fontSize: '1.15rem',
          fontFamily: 'var(--font-norwester), sans-serif',
          letterSpacing: '0.02em',
          padding: '0 14px',
          margin: '0 6px 0 0',
          boxSizing: 'border-box',
          textTransform: 'uppercase',
        }}
      >
        ALL POSTS
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className="p-0 bg-transparent rounded-full"
        >
          <TagPill tag={tag} selected={effectiveSelectedTag === tag} />
        </button>
      ))}
    </div>
  )
} 