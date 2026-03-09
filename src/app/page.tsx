import Link from 'next/link'
import HeroCard from '../components/HeroCard'
import ServiceCard from '../components/ServiceCard'
import AboutCard from '../components/AboutCard'
import NewsletterCard from '../components/NewsletterCard'

export const metadata = {
  title: 'Tech That Works, for People Like Us',
  description: 'Reflection sessions, not rescue. I sit with neurodivergent creatives and small business owners in the aftermath of tech hurdles and ask: What is this struggle trying to teach you? Tarot-guided insight and pattern recognition—so you don\'t make it a third time.',
  openGraph: {
    title: 'Pythoness Programmer | Tech That Works, for People Like Us',
    description: 'Reflection sessions, not rescue. Tarot-guided reflection and pattern recognition for neurodivergent creatives and small business owners.',
    url: '/',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
  other: {
    'p:domain_verify': '18888270799e128d4d49644962be5ab6'
  }
}

export default async function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-brand-green-dark pt-24 overflow-hidden">
        <div>
          <HeroCard />
        </div>
      </section>

      {/* What is this struggle trying to teach you? */}
      <section className="bg-brand-green-dark py-24 px-4 md:px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            What is this struggle trying to teach you?
          </h2>
          <p className="text-lg text-brand-cream/90 mb-6 leading-relaxed">
            You&apos;re not broken. You&apos;re not lazy. You&apos;re not bad at tech.
          </p>
          <p className="text-lg text-brand-cream/90 mb-6 leading-relaxed">
            You&apos;re running a brain that mainstream tools were never designed for — and you&apos;ve probably spent years trying to adapt yourself to systems that were always going to fight you.
          </p>
          <p className="text-xl text-brand-cream leading-relaxed">
            I sit with you in the aftermath of your last tech hurdle and ask the question nobody else is asking: <em>What is this struggle trying to teach you?</em>
          </p>
          <p className="text-lg text-brand-cream/90 mt-6 leading-relaxed">
            Together we examine what the friction is actually revealing — about what you&apos;ve internalized from productivity culture, about what your brain actually needs, about the patterns you keep repeating and why they keep failing.
          </p>
          <p className="text-lg text-brand-cream font-medium mt-6">
            So you don&apos;t make it a third time.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-green-dark py-24 px-4 md:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-display text-brand-green-accent mb-3">Book a session</h3>
              <p className="text-brand-cream/90">20 minutes, 60 minutes, or an async video reading. All start at $30.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-display text-brand-green-accent mb-3">Share your context</h3>
              <p className="text-brand-cream/90">Fill out a quick intake when you book. Your recent tech hurdle, what keeps repeating, what you&apos;ve already tried.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-display text-brand-green-accent mb-3">Reflect together</h3>
              <p className="text-brand-cream/90">We start and end with a tarot pull. We examine what your struggle is revealing. No pressure, no judgment, no urgency.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-display text-brand-green-accent mb-3">Leave with clarity</h3>
              <p className="text-brand-cream/90">Resources you may not have heard of, a framework for understanding the pattern, and a path forward that actually fits your brain.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cal.com/pythoness/20min" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold text-center">
              Book a Session
            </Link>
            <Link href="/services" className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center">
              See All Services
            </Link>
            <Link href="/resources" className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center">
              Browse Free Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white overflow-hidden">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              Reflection Sessions, Not Rescue
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream max-w-3xl">
                These aren&apos;t troubleshooting sessions—they&apos;re reflection sessions where we examine your last tech hurdle and figure out what it&apos;s revealing about what you&apos;ve internalized and what your brain actually needs.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          {/* Featured Async Service */}
          <div className="mb-16">
            <h3 className="text-3xl font-display text-center mb-12 text-brand-cream">Featured Service</h3>
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="Async Project & Web Presence Reading"
                subtitle="20-Minute Video Recording"
                price="$30"
                description="A 20-minute tarot-guided reading for your project, website, or online presence — delivered as a private video, on your schedule. No live meeting required."
                features={[
                  "Tarot-guided reflection on your project or web presence",
                  "Insight into what's working with your brain versus against it",
                  "Pattern recognition: what your current setup is revealing",
                  "Suggestions for resources or approaches you may not have considered",
                  "Watch and re-watch at your pace"
                ]}
                ctaLink="https://cal.com/pythoness/async"
                ctaText="Book Your Async Reading"
                icon="🎥"
                highlight={true}
                isNew={true}
                textColor="text-brand-green-dark"
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

          {/* Live 1:1 Sessions */}
          <div className="mb-16">
            <h3 className="text-3xl font-display text-center mb-4 text-brand-cream">Live 1:1 Sessions</h3>
            <p className="text-brand-cream/80 text-center mb-12">Interactive sessions with real-time guidance</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="20-Minute Software Psychic Session"
                subtitle="Quick reflection and resource discovery"
                price="$30"
                description="We start and end with a tarot pull. In between, we look at one specific tech struggle — not to fix it, but to understand what it's revealing. You'll leave with one clear next step and a follow-up email with everything we covered."
                features={[
                  "Tarot pull at start and end",
                  "Focused reflection on a specific tech struggle",
                  "Pattern recognition: what this is revealing about what you've internalized",
                  "Resources and tools tailored to your brain — not the mainstream defaults",
                  "One clear next step",
                  "Follow-up email with resources"
                ]}
                ctaLink="https://cal.com/pythoness/20min"
                ctaText="Book Now"
                icon="🔮"
                textColor="text-brand-cream"
                note="Great for specific questions or quick wins"
              />
              <ServiceCard
                title="60-Minute Software Psychic Session"
                subtitle="Deep pattern work"
                price="$60"
                description="The deep dive. We start and end with a tarot pull and spend the time in between going beneath the surface — not just the most recent struggle, but the pattern underneath it. Includes an optional 20-minute follow-up consultation within 30 days."
                features={[
                  "Tarot pull at start and end",
                  "Deep reflection on recurring patterns",
                  "Examination of what you've internalized from ableist, productivity-obsessed tech culture",
                  "Neurodivergent-friendly alternatives to tools and approaches that aren't working",
                  "A framework for making better tech decisions going forward",
                  "Implementation roadmap built around your brain, not a generic system",
                  "Optional 20-minute follow-up consultation within 30 days"
                ]}
                ctaLink="https://cal.com/pythoness/60min"
                ctaText="Book Now"
                icon="🔮"
                textColor="text-brand-cream"
                note="Most popular for extended guidance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* This Is For You If / This Isn't For You If */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
                This Is For You If...
              </h2>
              <ul className="space-y-3 text-lg text-brand-green-dark/90">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  You&apos;ve tried every productivity tool and they all feel wrong
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  You keep hitting the same tech walls no matter what you change
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  You&apos;re neurodivergent — diagnosed, self-identified, or still figuring it out
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  You&apos;re doing decolonizing work and want your tech to align with your values
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  You want to understand what&apos;s happening, not just patch it
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
                This Isn&apos;t For You If...
              </h2>
              <ul className="space-y-3 text-lg text-brand-green-dark/90">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
                  You need emergency tech rescue
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
                  You want someone to &quot;just fix it&quot;
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
                  You&apos;re not interested in reflection or pattern work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources, Always */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Free Resources, Always
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 leading-relaxed">
            Everything on this site is designed to be brain-friendly and barrier-free. Browse free guides, frameworks, and tools — no paywall, no email gate, no hustle.
          </p>
          <Link
            href="/resources"
            className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
          >
            Explore Free Resources
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AboutCard
            title="The Pythoness Behind The Code"
            description="I don't swoop in with quick fixes. I don't have all the answers, and I'm not here to pretend otherwise. I'm a guide, not a guru. What I do is sit with you in the aftermath of your last tech hurdle and ask: What is this struggle trying to teach you? Together we reflect on the patterns you keep repeating — and why they keep failing; uncover what you've internalized from ableist, productivity-obsessed tech culture; discover resources you didn't know existed; and build understanding so you don't make it a third time. My sessions blend deep technical expertise, tarot-guided intuition, and neurodivergent-centered design. We start and end with a tarot pull to guide our reflection."
            pythia="The Pythia were ancient oracles — the ones people came to when they were standing at a crossroads and needed someone to sit with the complexity and speak plainly. They didn't give orders. They demystified. That's the work. Tech is full of complexity that gets used to make people feel small. My job is to make it clear — and to remind you that your brain was never the problem."
            values={{
              title: "My Core Values",
              items: [
                "Learning — Building digital fluency, not dependency. My goal is to guide you to your own aha moments, not create a reliance on mine.",
                "Resourcefulness — There are so many tools, frameworks, and approaches that don't get mainstream attention but might be exactly right for your brain. I love finding them. Hidden gems are my thing.",
                "Serenity — Tech struggles are stressful enough. Our sessions are calm, grounded spaces. No pressure, no judgment, no urgency. Just clarity.",
                "Inclusion — This is a safe, affirming space for LGBTQIA+ folks, sex workers, and anyone marginalized by mainstream tech culture. I center neurodivergent experiences and decolonizing practices in everything I do.",
                "Humor — Sometimes the most useful thing we can do is laugh at the absurdity of a system that was never built for us. I bring levity. It's part of the work.",
                "Resilience — You've survived every tech hurdle so far. My job is to help you build the understanding that makes you stronger for the next one. We're not just working through a problem — we're building capacity."
              ]
            }}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <NewsletterCard />
        </div>
      </section>
    </main>
  )
}
