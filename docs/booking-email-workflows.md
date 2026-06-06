# Booking email workflows (Cal.com + Resend)

Service booking emails for Software Psychic sessions are sent through **Resend**, triggered by **Cal.com webhooks** handled at `/api/cal/webhook`. Cal.com’s built-in booking emails/workflows should stay **disabled** for `async`, `20min`, and `60min` so clients do not receive duplicates.

Copy and timing follow [`src/docs/Cal.com Events Copy Guide.md`](../src/docs/Cal.com%20Events%20Copy%20Guide.md).

## Architecture

1. Client books on [Cal.com](https://cal.com/pythoness).
2. Cal.com POSTs webhook events to `https://www.pythonessprogrammer.com/api/cal/webhook`.
3. The app verifies `x-cal-signature-256`, parses the booking, and sends/schedules branded emails via Resend.
4. Scheduled email IDs are stored in **Upstash Redis** so cancel/reschedule can cancel pending sends.
5. Async **video delivery** is triggered manually via `/api/booking/deliver-async` when the recording is ready.

## Environment variables

Add these in Netlify (Site settings → Environment variables) and in local `.env.local`:

```bash
CAL_WEBHOOK_SECRET=
BOOKING_EMAIL_FROM=Amanda Nelson <sessions@pythonessprogrammer.com>
BOOKING_ADMIN_SECRET=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
RESEND_API_KEY=

NEXT_PUBLIC_BOOKING_HUB=https://cal.com/pythoness
NEXT_PUBLIC_BOOKING_ASYNC=https://cal.com/pythoness/async?
NEXT_PUBLIC_BOOKING_LIVE_20=https://cal.com/pythoness/20min
NEXT_PUBLIC_BOOKING_DEEP_60=https://cal.com/pythoness/60min
```

- **`CAL_WEBHOOK_SECRET`**: Same secret you set when creating the Cal.com webhook.
- **`BOOKING_EMAIL_FROM`**: Must be a verified sender domain in Resend.
- **`BOOKING_ADMIN_SECRET`**: Protects the async delivery endpoint (Bearer token).
- **Upstash**: Create a free Redis database at [upstash.com](https://upstash.com); copy REST URL + token.

If `RESEND_API_KEY` or Upstash is missing, the webhook still returns 200 but emails are skipped (logged in the response message path).

## Cal.com setup checklist

### 1. Register webhook

Cal.com → **Settings → Developer → Webhooks** → Add webhook:

- **URL:** `https://www.pythonessprogrammer.com/api/cal/webhook`
- **Secret:** generate a strong value → copy to `CAL_WEBHOOK_SECRET`
- **Events:**
  - `BOOKING_CREATED`
  - `BOOKING_PAID`
  - `BOOKING_CANCELLED`
  - `BOOKING_RESCHEDULED`
  - `MEETING_ENDED`

Subscribe at the **user** level (or per event type if you prefer scoped webhooks).

### 2. Disable Cal.com native emails/workflows

For each event type (`async`, `20min`, `60min`):

- Turn off Cal.com **Workflows** for confirmation, reminder, and follow-up emails.
- Resend is now the single source of service emails.

### 3. Verify pricing and slugs

| Event | Slug | Price |
|-------|------|-------|
| Async Reflection | `async` | $75 |
| Live 20 min | `20min` | $95 |
| Deep 60 min | `60min` | $255 |

Slugs must match what the webhook sends in `payload.type` so the app routes to the correct email workflow.

## Email workflows

### Async (`async`)

| When | Email |
|------|-------|
| Booking confirmed | Confirmation — delivery deadline, not a live meeting |
| 36h before delivery | Intake reminder |
| Manual delivery | Video link email |
| 5 days after delivery | Optional follow-up nudge |

### Live 20 (`20min`)

| When | Email |
|------|-------|
| Booking confirmed | Confirmation + meeting link |
| 24h before | Reminder |
| 1h before | Reminder |
| Meeting ended | Thank-you |
| 36h after session | Follow-up |

### Deep 60 (`60min`)

Same as live 20, plus:

| When | Email |
|------|-------|
| 25 days after session | Optional follow-up window nudge |

### All tiers

- **Cancelled:** cancel pending scheduled emails + cancellation notice
- **Rescheduled:** cancel old scheduled emails + reschedule notice + re-schedule reminders

## Manual async video delivery

When the recording is ready, send the delivery email:

```bash
curl -X POST 'https://www.pythonessprogrammer.com/api/booking/deliver-async' \
  -H 'Authorization: Bearer YOUR_BOOKING_ADMIN_SECRET' \
  -H 'Content-Type: application/json' \
  -d '{
    "bookingUid": "cal-booking-uid-from-cal-dashboard",
    "videoUrl": "https://your-private-video-link",
    "attendeeEmail": "client@example.com"
  }'
```

If the booking exists in Redis from the webhook, name/timezone are pulled from stored data. Otherwise pass `attendeeEmail` and the app uses sensible defaults.

## Testing after deploy

1. Create a test booking (or use Cal.com test mode) for each tier.
2. Check **Resend → Emails** for immediate confirmation.
3. Check **Resend → Scheduled** for reminder rows.
4. Cancel or reschedule a test booking and confirm scheduled rows are cancelled and replacement emails send.
5. For async, call `/api/booking/deliver-async` with a test video URL.

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| 401 from webhook | `CAL_WEBHOOK_SECRET` mismatch with Cal.com |
| No emails at all | `RESEND_API_KEY` missing or unverified `BOOKING_EMAIL_FROM` |
| Duplicate confirmations | Cal.com native workflows still enabled |
| Reminders not cancelled on reschedule | Upstash env vars missing |
| Wrong workflow (async vs live) | Event slug in Cal.com doesn’t match `async` / `20min` / `60min` |

## Code map

| Path | Role |
|------|------|
| `src/app/api/cal/webhook/route.ts` | Webhook entry |
| `src/app/api/booking/deliver-async/route.ts` | Manual async delivery |
| `src/lib/booking/workflows.ts` | Email orchestration |
| `src/lib/booking/templates.ts` | Branded HTML + copy |
| `src/lib/booking/schedule-store.ts` | Upstash booking state |
| `src/config/booking.ts` | Public Cal.com URLs |
