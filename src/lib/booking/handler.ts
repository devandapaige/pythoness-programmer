import 'server-only'
import type { CalTriggerEvent, CalWebhookEvent } from '@/lib/booking/types'
import { parseBookingEvent } from '@/lib/booking/parse'
import {
  handleBookingCancelled,
  handleBookingConfirmed,
  handleBookingRescheduled,
  handleMeetingEnded,
} from '@/lib/booking/workflows'

export const processCalWebhookEvent = async (
  event: CalWebhookEvent
): Promise<{ handled: boolean; message?: string }> => {
  const booking = parseBookingEvent(event)

  if (!booking) {
    return { handled: false, message: 'Unsupported or incomplete booking payload.' }
  }

  switch (event.triggerEvent as CalTriggerEvent) {
    case 'BOOKING_PAID':
    case 'BOOKING_CREATED':
      await handleBookingConfirmed(booking)
      return { handled: true }

    case 'BOOKING_CANCELLED':
      await handleBookingCancelled(booking)
      return { handled: true }

    case 'BOOKING_RESCHEDULED':
      await handleBookingRescheduled(booking)
      return { handled: true }

    case 'MEETING_ENDED':
      await handleMeetingEnded(booking)
      return { handled: true }

    default:
      return { handled: false, message: `Ignored trigger: ${event.triggerEvent}` }
  }
}
