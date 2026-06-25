export interface ToolResource {
  name: string
  href: string
  bestFor: string
  fixNumber?: number
}

export interface LensRow {
  audience: string
  surface: string
  change: string
}

export interface FixExample {
  bad: string
  good: string
}

export interface PlatformRow {
  platform: string
  where: string
  quirk: string
}

export interface AccessibleFix {
  number: number
  title: string
  slug: string
  checkQuestion: string
  timeEstimate: string
  action: string
  reflectionPrompt?: string
  lensRows?: LensRow[]
  rules?: string[]
  template?: string
  examples?: FixExample[]
  platforms?: string
  platformRows?: PlatformRow[]
  extraNotes?: string[]
  tools?: ToolResource[]
}

export interface HumanTouchpointStep {
  step: string
  ask: string
}

export interface AccessibleDesignIssue {
  slug: string
  dateLabel: string
  title: string
  summary: string
  highlights: string[]
}

export interface MagnificaMapping {
  word: string
  fixes: string
  practice: string
}

export const humanTouchpointSteps: HumanTouchpointStep[] = [
  {
    step: 'Preview like a subscriber',
    ask: 'Phone, bright light if you can, rushed — not the desktop tab you have been staring at for an hour.',
  },
  {
    step: 'Contrast (Fix 1)',
    ask: 'Can you read body text and the main CTA without squinting? Aim for 4.5:1 on normal text (WCAG 2.1 AA).',
  },
  {
    step: 'Agent pass',
    ask: 'If AI touched copy, colors, or HTML — did it assume a background that disappears in some clients? (White on white is the classic.)',
  },
  {
    step: 'One fix, then send',
    ask: 'Change the worst pair before schedule. Note hex codes so the next draft does not repeat it.',
  },
]

export const skimTestQuestions: string[] = [
  'What is this page or post for?',
  'What is the one action you want them to take?',
  'Where would they look next if they only read headings?',
]

export const accessibleFixes: AccessibleFix[] = [
  {
    number: 1,
    title: 'Readable contrast',
    slug: 'human-eyes-readable-contrast-june-2026',
    checkQuestion: 'Can they read body text and CTAs without squinting?',
    timeEstimate: '10 minutes',
    action:
      'Pick one surface (email, homepage, or pinned post). Open it on your phone. Contrast-check body text and main CTA. If an agent touched it, you are the final eyes. Change the worst text pair before you send.',
    reflectionPrompt:
      'Open your last three client-facing sends on your phone. Which fails the tired-eyes test first? If AI helped build it, start there.',
    lensRows: [
      {
        audience: 'Business',
        surface: 'Homepage, welcome email, pricing PDF, or checkout',
        change: 'Identify the one text pair that matters most; adjust contrast or weight',
      },
      {
        audience: 'Social / community',
        surface: 'Pinned post, link-in-bio, Story text, Discord/Slack theme',
        change: 'Same phone preview — contrast on text overlays and theme colors',
      },
    ],
    platforms:
      'Mailchimp, ConvertKit, Squarespace, Carrd, Canva, Instagram — no developer required.',
    tools: [
      {
        name: 'WebAIM Contrast Checker',
        href: 'https://webaim.org/resources/contrastchecker/',
        bestFor: 'Enter hex codes; see pass/fail for WCAG AA and AAA. Start here.',
        fixNumber: 1,
      },
      {
        name: 'Who Can Use',
        href: 'https://whocanuse.com',
        bestFor: 'See how a color pair looks to people with different vision.',
        fixNumber: 1,
      },
      {
        name: 'TPGi Colour Contrast Analyser',
        href: 'https://www.tpgi.com/color-contrast-checker/',
        bestFor: 'Sample colors from a live site, PDF, or screenshot.',
        fixNumber: 1,
      },
      {
        name: 'WCAG 2.2 — Contrast (Minimum)',
        href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
        bestFor: 'Plain-language explanation of the 4.5:1 rule.',
        fixNumber: 1,
      },
      {
        name: 'WAVE Web Accessibility Evaluation Tool',
        href: 'https://wave.webaim.org/',
        bestFor: 'Quick page scan (contrast is one of several checks).',
        fixNumber: 1,
      },
      {
        name: 'Firefox Accessibility Inspector',
        href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html',
        bestFor: 'Built-in contrast check on elements already on your page.',
        fixNumber: 1,
      },
    ],
  },
  {
    number: 2,
    title: 'Scannable structure',
    slug: 'scannable-structure-fix-2-june-2026',
    checkQuestion:
      'Can someone skim in 10 seconds and know what this is for? Does heading structure follow H1 → H2 → H3 so screen readers can navigate?',
    timeEstimate: '15 minutes',
    action:
      'Take your messiest page, FAQ, long caption, or thread. Add three real headings that describe what each section does — not clever labels, descriptive ones ("What\'s included," "How to book," "Refund policy"). If it is a social post, break one wall into five short paragraphs or five carousel slides.',
    reflectionPrompt:
      'Which page on your site or bio would you be embarrassed to skim on a timer? Start there.',
    rules: [
      'One main title per page or email (H1 or equivalent).',
      'Section titles for each major chunk (H2).',
      'Sub-points only when a section truly needs splitting (H3).',
      'Do not skip levels for styling (H1 → H3 with no H2 confuses screen readers and skimmers alike).',
      'Short paragraphs: 3–4 lines max on mobile. Bullets for lists of options or steps.',
    ],
    lensRows: [
      {
        audience: 'Small business',
        surface: 'Services page, FAQ, checkout steps, about page',
        change: 'Real headings (not bold paragraphs pretending to be titles). Short paragraphs. Bullets for steps.',
      },
      {
        audience: 'Chronically online',
        surface: 'Long caption, thread, newsletter section, link-in-bio',
        change: 'One idea per slide or paragraph block. Numbered beats for sequences. White space is navigation.',
      },
    ],
    platforms:
      'WordPress, Squarespace, Notion public page, Mailchimp drag-and-drop, Google Docs → PDF, Bluesky long posts, carousel slides.',
    extraNotes: [
      'Wall-of-text recovery is normal. Most of us draft in flow state and publish in chaos. Fix 2 is the edit pass that respects how human brains read online: skim first, commit later.',
    ],
    tools: [
      {
        name: 'Neuroinclusive Design hub',
        href: '/neuroinclusive-design',
        bestFor: 'Clear Structure principle + five-minute accessibility check.',
        fixNumber: 2,
      },
      {
        name: 'The A11Y Project Checklist',
        href: 'https://www.a11yproject.com/checklist/',
        bestFor: 'Broader sanity check beyond headings.',
        fixNumber: 2,
      },
    ],
  },
  {
    number: 3,
    title: 'Alt text workflow',
    slug: 'alt-text-workflow-june-2026',
    checkQuestion: 'If images failed, would the message still land?',
    timeEstimate: '15 minutes',
    action:
      'Fix alt text on your top three images by traffic or importance. Set a recurring Sunday batch (15 minutes, five images) if you post often.',
    reflectionPrompt:
      'Which recurring image type do you post most (quote card, flyer, product flat-lay)? That type gets the template first.',
    template: '[What is in the image] — [why it matters on this page/post]',
    rules: [
      'Describe what matters for this context — not every pixel.',
      'Include text that appears in the image — quotes, dates, prices, event titles. Repeat critical text in the caption too.',
      'Skip "image of" / "photo of" — assistive tech already announces it is an image.',
      'Decorative images: use empty alt (alt="") so screen readers skip them.',
      'Functional images (icons, buttons): say what they do — "Search," "Download checklist PDF."',
      'Keep it under ~125 characters when you can — put the critical noun first.',
    ],
    examples: [
      { bad: 'logo_final_v3.png', good: 'Pythoness Programmer logo — links to homepage' },
      { bad: 'promo', good: 'Workshop flyer: Accessible Tech Design, June 2026 — registration link in caption' },
    ],
    lensRows: [
      {
        audience: 'Run a business',
        surface: 'Hero image, product photo, PDF cover, email header',
        change: 'Alt text: what is in the image + why it matters for the page',
      },
      {
        audience: 'Post a lot online',
        surface: 'Next five posts with text-in-image, carousel, meme-with-message',
        change: 'Repeat critical text in caption or alt field; do not rely on the graphic alone',
      },
    ],
    platformRows: [
      {
        platform: 'Website / Squarespace / WordPress',
        where: 'Image block → alt / description',
        quirk: 'Decorative images: empty alt is correct',
      },
      {
        platform: 'Shopify / product catalog',
        where: 'Product media alt',
        quirk: 'Include color/variant if it affects purchase',
      },
      {
        platform: 'Mailchimp / ConvertKit',
        where: 'Image block alt',
        quirk: 'Repeat sale terms in body text too',
      },
      {
        platform: 'Instagram',
        where: 'Alt text in advanced settings when posting',
        quirk: 'Critical text must also be in caption',
      },
      {
        platform: 'Bluesky',
        where: 'Alt text field on upload; Settings → Accessibility',
        quirk: 'Turn on Require alt text before posting — the platform holds the line for you',
      },
    ],
    extraNotes: [
      'Alt text also helps search engines and AI agents (AEO) infer what your page means. Clear headings plus descriptive alt text compound.',
    ],
    tools: [
      {
        name: 'Accessible Social',
        href: 'https://www.accessible-social.com/',
        bestFor: 'Social posts — captions, alt text, copy, platform advisories.',
        fixNumber: 3,
      },
    ],
  },
  {
    number: 4,
    title: 'Video and audio that include',
    slug: 'five-fixes-closeout-june-2026',
    checkQuestion: 'Can someone get the message without sound or with low attention?',
    timeEstimate: '15 minutes',
    action:
      'On your last published video or audio piece: enable captions, skim for errors on names and jargon, and add a three-line text summary in the description or first comment if a full transcript is not realistic yet.',
    reflectionPrompt:
      'Trace one path from social → booking → confirmation. Where is the first place you would get lost if you were tired?',
    lensRows: [
      {
        audience: 'Small business',
        surface: 'Sales video, tutorial, Zoom replay, podcast episode page',
        change: 'Captions on; transcript or summary linked nearby',
      },
      {
        audience: 'Chronically online',
        surface: 'Reel, TikTok, live replay, audio clip',
        change: 'Auto-captions reviewed (they are not perfect); critical info duplicated in caption or pinned comment',
      },
    ],
    extraNotes: [
      'A transcript is the full text of everything said. A summary is the shortcut — three lines covering what someone needs to know if they cannot watch with sound. Start with the summary if a full transcript feels like too much this week.',
    ],
    platforms:
      'YouTube auto-captions + edit. Instagram/TikTok caption tools. Zoom cloud recording → transcript export. Descript, CapCut, or native editors — use what you already touch.',
    tools: [
      {
        name: 'Accessible Social',
        href: 'https://www.accessible-social.com/',
        bestFor: 'Platform-specific caption and video guidance.',
        fixNumber: 4,
      },
    ],
  },
  {
    number: 5,
    title: 'Links and flows that do not trap',
    slug: 'five-fixes-closeout-june-2026',
    checkQuestion:
      'Does every link say where it goes? Can forms be completed without guessing?',
    timeEstimate: '15 minutes',
    action:
      'Rewrite five "click here" or "learn more" links. Fix one form label that currently only makes sense if you already know your own business.',
    lensRows: [
      {
        audience: 'Small business',
        surface: '"Book now," checkout, contact form, client portal',
        change: 'Replace "click here" with "Book a 20-minute session" / "Download the workbook." Visible labels on every field.',
      },
      {
        audience: 'Chronically online',
        surface: 'Link tree, newsletter signup, DM → calendar flow',
        change: 'Descriptive link text; thumb-tap targets; say what happens after submit',
      },
    ],
    examples: [
      { bad: 'Click here', good: 'Register for the June workshop (Luma)' },
      { bad: 'Learn more', good: 'Read the Neuroinclusive Design guide' },
      { bad: 'Submit alone on a long form', good: 'Send my message to Amanda' },
    ],
    platforms:
      'Carrd, Linktree, Beacons, Squarespace buttons, ConvertKit forms, Cal.com embeds — all allow custom button text and field labels.',
    tools: [],
  },
]

export const magnificaMappings: MagnificaMapping[] = [
  {
    word: 'Accessible',
    fixes: 'Fixes 1, 3, 4',
    practice: 'Readable contrast; alt text; captions and transcripts',
  },
  {
    word: 'Welcoming',
    fixes: 'Fixes 2, 5',
    practice: 'Scannable structure; links and forms that do not trap',
  },
  {
    word: 'Disarmed',
    fixes: 'All five, cumulatively',
    practice: 'Refusing to let efficiency rhetoric outsource care to your audience',
  },
]

export const june2026Issues: AccessibleDesignIssue[] = [
  {
    slug: 'human-eyes-readable-contrast-june-2026',
    dateLabel: 'Jun 5, 2026',
    title: 'Fix 1: readable contrast',
    summary:
      'Start with one surface and make it readable on a real phone screen before you send or post.',
    highlights: [
      'Readable contrast check for body text and primary CTAs.',
      'Human preview as the final step before publishing AI-assisted content.',
      'Simple ten-minute ritual you can repeat weekly.',
    ],
  },
  {
    slug: 'scannable-structure-fix-2-june-2026',
    dateLabel: 'Jun 12, 2026',
    title: 'Fix 2: scannable structure',
    summary:
      'Use clear headings and short, skimmable sections so readers and assistive tools can navigate your work.',
    highlights: [
      'The 10-second skim test for pages, posts, and long captions.',
      'Predictable heading hierarchy (H1, H2, H3) for screen readers.',
      'Wall-of-text recovery strategies for busy weeks.',
    ],
  },
  {
    slug: 'alt-text-workflow-june-2026',
    dateLabel: 'Jun 19, 2026',
    title: 'Fix 3: alt text workflow',
    summary:
      'Treat alt text as a repeatable habit so your message still lands when images do not.',
    highlights: [
      'Copy-ready alt text template: what is shown and why it matters.',
      'Sunday batch workflow for image-heavy weeks.',
      'Platform-specific reminders for websites, email, and social posts.',
    ],
  },
  {
    slug: 'five-fixes-closeout-june-2026',
    dateLabel: 'Jun 26, 2026',
    title: 'Fix 4 + 5: captions, honest links, and the full recap',
    summary:
      'Close the month with video/audio inclusion, descriptive links and forms, plus the pin-up Accessible Tech Checklist.',
    highlights: [
      'Captions reviewed + three-line text summary for video/audio.',
      'Rewrite five vague links; fix one confusing form label.',
      'Full five-fix recap and Magnifica Humanitas mapping.',
    ],
  },
]

export const consolidatedTools: ToolResource[] = [
  {
    name: 'WebAIM Contrast Checker',
    href: 'https://webaim.org/resources/contrastchecker/',
    bestFor: 'Fix 1 — start here',
    fixNumber: 1,
  },
  {
    name: 'Who Can Use',
    href: 'https://whocanuse.com',
    bestFor: 'Fix 1 — choosing brand color pairs',
    fixNumber: 1,
  },
  {
    name: 'TPGi Colour Contrast Analyser',
    href: 'https://www.tpgi.com/color-contrast-checker/',
    bestFor: 'Fix 1 — sampling colors from a live site or screenshot',
    fixNumber: 1,
  },
  {
    name: 'WCAG 2.2 — Contrast (Minimum)',
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
    bestFor: 'Fix 1 — plain-language 4.5:1 rule',
    fixNumber: 1,
  },
  {
    name: 'WAVE Web Accessibility Evaluation Tool',
    href: 'https://wave.webaim.org/',
    bestFor: 'Fixes 1–2 — quick page scan',
    fixNumber: 1,
  },
  {
    name: 'Firefox Accessibility Inspector',
    href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html',
    bestFor: 'Fix 1 — built-in contrast check on live elements',
    fixNumber: 1,
  },
  {
    name: 'Neuroinclusive Design hub',
    href: '/neuroinclusive-design',
    bestFor: 'Fix 2 — Clear Structure + five-minute check',
    fixNumber: 2,
  },
  {
    name: 'The A11Y Project Checklist',
    href: 'https://www.a11yproject.com/checklist/',
    bestFor: 'Fixes 2–3 — broader sanity check',
    fixNumber: 2,
  },
  {
    name: 'Accessible Social',
    href: 'https://www.accessible-social.com/',
    bestFor: 'Fixes 3–4 — social captions, alt text, platform advisories',
    fixNumber: 3,
  },
]

export const whoThisIsFor: string[] = [
  'Solo business owners publishing across site, email, and client portals.',
  'Creators who post often and need habits that survive busy weeks.',
  'Anyone using AI to draft or layout content who still needs human eyes before send.',
  'Hosts who want the person on the other end of the screen to read, skim, see, hear, and follow what you built.',
]
