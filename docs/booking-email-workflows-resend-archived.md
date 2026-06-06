# Booking email workflows — Cal.com + Resend (archived)

> **Status: Dormant.** Service emails for Software Psychic sessions are handled in **Cal.com workflows**. See **[`cal-com-client-workflows.md`](./cal-com-client-workflows.md)** for the active setup.
>
> This integration remains in the codebase for a **future project** where Cal.com guest email verification is not a blocker. Do not register the Cal.com webhook or set `BOOKING_WEBHOOK_ENABLED=true` while using Cal.com-native client mail.

---

## Why archived

Cal.com requires guests to verify email through its internal booking flow. Running parallel confirmation/reminder mail via Resend + webhooks conflicted with that requirement. The experiment confirmed Resend scheduling, Upstash state, and webhook verification work — configuration can be reused elsewhere.

---

## Re-enabling (future project only)

1. Set Netlify env vars:

```bash
BOOKING_WEBHOOK_ENABLED=true
CAL_WEBHOOK_SECRET=          # same secret as Cal.com webhook
BOOKING_EMAIL_FROM=Amanda Nelson <sessions@pythonessprogrammer.com>
BOOKING_ADMIN_SECRET=        # for POST /api/booking/deliver-async
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
RESEND_API_KEY=
```

2. Register Cal.com webhook → `https://www.pythonessprogrammer.com/api/cal/webhook`  
   Events: `BOOKING_CREATED`, `BOOKING_PAID`, `BOOKING_CANCELLED`, `BOOKING_RESCHEDULED`, `MEETING_ENDED`

3. **Disable** Cal.com default guest emails and workflows for affected event types (avoid duplicates).

4. Redeploy Netlify.

---

## Architecture (reference)

1. Client books on Cal.com.
2. Cal.com POSTs to `/api/cal/webhook` (when `BOOKING_WEBHOOK_ENABLED=true`).
3. Handler verifies `x-cal-signature-256`, sends/schedules branded emails via Resend.
4. Upstash Redis stores scheduled Resend email IDs for cancel/reschedule.
5. Async video delivery via `POST /api/booking/deliver-async` (Bearer `BOOKING_ADMIN_SECRET`).

Copy spec: [`src/docs/Cal.com Events Copy Guide.md`](../src/docs/Cal.com%20Events%20Copy%20Guide.md) (workflow tables).

---

## Email workflows (when enabled)

### Async (`async`)

| When | Email |
|------|-------|
| Booking confirmed | Confirmation — delivery deadline, not live meeting |
| 36h before delivery | Intake reminder |
| Manual `deliver-async` | Video link email |
| 5 days after delivery | Follow-up nudge |

### Live 20 (`20min`)

Confirmation, 24h + 1h reminders, post-session thank-you, 36h follow-up.

### Deep 60 (`60min`)

Same as live 20, plus 25-day optional follow-up nudge.

---

## Manual async delivery (when enabled)

```bash
curl -X POST 'https://www.pythonessprogrammer.com/api/booking/deliver-async' \
  -H 'Authorization: Bearer YOUR_BOOKING_ADMIN_SECRET' \
  -H 'Content-Type: application/json' \
  -d '{
    "bookingUid": "cal-booking-uid",
    "videoUrl": "https://your-private-video-link",
    "attendeeEmail": "client@example.com"
  }'
```

Returns **503** when `BOOKING_WEBHOOK_ENABLED` is not `true`.

---

## Code map

| Path | Role |
|------|------|
| `src/lib/booking/config.ts` | `BOOKING_WEBHOOK_ENABLED` gate |
| `src/app/api/cal/webhook/route.ts` | Webhook entry (no-op when disabled) |
| `src/app/api/booking/deliver-async/route.ts` | Manual async delivery |
| `src/lib/booking/workflows.ts` | Email orchestration |
| `src/lib/booking/templates.ts` | Branded HTML + copy |
| `src/lib/booking/schedule-store.ts` | Upstash booking state |
| `src/__tests__/lib/booking/booking.test.ts` | Unit tests |

---

## Troubleshooting (when re-enabled)

| Symptom | Likely cause |
|---------|----------------|
| 401 from webhook | `CAL_WEBHOOK_SECRET` mismatch |
| Webhook 200 but no emails | `BOOKING_WEBHOOK_ENABLED` not `true`, or Resend/from-address issue |
| Duplicate confirmations | Cal.com native emails still enabled |
| Reminders not cancelled on reschedule | Upstash env vars missing |
