interface PainPoint {
  text: string;
  icon?: React.ReactNode;
}

interface PainPointsCardProps {
  title?: string;
  painPoints?: PainPoint[];
  className?: string;
}

export default function PainPointsCard({
  title = "Feeling Stuck? I Can Help.",
  painPoints = [
    { text: "Drowning in digital clutter" },
    { text: "Overwhelmed by apps" },
    { text: "Worried about online security" },
    { text: "Can't find the right tools" },
    { text: "Tech decisions causing stress" },
    { text: "Need a clear digital strategy" }
  ],
  className = ""
}: PainPointsCardProps) {
  return (
    <div className={`p-8 border-none shadow-2xl animate-fade-in-up ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            You&apos;re not alone in feeling overwhelmed by technology. These are the most common challenges I help people solve.
          </p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      {/* Pain Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {painPoints.map((painPoint, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-xl bg-white/10"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Checkmark Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full bg-brand-green-accent flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            {/* Pain Point Text */}
            <div className="flex-1">
              <p className="text-white text-lg">
                {painPoint.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-white/70 mb-6">
          Ready to turn these pain points into solutions?
        </p>
        <a
          href="/services"
          className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
        >
          Let&apos;s Get Started
        </a>
      </div>
    </div>
  )
}
