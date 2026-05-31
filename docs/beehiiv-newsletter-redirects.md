# Beehiiv → site newsletter redirects

When `newsletter.pythonessprogrammer.com` is a Netlify domain alias on this site, [`public/_redirects`](../public/_redirects) sends Beehiiv mirror URLs to the on-site archive.

## URL patterns

| Beehiiv mirror | Site canonical |
|----------------|----------------|
| `https://newsletter.pythonessprogrammer.com/p/{slug}` | `https://www.pythonessprogrammer.com/newsletter/{site-slug}` |
| `https://pythoness.beehiiv.com/p/{slug}` | Same targets (requires pointing that domain at Netlify too) |

Most posts use the same slug on Beehiiv and in `src/content/newsletter/posts/{slug}.mdx`. The explicit rules below cover **slug mismatches** only; a wildcard handles the rest.

## Slug mismatches (explicit 301 rules)

These Beehiiv `/p/` slugs do **not** match an MDX filename. Each redirects to the site slug in the right column.

| Beehiiv `/p/` slug | Site `/newsletter/` slug | Notes |
|--------------------|--------------------------|-------|
| `2025-wooden-snake-what-we-shed-and-why-it-had-to-go` | `2025-wooden-snake-what-we-shed` | Longer Beehiiv URL / utm slug |
| `2026-fire-horse-when-the-shed-skin-burns` | `2026-fire-horse` | |
| `50-isn-t-failure-it-s-a-bridge` | `50-isn-t-failure` | |
| `ai-bullshit-detection-why-your-critical-thinking-is-your-best-ai-tool` | `ai-bullshit-detection` | |
| `april-audit-your-top-3-energy-leaks-before-you-fix-anything` | `april-audit-your-top-3-energy-leaks` | |
| `bringing-it-all-together-your-brain-dump-processing-playbook` | `bringing-it-all-together-mindful-automation-1` | |
| `data-flow-from-chaos-to-conscious-creation` | `data-flow-from-chaos-to-conscious` | utm slug |
| `data-flow-the-hidden-rhythm-behind-every-creative-process` | `data-flow-from-chaos-to-conscious` | Old title link in a later issue |
| `digital-spring-cleaning-completing-our-grit-journey` | `monthly-grit-reflection-worksheet` | Subject line match |
| `error-proofing-your-automation-building-systems-that-last` | `error-proofing-your-automation` | |
| `if-you-re-already-talking-to-ai-your-next-move-is-to-give-it-a-home` | `give-your-ai-a-home` | May 2026 Week 1 |
| `july-6th-2025-tech-boundaries-digital-wellness-your-month-of-intentional-tech-use` | `july-6th-2025-tech-boundaries-digital-wellness-your-month-of-intentional-tech-use-da64e2e781dd0784` | Beehiiv disambiguation hash on site |
| `maintenance-beats-motivation-rhythms-for-imperfect-weeks-april-finale` | `maintenance-beats-motivation` | |
| `mindful-automation-systems-that-work-for-y-o-u` | `mindful-automation-systems` | |
| `neuroinclusive-design-building-accessible-tech-for-all-brains` | `neuroinclusive-design-building-accessible-tech-for-all-brains-b2885a3a6882ca6e` | |
| `now-soon-reference-spring-cleaning-for-your-brain-that-will-actually-work-monday-morning` | `now-soon-reference-spring-cleaning` | |
| `pythoness-perspective-digital-sustainability-that-won-t-burn-you-out` | `digital-sustainability-that-wont-burn-you-out` | |
| `sustainable-tech-in-practice-my-keep-drain-buckets` | `my-keep-drain-buckets-2026` | |
| `tech-boundaries-digital-wellness-your-month-of-intentional-tech-use-my-free-slack-community` | `tech-boundaries-digital-wellness-your-month-of-intentional-tech-use-my-free-slack-community-9af738de` | |
| `the-foundation-is-built-now-let-s-automate-on-top-of-it` | `the-foundation-is-built` | May 2026 bridge |
| `the-y-o-u-framework-creating-automations-that-work-for-you` | `the-you-framework` | |
| `what-happens-when-your-automation-breaks-and-who-carries-that-cost` | `what-happens-when-your-automation-breaks` | May 2026 Week 3 |
| `workflow-organization-building-systems-that-support-your-creative-process` | `the-creative-workflow-revolution-how-organization-becomes-your-creative-superpower` | Old title link in a later issue |
| `your-overload-starts-with-new-defaults-not-discipline` | `attention-and-notification-hygiene` | |

## Wildcard (34+ posts)

For all other issues, Beehiiv slug = MDX filename, e.g.:

- `/p/give-your-ai-a-home` → `/newsletter/give-your-ai-a-home`
- `/p/build-your-automation-playbook` → `/newsletter/build-your-automation-playbook`
- `/p/your-energy-patterns-matter-so-do-theirs` → `/newsletter/your-energy-patterns-matter-so-do-theirs`

Full list: every `*.mdx` in `src/content/newsletter/posts/` except the **site slug** column above.

## Verify after DNS cutover

1. Spot-check one matching slug and one mismatch from the table.
2. Confirm query strings survive: `?utm_source=newsletter.pythonessprogrammer.com&...`
3. Run `npm run export-newsletter` + Beehiiv API compare if you have `BEEHIIV_API_KEY` — add any new explicit rules before removing Beehiiv hosting.

## Netlify setup checklist

1. Add `newsletter.pythonessprogrammer.com` as domain alias on the production site.
2. Point DNS CNAME for `newsletter` to Netlify.
3. Deploy this repo (redirects live in `public/_redirects`, scoped to full subdomain URLs so the main site `/` is untouched).
4. Optional: alias `pythoness.beehiiv.com` the same way for legacy links (wildcard only — add explicit rules there too if old emails used long slugs).
