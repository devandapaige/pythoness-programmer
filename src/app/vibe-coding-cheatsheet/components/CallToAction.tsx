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
        Ready to level up your coding experience? Book a 30-minute clarity call where we can discuss your specific challenges and create a personalized strategy for your development journey.
      </p>
      <div 
        className="flex items-center justify-between mb-6"
        role="contentinfo"
        aria-label="Pricing information"
      >
        <span className="text-2xl font-display text-brand-cream">$40</span>
        <span className="text-white/80">30 minutes</span>
      </div>
      <Link 
        href="https://cal.com/pythoness/30mins"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
        aria-label="Book a 30-minute clarity call for $40"
      >
        Book Your Clarity Call
      </Link>
    </div>
  )
} 