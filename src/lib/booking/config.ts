/**
 * Cal.com → Resend booking automation is **dormant by default**.
 * Service emails run through Cal.com workflows (see docs/cal-com-client-workflows.md).
 *
 * Set BOOKING_WEBHOOK_ENABLED=true only when intentionally running the webhook
 * integration (e.g. a future project without Cal.com guest email verification).
 */
export const isBookingWebhookEnabled = (): boolean =>
  process.env.BOOKING_WEBHOOK_ENABLED === 'true'
