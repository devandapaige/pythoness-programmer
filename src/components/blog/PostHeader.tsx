import { BlogPost } from '@/lib/mdx'

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
    </header>
  )
} 