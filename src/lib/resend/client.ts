const RESEND_API_BASE_URL = 'https://api.resend.com'

export type CreateTemplatePayload = {
  name: string
  html: string
  alias?: string
  from?: string
  subject?: string
  text?: string
  variables?: Array<{
    key: string
    type: 'string' | 'number'
    fallback_value?: string | number
  }>
}

export type CreateTemplateResponse = {
  id: string
  object: string
}

export type ListTemplatesResponse = {
  data: Array<{
    id: string
    name: string
    alias?: string | null
  }>
}

const parseJson = async (response: Response): Promise<unknown> => {
  const text = await response.text()
  if (!text) return {}
  try {
    return JSON.parse(text)
  } catch {
    return { message: text }
  }
}

const getApiKey = (): string => {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.')
  }
  return apiKey
}

const resendFetch = async <T>(
  path: string,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(`${RESEND_API_BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
  })

  const body = (await parseJson(response)) as { message?: string }

  if (!response.ok) {
    throw new Error(body.message ?? `Resend API error (${response.status}).`)
  }

  return body as T
}

export const createTemplate = async (
  payload: CreateTemplatePayload
): Promise<CreateTemplateResponse> =>
  resendFetch<CreateTemplateResponse>('/templates', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

export const publishTemplate = async (templateId: string): Promise<void> => {
  await resendFetch(`/templates/${templateId}/publish`, {
    method: 'POST',
  })
}

export const updateTemplate = async (
  templateId: string,
  payload: CreateTemplatePayload
): Promise<CreateTemplateResponse> =>
  resendFetch<CreateTemplateResponse>(`/templates/${templateId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })

export const listTemplates = async (): Promise<ListTemplatesResponse> =>
  resendFetch<ListTemplatesResponse>('/templates')

export const toResendVariables = (
  variables: Array<{
    key: string
    type: 'string' | 'number'
    fallbackValue?: string | number
  }>
) =>
  variables.map((variable) => ({
    key: variable.key,
    type: variable.type,
    fallback_value: variable.fallbackValue,
  }))

export const toCreateTemplatePayload = (template: {
  name: string
  alias: string
  from: string
  subject: string
  html: string
  text: string
  variables: Array<{
    key: string
    type: 'string' | 'number'
    fallbackValue?: string | number
  }>
}): CreateTemplatePayload => ({
  name: template.name,
  alias: template.alias,
  from: template.from,
  subject: template.subject,
  html: template.html,
  text: template.text,
  variables: toResendVariables(template.variables),
})
