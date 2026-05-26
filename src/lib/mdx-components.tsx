import type { MDXComponents } from 'mdx/types'

import Signature from '@/components/Signature'

export function useMDXComponents(components: MDXComponents = {}) {
  return {
    ...components,
    Signature,
  }
} 