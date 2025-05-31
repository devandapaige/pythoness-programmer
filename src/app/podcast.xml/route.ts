import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pythonessprogrammer.com'
  
  // Fetch podcast feed from Substack
  const response = await fetch('https://api.substack.com/feed/podcast/4307103.rss')
  const substackFeed = await response.text()
  
  // Parse the Substack feed and transform it to match your domain
  const transformedFeed = substackFeed
    .replace(/https:\/\/pythoness\.substack\.com/g, baseUrl)
    .replace(/https:\/\/api\.substack\.com\/feed\/podcast\/4307103\.rss/g, `${baseUrl}/podcast.xml`)

  return new NextResponse(transformedFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
} 