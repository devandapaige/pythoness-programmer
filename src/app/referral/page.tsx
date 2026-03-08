import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Stack & Referral Links | Pythoness Programmer',
  description: 'Tools I use and recommend: scheduling, email, voice-to-text, browser, design, notes, IDE, passwords, tasks, messaging, deployment, newsletter, and more.',
}

type Tool = {
  name: string
  tagline: string
  description: string
  referralUrl?: string
  websiteUrl?: string
}

const tools: Tool[] = [
  {
    name: 'Cal.com',
    tagline: 'Scheduling',
    description: 'What I use for Software Psychic sessions and async bookings. Open-source, privacy-friendly scheduling that just works.',
    referralUrl: 'https://refer.cal.com/pythoness',
  },
  {
    name: 'Cora',
    tagline: 'Email',
    description: 'What I use to keep my email organized. AI that screens your inbox, drafts in your voice, and briefs the rest so you get to inbox zero without the overwhelm.',
    referralUrl: 'https://cora.computer/w?ref=tTKuEOSD',
  },
  {
    name: 'Monologue',
    tagline: 'Voice to text',
    description: 'My favorite voice-to-text tool for Mac. Effortless dictation that learns your style and works in every app—huge for reducing typing when my hands or focus are tired.',
    referralUrl: 'https://monologue.to/?ref=YVCYPRP',
  },
  {
    name: 'Fable',
    tagline: 'Books & TV',
    description: "Social app for tracking what you read and watch. I use it to share what I'm into and find recommendations.",
    referralUrl: 'https://fable.co/invite/?referralID=YK5IPnrfEW',
  },
  {
    name: 'DuckDuckGo Browser',
    tagline: 'VPN, data clearing, private AI',
    description: 'Privacy-focused browser with built-in VPN, automatic data clearing, and private AI chat. My default for everyday browsing.',
    websiteUrl: 'https://duckduckgo.com/browser',
  },
  {
    name: 'Canva Pro',
    tagline: 'Design',
    description: 'Templates, brand kits, and quick graphics for social, worksheets, and visual content. I use it for guides and resource PDFs.',
    websiteUrl: 'https://www.canva.com',
  },
  {
    name: 'Obsidian Sync',
    tagline: 'Note sync',
    description: 'Keeps my Obsidian vault synced across devices so notes, newsletters, and content stay in one place.',
    websiteUrl: 'https://obsidian.md/sync',
  },
  {
    name: 'Cursor IDE',
    tagline: 'AI hub & IDE',
    description: 'My main AI hub and IDE. Code, edit, and think with AI built in—where most of my technical and writing work happens.',
    websiteUrl: 'https://cursor.com',
  },
  {
    name: '1Password',
    tagline: 'Passwords',
    description: "Password manager for logins, 2FA, and secure notes. One place for credentials so I don't have to remember them.",
    websiteUrl: 'https://1password.com',
  },
  {
    name: 'Todoist',
    tagline: 'To-do & tasks',
    description: 'Free to-do and task manager. Simple lists, due dates, and projects that actually work with my brain.',
    websiteUrl: 'https://todoist.com',
  },
  {
    name: 'Signal',
    tagline: 'Private messaging',
    description: 'Private messaging app with end-to-end encryption. My go-to for sensitive or personal conversations.',
    websiteUrl: 'https://signal.org',
  },
  {
    name: 'Netlify',
    tagline: 'Site deployment',
    description: 'Where I deploy sites. Git-based builds, previews, and hosting that play nice with static sites and modern frameworks.',
    websiteUrl: 'https://netlify.com',
  },
  {
    name: 'Beehiiv',
    tagline: 'Newsletter',
    description: 'Newsletter platform for the Pythoness Programmer newsletter. Growth tools, analytics, and a straightforward editor.',
    websiteUrl: 'https://www.beehiiv.com',
  },
  {
    name: 'Etsy',
    tagline: 'Digital downloads & inventory',
    description: 'Digital downloads and inventory sales for now. Where Sticky Spells and other creative bits live.',
    websiteUrl: 'https://www.etsy.com',
  },
]

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-brand-green-dark text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-3">
            Tech stack & referral links
          </h1>
          <p className="text-white/80 text-lg mb-2">
            Tools I use and recommend. Items marked with <span className="text-brand-green-accent font-medium">*</span> include a referral link—if you sign up through those, I may receive credit or a small benefit. I only share what I personally use and enjoy.
          </p>
        </div>

        <div className="space-y-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="font-display text-xl text-white">
                      {tool.name}
                      {tool.referralUrl && (
                        <span className="text-brand-green-accent font-medium ml-0.5" aria-label="Referral link">*</span>
                      )}
                    </h2>
                    <span className="text-brand-green-accent/90 text-sm font-medium">{tool.tagline}</span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  {(tool.referralUrl || tool.websiteUrl) && (
                    <Link
                      href={tool.referralUrl ?? tool.websiteUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-brand-green-accent text-black px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm"
                    >
                      {tool.referralUrl ? `Try ${tool.name} →` : 'Visit site →'}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/50 text-xs text-center mt-10">
          <span className="text-brand-green-accent/80">*</span> = referral link. I may receive credit or a small benefit if you sign up through these.
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/links"
            className="text-brand-green-accent hover:text-white transition-colors text-sm"
          >
            ← Back to all links
          </Link>
        </div>
      </div>
    </div>
  )
}
