import { sectionStyles } from './shared/Styles'

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-brand-purple-light">
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <div className="text-center">
            <h1 className={sectionStyles.heading.h1}>
              Sourdough Corner
            </h1>
            <p className="text-xl text-brand-purple-dark/80 mb-8">
              Meet Martha, my rye sourdough starter established in May 2024 in New Kent, Virginia.
              Cultivated using Joshua Weissman&apos;s Ultimate Sourdough Starter Guide.
            </p>
            <div className="text-sm text-brand-purple-dark/60 mb-8">
              Last Updated: May 7, 2025
            </div>
            <a
              href="https://www.youtube.com/watch?v=sTAiDki7AQA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-brand-green-accent/90 transition-colors"
            >
              Watch Joshua Weissman&apos;s Guide
            </a>

            <nav className="mt-12">
              <ul className="flex flex-wrap justify-center gap-4">
                <li>
                  <a 
                    href="#starter-guide" 
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-brand-purple-dark transition-colors"
                  >
                    Starter Guide
                  </a>
                </li>
                <li>
                  <a 
                    href="#terminology" 
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-brand-purple-dark transition-colors"
                  >
                    Terminology
                  </a>
                </li>
                <li>
                  <a 
                    href="#tools-resources" 
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-brand-purple-dark transition-colors"
                  >
                    Tools & Resources
                  </a>
                </li>
                <li>
                  <a 
                    href="#recipes" 
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-brand-purple-dark transition-colors"
                  >
                    Recipes
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
} 