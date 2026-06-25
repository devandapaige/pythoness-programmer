import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'
import {
  AccessibleFix,
  accessibleFixes,
  consolidatedTools,
  humanTouchpointSteps,
  june2026Issues,
  magnificaMappings,
  skimTestQuestions,
  whoThisIsFor,
} from './data/fixes'

export const metadata: Metadata = {
  title: 'Accessible Tech Design: Five-Fix Guide | Pythoness Programmer',
  description:
    'Self-guided five-fix accessibility arc — contrast, structure, alt text, captions, and honest links in 15-minute steps, plus a free pin-up checklist PDF.',
  openGraph: {
    title: 'Accessible Tech Design: Five-Fix Guide',
    description:
      'Work through the full June accessible tech arc on one page — checks, actions, templates, and tools — plus a free checklist PDF.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/accessible-tech-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessible Tech Design: Five-Fix Guide',
    description:
      'Self-guided accessibility fixes in 15-minute steps — contrast, structure, alt text, captions, and honest links.',
  },
}

function FixCard({ fix }: { fix: AccessibleFix }): ReactNode {
  return (
    <article
      id={`fix-${fix.number}`}
      className="bg-brand-green-dark/10 border border-brand-green-accent/30 rounded-2xl p-5 md:p-6"
    >
      <div className="flex gap-4 items-start mb-4">
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold"
          aria-hidden="true"
        >
          {fix.number}
        </span>
        <div>
          <h3 className="text-2xl font-display text-brand-green-dark mt-0 mb-1">{fix.title}</h3>
          <p className="text-sm font-semibold text-brand-green-dark mb-0">
            {fix.timeEstimate} ·{' '}
            <span className="font-normal italic">The check: {fix.checkQuestion}</span>
          </p>
        </div>
      </div>

      <p className="text-brand-green-dark mb-4">
        <strong>Do this:</strong> {fix.action}
      </p>

      {fix.number === 2 && (
        <div className="mb-4">
          <p className="text-brand-green-dark font-semibold mb-2">10-second skim test</p>
          <p className="text-brand-green-dark text-sm mb-2">
            Hand your phone to a friend — or pretend you are seeing your own page for the first time.
            Within ten seconds, can they answer:
          </p>
          <ol className="list-decimal list-inside text-brand-green-dark text-sm space-y-1 mb-0">
            {skimTestQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      )}

      {fix.lensRows && fix.lensRows.length > 0 && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
            <thead className="bg-brand-green-dark/10">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">If you…</th>
                <th className="px-3 py-2 text-left font-semibold">Pick one surface</th>
                <th className="px-3 py-2 text-left font-semibold">What to change</th>
              </tr>
            </thead>
            <tbody>
              {fix.lensRows.map((row) => (
                <tr key={row.audience} className="border-t border-brand-green-accent/20">
                  <td className="px-3 py-2">{row.audience}</td>
                  <td className="px-3 py-2">{row.surface}</td>
                  <td className="px-3 py-2">{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {fix.rules && fix.rules.length > 0 && (
        <div className="mb-4">
          <p className="text-brand-green-dark font-semibold mb-2">
            {fix.number === 2 ? 'Heading hierarchy (simple rules)' : 'Rules of thumb'}
          </p>
          <ul className="list-disc list-inside text-brand-green-dark text-sm space-y-1 mb-0">
            {fix.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

      {fix.template && (
        <div className="mb-4">
          <p className="text-brand-green-dark font-semibold mb-2">Alt text template (copy this)</p>
          <pre className="bg-brand-green-dark/10 border border-brand-green-accent/30 rounded-lg p-3 text-sm text-brand-green-dark overflow-x-auto mb-3">
            <code>{fix.template}</code>
          </pre>
          {fix.examples && fix.examples.length > 0 && (
            <>
              <p className="text-brand-green-dark font-semibold mb-2">Examples</p>
              <ul className="list-none text-brand-green-dark text-sm space-y-1 mb-0 pl-0">
                {fix.examples.map((ex) => (
                  <li key={ex.bad}>
                    Bad: <code className="bg-brand-green-accent/10 px-1 rounded text-xs">{ex.bad}</code>
                    {' → '}
                    Good: <code className="bg-brand-green-accent/10 px-1 rounded text-xs">{ex.good}</code>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {fix.number === 5 && fix.examples && (
        <div className="mb-4">
          <p className="text-brand-green-dark font-semibold mb-2">Bad → better</p>
          <ul className="list-none text-brand-green-dark text-sm space-y-1 mb-0 pl-0">
            {fix.examples.map((ex) => (
              <li key={ex.bad}>
                &ldquo;{ex.bad}&rdquo; → &ldquo;{ex.good}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      )}

      {fix.platformRows && fix.platformRows.length > 0 && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
            <thead className="bg-brand-green-dark/10">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Platform</th>
                <th className="px-3 py-2 text-left font-semibold">Where alt text lives</th>
                <th className="px-3 py-2 text-left font-semibold">Quirk to know</th>
              </tr>
            </thead>
            <tbody>
              {fix.platformRows.map((row) => (
                <tr key={row.platform} className="border-t border-brand-green-accent/20">
                  <td className="px-3 py-2">{row.platform}</td>
                  <td className="px-3 py-2">{row.where}</td>
                  <td className="px-3 py-2">{row.quirk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {fix.extraNotes?.map((note) => (
        <p key={note} className="text-brand-green-dark text-sm mb-4">
          {note}
        </p>
      ))}

      {fix.platforms && (
        <p className="text-brand-green-dark text-sm mb-4">
          <strong>Platforms you already use:</strong> {fix.platforms}
        </p>
      )}

      {fix.reflectionPrompt && (
        <p className="text-brand-green-dark text-sm italic mb-4">
          <strong>Reflection:</strong> {fix.reflectionPrompt}
        </p>
      )}

      {fix.tools && fix.tools.length > 0 && (
        <div className="mb-4">
          <p className="text-brand-green-dark font-semibold mb-2">Tools for this fix</p>
          <ul className="list-disc list-inside text-brand-green-dark text-sm space-y-1 mb-0">
            {fix.tools.map((tool) => (
              <li key={tool.name}>
                {tool.href.startsWith('/') ? (
                  <Link href={tool.href} className="underline hover:text-brand-purple-dark">
                    {tool.name}
                  </Link>
                ) : (
                  <a
                    href={tool.href}
                    className="underline hover:text-brand-purple-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tool.name}
                  </a>
                )}
                {' — '}
                {tool.bestFor}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={`/newsletter/${fix.slug}`}
        className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the full issue
      </Link>
    </article>
  )
}

export default function AccessibleTechDesignPage(): ReactNode {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="site-gutter max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {/* Hero */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Accessible Tech Design
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Five fixes for the surfaces you already touch
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-0">
              A self-guided resource — one fix at a time, fifteen minutes each, no full rebuild
              required. Work through the checks, actions, and templates here, then pin the checklist
              above where you publish.
            </p>
          </section>

          {/* Who this is for */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">
              Who this is for
            </h2>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-0">
              {whoThisIsFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* How to use */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">
              How to use this page
            </h2>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-0">
              <li>Work in order (Fix 1 → 5) or jump to the fix you need today.</li>
              <li>
                Each fix has a <strong>check question</strong>, a timed action, and optional tables
                or templates.
              </li>
              <li>
                Download the checklist PDF and scan any page, post, or send before it goes live.
              </li>
              <li>Newsletter links at the bottom are optional deep dives — not required reading.</li>
            </ul>
          </section>

          {/* May → June bridge */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">
              How May connects to June
            </h2>
            <p className="text-brand-green-dark mb-3">
              May&apos;s{' '}
              <Link href="/mindful-automation" className="underline hover:text-brand-purple-dark">
                Mindful Automation
              </Link>{' '}
              hub expanded Y.O.U. to <strong>Y.O.U.R.</strong> — same three questions about your
              brain, your observations, and keeping things simple, plus <strong>R for Reach</strong>:
              who is on the other end, and what do they need that they should not have to ask for?
            </p>
            <p className="text-brand-green-dark mb-3">
              June adds a layer: <strong>you are responsible for the readability of every piece of
              text your systems put into the world at scale.</strong> When volume goes up — more
              posts, more sequences, more AI-assisted drafts — your obligation to preview goes up
              with it. Reach is not only when something sends. It is whether a tired human can{' '}
              <strong>read</strong> it without zooming.
            </p>
            <p className="text-brand-green-dark text-sm mb-0">
              Human eyes. Accessibility first. Then send.
            </p>
          </section>

          {/* Checklist PDF */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Your leave-with
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
            </div>
          </section>

          {/* Human touchpoint ritual */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Human touchpoint before publish
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              Run this before anything goes out — post, email, Story template, automated trigger.
              Not after complaints. First.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Step</th>
                    <th className="px-4 py-3 text-left font-semibold">Ask</th>
                  </tr>
                </thead>
                <tbody>
                  {humanTouchpointSteps.map((row) => (
                    <tr key={row.step} className="border-t border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold">{row.step}</td>
                      <td className="px-4 py-3">{row.ask}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Five fixes */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-2 text-brand-green-dark text-center mt-0">
              The five fixes
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              One question per area. Fifteen minutes each — or ten for Fix 1.
            </p>
            <div className="space-y-6">
              {accessibleFixes.map((fix) => (
                <FixCard key={fix.number} fix={fix} />
              ))}
            </div>
          </section>

          {/* Magnifica Humanitas */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Disarmed, welcoming, accessible
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              Pope Leo XIV&apos;s{' '}
              <a
                href="https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html"
                className="underline hover:text-brand-purple-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em>Magnifica Humanitas</em>
              </a>{' '}
              charges that AI must be disarmed, welcoming, and accessible — not merely regulated.
              Here is how the five fixes map to that charge at your scale:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Word</th>
                    <th className="px-4 py-3 text-left font-semibold">Your June fix</th>
                    <th className="px-4 py-3 text-left font-semibold">What it looks like in practice</th>
                  </tr>
                </thead>
                <tbody>
                  {magnificaMappings.map((row) => (
                    <tr key={row.word} className="border-t border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold">{row.word}</td>
                      <td className="px-4 py-3">{row.fixes}</td>
                      <td className="px-4 py-3">{row.practice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-brand-green-dark text-sm text-center mt-4 mb-0">
              Accessible design accepts human limitation — tired eyes, slow connections, brains that
              skim, bodies that need captions. Show up when you can. Include everyone when you
              publish.
            </p>
          </section>

          {/* Tools consolidated */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Tools reference
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              You do not need every tool — pick what matches how you work.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-brand-green-dark border border-brand-green-accent/30 rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Fix</th>
                    <th className="px-4 py-3 text-left font-semibold">Resource</th>
                    <th className="px-4 py-3 text-left font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {consolidatedTools.map((tool) => (
                    <tr key={tool.name} className="border-t border-brand-green-accent/20">
                      <td className="px-4 py-3">{tool.fixNumber}</td>
                      <td className="px-4 py-3">
                        {tool.href.startsWith('/') ? (
                          <Link href={tool.href} className="underline hover:text-brand-purple-dark">
                            {tool.name}
                          </Link>
                        ) : (
                          <a
                            href={tool.href}
                            className="underline hover:text-brand-purple-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {tool.name}
                          </a>
                        )}
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

          {/* Read full newsletters */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-3 text-brand-green-dark text-center mt-0">
              Read the full newsletters
            </h2>
            <p className="text-brand-green-dark text-center mb-6">
              Optional deep dives — stories, context, and the full June arc as it was sent.
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

          {/* What's next */}
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
            <p className="text-sm">June 2026 five-fix guide · Last updated: June 26, 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
