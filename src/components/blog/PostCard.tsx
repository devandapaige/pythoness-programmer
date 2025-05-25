import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/mdx'

interface PostCardProps {
  post: BlogPost
  onTagClick?: (tag: string) => void
}

export default function PostCard({ post, onTagClick }: PostCardProps) {
  return (
    <article 
      className="bg-white/5 backdrop-blur-sm rounded-lg pt-0 pb-2.5 px-6 hover:bg-white/10 transition-colors"
      role="article"
    >
      <Link 
        href={`/blog/${post.slug}`}
        className="block group"
        aria-label={`Read ${post.title}`}
      >
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg bg-black/10 mb-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <h2 className="text-2xl font-display text-white mb-1 mt-4 group-hover:text-brand-green-accent transition-colors">
          {post.title}
        </h2>
        <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>by {post.author}</span>
        </div>
        <p className="text-white/80 mb-4">
          {post.description}
        </p>
      </Link>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <button
            key={tag}
            onClick={(e) => {
              e.preventDefault()
              onTagClick?.(tag)
            }}
            className="px-2 py-1 bg-brand-green-accent/20 text-brand-green-accent rounded-full text-sm hover:bg-brand-green-accent/30 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </article>
  )
} 