import type { ParsedBooking, ServiceTier } from '@/lib/booking/types'
import { bookingUrls } from '@/config/booking'
import {
  buildEmailShell,
  buildGreenButton,
  buildShellRow,
  buildTextHeaderBar,
} from '@/lib/resend/templates/shell'
import { EMAIL_COLORS, EMAIL_FONTS } from '@/lib/resend/templates/constants'

const getSiteUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  'https://www.pythonessprogrammer.com'

export const formatBookingDateTime = (
  date: Date,
  timeZone: string
): string =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone,
    timeZoneName: 'short',
  }).format(date)

const greetingName = (booking: ParsedBooking): string => {
  if (booking.pronouns && booking.pronouns.toLowerCase().includes('name only')) {
    return booking.attendeeName.split(' ')[0] ?? booking.attendeeName
  }

  return booking.attendeeName.split(' ')[0] ?? booking.attendeeName
}

const paragraph = (html: string): string =>
  `<p style="margin:0 0 16px 0;font-family:${EMAIL_FONTS};font-size:16px;line-height:1.6;color:${EMAIL_COLORS.bodyText};">${html}</p>`

const buildBookingEmailHtml = ({
  preheader,
  headerTitle,
  headerSubtitle,
  bodyHtml,
}: {
  preheader: string
  headerTitle: string
  headerSubtitle?: string
  bodyHtml: string
}): string =>
  buildEmailShell({
    siteUrl: getSiteUrl(),
    preheader,
    sections: [
      {
        html: buildShellRow(buildTextHeaderBar(headerTitle, headerSubtitle)),
      },
      {
        html: buildShellRow(bodyHtml),
      },
    ],
  })

const tierLabel: Record<ServiceTier, string> = {
  async: 'Async Reflection',
  live20: '20-Minute Live Reading',
  deep60: '60-Minute Deep Dive',
}

export const buildAsyncConfirmationEmail = (booking: ParsedBooking) => {
  const when = formatBookingDateTime(booking.startTime, booking.attendeeTimeZone)
  const name = greetingName(booking)

  const bodyHtml = [
    paragraph(`Hi ${name},`),
    paragraph(
      `You're booked for an <strong>Async Reflection</strong>. The time you selected is when you'll <strong>receive your private video by email</strong>—not a live meeting to join.`
    ),
    paragraph(`<strong>Delivery by:</strong> ${when}`),
    paragraph(
      'If you haven\'t already, please complete the intake so I can record your reading. Watch whenever you\'re ready.'
    ),
    buildGreenButton(bookingUrls.async, 'View async booking details'),
  ].join('')

  return {
    subject: 'You\'re booked — Async Reflection video delivery',
    html: buildBookingEmailHtml({
      preheader: `Your async video will arrive by ${when}.`,
      headerTitle: 'Async Reflection booked',
      headerSubtitle: tierLabel.async,
      bodyHtml,
    }),
  }
}

export const buildLive20ConfirmationEmail = (booking: ParsedBooking) => {
  const when = formatBookingDateTime(booking.startTime, booking.attendeeTimeZone)
  const name = greetingName(booking)
  const meetingLine = booking.meetingLink
    ? paragraph(
        `<strong>Join link:</strong> <a href="${booking.meetingLink}" style="color:${EMAIL_COLORS.greenHyperlink};">${booking.meetingLink}</a>`
      )
    : paragraph('Your meeting link is in your Cal.com confirmation.')

  const bodyHtml = [
    paragraph(`Hi ${name},`),
    paragraph(
      'You\'re booked. We\'ll start and end with a tarot pull. Come as you are—no prep required.'
    ),
    paragraph(`<strong>When:</strong> ${when}`),
    meetingLine,
    buildGreenButton(bookingUrls.live20, 'View session details'),
  ].join('')

  return {
    subject: 'You\'re booked — 20-minute live reading',
    html: buildBookingEmailHtml({
      preheader: `Your live reading is ${when}.`,
      headerTitle: 'Live reading booked',
      headerSubtitle: tierLabel.live20,
      bodyHtml,
    }),
  }
}

export const buildDeep60ConfirmationEmail = (booking: ParsedBooking) => {
  const when = formatBookingDateTime(booking.startTime, booking.attendeeTimeZone)
  const name = greetingName(booking)
  const meetingLine = booking.meetingLink
    ? paragraph(
        `<strong>Join link:</strong> <a href="${booking.meetingLink}" style="color:${EMAIL_COLORS.greenHyperlink};">${booking.meetingLink}</a>`
      )
    : paragraph('Your meeting link is in your Cal.com confirmation.')

  const bodyHtml = [
    paragraph(`Hi ${name},`),
    paragraph(
      'You\'re booked for a 60-minute deep dive. We\'ll use tarot and reflection to unpack patterns and build a path forward—plus you have the option to book a 20-minute follow-up within 30 days.'
    ),
    paragraph(`<strong>When:</strong> ${when}`),
    meetingLine,
    buildGreenButton(bookingUrls.deep60, 'View session details'),
  ].join('')

  return {
    subject: 'You\'re booked — 60-minute deep dive',
    html: buildBookingEmailHtml({
      preheader: `Your deep dive is ${when}.`,
      headerTitle: 'Deep dive booked',
      headerSubtitle: tierLabel.deep60,
      bodyHtml,
    }),
  }
}

export const buildLiveReminder24hEmail = (booking: ParsedBooking, tier: 'live20' | 'deep60') => {
  const when = formatBookingDateTime(booking.startTime, booking.attendeeTimeZone)
  const name = greetingName(booking)
  const followUpNote =
    tier === 'deep60'
      ? ' Optional 20-minute follow-up within 30 days is available when you\'re ready.'
      : ''

  const bodyHtml = [
    paragraph(`Hi ${name},`),
    paragraph(
      `Reminder: Your ${tier === 'deep60' ? '60-minute deep dive' : '20-minute live reading'} is tomorrow at ${when}. We'll start with a tarot pull. No prep needed.${followUpNote}`
    ),
  ].join('')

  return {
    subject: `Reminder: your session is tomorrow`,
    html: buildBookingEmailHtml({
      preheader: `Session tomorrow at ${when}.`,
      headerTitle: 'Session reminder',
      bodyHtml,
    }),
  }
}

export const buildLiveReminder1hEmail = (booking: ParsedBooking) => {
  const name = greetingName(booking)

  return {
    subject: 'Your session is in 1 hour',
    html: buildBookingEmailHtml({
      preheader: 'See you soon.',
      headerTitle: 'Starting soon',
      bodyHtml: paragraph(`Hi ${name}, your session is in 1 hour. See you soon.`),
    }),
  }
}

export const buildAsyncDeliveryReminderEmail = (booking: ParsedBooking) => {
  const when = formatBookingDateTime(booking.startTime, booking.attendeeTimeZone)
  const name = greetingName(booking)

  return {
    subject: 'Reminder: your async video arrives soon',
    html: buildBookingEmailHtml({
      preheader: `Video delivered by ${when}.`,
      headerTitle: 'Async delivery reminder',
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          `Your Async video will arrive by ${when}. If intake isn't complete yet, please finish it so I can record on time.`
        ),
      ].join(''),
    }),
  }
}

export const buildCancellationEmail = (booking: ParsedBooking) => {
  const name = greetingName(booking)

  return {
    subject: 'Your booking was cancelled',
    html: buildBookingEmailHtml({
      preheader: 'Booking cancelled.',
      headerTitle: 'Booking cancelled',
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          'Your Software Psychic booking was cancelled. If this was a mistake or you want to rebook, you can grab a new slot anytime.'
        ),
        buildGreenButton(bookingUrls.hub, 'Book again'),
      ].join(''),
    }),
  }
}

export const buildRescheduleEmail = (booking: ParsedBooking) => {
  const when = formatBookingDateTime(booking.startTime, booking.attendeeTimeZone)
  const name = greetingName(booking)
  const isAsync = booking.tier === 'async'

  return {
    subject: isAsync ? 'Your async delivery time was updated' : 'Your session was rescheduled',
    html: buildBookingEmailHtml({
      preheader: isAsync ? `New delivery time: ${when}` : `New session time: ${when}`,
      headerTitle: isAsync ? 'Delivery time updated' : 'Session rescheduled',
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          isAsync
            ? `Your Async Reflection delivery time is now <strong>${when}</strong>. Still not a live meeting—your video link will arrive by email.`
            : `Your session is now scheduled for <strong>${when}</strong>.`
        ),
        booking.meetingLink && !isAsync
          ? paragraph(
              `<strong>Join link:</strong> <a href="${booking.meetingLink}" style="color:${EMAIL_COLORS.greenHyperlink};">${booking.meetingLink}</a>`
            )
          : '',
      ]
        .filter(Boolean)
        .join(''),
    }),
  }
}

export const buildPostSessionThankYouEmail = (booking: ParsedBooking) => {
  const name = greetingName(booking)
  const isDeep = booking.tier === 'deep60'

  const bodyHtml = [
    paragraph(`Hi ${name},`),
    paragraph('Thank you for today\'s session. I hope the reflection landed somewhere useful.'),
    isDeep
      ? paragraph(
          'Remember: you have an optional 20-minute follow-up within 30 days if you want to check in on what\'s landing.'
        )
      : '',
    buildGreenButton(`${getSiteUrl()}/services`, 'View services'),
  ]
    .filter(Boolean)
    .join('')

  return {
    subject: 'Thank you for today\'s session',
    html: buildBookingEmailHtml({
      preheader: 'Thank you for the session.',
      headerTitle: 'After your session',
      bodyHtml,
    }),
  }
}

export const buildPostSessionFollowUpEmail = (booking: ParsedBooking) => {
  const name = greetingName(booking)

  return {
    subject: 'Following up from your session',
    html: buildBookingEmailHtml({
      preheader: 'A quick follow-up.',
      headerTitle: 'Session follow-up',
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          'Checking in after our session. If anything is still circling, live 20-minute and 60-minute sessions are on the site when you want to continue in conversation.'
        ),
        buildGreenButton(bookingUrls.hub, 'Book another session'),
      ].join(''),
    }),
  }
}

export const buildDeep60FollowUpNudgeEmail = (booking: ParsedBooking) => {
  const name = greetingName(booking)

  return {
    subject: 'Optional follow-up window closing soon',
    html: buildBookingEmailHtml({
      preheader: 'A few days left for your optional follow-up.',
      headerTitle: 'Follow-up reminder',
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          'A few days left to use your optional 20-minute follow-up from your deep dive if you want to check in.'
        ),
        buildGreenButton(bookingUrls.live20, 'Book follow-up'),
      ].join(''),
    }),
  }
}

export const buildAsyncDeliveryEmail = (
  booking: ParsedBooking,
  videoUrl: string
) => {
  const name = greetingName(booking)

  return {
    subject: 'Your Async Reflection video is ready',
    html: buildBookingEmailHtml({
      preheader: 'Your private video link is inside.',
      headerTitle: 'Your video is ready',
      headerSubtitle: tierLabel.async,
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          'Your Async Reflection is ready. Watch at your own pace—you can rewatch whenever you need.'
        ),
        buildGreenButton(videoUrl, 'Watch your video'),
        paragraph(
          `If the button doesn\'t work, copy and paste this link: <a href="${videoUrl}" style="color:${EMAIL_COLORS.greenHyperlink};word-break:break-all;">${videoUrl}</a>`
        ),
      ].join(''),
    }),
  }
}

export const buildAsyncPostDeliveryFollowUpEmail = (booking: ParsedBooking) => {
  const name = greetingName(booking)

  return {
    subject: 'Hope the video helped',
    html: buildBookingEmailHtml({
      preheader: 'Live sessions are on the site if you want to go deeper.',
      headerTitle: 'After your async reading',
      bodyHtml: [
        paragraph(`Hi ${name},`),
        paragraph(
          'Hope the video helped. Live 20-minute and 60-minute sessions are on the site if you want to continue in conversation.'
        ),
        buildGreenButton(bookingUrls.hub, 'Explore live sessions'),
      ].join(''),
    }),
  }
}

export const buildConfirmationEmail = (booking: ParsedBooking) => {
  switch (booking.tier) {
    case 'async':
      return buildAsyncConfirmationEmail(booking)
    case 'live20':
      return buildLive20ConfirmationEmail(booking)
    case 'deep60':
      return buildDeep60ConfirmationEmail(booking)
  }
}
