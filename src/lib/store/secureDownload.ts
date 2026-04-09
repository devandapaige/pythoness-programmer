import 'server-only'
import { createHmac } from 'crypto'

const TOKEN_SEPARATOR = '.'

const getTokenSecret = (): string => {
  const configuredSecret =
    process.env.STORE_DOWNLOAD_TOKEN_SECRET ?? process.env.STRIPE_WEBHOOK_SECRET

  if (!configuredSecret) {
    throw new Error(
      'STORE_DOWNLOAD_TOKEN_SECRET (or STRIPE_WEBHOOK_SECRET fallback) is not configured'
    )
  }

  return configuredSecret
}

const sign = (value: string): string =>
  createHmac('sha256', getTokenSecret()).update(value).digest('hex')

export const createPaidDownloadToken = (
  sessionId: string,
  ttlSeconds: number = 15 * 60
): string => {
  const expiresAt = Date.now() + ttlSeconds * 1000
  const data = `${sessionId}${TOKEN_SEPARATOR}${expiresAt}`
  const encodedData = Buffer.from(data, 'utf8').toString('base64url')
  const signature = sign(data)
  return `${encodedData}${TOKEN_SEPARATOR}${signature}`
}

export const verifyPaidDownloadToken = (
  token: string,
  expectedSessionId: string
): boolean => {
  const parts = token.split(TOKEN_SEPARATOR)
  if (parts.length !== 2) {
    return false
  }

  const [encodedData, signature] = parts
  if (!encodedData || !signature) {
    return false
  }

  const data = Buffer.from(encodedData, 'base64url').toString('utf8')
  const [sessionId, expiresAtRaw] = data.split(TOKEN_SEPARATOR)
  const expiresAt = Number(expiresAtRaw)

  if (
    !sessionId ||
    !expiresAtRaw ||
    Number.isNaN(expiresAt) ||
    sessionId !== expectedSessionId
  ) {
    return false
  }

  if (Date.now() > expiresAt) {
    return false
  }

  return sign(data) === signature
}
