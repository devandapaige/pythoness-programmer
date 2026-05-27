import { ReactNode } from 'react'

type VisuallyHiddenProps = {
  children: ReactNode
  as?: 'span' | 'div'
}

/** Screen-reader-only text; visible when focused inside a skip link */
export default function VisuallyHidden({ children, as: Tag = 'span' }: VisuallyHiddenProps) {
  return <Tag className="sr-only">{children}</Tag>
}
