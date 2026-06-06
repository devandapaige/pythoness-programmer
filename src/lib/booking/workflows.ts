import 'server-only'
import {
  cancelScheduledBookingEmails,
  sendBookingEmail,
} from '@/lib/booking/email'
import { hasSentBookingEmail, markBookingEmailSent, clearBookingEmailSent } from '@/lib/booking/idempotency'
import type { ParsedBooking } from '@/lib/booking/types'
import {
  buildAsyncDeliveryReminderEmail,
  buildAsyncDeliveryEmail,
  buildAsyncPostDeliveryFollowUpEmail,
  buildCancellationEmail,
  buildConfirmationEmail,
  buildDeep60FollowUpNudgeEmail,
  buildLiveReminder1hEmail,
  buildLiveReminder24hEmail,
  buildPostSessionFollowUpEmail,
  buildPostSessionThankYouEmail,
  buildRescheduleEmail,
} from '@/lib/booking/templates'
import {
  deleteBookingSchedule,
  getBookingSchedule,
  saveBookingSchedule,
} from '@/lib/booking/schedule-store'

import {
  offsetAfterStart,
  offsetFromStart,
  REMINDER_OFFSETS,
} from '@/lib/booking/scheduling'

const scheduleEmail = async (
  booking: ParsedBooking,
  build: () => { subject: string; html: string },
  scheduledAt: Date | null
): Promise<string | null> => {
  if (!scheduledAt) {
    return null
  }

  const content = build()
  const result = await sendBookingEmail({
    to: booking.attendeeEmail,
    subject: content.subject,
    html: content.html,
    scheduledAt,
  })

  return result.sent ? result.emailId ?? null : null
}

const sendImmediateEmail = async (
  booking: ParsedBooking,
  build: () => { subject: string; html: string }
): Promise<boolean> => {
  const content = build()
  const result = await sendBookingEmail({
    to: booking.attendeeEmail,
    subject: content.subject,
    html: content.html,
  })

  return result.sent
}

export const scheduleTierReminders = async (
  booking: ParsedBooking
): Promise<string[]> => {
  const scheduledIds: string[] = []

  if (booking.tier === 'async') {
    const reminderAt = offsetFromStart(booking.startTime, REMINDER_OFFSETS.async36h)
    const id = await scheduleEmail(
      booking,
      () => buildAsyncDeliveryReminderEmail(booking),
      reminderAt
    )
    if (id) {
      scheduledIds.push(id)
    }

    return scheduledIds
  }

  const reminder24h = offsetFromStart(booking.startTime, REMINDER_OFFSETS.live24h)
  const reminder1h = offsetFromStart(booking.startTime, REMINDER_OFFSETS.live1h)

  const id24h = await scheduleEmail(
    booking,
    () =>
      buildLiveReminder24hEmail(
        booking,
        booking.tier === 'deep60' ? 'deep60' : 'live20'
      ),
    reminder24h
  )
  if (id24h) {
    scheduledIds.push(id24h)
  }

  const id1h = await scheduleEmail(
    booking,
    () => buildLiveReminder1hEmail(booking),
    reminder1h
  )
  if (id1h) {
    scheduledIds.push(id1h)
  }

  if (booking.tier === 'deep60') {
    const nudgeAt = offsetAfterStart(booking.startTime, REMINDER_OFFSETS.deep60Nudge25d)
    const nudgeId = await scheduleEmail(
      booking,
      () => buildDeep60FollowUpNudgeEmail(booking),
      nudgeAt
    )
    if (nudgeId) {
      scheduledIds.push(nudgeId)
    }
  }

  return scheduledIds
}

export const cancelBookingScheduledEmails = async (uid: string): Promise<void> => {
  const existing = await getBookingSchedule(uid)

  if (!existing?.scheduledEmailIds.length) {
    return
  }

  await cancelScheduledBookingEmails(existing.scheduledEmailIds)
}

export const handleBookingConfirmed = async (
  booking: ParsedBooking
): Promise<void> => {
  const alreadyConfirmed = await hasSentBookingEmail(booking.uid, 'confirmation')

  if (!alreadyConfirmed) {
    const sent = await sendImmediateEmail(booking, () =>
      buildConfirmationEmail(booking)
    )

    if (sent) {
      await markBookingEmailSent(booking.uid, 'confirmation')
    }
  }

  const alreadyScheduled = await hasSentBookingEmail(
    booking.uid,
    'scheduled_reminders'
  )

  if (alreadyScheduled) {
    return
  }

  await cancelBookingScheduledEmails(booking.uid)

  const scheduledEmailIds = await scheduleTierReminders(booking)

  await saveBookingSchedule(booking.uid, {
    scheduledEmailIds,
    tier: booking.tier,
    startTime: booking.startTime.toISOString(),
    endTime: booking.endTime.toISOString(),
    attendeeEmail: booking.attendeeEmail,
    attendeeName: booking.attendeeName,
    attendeeTimeZone: booking.attendeeTimeZone,
  })

  if (scheduledEmailIds.length > 0) {
    await markBookingEmailSent(booking.uid, 'scheduled_reminders')
  }
}

export const handleBookingCancelled = async (
  booking: ParsedBooking
): Promise<void> => {
  await cancelBookingScheduledEmails(booking.uid)
  await deleteBookingSchedule(booking.uid)
  await sendImmediateEmail(booking, () => buildCancellationEmail(booking))
}

export const handleBookingRescheduled = async (
  booking: ParsedBooking
): Promise<void> => {
  await cancelBookingScheduledEmails(booking.uid)
  await deleteBookingSchedule(booking.uid)
  await clearBookingEmailSent(booking.uid, 'scheduled_reminders')
  await clearBookingEmailSent(booking.uid, 'post_session_followup_scheduled')

  await sendImmediateEmail(booking, () => buildRescheduleEmail(booking))

  await handleBookingConfirmed(booking)
}

export const handleMeetingEnded = async (booking: ParsedBooking): Promise<void> => {
  if (booking.tier === 'async') {
    return
  }

  const alreadySent = await hasSentBookingEmail(booking.uid, 'post_session')

  if (!alreadySent) {
    const sent = await sendImmediateEmail(booking, () =>
      buildPostSessionThankYouEmail(booking)
    )

    if (sent) {
      await markBookingEmailSent(booking.uid, 'post_session')
    }
  }

  const followUpAlreadyScheduled = await hasSentBookingEmail(
    booking.uid,
    'post_session_followup_scheduled'
  )

  if (followUpAlreadyScheduled) {
    return
  }

  const followUpAt = offsetAfterStart(booking.endTime, REMINDER_OFFSETS.postSession36h)
  const followUpId = await scheduleEmail(
    booking,
    () => buildPostSessionFollowUpEmail(booking),
    followUpAt
  )

  if (followUpId) {
    const existing = await getBookingSchedule(booking.uid)
    const scheduledEmailIds = [...(existing?.scheduledEmailIds ?? []), followUpId]

    await saveBookingSchedule(booking.uid, {
      scheduledEmailIds,
      tier: booking.tier,
      startTime: booking.startTime.toISOString(),
      endTime: booking.endTime.toISOString(),
      attendeeEmail: booking.attendeeEmail,
      attendeeName: booking.attendeeName,
      attendeeTimeZone: booking.attendeeTimeZone,
    })

    await markBookingEmailSent(booking.uid, 'post_session_followup_scheduled')
  }
}

export const handleAsyncVideoDelivery = async (
  booking: ParsedBooking,
  videoUrl: string
): Promise<boolean> => {
  const sent = await sendImmediateEmail(booking, () =>
    buildAsyncDeliveryEmail(booking, videoUrl)
  )

  if (sent) {
    await markBookingEmailSent(booking.uid, 'async_delivery')
  }

  const followUpAlreadyScheduled = await hasSentBookingEmail(
    booking.uid,
    'async_followup_scheduled'
  )

  if (!followUpAlreadyScheduled) {
    const followUpAt = offsetAfterStart(new Date(), REMINDER_OFFSETS.asyncFollowUp5d)
    const followUpId = await scheduleEmail(
      booking,
      () => buildAsyncPostDeliveryFollowUpEmail(booking),
      followUpAt
    )

    if (followUpId) {
      const existing = await getBookingSchedule(booking.uid)
      const scheduledEmailIds = [...(existing?.scheduledEmailIds ?? []), followUpId]

      await saveBookingSchedule(booking.uid, {
        scheduledEmailIds,
        tier: booking.tier,
        startTime: booking.startTime.toISOString(),
        endTime: booking.endTime.toISOString(),
        attendeeEmail: booking.attendeeEmail,
        attendeeName: booking.attendeeName,
        attendeeTimeZone: booking.attendeeTimeZone,
      })

      await markBookingEmailSent(booking.uid, 'async_followup_scheduled')
    }
  }

  return sent
}
