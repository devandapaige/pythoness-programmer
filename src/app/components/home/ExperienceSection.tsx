import Image from 'next/image'

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

export default function ExperienceSection() {
  // Static content from content/home/work.mdx
  const id = "experience";
  const title = "Professional Experience";
  const highlights: Highlights = {
    title: "Project Highlights",
    items: [
      "Implemented new features using React at an Amazon.com company, improving site engagement and workflow efficiency",
      "Spearheaded development of new features at an AI startup, significantly enhancing site engagement",
      "Integrated calendar scheduling features with third-party APIs, showcasing advanced API configuration skills",
      "Executed A/B Testing to refine UI designs, boosting customer satisfaction"
    ]
  };
  const philosophy: Philosophy = {
    title: "My Philosophy",
    items: [
      "I build systems that won't burn you out",
      "Accessibility isn't an afterthought, it's fundamental",
      "Technical guidance that respects your pace and process",
      "Finding the sweet spot between technical excellence and practical implementation"
    ],
    quote: "I believe creativity and anxiety exist on the same spectrum—when we reduce one, we amplify the other. My work intentionally eliminates ambiguity, provides consistent structure, removes distractions, and offers responsive feedback throughout the process."
  };
  const photo: Photo = {
    main: "/pythoness-workshop-teaching.png",
    caption: {
      title: "Let's Create Something Amazing",
      quote: "Every digital technology challenge is an opportunity to express your unique vision and values in the world.",
      description: "Working with conscious creators and business owners is my passion. I love helping translate your vision into digital reality while ensuring you understand the technology enough to make it work for you, not the other way around."
    }
  };

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-white via-brand-purple-light/5 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-none">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-purple-dark">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Project Highlights */}
          <div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            <h3 className="text-2xl font-display mb-6 text-brand-green-dark">
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
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <h3 className="text-2xl font-display mb-6 text-brand-green-dark">
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
            <blockquote className="border-l-4 border-brand-green-accent pl-4 italic text-gray-600">
              {philosophy.quote}
            </blockquote>
          </div>
        </div>

        {/* Photo with caption */}
        <div 
          className="mt-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {photo?.main ? (
                <Image
                  src={photo.main}
                  alt={photo.caption.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center bg-brand-purple-dark/10">
                  <p className="text-brand-purple-dark">Image coming soon</p>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">
                {photo.caption.title}
              </h3>
              <blockquote className="border-l-4 border-brand-green-accent pl-4 italic text-gray-600 mb-4">
                {photo.caption.quote}
              </blockquote>
              <p className="text-gray-600">
                {photo.caption.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 