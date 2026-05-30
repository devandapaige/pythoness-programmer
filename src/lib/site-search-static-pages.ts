import { metadataCopy, pythonessPerspective } from '@/data/siteCopy'

export type StaticSitePage = {
  id: string
  title: string
  subtitle?: string
  description: string
  href: string
  keywords?: string[]
}

/** Site pages not covered by freeResources, blog, or newsletter archives. */
export const staticSitePages: StaticSitePage[] = [
  {
    id: 'home',
    title: 'Home',
    subtitle: 'Tech That Works, for People Like Us',
    description: metadataCopy.home.description,
    href: '/',
    keywords: ['home', 'pythoness programmer', 'landing'],
  },
  {
    id: 'about',
    title: 'About Amanda',
    description: metadataCopy.about.description,
    href: '/about',
    keywords: ['about', 'amanda nelson', 'who is amanda', 'my story', 'about me'],
  },
  {
    id: 'services',
    title: 'Services',
    description: metadataCopy.services.description,
    href: '/services',
    keywords: ['sessions', 'booking', 'reflection', 'software psychic', 'coaching'],
  },
  {
    id: 'async',
    title: '20-Minute Async Reflection',
    subtitle: '$75',
    description:
      'Private tarot-guided video for neurodivergent business owners—software, strategy, and creative decisions. No live call.',
    href: '/async',
    keywords: ['async', 'video reflection', 'async session'],
  },
  {
    id: 'support',
    title: 'Support the Pythoness',
    description:
      'Support the Pythoness Programmer through tips, donations, and other ways to show appreciation for the work.',
    href: '/support',
    keywords: ['support', 'tip', 'donate', 'coffee'],
  },
  {
    id: 'resources-hub',
    title: 'Resources Hub',
    description:
      'Free resources for digital wellness, automation, and neurodivergent-friendly tech solutions.',
    href: '/resources',
    keywords: ['resources', 'free guides', 'resource hub', 'all resources'],
  },
  {
    id: 'blog',
    title: 'Lab Notes',
    description:
      'Lab Notes: overflow ideas, reactions, experiments, and creative project dispatches from Pythoness Programmer.',
    href: '/blog',
    keywords: ['blog', 'lab notes', 'articles', 'posts'],
  },
  {
    id: 'newsletter',
    title: pythonessPerspective.name,
    subtitle: pythonessPerspective.scheduleLabel,
    description: pythonessPerspective.description,
    href: '/newsletter',
    keywords: ['newsletter', 'pythoness perspective', 'weekly issues', 'subscribe'],
  },
  {
    id: 'newsletter-subscribe',
    title: `Subscribe to ${pythonessPerspective.name}`,
    description: pythonessPerspective.subscribeMetaDescription,
    href: '/newsletter/subscribe',
    keywords: ['subscribe', 'sign up', 'email list'],
  },
  {
    id: 'store',
    title: 'Store',
    description:
      'Digital products from Pythoness Programmer. Get free downloads or buy paid resources with Stripe checkout.',
    href: '/store',
    keywords: ['store', 'shop', 'digital products', 'paid downloads'],
  },
  {
    id: 'links',
    title: 'Connect with Amanda',
    description:
      'Connect with Amanda through various platforms. Book Software Psychic sessions, find resources, and stay in touch.',
    href: '/links',
    keywords: ['connect', 'social', 'links', 'contact'],
  },
  {
    id: 'referral',
    title: 'Tech Stack & Referral Links',
    description:
      'Tools I use and recommend: scheduling, email, voice-to-text, browser, design, notes, IDE, passwords, tasks, messaging, deployment, newsletter, and more.',
    href: '/referral',
    keywords: ['referral', 'tools', 'tech stack', 'recommendations'],
  },
  {
    id: 'affiliate-program',
    title: 'Affiliate Program',
    description:
      'Refer clients to Software Psychic sessions and earn 20% commission. Optional payout as cash or session credit.',
    href: '/affiliate-program',
    keywords: ['affiliate', 'refer clients', 'commission'],
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy policy for Pythoness Programmer website and services.',
    href: '/privacy-policy',
    keywords: ['privacy', 'privacy policy', 'legal'],
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    description: 'Terms of service for Pythoness Programmer website and services.',
    href: '/terms',
    keywords: ['terms', 'terms of service', 'legal'],
  },
]
