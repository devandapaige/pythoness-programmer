import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { NewsletterHtmlContent } from '@/components/newsletter/NewsletterHtmlContent'
import { NewsletterIssueHeader } from '@/components/newsletter/NewsletterIssueHeader'
import { NewsletterSubscribeCta } from '@/components/newsletter/NewsletterSubscribeCta'
import { getSiteBaseUrl } from '@/lib/newsletter/config'
import {
  getAllNewsletterPosts,
  getNewsletterPostBySlug,
} from '@/lib/newsletter/mdx'

interface NewsletterIssuePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getAllNewsletterPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: NewsletterIssuePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getNewsletterPostBySlug(slug)
  if (!post) return {}

  const baseUrl = getSiteBaseUrl()

  return {
    title: `${post.metaTitle} | Pythoness Perspective`,
    description: post.metaDescription,
    alternates: {
      canonical: `${baseUrl}/newsletter/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: post.thumbnail_url ? [{ url: post.thumbnail_url }] : undefined,
    },
  }
}

export default async function NewsletterIssuePage({
  params,
}: NewsletterIssuePageProps) {
  const { slug } = await params
  const [post, allPosts] = await Promise.all([
    getNewsletterPostBySlug(slug),
    getAllNewsletterPosts(),
  ])

  if (!post) {
    notFound()
  }

  const currentIndex = allPosts.findIndex((item) => item.slug === slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null

  return (
    <article>
      <p className="mb-6 text-sm text-white/60">
        This issue of Pythoness Perspective was sent to newsletter subscribers.{' '}
        <Link href="/newsletter" className="text-brand-green-accent hover:underline">
          Browse all issues
        </Link>
      </p>

      <NewsletterIssueHeader post={post} />
      <NewsletterHtmlContent html={post.bodyHtml} />
      <NewsletterSubscribeCta />

      {(previousPost || nextPost) && (
        <nav
          className="mt-12 flex flex-col gap-4 border-t border-brand-cream/20 pt-8 sm:flex-row sm:justify-between"
          aria-label="Newsletter issue navigation"
        >
          {previousPost ? (
            <Link
              href={`/newsletter/${previousPost.slug}`}
              className="text-brand-green-accent hover:underline"
            >
              ← {previousPost.title}
            </Link>
          ) : (
            <span />
          )}
          {nextPost ? (
            <Link
              href={`/newsletter/${nextPost.slug}`}
              className="text-brand-green-accent hover:underline sm:text-right"
            >
              {nextPost.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}
