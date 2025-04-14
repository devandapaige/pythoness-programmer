import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { readFileSync } from 'fs'
import { join } from 'path'
import ContentSection from '@/app/vibe-coding-cheatsheet/components/ContentSection'
import { logError } from './errorHandling'
import { isValidString, sanitizeString } from './validation'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/posts')

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  content: string
}

export interface MDXContent {
  content: string
  frontmatter: {
    title: string
    lastUpdated: string
    summary: string
    [key: string]: any
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_DIR)
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(POSTS_DIR, file)
        const source = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(source)
        const slug = file.replace(/\.mdx$/, '')
        
        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          author: data.author,
          tags: data.tags || [],
          content
        }
      })
  )

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  
  try {
    const source = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(source)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      author: data.author,
      tags: data.tags || [],
      content
    }
  } catch (error) {
    logError(`Error reading post with slug "${slug}"`, error, { filePath })
    notFound()
  }
}

export async function compileMDXContent(content: string) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  })

  return compiledContent
}

/**
 * Safely reads and processes MDX content with validation
 */
export async function getMDXContent(filepath: string): Promise<MDXContent> {
  if (!isValidString(filepath)) {
    logError('Invalid filepath provided to getMDXContent', new Error('Invalid filepath'), { filepath })
    throw new Error('Invalid filepath provided')
  }

  // Sanitize the filepath to prevent directory traversal attacks
  const sanitizedPath = sanitizeString(filepath).replace(/\.\./g, '')
  const fullPath = path.join(contentDirectory, sanitizedPath)
  
  try {
    // Verify the file exists before attempting to read
    if (!fs.existsSync(fullPath)) {
      logError('MDX file not found', new Error('File not found'), { fullPath })
      notFound()
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Validate frontmatter has required fields
    if (!data.title) {
      logError('MDX frontmatter missing required fields', new Error('Invalid frontmatter'), { 
        filepath: sanitizedPath,
        data
      })
      throw new Error('Invalid MDX content: missing required frontmatter')
    }

    return {
      content,
      frontmatter: data as MDXContent['frontmatter'],
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes('Invalid MDX content')) {
      throw error // Rethrow validation errors
    }
    
    logError('Failed to load MDX content', error, { filepath: sanitizedPath })
    notFound()
  }
}

export async function getVibeCheatsheetContent() {
  const filePath = join(process.cwd(), 'content', 'vibe-coding-cheatsheet.mdx')
  const source = readFileSync(filePath, 'utf8')
  const { data: frontmatter } = matter(source)

  const { content } = await compileMDX({
    source,
    options: { 
      parseFrontmatter: true,
      scope: frontmatter
    },
    components: {
      ContentSection
    }
  })

  return content
} 