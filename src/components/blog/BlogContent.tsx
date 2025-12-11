'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { BlogPost } from '@/lib/mdx'
import TagFilter from './TagFilter'
import { TagPill } from './Tag'

function OpenSourceNotice() {
  return (
    <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
      <p className="text-center text-white/80">
        This blog is open source! Check out the code on{' '}
        <a 
          href="https://github.com/devandapaige/pythoness-programmer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-purple-light hover:text-brand-purple-light/80 underline"
        >
          GitHub
        </a>
        . Issues and pull requests are welcome!
      </p>
    </div>
  )
}

function RSSFeedLink() {
  return (
    <div className="mt-6 text-center">
      <Link
        href="/feed.xml"
        className="inline-flex items-center gap-2 text-white/60 hover:text-brand-purple-light transition-colors"
        aria-label="Subscribe to RSS feed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
        Subscribe to RSS Feed
      </Link>
    </div>
  )
}

interface BlogContentProps {
  posts: BlogPost[]
}

export function BlogContent({ posts }: BlogContentProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialTag = searchParams.get('tag')
  const initialSearch = searchParams.get('search') || ''
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag)
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch)

  // Keep URL in sync with selectedTag and searchQuery
  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedTag) {
      params.set('tag', selectedTag)
    }
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim())
    }
    const queryString = params.toString()
    router.replace(queryString ? `?${queryString}` : '?')
  }, [selectedTag, searchQuery, router])

  // Filter posts by tag and search query
  const filteredPosts = posts.filter(post => {
    // Filter by tag if selected
    if (selectedTag && !post.frontmatter.tags.includes(selectedTag)) {
      return false
    }
    
    // Filter by search query if provided
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      const searchableText = [
        post.frontmatter.title,
        post.frontmatter.description,
        ...post.frontmatter.tags,
      ].join(' ').toLowerCase()
      
      return searchableText.includes(query)
    }
    
    return true
  })

  return (
    <>
      {/* Search Input */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:border-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        {searchQuery.trim() && (
          <p className="mt-2 text-sm text-white/60">
            Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} matching &quot;{searchQuery.trim()}&quot;
          </p>
        )}
      </div>
      
      <TagFilter
        posts={posts}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-white/80 mb-2">No posts found</p>
          <p className="text-white/60">
            {searchQuery.trim() || selectedTag
              ? 'Try adjusting your search or filter criteria'
              : 'No blog posts available'}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article key={post.frontmatter.slug} className="border-b border-white/20 pb-8">
              <h2 className="text-2xl font-display text-brand-cream">
                <Link href={`/blog/${post.frontmatter.slug}`} className="hover:text-brand-purple-light transition-colors">
                  {post.frontmatter.title}
                </Link>
              </h2>
              <div className="mt-2 text-sm text-white/60">
                <time dateTime={post.frontmatter.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
                <span className="mx-2">•</span>
                <span>{post.frontmatter.author}</span>
              </div>
              <p className="mt-4 text-white/80">{post.frontmatter.description}</p>
              <div className="mt-4">
                {post.frontmatter.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
      <RSSFeedLink />
      <OpenSourceNotice />
    </>
  )
} 