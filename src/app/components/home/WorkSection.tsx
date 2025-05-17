import Image from 'next/image'
import { getMDXContent } from '@/lib/mdx'

interface Highlights {
  title: string;
  items: string[];
}

interface Philosophy {
  title: string;
  items: string[];
  quote: string;
}

interface Photo {
  main: string;
  caption: {
    title: string;
    quote: string;
    description: string;
  };
}

interface Frontmatter {
  id: string;
  title: string;
  highlights: Highlights;
  philosophy: Philosophy;
  photo?: Photo;
}

export default async function WorkSection() {
  const { frontmatter } = await getMDXContent('home/work.mdx')
  const { id, title, highlights, philosophy, photo } = frontmatter as Frontmatter

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-white to-brand-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-none">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Highlights */}
          <div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            <h3 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
              {highlights.title}
            </h3>
            <ul className="space-y-4">
              {highlights.items.map((item: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-start group"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent group-hover:scale-150 transition-transform"></span>
                  <span className="ml-4 text-gray-600 group-hover:text-brand-purple-dark transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div 
            className="bg-gradient-to-br from-brand-purple-dark/5 to-brand-green-dark/10 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <h3 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
              {philosophy.title}
            </h3>
            <ul className="space-y-4 mb-8">
              {philosophy.items.map((item: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-start group"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent group-hover:scale-150 transition-transform"></span>
                  <span className="ml-4 text-gray-600 group-hover:text-brand-purple-dark transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <blockquote className="relative">
              <div className="absolute -top-4 -left-2 text-4xl text-brand-green-accent opacity-30">&ldquo;</div>
              <p className="relative z-10 italic text-gray-600 pl-6 border-l-2 border-brand-green-accent/30">
                {philosophy.quote}
              </p>
            </blockquote>
          </div>
        </div>

        {/* Photo showcase */}
        {photo?.main && (
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <div className="bg-white/70 backdrop-blur-sm p-6 md:p-10 rounded-2xl border-none shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Working photo */}
                <div className="md:w-1/3">
                  <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                    <Image
                      src={photo.main}
                      alt="Pythoness at work"
                      width={400}
                      height={500}
                      className="w-full h-auto"
                      priority
                      style={{ backgroundColor: 'transparent' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark to-transparent opacity-30"></div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-display mb-4 text-brand-green-dark">
                    {photo.caption.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 italic leading-relaxed">
                    &ldquo;{photo.caption.quote}&rdquo;
                  </p>
                  <p className="text-gray-600">
                    {photo.caption.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 