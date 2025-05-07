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
          </div>
        </div>
      </div>
    </section>
  )
} 