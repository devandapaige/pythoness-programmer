import { extractAndSanitizePostHtml, pickRawPostHtml } from '@/lib/beehiiv/html'
import type {
  BeehiivPost,
  BeehiivPostDetail,
  BeehiivPostSummary,
  BeehiivPostsListResponse,
} from '@/types/beehiiv'

export const BEEHIIV_API_BASE_URL = 'https://api.beehiiv.com/v2'
const LIST_PAGE_LIMIT = 50

export type BeehiivCredentials = {
  apiKey: string
  publicationId: string
}

type ListPostsOptions = {
  page?: number
  expandContent?: boolean
  slugs?: string[]
}

export const getPublishedTimestamp = (post: BeehiivPost): number =>
  post.displayed_date ?? post.publish_date ?? post.created

export const toPostSummary = (post: BeehiivPost): BeehiivPostSummary => ({
  id: post.id,
  slug: post.slug,
  title: post.title || post.subject_line,
  subtitle: post.subtitle,
  preview_text: post.preview_text,
  thumbnail_url: post.thumbnail_url,
  publishedAt: new Date(getPublishedTimestamp(post) * 1000),
})

export const isPublishedArchivePost = (post: BeehiivPost): boolean => {
  if (!post.slug?.trim()) return false
  if (post.hidden_from_feed) return false
  return post.status !== 'draft'
}

const buildPostsUrl = (
  publicationId: string,
  { page = 1, expandContent = false, slugs }: ListPostsOptions
): string => {
  const params = new URLSearchParams()
  params.set('limit', String(LIST_PAGE_LIMIT))
  params.set('page', String(page))
  params.set('status', 'all')
  params.set('platform', 'all')
  params.set('order_by', 'publish_date')
  params.set('direction', 'desc')

  if (expandContent) {
    params.append('expand', 'free_web_content')
    params.append('expand', 'free_rss_content')
  }

  if (slugs?.length) {
    for (const slug of slugs) {
      params.append('slugs[]', slug)
    }
  }

  return `${BEEHIIV_API_BASE_URL}/publications/${publicationId}/posts?${params.toString()}`
}

export const fetchBeehiivJson = async <T>(url: string, apiKey: string): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Beehiiv API error (${response.status}): ${errorBody}`)
  }

  return response.json() as Promise<T>
}

const fetchPostsPage = async (
  credentials: BeehiivCredentials,
  options: ListPostsOptions
): Promise<BeehiivPostsListResponse> => {
  const url = buildPostsUrl(credentials.publicationId, options)
  return fetchBeehiivJson<BeehiivPostsListResponse>(url, credentials.apiKey)
}

export const listAllBeehiivPosts = async (
  credentials: BeehiivCredentials
): Promise<BeehiivPostSummary[]> => {
  const summaries: BeehiivPostSummary[] = []
  let page = 1
  let totalPages = 1

  while (page <= totalPages) {
    const response = await fetchPostsPage(credentials, { page })
    totalPages = response.total_pages || 1

    for (const post of response.data) {
      if (isPublishedArchivePost(post)) {
        summaries.push(toPostSummary(post))
      }
    }

    page += 1
  }

  summaries.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  return summaries
}

export const fetchBeehiivPostDetail = async (
  credentials: BeehiivCredentials,
  slug: string
): Promise<BeehiivPostDetail | null> => {
  const response = await fetchPostsPage(credentials, {
    slugs: [slug],
    expandContent: true,
    page: 1,
  })

  const post = response.data.find((item) => item.slug === slug)
  if (!post || !isPublishedArchivePost(post)) {
    return null
  }

  const rawHtml = pickRawPostHtml(post.content)
  const bodyHtml = extractAndSanitizePostHtml(rawHtml)
  const summary = toPostSummary(post)

  return {
    ...summary,
    subject_line: post.subject_line,
    authors: post.authors,
    bodyHtml,
    metaTitle: post.meta_default_title || summary.title,
    metaDescription: post.meta_default_description || summary.preview_text,
  }
}

export const fetchAllBeehiivPostDetails = async (
  credentials: BeehiivCredentials
): Promise<BeehiivPostDetail[]> => {
  const summaries = await listAllBeehiivPosts(credentials)
  const details: BeehiivPostDetail[] = []

  for (const summary of summaries) {
    const detail = await fetchBeehiivPostDetail(credentials, summary.slug)
    if (detail) {
      details.push(detail)
    }
  }

  return details
}
