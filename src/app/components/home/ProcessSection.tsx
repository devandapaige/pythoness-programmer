import { getMDXContent } from '@/lib/mdx'

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessFrontmatter {
  id: string;
  title: string;
  subtitle: string;
  steps: Step[];
  expertise: {
    title: string;
    description: string;
    skills: string[];
  };
}

// Type guard to check if the data matches our ProcessFrontmatter interface
function isProcessFrontmatter(data: unknown): data is ProcessFrontmatter {
  const d = data as Record<string, unknown>;
  const steps = d.steps as unknown[];
  const expertise = d.expertise as Record<string, unknown>;
  
  return (
    typeof d === 'object' &&
    d !== null &&
    typeof d.id === 'string' &&
    typeof d.title === 'string' &&
    typeof d.subtitle === 'string' &&
    Array.isArray(steps) &&
    steps.every((step: unknown) => {
      if (typeof step !== 'object' || step === null) return false;
      const s = step as Record<string, unknown>;
      return (
        typeof s.number === 'string' &&
        typeof s.title === 'string' &&
        typeof s.description === 'string'
      );
    }) &&
    typeof expertise === 'object' &&
    expertise !== null &&
    typeof expertise.title === 'string' &&
    typeof expertise.description === 'string' &&
    Array.isArray(expertise.skills)
  );
}

export default async function ProcessSection() {
  const { frontmatter } = await getMDXContent('home/process.mdx')
  
  // Validate the frontmatter data
  if (!isProcessFrontmatter(frontmatter)) {
    throw new Error('Invalid frontmatter data structure in process.mdx');
  }

  const { id, title, subtitle, steps, expertise } = frontmatter;

  const safeId = id as string;
  const safeTitle = title as string;
  const safeSubtitle = subtitle as string;
  const safeSteps = steps as Step[];
  const safeExpertise = expertise as { title: string; description: string; skills: string[] };

  return (
    <section id={safeId} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-white via-brand-cream to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {safeTitle}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark/30 to-transparent"></div>
              <p className="text-xl text-brand-purple-dark/90">{safeSubtitle}</p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Process Steps with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {safeSteps.map((step, index) => (
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
            {safeExpertise.title}
          </h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {safeExpertise.description}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safeExpertise.skills.map((skill: string, index: number) => (
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