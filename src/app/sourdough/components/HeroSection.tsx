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
              Cultivated using Joshua Weissman's Ultimate Sourdough Starter Guide.
            </p>
            <div className="text-sm text-brand-purple-dark/60 mb-8">
              Last Updated: May 7, 2025
            </div>
            <a
              href="https://youtu.be/sTAiDki7AQA?si=bOuIC3ayju42_Baq"
              target="_blank"
              rel="noopener noreferrer"
              className={sectionStyles.button}
            >
              <svg 
                className="w-5 h-5 mr-2" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Watch Joshua Weissman's Guide
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