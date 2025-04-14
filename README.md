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
- **Testing:** Jest with React Testing Library
- **CI/CD:** GitHub Actions workflow

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Main landing page wrapper
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── blog/                       # Blog section
│   │   ├── page.tsx               # Blog index page
│   │   ├── [slug]/                # Dynamic blog post routes
│   │   │   └── page.tsx           # Individual blog post page
│   │   └── layout.tsx             # Blog section layout
│   ├── terms/                      # Terms of Service
│   │   └── page.tsx               # Terms page wrapper
│   ├── privacy/                    # Privacy Policy
│   │   └── page.tsx               # Privacy page wrapper
│   └── vibe-coding-cheatsheet/     # Interactive Cheatsheet section
│       ├── page.tsx               # Cheatsheet React component page
│       ├── components/            # Cheatsheet-specific components
│       └── data/                  # Cheatsheet content data
├── components/                    # Shared components
│   ├── Header.tsx                # Navigation and branding
│   ├── Footer.tsx                # Site footer with links
│   └── LegalLayout.tsx           # Layout for legal pages
├── lib/                          # Utility functions and shared logic
│   ├── mdx.ts                    # MDX processing utilities
│   ├── validation.ts             # Input validation utilities
│   ├── errorHandling.ts          # Error handling utilities
│   └── blog.ts                   # Blog-related utilities
├── __tests__/                    # Test files
│   ├── lib/                      # Tests for utility functions
│   └── components/               # Tests for React components
├── docs/                         # Documentation
│   └── naming-conventions.md     # Coding standards and naming conventions
└── content/                      # Content directory
    ├── blog/                     # Blog posts in MDX format
    │   └── posts/               # Individual blog post files
    ├── home/                    # Home page sections in MDX
    └── legal/                   # Legal documents in MDX
        ├── terms-of-service.mdx # Terms of Service content
        └── privacy-policy.mdx   # Privacy Policy content
```

## Content Management Approaches

The project uses two different approaches for content management:

### 1. MDX-Based Static Content

Used for content that is primarily text-based and requires minimal interactivity:

- Home page sections
- Legal documents (Terms of Service, Privacy Policy)
- Blog posts

These pages use the `getMDXContent` utility to parse and render MDX files stored in the `content/` directory.

Example MDX structure:

```mdx
---
title: "Terms of Service"
lastUpdated: "2024-03-13"
summary: "Legal terms for using Pythoness Programmer services"
---

Content here...
```

### 2. Component-Based Interactive Content

Used for features requiring complex interactivity and state management:

- Vibe Coding Cheatsheet - A professional showcase of TailwindCSS capabilities combined with interactive features

The cheatsheet is implemented as a React component-based page with:

- Custom components for specific functionality
- Advanced TailwindCSS styling techniques and patterns
- Structured data in TypeScript files
- Interactive features like copy-to-clipboard
- Dynamic state management
- Custom styling and animations
- Responsive design patterns and best practices

This approach allows for more complex user interactions and immediate feedback that wouldn't be practical with static MDX content, while serving as a living example of professional TailwindCSS implementation.

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
- Vibe Coding Cheatsheet - Professional TailwindCSS showcase & developer resource (Freebie)
- Enhanced error handling with user feedback
- Input validation and sanitization for security
- Comprehensive testing suite

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

## Security Features

The application includes several security measures:

- **Input Validation**: All user inputs are validated before processing
- **Content Sanitization**: File paths and content are sanitized to prevent injection attacks
- **Error Boundaries**: Robust error handling to prevent exposing sensitive information
- **Filepath Validation**: Protection against directory traversal attacks

## Utility Libraries

### MDX Utilities (`src/lib/mdx.ts`)

Functions for handling MDX content with proper error handling and security:

```typescript
// Get content from an MDX file with validation
const { content, frontmatter } = await getMDXContent('path/to/file.mdx');

// Get all blog posts sorted by date
const posts = await getAllPosts();

// Get a specific blog post by its slug
const post = await getPostBySlug('post-slug');
```

### Validation Utilities (`src/lib/validation.ts`)

Functions for validating and sanitizing inputs:

```typescript
// Validate string input
const isValid = isValidString(userInput);

// Sanitize user input
const safeInput = sanitizeString(userInput);

// Validate email format
const isValidEmail = isValidEmail(emailInput);

// Validate schema with multiple fields
const validation = validateData(formData, schema);
if (!validation.valid) {
  // Handle validation errors
  console.error(validation.errors);
}
```

### Error Handling Utilities (`src/lib/errorHandling.ts`)

Functions for standardized error handling:

```typescript
// Log errors with context
logError('Failed to process data', error, { userId, action });

// Safely execute code with error handling
const result = await tryCatch(
  async () => await fetchData(),
  'Failed to fetch data',
  { id: 123 }
);
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

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build

# Start production server
npm start
```

## Testing

The project uses Jest and React Testing Library for testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm test -- --coverage
```

Test files follow this naming convention:

- `__tests__/lib/*.test.ts` - for utility function tests
- `__tests__/components/*.test.tsx` - for React component tests

## CI/CD

A GitHub Actions workflow runs on all PRs and pushes to the main branch:

- Runs linting checks
- Executes all tests
- Performs a security audit
- Builds the application

## Sections

1. Hero - Introduction and primary CTAs
2. Process - How tech coaching works
3. Services - Digital services overview
4. Experience - Professional background
5. Contact - Booking options and rates
6. Newsletter - Industry insights signup
7. Blog - Technical articles and resources
8. Vibe Coding Cheatsheet - Professional TailwindCSS showcase & developer resource (Freebie)

## Code Standards

The project follows a consistent set of coding standards documented in `src/docs/naming-conventions.md`, including:

- Naming conventions for variables, functions, and components
- File organization principles
- Documentation requirements
- TypeScript best practices

## Deployment

The site is built for deployment on Vercel or similar platforms that support Next.js.

## Contact

For questions or collaborations:
<admin@pythonessprogrammer.com>

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
