# Pythoness Perspective: on-site archive + Resend

Newsletter issues live in the repo at `src/content/newsletter/posts/*.mdx` and render at `/newsletter/[slug]`. Subscribers are managed in **Resend** (segment + broadcasts). Beehiiv is only needed once to export the backlog.

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

## Old Beehiiv URLs

On the **newsletter** host (`newsletter.pythonessprogrammer.com`), add a redirect rule:

```
/p/*  https://pythonessprogrammer.com/newsletter/:splat  301
```

Configure in Netlify for that subdomain or in Beehiiv web settings.

## Code map

| Piece | Path |
|-------|------|
| Archive MDX loader | `src/lib/newsletter/mdx.ts` |
| Subscribe API | `src/app/api/newsletter/subscribe/route.ts` |
| Resend contacts | `src/lib/resend/newsletter.ts` |
| Export script | `scripts/export-beehiiv-archive.js` |
| Signup UI | `src/components/NewsletterSubscribeForm.tsx` |
