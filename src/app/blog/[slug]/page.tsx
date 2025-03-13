import { Metadata } from 'next'
import { getPostBySlug, compileMDXContent } from '@/lib/mdx'
import PostHeader from '@/components/blog/PostHeader'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  return {
    title: `${post.title} | Pythoness Programmer Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  const content = await compileMDXContent(post.content)

  return (
    <article className="prose prose-invert max-w-none">
      <PostHeader post={post} />
      {content}
    </article>
  )
} 