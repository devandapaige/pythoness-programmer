export type NewsletterPostFrontmatter = {
  slug: string
  title: string
  date: string
  description: string
  author: string
  image: string
  subtitle: string
  subject_line: string
  beehiiv_id?: string
  authors: string[]
}

export type NewsletterPostSummary = {
  slug: string
  title: string
  subtitle: string
  preview_text: string
  thumbnail_url: string
  publishedAt: Date
}

export type NewsletterPostDetail = NewsletterPostSummary & {
  subject_line: string
  authors: string[]
  bodyHtml: string
  metaTitle: string
  metaDescription: string
  author: string
}
