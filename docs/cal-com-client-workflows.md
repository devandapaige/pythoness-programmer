# Cal.com client workflows (active)

Service booking emails for Software Psychic sessions run through **Cal.com’s built-in confirmation emails and Workflows** — not the site’s Resend webhook integration.

**Why:** Cal.com requires guests to verify email through its own booking flow. Keeping confirmations, reminders, and follow-ups inside Cal.com avoids fighting that system and duplicate/confusing mail.

**Line-by-line setup:** **[`cal-com-workflows-setup-line-by-line.md`](./cal-com-workflows-setup-line-by-line.md)** — click-by-click with paste-ready subject/body for all 11 workflows.

**Booking links** stay on Cal.com (see [`src/config/booking.ts`](../src/config/booking.ts)). Event descriptions and intake questions: [`src/docs/Cal.com Events Copy Guide.md`](../src/docs/Cal.com%20Events%20Copy%20Guide.md).

---

## Turn off the site webhook (important)

If you registered a webhook during the Resend experiment, **delete or disable it** so you do not get duplicate emails if automation is re-enabled later:

Cal.com → **Settings → Developer → Webhooks** → remove  
`https://www.pythonessprogrammer.com/api/cal/webhook`

On Netlify, leave **`BOOKING_WEBHOOK_ENABLED` unset** (or `false`). The route stays in the codebase but returns immediately without sending mail.

You can remove `CAL_WEBHOOK_SECRET`, Upstash vars, and `BOOKING_ADMIN_SECRET` from Netlify unless you plan to re-enable the experiment soon. Keep **`RESEND_API_KEY`** — still used for store downloads and newsletter contacts.

---

## Setup overview

For each event type (`async`, `20min`, `60min`):

1. **Default confirmation emails** — ON (Cal.com system emails at booking).
2. **Workflows** — add reminders and follow-ups per tier below.
3. **Event copy** — match the site ($75 / $95 / $255, reflection language).

Do **not** enable both Cal.com workflows and the site webhook (`BOOKING_WEBHOOK_ENABLED=true`).

---

## Step 1: Default emails (per event type)

For each event → **Advanced** (bottom of event settings):

- Leave **default confirmation emails for attendees** enabled (do not disable).
- Use the **Confirmation / thank-you message** and **Reminder message** fields in the event copy guide where Cal.com exposes them on the event type.

Paste confirmation copy from the [Cal.com Events Copy Guide](../src/docs/Cal.com%20Events%20Copy%20Guide.md) (sections for async, 20min, 60min).

---

## Step 2: Workflows (left sidebar → Workflows)

**Full click-by-click guide:** [`cal-com-workflows-setup-line-by-line.md`](./cal-com-workflows-setup-line-by-line.md) (11 workflows + async manual delivery).

Summary below — use the line-by-line doc when building in Cal.com.

---

### Async (`async`) — $75

| Trigger | Timing | Email purpose | Suggested copy |
|---------|--------|---------------|----------------|
| Event is booked | Immediately | *(Optional if default confirmation is enough)* | Reinforce: slot = **video delivery by email**, not a live meeting. |
| Before event starts | 36–48 hours before | Intake reminder | Reminder: Your Async video will arrive by {EVENT_TIME}. If intake isn't complete yet, please finish it so I can record on time. |
| *(Manual)* | When you send the video | Delivery | **Send from Cal.com booking page, your email, or a one-off workflow is not ideal for manual send** — use your normal process: email the private link when the recording is ready. Optional: duplicate the delivery copy from the Events Copy Guide. |
| After event ends | 5–7 days after | Follow-up nudge | Hope the video helped. Live 20-minute and 60-minute sessions are on the site if you want to continue in conversation. https://cal.com/pythoness |

**Async delivery note:** Cal.com cannot know when your Loom/Drive link is ready. Keep **video delivery as a manual email** (or Cal.com “email attendee” from the booking record) when the recording is done.

---

### Live 20 min (`20min`) — $95

| Trigger | Timing | Suggested copy |
|---------|--------|----------------|
| Before event starts | 24 hours | Reminder: Your 20-minute live reading is tomorrow at {EVENT_TIME}. We'll start with a tarot pull. No prep needed. |
| Before event starts | 1 hour | Your session is in 1 hour. See you soon. |
| After event ends | Immediately | Thank you for today's session. I hope the reflection landed somewhere useful. |
| After event ends | 1–2 days | Checking in after our session. Live sessions are on https://cal.com/pythoness if you want to continue in conversation. |

---

### Deep 60 min (`60min`) — $255

Same as live 20, plus:

| Trigger | Timing | Suggested copy |
|---------|--------|----------------|
| Before event starts | 24 hours | Reminder: Your 60-minute deep dive is tomorrow at {EVENT_TIME}. We'll start with a tarot pull. Optional 20-minute follow-up within 30 days is available when you're ready. |
| Before event starts | 1 hour | Your deep dive is in 1 hour. See you soon. |
| After event ends | Immediately | Thank you — plus reminder: optional 20-minute follow-up within 30 days if you want to check in on what's landing. |
| After event ends | 25–28 days | A few days left to use your optional 20-minute follow-up if you want to check in. Book: https://cal.com/pythoness/20min |

---

## Step 3: Verify slugs and pricing

| Event | Slug | Price |
|-------|------|-------|
| Async Reflection | `async` | $75 |
| Live 20 min | `20min` | $95 |
| Deep 60 min | `60min` | $255 |

---

## Testing (Cal.com-native)

1. Book **async** with your own email → Cal.com confirmation arrives → guest verification flow works as Cal expects.
2. Check **Workflows** ran (reminder scheduled in Cal.com if visible).
3. **Cancel** a test booking → Cal.com cancellation email to guest.
4. Repeat spot-check for **20min** if you use live sessions soon.

---

## Checklist

- [ ] Site webhook **removed** from Cal.com Developer → Webhooks
- [ ] `BOOKING_WEBHOOK_ENABLED` **not** set to `true` on Netlify
- [ ] Default **confirmation emails enabled** for guests on all three event types
- [ ] **Workflows** created per tier (reminders + follow-ups)
- [ ] **Async** workflow/reminder copy says **video delivered by [time]**, not “meeting at [time]”
- [ ] **Prices** in Cal.com match site: $75 / $95 / $255
- [ ] **Affiliate** hidden `ref` field on all three types (see Events Copy Guide)

---

## Related docs

| Doc | Purpose |
|-----|---------|
| [`src/docs/Cal.com Events Copy Guide.md`](../src/docs/Cal.com%20Events%20Copy%20Guide.md) | Event descriptions, intake questions, confirmation snippets |
| [`docs/booking-email-workflows-resend-archived.md`](./booking-email-workflows-resend-archived.md) | Dormant Cal.com → Resend automation (future projects) |
