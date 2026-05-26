# Newsletter archive (MDX)

Issues are stored here as `{slug}.mdx` files. Populate once from Beehiiv:

```bash
node scripts/export-beehiiv-archive.js
```

Requires `BEEHIIV_API_KEY` (with `posts:read`) and `BEEHIIV_PUBLICATION_ID` in `.env.local`.

New issues: add an MDX file manually after publishing on the site, then send via Resend Broadcast.
