# Store webhook testing

This is a quick local checklist for testing paid-store fulfillment with Stripe CLI.

## Prereqs

- App runs locally (`npm run dev`)
- Stripe CLI is installed
- `.env.local` has at least:
  - `STRIPE_SECRET_KEY`
  - `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- Optional for full fulfillment:
  - `RESEND_API_KEY`
  - `STORE_EMAIL_FROM`
  - `RESEND_NEWSLETTER_SEGMENT_ID` (adds buyer to newsletter segment)

## Run Stripe listener

1. Login if needed:

```bash
stripe login
```

2. Forward checkout completion events:

```bash
stripe listen --events checkout.session.completed --forward-to localhost:3000/api/store/webhook
```

3. Copy the signing secret (`whsec_...`) from CLI output into `.env.local`:

```bash
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxx
```

Restart the dev server after updating `.env.local`.

## Test full paid flow

1. Open `http://localhost:3000/store`.
2. Buy the paid product with a Stripe test card (`4242 4242 4242 4242`).
3. Confirm redirect to `/store/success?session_id=...`.
4. Confirm Stripe CLI logs `checkout.session.completed`.
5. Confirm app handled `POST /api/store/webhook` successfully.
6. Confirm:
   - success-page download button works
   - transactional email arrives (if `RESEND_API_KEY` is set)
   - emailed link uses `/api/store/paid-download?...` and resolves

## Quick webhook-only check

You can trigger a synthetic event:

```bash
stripe trigger checkout.session.completed
```

This verifies webhook plumbing, but real checkout is preferred for end-to-end validation because it carries your app's metadata and redirect/session behavior.
