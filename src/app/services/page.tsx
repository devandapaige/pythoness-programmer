/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'
import PainPointsCard from '../../components/PainPointsCard'

export const metadata = {
  title: 'Services | Pythoness Programmer',
  description: 'I philosophize with other decolonizing neurodivergents about how our tech struggles reveal what we\'ve internalized and what our brains actually need. Reflection sessions with tarot-guided insight and pattern recognition—not troubleshooting rescue.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-brand-cream/95 mb-6 leading-relaxed italic">
              I philosophize with other decolonizing neurodivergents about how our tech struggles reveal what we&apos;ve internalized and what our brains actually need.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-white">
              Reflect on Your Tech Struggles with the Software Psychic
            </h1>
            <p className="text-xl text-brand-cream/90 mb-8 leading-relaxed">
              I help neurodivergent creatives and small business owners understand the patterns they keep repeating—so they don&apos;t make it a third time. These aren&apos;t troubleshooting sessions—they&apos;re reflection sessions where we examine your last tech hurdle and figure out what it&apos;s revealing about what you&apos;ve internalized and what your brain actually needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/pythoness/async"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-black px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
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
            title="Hitting the Same Walls?"
            description="You're already doing the work—building systems, learning your tools, making progress. But the same friction points keep slowing you down or making you feel like you're failing when you're not."
            painPoints={[
              { text: "Same patterns repeating no matter what you try" },
              { text: "Productivity tools that don't fit your brain" },
              { text: "Tech that works against you instead of with you" },
              { text: "Internalized assumptions hiding in your workflow" },
              { text: "Ready to understand what your struggles are teaching you" },
              { text: "Want to learn, not just be rescued" }
            ]}
          />
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              My Services
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                Through tarot-guided insight and deep technical expertise, I help you see what you can&apos;t see alone: the ways your tools work against you, the resources you didn&apos;t know existed, and the new pathways forward.
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
                description="Receive a potent 20-minute intuitive reading for your project, website, or online presence, delivered as a private video. No live meeting required—perfect for busy schedules."
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
                  backgroundColor: 'from-brand-cream to-white',
                  textColor: 'text-brand-green-dark',
                  accentColor: 'brand-green-accent',
                  borderColor: 'border-brand-green-accent',
                  badgeText: 'ASYNC',
                  badgeColor: 'brand-green-accent'
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
            <ServiceCard
              title="20-Minute Software Psychic Session"
              subtitle="Quick reflection and resource discovery"
              description="Quick reflection and resource discovery with the Pythoness Programmer. We'll start and end with a tarot card pull to guide our session. Perfect for understanding a specific struggle, discovering new resources, or getting clarity on your next step."
              price="$30"
              features={[
                "Tarot card pull at start and end",
                "Reflection on your recent tech struggle",
                "Pattern recognition: what this reveals about what you've internalized",
                "Resources and tools you may not have heard of",
                "One clear next step forward",
                "Follow-up email with resources"
              ]}
              ctaLink="https://cal.com/pythoness/20min"
              ctaText="Book 20-Minute Session"
              icon="🔮"
              note="Great for specific questions or quick wins"
            />

            <ServiceCard
              title="60-Minute Software Psychic Session"
              subtitle="Deep dive into your tech patterns"
              description="Deep dive into your tech patterns with the Pythoness Programmer. We'll start and end with a tarot card pull. Ideal for understanding recurring struggles, uncovering what you've internalized from ableist tech culture, and building a framework for better decisions going forward."
              price="$60"
              features={[
                "Tarot card pull at start and end",
                "Deep reflection on patterns you keep repeating",
                "Uncover what you've internalized from productivity culture",
                "Discover neurodivergent-friendly alternatives to mainstream tools",
                "Build a framework for making better tech decisions",
                "Implementation roadmap that works with your brain",
                "30-day follow-up consultation"
              ]}
              ctaLink="https://cal.com/pythoness/60min"
              ctaText="Book 60-Minute Session"
              icon="🔮"
              note="Most popular for extended guidance"
            />
          </div>
        </div>
      </section>

      {/* Why "Software Psychic" Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              Why &quot;Software Psychic&quot;?
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                My approach isn&apos;t about predicting the future—it&apos;s about seeing patterns others miss and connecting dots across industries that have historically gatekept knowledge.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Pattern Recognition</h3>
              <p className="text-white/90">
                My background in sociology, civics, and politics gives me a unique lens for seeing how systems truly work—and where they&apos;re designed to fail.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Industry Connections</h3>
              <p className="text-white/90">
                I make unsettling connections across law, marketing, and tech—industries that have historically gatekept knowledge from the people who need it most.
              </p>
            </div>

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
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              How We&apos;ll Work Together
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">1</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Book & Share</h3>
              <p className="text-white/90">
                Secure your session and fill out a quick intake form to share your goals, challenges, and priorities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">2</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Assessment</h3>
              <p className="text-white/90">
                I review your information and analyze your current systems to identify opportunities for improvement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl text-center">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-brand-green-accent">3</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-white">Session & Solutions</h3>
              <p className="text-white/90">
                We meet for your session, diving into your challenges, brainstorming solutions, and creating a clear action plan together.
              </p>
            </div>

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
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                What makes your approach different?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                I don&apos;t swoop in with quick fixes. These are reflection sessions: we examine what your tech struggles reveal about what you&apos;ve internalized and what your brain actually needs. I blend deep technical expertise with tarot-guided intuition and neurodivergent-centered design. It&apos;s a judgment-free, affirming space (LGBTQIA+ and sex-worker affirming) where we slow down, reflect, and build understanding together.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                Who are these sessions for?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                You&apos;re already capable and learning. You need someone who can help you see the patterns you&apos;re too close to notice, point you toward resources that match your actual brain, validate that the friction you feel is real—and show you different ways forward. Not for: emergency tech rescue, anyone who wants me to &quot;just fix it&quot; without understanding why, or folks who aren&apos;t interested in reflection or pattern work.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                How do I know which service is right for me?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                Start with a <a href="https://cal.com/pythoness/20min" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent hover:text-brand-green-dark underline">20-minute session</a> for a specific struggle or to discover resources you haven&apos;t tried. The 60-minute session is ideal when you want to understand why you keep hitting the same walls, map patterns across multiple struggles, or build a framework for better tech decisions. The async reading works when you want a potent reflection on your project or web presence on your own time.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                What if I need ongoing support?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                The 60-minute session includes a 30-day follow-up consultation. Many clients book another session when they&apos;re ready to go deeper or tackle the next pattern. We build understanding so you don&apos;t make it a third time—and you can always return when you need a reflection partner again.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border-none shadow-lg">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                Do you work with businesses or just individuals?
              </h3>
              <p className="text-lg text-brand-green-dark/80 leading-relaxed">
                Both. I work with neurodivergent creatives, small business owners, and anyone doing decolonizing work who wants tech that aligns with their values. My approach is the same: reflection and pattern recognition so you understand your struggles and discover pathways that fit your brain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready to Understand Your Tech Struggles?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Choose the session that fits your needs, and let&apos;s reflect together. No pressure, no judgment—just a conversation about how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/pythoness/async"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-black px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
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
