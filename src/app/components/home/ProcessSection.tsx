import Link from 'next/link'
import Section from '@/components/Section'
import { processSection } from '@/app/data/homeData'

export default function ProcessSection() {
  return (
    <Section id={processSection.id} title={processSection.title} className="bg-brand-green-dark text-white">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-8">
          <h3 className="text-3xl font-display mb-6 text-brand-cream">{processSection.subtitle}</h3>
          <div className="space-y-6">
            {processSection.steps.map((step) => (
              <div key={step.number} className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">{step.number}</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-cream">{step.title}</h4>
                  <p className="text-white/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-8">
            <Link 
              href="https://cal.com/pythoness"
              target="_blank"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
            >
              Schedule Your Session
            </Link>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6">
          <h3 className="text-3xl font-display mb-6 text-brand-cream">{processSection.expertise.title}</h3>
          <p className="text-white/90 text-lg mb-6 leading-relaxed">
            {processSection.expertise.description}
          </p>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-brand-cream">Technical Expertise</h4>
              <ul className="space-y-3 text-white/90">
                {processSection.expertise.skills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 