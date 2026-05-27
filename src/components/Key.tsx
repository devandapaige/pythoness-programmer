import type { ReactNode } from 'react'

type KeyProps = {
  children: ReactNode
}

/** Keyboard key chip for blog MDX (avoids backtick parsing issues in raw HTML). */
export default function Key({ children }: KeyProps) {
  return (
    <kbd className="inline-block rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-sm text-white align-middle whitespace-nowrap">
      {children}
    </kbd>
  )
}
