import Link from 'next/link'

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

export default function ContactSection() {
  // Static content from content/home/contact.mdx
  const id = "contact";
  const title = "Let's Connect & Problem-Solve Together";
  const description = "Every digital challenge is an opportunity to learn, grow, and create something exceptional. Let's work together to find your path to tech confidence.";
  const services: Service[] = [
    {
      title: "Tech Stack Audit",
      price: "$70",
      description: "A focused 30-minute session to optimize your digital tools and workflow.",
      features: [
        "Personalized tool assessment",
        "Cost-saving opportunities",
        "Workflow optimization",
        "Actionable recommendations"
      ],
      ctaText: "Book Tech Stack Audit",
      ctaLink: "https://cal.com/pythoness/tech30"
    },
    {
      title: "75-min Digital Reset Session",
      price: "$265",
      description: "Audit your digital tools, design brain-friendly workflows, and get a personalized action plan to reduce overwhelm and boost efficiency. Perfect for neurodivergent creatives and small businesses. Includes follow-up support.",
      features: [
        "Comprehensive digital tools audit",
        "Brain-friendly workflow design",
        "Personalized action plan",
        "Follow-up support included",
        "Perfect for neurodivergent creatives"
      ],
      ctaText: "Book Digital Reset",
      ctaLink: "https://cal.com/pythoness/tech75"
    }
  ];
  const why = {
    title: "Why Book a Tech Coaching Session?",
    content: [
      "Technology should empower you, not frustrate you. My coaching sessions are designed to meet you exactly where you are, providing clear, actionable guidance tailored to your unique needs. You'll leave with concrete next steps and renewed confidence in your tech journey.",
      "Unlike typical tech support, I focus on teaching and empowering you to understand your tools better, so you gain independence along with solutions. My approach blends technical expertise with empathy, ensuring you get solutions that truly work for your specific situation."
    ]
  };
  const contact = {
    message: "Questions? Email me at",
    email: "admin@pythonessprogrammer.com"
  };
  const closing = {
    text: "Let's work together to create technology solutions that enhance your work, not complicate it. My approach combines technical expertise with empathy, ensuring you get solutions that truly work for you. Stay tuned for group events and office hours coming this summer!",
    buttons: [
      {
        text: "Join Newsletter for Updates",
        link: "https://pythoness.beehiiv.com"
      },
      {
        text: "Email Me Directly",
        link: "mailto:admin@pythonessprogrammer.com"
      }
    ]
  };

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-dark to-brand-green-dark/90 text-white overflow-hidden">
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
              {title}
            </h2>
            <p className="text-xl text-brand-cream">
              {description}
            </p>
          </div>
        </div>
        {/* Services grid with improved visual styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service: Service, index: number) => (
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
              {why.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  {why.content[0]}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-cream/30 to-transparent md:hidden"></div>
              </div>
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  {why.content[1]}
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
            {contact.message}{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-cream hover:text-white transition-colors relative group"
            >
              <span className="relative z-10">{contact.email}</span>
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
            {closing.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {closing.buttons.map((button: ClosingButton, index: number) => (
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