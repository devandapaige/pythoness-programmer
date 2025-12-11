import Link from 'next/link'
import NewsletterCard from '../../components/NewsletterCard'

export const metadata = {
  title: 'Services | Pythoness Programmer',
  description: 'We are currently in a period of rest. Services will resume March 2026.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/95 to-brand-purple-dark">
      {/* Hero Section - Rest Mode */}
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display mb-6 text-brand-cream">
              Services
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-brand-purple-light to-transparent mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-brand-cream/90 mb-8 leading-relaxed">
              We are currently in a period of rest and reflection, following the ancient tradition of the Pythia Oracles of Delphi.
            </p>
            <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-brand-purple-light/30">
              <p className="text-xl md:text-2xl text-brand-cream mb-4">
                Consulting services will resume
              </p>
              <p className="text-3xl md:text-4xl font-display text-brand-purple-light mb-6">
                March 2026
              </p>
              <p className="text-lg md:text-xl text-brand-cream/80">
                Active season: March - November 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Info Section */}
      <section className="py-16 px-4 md:px-6 bg-brand-purple-dark/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-brand-purple-light/20">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-cream">
              About Our Services
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-brand-cream/90 text-lg leading-relaxed mb-6">
                During our active season, we offer Digital Psychic sessions designed for small business owners who want to find their tech stack simple, easy, and functional. Our approach combines technical expertise, pattern recognition, and spiritual insight to help you bring your vision to life.
              </p>
              
              <div className="bg-brand-purple-light/10 rounded-xl p-6 mb-6 border border-brand-purple-light/20">
                <h3 className="text-2xl font-display mb-4 text-brand-purple-light">
                  Async Digital Psychic Reading
                </h3>
                <p className="text-brand-cream/90 text-lg leading-relaxed mb-4">
                  Our asynchronous service will be available starting March 2026. This 20-minute video recording provides a personalized intuitive reading for your project, website, or online presence—delivered as a private video you can watch and re-watch at your pace.
                </p>
                <p className="text-brand-cream/80">
                  Perfect for busy schedules, this service includes tarot card pulls, deep project analysis, and pattern recognition insights—all without requiring a live meeting.
                </p>
              </div>

              <p className="text-brand-cream/90 text-lg leading-relaxed">
                If you're interested in our services, we encourage you to subscribe to our newsletter to be the first to know when our schedule reopens in March 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <NewsletterCard
            title="Be the First to Know"
            description="Subscribe to our newsletter to be notified when our services resume in March 2026. You'll also receive strategic insights on tech, systems, and accessible solutions."
            bgColor="bg-brand-purple-dark/30"
          />
        </div>
      </section>
    </main>
  )
}
