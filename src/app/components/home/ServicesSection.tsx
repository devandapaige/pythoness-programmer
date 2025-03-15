import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

export default async function ServicesSection() {
  const { frontmatter } = await getMDXContent('home/services.mdx')
  const { id, title, description, services } = frontmatter

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_80s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple-dark/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream max-w-3xl">
                {description}
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Service cards with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <h3 className="text-2xl font-display mb-3 text-brand-cream group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-cream/90 mb-6 group-hover:text-white transition-colors">
                {service.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature: string, featureIndex: number) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center space-x-3 text-brand-cream group/item"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover/item:scale-150 transition-transform"></span>
                    <span className="group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {service.pricing && (
                <div className="mb-6">
                  <h4 className="font-display text-lg mb-3 text-brand-cream">
                    Pricing
                  </h4>
                  <ul className="space-y-2">
                    {service.pricing.map((price: any, priceIndex: number) => (
                      <li key={priceIndex} className="text-brand-cream/90">
                        {price.name}: <span className="font-semibold">{price.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.note && (
                <p className="text-sm text-brand-cream/80 italic mb-6">{service.note}</p>
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