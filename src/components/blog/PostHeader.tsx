import { BlogPost } from '@/lib/mdx'
import Image from 'next/image'
import { TagPill } from './Tag'

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
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title + ' cover image'}
          width={1200}
          height={600}
          className="w-full h-auto object-contain rounded-md bg-black/10 mb-6"
          priority
        />
      )}
    </header>
  )
} 