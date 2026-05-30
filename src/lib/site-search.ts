import { BLOG_TO_NEWSLETTER_CANONICAL_SLUGS } from '@/lib/blog-newsletter-canonical'
import { getAllPosts } from '@/lib/mdx'
import { getAllNewsletterPosts } from '@/lib/newsletter/mdx'
import { freeResources } from '@/lib/resources'
import { staticSitePages, type StaticSitePage } from '@/lib/site-search-static-pages'
import type { BlogPost } from '@/types/blog'
import type { NewsletterPostSummary } from '@/types/newsletter'
import type { Resource } from '@/types/resources'

export type SiteSearchContentType = 'page' | 'resource' | 'blog' | 'newsletter'

export type SiteSearchItem = {
  id: string
  title: string
  subtitle?: string
  href: string
  type: SiteSearchContentType
  searchableText: string
}

export type GroupedSiteSearchResults = {
  pages: SiteSearchItem[]
  resources: SiteSearchItem[]
  blog: SiteSearchItem[]
  newsletter: SiteSearchItem[]
}

function joinSearchableText(parts: (string | string[] | undefined)[]): string {
  return parts
    .flatMap((part) => (Array.isArray(part) ? part : part ? [part] : []))
    .join(' ')
    .toLowerCase()
}

export function buildSiteSearchIndexFromSources(
  posts: BlogPost[],
  newsletterPosts: NewsletterPostSummary[],
  resources: Resource[],
  pages: StaticSitePage[] = staticSitePages
): SiteSearchItem[] {
  const pageItems: SiteSearchItem[] = pages.map((page) => ({
    id: `page:${page.id}`,
    title: page.title,
    subtitle: page.subtitle,
    href: page.href,
    type: 'page',
    searchableText: joinSearchableText([
      page.title,
      page.subtitle,
      page.description,
      page.keywords,
    ]),
  }))

  const resourceItems: SiteSearchItem[] = resources.map((resource) => ({
    id: `resource:${resource.id}`,
    title: resource.title,
    subtitle: resource.subtitle,
    href: resource.href,
    type: 'resource',
    searchableText: joinSearchableText([
      resource.title,
      resource.subtitle,
      resource.description,
      resource.features,
    ]),
  }))

  const blogItems: SiteSearchItem[] = posts
    .filter((post) => !BLOG_TO_NEWSLETTER_CANONICAL_SLUGS.has(post.frontmatter.slug))
    .map((post) => ({
      id: `blog:${post.frontmatter.slug}`,
      title: post.frontmatter.title,
      subtitle: post.frontmatter.description,
      href: `/blog/${post.frontmatter.slug}`,
      type: 'blog' as const,
      searchableText: joinSearchableText([
        post.frontmatter.title,
        post.frontmatter.description,
        post.frontmatter.tags,
      ]),
    }))

  const newsletterItems: SiteSearchItem[] = newsletterPosts.map((post) => ({
    id: `newsletter:${post.slug}`,
    title: post.title,
    subtitle: post.subtitle || post.preview_text,
    href: `/newsletter/${post.slug}`,
    type: 'newsletter',
    searchableText: joinSearchableText([
      post.title,
      post.subtitle,
      post.preview_text,
    ]),
  }))

  return [...pageItems, ...resourceItems, ...blogItems, ...newsletterItems]
}

export async function buildSiteSearchIndex(): Promise<SiteSearchItem[]> {
  const [posts, newsletterPosts] = await Promise.all([
    getAllPosts(),
    getAllNewsletterPosts(),
  ])

  return buildSiteSearchIndexFromSources(posts, newsletterPosts, freeResources)
}

export function filterSiteSearch(
  index: SiteSearchItem[],
  query: string
): GroupedSiteSearchResults {
  const trimmed = query.trim().toLowerCase()
  const empty: GroupedSiteSearchResults = {
    pages: [],
    resources: [],
    blog: [],
    newsletter: [],
  }

  if (!trimmed) {
    return empty
  }

  const matches = index.filter((item) => item.searchableText.includes(trimmed))

  return {
    pages: matches.filter((item) => item.type === 'page'),
    resources: matches.filter((item) => item.type === 'resource'),
    blog: matches.filter((item) => item.type === 'blog'),
    newsletter: matches.filter((item) => item.type === 'newsletter'),
  }
}

export function countSiteSearchResults(results: GroupedSiteSearchResults): number {
  return (
    results.pages.length +
    results.resources.length +
    results.blog.length +
    results.newsletter.length
  )
}
