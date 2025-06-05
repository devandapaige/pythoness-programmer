// interface NewsletterFrontmatter {
//   id: string;
//   title: string;
//   description: string;
//   embedUrl: string;
// }

interface NewsletterSectionProps {
  bgColor?: string;
}

// Type guard to check if the data matches our NewsletterFrontmatter interface
// function isNewsletterFrontmatter(data: unknown): data is NewsletterFrontmatter {
//   const d = data as Record<string, unknown>;
//   return (
//     typeof d === 'object' &&
//     d !== null &&
//     typeof d.id === 'string' &&
//     typeof d.title === 'string' &&
//     typeof d.description === 'string' &&
//     typeof d.embedUrl === 'string'
//   );
// }

export default function NewsletterSection({ bgColor }: NewsletterSectionProps) {
  // Static content from content/home/newsletter.mdx
  const id = "newsletter";
  const title = "Stay Connected";
  const description = "Get strategic insights on navigating tech spaces, building sustainable systems, and creating accessible solutions. No fluff, just practical expertise and industry awareness.";
  const embedUrl = "https://embeds.beehiiv.com/5eb2e329-cfe4-4c22-b470-7ed460e5e900";
  // const image = "/pythoness-newsletter.png";

  return (
    <section id={id} className={`relative py-24 px-4 md:px-6 ${bgColor || 'bg-gradient-to-br from-brand-purple-dark/5 via-brand-cream to-brand-green-dark/5'} overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-none">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
            <p className="text-xl text-brand-purple-dark/90">
              {description}
            </p>
          </div>
        </div>

        {/* Newsletter embed */}
        <div 
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-none shadow-xl animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <iframe
            src={embedUrl}
            className="w-full min-h-[400px]"
            frameBorder="0"
            scrolling="no"
            style={{ background: 'transparent' }}
          ></iframe>
        </div>
      </div>
    </section>
  )
} 