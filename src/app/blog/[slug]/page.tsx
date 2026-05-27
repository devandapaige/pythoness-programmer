import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostMetadata } from '@/components/blog/PostMetadata'
import PostNavigation from '@/components/blog/PostNavigation'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { getSiteBaseUrl } from '@/lib/newsletter/config'
import Signature from '@/components/Signature'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { MDXComponents } from 'mdx/types'
import { blogMdxOptions } from '@/lib/mdx-compile'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

const BLOG_TO_NEWSLETTER_CANONICAL_SLUGS = new Set<string>([
  'digital-spring-cleaning-a-month-of-grit-and-growth',
  'digital-spring-cleaning-deepening-our-grit-journey',
  'digital-sustainability-that-wont-burn-you-out',
  'error-proofing-your-automation',
  'lunar-new-year-2025',
  'mindful-automation-systems',
  'monthly-grit-framework-for-your-digital-spring-cleaning',
  'monthly-grit-reflection-worksheet',
  // Explicit exception: keep canonical on /blog
  // 'on-elon-musk-and-dates',
  'sawdust-and-sacred-stones',
  'tech-is-just-a-tool',
  'the-you-framework',
])

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

  // Define mdxComponents directly instead of using the hook
  const mdxComponents: MDXComponents = {
    Signature,
  }

  // Compile MDX content here
  const { content: compiledContent } = await compileMDX({
    source: post.content,
    components: mdxComponents,
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