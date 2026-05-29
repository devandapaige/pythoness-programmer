/** Parse YYYY-MM-DD as a calendar date (not UTC midnight, which shifts to prior day in US TZ). */
export function parseBlogDate(dateStr: string): Date {
  const dateOnly = dateStr.trim().slice(0, 10)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) {
    const [year, month, day] = dateOnly.split('-').map(Number)
    return new Date(year, month - 1, day)
  }
  return new Date(dateStr)
}

export function formatBlogDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  return parseBlogDate(dateStr).toLocaleDateString('en-US', options)
}
