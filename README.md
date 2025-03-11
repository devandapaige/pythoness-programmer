# Pythoness Programmer

A professional portfolio and service website built with Next.js, showcasing tech coaching, professional development, and local craft services.

## Project Overview

This website serves as a platform for:
- Tech coaching and consultation services
- Professional development and career coaching
- Local craft and print services (Central Virginia)
- Industry insights and strategic guidance

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Typography:** Custom font implementation
- **Animations:** CSS transitions and transforms
- **Integrations:** 
  - Cal.com for scheduling
  - Beehiiv for newsletter
  - Custom SVG patterns

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main landing page
│   └── layout.tsx         # Root layout
├── components/
│   ├── Header.tsx         # Navigation and branding
│   ├── Footer.tsx         # Site footer with links
│   └── Section.tsx        # Reusable section component
├── styles/
│   └── globals.css        # Global styles and Tailwind
└── public/
    └── pattern.svg        # Background pattern asset
```

## Key Features

- Responsive design with mobile-first approach
- Gradient backgrounds with animated patterns
- Accessible UI components
- Integrated booking system
- Newsletter subscription
- Service cards with hover effects
- Professional experience showcase
- Local craft services section

## Color Scheme

```css
/* Brand Colors */
--brand-green-dark: #1A472A;    /* Deep forest green */
--brand-purple-dark: #2D1B69;   /* Rich purple */
--brand-green-accent: #157F1F;  /* Vibrant green */
--brand-cream: #F5F5DC;         /* Soft cream */
--brand-purple-light: #9747FF;  /* Light purple accent */

/* UI Colors */
--white: #FFFFFF;               /* Pure white for contrast */
--white-opacity-10: rgba(255, 255, 255, 0.1);
--white-opacity-20: rgba(255, 255, 255, 0.2);
--white-opacity-90: rgba(255, 255, 255, 0.9);
```

Common color applications:
- Text on dark: `text-white`, `text-white/90`, `text-brand-cream`
- Text on light: `text-brand-purple-dark`, `text-brand-green-dark`
- Accents: `text-brand-green-accent`, `text-brand-purple-light`
- Backgrounds: Dark gradient combinations of `brand-green-dark` and `brand-purple-dark`
- Overlays: `bg-white/5`, `bg-white/10` with `backdrop-blur-sm`

## Sections

1. Hero - Introduction and primary CTAs
2. Process - How tech coaching works
3. Services - Digital services overview
4. Experience - Professional background
5. Craft Services - Local physical products
6. Contact - Booking options and rates
7. Newsletter - Industry insights signup

## Development

To run the project locally:

```bash
npm install
npm run dev
```

## Deployment

The site is built for deployment on Vercel or similar platforms that support Next.js.

## Contact

For questions or collaborations:
admin@pythonessprogrammer.com

## License

All rights reserved. This code is proprietary and not for public use.
