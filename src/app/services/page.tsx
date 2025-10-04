/* eslint-disable react/no-unescaped-entities */
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
              I don't solve your problems—I help you solve your own. Through my unique blend of technical expertise, pattern recognition, and spiritual insight, I guide you to bring your vision to life. Creation and ideation are spiritual processes, and I combine the mystical with the practical to get at the heart of what your business truly needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link
              href="https://cal.com/pythoness/async"
              target="_blank"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
            >
              Book Your Async Reading
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
      <section className="bg-brand-green-dark">
        <div className="max-w-7xl mx-auto">
          <PainPointsCard 
            className="bg-brand-green-dark text-white"
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
                I offer deeply focused, brain-friendly software psychic sessions designed for neurodivergent professionals. My approach comes from a place of deep inner knowledge and connected insights from my background in sociology, civics, politics, and human rights. I don't want clients who want me to solve their problems—I want clients who want to solve their own problems but need a hand in bringing their vision to life. My pattern recognition makes often unsettling connections across industries that have historically gatekept knowledge, and my recommendations come from this place of deep understanding. Creation and ideation are spiritual processes, and I find it's helpful to combine the spiritual and the technical to get at the heart of what a business, founder, or business owner needs in a lasting way.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          {/* Async Service - Featured in its own row */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="Async Project & Web Presence Reading"
                subtitle="20-Minute Video Recording"
                description="Receive a potent 20-minute intuitive reading for your project, website, or online presence, delivered as a private video recording. No live meeting required—perfect for busy schedules."
                price="$30"
                features={[
                  "Personalized video recording",
                  "Tarot card pull at start and end",
                  "Deep project & web presence analysis",
                  "Pattern recognition insights",
                  "Watch and re-watch at your pace"
                ]}
                ctaLink="https://cal.com/pythoness/async"
                ctaText="Book Your Async Reading"
                icon="🎥"
                highlight={true}
                isNew={true}
                note="Asynchronous—no live meeting"
                customStyling={{
                  backgroundColor: 'from-brand-purple-light to-brand-cream',
                  textColor: 'text-brand-purple-dark',
                  accentColor: 'brand-green-dark',
                  borderColor: 'border-brand-purple-accent',
                  badgeText: 'ASYNC',
                  badgeColor: 'brand-green-dark'
                }}
              />
            </div>
          </div>

          {/* Live 1:1 Services */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-white mb-2">Live 1:1 Sessions</h3>
            <p className="text-brand-cream/80">Interactive sessions with real-time guidance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 20-Minute Software Psychic Session */}
            <ServiceCard
              title="20-Minute Software Psychic Session"
              subtitle="Quick guidance and ideation"
              description="Perfect for when you need quick guidance on a specific software challenge or want to explore working together. We'll start and end with a tarot card pull to guide our session."
              price="$30"
              features={[
                "Tarot card pull at start and end",
                "Quick software problem-solving",
                "Tool and workflow recommendations",
                "Action plan with next steps",
                "Follow-up email with resources"
              ]}
              ctaLink="https://cal.com/pythoness/20min"
              ctaText="Book Now"
              icon="🔮"
              note="Great for specific questions or quick wins"
            />

            {/* 60-Minute Software Psychic Session */}
            <ServiceCard
              title="60-Minute Software Psychic Session"
              subtitle="Extended problem-solving & design"
              description="Extended time for comprehensive software problem-solving, system design, and workflow optimization. We'll start and end with a tarot card pull to guide our session."
              price="$60"
              features={[
                "Tarot card pull at start and end",
                "Extended software problem-solving",
                "Deep workflow analysis & design",
                "Tool evaluation & recommendations",
                "Strategic planning & next steps",
                "Detailed action plan with resources"
              ]}
              ctaLink="https://cal.com/pythoness/60min"
              ctaText="Book Now"
              icon="🔮"
              note="Most popular choice for extended guidance"
            />
          </div>
        </div>
      </section>

      {/* Why "Psychic" Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              Why &quot;Software Psychic&quot;?
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                My approach isn't about predicting the future—it's about seeing patterns others miss and connecting dots across industries that have historically gatekept knowledge.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pattern Recognition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Pattern Recognition</h3>
              <p className="text-white/90">
                My background in sociology, civics, and politics gives me a unique lens for seeing how systems truly work—and where they're designed to fail.
              </p>
            </div>

            {/* Industry Connections */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Industry Connections</h3>
              <p className="text-white/90">
                I make unsettling connections across law, marketing, and tech—industries that have historically gatekept knowledge from the people who need it most.
              </p>
            </div>

            {/* Spiritual Creation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Spiritual Creation</h3>
              <p className="text-white/90">
                Creation and ideation are spiritual processes. I combine the mystical with the practical to get at the heart of what your business truly needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
                          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
                How We'll Work Together
              </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                A clear, structured process designed to reduce overwhelm and maximize results. The process starts as soon as you book your session, including your deck preference for our tarot or oracle card pulls.
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
                Do you work with people who aren't tech-savvy?
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
                Start with a <a href="https://cal.com/pythoness/20min" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent hover:text-brand-green-dark underline">20-minute session</a>! We'll discuss your specific needs and I'll recommend the best approach. The 20-minute session is perfect for exploring options, while the 60-minute session is ideal for comprehensive change.
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
                Both! I work with individual professionals, small business owners, and teams. My approach scales well for different needs, whether you're a solopreneur or managing a small team's digital systems.
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
            Let's discuss your needs and find the perfect solution for your unique situation. No pressure, no judgment - just a conversation about how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/pythoness/async"
              target="_blank"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
            >
              Book Your Async Reading
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
