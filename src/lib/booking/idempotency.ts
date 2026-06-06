import 'server-only'
import { Redis } from '@upstash/redis'
import type { BookingEmailKind } from '@/lib/booking/types'

const IDEMPOTENCY_KEY_PREFIX = 'sent:'
const IDEMPOTENCY_TTL_SECONDS = 60 * 60 * 24 * 45

let redisClient: Redis | null | undefined

const getRedis = (): Redis | null => {
  if (redisClient !== undefined) {
    return redisClient
  }

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    redisClient = null
    return null
  }

  redisClient = new Redis({ url, token })
  return redisClient
}

const idempotencyKey = (bookingUid: string, kind: BookingEmailKind): string =>
  `${IDEMPOTENCY_KEY_PREFIX}${bookingUid}:${kind}`

export const hasSentBookingEmail = async (
  bookingUid: string,
  kind: BookingEmailKind
): Promise<boolean> => {
  const redis = getRedis()

  if (!redis) {
    return false
  }

  const value = await redis.get(idempotencyKey(bookingUid, kind))
  return value === '1'
}

export const markBookingEmailSent = async (
  bookingUid: string,
  kind: BookingEmailKind
): Promise<void> => {
  const redis = getRedis()

  if (!redis) {
    return
  }

  await redis.set(idempotencyKey(bookingUid, kind), '1', {
    ex: IDEMPOTENCY_TTL_SECONDS,
  })
}

export const clearBookingEmailSent = async (
  bookingUid: string,
  kind: BookingEmailKind
): Promise<void> => {
  const redis = getRedis()

  if (!redis) {
    return
  }

  await redis.del(idempotencyKey(bookingUid, kind))
}
