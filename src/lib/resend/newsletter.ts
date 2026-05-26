import 'server-only'

const RESEND_API_BASE_URL = 'https://api.resend.com'

export type NewsletterSubscribeResult = {
  configured: boolean
  subscribed: boolean
  message?: string
}

interface SubscribeToNewsletterInput {
  email: string
  source?: string
}

const getResendApiKey = (): string | undefined =>
  process.env.RESEND_API_KEY?.trim() || undefined

const getNewsletterSegmentId = (): string | undefined =>
  process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim() || undefined

export const subscribeToNewsletter = async ({
  email,
}: SubscribeToNewsletterInput): Promise<NewsletterSubscribeResult> => {
  const apiKey = getResendApiKey()
  const segmentId = getNewsletterSegmentId()

  if (!apiKey) {
    return {
      configured: false,
      subscribed: false,
      message: 'RESEND_API_KEY is not configured.',
    }
  }

  if (!segmentId) {
    return {
      configured: false,
      subscribed: false,
      message: 'RESEND_NEWSLETTER_SEGMENT_ID is not configured.',
    }
  }

  try {
    const createResponse = await fetch(`${RESEND_API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      }),
      cache: 'no-store',
    })

    if (!createResponse.ok) {
      const errorBody = await createResponse.text()
      const segmentResponse = await fetch(
        `${RESEND_API_BASE_URL}/contacts/${encodeURIComponent(email)}/segments/${segmentId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          cache: 'no-store',
        }
      )

      if (segmentResponse.ok) {
        return { configured: true, subscribed: true }
      }

      return {
        configured: true,
        subscribed: false,
        message: `Resend contact sync failed (${createResponse.status}): ${errorBody}`,
      }
    }

    return { configured: true, subscribed: true }
  } catch (error) {
    return {
      configured: true,
      subscribed: false,
      message:
        error instanceof Error
          ? `Resend newsletter subscribe error: ${error.message}`
          : 'Resend newsletter subscribe error.',
    }
  }
}
