import Link from 'next/link'
// import Image from 'next/image'

interface Service {
  title: string;
  subtitle?: string;
  price?: string;
  description?: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
  icon?: string;
  note?: string;
  highlight?: boolean;
}

export default function ServicesSection() {
  // Static content from content/home/services.mdx
  const id = "services";
  const title = "Your Digital Journey, Your Way";
  const description = "Everyone learns and grows differently. I'm here to help you discover your own path to digital confidence, with a healthy dose of humor and zero judgment along the way.";
  const mainServices: Service[] = [
    {
      title: "Tech Stack Audit",
      subtitle: "Digital Tools Optimization",
      features: [
        "A personalized assessment of your current digital tools",
        "Identification of potential redundancies and cost-saving opportunities",
        "Recommendations for tools that might better align with your workflow",
        "Post-session email with actionable suggestions and resources",
        "A framework for making future tech decisions with confidence"
      ],
      price: "$70",
      description: "Transform your digital workflow with this focused 30-minute consultation (over Zoom) where we'll examine your current tech stack, identify redundancies, and discover opportunities for simplification. I'll help you evaluate which tools truly serve your needs and which might be creating unnecessary friction in your day-to-day operations.",
      ctaLink: "https://cal.com/pythoness/tech30",
      ctaText: "Book Now"
    },
    {
      title: "75-min Digital Reset Session",
      subtitle: "Personal & Small Business Workflows",
      features: [
        "Comprehensive digital tools audit",
        "Brain-friendly workflow design",
        "Personalized action plan",
        "Follow-up support included",
        "Perfect for neurodivergent creatives"
      ],
      price: "$265",
      description: "Audit your digital tools, design brain-friendly workflows, and get a personalized action plan to reduce overwhelm and boost efficiency. Perfect for neurodivergent creatives and small businesses. Includes follow-up support.",
      highlight: true,
      ctaLink: "https://cal.com/pythoness/tech75",
      ctaText: "Book Now"
    }
  ];
  const additionalServices: Service[] = [
    {
      title: "Group Events",
      subtitle: "Coming This Summer",
      features: [
        "Interactive workshops",
        "Group office hours",
        "Community learning sessions",
        "Collaborative problem-solving"
      ],
      note: "Stay tuned for updates on our upcoming group events and office hours!",
      ctaLink: "https://pythoness.beehiiv.com",
      ctaText: "Join Newsletter for Updates"
    },
    {
      title: "Custom Fullstack JavaScript Development",
      subtitle: "Solutions That Grow With You",
      features: [
        "Resilient, accessible, web applications",
        "Intuitive marketing automation",
        "Thoughtful AI integrations"
      ],
      note: "Available for Contract Work Starting September 2025",
      ctaLink: "mailto:admin@pythonessprogrammer.com",
      ctaText: "Discuss Your Project"
    }
  ];

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
            {mainServices.map((service, index) => (
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
                {/* Decorative service icon (not present in static data) */}
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
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Decorative service icon (not present in static data) */}
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