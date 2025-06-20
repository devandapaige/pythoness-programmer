import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostMetadata } from '@/components/blog/PostMetadata'
import PostNavigation from '@/components/blog/PostNavigation'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { compileMDX } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'

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
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.frontmatter.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params
  const posts = await getAllPosts()
  const postIndex = posts.findIndex((post) => post.frontmatter.slug === resolvedParams.slug)
  if (postIndex === -1) notFound()
  const post = posts[postIndex]
  const previousPost = postIndex > 0 ? posts[postIndex - 1] : null
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null

  // Define mdxComponents directly instead of using the hook
  const mdxComponents: MDXComponents = {
    Signature: () => (
      <div style={{ textAlign: 'left', width: '100%' }}>
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/5abd08ee-bc4d-49f0-9303-3d5d75ef4359/email_signatures.png?t=1742411231"
          alt="Signature"
          width={200}
          height={100}
          style={{ width: '33%', height: 'auto', display: 'inline-block' }}
        />
      </div>
    ),
  }

  // Compile MDX content here
  const { content: compiledContent } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  })

  return (
    <article>
      <PostMetadata
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        tags={post.frontmatter.tags}
        image={post.frontmatter.image}
      />
      <div className="blog-content prose prose-lg max-w-none prose-invert">
        {compiledContent}
      </div>
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
    </article>
  )
} 