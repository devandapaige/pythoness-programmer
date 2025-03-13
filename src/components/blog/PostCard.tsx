import Link from 'next/link'
import { BlogPost } from '@/lib/mdx'

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article 
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
      role="article"
    >
      <Link 
        href={`/blog/${post.slug}`}
        className="block group"
        aria-label={`Read ${post.title}`}
      >
        <h2 className="text-2xl font-display text-white mb-2 group-hover:text-brand-green-accent transition-colors">
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
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-brand-green-accent/20 text-brand-green-accent rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  )
} 