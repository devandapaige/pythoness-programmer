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
      <section className="bg-brand-green-dark pt-24">
        <div>
          <HeroCard />
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="bg-brand-purple-dark">
        <div>
          <PainPointsCard />
        </div>
      </section>

      {/* Forever Topics Section */}
      <section>
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

          {/* Quick Tech Support */}
          <div className="mb-16">
            <h3 className="text-3xl font-display text-center mb-12 text-brand-cream">Quick Tech Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="Tech Stack Audit"
                subtitle="Digital Tools Optimization"
                price="$70"
                description="Transform your digital workflow with this focused 30-minute consultation (over Zoom) where we'll examine your current tech stack, identify redundancies, and discover opportunities for simplification."
                features={[
                  "A personalized assessment of your current digital tools",
                  "Identification of potential redundancies and cost-saving opportunities",
                  "Recommendations for tools that might better align with your workflow",
                  "Post-session email with actionable suggestions and resources",
                  "A framework for making future tech decisions with confidence"
                ]}
                ctaLink="https://cal.com/pythoness/tech30"
                ctaText="Book Now"
                textColor="text-brand-cream"
              />
              <ServiceCard
                title="75-min Digital Reset Session"
                subtitle="Personal & Small Business Workflows"
                price="$265"
                description="Audit your digital tools, design brain-friendly workflows, and get a personalized action plan to reduce overwhelm and boost efficiency. Perfect for neurodivergent creatives and small businesses. Includes follow-up support."
                features={[
                  "Comprehensive digital tools audit",
                  "Brain-friendly workflow design",
                  "Personalized action plan",
                  "Follow-up support included",
                  "Perfect for neurodivergent creatives"
                ]}
                ctaLink="https://cal.com/pythoness/tech75"
                ctaText="Book Now"
                highlight={true}
                isNew={true}
                textColor="text-brand-cream"
              />
            </div>
            <p className="text-center text-brand-cream/80 mt-8 text-sm">
              Coming this summer: Group events and office hours! Stay tuned for updates.
            </p>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-3xl font-display text-center mb-12 text-brand-cream">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="Group Events"
                subtitle="Coming This Summer"
                features={[
                  "Interactive workshops",
                  "Group office hours",
                  "Community learning sessions",
                  "Collaborative problem-solving"
                ]}
                note="Stay tuned for updates on our upcoming group events and office hours!"
                ctaLink="https://pythoness.beehiiv.com"
                ctaText="Join Newsletter for Updates"
                textColor="text-brand-cream"
              />
              <ServiceCard
                title="Custom Fullstack JavaScript Development"
                subtitle="Solutions That Grow With You"
                features={[
                  "Resilient, accessible, web applications",
                  "Intuitive marketing automation",
                  "Thoughtful AI integrations"
                ]}
                note="Available for Contract Work Starting September 2025"
                ctaLink="mailto:admin@pythonessprogrammer.com"
                ctaText="Discuss Your Project"
                textColor="text-brand-cream"
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
      <section>
        <div className="max-w-7xl mx-auto">
          <NewsletterCard />
        </div>
      </section>
    </main>
  )
}
