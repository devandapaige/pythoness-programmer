import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { notFound } from 'next/navigation'
import { readFileSync } from 'fs'
import { join } from 'path'
import ContentSection from '@/app/vibe-coding-cheatsheet/components/ContentSection'
import { logError } from './errorHandling'
import { isValidString, sanitizeString } from './validation'

// Constants for file paths to improve maintainability and avoid hardcoding
const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/posts')
const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  content: MDXRemoteSerializeResult
  image?: string
}

export interface MDXContent {
  source: MDXRemoteSerializeResult
  frontmatter: {
    title: string
    lastUpdated: string
    summary: string
    [key: string]: unknown
  }
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
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(POSTS_DIR, file)
        const source = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(source)
        const slug = file.replace(/\.mdx$/, '')
        const mdxSource = await serialize(content, { scope: data })
        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          author: data.author,
          tags: data.tags || [],
          content: mdxSource,
          image: data.image,
        }
      })
  )

  // Sort posts by date in descending order (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  
  try {
    const source = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(source)
    const mdxSource = await serialize(content, { scope: data })
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      author: data.author,
      tags: data.tags || [],
      content: mdxSource,
      image: data.image,
    }
  } catch (error) {
    logError(`Error reading post with slug "${slug}"`, error, { filePath })
    notFound()
  }
}

/**
 * Safely reads and processes MDX content with validation
 * 
 * This function implements several security measures:
 * 1. Input validation for the filepath
 * 2. Sanitization to prevent directory traversal attacks
 * 3. File existence verification
 * 4. Frontmatter validation
 * 5. Comprehensive error handling with logging
 * 
 * @param filepath - Path to the MDX file relative to the content directory
 * @returns Promise resolving to the processed MDX content with frontmatter
 * @throws Error for invalid input or missing required frontmatter
 * @throws Triggers a 404 page if the file is not found
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

    // Serialize the MDX content
    const mdxSource = await serialize(content, { 
      scope: data,
      parseFrontmatter: true
    })

    console.log('MDX Source type:', typeof mdxSource)
    console.log('MDX Source keys:', Object.keys(mdxSource))

    return {
      source: mdxSource,
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