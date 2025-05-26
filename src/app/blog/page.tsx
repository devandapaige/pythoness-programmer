import { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import BlogContent from '@/components/blog/BlogContent'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Blog | The Pythoness Programmer',
  description: 'Thoughts on technology, accessibility, and the human experience.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogContent posts={posts} />
    </Suspense>
  )
} 