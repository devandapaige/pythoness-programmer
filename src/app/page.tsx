import HeroCard from '../components/HeroCard'
import PainPointsCard from '../components/PainPointsCard'
import ForeverTopicsCard from '../components/ForeverTopicsCard'
import ServiceCard from '../components/ServiceCard'
import AboutCard from '../components/AboutCard'
import NewsletterCard from '../components/NewsletterCard'

export const metadata = {
  title: 'Pythoness Programmer | Tech Coaching & Development',
  description: 'Tech coaching, web development, and digital crafts for conscious creators and business owners.',
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
      <section className="bg-brand-purple-dark overflow-hidden">
        <div>
          <PainPointsCard />
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
              Your Digital Journey, Your Way
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream max-w-3xl">
                Everyone learns and grows differently. I&apos;m here to help you discover your own path to digital confidence, with a healthy dose of humor and zero judgment along the way.
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
                description="Receive a potent 20-minute intuitive reading for your project, website, or online presence, delivered as a private video recording. No live meeting required—perfect for busy schedules."
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
                textColor="text-brand-purple-dark"
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

          {/* Live 1:1 Sessions */}
          <div className="mb-16">
            <h3 className="text-3xl font-display text-center mb-4 text-brand-cream">Live 1:1 Sessions</h3>
            <p className="text-brand-cream/80 text-center mb-12">Interactive sessions with real-time guidance</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="20-Minute Digital Psychic Session"
                subtitle="Quick guidance and ideation"
                price="$30"
                description="Perfect for when you need quick guidance on a specific digital challenge or want to explore working together. We'll start and end with a tarot card pull to guide our session."
                features={[
                  "Tarot card pull at start and end",
                  "Quick digital problem-solving",
                  "Tool and workflow recommendations",
                  "Action plan with next steps",
                  "Follow-up email with resources"
                ]}
                ctaLink="https://cal.com/pythoness/20min"
                ctaText="Book Now"
                icon="🔮"
                textColor="text-brand-cream"
                note="Great for specific questions or quick wins"
              />
              <ServiceCard
                title="60-Minute Digital Psychic Session"
                subtitle="Extended problem-solving & design"
                price="$60"
                description="Extended time for comprehensive digital problem-solving, system design, and workflow optimization. We'll start and end with a tarot card pull to guide our session."
                features={[
                  "Tarot card pull at start and end",
                  "Extended digital problem-solving",
                  "Deep workflow analysis & design",
                  "Tool evaluation & recommendations",
                  "Strategic planning & next steps",
                  "Detailed action plan with resources"
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
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white overflow-hidden">
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
