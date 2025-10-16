const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Constants for file paths to improve maintainability and avoid hardcoding
const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/posts')

function getAllPosts() {
  const files = fs.readdirSync(POSTS_DIR)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      return getPostBySlugSync(slug)
    })
    .filter(Boolean)
  // Sort by date descending (newest first)
  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  return posts
}

function getPostBySlugSync(slug) {
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

function generateRSS() {
  try {
    const posts = getAllPosts()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pythonessprogrammer.com'

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Pythoness Programmer</title>
    <link>${baseUrl}</link>
    <description>Thoughts on technology, accessibility, and the human experience.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${baseUrl}/blog/${post.frontmatter.slug}</link>
      <guid>${baseUrl}/blog/${post.frontmatter.slug}</guid>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <author>${post.frontmatter.author}</author>
      ${post.frontmatter.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), 'public')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    // Write the RSS feed to public/feed.xml
    fs.writeFileSync(path.join(publicDir, 'feed.xml'), rss)
    console.log('RSS feed generated successfully at public/feed.xml')
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    process.exit(1)
  }
}

generateRSS()
