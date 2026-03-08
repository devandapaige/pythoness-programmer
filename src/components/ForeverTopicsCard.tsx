interface Topic {
  title: string;
  description: string;
  icon?: string;
}

interface ForeverTopicsCardProps {
  title?: string;
  topics?: Topic[];
  className?: string;
  description?: string;
}

export default function ForeverTopicsCard({
  title = "Building Our Digital Confidence, Together",
  description = "These are the core practices we build together in our community. We can also explore them in our sessions.",
  topics = [
    {
      title: "Workflow Optimization",
      description: "Streamline your digital processes for maximum efficiency and minimal stress.",
      icon: "⚡"
    },
    {
      title: "Tool Selection",
      description: "Choose the right tools for your needs without getting overwhelmed by options.",
      icon: "🧰"
    },
    {
      title: "Digital Organization",
      description: "Create systems that work for your brain and keep your digital life clutter-free.",
      icon: "🗂️"
    },
    {
      title: "Mindful Automation",
      description: "Let technology work for you with thoughtful, accessible automation strategies.",
      icon: "🤖"
    },
    {
      title: "Digital Wellness",
      description: "Maintain healthy relationships with technology while staying productive.",
      icon: "🌱"
    },
    {
      title: "Future-Proofing",
      description: "Stay ahead of tech changes with adaptable strategies and continuous learning.",
      icon: "🔮"
    },
    {
      title: "Tech Confidence",
      description: "Build lasting confidence in your ability to navigate and master new technologies.",
      icon: "💪"
    },
    {
      title: "Digital Security",
      description: "Protect your data and privacy with best practices that evolve with technology.",
      icon: "🛡️"
    }
  ],
  className = ""
}: ForeverTopicsCardProps) {


  return (
    <div className={`bg-transparent rounded-2xl p-8 border-none shadow-2xl animate-fade-in-up py-12 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display mb-6 text-black">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-brand-green-dark max-w-3xl mx-auto mb-6">{description}</p>
        )}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark to-transparent"></div>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark to-transparent"></div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => {
          const isEven = index % 2 === 0;
          const borderColor = isEven ? 'border-brand-green-dark/30' : 'border-brand-green-accent/30';
          const iconText = isEven ? 'text-brand-green-dark' : 'text-brand-green-accent';
          return (
            <div
              key={index}
              className={`group rounded-xl p-6 hover:bg-brand-green-dark/10 transition-all duration-300 text-center border-2 ${borderColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Topic Icon - emoji only, no circle, accessible */}
              <div className="mb-4 flex items-center justify-center">
                {topic.icon && (
                  <span className={`text-xl font-bold ${iconText}`} role="img" aria-label={topic.title}>
                    {topic.icon}
                  </span>
                )}
              </div>
              {/* Topic Title */}
              <h3 className="text-lg font-display text-brand-green-dark group-hover:text-brand-green-accent transition-colors mb-3">
                {topic.title}
              </h3>
              {/* Topic Description */}
              <p className="text-sm text-black/80 group-hover:text-black transition-colors leading-relaxed">
                {topic.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-black/80 mb-6">
          Ready to dive deeper into these topics?
        </p>
        <a
          href="/resources"
          className="inline-block bg-brand-green-dark text-white px-8 py-4 rounded-lg hover:bg-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
        >
          Explore Resources
        </a>
      </div>
    </div>
  )
}
