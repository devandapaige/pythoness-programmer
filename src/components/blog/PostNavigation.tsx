import Link from 'next/link'
import { BlogPost } from '@/lib/mdx'

interface PostNavigationProps {
  previousPost: BlogPost | null
  nextPost: BlogPost | null
}

export default function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  return (
    <nav className="flex justify-between items-start mt-12 pt-6 border-t border-gray-700">
      <div className="flex-1 flex flex-col items-start">
        {previousPost ? (
          <Link 
            href={`/blog/${previousPost.slug}`}
            className="group flex flex-col items-start w-full"
          >
            <div className="flex items-center mb-2">
              <span className="mr-2">←</span>
              <div>
                <div className="text-sm text-gray-400">Previous Post</div>
                <div className="text-gray-200 group-hover:text-white transition-colors">
                  {previousPost.title}
                </div>
              </div>
            </div>
          </Link>
        ) : <div />}
      </div>
      
      <div className="flex-1 flex flex-col items-end text-right">
        {nextPost ? (
          <Link 
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col items-end w-full"
          >
            <div className="flex items-center mb-2 justify-end">
              <div>
                <div className="text-sm text-gray-400">Next Post</div>
                <div className="text-gray-200 group-hover:text-white transition-colors">
                  {nextPost.title}
                </div>
              </div>
              <span className="ml-2">→</span>
            </div>
          </Link>
        ) : <div />}
      </div>
    </nav>
  )
} 