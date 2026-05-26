'use client'

import { useSyncExternalStore } from 'react'

import { isProductionSite } from '@/lib/third-party-scripts'

/** Client-only: true on pythonessprogrammer.com (false on localhost during SSR). */
export function useProductionSiteScripts(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => isProductionSite(window.location.hostname),
    () => false
  )
}
