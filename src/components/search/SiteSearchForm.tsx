import { focusRingClass } from '@/lib/a11y/focusRing'

type SiteSearchFormProps = {
  defaultValue?: string
  id?: string
  variant?: 'footer' | 'page'
}

export default function SiteSearchForm({
  defaultValue = '',
  id = 'site-search',
  variant = 'footer',
}: SiteSearchFormProps) {
  const isPage = variant === 'page'

  return (
    <form action="/search" method="get" role="search" className={isPage ? 'mb-8' : 'mt-2 mb-2'}>
      <label htmlFor={id} className="sr-only">
        Search pages, resources, Lab Notes, and newsletter
      </label>
      <div className="relative">
        <input
          id={id}
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder="Search site..."
          className={`w-full rounded-lg border border-white/20 bg-white/10 py-2 pl-9 pr-3 text-sm text-white placeholder-white/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-green-accent ${focusRingClass} ${isPage ? 'py-3 pl-12 text-base' : ''}`}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isPage ? 20 : 16}
          height={isPage ? 20 : 16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-white/50 ${isPage ? 'left-4' : 'left-3'}`}
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
    </form>
  )
}
