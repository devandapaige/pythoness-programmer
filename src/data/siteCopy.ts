export const canonicalPhrases = {
  tagline: 'Reflection sessions, not rescue.',
  headline: 'Tech That Works, for People Like Us',
  signatureQuestion: 'What is this struggle trying to teach you?',
  thirdTime: "So you don't make it a third time.",
  guideNotGuru: "I'm a guide, not a guru.",
} as const

export const hero = {
  title: canonicalPhrases.headline,
  paragraphs: [
    "For most of my life, I thought I was bad at systems. Turns out the systems were bad for my brain.",
    "I'm Amanda Nelson — the Pythoness Programmer. Late-identified neurodivergent, Senior Software Engineer, and someone who offers reflection sessions when tech keeps fighting the way your brain works.",
  ],
  tagline: canonicalPhrases.tagline,
} as const

export const struggleBlock = {
  headline: canonicalPhrases.signatureQuestion,
  validation:
    "You're not broken, lazy, or bad at tech — you're running a brain mainstream tools were never designed for, and you've probably spent years adapting yourself to systems that were always going to fight you.",
  closing:
    'I sit with you after your last tech hurdle and ask the question nobody else is asking.',
} as const

export const howItWorks = {
  title: 'How It Works',
  steps: [
    {
      title: 'Book a session',
      description:
        'Async video ($75), live 20-minute ($95), or 60-minute deep dive ($255) — pick what fits your decision.',
    },
    {
      title: 'Share your context',
      description:
        'Complete intake before you confirm: your question, what you tried, and what clarity would feel like. Async requires full intake before you pick a delivery slot.',
    },
    {
      title: 'Reflect together',
      description:
        'Live sessions bookend with tarot; async is a recorded video by link. We name patterns and next steps — no hustle script.',
    },
    {
      title: 'Leave with clarity',
      description:
        'A read on the pattern, resources that fit your brain, and next steps you can actually use.',
    },
  ],
} as const

export const servicesSection = {
  title: 'Reflection, not rescue',
  subtitle:
    'Tarot-informed counsel on software, strategy, and creative decisions — grounded, neurodivergent-centered, professional counsel not fortune-telling.',
} as const

export type SessionId = 'async' | 'live20' | 'deep60'

export interface SessionCopy {
  id: SessionId
  title: string
  subtitle: string
  price: string
  description: string
  features: string[]
  note: string
  ctaText: string
  icon: string
  highlight?: boolean
  isNew?: boolean
}

export const sessions: Record<SessionId, SessionCopy> = {
  async: {
    id: 'async',
    title: '20-Minute Async Reflection',
    subtitle: 'Private video — no live call',
    price: '$75',
    description:
      'One focused question answered in a tarot-guided video after intake — delivered by the slot you book, private link by email.',
    features: [
      'Recorded video — watch and rewatch',
      'Tarot at start and end',
      'Software, strategy, or creative blocks',
    ],
    note: 'Best for: one clear fork without coordinating a live call. Intake required before booking; non-refundable once booked.',
    ctaText: 'Book Async Reflection — $75',
    icon: '🎥',
    highlight: true,
    isNew: true,
  },
  live20: {
    id: 'live20',
    title: '20-Minute Live Reading',
    subtitle: 'Video or voice — interactive',
    price: '$95',
    description:
      'Real-time session for one stuck point or decision — tarot bookends, room to think out loud without being rushed.',
    features: [
      'Tarot at start and end',
      'Live back-and-forth on one decision',
      'Clear next step when you leave',
    ],
    note: 'Best for: urgent decisions or when you process better in conversation.',
    ctaText: 'Book Live Reading — $95',
    icon: '🔮',
  },
  deep60: {
    id: 'deep60',
    title: '60-Minute Deep Dive',
    subtitle: 'Extended business counsel',
    price: '$255',
    description:
      'A full hour for patterns across tech, operations, and creative work — optional 20-minute follow-up within 30 days.',
    features: [
      'Tarot at start and end',
      'Deep pattern and strategy work',
      'Optional 20-minute follow-up within 30 days',
    ],
    note: 'Best for: major transitions or intertwined decisions.',
    ctaText: 'Book Deep Dive — $255',
    icon: '🔮',
  },
}

export const sessionComparison = {
  title: 'Compare sessions',
  rows: [
    { label: 'Format', async: 'Recorded video', live20: 'Live video/voice', deep60: 'Live + optional follow-up' },
    { label: 'Best for', async: 'One focused fork', live20: 'Urgent / think out loud', deep60: 'Major / intertwined decisions' },
    { label: 'Booking', async: 'Intake first, then slot', live20: 'Book a slot', deep60: 'Book a slot' },
  ],
  prices: { async: '$75', live20: '$95', deep60: '$255' },
} as const

export const forYouLists = {
  forYou: [
    "You've tried every productivity tool and they all feel wrong",
    'You keep hitting the same tech walls no matter what you change',
    "You're neurodivergent — diagnosed, self-identified, or still figuring it out",
    'You want to understand what is happening, not just patch it',
  ],
  notForYou: [
    'You need emergency tech rescue',
    'You want someone to "just fix it"',
    "You're not interested in reflection or pattern work",
  ],
} as const

export const aboutForYouLists = {
  intro: "You're looking for a guide who helps you understand your tech struggles, not just patch them.",
  forYou: [
    'A neurodivergent creative who keeps hitting the same workflow walls',
    'Someone newly diagnosed (or still figuring it out) revisiting old patterns',
    'A small business owner tired of tech that does not fit how you think',
    "Someone who has tried every productivity tool and wonders if the tools are the problem",
  ],
  notForYou: [
    'People looking for emergency tech rescue',
    'Anyone who wants you to "just fix it" without understanding why it broke',
    "Folks who aren't interested in reflection or pattern work",
  ],
} as const

export const servicesForYouLists = {
  intro: "You're already capable. You need someone who can:",
  forYou: [
    'See patterns in your tech, business, and creative choices you are too close to notice',
    'Reflect in plain language — no tarot expertise required',
    'Validate the friction is real and explore directions that fit how you think',
    'Help you build judgment that sticks — reflection and agency, not dependency',
  ],
  notForYou: [
    'Emergency tech rescue or someone to "just do it for you"',
    'Predictions, guarantees, or fortune-telling instead of counsel',
    "Anyone not open to reflection or naming what's underneath the symptom",
  ],
} as const

export const freeResources = {
  title: 'Free Resources, Always',
  description: 'Brain-friendly guides and tools on this site — no paywall, no email gate, no hustle.',
} as const

export const homeAboutTeaser = {
  title: 'The Pythoness Behind The Code',
  description: `${canonicalPhrases.guideNotGuru} I sit with you after your last tech hurdle, name the patterns beneath the friction, and help you leave with clarity that fits your brain. Sessions blend technical context, tarot bookends, and neurodivergent-centered reflection.`,
  linkText: 'About Amanda',
  linkHref: '/about',
} as const

export const aboutHero = {
  headline:
    "I spent 15 years being good at systems. I just didn't know why — or what it was costing me.",
  paragraphs: [
    "I'm Amanda Nelson — the Pythoness Programmer. Senior Full Stack Software Engineer, late-identified neurodivergent, chronic illness navigator. I built the reflection skills I now teach in the hardest stretch of my life so far.",
    "Here's the version of my story that matters for why you're here.",
  ],
} as const

export const aboutStory = {
  title: 'How I Got Here',
  paragraphs: [
    'Before code, I spent 15+ years in communications, customer service, and systems building — pattern recognition and detail orientation without the neurodivergent label yet.',
    'In 2020 I enrolled in a pandemic-era bootcamp; by 2021 I was at Zappos.com with a new ADHD diagnosis, fibromyalgia and chronic migraines already in the picture, and a body that had been asking me to slow down for years. I was laid off in January 2023 — clarifying, painful, and the push into building Pythoness Programmer.',
    "What helped wasn't another productivity system. It was community — late-identified neurodivergent adults naming patterns I'd blamed on myself, and voices explaining how tech and productivity systems were built for one kind of brain while everyone else was expected to adapt.",
    "I'm near Richmond, Virginia. Watching confederate statues come down in 2020 and the BLM reckoning cracked open decolonization for me — looking honestly at inherited systems and stopping blaming myself for struggling inside them. That changed how I think about my tools. That's where the Pythoness Programmer comes from: reflection skills built in the hardest stretch, kept on purpose after I got through it.",
  ],
} as const

export const howIWork = {
  title: 'How I Work',
  philosophy:
    'I work with decolonizing neurodivergents on what tech friction reveals — what you have internalized and what your brain actually needs.',
  bullets: [
    'Reflect on patterns you keep repeating — and why they keep failing',
    'Uncover what you absorbed from ableist, productivity-obsessed tech culture',
    'Discover tools and frameworks that fit your brain',
    "Build understanding so you don't make it a third time",
  ],
  closing:
    'Sessions blend technical expertise, tarot bookends, and neurodivergent-centered reflection.',
} as const

export const tarotAndName = {
  title: 'Why tarot, and the name',
  paragraphs: [
    "The best diagnostic tool isn't always a flowchart. Tarot surfaces what's already present and gives it a frame — bookends for reflection, not predictions. If that's not your thing, you're still welcome here.",
    'The Pythia were oracles at crossroads — they demystified, they did not give orders. Tech complexity often makes people feel small; my job is clarity and reminding you your brain was never the problem.',
  ],
} as const

export const coreValues = [
  { title: 'Learning', description: 'Digital fluency, not dependency — your aha moments, not reliance on mine.' },
  { title: 'Resourcefulness', description: 'Hidden-gem tools and approaches mainstream advice skips.' },
  { title: 'Serenity', description: 'Calm sessions — no pressure, judgment, or false urgency.' },
  { title: 'Inclusion', description: 'Affirming space for LGBTQIA+ folks, sex workers, and anyone marginalized by mainstream tech culture.' },
  { title: 'Humor', description: 'Levity at systems that were never built for us — part of the work.' },
  { title: 'Resilience', description: 'Understanding that makes the next hurdle survivable — capacity, not just a patch.' },
] as const

export const aboutCta = {
  title: 'Ready to Reflect?',
  description:
    "Tired of repeating the same tech patterns? Let's understand what they're trying to teach you.",
} as const

export const servicesHero = {
  title: 'Reflection sessions for neurodivergent business owners',
  paragraphs: [
    'Amanda Nelson — the Pythoness Programmer. Tarot-informed counsel on software, strategy, and creative decisions. Reflection, not rescue. Professional counsel, not fortune-telling.',
    "You don't need to know tarot. I bring technical context and respect for how neurodivergent brains decide under pressure — so you're not translating your reality to someone who only speaks productivity culture.",
  ],
} as const

export const servicesDifferent = {
  title: 'What makes this different',
  paragraphs: [
    "Most tech and business advice assumes neurotypical pace, linear plans, and someone else's definition of success — more hustle, more tools, more optimization.",
    "This work treats software, strategy, and creative choices as places your nervous system and values show up. It's built for brains and businesses the mainstream wasn't designed for.",
  ],
} as const

export const offeringIncludes = {
  title: 'What every offering includes',
  items: [
    'Live sessions: tarot at start and end. Async: recorded video with the same bookends, on your timeline.',
    'Judgment-free, affirming space (LGBTQIA+ and SW affirming)',
    'Grounded language — clarity and agency, not vague mysticism',
    'Pattern recognition and strategic perspective, not a one-size-fits-all stack',
  ],
} as const

export const policies = {
  title: 'How to book, what to expect, policies',
  howToBook: [
    'Use the Cal.com link on the offering you want.',
    'Intake is part of booking — async requires complete intake before you can book.',
  ],
  whatToExpect: [
    'Warm, direct, grounded conversation. I may suggest tools; you stay in charge of what you implement.',
    'Live: interactive. Async: private video link — watch and rewatch, no live meeting.',
  ],
  policyItems: [
    'Live (20- and 60-minute): Reschedule or cancel with at least 24 hours notice when possible. Late cancellations may be non-refundable.',
    'Async: Non-refundable once booked. Video delivered by the booking slot you selected (intake completed before booking).',
    'Professional intuitive counsel only — not medical, mental health, legal, or financial advice. Not emergency tech support.',
  ],
} as const

export const pythonessPerspective = {
  name: 'Pythoness Perspective',
  scheduleLabel: 'Weekly, March–November',
  shortBlurb:
    'Weekly issues, March through November only. Each month is one arc—a deep dive through a tech sovereignty resource I teach, with practical steps each week tied to the same frameworks in my free guides and sessions.',
  description:
    'Pythoness Perspective is my weekly newsletter, sent March through November. Each month follows one arc: a deep dive through a tech sovereignty topic I teach—privacy, automation, boundaries, digital wellness—with something you can apply that week. Same brain-friendly frameworks as my free resources and reflection sessions, not generic tech hype.',
  archiveIntro:
    'The weekly archive for cosmic coders and neurodivergent creatives. Issues run March–November; each month explores one tech sovereignty arc from what I teach on the site and in sessions.',
  subscribeMetaDescription:
    'Subscribe to Pythoness Perspective—weekly deep dives on tech sovereignty, March through November. Neurodivergent-friendly frameworks from Pythoness Programmer.',
  resourcesSectionIntro:
    'Weekly arcs during newsletter season, plus Lab Notes when a topic needs more room on the blog.',
} as const

export const metadataCopy = {
  home: {
    description:
      'Reflection sessions, not rescue. Tarot-guided reflection for neurodivergent creatives and small business owners — so you do not make it a third time.',
    openGraphDescription:
      'Reflection sessions, not rescue. Pattern recognition for neurodivergent creatives and small business owners.',
  },
  about: {
    description:
      'Amanda Nelson — Pythoness Programmer. Senior engineer, late-identified neurodivergent. Story, how I work, and reflection sessions.',
    openGraphDescription:
      'Amanda Nelson — Pythoness Programmer. Reflection sessions that ask: What is this struggle trying to teach you?',
  },
  services: {
    description:
      'Pythoness Programmer reflection sessions: async video ($75), live 20-minute ($95), deep dive ($255). Tarot-informed counsel for neurodivergent business owners.',
    openGraphDescription:
      'Reflection, not rescue. Compare async, live, and deep-dive sessions with the Pythoness Programmer.',
  },
} as const
