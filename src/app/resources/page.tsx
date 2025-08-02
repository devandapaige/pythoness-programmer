import Link from 'next/link'
import { Metadata } from 'next'

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Digital Spring Cleaning */}
              <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green-dark mb-1">Digital Spring Cleaning</h3>
                    <p className="text-brand-green-dark/70 text-sm">GRIT Framework Toolkit</p>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-6">
                  A comprehensive 4-page worksheet designed to help you refresh your digital life using the GRIT framework 
                  (Passion, Perseverance, Growth, Resilience). Perfect for monthly or quarterly reflection.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Digital Spring Cleaning Worksheet (PDF)
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Interactive Canva Template
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    NAA Framework Guide (Notice, Adjust, Acknowledge)
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/digital-spring-cleaning"
                    className="flex-1 bg-brand-green-accent text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    View Full Resource
                  </Link>
                  <Link
                    href="/digital-spring-cleaning/digitalspringcleaningWorksheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-purple-dark text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>

              {/* Mindful Automation */}
              <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green-dark mb-1">Mindful Automation</h3>
                    <p className="text-brand-green-dark/70 text-sm">Y.O.U. Framework System</p>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-6">
                  Learn to build automation systems that work with your unique brain patterns. The Y.O.U. Framework 
                  (Your Brain, Optimize Energy, Understand Maintenance) creates sustainable, brain-friendly workflows.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Y.O.U. Framework Guide (PDF)
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Error-Proofing Worksheet
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Weekly Deep Dive Resources
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/mindful-automation"
                    className="flex-1 bg-brand-green-accent text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    View Full Resource
                  </Link>
                  <Link
                    href="/mindful-automation/youframework.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-purple-dark text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>

              {/* Neuroinclusive Design */}
              <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green-dark mb-1">Neuroinclusive Design</h3>
                    <p className="text-brand-green-dark/70 text-sm">June 2025 Deep Dive</p>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-6">
                  Learn how designing for neurodivergent users creates better experiences for everyone—moving beyond 
                  accommodation to proactive inclusion with practical principles and tools.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Four Core Design Principles
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Five-Minute Accessibility Check
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Weekly Deep Dives & Newsletter Links
                  </div>
                </div>
                <Link
                  href="/neuroinclusive-design"
                  className="block bg-brand-green-accent text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Explore Neuroinclusive Design
                </Link>
              </div>

              {/* Tech Boundaries */}
              <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green-dark mb-1">Tech Boundaries</h3>
                    <p className="text-brand-green-dark/70 text-sm">July 2025 Deep Dive</p>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-6">
                  Small boundaries, big energy gains—learn to create digital systems that work with your brain, 
                  not against it. Transform tech overwhelm into creative fuel.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Three Core Boundary Pillars
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    PARA Method & Energy-Aware Automation
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Weekly Deep Dives & Newsletter Links
                  </div>
                </div>
                <Link
                  href="/tech-boundaries"
                  className="block bg-brand-green-accent text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Explore Tech Boundaries
                </Link>
              </div>

              {/* Vibe Coding Cheatsheet */}
              <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green-dark mb-1">Vibe Coding Cheatsheet</h3>
                    <p className="text-brand-green-dark/70 text-sm">Interactive Developer Resource</p>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-6">
                  A professional showcase of TailwindCSS techniques with interactive features. Perfect for developers 
                  looking to level up their styling game with copy-to-clipboard functionality.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Interactive TailwindCSS Examples
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Copy-to-Clipboard Functionality
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Professional Development Patterns
                  </div>
                </div>
                <Link
                  href="/vibe-coding-cheatsheet"
                  className="block bg-brand-green-accent text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Explore Cheatsheet
                </Link>
              </div>

              {/* Sourdough Corner */}
              <div className="bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🍞</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green-dark mb-1">Sourdough Corner</h3>
                    <p className="text-brand-green-dark/70 text-sm">Craft Baking Resources</p>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-6">
                  Comprehensive sourdough baking guide with recipes, techniques, and Amanda&apos;s favorite tools. 
                  Perfect for beginners and experienced bakers alike.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Starter Creation & Maintenance
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Lazy Double Batch Recipe
                  </div>
                  <div className="flex items-center text-brand-green-dark text-sm">
                    <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-2"></span>
                    Tool Recommendations & Resources
                  </div>
                </div>
                <Link
                  href="/sourdough"
                  className="block bg-brand-green-accent text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Explore Sourdough Guide
                </Link>
              </div>
            </div>
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
                  <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎙️</span>
                  </div>
                  <h3 className="text-xl font-display text-brand-green-dark mb-3">NotebookLM Podcast</h3>
                  <p className="text-brand-green-dark/80 mb-4">
                    AI-powered insights from my research on technology, automation, and digital wellness.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="https://open.spotify.com/show/0VLZyZrD50Pk9JcyJL2AdX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-brand-green-accent text-white text-center px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Listen on Spotify
                    </Link>
                    <Link
                      href="https://www.youtube.com/playlist?list=PLl8kW5pVKC-p8kzPChiNPoEHkfi_kR1LA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-brand-purple-dark text-white text-center px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Watch on YouTube
                    </Link>
                  </div>
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