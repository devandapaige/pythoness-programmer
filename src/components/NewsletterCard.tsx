import { NewsletterSubscribeForm } from '@/components/NewsletterSubscribeForm'

interface NewsletterCardProps {
  title?: string
  description?: string
  source?: string
  bgColor?: string
  className?: string
}

export default function NewsletterCard({
  title = 'Stay Connected',
  description = 'Get strategic insights on navigating tech spaces, building sustainable systems, and creating accessible solutions. No fluff, just practical expertise and industry awareness.',
  source = 'website',
  bgColor = 'bg-gradient-to-br from-brand-green-dark/5 via-brand-cream to-brand-green-dark/5',
  className = '',
}: NewsletterCardProps) {
  return (
    <div
      className={`relative ${bgColor} overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto p-8 md:p-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-none">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
            <p className="text-xl text-brand-green-dark/90">{description}</p>
          </div>
        </div>

        <div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <NewsletterSubscribeForm source={source} />
        </div>
      </div>
    </div>
  )
}
