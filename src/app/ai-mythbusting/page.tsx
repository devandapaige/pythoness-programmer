export default function AIMythbustingPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-purple-dark via-brand-green-dark to-brand-purple-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section with Value Proposition */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              AI Myth-Busting Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Critical thinking skills for the AI era
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed mb-6">
              From the Wooden Snake&apos;s wisdom to bullshit detection: understand what AI actually is, what it isn&apos;t, and how to use it responsibly in our tech-power-government era.
            </p>
          </section>

          {/* Video Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-purple-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-purple-dark text-center mt-1">Watch the AI Myth-Busting Overview</h2>
            <p className="text-brand-purple-dark text-center mb-2">A 6-minute video recap of essential AI myths, critical thinking strategies, and the truth about AI capabilities.</p>
            <div className="w-full mt-0">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/O7VtUvFJGbY" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{borderRadius: '12px'}}
              />
            </div>
          </section>

          {/* Main Content Block: What's Inside */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-purple-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-brand-purple-dark text-center mt-0">What&apos;s Inside?</h2>
            <p className="text-base mb-6 text-brand-purple-dark text-center">
              This toolkit combines insights from our August 2025 AI myth-busting newsletter series, designed to help you navigate AI with confidence and critical thinking.
            </p>

            {/* Newsletter 1: The Wooden Snake's AI Wisdom */}
            <div className="mb-8 bg-brand-purple-dark/10 border-l-4 border-brand-purple-accent rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-display mb-4 text-brand-purple-dark">The Wooden Snake&apos;s AI Wisdom: Debunking Myths in the Tech-Power-Government Era</h3>
              <p className="mb-4 text-base text-brand-purple-dark">
                From Mr. Meeseeks to plant medicine: how to use AI responsibly in an era of increasing tech complexity and government scrutiny.
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-purple-dark mb-2">Key Myths Debunked:</h4>
                <ul className="list-disc list-inside text-sm text-brand-purple-dark space-y-1">
                  <li><strong>&quot;AI is Learning and Getting Smarter&quot;</strong> - AI models are NOT learning individuals</li>
                  <li><strong>&quot;AI Hallucination is a Bug, Not a Feature&quot;</strong> - Hallucination is necessary for creative thinking</li>
                  <li><strong>&quot;AI Will Replace Human Creativity&quot;</strong> - AI amplifies creativity, doesn&apos;t replace it</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-purple-dark mb-2">The Wooden Snake&apos;s Wisdom:</h4>
                <p className="text-sm text-brand-purple-dark">
                  True power isn&apos;t about brute force—it&apos;s about adapting, observing, and finding smarter paths forward. Learn to observe before you trust, adapt to new information, and find smarter paths forward with AI tools.
                </p>
              </div>
              <a
                href="https://newsletter.pythonessprogrammer.com/p/the-wooden-snake-s-ai-wisdom-debunking-myths-in-the-tech-power-government-era"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-purple-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold shadow-lg"
              >
                Read Full Newsletter →
              </a>
            </div>

            {/* Newsletter 2: AI Bullshit Detection */}
            <div className="mb-8 bg-brand-green-dark/10 border-l-4 border-brand-green-accent rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">AI Bullshit Detection: Why Your Critical Thinking is Your Best AI Tool</h3>
              <p className="mb-4 text-base text-brand-green-dark">
                From AI hallucinations to government data sharing: developing your critical thinking superpower in the tech-power-government era.
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-green-dark mb-2">Critical Thinking Framework:</h4>
                <ul className="list-disc list-inside text-sm text-brand-green-dark space-y-1">
                  <li><strong>Question Everything:</strong> What am I actually asking AI to do?</li>
                  <li><strong>Check Your Expectations:</strong> Do I expect AI to remember? Get smarter? Be 100% accurate?</li>
                  <li><strong>Verify Results:</strong> What sources will I check? How will I test suggestions?</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-green-dark mb-2">The 3-Question Reality Check:</h4>
                <p className="text-sm text-brand-green-dark">
                  Before using any AI tool, ask: What am I asking AI to do? What are my expectations? How will I verify the results?
                </p>
              </div>
              <a
                href="https://newsletter.pythonessprogrammer.com/p/ai-bullshit-detection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold shadow-lg"
              >
                Read Full Newsletter →
              </a>
            </div>

            {/* Newsletter 3: The Truth About AI */}
            <div className="mb-8 bg-brand-purple-dark/10 border-l-4 border-brand-purple-accent rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-display mb-4 text-brand-purple-dark">The Truth About AI: What You Need to Know Before Getting Creative</h3>
              <p className="mb-4 text-base text-brand-purple-dark">
                Essential knowledge for creative AI users: understanding limitations, capabilities, and responsible usage.
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-purple-dark mb-2">Key Insights:</h4>
                <ul className="list-disc list-inside text-sm text-brand-purple-dark space-y-1">
                  <li><strong>AI as Creative Partner:</strong> Not replacement, but amplification tool</li>
                  <li><strong>Understanding Limitations:</strong> What AI can and cannot do</li>
                  <li><strong>Responsible Usage:</strong> When to use AI vs. other tools</li>
                  <li><strong>Privacy Considerations:</strong> Who owns your data and creative work</li>
                </ul>
              </div>
              <a
                href="https://newsletter.pythonessprogrammer.com/p/the-truth-about-ai-what-you-need-to-know-before-getting-creative"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-purple-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold shadow-lg"
              >
                Read Full Newsletter →
              </a>
            </div>
          </section>

          {/* Free AI Learning Resources */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-purple-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-purple-dark text-center">Free AI Learning Resources</h2>
            <p className="mb-4 text-base text-brand-purple-dark text-center">
              AI education should always be free. Here are the tools we recommend for learning and understanding AI:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-brand-purple-dark/10 border border-brand-purple-accent rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-purple-dark mb-2">Perplexity.ai</h3>
                <p className="text-sm text-brand-purple-dark mb-2">Free tier with sources for fact-checking and research</p>
                <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-brand-purple-accent text-sm underline">Try Perplexity →</a>
              </div>
              <div className="bg-brand-green-dark/10 border border-brand-green-accent rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-green-dark mb-2">Claude.ai</h3>
                <p className="text-sm text-brand-green-dark mb-2">Free tier for learning concepts and creative brainstorming</p>
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent text-sm underline">Try Claude →</a>
              </div>
              <div className="bg-brand-purple-dark/10 border border-brand-purple-accent rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-purple-dark mb-2">Local AI Tools</h3>
                <p className="text-sm text-brand-purple-dark mb-2">Ollama and LM Studio for privacy and learning</p>
                <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-brand-purple-accent text-sm underline">Try Ollama →</a>
              </div>
            </div>
            <p className="text-sm text-brand-purple-dark text-center italic">
              Remember: If someone is charging you to understand AI basics, they&apos;re exploiting your confusion. The fundamentals should be accessible to everyone.
            </p>
          </section>

          {/* Newsletter Series Attribution */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-purple-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-purple-dark text-center">From Our August 2025 Newsletter Series</h2>
            <p className="mb-4 text-base text-brand-purple-dark text-center">These resources are adapted from our in-depth AI myth-busting series. Dive deeper into each week&apos;s topic:</p>
            <ul className="list-disc list-inside text-brand-purple-accent mb-4 text-left max-w-xl mx-auto">
              <li><a href="https://newsletter.pythonessprogrammer.com/p/the-wooden-snake-s-ai-wisdom-debunking-myths-in-the-tech-power-government-era" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-green-dark">Week One: The Wooden Snake&apos;s AI Wisdom</a></li>
              <li><a href="https://newsletter.pythonessprogrammer.com/p/ai-bullshit-detection" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-green-dark">Week Two: AI Bullshit Detection</a></li>
              <li><a href="https://newsletter.pythonessprogrammer.com/p/the-truth-about-ai-what-you-need-to-know-before-getting-creative" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-green-dark">Week Three: The Truth About AI</a></li>
            </ul>
            <p className="text-base text-brand-purple-dark text-center">Want more mindful tech insights and AI myth-busting? <a href="https://newsletter.pythonessprogrammer.com/subscribe" target="_blank" rel="noopener noreferrer" className="font-semibold underline text-brand-purple-accent hover:text-brand-green-dark">Subscribe to the Pythoness Perspective newsletter</a> for the latest critical thinking strategies!</p>
          </section>

          {/* Encouragement/Outro */}
          <section className="text-center mt-12">
            <p className="text-lg mb-2 text-white">Ready to think critically about AI?</p>
            <p className="text-base text-white mb-4">Start with the 3-Question Reality Check: <span className="text-brand-purple-light font-semibold">What am I asking AI to do?</span> <span className="text-brand-purple-light font-semibold">What are my expectations?</span> <span className="text-brand-purple-light font-semibold">How will I verify the results?</span></p>
            <p className="text-sm text-brand-purple-light">Inspired by the Pythoness Programmer&apos;s podcast and newsletter. Share this page with a friend who needs AI clarity!</p>
          </section>

          {/* Update Banner */}
          <div className="mt-12 bg-brand-purple-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">✨ Last updated: September 2025 ✨</p>
          </div>
        </div>
      </div>
    </main>
  );
}
