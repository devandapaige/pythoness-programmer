import Link from 'next/link'
import { BlogPost } from '@/lib/mdx'
import Image from 'next/image'

interface PostHeaderProps {
  post: BlogPost
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-display text-white mb-4">
        {post.title}
      </h1>
      <div className="flex items-center space-x-4 text-white/60 mb-4">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <span>by {post.author}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="px-2 py-1 bg-brand-green-accent/20 text-brand-green-accent rounded-full text-sm hover:bg-brand-green-accent/30 transition-colors"
            aria-label={`View all posts tagged ${tag}`}
          >
            {tag}
          </Link>
        ))}
      </div>
      {post.image && (
        <div className="w-full max-w-full rounded-md overflow-hidden mb-6" style={{ aspectRatio: '1200/650', background: '#222' }}>
          <Image
            src={post.image}
            alt={post.title + ' cover image'}
            width={1200}
            height={650}
            className="w-full h-full object-cover"
            style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
            priority
          />
        </div>
      )}
    </header>
  )
} 