import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'
import PainPointsCard from '../../components/PainPointsCard'

export const metadata = {
  title: 'Services | Pythoness Programmer',
  description: 'Tech coaching, web development, and system integration services designed for neurodivergent professionals. Clear pricing, brain-friendly approaches, and judgment-free support.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display mb-6 text-white">
              Services That Work for Your Brain
            </h1>
            <p className="text-xl text-brand-cream/90 mb-8 leading-relaxed">
              Whether you need tech coaching, a custom website, or help integrating your digital tools, I provide solutions that respect your unique thinking patterns and support your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/pythoness/15min"
                target="_blank"
                className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="#services"
                className="inline-block bg-transparent border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 hover:border-brand-cream/50 transition-all duration-300 text-lg font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-7xl mx-auto">
          <PainPointsCard 
            title="Struggling with Tech? I Understand."
            painPoints={[
              { text: "Overwhelmed by too many tool options" },
              { text: "Can't find workflows that work for your brain" },
              { text: "Worried about security and privacy" },
              { text: "Need a website but don't know where to start" },
              { text: "Tools don't talk to each other properly" },
              { text: "Tech decisions causing decision fatigue" }
            ]}
          />
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              My Services
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                I offer focused, brain-friendly tech support sessions designed for neurodivergent professionals. As a software engineer, I bring deep technical expertise to help you optimize your digital life, but I do not offer web development or custom software development services under the Pythoness Programmer brand.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tech Clarity Session */}
            <ServiceCard
              title="Tech Clarity Session"
              subtitle="30-minute focused consultation"
              description="Perfect for when you need quick guidance on a specific tech challenge or want to explore working together."
              price="$75"
              features={[
                "Personalized tech assessment",
                "Workflow optimization recommendations",
                "Tool selection guidance",
                "Action plan with next steps",
                "Follow-up email with resources"
              ]}
              ctaLink="https://cal.com/pythoness/clarity"
              ctaText="Book Now"
              icon="🎯"
              note="Great for one-time challenges or initial consultation"
            />

            {/* Digital Systems Overhaul */}
            <ServiceCard
              title="Digital Systems Overhaul"
              subtitle="90-minute comprehensive review"
              description="Complete digital workflow audit and system redesign for lasting change and clarity."
              price="$295"
              features={[
                "Comprehensive digital audit",
                "System redesign and optimization",
                "Tool integration recommendations",
                "Implementation roadmap",
                "30-day follow-up consultation",
                "Resource library access"
              ]}
              ctaLink="https://cal.com/pythoness/overhaul"
              ctaText="Book Now"
              icon="🔄"
              highlight={true}
              isNew={true}
              note="Most popular choice for lasting change"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              How We&apos;ll Work Together
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                A clear, structured process designed to reduce overwhelm and maximize results. The process starts as soon as you book your session.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">1</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Book & Share</h3>
              <p className="text-white/90">
                Secure your session and fill out a quick intake form to share your goals, challenges, and priorities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">2</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Assessment</h3>
              <p className="text-white/90">
                I review your information and analyze your current systems to identify opportunities for improvement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">3</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Session & Solutions</h3>
              <p className="text-white/90">
                We meet for your session, diving into your challenges, brainstorming solutions, and creating a clear action plan together.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">4</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Follow-Up & Support</h3>
              <p className="text-white/90">
                Receive a summary, resources, and next steps after your session. There are options for ongoing support if you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-brand-green-dark">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark to-transparent"></div>
              <p className="text-xl text-brand-green-dark/80 max-w-2xl">
                Common questions about my services and approach.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                What makes your approach different?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                I design solutions specifically for neurodivergent brains, focusing on reducing cognitive load, providing clear structure, and creating systems that actually work for your unique thinking patterns. No judgment, no assumptions, just practical solutions.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                Do you work with people who aren&apos;t tech-savvy?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                Absolutely! In fact, many of my clients come to me feeling overwhelmed by technology. I specialize in breaking down complex concepts into manageable pieces and providing judgment-free support regardless of your current tech comfort level.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                How do I know which service is right for me?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                Start with a free consultation! We&apos;ll discuss your specific needs and I&apos;ll recommend the best approach. The Tech Clarity Session is perfect for exploring options, while the Digital Systems Overhaul is ideal for comprehensive change.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                What if I need ongoing support?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                I offer ongoing tech support plans and can also work with you on a project basis. Many clients start with a consultation or overhaul and then choose ongoing support to maintain their systems and continue growing.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                Do you work with businesses or just individuals?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                Both! I work with individual professionals, small business owners, and teams. My approach scales well for different needs, whether you&apos;re a solopreneur or managing a small team&apos;s digital systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your needs and find the perfect solution for your unique situation. No pressure, no judgment - just a conversation about how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/pythoness/15min"
              target="_blank"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 hover:border-brand-cream/50 transition-all duration-300 text-lg font-semibold"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
