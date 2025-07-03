interface Topic {
  title: string;
  description: string;
  icon?: string;
}

interface ForeverTopicsCardProps {
  title?: string;
  topics?: Topic[];
  className?: string;
}

export default function ForeverTopicsCard({
  title = "Your Guide to Lifelong Tech Clarity",
  topics = [
    {
      title: "Digital Security",
      description: "Protect your data and privacy with best practices that evolve with technology."
    },
    {
      title: "Workflow Optimization",
      description: "Streamline your digital processes for maximum efficiency and minimal stress."
    },
    {
      title: "Tool Selection",
      description: "Choose the right tools for your needs without getting overwhelmed by options."
    },
    {
      title: "Digital Organization",
      description: "Create systems that work for your brain and keep your digital life clutter-free."
    },
    {
      title: "Automation",
      description: "Let technology work for you with thoughtful, accessible automation strategies."
    },
    {
      title: "Tech Confidence",
      description: "Build lasting confidence in your ability to navigate and master new technologies."
    },
    {
      title: "Digital Wellness",
      description: "Maintain healthy relationships with technology while staying productive."
    },
    {
      title: "Future-Proofing",
      description: "Stay ahead of tech changes with adaptable strategies and continuous learning."
    }
  ],
  className = ""
}: ForeverTopicsCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl animate-fade-in-up ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
          <p className="text-xl text-brand-cream max-w-3xl">
            These are the core topics that will guide you toward lasting tech confidence and clarity.
          </p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Topic Icon Placeholder */}
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-green-accent/20 flex items-center justify-center group-hover:bg-brand-green-accent/30 transition-colors">
              <span className="text-brand-green-accent text-xl font-bold">
                {topic.title.charAt(0)}
              </span>
            </div>
            
            {/* Topic Title */}
            <h3 className="text-lg font-display text-brand-cream group-hover:text-white transition-colors mb-3">
              {topic.title}
            </h3>
            
            {/* Topic Description */}
            <p className="text-sm text-brand-cream/80 group-hover:text-brand-cream transition-colors leading-relaxed">
              {topic.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-brand-cream/80 mb-6">
          Ready to dive deeper into these topics?
        </p>
        <a
          href="/resources"
          className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
        >
          Explore Resources
        </a>
      </div>
    </div>
  )
}
