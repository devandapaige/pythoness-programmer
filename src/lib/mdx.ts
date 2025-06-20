import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Constants for file paths to improve maintainability and avoid hardcoding
const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/posts')
// const contentDirectory = path.join(process.cwd(), 'content')

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

/**
 * Retrieves all blog posts from the posts directory
 * 
 * The function reads all MDX files from the posts directory, parses their frontmatter,
 * and returns an array of blog post objects sorted by date (newest first).
 * 
 * @returns Promise resolving to an array of BlogPost objects
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_DIR)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      return getPostBySlugSync(slug)
    })
    .filter(Boolean) as BlogPost[]
  // Sort by date descending (newest first)
  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  return posts
}

/**
 * Retrieves a specific blog post by its slug
 * 
 * The function reads the MDX file corresponding to the provided slug,
 * parses its frontmatter, and returns a blog post object. If the file
 * is not found, it will trigger a 404 response.
 * 
 * @param slug - The unique identifier for the blog post
 * @returns Promise resolving to a BlogPost object
 * @throws Triggers a 404 page if the post is not found
 */
export function getPostBySlugSync(slug: string): BlogPost | null {
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
      title: data.title,
      date: data.date,
      description: data.description,
      author: data.author,
      tags: data.tags,
      image: data.image,
    },
    content,
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return getPostBySlugSync(slug)
} 