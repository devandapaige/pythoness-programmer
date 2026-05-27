import { ComponentProps, ReactNode } from 'react'
import VisuallyHidden from './VisuallyHidden'

type ExternalLinkProps = Omit<ComponentProps<'a'>, 'target' | 'rel'> & {
  href: string
  children: ReactNode
  showNewTabHint?: boolean
}

const newTabSuffix = <VisuallyHidden> (opens in new tab)</VisuallyHidden>

/** Off-site link with rel/target and screen-reader new-tab hint. */
export default function ExternalLink({
  href,
  children,
  className,
  showNewTabHint = true,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
      {showNewTabHint ? newTabSuffix : null}
    </a>
  )
}
