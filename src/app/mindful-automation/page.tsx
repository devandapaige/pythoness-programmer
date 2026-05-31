import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

interface FrameworkPillar {
  letter: string;
  title: string;
  question: string;
  summary: string;
  border: string;
  bg: string;
  iconBg: string;
  iconBorder: string;
}

export const metadata: Metadata = {
  title: 'Mindful Automation: Y.O.U.R. Framework | Pythoness Programmer',
  description: 'Build automation that works for your brain and reaches the people on the other end. The Y.O.U.R. Framework for neurodivergent creatives and solo business owners.',
  openGraph: {
    title: 'Mindful Automation: Y.O.U.R. Framework',
    description: 'Reflection sessions, not rescue. Brain-friendly automation with Reach — systems that serve you and your clients.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/mindful-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindful Automation: Y.O.U.R. Framework',
    description: 'Reflection sessions, not rescue. Brain-friendly automation with Reach — systems that serve you and your clients.',
  },
}

const frameworkPillars: FrameworkPillar[] = [
  {
    letter: 'Y',
    title: 'Your Unique Brain',
    question: 'What do you repeatedly do manually that does not require your actual thinking?',
    summary: 'Start with one friction point — the task that costs energy for no reason. Not what you should automate. What you actually, repeatedly do.',
    border: 'border-[#ffd52c]',
    bg: 'bg-[#ffde59]/30',
    iconBg: '#ffde59',
    iconBorder: '#ffd52c',
  },
  {
    letter: 'O',
    title: 'Observe & Optimize',
    question: 'Where do you lose energy — and where do clients fall through gaps your system does not notice?',
    summary: 'Observation before optimization. Look at your workflow and your clients\' experience. You cannot fix what you have not actually looked at.',
    border: 'border-[#ff914d]',
    bg: 'bg-[#ffbd59]/30',
    iconBg: '#ffbd59',
    iconBorder: '#ff914d',
  },
  {
    letter: 'U',
    title: 'Uncomplicate & Understand',
    question: 'What is the one automation you could add this week that solves a real pain at its root?',
    summary: 'Not the whole funnel. One root-cause fix. Complicated is easy to build. Simple is hard to design.',
    border: 'border-[#0cc0df]',
    bg: 'bg-[#5ce1e6]/30',
    iconBg: '#5ce1e6',
    iconBorder: '#0cc0df',
  },
  {
    letter: 'R',
    title: 'Reach',
    question: 'Who is on the other end of your systems, and what do they need that they should not have to ask for?',
    summary: 'Design as if your client has their busiest week every single week. Because sometimes they do.',
    border: 'border-[#9333ea]',
    bg: 'bg-[#c084fc]/30',
    iconBg: '#c084fc',
    iconBorder: '#9333ea',
  },
];

const mayaThread = [
  {
    week: 'Week 1',
    moment: 'Registers for an event, gets a bare confirmation, files the email, and moves on.',
    gap: 'System assumes she will follow up — no calendar invite, no sense the host knows she is coming.',
  },
  {
    week: 'Week 2',
    moment: 'Gets a reminder email that lands at the wrong time for her rhythms.',
    gap: 'Your timing choices were platform defaults, not a decision made for her nervous system.',
  },
  {
    week: 'Week 3',
    moment: 'Attends halfway, gets interrupted, closes the tab. Replay link is broken.',
    gap: 'Dashboard says success. Maya experiences abandonment — and nobody is notified.',
  },
  {
    week: 'Week 4',
    moment: 'Receives a short reminder: what the event is, calendar link, and an open reply line.',
    gap: 'Fixed — the system was designed for her, not for the admin dashboard.',
  },
];

export default function MindfulAutomation2026Page(): ReactNode {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="site-gutter max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">

          {/* Hero */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Mindful Automation: Systems That Work For Y.O.U.R. Brain
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Brain-friendly automation that reaches the people on the other end
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed mb-6">
              Reflection sessions, not rescue. A four-week arc for building systems that work with your brain — and serve your clients without making them do your admin.
            </p>
            <p className="text-sm text-brand-cream/90 mb-0">
              New here? Start with the{' '}
              <Link href="/mindful-automation/2025" className="underline font-semibold hover:text-white">
                2025 Y.O.U. edition
              </Link>
              .
            </p>
          </section>

          {/* Who this is for */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">Who this is for</h2>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-0">
              <li>Neurodivergent creatives who keep hitting the same workflow walls.</li>
              <li>Solo business owners tired of automations that work on good days and collapse when life gets loud.</li>
              <li>Hosts who run events or newsletters and need systems that serve people on the other end — not just your dashboard.</li>
              <li>Anyone already talking to AI in browser tabs who wants those conversations tied to where their work actually lives.</li>
              <li>You want durable automation, not another productivity template that assumes a neurotypical brain.</li>
            </ul>
          </section>

          {/* Evolution */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark mt-0">How Y.O.U. became Y.O.U.R.</h2>
            <p className="text-brand-green-dark mb-3">
              The original Y.O.U. Framework (2025) asked three questions: Does this fit your brain? Have you observed where it leaks? Is the simple version actually working?
            </p>
            <p className="text-brand-green-dark mb-3">
              May 2026 adds <strong>R — Reach</strong>: every automation has someone on the other end. The arc also shifts from generic tool spotlights to <strong>O.U.R. Context</strong> — organized, usable, recurring files on disk that outlive any single platform — and follows Maya, a composite y.o.u.r. client, through four weeks of system gaps and fixes.
            </p>
            <p className="text-brand-green-dark text-sm mb-0">
              Want the original three-letter version?{' '}
              <Link href="/mindful-automation/2025" className="underline hover:text-brand-purple-dark font-semibold">
                Browse the 2025 Y.O.U. edition
              </Link>
              {' '}including the legacy{' '}
              <a href="/mindful-automation/youframework.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark font-semibold">
                Y.O.U. Framework PDF
              </a>
              .
            </p>
          </section>

          {/* May 2026 arc */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-2 text-brand-green-dark text-center mt-0">The May 2026 arc</h2>
            <p className="text-brand-green-dark text-center mb-6">
              Four weeks. Each one builds on the last.
            </p>
            <div className="space-y-6">
              {/* Week 1 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <div className="flex gap-4 items-start mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold text-brand-green-dark mb-1">Y.O.U.R. intro + open your workbench</p>
                    <p className="text-brand-green-dark text-sm mb-0">
                      Meet the four letters, introduce Maya, and give your AI a home in an IDE folder.
                    </p>
                  </div>
                </div>
                <div className="w-full mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/fYZMZS0jw7c"
                    title="Your First 30 Minutes in VSCode (No Coding Required)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ borderRadius: '12px' }}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/newsletter/give-your-ai-a-home" className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    Read Newsletter
                  </Link>
                </div>
              </div>

              {/* Week 2 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <div className="flex gap-4 items-start mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold text-brand-green-dark mb-1">Energy-aware automation + rhythms file</p>
                    <p className="text-brand-green-dark text-sm mb-0">
                      Two energy maps — yours and your clients&apos;. Create <code className="bg-brand-green-accent/10 px-1 rounded text-xs">my-rhythms.md</code> on disk.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/newsletter/your-energy-patterns-matter-so-do-theirs" className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    Read Newsletter
                  </Link>
                  <Link href="/blog/your-ide-is-workbench" className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    Lab Notes: Your IDE Is a Workbench
                  </Link>
                </div>
              </div>

              {/* Week 3 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <div className="flex gap-4 items-start mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold text-brand-green-dark mb-1">Error-proofing + automation is hospitality</p>
                    <p className="text-brand-green-dark text-sm mb-0">
                      When your automation breaks, who carries the cost? Build a folder backup plan that outlives any single tool.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/newsletter/what-happens-when-your-automation-breaks" className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    Read Newsletter
                  </Link>
                  <a href="/mindful-automation/client-journey-map-template.pdf" download className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                    Download Client Journey Map (PDF)
                  </a>
                  <a href="/mindful-automation/error-proofing-worksheet.pdf" download className="inline-block border border-brand-green-dark text-brand-green-dark px-4 py-2 rounded-md hover:bg-brand-green-dark/10 transition-colors text-sm">
                    Error-Proofing Worksheet (PDF)
                  </a>
                </div>
              </div>

              {/* Week 4 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <div className="flex gap-4 items-start mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <p className="font-semibold text-brand-green-dark mb-1">Playbook + rules, Agents, and GitHub capstone</p>
                    <p className="text-brand-green-dark text-sm mb-0">
                      One document, five questions. The automation playbook is the system — not the tool.
                    </p>
                  </div>
                </div>
                <div className="w-full mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/hRqye_TTbpI"
                    title="Put Your IDE Workbench on GitHub — Mindful Automation Capstone"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ borderRadius: '12px' }}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/newsletter/build-your-automation-playbook" className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    Read Newsletter
                  </Link>
                  <Link href="/blog/from-files-to-playbook" className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    From Files to Playbook
                  </Link>
                  <Link href="/blog/github-basics-profile-readme" className="inline-block bg-brand-green-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    GitHub Basics
                  </Link>
                  <a href="https://github.com/devandapaige/ide-workbench-starter" target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-green-dark text-brand-green-dark px-4 py-2 rounded-md hover:bg-brand-green-dark/10 transition-colors text-sm">
                    Starter Repo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Y.O.U.R. Framework */}
          <section id="your-framework" className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-4xl font-display mb-2 text-brand-green-dark text-center tracking-tight mt-0">The Y.O.U.R. Framework</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center max-w-2xl mx-auto">
              Four letters. One month. Each letter gets a question — not a lecture.
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-0">
              {frameworkPillars.map((pillar) => (
                <div
                  key={pillar.letter}
                  className={`relative rounded-2xl shadow-lg p-5 md:p-6 border-t-8 ${pillar.border} ${pillar.bg}`}
                >
                  <div className="mb-3 flex justify-center">
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: pillar.iconBg,
                      border: `3px solid ${pillar.iconBorder}`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                      fontWeight: 700,
                      fontSize: 24,
                      color: '#234236',
                      letterSpacing: '0.05em',
                      fontFamily: 'Norwester, Arial, sans-serif',
                    }}>
                      {pillar.letter}
                    </span>
                  </div>
                  <h3 className="text-xl font-display mb-2 text-brand-green-dark text-center">{pillar.title}</h3>
                  <p className="text-brand-green-dark text-sm italic text-center mb-2">{pillar.question}</p>
                  <p className="text-brand-green-dark text-sm text-center mb-0">{pillar.summary}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <h3 className="text-xl font-display mb-3 text-brand-green-dark text-center">Y.O.U.R. check-in</h3>
              <table className="w-full text-sm text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-brand-green-dark">
                    <th className="px-4 py-3 rounded-tl-lg font-semibold text-white">Letter</th>
                    <th className="px-4 py-3 rounded-tr-lg font-semibold text-white">Ask yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-brand-green-accent/20">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">Y</td>
                    <td className="px-4 py-3 text-brand-green-dark">Does your automation reflect how you actually work, or how you thought you should work when you set it up?</td>
                  </tr>
                  <tr className="bg-brand-green-accent/5 border-b border-brand-green-accent/20">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">O</td>
                    <td className="px-4 py-3 text-brand-green-dark">Where did you observe a client experience gap this month? What will you change based on what you saw?</td>
                  </tr>
                  <tr className="bg-white border-b border-brand-green-accent/20">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">U</td>
                    <td className="px-4 py-3 text-brand-green-dark">What is the simplest version of your most complex automation? Have you confirmed it works?</td>
                  </tr>
                  <tr className="bg-brand-green-accent/5">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark rounded-bl-lg">R</td>
                    <td className="px-4 py-3 text-brand-green-dark rounded-br-lg">Is your client journey designed for your client&apos;s brain, or for your admin dashboard?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* O.U.R. Context */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark text-center mt-0">O.U.R. Context</h2>
            <p className="text-brand-green-dark text-center mb-6 max-w-2xl mx-auto">
              Not to be confused with Y.O.U.R. — O.U.R. Context is the file pattern for giving AI assistants, collaborators, and your future self a home on disk.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-brand-green-dark">
                    <th className="px-4 py-3 rounded-tl-lg font-semibold text-white">Letter</th>
                    <th className="px-4 py-3 font-semibold text-white">Means</th>
                    <th className="px-4 py-3 rounded-tr-lg font-semibold text-white">In practice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-brand-green-accent/20">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">O — Organized</td>
                    <td className="px-4 py-3 text-brand-green-dark">Patterns live somewhere you can point to</td>
                    <td className="px-4 py-3 text-brand-green-dark">Files in a folder with timestamps, search, and naming you can find again</td>
                  </tr>
                  <tr className="bg-brand-green-accent/5 border-b border-brand-green-accent/20">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">U — Usable</td>
                    <td className="px-4 py-3 text-brand-green-dark">Portable, yours, readable without logging into five dashboards</td>
                    <td className="px-4 py-3 text-brand-green-dark">Plain-text backup plans and rhythms files on your machine</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-brand-green-dark rounded-bl-lg">R — Recurring</td>
                    <td className="px-4 py-3 text-brand-green-dark">Context you maintain once and reuse</td>
                    <td className="px-4 py-3 text-brand-green-dark rounded-br-lg"><code className="bg-brand-green-accent/10 px-1 rounded text-xs">AGENTS.md</code>, rules, and context files you hand to any AI without re-explaining</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Maya thread */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark mt-0">The Maya thread</h2>
            <p className="text-brand-green-dark text-sm mb-4">
              Maya is a composite y.o.u.r. client — not flaky, just human. Her four-week arc shows where systems assume too much from the people they serve.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-brand-purple-dark">
                    <th className="px-4 py-3 rounded-tl-lg font-semibold text-white">Week</th>
                    <th className="px-4 py-3 font-semibold text-white">What happens</th>
                    <th className="px-4 py-3 rounded-tr-lg font-semibold text-white">System gap</th>
                  </tr>
                </thead>
                <tbody>
                  {mayaThread.map((row, i) => (
                    <tr key={row.week} className={i % 2 === 0 ? 'bg-white border-b border-brand-green-accent/20' : 'bg-brand-green-accent/5 border-b border-brand-green-accent/20'}>
                      <td className="px-4 py-3 font-semibold text-brand-green-dark whitespace-nowrap">{row.week}</td>
                      <td className="px-4 py-3 text-brand-green-dark">{row.moment}</td>
                      <td className="px-4 py-3 text-brand-green-dark">{row.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What's inside */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-0">What&apos;s inside</h2>

            <div className="mb-8">
              <h3 className="text-xl font-display mb-2 text-brand-green-dark">Worksheets</h3>
              <p className="text-brand-green-dark mb-4">
                Print them or fill them digitally. Prefer editing in your IDE workbench? Markdown copies are linked below each download.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center my-4">
                <a href="/mindful-automation/your-self-audit-worksheet.pdf" download className="bg-brand-green-accent text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-center text-sm">
                  Y.O.U.R. Self-Audit (PDF)
                </a>
                <a href="/mindful-automation/client-journey-map-template.pdf" download className="bg-brand-green-accent text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-center text-sm">
                  Client Journey Map (PDF)
                </a>
                <a href="/mindful-automation/our-context-starter.pdf" download className="bg-brand-green-accent text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-center text-sm">
                  O.U.R. Context Starter (PDF)
                </a>
              </div>
              <p className="text-sm text-brand-green-dark text-center mb-0">
                No sign-up required.{' '}
                <a href="/mindful-automation/your-self-audit-worksheet.md" download className="underline hover:text-brand-purple-dark">Self-audit (.md)</a>
                {' · '}
                <a href="/mindful-automation/client-journey-map-template.md" download className="underline hover:text-brand-purple-dark">Journey map (.md)</a>
                {' · '}
                <a href="/mindful-automation/our-context-starter.md" download className="underline hover:text-brand-purple-dark">Context starter (.md)</a>
              </p>
            </div>

            <hr className="border-brand-green-accent/30 my-6" />

            <div>
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">IDE workbench deep dives</h3>
              <p className="text-brand-green-dark mb-4">
                Step-by-step Lab Notes for opening your folder, grounding AI chat, and putting your workbench on GitHub.
              </p>
              <ul className="list-disc list-inside text-brand-green-dark space-y-2">
                <li>
                  <Link href="/blog/your-ide-is-workbench" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                    Your IDE Is a Workbench
                  </Link>
                  {' '}— layout, rhythms file, first grounded chat
                </li>
                <li>
                  <Link href="/blog/from-files-to-playbook" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                    From Files to Playbook
                  </Link>
                  {' '}— rules, <code className="bg-brand-green-accent/10 px-1 rounded text-xs">AGENTS.md</code>, and the automation playbook
                </li>
                <li>
                  <Link href="/blog/github-basics-profile-readme" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                    GitHub Basics (Profile README)
                  </Link>
                  {' '}— clone, commit, and sync your workbench
                </li>
                <li>
                  <a href="https://github.com/devandapaige/ide-workbench-starter" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                    ide-workbench-starter
                  </a>
                  {' '}— starter repository to fork and clone
                </li>
              </ul>
            </div>
          </section>

          {/* Key concepts */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center mt-0">Key concepts</h2>

            <div className="mb-8">
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">Automation is hospitality</h3>
              <p className="text-brand-green-dark mb-0">
                When the tech talks for you, your client cannot see your dashboard. They only see what landed in their inbox.
                A backup plan you can read without logging into five dashboards is how you host people well when something breaks.
              </p>
            </div>

            <hr className="border-brand-green-accent/30 my-6" />

            <div className="mb-8">
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">Inherited schedules</h3>
              <p className="text-brand-green-dark mb-0">
                Platform defaults, launch playbooks, and &ldquo;best time to send Tuesday 10am&rdquo; are borrowed rhythms.
                When timing goes wrong — for you or for the people you reach — ask: <em>What is this struggle trying to teach you?</em>
              </p>
            </div>

            <hr className="border-brand-green-accent/30 my-6" />

            <div>
              <h3 className="text-xl font-display mb-3 text-brand-green-dark">Fail-soft maintenance</h3>
              <p className="text-brand-green-dark mb-3">
                Systems fail because they were built for perfect weeks. On hard days, do only this:
              </p>
              <div className="bg-brand-green-dark/10 border-l-4 border-brand-green-accent rounded p-4">
                <ol className="list-decimal list-inside text-brand-green-dark space-y-1 text-sm mb-0">
                  <li>Open your automation playbook. Read the backup plan for one automation.</li>
                  <li>Run the Y.O.U.R. check-in on one workflow — pick one letter.</li>
                  <li>Write one line: what friction showed up today?</li>
                  <li>Choose one next smallest move.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* What to do today */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-3 text-brand-green-dark mt-0">What to do today</h2>
            <p className="text-brand-green-dark text-sm mb-4 italic">Pick one. Under 10 minutes.</p>
            <ul className="list-disc list-inside text-brand-green-dark space-y-3 mb-0">
              <li>Run the Y.O.U.R. check-in on one workflow. Pick the letter that stings most.</li>
              <li>Open the last sequence you ran. Note when reminder emails fired — decision or default?</li>
              <li>Create <code className="bg-brand-green-accent/10 px-1 rounded text-xs">my-rhythms.md</code> with one sentence about your outbound cadence.</li>
              <li>Start <code className="bg-brand-green-accent/10 px-1 rounded text-xs">automation-playbook.md</code> — first line: <em>Last updated: [today&apos;s date].</em></li>
              <li>Watch Week 1 on YouTube if you have not opened an IDE folder yet.</li>
            </ul>
          </section>

          {/* CTA / Newsletter series */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-display mb-4 text-brand-green-dark text-center mt-0">From the May 2026 newsletter series</h2>
            <p className="mb-4 text-base text-brand-green-dark text-center">
              Each issue goes deeper on one week of the arc. Read them in order or start where you are:
            </p>
            <ul className="list-disc list-inside text-brand-green-dark space-y-2 mb-6 text-left max-w-xl mx-auto">
              <li>
                <Link href="/newsletter/give-your-ai-a-home" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                  Week 1: Give your AI a home — the Y.O.U.R. Framework
                </Link>
              </li>
              <li>
                <Link href="/newsletter/your-energy-patterns-matter-so-do-theirs" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                  Week 2: Your energy patterns matter. So do theirs.
                </Link>
              </li>
              <li>
                <Link href="/newsletter/what-happens-when-your-automation-breaks" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                  Week 3: What happens when your automation breaks
                </Link>
              </li>
              <li>
                <Link href="/newsletter/build-your-automation-playbook" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">
                  Week 4: Build your automation playbook
                </Link>
              </li>
            </ul>
            <p className="text-base text-brand-green-dark text-center">
              Want more brain-friendly tech?{' '}
              <Link href="/newsletter/subscribe" className="font-semibold underline hover:text-brand-purple-dark">
                Subscribe to the Pythoness Perspective
              </Link>
              {' '}— free, every week.
            </p>
            <p className="text-base text-brand-green-dark text-center mt-3">
              Ready to build this with support?{' '}
              <a href="https://pythonessprogrammer.com/services" className="font-semibold underline hover:text-brand-purple-dark">
                Work with me
              </a>
              .
            </p>
          </section>

          <section className="mt-12">
            <NewsletterSection bgColor="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark" />
          </section>

          <section className="mt-12 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-white hover:text-brand-cream transition-colors"
              aria-label="Back to all resources"
            >
              <span className="mr-2">←</span>
              Back to All Resources
            </Link>
          </section>

          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">
              Last updated: May 2026 ·{' '}
              <Link href="/mindful-automation/2025" className="underline hover:text-white">
                2025 Y.O.U. edition
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
