import type { Metadata } from 'next'
import Link from 'next/link'

import SiteSearchForm from '@/components/search/SiteSearchForm'
import {
  buildSiteSearchIndex,
  countSiteSearchResults,
  filterSiteSearch,
  type SiteSearchItem,
} from '@/lib/site-search'

export const metadata: Metadata = {
  title: 'Search',
  description:
    'Search Pythoness Programmer pages, resources, Lab Notes, and Pythoness Perspective newsletter issues.',
}

type SearchPageProps = {
  searchParams: Promise<{
    q?: string
  }>
}

function SearchResultGroup({
  heading,
  items,
}: {
  heading: string
  items: SiteSearchItem[]
}) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="mb-8" aria-label={heading}>
      <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-brand-green-accent">
        {heading}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="group block rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-brand-green-accent/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark"
            >
              <span className="font-medium text-white group-hover:text-brand-green-accent">
                {item.title}
              </span>
              {item.subtitle && (
                <p className="mt-1 text-sm text-white/70 line-clamp-2">{item.subtitle}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const query = params.q?.trim() ?? ''
  const index = await buildSiteSearchIndex()
  const results = query ? filterSiteSearch(index, query) : null
  const resultCount = results ? countSiteSearchResults(results) : 0

  return (
    <div className="min-h-screen bg-brand-green-dark text-white">
      <div className="site-gutter mx-auto max-w-3xl py-10">
        <header className="mb-6">
          <h1 className="font-display text-4xl uppercase tracking-tight text-white">Search</h1>
          <p className="mt-2 text-white/80">
            Find site pages, resources, Lab Notes, and Pythoness Perspective issues in one place.
          </p>
        </header>

        <SiteSearchForm defaultValue={query} id="page-site-search" variant="page" />

        {!query && (
          <p className="text-white/70">
            Enter a search term above to look across site pages, free resources, blog posts, and
            newsletter archive.
          </p>
        )}

        {query && resultCount === 0 && (
          <p className="text-white/80" role="status">
            No results for &ldquo;{query}&rdquo;. Try a different keyword or browse{' '}
            <Link href="/resources" className="text-brand-green-accent hover:underline">
              resources
            </Link>
            ,{' '}
            <Link href="/blog" className="text-brand-green-accent hover:underline">
              Lab Notes
            </Link>
            , or{' '}
            <Link href="/newsletter" className="text-brand-green-accent hover:underline">
              Pythoness Perspective
            </Link>
            .
          </p>
        )}

        {query && resultCount > 0 && results && (
          <div role="status">
            <p className="mb-6 text-sm text-white/70">
              {resultCount} {resultCount === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
            </p>
            <SearchResultGroup heading="Pages" items={results.pages} />
            <SearchResultGroup heading="Resources" items={results.resources} />
            <SearchResultGroup heading="Lab Notes" items={results.blog} />
            <SearchResultGroup heading="Pythoness Perspective" items={results.newsletter} />
          </div>
        )}
      </div>
    </div>
  )
}
