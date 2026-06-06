/**
 * Public booking URLs (Cal.com). Override in `.env.local` if needed:
 * NEXT_PUBLIC_BOOKING_ASYNC, NEXT_PUBLIC_BOOKING_LIVE_20, NEXT_PUBLIC_BOOKING_DEEP_60, NEXT_PUBLIC_BOOKING_HUB
 */
export const bookingUrls = {
  async: process.env.NEXT_PUBLIC_BOOKING_ASYNC ?? 'https://cal.com/pythoness/async?',
  live20: process.env.NEXT_PUBLIC_BOOKING_LIVE_20 ?? 'https://cal.com/pythoness/20min',
  deep60: process.env.NEXT_PUBLIC_BOOKING_DEEP_60 ?? 'https://cal.com/pythoness/60min',
  hub: process.env.NEXT_PUBLIC_BOOKING_HUB ?? 'https://cal.com/pythoness',
} as const
