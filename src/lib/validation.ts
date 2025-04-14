/**
 * Input validation utilities for security and data integrity
 */

/**
 * Validates that the input is a string and not empty
 */
export const isValidString = (value: unknown): value is string => {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Sanitizes a string by removing potentially harmful content
 * Specifically for non-HTML contexts
 */
export const sanitizeString = (value: string): string => {
  // Replace control characters and null bytes
  return value
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim()
}

/**
 * Sanitizes a string for use in HTML context
 */
export const sanitizeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Validates an email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates that a value is a number and within specified range
 */
export const isValidNumber = (
  value: unknown, 
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): value is number => {
  if (typeof value !== 'number' || isNaN(value)) {
    return false
  }
  
  return value >= min && value <= max
}

/**
 * Validates data against a schema of expected types and constraints
 * Simple implementation for basic validation needs
 */
export const validateData = (
  data: Record<string, unknown>,
  schema: Record<string, (value: unknown) => boolean>
): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {}
  
  for (const [key, validator] of Object.entries(schema)) {
    if (!validator(data[key])) {
      errors[key] = `Invalid value for ${key}`
    }
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  }
} 