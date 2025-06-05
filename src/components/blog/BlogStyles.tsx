'use client'

export function BlogStyles() {
  return (
    <style jsx global>{`
      body, .min-h-screen {
        background-color: #2e3d2a !important;
        color: #fff !important;
      }
      .blog-content {
        @apply prose prose-lg max-w-none;
      }
      
      .blog-content h1 {
        @apply text-4xl font-display text-white mb-8;
      }
      
      .blog-content h2 {
        @apply text-3xl font-display text-white mt-12 mb-6;
      }
      
      .blog-content h3 {
        @apply text-2xl font-display text-white mt-8 mb-4;
      }
      
      .blog-content p {
        @apply text-white/80 mb-6 leading-relaxed;
      }
      
      .blog-content a {
        @apply text-brand-green-accent hover:text-brand-green-accent/80 underline;
      }
      
      .blog-content ul, .blog-content ol {
        @apply text-white/80 mb-6 ml-6;
      }
      
      .blog-content li {
        @apply mb-2;
      }
      
      .blog-content code {
        @apply bg-white/10 text-white px-1.5 py-0.5 rounded text-sm;
      }
      
      .blog-content pre {
        @apply bg-white/5 p-4 rounded-lg mb-6 overflow-x-auto;
      }
      
      .blog-content pre code {
        @apply bg-transparent p-0 text-white/90;
      }
      
      .blog-content blockquote {
        @apply border-l-4 border-brand-green-accent pl-4 italic text-white/70 my-6;
      }
    `}</style>
  )
} 