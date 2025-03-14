import Section from '@/components/Section'
import { newsletterSection } from '@/app/data/homeData'

export default function NewsletterSection() {
  return (
    <Section id={newsletterSection.id} title={newsletterSection.title} className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xl text-brand-purple-dark leading-relaxed mb-6">
            {newsletterSection.description}
          </p>
          <div className="max-w-3xl mx-auto">
            <iframe 
              src={newsletterSection.embedUrl}
              data-test-id="beehiiv-embed" 
              width="100%" 
              height="320" 
              frameBorder="0" 
              scrolling="no" 
              style={{
                borderRadius: '4px',
                border: '2px solid #e5e7eb',
                margin: '0',
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  )
} 