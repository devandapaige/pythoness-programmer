import { Metadata } from 'next'
import { getPostBySlug, compileMDXContent, getAllPosts } from '@/lib/mdx'
import PostHeader from '@/components/blog/PostHeader'
import PostNavigation from '@/components/blog/PostNavigation'

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
  
  // Get all posts and find the current post's index
  const allPosts = await getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === params.slug)
  
  // Get previous and next posts
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <article className="prose prose-invert max-w-none">
      <PostHeader post={post} />
      {content}
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
    </article>
  )
} 