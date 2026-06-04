/**
 * Replace {{{VAR}}} placeholders in Resend template HTML.
 * Leaves {{{RESEND_UNSUBSCRIBE_URL}}} for Resend to resolve at send time.
 */

const RESERVED_VARIABLES = new Set(['RESEND_UNSUBSCRIBE_URL'])

const substituteTemplateVariables = (html, variables) => {
  let result = html

  for (const [key, value] of Object.entries(variables)) {
    if (RESERVED_VARIABLES.has(key)) continue
    const pattern = new RegExp(`\\{\\{\\{${key}\\}\\}\\}`, 'g')
    result = result.replace(pattern, value ?? '')
  }

  return result
}

module.exports = { substituteTemplateVariables, RESERVED_VARIABLES }
