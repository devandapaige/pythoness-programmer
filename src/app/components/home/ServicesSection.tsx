import Link from 'next/link'
import Section from '@/components/Section'
import { servicesSection } from '@/app/data/homeData'

export default function ServicesSection() {
  return (
    <Section id={servicesSection.id} title={servicesSection.title} className="bg-gradient-to-b from-brand-cream to-white">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-xl text-brand-purple-dark leading-relaxed">
          {servicesSection.description}
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesSection.services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">{service.title}</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">{service.title}</h3>
              <p className="text-brand-purple-dark/90">{service.subtitle}</p>
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span className="flex-1 text-brand-purple-dark">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 space-y-2">
                {service.pricing && (
                  <>
                    <p className="font-medium text-brand-green-dark">Available Sessions:</p>
                    <ul className="space-y-2 text-sm text-brand-purple-dark">
                      {service.pricing.map((price, priceIndex) => (
                        <li key={priceIndex} className="flex items-center justify-between">
                          <span>• {price.name}</span>
                          <span className="font-medium">{price.price}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {service.note && (
                  <p className="text-sm text-brand-purple-dark/80 italic">{service.note}</p>
                )}
                <div className="pt-4">
                  <Link 
                    href={service.ctaLink}
                    target={service.ctaLink.startsWith('http') ? '_blank' : undefined}
                    className="inline-block w-full bg-brand-green-accent text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    {service.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 