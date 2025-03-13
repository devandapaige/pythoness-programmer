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
          Welcome to the Pythoness Programmer blog! Here you'll find technical articles,
          coding tips, and industry insights to help you on your programming journey.
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