# Naming Conventions

This document establishes standardized naming practices for our codebase to maintain consistency, readability, and quality across the project.

## General Principles

- Names should be descriptive and convey purpose
- Use consistent case styles within each category
- Prefer clarity over brevity
- Avoid abbreviations unless widely understood

## JavaScript/TypeScript

### Functions

- **React Components**: PascalCase
  - Example: `HeroSection`, `ContactForm`, `PostCard`
  
- **Utility/Helper Functions**: camelCase
  - Example: `getPostBySlug`, `sanitizeString`, `validateData`

- **Async Functions**: Prefix with descriptive verb, use camelCase
  - Example: `getAllPosts`, `getMDXContent`, `fetchUserData`

- **Event Handlers**: Prefix with 'handle', use camelCase
  - Example: `handleSubmit`, `handleClick`, `handleChange`

### Variables

- **Regular Variables**: camelCase
  - Example: `userData`, `postContent`, `isVisible`

- **Constants**: camelCase for local, UPPER_SNAKE_CASE for global
  - Example: `primaryColor` (local), `MAX_RETRIES` (global)

- **Boolean Variables**: Prefix with 'is', 'has', 'should', etc.
  - Example: `isLoading`, `hasPermission`, `shouldRedirect`

### Types & Interfaces

- **Types & Interfaces**: PascalCase
  - Example: `BlogPost`, `UserData`, `RequestOptions`

- **Props Types**: Suffix with 'Props'
  - Example: `ButtonProps`, `HeaderProps`, `PostCardProps`

## CSS

- **Class Names**: kebab-case
  - Example: `hero-section`, `nav-link`, `card-container`

- **Custom Properties**: kebab-case
  - Example: `--primary-color`, `--font-size-base`, `--spacing-unit`

## File Naming

- **React Components**: PascalCase
  - Example: `Header.tsx`, `PostCard.tsx`, `ServicesSection.tsx`

- **Utility Files**: camelCase
  - Example: `mdx.ts`, `validation.ts`, `errorHandling.ts`

- **Stylesheets**: Match the name of the component they style
  - Example: `Header.css` for `Header.tsx`

## Documentation

- **Comments**: Begin with capital letter, end with period
  - Focus on explaining "why" rather than "what"
  - Use JSDoc format for function documentation

## Specific Project Conventions

- Replace any usage of `dataProcess` with `processData` (camelCase)
- Refactor `calculate_metrics` to `calculateMetrics` (camelCase)
- Use descriptive naming for utility functions that clearly indicates their purpose

## Enforcement

- Code reviews should check for naming convention compliance
- Linting rules should be updated to enforce these conventions where possible
- New team members should be directed to this document during onboarding 