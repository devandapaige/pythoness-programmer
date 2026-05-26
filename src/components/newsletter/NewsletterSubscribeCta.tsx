import NewsletterCard from '@/components/NewsletterCard'
import { pythonessPerspective } from '@/data/siteCopy'

export function NewsletterSubscribeCta() {
  return (
    <section className="mt-16 pt-10 border-t border-brand-cream/20">
      <p className="text-white/80 mb-6 text-center max-w-2xl mx-auto">
        This issue was sent to newsletter subscribers. Sign up to receive the next one (
        {pythonessPerspective.scheduleLabel.toLowerCase()}).
      </p>
      <NewsletterCard
        title={pythonessPerspective.name}
        description={pythonessPerspective.shortBlurb}
        bgColor="bg-brand-green-dark/40"
        className="shadow-none"
      />
    </section>
  )
}
