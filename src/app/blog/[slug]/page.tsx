import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidElement, type ReactNode } from 'react'
import { PostMetadata } from '@/components/blog/PostMetadata'
import PostNavigation from '@/components/blog/PostNavigation'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { getSiteBaseUrl } from '@/lib/newsletter/config'
import Key from '@/components/Key'
import Signature from '@/components/Signature'
import Mermaid from '@/components/blog/Mermaid'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { MDXComponents } from 'mdx/types'
import { blogMdxOptions } from '@/lib/mdx-compile'
import { BLOG_TO_NEWSLETTER_CANONICAL_SLUGS } from '@/lib/blog-newsletter-canonical'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

function getMermaidChart(children: ReactNode): string | null {
  if (!isValidElement<{ className?: string; children?: ReactNode }>(children)) {
    return null
  }

  const className = children.props.className ?? ''
  if (!className.includes('language-mermaid')) {
    return null
  }

  const chart = children.props.children
  return typeof chart === 'string' ? chart : String(chart ?? '')
}

const blogMdxComponents: MDXComponents = {
  Key,
  Signature,
  pre: ({ children, ...props }) => {
    const chart = getMermaidChart(children)
    if (chart) {
      return <Mermaid chart={chart} />
    }

    return <pre {...props}>{children}</pre>
  },
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const baseUrl = getSiteBaseUrl()
  const canonicalToNewsletter = BLOG_TO_NEWSLETTER_CANONICAL_SLUGS.has(slug)

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: canonicalToNewsletter
      ? { canonical: `${baseUrl}/newsletter/${slug}` }
      : undefined,
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

  const { content: compiledContent } = await compileMDX({
    source: post.content,
    components: blogMdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: blogMdxOptions,
    },
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
      <div className="blog-content prose prose-lg max-w-none prose-invert prose-table:w-full">
        {compiledContent}
      </div>
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
    </article>
  )
} 