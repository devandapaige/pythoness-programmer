import { getAllPosts } from '@/lib/mdx'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const posts = await getAllPosts()
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

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
} 