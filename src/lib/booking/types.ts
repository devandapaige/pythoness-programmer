export type ServiceTier = 'async' | 'live20' | 'deep60'

export type CalTriggerEvent =
  | 'BOOKING_CREATED'
  | 'BOOKING_PAID'
  | 'BOOKING_CANCELLED'
  | 'BOOKING_RESCHEDULED'
  | 'MEETING_ENDED'
  | 'BOOKING_REQUESTED'
  | 'BOOKING_REJECTED'
  | 'MEETING_STARTED'

export interface CalAttendee {
  name?: string
  email?: string
  timeZone?: string
  firstName?: string
  lastName?: string
}

export interface CalBookingPayload {
  uid?: string
  bookingId?: number
  title?: string
  type?: string
  startTime?: string
  endTime?: string
  location?: string
  status?: string
  price?: number
  currency?: string
  length?: number
  metadata?: {
    videoCallUrl?: string
  }
  organizer?: CalAttendee
  attendees?: CalAttendee[]
  responses?: Record<string, { label?: string; value?: unknown }>
  eventTitle?: string
}

export interface CalWebhookEvent {
  triggerEvent: CalTriggerEvent
  createdAt?: string
  payload?: CalBookingPayload
  uid?: string
  type?: string
  startTime?: string
  endTime?: string
  location?: string
  title?: string
  attendees?: CalAttendee[]
  organizer?: CalAttendee
  metadata?: {
    videoCallUrl?: string
  }
}

export interface ParsedBooking {
  uid: string
  tier: ServiceTier
  attendeeName: string
  attendeeEmail: string
  attendeeTimeZone: string
  pronouns?: string
  startTime: Date
  endTime: Date
  meetingLink?: string
  eventTitle: string
}

export interface BookingScheduleRecord {
  scheduledEmailIds: string[]
  tier: ServiceTier
  startTime: string
  endTime: string
  attendeeEmail: string
  attendeeName: string
  attendeeTimeZone: string
}

export type BookingEmailKind =
  | 'confirmation'
  | 'scheduled_reminders'
  | 'post_session'
  | 'post_session_followup_scheduled'
  | 'async_delivery'
  | 'async_followup_scheduled'
