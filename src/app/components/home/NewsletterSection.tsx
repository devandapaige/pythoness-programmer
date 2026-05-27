import NewsletterCard from '@/components/NewsletterCard'

interface NewsletterSectionProps {
  bgColor?: string
}

export default function NewsletterSection({ bgColor }: NewsletterSectionProps) {
  return (
    <section
      id="newsletter"
      className={`site-gutter relative ${bgColor || 'bg-gradient-to-br from-brand-purple-dark/5 via-brand-cream to-brand-green-dark/5'} overflow-hidden`}
    >
      <NewsletterCard
        source="resource-page"
        bgColor="bg-transparent shadow-none"
        className="shadow-none"
      />
    </section>
  )
}
