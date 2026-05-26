type NewsletterHtmlContentProps = {
  html: string
}

export function NewsletterHtmlContent({ html }: NewsletterHtmlContentProps) {
  if (!html.trim()) {
    return (
      <p className="text-white/70">
        This issue has no body content yet. Re-run the export script or add content to the MDX file.
      </p>
    )
  }

  return (
    <div
      className="newsletter-issue-body prose prose-lg max-w-none prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
