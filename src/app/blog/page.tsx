import { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import BlogContent from '@/components/blog/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | The Pythoness Programmer',
  description: 'Thoughts on technology, accessibility, and the human experience.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return <BlogContent posts={posts} />
} 