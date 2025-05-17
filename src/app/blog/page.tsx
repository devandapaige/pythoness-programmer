import { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Blog | Pythoness Programmer',
  description: 'Technical articles, coding tips, and industry insights from Pythoness Programmer.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-8">
      <div className="prose prose-invert max-w-none">
        <p className="text-white/80">
          Welcome to the Pythoness Programmer blog! Here you&apos;ll find technical articles,
          coding tips, and industry insights to help you on your programming journey.
        </p>
        <p className="text-lg text-brand-purple-dark/80 mb-8">
          Let&apos;s explore the world of tech together!
        </p>
      </div>
      
      <div 
        className="grid gap-6 md:grid-cols-2"
        role="feed"
        aria-label="Blog posts"
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
} 