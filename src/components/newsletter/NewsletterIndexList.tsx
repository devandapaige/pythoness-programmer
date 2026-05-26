import Image from 'next/image'
import Link from 'next/link'

import type { NewsletterPostSummary } from '@/types/newsletter'

type NewsletterIndexListProps = {
  posts: NewsletterPostSummary[]
}

export function NewsletterIndexList({ posts }: NewsletterIndexListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-white/80">
        No issues in the archive yet. Run{' '}
        <code className="text-brand-green-accent">node scripts/export-beehiiv-archive.js</code>{' '}
        once with Beehiiv API keys in <code className="text-brand-green-accent">.env.local</code>
        , or add MDX files under{' '}
        <code className="text-brand-green-accent">src/content/newsletter/posts/</code>.
      </p>
    )
  }

  return (
    <ul className="space-y-8">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-brand-cream/15 pb-8 last:border-0">
          <article>
            <time
              dateTime={post.publishedAt.toISOString()}
              className="text-sm text-white/60"
            >
              {post.publishedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h2 className="mt-2 text-2xl font-display uppercase tracking-tight">
              <Link
                href={`/newsletter/${post.slug}`}
                className="text-white hover:text-brand-green-accent transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            {post.subtitle && (
              <p className="mt-1 text-brand-green-accent/90">{post.subtitle}</p>
            )}
            {post.thumbnail_url && (
              <Link href={`/newsletter/${post.slug}`} className="mt-4 block">
                <Image
                  src={post.thumbnail_url}
                  alt=""
                  width={800}
                  height={420}
                  className="w-full max-w-xl h-auto rounded-lg"
                />
              </Link>
            )}
            <Link
              href={`/newsletter/${post.slug}`}
              className="mt-4 inline-block text-brand-green-accent hover:underline text-sm"
            >
              Read issue →
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
