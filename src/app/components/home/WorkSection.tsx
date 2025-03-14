import { getMDXContent } from '@/lib/mdx'

export default async function WorkSection() {
  const { frontmatter } = await getMDXContent('home/work.mdx')
  const { id, title, highlights, philosophy } = frontmatter

  return (
    <section id={id} className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display mb-16 text-brand-green-dark text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Highlights */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
              {highlights.title}
            </h3>
            <ul className="space-y-4">
              {highlights.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-brand-green-accent mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
              {philosophy.title}
            </h3>
            <ul className="space-y-4">
              {philosophy.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-brand-green-accent mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-brand-green-accent pl-4 italic text-gray-600">
              {philosophy.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
} 