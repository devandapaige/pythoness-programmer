const PRODUCTION_HOSTS = new Set(['pythonessprogrammer.com', 'www.pythonessprogrammer.com'])

/** Only load analytics/cookie scripts on the live domain (avoids localhost hydration issues). */
export function isProductionSite(hostname: string): boolean {
  return PRODUCTION_HOSTS.has(hostname)
}
