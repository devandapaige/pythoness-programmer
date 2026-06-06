import { isBookingWebhookEnabled } from '@/lib/booking/config'

describe('isBookingWebhookEnabled', () => {
  const original = process.env.BOOKING_WEBHOOK_ENABLED

  afterEach(() => {
    if (original === undefined) {
      delete process.env.BOOKING_WEBHOOK_ENABLED
    } else {
      process.env.BOOKING_WEBHOOK_ENABLED = original
    }
  })

  it('is false by default', () => {
    delete process.env.BOOKING_WEBHOOK_ENABLED
    expect(isBookingWebhookEnabled()).toBe(false)
  })

  it('is true only when explicitly set to true', () => {
    process.env.BOOKING_WEBHOOK_ENABLED = 'true'
    expect(isBookingWebhookEnabled()).toBe(true)

    process.env.BOOKING_WEBHOOK_ENABLED = 'false'
    expect(isBookingWebhookEnabled()).toBe(false)
  })
})
