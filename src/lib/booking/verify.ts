import { createHmac, timingSafeEqual } from 'node:crypto'

export const verifyCalWebhookSignature = (
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): boolean => {
  if (!signatureHeader) {
    return false
  }

  const expected = createHmac('sha256', secret).update(rawBody).digest('hex')

  try {
    const received = Buffer.from(signatureHeader, 'utf8')
    const expectedBuffer = Buffer.from(expected, 'utf8')

    if (received.length !== expectedBuffer.length) {
      return false
    }

    return timingSafeEqual(received, expectedBuffer)
  } catch {
    return false
  }
}
