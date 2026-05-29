export type BlogPostFrontmatter = {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  image: string
}

export type BlogPost = {
  frontmatter: BlogPostFrontmatter
  content: string
}
