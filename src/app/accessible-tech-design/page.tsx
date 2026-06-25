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

interface FiveFixRecap {
  fixNumber: number
  area: string
  slug: string
  keyAction: string
}

interface ToolResource {
  name: string
  href: string
  bestFor: string
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
  {
    slug: 'five-fixes-closeout-june-2026',
    dateLabel: 'Jun 26, 2026',
    title: 'Fix 4 + 5: captions, honest links, and the full recap',
    summary:
      'Close the month with video/audio inclusion, descriptive links and forms, plus the pin-up Accessible Tech Checklist.',
    highlights: [
      'Captions reviewed + three-line text summary for video/audio.',
      'Rewrite five vague links; fix one confusing form label.',
      'Full five-fix recap and Magnifica Humanitas mapping.',
    ],
  },
]

const fiveFixRecap: FiveFixRecap[] = [
  {
    fixNumber: 1,
    area: 'Readable contrast',
    slug: 'human-eyes-readable-contrast-june-2026',
    keyAction: 'Phone preview + 4.5:1 contrast check',
  },
  {
    fixNumber: 2,
    area: 'Scannable structure',
    slug: 'scannable-structure-fix-2-june-2026',
    keyAction: '10-second skim test + heading hierarchy',
  },
  {
    fixNumber: 3,
    area: 'Alt text workflow',
    slug: 'alt-text-workflow-june-2026',
    keyAction: 'Top 3 images + Sunday batch',
  },
  {
    fixNumber: 4,
    area: 'Video & audio',
    slug: 'five-fixes-closeout-june-2026',
    keyAction: 'Captions reviewed + text summary',
  },
  {
    fixNumber: 5,
    area: 'Links & flows',
    slug: 'five-fixes-closeout-june-2026',
    keyAction: 'Descriptive links + form labels',
  },
]

const juneTools: ToolResource[] = [
  {
    name: 'WebAIM Contrast Checker',
    href: 'https://webaim.org/resources/contrastchecker/',
    bestFor: 'Fix 1 — start here',
  },
  {
    name: 'Who Can Use',
    href: 'https://whocanuse.com',
    bestFor: 'Choosing brand color pairs',
  },
  {
    name: 'TPGi Colour Contrast Analyser',
    href: 'https://www.tpgi.com/color-contrast-checker/',
    bestFor: 'Sampling colors from a live site or screenshot',
  },
  {
    name: 'WAVE Web Accessibility Evaluation Tool',
    href: 'https://wave.webaim.org/',
    bestFor: 'Quick page scan',
  },
  {
    name: 'Firefox Accessibility Inspector',
    href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html',
    bestFor: 'Built-in contrast check on live elements',
  },
  {
    name: 'The A11Y Project Checklist',
    href: 'https://www.a11yproject.com/checklist/',
    bestFor: 'Broader sanity check beyond contrast',
  },
  {
    name: 'Accessible Social',
    href: 'https://www.accessible-social.com/',
    bestFor: 'Social posts — captions, alt text, platform advisories',
  },
]

export const metadata: Metadata = {
  title: 'Accessible Tech Design: June 2026 newsletter hub | Pythoness Programmer',
  description:
    'The complete June 2026 Accessible Tech Design series — four newsletter issues, five practical fixes, and a free pin-up checklist PDF.',
  openGraph: {
    title: 'Accessible Tech Design: June 2026 newsletter hub',
    description:
      'Follow the June 2026 Accessible Tech Design newsletter arc with weekly fixes, tools, and a free Accessible Tech Checklist PDF.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/accessible-tech-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessible Tech Design: June 2026 newsletter hub',
    description:
      'Four June 2026 issues, five accessibility fixes, and a free checklist PDF — all in one place.',
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
              Five fixes for the digital surfaces you already touch — one per week, fifteen minutes
              each. Read all four June issues here, download the checklist, and keep the arc in one
              place.
            </p>
          </section>

          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              What&apos;s inside
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              Print it, pin it above where you publish. No sign-up required.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center my-4">
              <a
                href="/accessible-tech-design/accessible-tech-checklist-2026.pdf"
                download
                className="bg-brand-green-accent text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-center text-sm"
              >
                Accessible Tech Checklist (PDF)
              </a>
              <Link
                href="/newsletter/five-fixes-closeout-june-2026"
                className="border border-brand-green-dark text-brand-green-dark px-6 py-3 rounded-md hover:bg-brand-green-dark/10 transition-colors font-semibold text-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the June closeout issue
              </Link>
            </div>
          </section>

          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              All four June issues
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
                  <h3 className="text-2xl font-display text-brand-green-dark mt-0 mb-2">
                    {issue.title}
                  </h3>
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

          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Five-fix recap
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              One question per area — scan before you publish.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">#</th>
                    <th className="px-4 py-3 text-left font-semibold">Area</th>
                    <th className="px-4 py-3 text-left font-semibold">Key action</th>
                    <th className="px-4 py-3 text-left font-semibold">Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {fiveFixRecap.map((fix) => (
                    <tr key={fix.fixNumber} className="border-t border-brand-green-accent/20">
                      <td className="px-4 py-3">{fix.fixNumber}</td>
                      <td className="px-4 py-3">{fix.area}</td>
                      <td className="px-4 py-3">{fix.keyAction}</td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/newsletter/${fix.slug}`}
                          className="underline hover:text-brand-purple-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Tools from this month
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              You do not need every tool — pick what matches how you work.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Resource</th>
                    <th className="px-4 py-3 text-left font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {juneTools.map((tool) => (
                    <tr key={tool.name} className="border-t border-brand-green-accent/20">
                      <td className="px-4 py-3">
                        <a
                          href={tool.href}
                          className="underline hover:text-brand-purple-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {tool.name}
                        </a>
                      </td>
                      <td className="px-4 py-3">{tool.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-brand-green-dark text-center mt-4 mb-0">
              Fix 3 tip: turn on Bluesky <strong>Require alt text before posting</strong> in Settings
              → Accessibility.
            </p>
          </section>

          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark mt-0">
              What&apos;s next
            </h2>
            <p className="text-brand-green-dark mb-4">
              June is complete. <strong>July</strong> opens <strong>Tech Boundaries</strong> — where
              tech drains you, how to say no to tools and platforms, and protecting creative energy.
              The free <strong>Tech Boundaries Workbook</strong> ships with the first July issue.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/mindful-automation"
                className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold"
              >
                Mindful Automation (May bridge)
              </Link>
              <Link
                href="/neuroinclusive-design"
                className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold"
              >
                Neuroinclusive Design resource
              </Link>
              <Link
                href="/resources"
                className="inline-block border border-brand-green-dark text-brand-green-dark px-4 py-2 rounded-md hover:bg-brand-green-dark/10 transition-colors text-sm font-semibold"
              >
                All resources
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
            <p className="text-sm">June 2026 series hub · Last updated: June 26, 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
