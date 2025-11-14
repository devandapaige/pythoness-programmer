import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates years of experience from a start date.
 * The year increases on the anniversary month (e.g., if started in October,
 * the year count increases every October).
 * 
 * @param startYear - The year the experience started
 * @param startMonth - The month the experience started (1-12, where 1 = January)
 * @returns The number of years of experience
 */
export function calculateYearsOfExperience(startYear: number, startMonth: number): number {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1 // getMonth() returns 0-11, so add 1
  
  let years = currentYear - startYear
  
  // If we haven't reached the anniversary month yet this year, subtract 1
  if (currentMonth < startMonth) {
    years -= 1
  }
  
  return Math.max(0, years) // Ensure we never return negative years
} 