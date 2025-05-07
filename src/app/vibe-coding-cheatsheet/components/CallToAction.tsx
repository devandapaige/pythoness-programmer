import Link from 'next/link'

export default function CallToAction() {
  return (
    <div 
      className="bg-brand-green-dark p-6 rounded-lg mt-8 border border-white/20"
      role="region"
      aria-labelledby="cta-title"
    >
      <h2 
        id="cta-title"
        className="text-2xl font-display font-normal text-brand-cream mb-4"
      >
        Need More Support?
      </h2>
      <p className="mb-4 text-white">
        Ready to level up your coding experience? Explore our services to find the perfect support for your development journey.
      </p>
      <div 
        className="flex items-center justify-between mb-6"
        role="contentinfo"
        aria-label="Service information"
      >
        <span className="text-2xl font-display text-brand-cream">Services</span>
        <span className="text-white/80">Tailored Support</span>
      </div>
      <Link 
        href="/#services"
        className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
        aria-label="View our services"
      >
        Explore Services
      </Link>
    </div>
  )
} 