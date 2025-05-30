import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

interface Service {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
}

interface ClosingButton {
  link: string;
  text: string;
}

interface ContactFrontmatter {
  id: string;
  title: string;
  description: string;
  services: Service[];
  why: {
    title: string;
    content: string[];
  };
  contact: {
    message: string;
    email: string;
  };
  closing: {
    text: string;
    buttons: ClosingButton[];
  };
}

// Type guard to check if the data matches our ContactFrontmatter interface
function isContactFrontmatter(data: unknown): data is ContactFrontmatter {
  const d = data as Record<string, unknown>;
  const closing = d.closing as Record<string, unknown>;
  const buttons = closing.buttons as unknown[];
  
  return (
    typeof d === 'object' &&
    d !== null &&
    typeof d.id === 'string' &&
    typeof d.title === 'string' &&
    typeof d.description === 'string' &&
    Array.isArray(d.services) &&
    d.services.every((service: Record<string, unknown>) => (
      typeof service === 'object' &&
      service !== null &&
      typeof service.title === 'string' &&
      typeof service.price === 'string' &&
      typeof service.description === 'string' &&
      Array.isArray(service.features) &&
      typeof service.ctaLink === 'string' &&
      typeof service.ctaText === 'string'
    )) &&
    typeof d.why === 'object' &&
    d.why !== null &&
    typeof (d.why as Record<string, unknown>).title === 'string' &&
    Array.isArray((d.why as Record<string, unknown>).content) &&
    typeof d.contact === 'object' &&
    d.contact !== null &&
    typeof (d.contact as Record<string, unknown>).message === 'string' &&
    typeof (d.contact as Record<string, unknown>).email === 'string' &&
    typeof closing === 'object' &&
    closing !== null &&
    typeof closing.text === 'string' &&
    Array.isArray(buttons) &&
    buttons.every((button: unknown) => {
      if (typeof button !== 'object' || button === null) return false;
      const b = button as Record<string, unknown>;
      return (
        typeof b.link === 'string' &&
        typeof b.text === 'string'
      );
    })
  );
}

export default async function ContactSection() {
  const { frontmatter } = await getMDXContent('home/contact.mdx')
  
  // Validate the frontmatter data
  if (!isContactFrontmatter(frontmatter)) {
    throw new Error('Invalid frontmatter data structure in contact.mdx');
  }

  const { id, title, description, services, why, contact, closing } = frontmatter;

  // Typecast to expected types
  const safeId = id as string;
  const safeTitle = title as string;
  const safeDescription = description as string;
  const safeServices = services as Service[];
  const safeClosing = closing as { text: string; buttons: ClosingButton[] };
  const safeClosingButtons = safeClosing.buttons;
  const safeWhy = why as { title: string; content: string[] };
  const safeContact = contact as { message: string; email: string };

  return (
    <section id={safeId} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-dark to-brand-green-dark/90 text-white overflow-hidden">
      {/* Background pattern with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat [transform:rotate(60deg)] animate-[spin_80s_linear_reverse_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/50 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              {safeTitle}
            </h2>
            <p className="text-xl text-brand-cream">
              {safeDescription}
            </p>
          </div>
        </div>

        {/* Services grid with improved visual styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {safeServices.map((service: Service, index: number) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <h3 className="text-2xl font-display mb-3 text-brand-cream group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-3xl font-display mb-6 text-brand-green-accent">
                {service.price}
              </p>
              <p className="text-white/90 mb-8">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature: string, featureIndex: number) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center space-x-3 text-white/80 group/item"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-cream group-hover/item:scale-150 transition-transform"></span>
                    <span className="group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Link
                  href={service.ctaLink}
                  target={service.ctaLink.startsWith('http') ? '_blank' : undefined}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-brand-cream to-brand-cream/90 text-brand-green-dark rounded-lg hover:from-white hover:to-brand-cream transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-brand-cream/20 font-bold"
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-brand-cream/80 mb-20 text-sm">
          Coming this summer: Group events and office hours! Stay tuned for updates.
        </p>

        {/* Why coaching section with decorative elements */}
        <div 
          className="mb-20 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
            <h3 className="text-3xl font-display mb-8 text-brand-cream text-center">
              {safeWhy.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  {safeWhy.content[0]}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-cream/30 to-transparent md:hidden"></div>
              </div>
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  {safeWhy.content[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info with glowing effect */}
        <div 
          className="text-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <p className="text-white/90">
            {safeContact.message}{' '}
            <a
              href={`mailto:${safeContact.email}`}
              className="text-brand-cream hover:text-white transition-colors relative group"
            >
              <span className="relative z-10">{safeContact.email}</span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-brand-cream/30 group-hover:h-full group-hover:bg-brand-cream/10 transition-all duration-300 -z-0"></span>
            </a>
          </p>
        </div>

        {/* Closing with improved button styling */}
        <div 
          className="max-w-3xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: '750ms' }}
        >
          <p className="text-lg text-white/90 mb-8">
            {safeClosing.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {safeClosingButtons.map((button: ClosingButton, index: number) => (
              <Link
                key={index}
                href={button.link}
                target="_blank"
                className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-none text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="relative">
                  <span className="block transform group-hover:translate-x-1 transition-transform">
                    {button.text}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 