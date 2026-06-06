import 'server-only'
import { Redis } from '@upstash/redis'
import type { BookingScheduleRecord } from '@/lib/booking/types'

const BOOKING_KEY_PREFIX = 'booking:'
const BOOKING_TTL_SECONDS = 60 * 60 * 24 * 45

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

const bookingKey = (uid: string): string => `${BOOKING_KEY_PREFIX}${uid}`

export const isScheduleStoreConfigured = (): boolean => getRedis() !== null

export const getBookingSchedule = async (
  uid: string
): Promise<BookingScheduleRecord | null> => {
  const redis = getRedis()

  if (!redis) {
    return null
  }

  return redis.get<BookingScheduleRecord>(bookingKey(uid))
}

export const saveBookingSchedule = async (
  uid: string,
  record: BookingScheduleRecord
): Promise<boolean> => {
  const redis = getRedis()

  if (!redis) {
    return false
  }

  await redis.set(bookingKey(uid), record, { ex: BOOKING_TTL_SECONDS })
  return true
}

export const deleteBookingSchedule = async (uid: string): Promise<boolean> => {
  const redis = getRedis()

  if (!redis) {
    return false
  }

  await redis.del(bookingKey(uid))
  return true
}
