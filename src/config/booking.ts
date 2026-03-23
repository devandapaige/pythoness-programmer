/**
 * Public booking URLs (Zoom Scheduler). Override in `.env.local` if needed:
 * NEXT_PUBLIC_BOOKING_ASYNC, NEXT_PUBLIC_BOOKING_LIVE_20, NEXT_PUBLIC_BOOKING_DEEP_60, NEXT_PUBLIC_BOOKING_HUB
 */
export const bookingUrls = {
  async: process.env.NEXT_PUBLIC_BOOKING_ASYNC ?? 'https://scheduler.zoom.us/pythoness/async',
  live20: process.env.NEXT_PUBLIC_BOOKING_LIVE_20 ?? 'https://scheduler.zoom.us/pythoness/20min',
  deep60: process.env.NEXT_PUBLIC_BOOKING_DEEP_60 ?? 'https://scheduler.zoom.us/pythoness/60min',
  hub: process.env.NEXT_PUBLIC_BOOKING_HUB ?? 'https://scheduler.zoom.us/pythoness',
} as const
