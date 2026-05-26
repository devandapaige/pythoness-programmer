import NewsletterCard from '@/components/NewsletterCard'

interface NewsletterSectionProps {
  bgColor?: string
}

export default function NewsletterSection({ bgColor }: NewsletterSectionProps) {
  return (
    <section
      id="newsletter"
      className={`relative py-24 px-4 md:px-6 ${bgColor || 'bg-gradient-to-br from-brand-purple-dark/5 via-brand-cream to-brand-green-dark/5'} overflow-hidden`}
    >
      <NewsletterCard
        source="resource-page"
        bgColor="bg-transparent shadow-none"
        className="shadow-none"
      />
    </section>
  )
}
