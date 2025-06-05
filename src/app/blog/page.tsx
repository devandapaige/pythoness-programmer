import { Metadata } from 'next'
import { Suspense } from 'react'
import { BlogContent } from '@/components/blog/BlogContent'
import type { BlogPost } from '@/lib/mdx'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog | Pythoness Programmer',
  description: 'Technical articles, coding tips, and industry insights from Pythoness Programmer.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  // Ensure all dates are properly formatted strings
  const processedPosts = posts.map(post => ({
    ...post,
    date: typeof post.date === 'string' ? post.date : new Date(post.date).toISOString()
  }))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent posts={processedPosts} />
    </Suspense>
  )
} 