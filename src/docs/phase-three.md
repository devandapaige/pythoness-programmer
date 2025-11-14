# Website Redesign 2025 - Development Project Notes

**Project:** Website Redesign 2025  
**Branch:** `phase-three`  
**Status:** 🚧 In Progress  
**Last Updated:** [07.01.2025]  
**Developer:** [Amanda Nelson]

## Overview
Systematic rebuild of the homepage to reflect new, focused business strategy. Using component-based architecture for maintainability.

## Pre-Development Checklist

### Step 0: Setup & Housekeeping
- [X] Create new git branch: `git checkout -b feature/website-redesign-2025`
- [X] Review and update cal.com links with new service copy
- [X] Verify new URLs are ready for site implementation
  - https://cal.com/pythoness/20min - 20min Digital Psychic Session ($30)
  - https://cal.com/pythoness/60min - 60min Digital Psychic Session ($60)
- [X] Set up development environment
- [X] Review current homepage structure

**Status:** ✅ Complete  
**Notes:** All setup tasks completed successfully

---

## Component Development

### Step 1: Service Components
**Status:** 🚧 In Progress  
**Priority:** High

#### 1.1 ServiceCard Component
- [X] Create `src/components/ServiceCard.tsx`
- [X] Implement TypeScript interface for props
- [X] Style with Tailwind CSS
- [X] Add props: `title`, `description`, `price`, `bookingUrl`
- [X] Include call-to-action button (opens in new tab)
- [X] Test component rendering
- [X] Add to component library
- [X] Remove all hover animations and emdashes for accessibility

**File Path:** `src/components/ServiceCard.tsx`  
**Dependencies:** None  
**Status:** ✅ Complete  
**Notes:** Reusable component created with full styling from ServicesSection.tsx. Accessibility improved by removing hover animations and emdashes.

---

### Step 2: Homepage Section Components
**Status:** ✅ Complete  
**Priority:** High

#### 2.1 PainPointsSection Component
- [X] Create `src/components/PainPointsCard.tsx`
- [X] Implement "Feeling Stuck? I Can Help." heading
- [X] Create two-column grid layout
- [X] Add checkmark icons for bullet points
- [X] Include pain points:
  - Drowning in digital clutter
  - Overwhelmed by apps
  - Worried about online security
  - Can't find the right tools
  - Tech decisions causing stress
  - Need a clear digital strategy
- [X] Style with Tailwind CSS
- [X] Test responsive design
- [X] Remove all hover animations and emdashes for accessibility

**File Path:** `src/components/PainPointsCard.tsx`  
**Dependencies:** None  
**Status:** ✅ Complete  
**Notes:** Accessibility improved by removing hover animations and emdashes.

#### 2.2 ForeverTopicsSection Component
- [X] Create `src/components/ForeverTopicsCard.tsx`
- [X] Implement "Your Guide to Lifelong Tech Clarity." heading
- [X] Create responsive four-column grid (two-column mobile)
- [X] Add placeholder icons from react-icons
- [X] Include topics:
  - Digital Security
  - Workflow Optimization
  - Tool Selection
  - Digital Organization
  - Automation
  - Tech Confidence
  - Digital Wellness
  - Future-Proofing
- [X] Style with Tailwind CSS
- [X] Test responsive breakpoints
- [X] Remove all hover animations and emdashes for accessibility

**File Path:** `src/components/ForeverTopicsCard.tsx`  
**Dependencies:** None  
**Status:** ✅ Complete  
**Notes:** Accessibility improved by removing hover animations and emdashes.

#### 2.3 HomepageServices Component
- [X] Create `src/components/HomepageServicesCard.tsx`
- [X] Implement "Clear Support for Your Tech Goals." heading
- [X] Create responsive three-column grid
- [X] Include service tiers:
  - 20-Minute Digital Psychic Session
- 60-Minute Digital Psychic Session
  - Group Workshops
- [X] Add "Learn More" buttons linking to services page
- [X] Use ServiceCard styling as reference
- [X] Test component integration
- [X] Remove all hover animations and emdashes for accessibility

**File Path:** `src/components/HomepageServicesCard.tsx`  
**Dependencies:** ServiceCard component  
**Status:** ✅ Complete  
**Notes:** Accessibility improved by removing hover animations and emdashes.

#### 2.4 AboutSummary Component
- [X] Create `src/components/AboutSummaryCard.tsx`
- [X] Implement circular profile image (left side)
- [X] Add text content: "I'm Amanda, the Pythoness..."
- [X] Include "More About My Philosophy" CTA button
- [X] Link to `/about` page
- [X] Style with Tailwind CSS
- [X] Test responsive layout
- [X] Remove all hover animations and emdashes for accessibility

**File Path:** `src/components/AboutSummaryCard.tsx`  
**Dependencies:** Profile image  
**Status:** ✅ Complete  
**Notes:** Accessibility improved by removing hover animations and emdashes.

---

## Navigation Updates

### Step 3: Header Navigation
- [ ] Update `src/components/Header.tsx`
- [ ] Modify navigation links to:
  - Home
  - Services
  - Community
  - The Lab (or Resources)
  - Contact
- [ ] Update mobile hamburger menu
- [ ] Test navigation functionality
- [ ] Verify responsive behavior

**File Path:** `src/components/Header.tsx`  
**Status:** ⏳ Pending

---

## Page Assembly

### Step 4: Homepage Assembly
- [X] Open main homepage file (`src/app/page.tsx`)
- [X] Clear existing sections
- [X] Import new components:
  - PainPointsCard
  - ForeverTopicsCard
  - HomepageServicesCard
  - AboutSummaryCard
- [X] Arrange components in order:
  1. HeroSection (update text and CTAs)
  2. PainPointsCard
  3. ForeverTopicsCard
  4. HomepageServicesCard
  5. TestimonialsSection (existing)
  6. AboutSummaryCard
- [X] Update HeroSection CTAs:
  - Primary: `/services`
  - Secondary: `/resources` (or `/lab`)
- [X] Test page rendering
- [X] Verify component integration

**File Path:** `src/app/page.tsx`  
**Status:** ✅ Complete

---

## Footer Updates

### Step 5: Footer Component
- [ ] Update `src/components/Footer.tsx`
- [ ] Verify main navigation links match header
- [ ] Add "Shop" link in less prominent position
- [ ] Include social media links
- [ ] Add cal.com profile link
- [ ] Test footer functionality
- [ ] Verify responsive design

**File Path:** `src/components/Footer.tsx`  
**Status:** ⏳ Pending

---

## Testing & Quality Assurance

### Step 6: Testing
- [ ] Component unit tests
- [ ] Integration tests
- [ ] Responsive design testing
- [ ] Cross-browser compatibility
- [ ] Performance testing
- [ ] Accessibility testing

**Status:** ⏳ Pending

### Step 7: Deployment
- [ ] Code review
- [ ] Merge to main branch
- [ ] Deploy to staging
- [ ] User acceptance testing
- [ ] Deploy to production
- [ ] Monitor for issues

**Status:** ⏳ Pending

---

## Notes & Decisions

### Technical Decisions
- Using component-based architecture for maintainability
- Tailwind CSS for styling consistency
- TypeScript for type safety
- React Icons for icon library

### Content Decisions
- Simplified navigation structure
- Focused service offerings
- Clear value proposition in hero section

### Design Decisions
- Clean, modern UI
- Mobile-first responsive design
- Consistent color scheme and typography

---

## Issues & Blockers

### Current Issues
- [ ] None identified yet

### Resolved Issues
- [ ] ServiceCard component completed successfully
- [ ] All homepage Card components completed
- [ ] Homepage assembly completed successfully

---

## Resources & References

### Design Assets
- Profile image: `public/images/headshot.png`
- Icons: react-icons library
- Fonts: Existing font stack

### External Links
- Cal.com booking links (updated):
  - https://cal.com/pythoness/20min - 20min Software Psychic Session ($30)
- https://cal.com/pythoness/60min - 60min Software Psychic Session ($60)
- Social media profiles
- Service page URLs

---

## Next Steps
1. ✅ Complete Step 0 setup
2. ✅ Begin component development (Step 1) - ServiceCard ✅ Complete
3. ✅ Implement homepage sections (Step 2) - All components ✅ Complete
4. ✅ Assemble homepage (Step 4) - All components integrated ✅ Complete
5. ⏳ Update navigation (Step 3)
6. ⏳ Update footer (Step 5)
7. ⏳ Testing and deployment (Steps 6-7)

## Current Progress Summary
- **Step 0:** ✅ Complete (Setup & Housekeeping)
- **Step 1:** ✅ Complete (ServiceCard Component)
- **Step 2:** ✅ Complete (All homepage components)
  - ✅ PainPointsCard
  - ✅ ForeverTopicsCard  
  - ✅ HomepageServicesCard
  - ✅ AboutSummaryCard
- **Step 3:** ⏳ Pending (Navigation Updates)
- **Step 4:** ✅ Complete (Homepage Assembly) - **Major milestone achieved!**
- **Step 5:** ⏳ Pending (Footer Updates)
- **Step 6:** ⏳ Pending (Testing)
- **Step 7:** ⏳ Pending (Deployment)