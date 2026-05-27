import type { CompileOptions } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

/** Shared remark/rehype options for blog MDX (tables, strikethrough, autolinks, etc.) */
export const blogMdxOptions: Omit<
  CompileOptions,
  'outputFormat' | 'providerImportSource'
> = {
  remarkPlugins: [remarkGfm],
}
