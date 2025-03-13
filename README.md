# Pythoness Programmer

A professional portfolio and service website built with Next.js, showcasing tech coaching, professional development, and local craft services.

## Project Overview

This website serves as a platform for:
- Tech coaching and consultation services
- Professional development and career coaching
- Local craft and print services (Central Virginia)
- Industry insights and strategic guidance
- Technical blog and resources

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Typography:** Custom font implementation
- **Animations:** CSS transitions and transforms
- **Integrations:** 
  - Cal.com for scheduling
  - Beehiiv for newsletter
  - Custom SVG patterns
  - MDX for blog content

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Main landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── blog/                       # Blog section
│   │   ├── page.tsx               # Blog index page
│   │   ├── [slug]/                # Dynamic blog post routes
│   │   │   └── page.tsx           # Individual blog post page
│   │   └── layout.tsx             # Blog section layout
│   └── vibe-coding-cheatsheet/     # Vibe Coding Cheatsheet section
│       ├── page.tsx               # Cheatsheet main page
│       ├── components/            # Cheatsheet-specific components
│       └── data/                  # Cheatsheet content data
├── components/                    # Shared components
│   ├── Header.tsx                # Navigation and branding
│   ├── Footer.tsx                # Site footer with links
│   └── Section.tsx               # Reusable section component
├── lib/                          # Utility functions and shared logic
│   ├── mdx.ts                    # MDX processing utilities
│   └── blog.ts                   # Blog-related utilities
└── content/                      # Content directory
    └── blog/                     # Blog posts in MDX format
        └── posts/                # Individual blog post files
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
- MDX-based blog system
- Vibe Coding Cheatsheet resource

## Blog Implementation

The blog is implemented using MDX for content management. Here's how to work with it:

1. Create new blog posts:
```bash
# Create a new blog post
touch src/content/blog/posts/your-post-title.mdx
```

2. Blog post frontmatter structure:
```mdx
---
title: "Your Post Title"
date: "2024-03-13"
description: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

3. Available MDX components:
```tsx
// Example usage in MDX files
<Callout type="info">
  This is an info callout
</Callout>

<CodeBlock language="typescript">
  const example = "code here";
</CodeBlock>
```

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
8. Blog - Technical articles and resources
9. Vibe Coding Cheatsheet - Developer resource (Freebie)

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The site is built for deployment on Vercel or similar platforms that support Next.js.

## Contact

For questions or collaborations:
admin@pythonessprogrammer.com

## License

All rights reserved. This code is proprietary and not for public use.
