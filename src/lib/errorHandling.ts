/**
 * Standardized error handling utilities for consistent error management across the application
 */

/**
 * Log an error with context information to help with debugging
 * 
 * @param message Descriptive message about where/why the error occurred
 * @param error The original error object
 * @param context Additional contextual information (e.g. parameters, state)
 */
export const logError = (
  message: string, 
  error: unknown, 
  context: Record<string, unknown> = {}
): void => {
  console.error(
    `[ERROR] ${message}`,
    {
      error,
      ...(Object.keys(context).length > 0 ? { context } : {}),
      timestamp: new Date().toISOString(),
    }
  )
}

/**
 * Type guard to check if an unknown error is an Error object
 */
export const isError = (error: unknown): error is Error => {
  return error instanceof Error
}

/**
 * Get a safe error message from any error type
 */
export const getSafeErrorMessage = (error: unknown): string => {
  if (isError(error)) {
    return error.message
  }
  
  if (typeof error === 'string') {
    return error
  }
  
  return 'An unknown error occurred'
}

/**
 * Safe wrapper for try/catch blocks that provides standardized error handling
 * 
 * @param fn The function to execute safely
 * @param errorMessage Custom error message for logging
 * @param errorContext Additional context for the error
 * @returns The result of the function or null if an error occurred
 */
export async function tryCatch<T>(
  fn: () => Promise<T>,
  errorMessage: string,
  errorContext: Record<string, unknown> = {}
): Promise<T | null> {
  try {
    return await fn()
  } catch (error) {
    logError(errorMessage, error, errorContext)
    return null
  }
}

/**
 * Synchronous version of tryCatch
 */
export function tryCatchSync<T>(
  fn: () => T,
  errorMessage: string,
  errorContext: Record<string, unknown> = {}
): T | null {
  try {
    return fn()
  } catch (error) {
    logError(errorMessage, error, errorContext)
    return null
  }
} 