import { Metadata } from 'next'
import { BlogContent } from '@/components/blog/BlogContent'
import type { BlogPost } from '@/lib/mdx'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog | Pythoness Programmer',
  description: 'Technical articles, coding tips, and industry insights from Pythoness Programmer.',
}

export default async function BlogPage() {
  const posts: BlogPost[] = await getAllPosts();
  return <BlogContent posts={posts} />;
} 