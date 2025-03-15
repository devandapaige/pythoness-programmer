import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

export default async function HeroSection() {
  const { frontmatter } = await getMDXContent('home/hero.mdx')
  const { title, tagline, mainText, subText, buttons } = frontmatter

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white overflow-hidden">
      {/* Enhanced background patterns with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat [transform:rotate(60deg)] animate-[spin_80s_linear_reverse_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/50 to-transparent"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Content container with glass effect */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {/* Title with enhanced animation */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-4 tracking-tight text-white">
              {title}
            </h1>
            {/* Tagline with separator lines */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide">
                {tagline}
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          {/* Main content with staggered animation */}
          <div className="space-y-6 animate-fade-in-up animation-delay-150">
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white font-light leading-relaxed">
              {mainText}
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light leading-relaxed">
              {subText}
            </p>
          </div>

          {/* Buttons with enhanced hover effects */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-300">
            {buttons.map((button: any, index: number) => (
              <Link
                key={index}
                href={button.href}
                target={button.href.startsWith('http') ? '_blank' : undefined}
                className={`group w-full sm:w-auto inline-flex items-center justify-center ${
                  button.primary
                    ? 'bg-brand-green-accent text-white hover:bg-opacity-90 shadow-lg shadow-brand-green-accent/20'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                } px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
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