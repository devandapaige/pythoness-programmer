import { NextResponse } from 'next/server'
import { isBookingWebhookEnabled } from '@/lib/booking/config'
import { getBookingSchedule } from '@/lib/booking/schedule-store'
import { handleAsyncVideoDelivery } from '@/lib/booking/workflows'
import type { ParsedBooking } from '@/lib/booking/types'
import { sanitizeString } from '@/lib/validation'

export const dynamic = 'force-dynamic'

interface DeliverAsyncBody {
  bookingUid?: string
  videoUrl?: string
  attendeeEmail?: string
}

const getAdminSecret = (): string => {
  const secret = process.env.BOOKING_ADMIN_SECRET

  if (!secret) {
    throw new Error('BOOKING_ADMIN_SECRET is not configured')
  }

  return secret
}

const isAuthorized = (request: Request): boolean => {
  const provided = request.headers.get('authorization')
  const expected = `Bearer ${getAdminSecret()}`

  return provided === expected
}

export async function POST(request: Request) {
  if (!isBookingWebhookEnabled()) {
    return NextResponse.json(
      {
        error:
          'Booking email automation is disabled. Send async delivery via Cal.com workflow or email.',
      },
      { status: 503 }
    )
  }

  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const body = (await request.json()) as DeliverAsyncBody
    const bookingUid = sanitizeString(body.bookingUid ?? '')
    const videoUrl = sanitizeString(body.videoUrl ?? '')
    const attendeeEmail = sanitizeString(body.attendeeEmail ?? '')

    if (!bookingUid || !videoUrl || !attendeeEmail) {
      return NextResponse.json(
        { error: 'bookingUid, videoUrl, and attendeeEmail are required.' },
        { status: 400 }
      )
    }

    if (!videoUrl.startsWith('http://') && !videoUrl.startsWith('https://')) {
      return NextResponse.json({ error: 'videoUrl must be an absolute URL.' }, { status: 400 })
    }

    const stored = await getBookingSchedule(bookingUid)

    const booking: ParsedBooking = stored
      ? {
          uid: bookingUid,
          tier: stored.tier,
          attendeeName: stored.attendeeName,
          attendeeEmail: stored.attendeeEmail,
          attendeeTimeZone: stored.attendeeTimeZone,
          startTime: new Date(stored.startTime),
          endTime: new Date(stored.endTime),
          eventTitle: 'Async Reflection',
        }
      : {
          uid: bookingUid,
          tier: 'async',
          attendeeName: attendeeEmail.split('@')[0] ?? 'there',
          attendeeEmail,
          attendeeTimeZone: 'America/New_York',
          startTime: new Date(),
          endTime: new Date(),
          eventTitle: 'Async Reflection',
        }

    const sent = await handleAsyncVideoDelivery(booking, videoUrl)

    if (!sent) {
      return NextResponse.json(
        { error: 'Delivery email was not sent. Check Resend configuration and logs.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ sent: true, bookingUid })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Async delivery processing error.'

    return NextResponse.json({ error: message }, { status: 400 })
  }
}
