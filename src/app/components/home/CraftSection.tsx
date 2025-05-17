import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

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

interface CraftFrontmatter {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: Services;
  process: Process;
  collaboration: Collaboration;
}

// Type guard to check if the data matches our CraftFrontmatter interface
function isCraftFrontmatter(data: unknown): data is CraftFrontmatter {
  const d = data as Record<string, unknown>;
  const services = d.services as Record<string, unknown>;
  const process = d.process as Record<string, unknown>;
  const collaboration = d.collaboration as Record<string, unknown>;
  
  return (
    typeof d === 'object' &&
    d !== null &&
    typeof d.id === 'string' &&
    typeof d.title === 'string' &&
    typeof d.subtitle === 'string' &&
    typeof d.description === 'string' &&
    typeof services === 'object' &&
    services !== null &&
    typeof services.title === 'string' &&
    Array.isArray(services.items) &&
    typeof process === 'object' &&
    process !== null &&
    typeof process.title === 'string' &&
    Array.isArray(process.steps) &&
    typeof collaboration === 'object' &&
    collaboration !== null &&
    typeof collaboration.text === 'string' &&
    typeof collaboration.ctaText === 'string' &&
    typeof collaboration.ctaLink === 'string'
  );
}

export default async function CraftSection() {
  const { frontmatter } = await getMDXContent('home/craft.mdx')
  
  // Validate the frontmatter data
  if (!isCraftFrontmatter(frontmatter)) {
    throw new Error('Invalid frontmatter data structure in craft.mdx');
  }

  const { id, title, subtitle, description, services, process, collaboration } = frontmatter;

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