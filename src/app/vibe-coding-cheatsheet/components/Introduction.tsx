export default function Introduction() {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/20"
      role="region"
      aria-labelledby="introduction-title"
    >
      <h2 
        id="introduction-title"
        className="sr-only"
      >
        Introduction
      </h2>
      <p className="text-white mb-4">
        This reference provides robust prompts designed for developers who may experience ADHD, autism, giftedness, CPTSD, or burnout. These prompts help maintain flow state while coding and accommodate various cognitive styles.
      </p>
      <p className="text-white/90 text-sm">
        <span className="font-medium text-brand-cream">Pro tip:</span> Simply click on any prompt to copy it to your clipboard, ready to paste into your AI chat. Each prompt is designed to be clear and actionable, helping you get the support you need.
      </p>
    </div>
  )
} 