import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

export default async function ServicesSection() {
  const { frontmatter } = await getMDXContent('home/services.mdx')
  const { id, title, description, services } = frontmatter

  return (
    <section id={id} className="py-24 px-4 md:px-6 bg-brand-green-light/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-brand-green-dark">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <h3 className="text-2xl font-display mb-3 text-brand-green-dark">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.subtitle}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start text-gray-600">
                    <span className="text-brand-green-accent mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {service.pricing && (
                <div className="mb-6">
                  <h4 className="font-display text-lg mb-3 text-brand-green-dark">
                    Pricing
                  </h4>
                  <ul className="space-y-2">
                    {service.pricing.map((price: any, priceIndex: number) => (
                      <li key={priceIndex} className="text-gray-600">
                        {price.name}: <span className="font-semibold">{price.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.note && (
                <p className="text-sm text-gray-500 italic mb-6">{service.note}</p>
              )}

              <Link
                href={service.ctaLink}
                target={service.ctaLink.startsWith('http') ? '_blank' : undefined}
                className="inline-block w-full text-center bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
              >
                {service.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 