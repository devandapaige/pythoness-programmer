import Image from 'next/image'

import { getNewsletterReplyTo } from '@/lib/newsletter/config'
import type { NewsletterPostDetail } from '@/types/newsletter'

type NewsletterIssueHeaderProps = {
  post: NewsletterPostDetail
}

export function NewsletterIssueHeader({ post }: NewsletterIssueHeaderProps) {
  const sentDate = post.publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="mb-10 border-b border-brand-purple-accent pb-8">
      <p className="text-sm uppercase tracking-wide text-brand-green-accent mb-3">
        Pythoness Perspective
      </p>
      <h1 className="mb-6 text-4xl font-display uppercase tracking-tight text-white">
        {post.title}
      </h1>

      <dl className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
        <div>
          <dt className="font-medium text-white/60">From</dt>
          <dd>Amanda Nelson · Pythoness Programmer</dd>
        </div>
        <div>
          <dt className="font-medium text-white/60">Reply-To</dt>
          <dd>
            <a
              href={`mailto:${getNewsletterReplyTo()}`}
              className="text-brand-green-accent hover:underline"
            >
              {getNewsletterReplyTo()}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-white/60">Sent</dt>
          <dd>
            <time dateTime={post.publishedAt.toISOString()}>{sentDate}</time>
          </dd>
        </div>
        {post.authors.length > 0 && (
          <div>
            <dt className="font-medium text-white/60">Authors</dt>
            <dd>{post.authors.join(', ')}</dd>
          </div>
        )}
      </dl>

      {post.thumbnail_url && (
        <div className="mt-6">
          <Image
            src={post.thumbnail_url}
            alt=""
            width={1200}
            height={630}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      )}

      {post.preview_text && (
        <p className="mt-6 text-lg text-white/90">{post.preview_text}</p>
      )}
    </header>
  )
}
