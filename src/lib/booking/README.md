# Booking automation (Cal.com → Resend)

**Dormant by default.** Production service emails use Cal.com workflows — see [`docs/cal-com-client-workflows.md`](../../../docs/cal-com-client-workflows.md).

This module sends branded booking emails via Resend when Cal.com webhooks fire. Enable with `BOOKING_WEBHOOK_ENABLED=true` only for projects that do not rely on Cal.com guest email verification.

Archived operator doc: [`docs/booking-email-workflows-resend-archived.md`](../../../docs/booking-email-workflows-resend-archived.md).
