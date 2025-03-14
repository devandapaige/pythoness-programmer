import Link from 'next/link'
import Section from '@/components/Section'
import { craftSection } from '@/app/data/homeData'

export default function CraftSection() {
  return (
    <Section id={craftSection.id} title={craftSection.title} className="bg-brand-purple-dark text-white">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-8">
          <h3 className="text-3xl font-display mb-6 text-brand-cream">{craftSection.subtitle}</h3>
          <p className="text-xl text-white leading-relaxed">
            {craftSection.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-brand-cream">{craftSection.services.title}</h4>
              <ul className="space-y-3 text-white/90">
                {craftSection.services.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-xl text-brand-cream">{craftSection.process.title}</h4>
              <ul className="space-y-3 text-white/90">
                {craftSection.process.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-white/90 mb-6">
              {craftSection.collaboration.text}
            </p>
            <Link 
              href={craftSection.collaboration.ctaLink}
              target="_blank"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
            >
              {craftSection.collaboration.ctaText}
            </Link>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6">
          <h3 className="text-2xl font-display text-brand-cream">Small-Batch Excellence</h3>
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            Specializing in personalized, small-batch creations that make your business or event stand out. 
            Each project combines digital design precision with handcrafted care, perfect for local businesses 
            and events seeking that special touch.
          </p>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-brand-cream">Perfect For</h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span>Small business promotional items</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span>Special event keepsakes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span>Custom branding materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span>Artist collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 