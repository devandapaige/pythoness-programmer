export default function DigitalSpringCleaningPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Title & Tagline */}
          <h1 className="font-display font-normal text-4xl md:text-5xl text-white mb-4 text-center">Digital Spring Cleaning Toolkit</h1>
          <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide text-center mb-6">
            Refresh your digital life with neurodivergent-friendly tools
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed text-center mb-6">
            Download our free worksheet and try the NAA (Notice, Adjust, Acknowledge) micro-reflection, inspired by our April 2025 newsletter series and podcast.
          </p>
          <div className="mt-6 bg-white/90 text-brand-green-dark rounded-lg px-6 py-4 mx-auto max-w-xl shadow-md border-l-4 border-brand-green-accent text-base md:text-lg">
            <span className="font-semibold">Note:</span> This toolkit is adapted from <a href="https://angeladuckworth.com/grit-book/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Angela Duckworth&apos;s research and her book <span className="italic">GRIT</span></a>, which explores how passion and perseverance drive meaningful achievement.
          </div>

          {/* Main Content Block: What&apos;s Inside & Downloads */}
          <div className="mt-12 bg-white/90 rounded-2xl p-8 border border-brand-green-accent shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-brand-green-dark text-center">What&apos;s Inside?</h2>
            <ul className="list-disc list-inside text-base mb-4 text-brand-green-dark">
              <li><strong>Digital Spring Cleaning Worksheet:</strong> A 4-page resource designed to be partially or fully filled out monthly or quarterly—use it to reflect, set goals, and simplify your digital world using the GRIT framework (Passion, Perseverance, Growth, Resilience).</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
              <a
                href="/digital-spring-cleaning/digitalspringcleaningWorksheet.pdf"
                download
                className="bg-brand-green-accent text-white font-bold py-3 px-6 rounded shadow transition hover:bg-opacity-90 shadow-brand-green-accent/20 text-center"
              >
                Download PDF Worksheet
              </a>
              <a
                href="https://www.canva.com/design/DAGle2ScHWc/WxshXfCXMvExF1y-lwsFvA/view?utm_content=DAGle2ScHWc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple-dark text-white font-bold py-3 px-6 rounded shadow transition hover:bg-brand-purple-dark/90 text-center"
              >
                Use Canva Template
              </a>
            </div>
            <p className="mt-2 text-sm text-brand-green-dark text-center">Prefer to work digitally or print it out—your choice! No sign-up required.</p>

            {/* NAA Framework Callout */}
            <div className="mt-10 bg-brand-green-dark border-l-4 border-brand-green-accent rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-white">NAA Framework: Notice, Adjust, Acknowledge</h3>
              <p className="mb-2 text-base text-white">
                The NAA Framework is a two-minute micro-reflection designed to help you quickly regain control and clarity in your digital life:
              </p>
              <ol className="list-decimal list-inside mb-2 text-white">
                <li><span className="text-brand-purple-light font-semibold">Notice:</span> Pause and scan your digital environment. What feels energizing? What feels draining?</li>
                <li><span className="text-brand-purple-light font-semibold">Adjust:</span> Make one small change—close a tab, silence a notification, or move a distracting icon.</li>
                <li><span className="text-brand-purple-light font-semibold">Acknowledge:</span> Give yourself credit for taking intentional action, no matter how small.</li>
              </ol>
              <p className="text-sm text-brand-cream">Try it now for a quick digital reset!</p>
            </div>
          </div>

          {/* Newsletter Series Attribution */}
          <div className="mt-12 bg-white/90 border border-brand-green-accent rounded-2xl p-6 text-center shadow-xl">
            <h4 className="text-lg font-semibold mb-2 text-brand-green-dark">From Our April 2025 Newsletter Series</h4>
            <p className="mb-4 text-base text-brand-green-dark">These resources are adapted from our in-depth Digital Spring Cleaning series. Dive deeper into each week&apos;s topic:</p>
            <ul className="list-disc list-inside text-brand-green-accent mb-4 text-left max-w-xl mx-auto">
              <li><a href="https://pythoness.beehiiv.com/p/monthly-grit-framework-for-your-digital-spring-cleaning" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week One: Monthly GRIT Framework for Your Digital Spring Cleaning</a></li>
              <li><a href="https://pythoness.beehiiv.com/p/digital-spring-cleaning-deepening-our-grit-journey" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week Two: Deepening Our GRIT Journey</a></li>
              <li><a href="https://pythoness.beehiiv.com/p/monthly-grit-reflection-worksheet" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week Three: Monthly GRIT Reflection Worksheet</a></li>
              <li><a href="https://pythoness.beehiiv.com/p/digital-spring-cleaning-a-month-of-grit-and-growth" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Week Four: A Month of GRIT and Growth</a></li>
            </ul>
            <p className="text-base text-brand-green-dark">Want more mindful tech tips and digital well-being tools? <a href="https://pythoness.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="font-semibold underline text-brand-green-accent hover:text-brand-purple-dark">Subscribe to the Pythoness Perspective newsletter</a> for the latest sovereign tech strategies!</p>
          </div>

          {/* Encouragement/Outro */}
          <div className="text-center mt-12">
            <p className="text-lg mb-2 text-white">Ready to take your first step?</p>
            <p className="text-base text-white mb-4">Try the NAA micro-reflection right now: <span className="text-brand-purple-light font-semibold">Notice</span> your digital space, <span className="text-brand-purple-light font-semibold">Adjust</span> one small thing, and <span className="text-brand-purple-light font-semibold">Acknowledge</span> your effort. Small changes add up!</p>
            <p className="text-sm text-brand-green-accent">Inspired by the Pythoness Programmer&apos;s podcast and newsletter. Share this page with a friend who could use a digital refresh!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
