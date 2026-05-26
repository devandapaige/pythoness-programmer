import { NewsletterIndexList } from '@/components/newsletter/NewsletterIndexList'
import { NewsletterSubscribeCta } from '@/components/newsletter/NewsletterSubscribeCta'
import { getAllNewsletterPosts } from '@/lib/newsletter/mdx'

export default async function NewsletterIndexPage() {
  const posts = await getAllNewsletterPosts()

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl font-display text-white mb-4">
          Pythoness Perspective
        </h1>
        <p className="text-white/85 text-lg leading-relaxed">
          Newsletter archive for cosmic coders, neurodivergent creatives, and small
          businesses building tech that works—for people like us.
        </p>
      </header>

      <NewsletterIndexList posts={posts} />

      <NewsletterSubscribeCta />
    </div>
  )
}
