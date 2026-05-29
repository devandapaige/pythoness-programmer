'use client'

import mermaid from 'mermaid'
import { useEffect, useId, useRef, useState } from 'react'

type MermaidProps = {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const id = useId().replace(/:/g, '')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'strict',
    })

    mermaid
      .render(`mermaid-${id}`, chart.trim())
      .then(({ svg }) => {
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Could not render diagram.')
        }
      })

    return () => {
      cancelled = true
    }
  }, [chart, id])

  if (error) {
    return (
      <pre className="my-6 overflow-x-auto rounded-lg bg-black/30 p-4 text-sm text-brand-cream">
        {chart}
      </pre>
    )
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto [&_svg]:max-w-full"
      aria-label="Diagram"
    />
  )
}
