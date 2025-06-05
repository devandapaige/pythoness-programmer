import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostMetadata } from '@/components/blog/PostMetadata'
import PostNavigation from '@/components/blog/PostNavigation'
import type { BlogPost } from '@/lib/mdx'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params
  const posts: BlogPost[] = await getAllPosts()
  const postIndex = posts.findIndex((post) => post.slug === resolvedParams.slug)
  if (postIndex === -1) notFound()
  const post = posts[postIndex]
  const previousPost = postIndex > 0 ? posts[postIndex - 1] : null
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null

  return (
    <article>
      <PostMetadata
        title={post.title}
        date={post.date}
        description={post.description}
        author={post.author}
        tags={post.tags}
        image={post.image}
      />
      <div className="blog-content prose prose-lg max-w-none prose-invert">
        {post.content}
      </div>
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
    </article>
  )
} 