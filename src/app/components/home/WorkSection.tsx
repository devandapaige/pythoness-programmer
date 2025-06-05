import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function WorkSection() {
  // Static content from content/home/work.mdx
  const id = "work";
  const title = "Featured Projects";
  const subtitle = "A Glimpse Into My Digital Craft";
  const projects: Project[] = [
    {
      title: "The Pythoness Blog",
      description: "A modern, accessible blog built with Next.js and MDX, featuring a custom design system and seamless content management.",
      image: "/pythoness-blog.png",
      link: "https://pythoness.dev/blog",
      tags: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Tech Coaching Platform",
      description: "A streamlined booking and coaching platform that makes tech support accessible and enjoyable.",
      image: "/tech-coaching.png",
      link: "https://pythoness.dev/coaching",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"]
    }
  ];

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
        {/* Projects grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-white/50 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-3 text-brand-green-dark group-hover:text-brand-purple-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-brand-green-accent/10 text-brand-green-dark rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-brand-purple-dark hover:text-brand-green-dark transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 