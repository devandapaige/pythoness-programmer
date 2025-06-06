import Link from 'next/link'

interface Services {
  title: string;
  items: string[];
}

interface Process {
  title: string;
  steps: string[];
}

interface Collaboration {
  text: string;
  ctaText: string;
  ctaLink: string;
}

export default function CraftSection() {
  // Static content from content/home/craft.mdx
  const id = "craft";
  const title = "Digital Meets Tangible";
  const subtitle = "Local Craft & Print Services";
  const description = "Based in Central Virginia, I create custom physical products for local businesses, events, and fellow creatives. Supporting Virginia artists and businesses through accessible, personalized craft services.";
  const services: Services = {
    title: "Small-Batch Creations",
    items: [
      "Business promotional materials",
      "Custom party & event favors",
      "Small-run print materials",
      "Personalized vinyl designs"
    ]
  };
  const process: Process = {
    title: "How It Works",
    steps: [
      "Free project consultation",
      "Custom design mockups",
      "Small-batch production",
      "Local delivery or shipping"
    ]
  };
  const collaboration: Collaboration = {
    text: "Fellow artists and creators: I'm open to trading services and collaborating on projects. Let's discuss how we can support each other's work.",
    ctaLink: "https://cal.com/pythoness/craft",
    ctaText: "Book Craft Consultation"
  };

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_80s_linear_reverse_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple-dark/30 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-white">
              {title}
            </h2>
            <p className="text-xl text-brand-cream mb-4">{subtitle}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-lg text-white/90 max-w-3xl">
                {description}
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Services */}
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            <h3 className="text-2xl font-display mb-6 text-brand-cream">
              {services.title}
            </h3>
            <ul className="space-y-4">
              {services.items.map((item: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-3 text-white/90 group"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Process */}
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <h3 className="text-2xl font-display mb-6 text-brand-cream">
              {process.title}
            </h3>
            <ul className="space-y-4">
              {process.steps.map((step: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-3 text-white/90 group"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green-accent/20 flex items-center justify-center text-sm text-brand-cream group-hover:bg-brand-green-accent transition-colors">
                    {index + 1}
                  </span>
                  <span className="group-hover:text-white transition-colors">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Collaboration */}
        <div 
          className="max-w-3xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <p className="text-lg text-white/90 mb-8">
            {collaboration.text}
          </p>
          <Link
            href={collaboration.ctaLink}
            target="_blank"
            className="group inline-flex items-center justify-center bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-brand-green-accent/20"
          >
            <span className="relative">
              <span className="block transform group-hover:translate-x-1 transition-transform">
                {collaboration.ctaText}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
} 