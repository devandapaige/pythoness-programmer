import VisuallyHidden from './VisuallyHidden'

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link fixed left-3 top-3 z-[110] rounded-lg bg-brand-green-accent px-4 py-2 text-sm font-semibold text-black shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-brand-cream focus:ring-offset-2 focus:ring-offset-brand-green-dark"
    >
      Skip to main content
      <VisuallyHidden> (keyboard shortcut)</VisuallyHidden>
    </a>
  )
}
