import { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { BlogContent } from '@/components/blog/BlogContent'
import { Suspense } from 'react'
import type { BlogPost } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog | Pythoness Programmer',
  description: 'Technical articles, coding tips, and industry insights from Pythoness Programmer.',
}

export default function BlogPage() {
  const posts: BlogPost[] = allPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    author: post.author,
    tags: post.tags,
    content: post.body.code,
    image: post.image
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent posts={posts} />
    </Suspense>
  )
} 