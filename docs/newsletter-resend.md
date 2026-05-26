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
5. Deploy. You can cancel Beehiiv after subscribers are in Resend.

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
2. Deploy.
3. Resend → **Broadcasts** → new campaign to your segment:
   - Short teaser + link: `https://pythonessprogrammer.com/newsletter/your-slug`
   - Include `{{{RESEND_UNSUBSCRIBE_URL}}}` in the template.

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
| Export script | `scripts/export-beehiiv-archive.js` |
| Signup UI | `src/components/NewsletterSubscribeForm.tsx` |
