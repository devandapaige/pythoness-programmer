'use client'

export function NewsletterStyles() {
  return (
    <style jsx global>{`
      .newsletter-issue-body {
        @apply prose prose-lg max-w-none;
      }

      .newsletter-issue-body h1,
      .newsletter-issue-body h2,
      .newsletter-issue-body h3,
      .newsletter-issue-body h4 {
        @apply font-display text-white;
      }

      .newsletter-issue-body h1 {
        @apply text-3xl mb-6;
      }

      .newsletter-issue-body h2 {
        @apply text-2xl mt-10 mb-4;
      }

      .newsletter-issue-body h3 {
        @apply text-xl mt-8 mb-3;
      }

      .newsletter-issue-body p,
      .newsletter-issue-body li {
        @apply text-white/85 leading-relaxed;
      }

      .newsletter-issue-body a {
        @apply text-brand-green-accent hover:text-brand-green-accent/80 underline;
      }

      .newsletter-issue-body ul,
      .newsletter-issue-body ol {
        @apply text-white/85 mb-6 ml-6;
      }

      .newsletter-issue-body blockquote {
        @apply border-l-4 border-brand-green-accent pl-4 italic text-white/70 my-6;
      }

      .newsletter-issue-body img {
        @apply rounded-lg max-w-full h-auto my-6;
      }

      .newsletter-issue-body table {
        @apply w-full text-white/85 my-6;
      }

      .newsletter-issue-body th,
      .newsletter-issue-body td {
        @apply border border-white/20 px-3 py-2;
      }
    `}</style>
  )
}
