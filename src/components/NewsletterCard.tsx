import { NewsletterSubscribeForm } from '@/components/NewsletterSubscribeForm'
import { pythonessPerspective } from '@/data/siteCopy'

interface NewsletterCardProps {
  title?: string
  description?: string
  source?: string
  bgColor?: string
  className?: string
}

export default function NewsletterCard({
  title = pythonessPerspective.name,
  description = pythonessPerspective.shortBlurb,
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

      <div className="relative max-w-4xl mx-auto p-5 md:p-8 lg:p-10">
        <div className="text-center mb-6 md:mb-8 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-xl border-none">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
            <p className="text-xl text-brand-green-dark/90">{description}</p>
          </div>
        </div>

        <div
          className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl border-none shadow-xl animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <NewsletterSubscribeForm source={source} />
        </div>
      </div>
    </div>
  )
}
