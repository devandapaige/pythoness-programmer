export const formatPriceCents = (priceCents: number, currency: 'usd'): string => {
  if (priceCents === 0) {
    return 'Free'
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(priceCents / 100)
}

