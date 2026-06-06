import { createHmac } from 'node:crypto'
import { verifyCalWebhookSignature } from '@/lib/booking/verify'
import { parseBookingEvent, resolveServiceTier } from '@/lib/booking/parse'
import {
  offsetAfterStart,
  offsetFromStart,
  REMINDER_OFFSETS,
} from '@/lib/booking/scheduling'
import type { CalWebhookEvent } from '@/lib/booking/types'

describe('verifyCalWebhookSignature', () => {
  const secret = 'test-webhook-secret'
  const body = JSON.stringify({ triggerEvent: 'BOOKING_PAID', payload: { uid: 'abc' } })

  const sign = (payload: string): string =>
    createHmac('sha256', secret).update(payload).digest('hex')

  it('accepts a valid signature', () => {
    expect(verifyCalWebhookSignature(body, sign(body), secret)).toBe(true)
  })

  it('rejects a tampered payload', () => {
    expect(verifyCalWebhookSignature(body, sign('{"tampered":true}'), secret)).toBe(false)
  })

  it('rejects a missing signature', () => {
    expect(verifyCalWebhookSignature(body, null, secret)).toBe(false)
  })
})

describe('resolveServiceTier', () => {
  it('maps known Cal.com slugs', () => {
    expect(resolveServiceTier('async')).toBe('async')
    expect(resolveServiceTier('20min')).toBe('live20')
    expect(resolveServiceTier('60min')).toBe('deep60')
  })

  it('returns null for unknown slugs', () => {
    expect(resolveServiceTier('tech30')).toBeNull()
    expect(resolveServiceTier(undefined)).toBeNull()
  })
})

describe('parseBookingEvent', () => {
  const baseEvent: CalWebhookEvent = {
    triggerEvent: 'BOOKING_PAID',
    payload: {
      uid: 'booking-123',
      type: '20min',
      startTime: '2026-06-10T18:00:00.000Z',
      endTime: '2026-06-10T18:20:00.000Z',
      title: '20-Minute Live Reading',
      location: 'https://meet.example.com/room',
      attendees: [
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
        },
      ],
      responses: {
        pronouns: { value: 'they/them' },
      },
    },
  }

  it('parses wrapped booking payloads', () => {
    const booking = parseBookingEvent(baseEvent)

    expect(booking).toMatchObject({
      uid: 'booking-123',
      tier: 'live20',
      attendeeEmail: 'jane@example.com',
      pronouns: 'they/them',
      meetingLink: 'https://meet.example.com/room',
    })
  })

  it('parses flat MEETING_ENDED payloads', () => {
    const booking = parseBookingEvent({
      triggerEvent: 'MEETING_ENDED',
      uid: 'booking-456',
      type: 'async',
      startTime: '2026-06-12T15:00:00.000Z',
      endTime: '2026-06-12T15:20:00.000Z',
      attendees: [{ email: 'async@example.com', name: 'Alex' }],
    })

    expect(booking?.tier).toBe('async')
    expect(booking?.attendeeEmail).toBe('async@example.com')
  })

  it('returns null when required fields are missing', () => {
    expect(
      parseBookingEvent({
        triggerEvent: 'BOOKING_PAID',
        payload: { uid: 'x', type: 'unknown-slug' },
      })
    ).toBeNull()
  })
})

describe('scheduling offsets', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-06-01T12:00:00.000Z'))
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('schedules 24h and 1h reminders before start', () => {
    const start = new Date('2026-06-10T18:00:00.000Z')

    const reminder24h = offsetFromStart(start, REMINDER_OFFSETS.live24h)
    const reminder1h = offsetFromStart(start, REMINDER_OFFSETS.live1h)

    expect(reminder24h?.toISOString()).toBe('2026-06-09T18:00:00.000Z')
    expect(reminder1h?.toISOString()).toBe('2026-06-10T17:00:00.000Z')
  })

  it('skips offsets that would land in the past', () => {
    const start = new Date('2026-06-01T12:30:00.000Z')

    expect(offsetFromStart(start, REMINDER_OFFSETS.live24h)).toBeNull()
  })

  it('schedules post-session follow-up after end', () => {
    const end = new Date('2026-06-10T19:00:00.000Z')
    const followUp = offsetAfterStart(end, REMINDER_OFFSETS.postSession36h)

    expect(followUp?.toISOString()).toBe('2026-06-12T07:00:00.000Z')
  })
})
