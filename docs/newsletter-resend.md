# Pythoness Perspective: on-site archive + Resend

Newsletter issues live in the repo at `src/content/newsletter/posts/*.mdx` and render at `/newsletter/[slug]`. Subscribers are managed in **Resend** (segment + broadcasts). Beehiiv is only needed once to export the backlog.

## Migration status

- On-site newsletter archive is live at `/newsletter` and `/newsletter/[slug]`.
- Beehiiv is now a one-time export step (`npm run export-newsletter`). The site does not sync from Beehiiv at runtime.
- Exact duplicate issues that were previously published on the blog are consolidated SEO-safely:
  - If a slug exists in both `src/content/blog/posts/*.mdx` and `src/content/newsletter/posts/*.mdx`, the newsletter issue is canonical.
  - Legacy blog URLs for those exact duplicates redirect with a permanent SEO-safe `308` to the newsletter URL.
  - The blog page emits a `<link rel="canonical">` pointing at the newsletter URL for those exact duplicates.
  - Exception: `on-elon-musk-and-dates` remains canonical on `/blog/on-elon-musk-and-dates` (not redirected).

## Duplicate handling going forward

- Treat a shared slug between `src/content/blog/posts` and `src/content/newsletter/posts` as a duplicate.
- For exact duplicates:
  - Redirect `/blog/<slug>` -> `/newsletter/<slug>` using `308` when it is safe 1:1.
  - Use canonicals on the blog side only when redirects are not appropriate yet.
- For medium/low-confidence overlaps (composites, themed sections, partial republishings): do not redirect automatically; keep them as-is and open a review.

Tip for internal linking: when linking to a newsletter issue (including from “resource” content), prefer `/newsletter/<slug>` over `/blog/<slug>`.

## One-time Beehiiv export (free Launch plan)

1. Beehiiv **Settings → API**: key with `posts:read`, V2 `pub_...` publication ID.
2. Add to `.env.local`:
   - `BEEHIIV_API_KEY`
   - `BEEHIIV_PUBLICATION_ID`
3. Run:

```bash
npm run export-newsletter
```

4. Commit the generated MDX files under `src/content/newsletter/posts/`.
5. Self-host images (run once after export, or after any re-export that still references Beehiiv URLs):

```bash
npm run migrate-beehiiv-images
npm run migrate-beehiiv-links
```

`migrate-beehiiv-images` downloads assets into `public/newsletter/assets/{uuid}/` and rewrites frontmatter `image:` plus inline HTML `src` URLs. Inline email signatures map to `/images/email-signature.png`.

`migrate-beehiiv-links` rewrites legacy `pythoness.beehiiv.com/p/...` issue links to `/newsletter/...` and downloads Beehiiv-hosted PDFs into `public/`.

6. Deploy. You can cancel Beehiiv after subscribers are in Resend and images are migrated.

## Resend setup

1. [Resend dashboard](https://resend.com) → verify sending domain (`pythonessprogrammer.com`).
2. Create a **Segment** named e.g. `Pythoness Perspective` and copy its ID.
3. Netlify env (or `.env.local`):
   - `RESEND_API_KEY` — same key as store email (or a dedicated key)
   - `RESEND_NEWSLETTER_SEGMENT_ID` — segment UUID
   - `NEWSLETTER_REPLY_TO` — optional, shown on issue pages (default `help@pythonessprogrammer.com`)
   - `NEXT_PUBLIC_SITE_URL` — `https://pythonessprogrammer.com`

## Migrate subscribers from Beehiiv

1. Beehiiv → **Audience** → export CSV.
2. Resend → **Contacts** → import CSV → assign to your newsletter segment.
3. Send a one-time Resend **Broadcast**: new archive at `pythonessprogrammer.com/newsletter`, confirm unsubscribe links work.

## Publishing a new issue

1. Add `src/content/newsletter/posts/your-slug.mdx` (frontmatter + HTML body in a `newsletter-exported-body` div, or copy structure from an exported file).
2. Put cover and inline images in `public/newsletter/assets/` (site-wide assets like the signature live in `public/images/`). Reference them with site-relative paths, e.g. `image: "/newsletter/assets/{uuid}/banner.png"` — do not hotlink Beehiiv.
3. Deploy.
4. Resend → **Broadcasts** → pick a branded template (see [Broadcast templates](#broadcast-templates) below) → fill variables → send to your segment.

## Broadcast templates

Four reusable Resend templates live in the repo and can be registered once via the API (no emails sent during setup).

### One-time setup

1. Ensure `RESEND_API_KEY` is in `.env` or `.env.local` (same key as newsletter signups).
2. Optional: set `NEWSLETTER_EMAIL_FROM` (default `Pythoness Perspective <newsletter@pythonessprogrammer.com>`).
3. Optional: set `NEXT_PUBLIC_SITE_URL` so header/signature image URLs resolve correctly (default `https://pythonessprogrammer.com`).
4. Preview locally (dry run — no API calls):

```bash
npm run resend:templates
```

5. Create and publish templates in Resend:

```bash
npm run resend:templates -- --apply
```

6. After changing template HTML in the repo, push updates to Resend:

```bash
npm run resend:templates -- --apply --update
```

Template IDs are written to `config/resend-templates.json`. Re-running `--apply` skips aliases that already exist unless you pass `--update`.

Section header images use the same paths as newsletter MDX exports (under `/newsletter/assets/`), including:

- `/newsletter/assets/email/pythoness-perspective-header.png` (top banner)
- `/newsletter/assets/db3496f9-3b1b-4566-a1bd-6f8a166f1fbf/2.png` (This Week)
- `/newsletter/assets/dcbe0db6-6b06-4714-b1ee-48d9036b9db3/4.png` (TLDR)
- `/newsletter/assets/email/up-next-header.png` (Up next)

### Templates

| Alias | Use |
|-------|-----|
| `pythoness-perspective-newsletter` | Weekly Pythoness Perspective issues |
| `pythoness-event-reminder` | Luma / live event reminders |
| `pythoness-lab-notes-update` | New Lab Notes blog post announcements |
| `pythoness-monthly-recap` | End-of-month recap broadcasts |

### Weekly newsletter variables (`pythoness-perspective-newsletter`)

The template mirrors your regular issue structure:

| Variable | What goes here |
|----------|----------------|
| `SUBJECT_LINE` | Email subject |
| `PREHEADER` | Inbox preview text |
| `THIS_WEEK_HTML` | Opening paragraphs after the **This Week** header |
| `TLDR_HTML` | Bullet summary after the **TLDR** header |
| `MAIN_FEATURE_HTML` | Main feature body (include your `MAIN FEATURE` heading if needed) |
| `EXTRA_SECTIONS_HTML` | Tool Spotlight, Struggle is Real, Fire Horse, sign-off — paste from MDX export |
| `UP_NEXT_HTML` | Upcoming content after the **Up next** header |
| `READ_ONLINE_URL` | Archive URL for the green “Read the full issue” button (teaser sends only) |

Subscribe-forward and Support banners are baked into the template (linked images).

### Other send modes

**Full issue in email:** fill `THIS_WEEK_HTML`, `TLDR_HTML`, `MAIN_FEATURE_HTML`, and paste remaining sections into `EXTRA_SECTIONS_HTML`.

**Teaser + archive link:** short copy in `THIS_WEEK_HTML` / `TLDR_HTML`, set `READ_ONLINE_URL` to `https://pythonessprogrammer.com/newsletter/your-slug`.

**UP NEXT section:** set `UP_NEXT_HTML` when you have upcoming content. Leave empty when skipping.

All templates include `{{{RESEND_UNSUBSCRIBE_URL}}}` in the footer automatically.

### Per-send workflow

1. Resend → **Broadcasts** → **Create broadcast**.
2. Choose the template alias above.
3. Fill template variables for this send.
4. Select your newsletter segment (`RESEND_NEWSLETTER_SEGMENT_ID`).
5. Review and send.

## Analytics

- **Email:** Resend broadcast stats (opens, clicks, bounces).
- **Site:** existing Hotjar or add Umami on `/newsletter/*` if you want page views.

## Multi-site Resend account

Use one Resend account with **separate segments** and **verified domains** per site. Each Netlify project gets its own `RESEND_NEWSLETTER_SEGMENT_ID`.

## Signup URL (Resend)

Canonical signup page (use in emails, link-in-bio, and issue headers):

`https://pythonessprogrammer.com/newsletter/subscribe`

Optional query: `?source=issue-slug` or UTM params; passed through to the subscribe API as `source`.

Exported issue HTML still containing Beehiiv `?modal=signup` or `/subscribe` links is rewritten at render time in `normalizeNewsletterBodyHtml`.

## Old Beehiiv URLs

On the **newsletter** host (`newsletter.pythonessprogrammer.com`), add redirect rules:

```
/p/*  https://pythonessprogrammer.com/newsletter/:splat  301
/?modal=signup  https://pythonessprogrammer.com/newsletter/subscribe  301
/subscribe  https://pythonessprogrammer.com/newsletter/subscribe  301
```

Configure in Netlify for that subdomain or in Beehiiv web settings.

## Code map

| Piece | Path |
|-------|------|
| Archive MDX loader | `src/lib/newsletter/mdx.ts` |
| Subscribe page | `src/app/newsletter/subscribe/page.tsx` |
| Subscribe API | `src/app/api/newsletter/subscribe/route.ts` |
| Resend contacts | `src/lib/resend/newsletter.ts` |
| Broadcast template shell | `src/lib/resend/templates/shell.ts` |
| Broadcast template definitions | `src/lib/resend/templates/definitions.ts` |
| Template setup script | `scripts/resend/create-broadcast-templates.js` |
| Template IDs (generated) | `config/resend-templates.json` |
| Export script | `scripts/export-beehiiv-archive.js` |
| Image migration | `scripts/migrate-beehiiv-images.js` (`npm run migrate-beehiiv-images`) |
| Link & PDF migration | `scripts/migrate-beehiiv-links.js` (`npm run migrate-beehiiv-links`) |
| Signup UI | `src/components/NewsletterSubscribeForm.tsx` |
