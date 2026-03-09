/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'

export const metadata = {
  title: 'Services',
  description: 'Reflect on your tech struggles with the Software Psychic. 20-min and 60-min sessions plus async video readings. Tarot-guided reflection, pattern recognition, and resources that fit your brain—starting at $30.',
  openGraph: {
    title: 'Services | Pythoness Programmer',
    description: 'Reflection sessions with the Software Psychic. 20-min, 60-min, and async readings. Understand the patterns you keep repeating—so you don\'t make it a third time.',
    url: '/services',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-white">
            Reflect on Your Tech Struggles with the Software Psychic
          </h1>
          <p className="text-xl text-brand-cream/90 mb-8 leading-relaxed">
            I help neurodivergent creatives and small business owners understand the patterns they keep repeating — so they don&apos;t make it a third time.
          </p>
          <p className="text-lg text-brand-cream/80 mb-8 leading-relaxed">
            These aren&apos;t troubleshooting sessions. They&apos;re reflection sessions.
          </p>
          <p className="text-lg text-brand-cream/80 mb-8 leading-relaxed">
            We examine your last tech hurdle and figure out what it&apos;s revealing: about what you&apos;ve internalized from productivity culture, about what your brain actually needs, about the assumptions hiding in your workflow that you&apos;re too close to see alone.
          </p>
          <p className="text-xl text-brand-cream leading-relaxed">
            Through tarot-guided insight and deep technical expertise, I help you find the clarity that quick fixes never actually deliver.
          </p>
        </div>
      </section>

      {/* The Sessions */}
      <section id="services" className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-16 text-white text-center">
            The Sessions
          </h2>

          {/* 20-Minute Session */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="20-Minute Software Psychic Session — $30"
                subtitle="Quick reflection and resource discovery."
                description="We start and end with a tarot pull. In between, we look at one specific tech struggle — not to fix it, but to understand what it's revealing. I'll point you toward resources and approaches you may not have heard of. You'll leave with one clear next step and a follow-up email with everything we covered."
                price="$30"
                features={[
                  "Tarot pull at start and end",
                  "Focused reflection on a specific tech struggle",
                  "Pattern recognition: what this is revealing about what you've internalized",
                  "Resources and tools tailored to your brain — not the mainstream defaults",
                  "One clear next step",
                  "Follow-up email with resources"
                ]}
                ctaLink="https://cal.com/pythoness/20min"
                ctaText="Book the 20-Minute Session — $30"
                icon="🔮"
                textColor="text-brand-cream"
                note="This session is right for you if: You're trying to understand a specific friction point; you want a second perspective on something that feels off; you're new here and want to get a feel for the work before going deeper; you've just discovered something about your brain and you're looking back at old tech patterns with new eyes; you want resources — real ones, not the same five apps everyone recommends."
              />
            </div>
          </div>

          {/* 60-Minute Session */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="60-Minute Software Psychic Session — $60"
                subtitle="Deep pattern work. Includes an optional 20-minute follow-up consultation within 30 days."
                description="This is the deep dive. We start and end with a tarot pull and spend the time in between going beneath the surface — not just the most recent struggle, but the pattern underneath it. What keeps recurring. What you keep trying that doesn't stick. What productivity culture has convinced you is a personal failure. You'll leave with a framework for understanding your own tech patterns, resources tailored to how your brain actually works, and the option to book a 20-minute follow-up consultation within 30 days if you want to check in on what's landing."
                price="$60"
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
                ctaText="Book the 60-Minute Session — $60"
                icon="🔮"
                textColor="text-brand-cream"
                note="This session is right for you if: You keep hitting the same walls and you're ready to understand why; you want to map patterns across multiple struggles, not just solve one; you're building systems — for your business, your creative practice, your life — and they keep breaking; you're ready to stop repeating the same patterns and understand what's underneath them; you want the deeper work, not just a next step."
              />
            </div>
          </div>

          {/* Async Reading */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="Async Project & Web Presence Reading — $30"
                subtitle="A 20-minute tarot-guided reading for your project, website, or online presence — delivered as a private video, on your schedule."
                description="This is asynchronous, meaning we don't meet live. You provide context through the intake form, I record your personalized reading with a tarot pull at start and end, and you receive a private video delivered to your inbox by your chosen deadline. Watch it once. Watch it five times. Share it with no one. It's yours."
                price="$30"
                features={[
                  "Tarot-guided reflection on your project or web presence",
                  "Insight into what's working with your brain versus against it",
                  "Pattern recognition: what your current setup is revealing",
                  "Suggestions for resources or approaches you may not have considered",
                  "Clarity on next steps"
                ]}
                ctaLink="https://cal.com/pythoness/async"
                ctaText="Book the Async Reading — $30"
                icon="🎥"
                highlight={true}
                textColor="text-brand-cream"
                note="How it works: 1) Choose your delivery deadline. 2) Fill out the intake form — the more context you give, the deeper the reading. 3) Receive your private video by your chosen time. Important: This is not a live meeting — you're booking a delivery deadline, not a meeting slot. Non-refundable once booked. You'll receive a confirmation request — please verify via email to ensure delivery."
                customStyling={{
                  backgroundColor: 'from-brand-cream/10 to-white/5',
                  textColor: 'text-brand-cream',
                  accentColor: 'brand-green-accent',
                  borderColor: 'border-brand-green-accent',
                  badgeText: 'ASYNC',
                  badgeColor: 'brand-green-accent'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-8 text-white text-center">
            What Makes This Different
          </h2>
          <p className="text-xl text-brand-cream/90 leading-relaxed mb-6">
            Most tech help assumes you&apos;re neurotypical, able-bodied, and running on a linear schedule. It assumes the goal is to be more productive, more efficient, more optimized — on someone else&apos;s terms.
          </p>
          <p className="text-xl text-brand-cream/90 leading-relaxed mb-6">
            That&apos;s not what this is.
          </p>
          <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
            I&apos;ve been the person trying to figure out a new diagnosis while also being a new engineer with no manager, no roadmap, and a body that was already at its limit. I know what it&apos;s like to look for resources and find nothing designed for a brain like yours. I know what it feels like when the productivity advice makes you feel worse, not better, and you&apos;re not sure if that&apos;s a character flaw or a sign that the advice was never built for you.
          </p>
          <p className="text-xl text-brand-cream font-medium leading-relaxed">
            It was never built for you.
          </p>
          <p className="text-xl text-brand-green-accent font-medium leading-relaxed mt-2">
            This work is built for you.
          </p>
        </div>
      </section>

      {/* Who These Sessions Are For / Aren't For */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-brand-green-dark/90 mb-12 text-center">
            You&apos;re already capable. You&apos;re already working on it. You just need someone who can:
          </p>
          <ul className="space-y-4 text-lg text-brand-green-dark/90 mb-16 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              See the patterns you&apos;re too close to notice
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Point you toward resources that match your actual brain — not the brain productivity culture designed its tools for
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Validate that the friction you&apos;re feeling is real, and there are different ways forward
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Help you build understanding that sticks, so you don&apos;t keep making it a third time
            </li>
          </ul>
          <h2 className="text-2xl font-display mb-4 text-brand-green-dark text-center">
            Who These Sessions Aren&apos;t For
          </h2>
          <ul className="space-y-3 text-brand-green-dark/80 max-w-2xl mx-auto mb-8">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              People looking for emergency tech rescue
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              Anyone who wants me to &quot;just fix it&quot; without understanding why it broke
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              People who aren&apos;t interested in reflection or pattern recognition
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              Anyone expecting quick fixes without the deeper work
            </li>
          </ul>
        </div>
      </section>

      {/* Session Features (All Sessions) */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-white text-center">
            Session Features (All Sessions)
          </h2>
          <ul className="space-y-4 text-brand-cream/90 text-lg">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Tarot pull at start and end — every time
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Judgment-free, affirming space (LGBTQIA+ &amp; SW affirming)
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Resources and tools you may not have heard of — the hidden gems, not the defaults
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Pattern recognition over quick fixes
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Built around your brain, not a productivity standard
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Choose the session that fits where you are right now.
          </p>
          <p className="text-lg text-brand-cream/80 mb-8 max-w-2xl mx-auto">
            Not sure which one? Start with the 20-minute session. It&apos;s a real session, not a sample — and it&apos;ll give you a clear sense of whether the deeper work is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="https://cal.com/pythoness/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              Book a Session
            </Link>
            <Link
              href="mailto:help@pythonessprogrammer.com"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold"
            >
              Email Me With Questions
            </Link>
            <Link
              href="/resources"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold"
            >
              Browse Free Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
