'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { BlogPost } from '@/lib/mdx'
import PostCard from './PostCard'
import TagFilter from './TagFilter'

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
    </>
  )
} 