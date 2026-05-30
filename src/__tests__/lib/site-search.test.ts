import { BLOG_TO_NEWSLETTER_CANONICAL_SLUGS } from '@/lib/blog-newsletter-canonical'
import { getAllPosts } from '@/lib/mdx'
import { getAllNewsletterPosts } from '@/lib/newsletter/mdx'
import { freeResources } from '@/lib/resources'
import { staticSitePages } from '@/lib/site-search-static-pages'
import {
  buildSiteSearchIndex,
  buildSiteSearchIndexFromSources,
  countSiteSearchResults,
  filterSiteSearch,
} from '@/lib/site-search'
import type { BlogPost } from '@/types/blog'
import type { NewsletterPostSummary } from '@/types/newsletter'
import type { Resource } from '@/types/resources'

const mockPosts: BlogPost[] = [
  {
    frontmatter: {
      slug: 'lab-notes-only',
      title: 'Lab Notes Only Post',
      date: '2026-01-01',
      description: 'A blog post about neurodivergent workflows',
      author: 'Amanda Nelson',
      tags: ['accessibility', 'workflows'],
      image: '/images/test.png',
    },
    content: '',
  },
  {
    frontmatter: {
      slug: 'the-you-framework',
      title: 'Duplicate Blog Post',
      date: '2025-06-01',
      description: 'Should be excluded from blog index',
      author: 'Amanda Nelson',
      tags: ['automation'],
      image: '/images/test.png',
    },
    content: '',
  },
]

const mockNewsletterPosts: NewsletterPostSummary[] = [
  {
    slug: 'the-you-framework',
    title: 'The Y.O.U. Framework',
    subtitle: 'Mindful automation arc',
    preview_text: 'Weekly issue about automation systems',
    thumbnail_url: '/images/test.png',
    publishedAt: new Date(2025, 5, 1),
  },
]

const mockResources: Resource[] = [
  {
    id: 'password-security',
    title: 'Password Security Guide',
    subtitle: 'Complete User Guide',
    description: 'Password manager comparison and 2FA setup',
    emoji: '🔐',
    features: ['Password Manager Comparison', 'Two-Factor Authentication Setup'],
    href: '/passwords',
    borderColor: 'purple',
    type: 'free',
  },
]

const mockStaticPages = [
  {
    id: 'about',
    title: 'About Amanda',
    description: 'Amanda Nelson — Pythoness Programmer. Senior engineer.',
    href: '/about',
    keywords: ['about', 'amanda nelson', 'about me'],
  },
]

describe('buildSiteSearchIndexFromSources', () => {
  it('includes all four content types with correct href and type', () => {
    const index = buildSiteSearchIndexFromSources(
      mockPosts,
      mockNewsletterPosts,
      mockResources,
      mockStaticPages
    )

    expect(index).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          href: '/about',
          type: 'page',
          title: 'About Amanda',
        }),
        expect.objectContaining({
          href: '/passwords',
          type: 'resource',
          title: 'Password Security Guide',
        }),
        expect.objectContaining({
          href: '/blog/lab-notes-only',
          type: 'blog',
          title: 'Lab Notes Only Post',
        }),
        expect.objectContaining({
          href: '/newsletter/the-you-framework',
          type: 'newsletter',
          title: 'The Y.O.U. Framework',
        }),
      ])
    )
  })

  it('excludes canonical duplicate blog slugs from blog results', () => {
    const index = buildSiteSearchIndexFromSources(
      mockPosts,
      mockNewsletterPosts,
      mockResources,
      mockStaticPages
    )

    const blogItems = index.filter((item) => item.type === 'blog')
    expect(blogItems.some((item) => item.href === '/blog/the-you-framework')).toBe(false)
    expect(index.some((item) => item.href === '/newsletter/the-you-framework')).toBe(true)
  })
})

describe('filterSiteSearch', () => {
  const index = buildSiteSearchIndexFromSources(
    mockPosts,
    mockNewsletterPosts,
    mockResources,
    mockStaticPages
  )

  it('matches static pages by title and keywords', () => {
    expect(filterSiteSearch(index, 'about').pages).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: '/about', title: 'About Amanda' }),
      ])
    )
  })

  it('matches title, description, tags, subtitle, and features', () => {
    expect(filterSiteSearch(index, 'password manager').resources).toHaveLength(1)
    expect(filterSiteSearch(index, 'neurodivergent').blog).toHaveLength(1)
    expect(filterSiteSearch(index, 'mindful automation').newsletter).toHaveLength(1)
    expect(filterSiteSearch(index, '2fa').resources).toHaveLength(1)
  })

  it('is case-insensitive', () => {
    expect(filterSiteSearch(index, 'PASSWORD').resources).toHaveLength(1)
    expect(filterSiteSearch(index, 'Lab Notes').blog).toHaveLength(1)
  })

  it('returns empty grouped results for empty or whitespace query', () => {
    expect(filterSiteSearch(index, '')).toEqual({
      pages: [],
      resources: [],
      blog: [],
      newsletter: [],
    })
    expect(filterSiteSearch(index, '   ')).toEqual({
      pages: [],
      resources: [],
      blog: [],
      newsletter: [],
    })
    expect(countSiteSearchResults(filterSiteSearch(index, ''))).toBe(0)
  })

  it('groups results in stable order: pages, resources, blog, newsletter', () => {
    const results = filterSiteSearch(index, 'a')
    expect(Object.keys(results)).toEqual(['pages', 'resources', 'blog', 'newsletter'])
  })

  it('returns no matches for nonsense query', () => {
    expect(countSiteSearchResults(filterSiteSearch(index, 'xyznotfound123'))).toBe(0)
  })
})

describe('buildSiteSearchIndex', () => {
  it('reflects live content sources and stays in sync', async () => {
    const [posts, newsletterPosts, index] = await Promise.all([
      getAllPosts(),
      getAllNewsletterPosts(),
      buildSiteSearchIndex(),
    ])

    const canonicalBlogDupesInRepo = posts.filter((post) =>
      BLOG_TO_NEWSLETTER_CANONICAL_SLUGS.has(post.frontmatter.slug)
    ).length

    const expectedLength =
      staticSitePages.length +
      freeResources.length +
      posts.length -
      canonicalBlogDupesInRepo +
      newsletterPosts.length

    expect(index).toHaveLength(expectedLength)
  })

  it('includes every staticSitePages entry by href', async () => {
    const index = await buildSiteSearchIndex()
    const pageHrefs = index.filter((item) => item.type === 'page').map((item) => item.href)

    for (const page of staticSitePages) {
      expect(pageHrefs).toContain(page.href)
    }
  })

  it('includes the About page for an about query', async () => {
    const index = await buildSiteSearchIndex()
    const results = filterSiteSearch(index, 'about')

    expect(results.pages.some((item) => item.href === '/about')).toBe(true)
  })

  it('includes every freeResources entry by href', async () => {
    const index = await buildSiteSearchIndex()
    const resourceHrefs = index
      .filter((item) => item.type === 'resource')
      .map((item) => item.href)

    for (const resource of freeResources) {
      expect(resourceHrefs).toContain(resource.href)
    }
  })

  it('includes known stable slugs from each content type', async () => {
    const index = await buildSiteSearchIndex()

    expect(index.some((item) => item.href === '/passwords')).toBe(true)
    expect(index.some((item) => item.href === '/about')).toBe(true)
    expect(index.some((item) => item.type === 'blog')).toBe(true)
    expect(index.some((item) => item.type === 'newsletter')).toBe(true)
  })

  it('never indexes blog slugs that are canonical on newsletter', async () => {
    const index = await buildSiteSearchIndex()
    const blogItems = index.filter((item) => item.type === 'blog')

    for (const item of blogItems) {
      const slug = item.href.replace('/blog/', '')
      expect(BLOG_TO_NEWSLETTER_CANONICAL_SLUGS.has(slug)).toBe(false)
    }
  })
})
