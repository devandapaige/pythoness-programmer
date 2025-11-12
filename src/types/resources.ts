export type ResourceType = 'free' | 'premium'

export interface Resource {
  id: string
  title: string
  subtitle: string
  description: string
  emoji: string
  features: string[]
  href: string
  downloadHref?: string
  downloadLabel?: string
  borderColor: 'green' | 'purple'
  type: ResourceType
}

