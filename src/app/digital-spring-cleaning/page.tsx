import Link from 'next/link'

export default function DigitalSpringCleaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="site-gutter max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">

          {/* Hero */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Digital Spring Cleaning Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Systems that work with your brain, your energy, and your real life
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed mb-6">
              Reflection sessions, not rescue. A four-part arc for cleaning the layers that actually drain you.
            </p>
          </section>

          {/* Who this is for */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">Who this is for</h2>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-0">
              <li>You&apos;ve cleaned your desktop before and it&apos;s messy again three weeks later.</li>
              <li>Your system works on good days, but collapses when life gets loud.</li>
              <li>You feel behind on notifications, files, or tasks — and you don&apos;t know where to start without burning everything down.</li>
              <li>You want workflows that survive your hardest weeks, not just your most motivated ones.</li>
              <li>You&apos;re done with productivity guilt. You want durable, not perfect.</li>
            </ul>
          </section>

          {/* April 4-part arc */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-2 text-brand-green-dark text-center mt-0">The April 2026 arc</h2>
            <p className="text-brand-green-dark text-center mb-6">
              Four layers. Four weeks. Each one builds on the last.
            </p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-brand-green-dark mb-1">Audit your top 3 energy leaks</p>
                  <p className="text-brand-green-dark text-sm">
                    Before fixing anything, map where your workflow leaks energy. Rate your top recurring workflows on friction.
                    If a system fails the Grit Framework on 3 out of 4 questions, that&apos;s a design problem — not a you problem.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-brand-green-dark mb-1">Now / Soon / Reference file structure</p>
                  <p className="text-brand-green-dark text-sm">
                    Three top-level folders. One naming rule. Your file system should reduce decisions, not create them.
                    The naming rule: <code className="bg-brand-green-accent/10 px-1 rounded">YYYY-MM-DD-topic-short-context</code>.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-brand-green-dark mb-1">Attention and notification hygiene</p>
                  <p className="text-brand-green-dark text-sm">
                    Your distraction is understandable — your tools are designed to compete for your nervous system.
                    This week: triage channels by urgency, replace &ldquo;always on&rdquo; with response windows, and turn off badge anxiety.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <p className="font-semibold text-brand-green-dark mb-1">Maintenance rhythms — weekly, monthly, fail-soft</p>
                  <p className="text-brand-green-dark text-sm">
                    Systems fail because they were built for perfect weeks. Build three layers: a 20-minute weekly reset,
                    a 60-minute monthly reset, and a fail-soft reset for the days when showing up at all is enough.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's inside */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-0">What&apos;s inside</h2>

            {/* Worksheet */}
            <div className="mb-8">
              <h3 className="text-xl font-display mb-2 text-brand-green-dark">2026 Grit Workflow Worksheet — Fire Horse Edition</h3>
              <p className="text-brand-green-dark mb-4">
                A monthly or quarterly practice for building durable digital habits using the Grit Framework.
                Use it to audit your workflows, track friction, and build a maintenance plan that holds in real life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center my-6">
                <a
                  href="/digital-spring-cleaning/grit-workflow-worksheet-2026-fire-horse-edition.pdf"
                  download
                  className="bg-brand-green-accent text-black px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg text-center"
                >
                  Download 2026 Workbook (PDF)
                </a>
              </div>
              <p className="text-sm text-brand-green-dark text-center">No sign-up required. Print it or fill it digitally.</p>
            </div>

            {/* NAA */}
            <div className="mt-6 bg-brand-green-dark border-l-4 border-brand-green-accent rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-display mb-3 text-white">NAA reset — 2 minutes, anytime</h3>
              <p className="text-white mb-4">
                When your day gets fragmented or a notification spiral pulls you off track:
              </p>
              <ol className="list-decimal list-inside text-brand-cream space-y-2 mb-4">
                <li><span className="text-brand-purple-light font-semibold">Notice:</span> Name what&apos;s happening. &ldquo;I&apos;ve been ping-ponging for 20 minutes.&rdquo;</li>
                <li><span className="text-brand-purple-light font-semibold">Adjust:</span> Make one change. Close an inbox. Silence one app. Set a 25-minute focus timer.</li>
                <li><span className="text-brand-purple-light font-semibold">Acknowledge:</span> &ldquo;I just reclaimed my attention.&rdquo; That&apos;s real.</li>
              </ol>
              <p className="text-brand-cream text-sm">Two minutes. Compounding impact.</p>
              <div className="mt-4">
                <a
                  href="/digital-spring-cleaning/naa-in-the-moment-reference.pdf"
                  download
                  className="inline-block bg-brand-green-accent text-black px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold"
                >
                  Print the NAA in-the-moment reference card
                </a>
              </div>
            </div>

            {/* Event replay */}
            <div className="mt-6 rounded-lg border border-brand-green-accent/40 p-6">
              <h3 className="text-xl font-display mb-2 text-brand-green-dark">Event replay</h3>
              <p className="text-brand-green-dark mb-2">
                <strong>Spring Cleaning Your Digital Life</strong> — Sunday, April 26, 2026
              </p>
              <p className="text-brand-green-dark text-sm mb-4">
                A live walk-through of the Grit Framework in practice, the NAA reset, and building a maintenance plan
                that doesn&apos;t collapse at the first unexpected life event.
              </p>
              <div className="w-full">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/54NqQqnlmzI"
                  title="Spring Cleaning Your Digital Life — April 26, 2026"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ borderRadius: '12px' }}
                />
              </div>
              <p className="text-brand-green-dark text-sm mt-4">
                Want to follow along with the slides?{' '}
                <a
                  href="https://canva.link/fkioq84i0qwjd28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark font-semibold"
                >
                  View the live presentation on Canva
                </a>
                .
              </p>
            </div>
          </section>

          {/* Key concepts */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center mt-0">Key concepts</h2>

            {/* Grit Framework */}
            <div className="mb-8">
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">Grit Framework</h3>
              <p className="text-brand-green-dark mb-4">
                A four-part workflow check-in adapted from Angela Duckworth&apos;s research on grit. Use it to evaluate
                whether any system — a folder structure, an inbox flow, a tool — is built to last.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-green-dark">
                      <th className="px-4 py-3 rounded-tl-lg font-semibold text-white">Check</th>
                      <th className="px-4 py-3 rounded-tr-lg font-semibold text-white">The question</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">Passion</td>
                      <td className="px-4 py-3 text-brand-green-dark">Does this system support what matters most to me?</td>
                    </tr>
                    <tr className="bg-brand-green-accent/5 border-b border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">Perseverance</td>
                      <td className="px-4 py-3 text-brand-green-dark">Can I keep using it on a low-energy day?</td>
                    </tr>
                    <tr className="bg-white border-b border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">Growth</td>
                      <td className="px-4 py-3 text-brand-green-dark">Does it improve as I use and refine it?</td>
                    </tr>
                    <tr className="bg-brand-green-accent/5">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark rounded-bl-lg">Resilience</td>
                      <td className="px-4 py-3 text-brand-green-dark rounded-br-lg">Can it recover after a hard week or interruption?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-brand-green-dark text-sm">
                If a workflow fails 3 out of 4 checks, that&apos;s a design problem — not a you problem.
              </p>
            </div>

            <hr className="border-brand-green-accent/30 my-6" />

            {/* friction-maxxing */}
            <div className="mb-8">
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">friction-maxxing</h3>
              <p className="text-brand-green-dark mb-3">
                Intentional inconvenience that protects your attention. The term was coined by{' '}
                <a
                  href="https://www.thecut.com/article/brooding-friction-maxxing-new-years-2026-resolution.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark"
                >
                  Kathryn Jezer-Morton writing for The Cut
                </a>
                . In a world optimized for instant escape and one-tap everything, deliberately adding small
                pauses lets you choose with intention instead of reacting on autopilot.
              </p>
              <p className="text-brand-green-dark text-sm">
                Examples: moving social media off your home screen, removing email from your dock, setting response
                windows instead of always-on checking, keeping a &ldquo;3 breaths before replying&rdquo; practice.
              </p>
            </div>

            <hr className="border-brand-green-accent/30 my-6" />

            {/* fail-soft */}
            <div>
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">fail-soft reset</h3>
              <p className="text-brand-green-dark mb-3">
                From engineering: a system that keeps operating in reduced mode when conditions are bad. For your
                workflows, it means having a minimum viable version of maintenance for low-capacity days — so the
                system stays alive instead of collapsing.
              </p>
              <div className="bg-brand-green-dark/10 border-l-4 border-brand-green-accent rounded p-4">
                <p className="text-brand-green-dark font-semibold mb-2">On hard days, do only this:</p>
                <ol className="list-decimal list-inside text-brand-green-dark space-y-1 text-sm">
                  <li>Run NAA once.</li>
                  <li>Clear one friction hotspot — desktop, inbox, or tab pile.</li>
                  <li>Write one line: &ldquo;What is this struggle trying to teach me right now?&rdquo;</li>
                  <li>Choose one next smallest move.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* What to do today */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark mt-0">What to do today</h2>
            <p className="text-brand-green-dark text-sm mb-4 italic">Pick one. Under 10 minutes.</p>
            <ul className="list-disc list-inside text-brand-green-dark space-y-3">
              <li>Open a note and name it &ldquo;Friction Log — [Month] [Year].&rdquo; Write down one friction from today.</li>
              <li>Create three top-level folders: <strong>Now</strong>, <strong>Soon</strong>, <strong>Reference</strong>. Move your five most active files into <strong>Now</strong>.</li>
              <li>Do a 24-hour notification reset: keep only human-critical alerts, silence everything else.</li>
              <li>Set 2–3 inbox response windows for tomorrow. Put them on your calendar.</li>
              <li>Build your fail-soft reset: write 3 steps you can always do on hard days. Add it as a recurring reminder.</li>
            </ul>
          </section>

          {/* Duckworth note */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <p className="text-brand-green-dark text-base md:text-lg mb-0">
              <span className="font-semibold">Note:</span> The Grit Framework is adapted from{' '}
              <a
                href="https://angeladuckworth.com/grit-book/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-purple-dark"
              >
                Angela Duckworth&apos;s research and her book <em>Grit</em>
              </a>
              , which explores how passion and perseverance drive meaningful achievement over time.
              This adaptation is not an official, affiliated model.
            </p>
          </section>

          {/* CTA / Newsletter series */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark text-center mt-0">From the April 2026 newsletter series</h2>
            <p className="mb-4 text-base text-brand-green-dark text-center">
              Each issue goes deeper on one layer of the arc. Read them in order or start where you are:
            </p>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-6 text-left max-w-xl mx-auto">
              <li>
                <a
                  href="/newsletter/april-audit-your-top-3-energy-leaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark"
                >
                  Week 1: Audit your top 3 energy leaks
                </a>
              </li>
              <li>
                <a
                  href="/newsletter/now-soon-reference-spring-cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark"
                >
                  Week 2: Now / Soon / Reference — spring cleaning for your brain
                </a>
              </li>
              <li>
                <a
                  href="/newsletter/attention-and-notification-hygiene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark"
                >
                  Week 3: Attention and notification hygiene
                </a>
              </li>
              <li>
                <a
                  href="/newsletter/maintenance-beats-motivation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark"
                >
                  Week 4: Maintenance beats motivation
                </a>
              </li>
            </ul>
            <p className="text-base text-brand-green-dark text-center">
              Want more brain-friendly tech?{' '}
              <Link
                href="/newsletter/subscribe"
                className="font-semibold underline hover:text-brand-purple-dark"
              >
                Subscribe to the Pythoness Perspective
              </Link>{' '}
              — free, every week.
            </p>
            <p className="text-base text-brand-green-dark text-center mt-3">
              Ready to build this with support?{' '}
              <a
                href="https://pythonessprogrammer.com/services"
                className="font-semibold underline hover:text-brand-purple-dark"
              >
                Work with me
              </a>
              .
            </p>
          </section>

          {/* Footer */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">Last updated: April 2026 — Pythoness Programmer</p>
          </div>

          {/* Archived resource */}
          <p className="text-center text-white/40 text-xs mt-4">
            Looking for the original worksheet?{' '}
            <a
              href="/digital-spring-cleaning/digitalspringcleaningWorksheet.pdf"
              download
              className="underline hover:text-white/70 transition-colors"
            >
              Download the 2025 Digital Spring Cleaning Worksheet (PDF)
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}
