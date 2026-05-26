export type BeehiivPostContent = {
  free?: {
    web?: string
    email?: string
    rss?: string
  }
  premium?: {
    web?: string
    email?: string
  }
}

export type BeehiivPost = {
  id: string
  title: string
  subtitle: string
  subject_line: string
  preview_text: string
  slug: string
  thumbnail_url: string
  web_url: string
  authors: string[]
  created: number
  publish_date?: number
  displayed_date?: number
  status: string
  platform: string
  meta_default_title?: string
  meta_default_description?: string
  hidden_from_feed?: boolean
  content?: BeehiivPostContent
}

export type BeehiivPostsListResponse = {
  data: BeehiivPost[]
  page: number
  limit: number
  total_results: number
  total_pages: number
}

export type BeehiivPostSummary = {
  id: string
  slug: string
  title: string
  subtitle: string
  preview_text: string
  thumbnail_url: string
  publishedAt: Date
}

export type BeehiivPostDetail = BeehiivPostSummary & {
  subject_line: string
  authors: string[]
  bodyHtml: string
  metaTitle: string
  metaDescription: string
}

export type BeehiivConfigStatus = {
  configured: boolean
  message?: string
}
