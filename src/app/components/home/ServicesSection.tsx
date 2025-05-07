import Link from 'next/link'
import Image from 'next/image'
import { getMDXContent } from '@/lib/mdx'

export default async function ServicesSection() {
  const { frontmatter } = await getMDXContent('home/services.mdx')
  const { id, title, description, mainServices, additionalServices } = frontmatter

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_80s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple-dark/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
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

        {/* Main Services with improved visuals */}
        <div className="mb-16">
          <h3 className="text-3xl font-display text-center mb-12 text-brand-cream">Quick Tech Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service: any, index: number) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up ${
                  service.highlight ? 'ring-2 ring-brand-green-accent' : ''
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* New badge for 75-min Digital Reset Session */}
                {service.title === "75-min Digital Reset Session" && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-brand-green-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3">
                      NEW
                    </div>
                  </div>
                )}
                
                {/* Decorative service icon */}
                {service.icon && (
                  <div className="w-16 h-16 mb-6 text-brand-green-accent">
                    <div className="relative w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={32} 
                        height={32}
                        className="transform group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-display mb-3 text-brand-cream group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-cream/90 mb-6 group-hover:text-white transition-colors">
                  {service.subtitle}
                </p>
                <p className="text-3xl font-display mb-6 text-brand-green-accent">
                  {service.price}
                </p>
                <p className="text-sm text-brand-cream/80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center space-x-3 text-brand-cream/90 group/item"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover/item:scale-150 transition-transform"></span>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.note && (
                  <p className="text-sm text-brand-cream/80 italic mb-6">{service.note}</p>
                )}
                <Link
                  href={service.ctaLink}
                  target="_blank"
                  className="inline-block w-full text-center bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-6 py-3 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
                >
                  {service.ctaText}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-cream/80 mt-8 text-sm">
            Coming this summer: Group events and office hours! Stay tuned for updates.
          </p>
        </div>

        {/* Additional Services with improved visuals */}
        <div>
          <h3 className="text-3xl font-display text-center mb-12 text-brand-cream">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service: any, index: number) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Decorative service icon */}
                {service.icon && (
                  <div className="w-16 h-16 mb-6 text-brand-green-accent">
                    <div className="relative w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={32} 
                        height={32}
                        className="transform group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-display mb-3 text-brand-cream group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-cream/90 mb-6 group-hover:text-white transition-colors">
                  {service.subtitle}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center space-x-3 text-brand-cream/90 group/item"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover/item:scale-150 transition-transform"></span>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.note && (
                  <p className="text-sm text-brand-cream/80 italic mb-6">{service.note}</p>
                )}
                <Link
                  href={service.ctaLink}
                  target={service.ctaLink.startsWith('http') ? '_blank' : undefined}
                  className="inline-block w-full text-center bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-6 py-3 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
                >
                  {service.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 