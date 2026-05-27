# Newsletter archive (MDX)

Issues are stored here as `{slug}.mdx` files. Populate once from Beehiiv:

```bash
npm run export-newsletter
```

Requires `BEEHIIV_API_KEY` (with `posts:read`) and `BEEHIIV_PUBLICATION_ID` in `.env.local`.

After export, self-host images (downloads Beehiiv assets and rewrites URLs in MDX):

```bash
npm run migrate-beehiiv-images
npm run migrate-beehiiv-links
```

Assets live under `public/newsletter/assets/{uuid}/`. Use site-relative paths in frontmatter and inline HTML, e.g. `image: "/newsletter/assets/..."`.

New issues: add an MDX file manually, place images in `public/newsletter/assets/` (or `public/images/` for shared assets), then send via Resend Broadcast.
