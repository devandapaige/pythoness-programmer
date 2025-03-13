import CopyablePrompt from '../CopyablePrompt'

interface Subsection {
  title: string
  prompts: string[]
}

interface ContentSectionProps {
  title: string
  subsections: Subsection[]
  bgColor?: string
}

export default function ContentSection({ title, subsections, bgColor = 'bg-white/5' }: ContentSectionProps) {
  return (
    <section 
      className={`mb-12 ${bgColor} backdrop-blur-sm p-8 rounded-lg border border-white/10`}
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h2 
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-2xl font-display font-normal text-brand-cream mb-4"
      >
        {title}
      </h2>
      <div className="space-y-6" role="list">
        {subsections.map((subsection, index) => (
          <div 
            key={index}
            role="listitem"
            aria-labelledby={`subsection-${subsection.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <h3 
              id={`subsection-${subsection.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl font-display font-normal text-brand-cream mb-3"
            >
              {subsection.title}
            </h3>
            <div 
              className="space-y-3"
              role="list"
              aria-label={`Prompts for ${subsection.title}`}
            >
              {subsection.prompts.map((prompt, promptIndex) => (
                <div key={promptIndex} role="listitem">
                  <CopyablePrompt text={prompt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 