import { getMDXContent } from '@/lib/mdx'

export default async function ProcessSection() {
  const { frontmatter } = await getMDXContent('home/process.mdx')
  const { id, title, subtitle, steps, expertise } = frontmatter

  return (
    <section id={id} className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step: any) => (
            <div
              key={step.number}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-display text-brand-green-accent mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-display mb-4 text-brand-green-dark">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-brand-green-light/10 p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
            {expertise.title}
          </h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {expertise.description}
          </p>
          <ul className="space-y-4">
            {expertise.skills.map((skill: string, index: number) => (
              <li
                key={index}
                className="flex items-start text-gray-600"
              >
                <span className="text-brand-green-accent mr-2">•</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 