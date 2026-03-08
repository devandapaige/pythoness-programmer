import HeroCard from '../components/HeroCard'
import PainPointsCard from '../components/PainPointsCard'
import ForeverTopicsCard from '../components/ForeverTopicsCard'
import ServiceCard from '../components/ServiceCard'
import AboutCard from '../components/AboutCard'
import NewsletterCard from '../components/NewsletterCard'

export const metadata = {
  title: 'Pythoness Programmer | Tech Coaching & Reflection Sessions',
  description: 'I philosophize with other decolonizing neurodivergents about how our tech struggles reveal what we\'ve internalized and what our brains actually need. Reflection sessions, not rescue—pattern recognition and brain-friendly clarity.',
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

      {/* Pain Points Section */}
      <section className="bg-brand-green-dark overflow-hidden">
        <div>
          <PainPointsCard
            title="Hitting the Same Walls?"
            description="You're already doing the work. You're building systems, learning your tools, making progress. But the same friction points keep slowing you down—or making you feel like you're failing when you're not."
            painPoints={[
              { text: "Same patterns repeating no matter what you try" },
              { text: "Productivity tools that don't fit your brain" },
              { text: "Tech that works against you instead of with you" },
              { text: "Internalized assumptions hiding in your workflow" },
              { text: "Colonial logic baked into how you organize" },
              { text: "Ready to understand what your struggles are teaching you" }
            ]}
          />
        </div>
      </section>

      {/* Forever Topics Section */}
      <section className="overflow-hidden">
        <div>
          <ForeverTopicsCard />
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
                description="Receive a potent 20-minute intuitive reading for your project, website, or online presence, delivered as a private video. No live meeting required—perfect for busy schedules."
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
                description="Quick reflection and resource discovery. We start and end with a tarot pull to guide our session. Perfect for understanding a specific struggle, discovering resources you haven't heard of, or getting clarity on your next step."
                features={[
                  "Tarot card pull at start and end",
                  "Reflection on your recent tech struggle",
                  "Pattern recognition: what this reveals about what you've internalized",
                  "Resources and tools you may not have heard of",
                  "One clear next step forward",
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
                subtitle="Deep dive into your tech patterns"
                price="$60"
                description="Deep dive into your tech patterns. We start and end with a tarot pull. Ideal for understanding recurring struggles, uncovering what you've internalized from ableist tech culture, and building a framework for better decisions going forward."
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
                ctaText="Book Now"
                icon="🔮"
                textColor="text-brand-cream"
                note="Most popular choice for extended guidance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AboutCard />
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
