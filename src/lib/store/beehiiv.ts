import 'server-only'
import { BeehiivSyncResult } from '@/types/store'

const BEEHIIV_API_BASE_URL = 'https://api.beehiiv.com/v2'

interface SyncToBeehiivInput {
  email: string
  productSlug: string
}

export const syncStoreSubscriberToBeehiiv = async ({
  email,
  productSlug,
}: SyncToBeehiivInput): Promise<BeehiivSyncResult> => {
  const beehiivApiKey = process.env.BEEHIIV_API_KEY
  const beehiivPublicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!beehiivApiKey || !beehiivPublicationId) {
    return {
      configured: false,
      synced: false,
      message: 'Beehiiv is not configured. Skipping subscriber sync.',
    }
  }

  try {
    const response = await fetch(
      `${BEEHIIV_API_BASE_URL}/publications/${beehiivPublicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${beehiivApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          send_welcome_email: true,
          reactivate_existing: true,
          utm_source: 'store',
          utm_medium: 'website',
          utm_campaign: `store-${productSlug}`,
        }),
        cache: 'no-store',
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      return {
        configured: true,
        synced: false,
        message: `Beehiiv sync failed (${response.status}): ${errorBody}`,
      }
    }

    return {
      configured: true,
      synced: true,
    }
  } catch (error) {
    return {
      configured: true,
      synced: false,
      message:
        error instanceof Error
          ? `Beehiiv sync network error: ${error.message}`
          : 'Beehiiv sync network error.',
    }
  }
}
