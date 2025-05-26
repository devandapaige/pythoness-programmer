import { BlogPost } from '@/lib/mdx'

interface TagFilterProps {
  posts: BlogPost[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
}

export default function TagFilter({ posts, selectedTag, onTagSelect }: TagFilterProps) {
  // Get unique tags from all posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort()

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onTagSelect(null)}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          selectedTag === null
            ? 'bg-brand-green-accent text-black'
            : 'bg-white/5 text-white/80 hover:bg-white/10'
        }`}
      >
        All Posts
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedTag === tag
              ? 'bg-brand-green-accent text-black'
              : 'bg-white/5 text-white/80 hover:bg-white/10'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
} 