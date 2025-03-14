import Section from '@/components/Section'
import { workSection } from '@/app/data/homeData'

export default function WorkSection() {
  return (
    <Section id={workSection.id} title={workSection.title} className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-display text-brand-green-dark">{workSection.highlights.title}</h3>
            <ul className="space-y-4">
              {workSection.highlights.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-display text-brand-green-dark">{workSection.philosophy.title}</h3>
            <ul className="space-y-4">
              {workSection.philosophy.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-brand-purple-dark/90 mt-8 italic">
              {workSection.philosophy.quote}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
} 