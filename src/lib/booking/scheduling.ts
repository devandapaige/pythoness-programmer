const HOUR_MS = 60 * 60 * 1000

export const offsetFromStart = (startTime: Date, offsetMs: number): Date | null => {
  const scheduled = new Date(startTime.getTime() - offsetMs)
  return scheduled.getTime() > Date.now() + 60_000 ? scheduled : null
}

export const offsetAfterStart = (startTime: Date, offsetMs: number): Date | null => {
  const scheduled = new Date(startTime.getTime() + offsetMs)
  return scheduled.getTime() > Date.now() + 60_000 ? scheduled : null
}

export const REMINDER_OFFSETS = {
  live24h: 24 * HOUR_MS,
  live1h: HOUR_MS,
  async36h: 36 * HOUR_MS,
  postSession36h: 36 * HOUR_MS,
  deep60Nudge25d: 25 * 24 * HOUR_MS,
  asyncFollowUp5d: 5 * 24 * HOUR_MS,
} as const
