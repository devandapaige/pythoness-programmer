import { NewsletterIndexList } from '@/components/newsletter/NewsletterIndexList'
import { NewsletterSubscribeCta } from '@/components/newsletter/NewsletterSubscribeCta'
import { getAllNewsletterPosts } from '@/lib/newsletter/mdx'
import Link from 'next/link'

export default async function NewsletterIndexPage() {
  const posts = await getAllNewsletterPosts()

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl font-display text-white mb-4">
          Pythoness Perspective
        </h1>
        <p className="text-white/85 text-lg leading-relaxed">
          The weekly main newsletter archive for cosmic coders, neurodivergent creatives,
          and small businesses building tech that works for people like us.
        </p>
        <p className="mt-3 text-white/75">
          Looking for overflow ideas, experiments, and reactions?{' '}
          <Link href="/blog" className="text-brand-green-accent hover:underline">
            Visit Lab Notes
          </Link>
          .
        </p>
      </header>

      <NewsletterIndexList posts={posts} />

      <NewsletterSubscribeCta />
    </div>
  )
}
