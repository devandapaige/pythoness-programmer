import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { PostMetadata } from '@/components/blog/PostMetadata'
import { MDXContent } from '@/components/mdx-content'
import PostNavigation from '@/components/blog/PostNavigation'
import type { BlogPost } from '@/lib/mdx'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

const mappedPosts: BlogPost[] = allPosts.map(post => ({
  slug: post.slug,
  title: post.title,
  date: post.date,
  description: post.description,
  author: post.author,
  tags: post.tags,
  content: post.body.code,
  image: post.image
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function PostPage({ params }: PostPageProps) {
  const postIndex = mappedPosts.findIndex((post) => post.slug === params.slug)
  if (postIndex === -1) notFound()
  const post = mappedPosts[postIndex]
  const previousPost = postIndex > 0 ? mappedPosts[postIndex - 1] : null
  const nextPost = postIndex < mappedPosts.length - 1 ? mappedPosts[postIndex + 1] : null

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
        <MDXContent code={post.content} />
      </div>
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
    </article>
  )
} 