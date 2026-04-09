import 'server-only'
import { TransactionalEmailResult } from '@/types/store'

const RESEND_API_BASE_URL = 'https://api.resend.com'

interface SendStoreDownloadEmailInput {
  to: string
  productTitle: string
  downloadUrl: string
  fileLabel: string
}

const getFromAddress = (): string =>
  process.env.STORE_EMAIL_FROM ?? 'store@pythonessprogrammer.com'

export const sendStoreDownloadEmail = async ({
  to,
  productTitle,
  downloadUrl,
  fileLabel,
}: SendStoreDownloadEmailInput): Promise<TransactionalEmailResult> => {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return {
      configured: false,
      sent: false,
      message: 'RESEND_API_KEY is not configured. Skipping transactional email.',
    }
  }

  try {
    const response = await fetch(`${RESEND_API_BASE_URL}/emails`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromAddress(),
        to: [to],
        subject: `Your download: ${productTitle}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#122016;">
            <h2>Your purchase is complete</h2>
            <p>Thank you for your purchase of <strong>${productTitle}</strong>.</p>
            <p>You can download your file here:</p>
            <p><a href="${downloadUrl}">${fileLabel}</a></p>
            <p>If the link does not open, copy and paste this URL into your browser:</p>
            <p>${downloadUrl}</p>
            <p>Need help? Email <a href="mailto:help@pythonessprogrammer.com">help@pythonessprogrammer.com</a>.</p>
          </div>
        `,
      }),
      cache: 'no-store',
    })

    const body = (await response.json()) as { id?: string; message?: string }

    if (!response.ok) {
      return {
        configured: true,
        sent: false,
        message: body.message ?? `Transactional email failed (${response.status}).`,
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
          ? `Transactional email network error: ${error.message}`
          : 'Transactional email network error.',
    }
  }
}
