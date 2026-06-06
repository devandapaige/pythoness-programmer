import 'server-only'
import type { TransactionalEmailResult } from '@/types/store'

const RESEND_API_BASE_URL = 'https://api.resend.com'

export interface SendBookingEmailInput {
  to: string
  subject: string
  html: string
  scheduledAt?: Date
}

const getFromAddress = (): string =>
  process.env.BOOKING_EMAIL_FROM ?? 'Amanda Nelson <sessions@pythonessprogrammer.com>'

const getResendApiKey = (): string | undefined => process.env.RESEND_API_KEY

export const sendBookingEmail = async ({
  to,
  subject,
  html,
  scheduledAt,
}: SendBookingEmailInput): Promise<TransactionalEmailResult & { emailId?: string }> => {
  const resendApiKey = getResendApiKey()

  if (!resendApiKey) {
    return {
      configured: false,
      sent: false,
      message: 'RESEND_API_KEY is not configured. Skipping booking email.',
    }
  }

  if (scheduledAt && scheduledAt.getTime() <= Date.now() + 60_000) {
    return {
      configured: true,
      sent: false,
      message: 'Scheduled time is in the past or too soon. Skipping.',
    }
  }

  try {
    const payload: Record<string, unknown> = {
      from: getFromAddress(),
      to: [to],
      subject,
      html,
    }

    if (scheduledAt) {
      payload.scheduled_at = scheduledAt.toISOString()
    }

    const response = await fetch(`${RESEND_API_BASE_URL}/emails`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    const body = (await response.json()) as { id?: string; message?: string }

    if (!response.ok) {
      return {
        configured: true,
        sent: false,
        message: body.message ?? `Booking email failed (${response.status}).`,
      }
    }

    return {
      configured: true,
      sent: true,
      messageId: body.id,
      emailId: body.id,
    }
  } catch (error) {
    return {
      configured: true,
      sent: false,
      message:
        error instanceof Error
          ? `Booking email network error: ${error.message}`
          : 'Booking email network error.',
    }
  }
}

export const cancelScheduledBookingEmail = async (
  emailId: string
): Promise<TransactionalEmailResult> => {
  const resendApiKey = getResendApiKey()

  if (!resendApiKey) {
    return {
      configured: false,
      sent: false,
      message: 'RESEND_API_KEY is not configured. Skipping cancel.',
    }
  }

  try {
    const response = await fetch(`${RESEND_API_BASE_URL}/emails/${emailId}/cancel`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    const body = (await response.json()) as { id?: string; message?: string }

    if (!response.ok) {
      return {
        configured: true,
        sent: false,
        message: body.message ?? `Cancel scheduled email failed (${response.status}).`,
      }
    }

    return {
      configured: true,
      sent: true,
      messageId: body.id,
    }
  } catch (error) {
    return {
      configured: true,
      sent: false,
      message:
        error instanceof Error
          ? `Cancel scheduled email network error: ${error.message}`
          : 'Cancel scheduled email network error.',
    }
  }
}

export const cancelScheduledBookingEmails = async (
  emailIds: string[]
): Promise<void> => {
  await Promise.all(emailIds.map((emailId) => cancelScheduledBookingEmail(emailId)))
}
