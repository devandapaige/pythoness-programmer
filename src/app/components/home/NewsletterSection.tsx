import { getMDXContent } from '@/lib/mdx'

export default async function NewsletterSection() {
  const { frontmatter } = await getMDXContent('home/newsletter.mdx')
  const { id, title, description, embedUrl } = frontmatter

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark/5 via-brand-cream to-brand-green-dark/5 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
            <p className="text-xl text-brand-purple-dark/90">
              {description}
            </p>
          </div>
        </div>

        {/* Newsletter embed */}
        <div 
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <iframe
            src={embedUrl}
            className="w-full min-h-[400px]"
            frameBorder="0"
            scrolling="no"
            style={{ background: 'transparent' }}
          ></iframe>
        </div>
      </div>
    </section>
  )
} 