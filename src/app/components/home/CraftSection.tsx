import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

export default async function CraftSection() {
  const { frontmatter } = await getMDXContent('home/craft.mdx')
  const { id, title, subtitle, description, services, process, collaboration } = frontmatter

  return (
    <section id={id} className="py-24 px-4 md:px-6 bg-brand-green-light/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-display mb-6 text-brand-green-dark">
              {services.title}
            </h3>
            <ul className="space-y-4">
              {services.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-brand-green-accent mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-display mb-6 text-brand-green-dark">
              {process.title}
            </h3>
            <ul className="space-y-4">
              {process.steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-brand-green-accent mr-2">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Collaboration */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            {collaboration.text}
          </p>
          <Link
            href={collaboration.ctaLink}
            target="_blank"
            className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
          >
            {collaboration.ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
} 