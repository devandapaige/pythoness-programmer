import Link from 'next/link'
import { Metadata } from 'next'
import ResourcesList from '@/components/resources/ResourcesList'
import { freeResources } from '@/lib/resources'

export const metadata: Metadata = {
  title: 'Resources | Pythoness Programmer',
  description: 'Free and paid resources for digital wellness, automation, and neurodivergent-friendly tech solutions.',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-6xl mx-auto px-4 py-12">
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

          {/* Podcast & Newsletter Section */}
          <section className="mb-16">
            <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display text-brand-green-dark mb-4">
                  Podcast & Newsletter
                </h2>
                <p className="text-lg text-brand-green-dark/80 max-w-2xl mx-auto">
                  Stay updated with the latest in AI, automation, and neurodivergent-friendly tech solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-display text-brand-green-dark mb-3">AI Generation Experiments Substack</h3>
                  <p className="text-brand-green-dark/80 mb-4">
                    Exploring and sharing findings on AI tools and generation experiments outside my normal content lineup.
                  </p>
                  <Link
                    href="https://pythoness.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-purple-light text-brand-purple-dark text-center px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
                  >
                    Visit Substack
                  </Link>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-display text-brand-green-dark mb-3">Newsletter</h3>
                  <p className="text-brand-green-dark/80 mb-4">
                    Monthly insights on digital wellness, automation strategies, and neurodivergent-friendly tech.
                  </p>
                  <Link
                    href="https://newsletter.pythonessprogrammer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-green-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Paid Resources Section - Future */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                Premium Resources
              </h2>
              <p className="text-lg text-brand-cream/90 max-w-2xl mx-auto">
                Coming soon: In-depth courses, workshops, and premium tools designed for deeper transformation.
              </p>
            </div>

            <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl text-center">
              <div className="w-20 h-20 bg-brand-green-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-display text-brand-green-dark mb-4">
                Premium Content Coming Soon
              </h3>
              <p className="text-brand-green-dark/80 mb-6 max-w-2xl mx-auto">
                I&apos;m developing comprehensive courses, workshops, and premium tools to support your digital wellness journey. 
                These will include deeper dive content, community access, and personalized support.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center text-brand-green-dark text-sm">
                  <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                  In-depth automation courses
                </div>
                <div className="flex items-center justify-center text-brand-green-dark text-sm">
                  <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                  Interactive workshops and group sessions
                </div>
                <div className="flex items-center justify-center text-brand-green-dark text-sm">
                  <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                  Premium tools and templates
                </div>
                <div className="flex items-center justify-center text-brand-green-dark text-sm">
                  <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                  Community access and peer support
                </div>
              </div>
              <Link
                href="https://newsletter.pythonessprogrammer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-green-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Get Notified When Available
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-brand-green-accent/20 to-brand-purple-dark/20 rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-display text-white mb-4">
                Ready to Transform Your Digital Life?
              </h2>
              <p className="text-brand-cream/90 mb-6 max-w-2xl mx-auto">
                Start with any of these free resources, or book a personalized session to get tailored guidance 
                for your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-brand-green-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Book a Session
                </Link>
                <Link
                  href="/digital-spring-cleaning"
                  className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold"
                >
                  Start with Digital Spring Cleaning
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}