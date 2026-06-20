import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

interface AccessibleDesignIssue {
  slug: string
  dateLabel: string
  title: string
  summary: string
  highlights: string[]
}

const june2026Issues: AccessibleDesignIssue[] = [
  {
    slug: 'human-eyes-readable-contrast-june-2026',
    dateLabel: 'Jun 5, 2026',
    title: 'Fix 1: readable contrast',
    summary:
      'Start with one surface and make it readable on a real phone screen before you send or post.',
    highlights: [
      'Readable contrast check for body text and primary CTAs.',
      'Human preview as the final step before publishing AI-assisted content.',
      'Simple ten-minute ritual you can repeat weekly.',
    ],
  },
  {
    slug: 'scannable-structure-fix-2-june-2026',
    dateLabel: 'Jun 12, 2026',
    title: 'Fix 2: scannable structure',
    summary:
      'Use clear headings and short, skimmable sections so readers and assistive tools can navigate your work.',
    highlights: [
      'The 10-second skim test for pages, posts, and long captions.',
      'Predictable heading hierarchy (H1, H2, H3) for screen readers.',
      'Wall-of-text recovery strategies for busy weeks.',
    ],
  },
  {
    slug: 'alt-text-workflow-june-2026',
    dateLabel: 'Jun 19, 2026',
    title: 'Fix 3: alt text workflow',
    summary:
      'Treat alt text as a repeatable habit so your message still lands when images do not.',
    highlights: [
      'Copy-ready alt text template: what is shown and why it matters.',
      'Sunday batch workflow for image-heavy weeks.',
      'Platform-specific reminders for websites, email, and social posts.',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Accessible Tech Design: June 2026 newsletter hub | Pythoness Programmer',
  description:
    'A temporary resource page for the Accessible Tech Design newsletter series in June 2026. Read each issue in one place as new posts are added.',
  openGraph: {
    title: 'Accessible Tech Design: June 2026 newsletter hub',
    description:
      'Follow the June 2026 Accessible Tech Design newsletter arc with weekly fixes and practical accessibility actions.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/accessible-tech-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessible Tech Design: June 2026 newsletter hub',
    description:
      'A temporary home for June 2026 Accessible Tech Design issues, updated as new newsletter content is published.',
  },
}

export default function AccessibleTechDesignPage(): ReactNode {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="site-gutter max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Accessible Tech Design
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              June 2026 newsletter series hub
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-0">
              This is a temporary resource page for this month&apos;s accessible tech design series.
              New issues will be added here as they are sent.
            </p>
          </section>

          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              June issues sent so far
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              Read in order or jump to the fix you need today.
            </p>

            <div className="space-y-6">
              {june2026Issues.map((issue, index) => (
                <article
                  key={issue.slug}
                  className="bg-brand-green-dark/10 border border-brand-green-accent/30 rounded-2xl p-5"
                >
                  <p className="text-sm font-semibold text-brand-green-dark mb-2">
                    Week {index + 1} · {issue.dateLabel}
                  </p>
                  <h3 className="text-2xl font-display text-brand-green-dark mt-0 mb-2">{issue.title}</h3>
                  <p className="text-brand-green-dark mb-3">{issue.summary}</p>
                  <ul className="list-disc list-inside text-brand-green-dark text-sm space-y-1 mb-4">
                    {issue.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/newsletter/${issue.slug}`}
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read this newsletter
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark mt-0">What&apos;s next this month</h2>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-4">
              <li>One new issue is expected for late June.</li>
              <li>This page updates as each new June issue is published.</li>
              <li>Need broader context now? Use the Neuroinclusive Design resource hub below.</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/neuroinclusive-design"
                className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold"
              >
                Neuroinclusive Design resource
              </Link>
              <Link
                href="/newsletter/subscribe"
                className="inline-block border border-brand-green-dark text-brand-green-dark px-4 py-2 rounded-md hover:bg-brand-green-dark/10 transition-colors text-sm font-semibold"
              >
                Subscribe to the newsletter
              </Link>
            </div>
          </section>

          <section className="mt-12">
            <NewsletterSection bgColor="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark" />
          </section>

          <section className="mt-12 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-white hover:text-brand-cream transition-colors"
              aria-label="Back to all resources"
            >
              <span className="mr-2">←</span>
              Back to All Resources
            </Link>
          </section>

          <div
            className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg"
            role="status"
            aria-label="Content update status"
          >
            <p className="text-sm">Temporary page · Last updated: June 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
