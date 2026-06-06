import { Metadata } from 'next'
import { Suspense } from 'react'
import { BlogContent } from '@/components/blog/BlogContent'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog | Pythoness Programmer',
  description:
    'Lab Notes: tools, workflows, and the messy real work of making tech fit your brain.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  // Ensure all dates are properly formatted strings
  const processedPosts = posts.map(post => ({
    ...post,
    frontmatter: {
      ...post.frontmatter,
      date: typeof post.frontmatter.date === 'string' ? post.frontmatter.date : new Date(post.frontmatter.date).toISOString()
    }
  }))

  return (
    <Suspense fallback={<div>Loading Lab Notes…</div>}>
      <BlogContent posts={processedPosts} />
    </Suspense>
  )
} 