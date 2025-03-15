import { getMDXContent } from '@/lib/mdx'

export default async function ProcessSection() {
  const { frontmatter } = await getMDXContent('home/process.mdx')
  const { id, title, subtitle, steps, expertise } = frontmatter

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-white via-brand-cream to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark/30 to-transparent"></div>
              <p className="text-xl text-brand-purple-dark/90">{subtitle}</p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Process Steps with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step: any, index: number) => (
            <div
              key={step.number}
              className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-white/50 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="text-5xl font-display text-brand-green-accent mb-4 transform group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-display mb-4 text-brand-green-dark group-hover:text-brand-purple-dark transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Expertise Section with glass morphism */}
        <div className="bg-gradient-to-br from-brand-purple-dark/10 to-brand-green-dark/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl animate-fade-in-up animation-delay-300">
          <h3 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-dark">
            {expertise.title}
          </h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {expertise.description}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.skills.map((skill: string, index: number) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-gray-600 group"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover:scale-150 transition-transform"></span>
                <span className="group-hover:text-brand-purple-dark transition-colors">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 