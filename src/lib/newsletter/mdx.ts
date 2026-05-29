import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import type {
  NewsletterPostDetail,
  NewsletterPostFrontmatter,
  NewsletterPostSummary,
} from '@/types/newsletter'

const POSTS_DIR = path.join(process.cwd(), 'src/content/newsletter/posts')

/** Parse YYYY-MM-DD as a calendar date (not UTC midnight, which shifts to prior day in US TZ). */
export function parseNewsletterDate(dateStr: string): Date {
  const dateOnly = dateStr.trim().slice(0, 10)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) {
    const [year, month, day] = dateOnly.split('-').map(Number)
    return new Date(year, month - 1, day)
  }
  return new Date(dateStr)
}

const toSummary = (
  frontmatter: NewsletterPostFrontmatter
): NewsletterPostSummary => ({
  slug: frontmatter.slug,
  title: frontmatter.title,
  subtitle: frontmatter.subtitle,
  preview_text: frontmatter.description,
  thumbnail_url: frontmatter.image,
  publishedAt: parseNewsletterDate(frontmatter.date),
})

export function getNewsletterPostsDir(): string {
  return POSTS_DIR
}

export function hasNewsletterArchive(): boolean {
  if (!fs.existsSync(POSTS_DIR)) return false
  return fs.readdirSync(POSTS_DIR).some((file) => file.endsWith('.mdx'))
}

export function getNewsletterPostBySlugSync(slug: string): {
  frontmatter: NewsletterPostFrontmatter
  content: string
} | null {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(POSTS_DIR, `${realSlug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: {
      slug: realSlug,
      title: data.title ?? '',
      date: data.date ?? '',
      description: data.description ?? '',
      author: data.author ?? 'Amanda Nelson',
      image: data.image ?? '',
      subtitle: data.subtitle ?? '',
      subject_line: data.subject_line ?? '',
      beehiiv_id: data.beehiiv_id,
      authors: Array.isArray(data.authors) ? data.authors : [],
    },
    content: content.trim(),
  }
}

export async function getAllNewsletterPosts(): Promise<NewsletterPostSummary[]> {
  if (!hasNewsletterArchive()) {
    return []
  }

  const files = fs.readdirSync(POSTS_DIR)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const post = getNewsletterPostBySlugSync(slug)
      return post ? toSummary(post.frontmatter) : null
    })
    .filter(Boolean) as NewsletterPostSummary[]

  posts.sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  )
  return posts
}

export async function getNewsletterPostBySlug(
  slug: string
): Promise<NewsletterPostDetail | null> {
  const post = getNewsletterPostBySlugSync(slug)
  if (!post) return null

  const summary = toSummary(post.frontmatter)

  return {
    ...summary,
    subject_line: post.frontmatter.subject_line || summary.title,
    authors: post.frontmatter.authors,
    bodyHtml: post.content,
    metaTitle: post.frontmatter.title,
    metaDescription: post.frontmatter.description,
    author: post.frontmatter.author,
  }
}
