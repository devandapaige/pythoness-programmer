# Rest Period Implementation Notes

## Current Status: REST MODE (Nov 2025 - Mar 8, 2026)

The site is currently in **Rest Mode** with the purple color scheme inspired by the Pythia Oracles of Delphi tradition.

## Color Scheme Changes

### Rest Period Colors (Current)
- **Main color:** `#442b48` (brand-purple-dark) - replaces `#2e3d2a` (brand-green-dark)
- **Accent color:** `#d8b9f7` (brand-purple-light) - replaces `#32d24d` (brand-green-accent)

### Active Season Colors (March 8, 2026 onwards)
- **Main color:** `#2e3d2a` (brand-green-dark)
- **Accent color:** `#32d24d` (brand-green-accent)

## Files Modified for Rest Period

1. **`src/app/page.tsx`** - Now uses `RestPeriodHome` component
2. **`src/components/RestPeriodHome.tsx`** - New rest period homepage
3. **`src/components/Header.tsx`** - Updated to use purple colors
4. **`src/components/Footer.tsx`** - Updated to use purple colors
5. **`src/components/NewsletterCard.tsx`** - Updated heading color
6. **`src/app/globals.css`** - Added rest period color variables (for reference)

## To Switch Back to Active Mode (March 8, 2026)

### Step 1: Restore Original Homepage
In `src/app/page.tsx`, replace:
```tsx
import RestPeriodHome from '../components/RestPeriodHome'
export default async function Home() {
  return <RestPeriodHome />
}
```

With the original homepage content (see git history or backup).

### Step 2: Update Header Colors
In `src/components/Header.tsx`:
- Change `bg-brand-purple-dark/95` back to `bg-brand-green-dark/95`
- Change `hover:text-brand-purple-light` back to `hover:text-brand-green-accent`
- Change `focus:ring-brand-purple-light` back to `focus:ring-brand-green-accent`
- Change `bg-brand-purple-light` (CTA button) back to `bg-brand-green-accent`
- Change `text-brand-purple-dark` (CTA button text) back to `text-white`

### Step 3: Update Footer Colors
In `src/components/Footer.tsx`:
- Change `bg-brand-purple-dark` back to `bg-brand-green-dark`
- Change `hover:text-brand-purple-light` back to `hover:text-brand-green-accent`
- Change `focus:ring-brand-purple-light` back to `focus:ring-brand-green-accent`

### Step 4: Update NewsletterCard
In `src/components/NewsletterCard.tsx`:
- Change `text-brand-purple-dark` back to `text-brand-green-dark`

### Step 5: Update Any Other Components
Search for `brand-purple-light` and `brand-purple-dark` usage and replace with:
- `brand-purple-light` → `brand-green-accent`
- `brand-purple-dark` → `brand-green-dark`

## Rest Period Homepage Features

- **Rest Mode announcement** with return date (March 8, 2026)
- **Pythia Oracles background** section explaining the tradition
- **Educational resources** with links to learn more about the Pythia
- **Newsletter signup** to stay connected during rest period

## Active Season Dates

- **Start:** March 8, 2026
- **End:** November 2026 (approximate)
- **Pattern:** March - November active, November - March rest

## Notes

- The rest period allows time to work on the Django migration separately
- All other pages (blog, resources, etc.) remain accessible
- The purple color scheme creates a distinctive "rest period" visual identity
- The Pythia Oracles theme connects the rest period to historical tradition

---

**Last Updated:** January 2025  
**Rest Period End Date:** March 8, 2026
