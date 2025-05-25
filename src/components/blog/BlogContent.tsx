'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { BlogPost } from '@/lib/mdx'
import PostCard from './PostCard'
import TagFilter from './TagFilter'

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

interface BlogContentProps {
  posts: BlogPost[]
}

export default function BlogContent({ posts }: BlogContentProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialTag = searchParams.get('tag')
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag)

  // Keep URL in sync with selectedTag
  useEffect(() => {
    if (selectedTag) {
      router.replace(`?tag=${encodeURIComponent(selectedTag)}`)
    } else {
      router.replace('?')
    }
  }, [selectedTag, router])

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts

  return (
    <>
      <TagFilter
        posts={posts}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            onTagClick={setSelectedTag}
          />
        ))}
      </div>
      <OpenSourceNotice />
    </>
  )
} 