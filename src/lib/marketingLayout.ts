/** Shared spacing for home, about, and services marketing pages. */

/** Horizontal edge spacing (mobile-first, scales up at breakpoints) */
export const siteGutterX = 'px-3 sm:px-4 md:px-5 lg:px-6'

/** Vertical edge spacing (matches horizontal scale) */
export const siteGutterY = 'py-3 sm:py-4 md:py-5 lg:py-6'

/** Horizontal and vertical edge spacing — same scale on every side, site-wide */
export const siteGutter = `${siteGutterX} ${siteGutterY}`

/** Fixed header bar — keep in sync with Header.tsx (`h-16`) */
export const siteHeaderOffset = 'pt-16'

export const marketingSection = siteGutter

export const marketingSectionCompact = siteGutter

export const marketingContainer = 'max-w-4xl mx-auto'

export const marketingContainerWide = 'max-w-7xl mx-auto'

/** Centered page shells for long-form and resource pages */
export const pageContainer = `max-w-4xl mx-auto ${siteGutter}`

export const pageContainerWide = `max-w-6xl mx-auto ${siteGutter}`

export const pageContainerNarrow = `max-w-3xl mx-auto ${siteGutter}`

export const marketingHeading = 'mb-6 md:mb-8'

export const marketingSubheading = 'mb-4 md:mb-6'

export const marketingBlock = 'mb-8 md:mb-10'

export const marketingGrid = 'gap-6 md:gap-8 lg:gap-10'

/** Same-background neighbor: same gutter on all sides (no reduced top) */
export const marketingSectionTightTop = siteGutter

export const marketingScrollAnchor = 'scroll-mt-16 md:scroll-mt-20'

/** Home main: header top breathing + light gap under block divs */
export const marketingHomeRhythm =
  "[&_h1]:mt-[10px] [&_h2]:mt-[10px] [&_h3]:mt-[10px] [&_h4]:mt-[10px] [&_div]:mb-[5px] [&_div.absolute]:mb-0 [&_div.sr-only]:mb-0"

export const marketingHomeSection = siteGutter

export const marketingHomeSectionCompact = siteGutter

export const marketingHomeSectionTightTop = siteGutter

export const marketingHomeBlock = 'mb-[42px] md:mb-[50px]'
