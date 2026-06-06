"use client"

import React, { useState } from "react"

import { userMessages } from "@/data/userMessages"

type CopyFieldProps = {
  label?: string
  value: string
  ariaLabel?: string
  className?: string
  copyButtonClassName?: string
}

export default function CopyField({
  label,
  value,
  ariaLabel,
  className,
  copyButtonClassName,
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  async function handleCopy() {
    setCopyError(false)
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopyError(true)
      setTimeout(() => setCopyError(false), 2500)
    }
  }

  const buttonLabel = copied
    ? userMessages.clipboard.copied
    : copyError
      ? "Copy failed"
      : "Copy"

  return (
    <div className={className}>
      {label && (
        <label className="block text-white/80 text-sm mb-1">{label}</label>
      )}
      <div className="flex items-stretch gap-2">
        <input
          type="text"
          value={value}
          readOnly
          onFocus={(e) => e.currentTarget.select()}
          aria-label={ariaLabel ?? label ?? value}
          className="w-full rounded-md bg-white/10 text-white placeholder-white/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:border-transparent"
        />
        <button
          type="button"
          onClick={handleCopy}
          className={
            copyButtonClassName ??
            "shrink-0 rounded-md px-3 py-2 bg-brand-green-accent text-brand-green-dark hover:bg-brand-green-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
          }
          aria-label={`Copy ${ariaLabel ?? label ?? value} to clipboard`}
        >
          {buttonLabel}
        </button>
      </div>
      {copyError && (
        <p className="mt-1 text-xs text-red-200" role="alert">
          {userMessages.clipboard.copyFailedWithShortcut}
        </p>
      )}
    </div>
  )
}
