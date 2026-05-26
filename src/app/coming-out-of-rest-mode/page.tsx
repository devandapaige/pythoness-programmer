import Link from 'next/link'

export default function ComingOutOfRestModePage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">

          {/* Hero */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Coming Out of Rest Mode
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Sustainable Tech for the Long Game
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed mb-6">
              Build digital systems that survive real life — not just your most motivated weeks.
            </p>
          </section>

          {/* Who this is for */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">Who this is for</h2>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-0">
              <li>You&apos;ve been in rest mode for weeks (or months) and reopening your systems feels heavy.</li>
              <li>Your task backlog has grown past the point where you know where to start.</li>
              <li>You have notes, tasks, or ideas scattered across too many places to trust any of them.</li>
              <li>You feel resistance to opening apps or systems you paused — not because they&apos;re broken, but because they feel like proof you fell behind.</li>
              <li>You want systems that hold up on low-energy days, not just the days when everything clicks.</li>
              <li>You&apos;re done waiting for the &ldquo;right time&rdquo; to restart and ready to move with what you have.</li>
            </ul>
          </section>

          {/* Event replay */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-0">
              Watch the event replay
            </h2>
            <p className="text-brand-green-dark text-center mb-4">
              Coming Out of Rest Mode: Sustainable Tech for the Long Game — March 29, 2026
            </p>
            <div className="w-full mt-0">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eHrZ_XruMBs"
                title="Coming Out of Rest Mode: Sustainable Tech for the Long Game"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: '12px' }}
              />
            </div>
          </section>

          {/* How to use in 15 minutes */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">How to use this in 15 minutes</h2>
            <ol className="list-decimal list-inside text-brand-green-dark space-y-3 mb-0">
              <li>
                <span className="font-semibold">Skim the key concepts below</span> — 50% framing and
                Keep / Drain / Carry. Pick the one that feels most relevant right now.
              </li>
              <li>
                <span className="font-semibold">Pick one thing to audit.</span> Not your whole stack — one
                system or one area. Ask: is this a KEEP, a DRAIN, or something I&apos;m carrying into active season?
              </li>
              <li>
                <span className="font-semibold">Make the 50% move.</span> Not the perfect move. The move
                you can make today with what you have.
              </li>
              <li>
                <span className="font-semibold">Write down one thing to carry forward.</span> What worked
                during rest mode that you want to keep?
              </li>
            </ol>
          </section>

          {/* Key concepts */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center mt-0">Key concepts from March</h2>

            {/* 50% framing */}
            <div className="mb-8">
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">50% framing</h3>
              <p className="text-brand-green-dark mb-3">
                <strong>50% is a directional signal, not a grade.</strong>
              </p>
              <p className="text-brand-green-dark mb-3">
                The right direction at 50% beats the wrong system at 100%. Sustainable tech is often choosing
                to work with what you have and settling on a compromise you can live with — instead of holding
                out for the full vision you never launch.
              </p>
              <p className="text-brand-green-dark mb-3">
                A real example: migrating to a new deployment platform instead of rebuilding the whole site
                from scratch. Values addressed, rest preserved, actual progress made. That&apos;s the 50% move.
              </p>
              <div className="bg-brand-green-dark/10 border-l-4 border-brand-green-accent rounded p-4">
                <p className="text-brand-green-dark font-semibold mb-0">
                  The question to ask: What compromise would get me moving without burning the whole plan?
                </p>
              </div>
            </div>

            <hr className="border-brand-green-accent/30 my-6" />

            {/* Keep / Drain / Carry */}
            <div>
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">Keep / Drain / Carry audit</h3>
              <p className="text-brand-green-dark mb-4">
                A sustainable stack is not the best stack. It&apos;s the stack you can actually live inside.
              </p>
              <p className="text-brand-green-dark mb-4">Run an honest inventory of your current systems:</p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="px-4 py-3 rounded-tl-lg font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold">Meaning</th>
                      <th className="px-4 py-3 rounded-tr-lg font-semibold">What to ask</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">KEEP</td>
                      <td className="px-4 py-3 text-brand-green-dark">Still working, worth maintaining</td>
                      <td className="px-4 py-3 text-brand-green-dark">Does this support me on a slow week?</td>
                    </tr>
                    <tr className="bg-brand-green-accent/5 border-b border-brand-green-accent/20">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">DRAIN</td>
                      <td className="px-4 py-3 text-brand-green-dark">More friction than value</td>
                      <td className="px-4 py-3 text-brand-green-dark">Am I maintaining this out of obligation?</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-semibold text-brand-green-dark rounded-bl-lg">CARRY</td>
                      <td className="px-4 py-3 text-brand-green-dark">The 50% move that consolidates enough</td>
                      <td className="px-4 py-3 text-brand-green-dark rounded-br-lg">What compromise can I live with right now?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-brand-green-dark mb-4">
                The DRAIN column is not a failure list. It&apos;s information. Troubleshooting will always
                happen — the goal is to know which systems you&apos;re comfortable troubleshooting.
              </p>

              <div className="bg-brand-purple-dark/10 border-l-4 border-brand-purple-dark rounded p-4">
                <p className="text-brand-green-dark font-semibold mb-0">
                  Reflection: What are you maintaining out of obligation, not because it works for your brain
                  anymore? Name your KEEP, your DRAIN, and your CARRY.
                </p>
              </div>
            </div>
          </section>

          {/* Low-capacity fallback */}
          <section className="mb-6 mt-0 bg-brand-green-dark border-l-4 border-brand-green-accent rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-display mb-4 text-white mt-0">Low-capacity fallback</h2>
            <p className="text-white mb-4">
              When energy is genuinely low, skip the audit. Skip the rebuild. Do one of these:
            </p>
            <ul className="list-disc list-inside text-brand-cream space-y-2 mb-4">
              <li>Name your DRAIN. You don&apos;t have to fix it today. Just name it.</li>
              <li>Open one thing. One tab, one file, one task. Done.</li>
              <li>Let 50% be the goal. Returning at 50% is not falling short. It&apos;s the move that keeps you in the game.</li>
            </ul>
            <p className="text-brand-green-accent text-sm">
              <strong>What does not belong on a low-capacity day:</strong> rebuilding your system,
              evaluating every area at once, deciding on new approaches.
            </p>
          </section>

          {/* What to do today */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl text-center">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark mt-0">What to do today</h2>
            <p className="text-brand-green-dark text-sm mb-3 italic">Under 10 minutes</p>
            <p className="text-brand-green-dark text-lg">
              Pick one area of your current stack and label it: <strong>KEEP</strong>, <strong>DRAIN</strong>,
              or <strong>CARRY</strong>. Write it down somewhere you&apos;ll see it.
              That one label is a complete 50% move.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark text-center mt-0">Start here</h2>
            <div className="space-y-4 text-brand-green-dark">
              <p>
                <strong>Subscribe to the Pythoness Perspective</strong> — weekly brain-friendly tech for
                neurodivergent creatives and small businesses:{' '}
                <Link
                  href="/newsletter/subscribe"
                  className="underline hover:text-brand-purple-dark"
                >
                  Subscribe to Pythoness Perspective
                </Link>
              </p>
              <p>
                <strong>Watch the event replay</strong> — Coming Out of Rest Mode: Sustainable Tech for the
                Long Game:{' '}
                <a
                  href="https://youtube.com/live/eHrZ_XruMBs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-purple-dark"
                >
                  Watch on YouTube
                </a>
              </p>
              <p>
                <strong>Work with me</strong> — coaching, systems, and strategy for building tech that works
                with your brain:{' '}
                <a
                  href="https://pythonessprogrammer.com/services"
                  className="underline hover:text-brand-purple-dark"
                >
                  pythonessprogrammer.com/services
                </a>
              </p>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status">
            <p className="text-sm">March 2026 — Pythoness Programmer</p>
          </div>

        </div>
      </div>
    </main>
  );
}
