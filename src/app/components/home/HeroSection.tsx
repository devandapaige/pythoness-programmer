import Link from 'next/link'
import { heroSection } from '@/app/data/homeData'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white overflow-hidden">
      {/* Background pattern with adjusted opacity */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat [transform:rotate(60deg)] animate-[spin_80s_linear_reverse_infinite]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8 tracking-tight text-white">
          {heroSection.title}
        </h1>
        <div className="space-y-6">
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white font-light leading-relaxed">
            {heroSection.mainText}
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light leading-relaxed">
            {heroSection.subText}
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {heroSection.buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              className={`w-full sm:w-auto inline-block ${
                button.primary
                  ? 'bg-brand-green-accent text-white hover:bg-opacity-90 shadow-brand-green-accent/20'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
              } px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 