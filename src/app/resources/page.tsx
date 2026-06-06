import Link from 'next/link'
import { Metadata } from 'next'
import ResourcesList from '@/components/resources/ResourcesList'
import { pythonessPerspective } from '@/data/siteCopy'
import { freeResources } from '@/lib/resources'

export const metadata: Metadata = {
  title: 'Resources | Pythoness Programmer',
  description: 'Free resources for digital wellness, automation, and neurodivergent-friendly tech solutions.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="site-gutter max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-6">
              Digital wellness tools, automation guides, and neurodivergent-friendly tech solutions
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Everything you need to build sustainable, brain-friendly digital workflows. All resources are designed 
              with neurodivergent thinking patterns in mind.
            </p>
          </section>

          {/* Free Resources Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                Free Resources
              </h2>
              <p className="text-lg text-brand-cream/90 max-w-2xl mx-auto">
                Get started with these comprehensive, free resources designed to support your digital wellness journey.
              </p>
            </div>

            <ResourcesList resources={freeResources} />
          </section>

          {/* Newsletter & Lab Notes */}
          <section className="mb-16">
            <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display text-brand-green-dark mb-4">
                  Newsletter & Lab Notes
                </h2>
                <p className="text-lg text-brand-green-dark/80 max-w-2xl mx-auto">
                  {pythonessPerspective.resourcesSectionIntro}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-display text-brand-green-dark mb-3">
                    {pythonessPerspective.name}
                  </h3>
                  <p className="text-brand-green-dark/80 mb-1 text-sm font-medium">
                    {pythonessPerspective.scheduleLabel}
                  </p>
                  <p className="text-brand-green-dark/80 mb-4">
                    {pythonessPerspective.shortBlurb}
                  </p>
                  <Link
                    href="/newsletter/subscribe"
                    className="inline-block bg-brand-green-accent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
                  >
                    Subscribe
                  </Link>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-display text-brand-green-dark mb-3">Lab Notes</h3>
                  <p className="text-brand-green-dark/80 mb-4">
                    Blog posts on tools, workflows, and the messy real work of making tech fit your brain.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-block bg-brand-purple-light text-brand-purple-dark px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
                  >
                    Read Lab Notes
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-brand-green-accent/20 to-brand-purple-dark/20 rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-display text-white mb-4">
                Want guidance that fits how you think?
              </h2>
              <p className="text-brand-cream/90 mb-6 max-w-2xl mx-auto">
                Start with any of these free resources, or book a personalized session to get tailored guidance
                for your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-brand-green-accent text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Book Software Psychic
                </Link>
                <Link
                  href="/coming-out-of-rest-mode"
                  className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold"
                >
                  March: Coming Out of Rest Mode
                </Link>
                <Link
                  href="/digital-spring-cleaning"
                  className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold"
                >
                  April: Digital Spring Cleaning
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}