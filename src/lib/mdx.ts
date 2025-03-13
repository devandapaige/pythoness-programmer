import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  content: string
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