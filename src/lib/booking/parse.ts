import type {
  CalBookingPayload,
  CalWebhookEvent,
  ParsedBooking,
  ServiceTier,
} from '@/lib/booking/types'

const TIER_SLUGS: Record<string, ServiceTier> = {
  async: 'async',
  '20min': 'live20',
  '60min': 'deep60',
}

export const resolveServiceTier = (slug: string | undefined): ServiceTier | null => {
  if (!slug) {
    return null
  }

  const normalized = slug.trim().toLowerCase()

  if (TIER_SLUGS[normalized]) {
    return TIER_SLUGS[normalized]
  }

  if (normalized.includes('async')) {
    return 'async'
  }

  if (normalized.includes('60')) {
    return 'deep60'
  }

  if (normalized.includes('20')) {
    return 'live20'
  }

  return null
}

const extractPayload = (event: CalWebhookEvent): CalBookingPayload => {
  if (event.payload) {
    return event.payload
  }

  return {
    uid: event.uid,
    type: event.type,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
    title: event.title,
    attendees: event.attendees,
    organizer: event.organizer,
    metadata: event.metadata,
  }
}

const readResponseValue = (
  responses: CalBookingPayload['responses'],
  keys: string[]
): string | undefined => {
  if (!responses) {
    return undefined
  }

  for (const key of keys) {
    const entry = responses[key]
    if (entry?.value !== undefined && entry.value !== null) {
      const value = String(entry.value).trim()
      if (value) {
        return value
      }
    }
  }

  return undefined
}

export const parseBookingEvent = (event: CalWebhookEvent): ParsedBooking | null => {
  const payload = extractPayload(event)
  const tier = resolveServiceTier(payload.type)

  if (!tier || !payload.uid || !payload.startTime || !payload.endTime) {
    return null
  }

  const attendee = payload.attendees?.[0]
  const attendeeEmail = attendee?.email?.trim()

  if (!attendeeEmail) {
    return null
  }

  const attendeeName =
    attendee?.name?.trim() ||
    [attendee?.firstName, attendee?.lastName].filter(Boolean).join(' ').trim() ||
    'there'

  const attendeeTimeZone = attendee?.timeZone?.trim() || 'America/New_York'
  const pronouns = readResponseValue(payload.responses, [
    'pronouns',
    'what_pronouns_should_i_use_for_you_in_your_reading_and_emails',
  ])

  const meetingLink =
    payload.metadata?.videoCallUrl?.trim() ||
    (payload.location?.startsWith('http') ? payload.location.trim() : undefined)

  return {
    uid: payload.uid,
    tier,
    attendeeName,
    attendeeEmail,
    attendeeTimeZone,
    pronouns,
    startTime: new Date(payload.startTime),
    endTime: new Date(payload.endTime),
    meetingLink,
    eventTitle: payload.eventTitle ?? payload.title ?? 'Software Psychic session',
  }
}
