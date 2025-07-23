export default function DigitalSpringCleaningPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section with Value Proposition */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Digital Spring Cleaning Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Refresh your digital life with neurodivergent-friendly tools
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed mb-6">
              Download our free worksheet and try the NAA (Notice, Adjust, Acknowledge) micro-reflection, inspired by our April 2025 newsletter series and podcast.
            </p>
          </section>

          {/* Note Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <p className="text-brand-green-dark text-base md:text-lg">
              <span className="font-semibold">Note:</span> This toolkit is adapted from <a href="https://angeladuckworth.com/grit-book/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Angela Duckworth&apos;s research and her book <span className="italic">GRIT</span></a>, which explores how passion and perseverance drive meaningful achievement.
            </p>
          </section>

          {/* Main Content Block: What&apos;s Inside & Downloads */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-0">What&apos;s Inside?</h2>
            <ul className="list-disc list-inside text-base mb-4 text-brand-green-dark">
              <li><strong>Digital Spring Cleaning Worksheet:</strong> A 4-page resource designed to be partially or fully filled out monthly or quarterly—use it to reflect, set goals, and simplify your digital world using the GRIT framework (Passion, Perseverance, Growth, Resilience).</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
              <a
                href="/digital-spring-cleaning/digitalspringcleaningWorksheet.pdf"
                download
                className="bg-brand-green-accent text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg"
              >
                Download PDF Worksheet
              </a>
              <a
                href="https://www.canva.com/design/DAGle2ScHWc/WxshXfCXMvExF1y-lwsFvA/view?utm_content=DAGle2ScHWc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple-dark text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg"
              >
                Use Canva Template
              </a>
            </div>
            <p className="mt-2 text-sm text-brand-green-dark text-center">Prefer to work digitally or print it out—your choice! No sign-up required.</p>

            {/* NAA Framework Callout */}
            <div className="mt-10 bg-brand-green-dark border-l-4 border-brand-green-accent rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-display mb-4 text-white">NAA Framework: Notice, Adjust, Acknowledge</h3>
              <p className="mb-4 text-base text-white">
                The NAA Framework is a two-minute micro-reflection designed to help you quickly regain control and clarity in your digital life:
              </p>
              <ol className="list-decimal list-inside mb-4 text-white">
                <li><span className="text-brand-purple-light font-semibold">Notice:</span> Pause and scan your digital environment. What feels energizing? What feels draining?</li>
                <li><span className="text-brand-purple-light font-semibold">Adjust:</span> Make one small change—close a tab, silence a notification, or move a distracting icon.</li>
                <li><span className="text-brand-purple-light font-semibold">Acknowledge:</span> Give yourself credit for taking intentional action, no matter how small.</li>
              </ol>
              <p className="text-sm text-brand-cream">Try it now for a quick digital reset!</p>
            </div>
          </section>

          {/* Newsletter Series Attribution */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark text-center">From Our April 2025 Newsletter Series</h2>
            <p className="mb-4 text-base text-brand-green-dark text-center">These resources are adapted from our in-depth Digital Spring Cleaning series. Dive deeper into each week&apos;s topic:</p>
            <ul className="list-disc list-inside text-brand-green-accent mb-4 text-left max-w-xl mx-auto">
              <li><a href="https://newsletter.pythonessprogrammer.com/p/monthly-grit-framework-for-your-digital-spring-cleaning" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week One: Monthly GRIT Framework for Your Digital Spring Cleaning</a></li>
              <li><a href="https://newsletter.pythonessprogrammer.com/p/digital-spring-cleaning-deepening-our-grit-journey" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week Two: Deepening Our GRIT Journey</a></li>
              <li><a href="https://newsletter.pythonessprogrammer.com/p/monthly-grit-reflection-worksheet" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week Three: Monthly GRIT Reflection Worksheet</a></li>
              <li><a href="https://newsletter.pythonessprogrammer.com/p/digital-spring-cleaning-a-month-of-grit-and-growth" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week Four: A Month of GRIT and Growth</a></li>
            </ul>
            <p className="text-base text-brand-green-dark text-center">Want more mindful tech tips and digital well-being tools? <a href="https://newsletter.pythonessprogrammer.com/subscribe" target="_blank" rel="noopener noreferrer" className="font-semibold underline text-brand-green-accent hover:text-brand-purple-dark">Subscribe to the Pythoness Perspective newsletter</a> for the latest sovereign tech strategies!</p>
          </section>

          {/* Encouragement/Outro */}
          <section className="text-center mt-12">
            <p className="text-lg mb-2 text-white">Ready to take your first step?</p>
            <p className="text-base text-white mb-4">Try the NAA micro-reflection right now: <span className="text-brand-purple-light font-semibold">Notice</span> your digital space, <span className="text-brand-purple-light font-semibold">Adjust</span> one small thing, and <span className="text-brand-purple-light font-semibold">Acknowledge</span> your effort. Small changes add up!</p>
            <p className="text-sm text-brand-green-accent">Inspired by the Pythoness Programmer&apos;s podcast and newsletter. Share this page with a friend who could use a digital refresh!</p>
          </section>

          {/* Update Banner */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">✨ Last updated: April 2025 ✨</p>
          </div>
        </div>
      </div>
    </main>
  );
}
