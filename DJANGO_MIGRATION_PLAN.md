# Django Migration Plan: Next.js to Django

## Executive Summary

This document outlines a comprehensive plan to migrate the Pythoness Programmer website from Next.js to Django. The migration addresses security concerns with Next.js while maintaining all current functionality and preparing for future Beehiiv integrations.

**Current State:** Next.js 14.1.0 with React, TypeScript, Tailwind CSS, MDX content  
**Target State:** Django 5.x with Django Templates or HTMX/Alpine.js for interactivity  
**Deployment Target:** Heroku

---

## 1. Current Site Analysis

### 1.1 Content Structure
- **27 MDX blog posts** in `src/content/blog/posts/`
- **Static pages:** About, Services, Resources, Privacy Policy, Terms, etc.
- **Interactive pages:** Vibe Coding Cheatsheet, Sourdough Corner
- **Blog features:** Search, tag filtering, RSS feed generation
- **Resources page:** Searchable resource library
- **Rest Period Implementation:** Homepage, Services, and About pages reflect rest mode (Nov 2025 - Mar 2026)

### 1.2 Key Integrations
- **Beehiiv:** Newsletter embed (`embeds.beehiiv.com`)
- **Cal.com:** Booking links (currently inactive during rest period, resume March 2026)
- **Hotjar:** Analytics tracking
- **Media hosting:** Beehiiv CDN for images
- **Substack:** AI Generation Experiments Substack (`pythoness.substack.com`)

### 1.3 Technical Features
- MDX content processing with frontmatter
- RSS feed generation (`scripts/generate-rss.js`)
- Tailwind CSS styling with custom brand colors
- **Active/Rest Period Color Schemes:** Green (active season) and Purple (rest period)
- TypeScript type safety
- Component-based architecture
- Server-side rendering (Next.js RSC)
- Rest period implementation with Pythia Oracles of Delphi theme

### 1.4 Complete Routes/Pages Inventory

**Main Pages:**
- `/` - Home (Rest Period page with Pythia Oracles theme)
- `/about` - About page (includes Active & Rest Periods section)
- `/services` - Services page (Rest Period mode)
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog post pages
- `/resources` - Free resources hub with search
- `/links` - Links page (social media, booking, resources)
- `/support` - Support the Pythoness page

**Resource Pages:**
- `/accessibility` - Digital Accessibility Legal Guide
- `/ai-mythbusting` - AI Myth-Busting Critical Thinking Toolkit
- `/async` - Async Project & Web Presence Reading service page
- `/back-to-basics` - Back to Basics: Digital Organization & AI-Ready Workflows
- `/digital-spring-cleaning` - Digital Spring Cleaning resources
- `/mindful-automation` - Mindful Automation: Systems That Work For You
- `/neuroinclusive-design` - Neuroinclusive Design: Building Accessible Tech
- `/passwords` - Password and Multi-Factor Authentication User Guide
- `/privacy-pleasure` - Privacy Pleasure: Your 4-Week Journey to Digital Independence
- `/sourdough` - Sourdough Corner (baking resources)
- `/tech-boundaries` - Tech Boundaries: Building Brain-Friendly Digital Systems
- `/vibe-coding-cheatsheet` - Vibe Coding Cheatsheet (developer resource)

**Legal Pages:**
- `/privacy-policy` - Privacy Policy
- `/terms` - Terms of Service

**Redirects:**
- `/booknow` - Redirects to Cal.com (currently inactive during rest period)

**Blog Posts (27 total):**
- `/blog/accommodating-yourself-is-cute`
- `/blog/ai-mythbusting-critical-thinking-toolkit`
- `/blog/back-to-basics-ai-ready-workflows`
- `/blog/digital-accessibility-legal-guide-resource`
- `/blog/digital-spring-cleaning-a-month-of-grit-and-growth`
- `/blog/digital-spring-cleaning-deepening-our-grit-journey`
- `/blog/digital-spring-cleaning-grit-framework-toolkit`
- `/blog/digital-sustainability-that-wont-burn-you-out`
- `/blog/error-proofing-your-automation`
- `/blog/how-to-detect-ai-art`
- `/blog/lunar-new-year-2025`
- `/blog/mindful-automation-systems`
- `/blog/mindful-automation-you-framework-system`
- `/blog/modern-remote-work-communication-etiquette-2026`
- `/blog/monthly-grit-framework-for-your-digital-spring-cleaning`
- `/blog/monthly-grit-reflection-worksheet`
- `/blog/neuroinclusive-design-building-accessible-tech`
- `/blog/on-elon-musk-and-dates`
- `/blog/password-security-complete-guide`
- `/blog/privacy-pleasure-digital-independence`
- `/blog/sawdust-and-sacred-stones`
- `/blog/sourdough-corner-baking-resources`
- `/blog/tech-boundaries-brain-friendly-systems`
- `/blog/tech-is-just-a-tool`
- `/blog/the-you-framework`
- `/blog/todoist-scripts`
- `/blog/vibe-coding-cheatsheet-developer-resource`

**Note:** During rest period (Nov 2025 - Mar 2026), services pages show rest mode messaging. All other pages remain accessible.

### 1.5 Rest Period Implementation

**Current Status:** Rest Mode (November 2025 - March 2026)

**Rest Period Features:**
- Homepage shows rest mode with Pythia Oracles of Delphi theme
- Services page shows rest period messaging instead of booking links
- About page includes Active & Rest Periods section explaining the tradition
- Purple color scheme throughout (replaces green during rest period)
- Newsletter signup emphasized for return notifications
- All booking links hidden/disabled during rest period

**Philosophy:**
- Following the tradition of the Pythia Oracles of Delphi
- Accommodates chronic illnesses and chronic pain
- Nurtures creativity through intentional slowness
- Active season: March - November (green theme)
- Rest period: November - March (purple theme)

**Implementation Notes for Django:**
- Create system to toggle between active/rest color schemes
- Implement date-based or manual switching
- Rest period pages should show appropriate messaging
- Maintain all content accessibility during rest period

---

## 2. Migration Strategy

### 2.1 Architecture Decision: Django Template System vs. Modern Frontend

**Option A: Django Templates + HTMX/Alpine.js (Recommended)**
- ✅ Simpler deployment on Heroku
- ✅ Better SEO (server-rendered)
- ✅ Lower complexity
- ✅ Easier to maintain
- ✅ Django's built-in security features
- ✅ Can use Tailwind CSS via CDN or build process
- ⚠️ Less interactive than React (but HTMX can handle most needs)

**Option B: Django REST API + React Frontend**
- ✅ Maintains React component structure
- ✅ More complex deployment
- ❌ Loses some Django benefits
- ❌ More moving parts

**Recommendation:** Option A (Django Templates + HTMX/Alpine.js)

### 2.2 Content Management Strategy

**For Blog Posts:**
- **✅ DECISION: Use Django models (Post, Tag, Author) with Django Admin**
- Migrate all MDX posts to Django database models
- Set up Django admin interface for easy content management
- Use rich text editor (django-ckeditor or similar) for post content
- Support Markdown in admin if preferred

**For Static Pages:**
- Convert to Django templates
- Use Django's flatpages app or custom page models

---

## 3. Detailed Migration Plan

### Phase 1: Project Setup & Foundation (Week 1)

#### 3.1.1 Django Project Initialization
- [ ] Create new Django project structure
- [ ] Set up virtual environment
- [ ] Install dependencies:
  - Django 5.x
  - django-extensions (for management commands)
  - psycopg2-binary (for Postgres)
  - django-ckeditor or django-tinymce (for rich text editing in admin)
  - markdown (for Markdown support in posts)
  - django-compressor or django-tailwind (for Tailwind CSS)
  - gunicorn (for Heroku)
  - whitenoise (for static files)
  - python-decouple (for environment variables)
  - django-environ (alternative to python-decouple)

#### 3.1.2 Project Structure
```
pythoness-django/
├── manage.py
├── requirements.txt
├── Procfile (for Heroku)
├── runtime.txt (Python version)
├── pythoness/
│   ├── settings/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── development.py
│   │   └── production.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── apps/
│   ├── blog/
│   │   ├── models.py (optional, for future)
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── templates/
│   │   └── management/commands/ (for RSS generation)
│   ├── pages/
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── templates/
│   ├── resources/
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── templates/
│   └── core/
│       ├── templatetags/ (custom template tags)
│       └── context_processors.py
├── content/
│   ├── blog/
│   │   └── posts/ (MDX files)
│   └── static_pages/ (if needed)
├── static/
│   ├── css/
│   ├── js/
│   └── images/
├── templates/
│   ├── base.html
│   ├── components/ (reusable components)
│   └── pages/
└── media/ (user uploads)
```

#### 3.1.3 Database Setup (Postgres)
- [ ] **Local Development:**
  - Install Postgres locally (if not already installed)
  - Create database: `createdb pythoness_db`
  - Create user: `createuser pythoness_user` (or use existing user)
  - Grant permissions: `GRANT ALL PRIVILEGES ON DATABASE pythoness_db TO pythoness_user;`
  - Update Django settings with local database config
- [ ] **Heroku Postgres:**
  - Add Heroku Postgres addon: `heroku addons:create heroku-postgresql:mini` (or preferred tier)
  - Heroku automatically sets `DATABASE_URL` environment variable
  - Django will use `dj-database-url` to parse the connection string
- [ ] **Database Configuration:**
  - Use `dj-database-url` package for easy database URL parsing
  - Configure settings to use Postgres in production, SQLite in development (optional)

#### 3.1.4 Heroku Configuration
- [ ] Create `Procfile`: `web: gunicorn pythoness.wsgi --log-file -`
- [ ] Create `runtime.txt` with Python version
- [ ] Set up `requirements.txt`
- [ ] Configure `ALLOWED_HOSTS` for Heroku domain
- [ ] Set up environment variables in Heroku config
- [ ] Configure static files with WhiteNoise

### Phase 2: Core Infrastructure (Week 1-2)

#### 3.2.1 Base Template & Layout
- [ ] Create `base.html` with:
  - Header component (navigation)
  - Footer component
  - Meta tags and SEO
  - Tailwind CSS integration
  - Hotjar script
  - CookieYes integration
- [ ] Port Header component from React to Django template
- [ ] Port Footer component from React to Django template
- [ ] Set up custom template tags for reusable components

#### 3.2.2 Styling Migration
- [ ] Set up Tailwind CSS in Django (django-tailwind or CDN)
- [ ] Port custom brand colors to Tailwind config:
  - **Active Season Colors (March - November):**
    - `--brand-forest: #2e3d2a` (brand-green-dark) - Main background
    - `--brand-green: #32d24d` (brand-green-accent) - Primary accent
    - `--brand-hyperlink-green: #156624` (brand-green-hyperlink) - Links
  - **Rest Period Colors (November - March):**
    - `--brand-purple: #442b48` (brand-purple-dark) - Main background (replaces green)
    - `--brand-light-purple: #d8b9f7` (brand-purple-light) - Primary accent (replaces green accent)
  - **Shared Colors:**
    - `--brand-cream: #f4f1de` (brand-cream) - Text on dark backgrounds
    - `--brand-blue: #00a6fb` (brand-blue)
    - `--brand-fuchsia: #ff39bc` (brand-fuchsia)
- [ ] Create CSS file with custom properties (brand colors)
- [ ] **Implement Active/Rest Period Color Switching:**
  - Create system to toggle between green (active) and purple (rest) color schemes
  - Default to rest period colors initially (until March 2026)
  - Consider date-based automatic switching or manual toggle
- [ ] **Note:** Brand colors are fixed, but layout/styling can be improved
- [ ] Test responsive design

#### 3.2.3 Static Files & Media
- [ ] Copy all static assets from `public/` to `static/`
- [ ] Set up WhiteNoise for static file serving
- [ ] Configure media file handling
- [ ] Test image loading

### Phase 3: Content Migration (Week 2-3)

#### 3.3.1 Blog System with Django Models
- [ ] Create `blog` app
- [ ] Create Django models:
  - `Post` model (title, slug, author, content, description, published_date, created_at, updated_at, image, is_published)
  - `Tag` model (name, slug)
  - `Author` model (name, bio, email) - or use Django's User model
  - Many-to-many relationship: Post ↔ Tag
- [ ] Set up Django Admin:
  - Register Post, Tag, Author models
  - Customize admin interface (list display, filters, search)
  - Add rich text editor for post content
  - Add image upload handling
  - Add slug auto-generation from title
- [ ] Create management command to import MDX posts:
  - `python manage.py import_mdx_posts` - Reads all MDX files and creates Post objects
  - Parses frontmatter and converts MDX content to HTML
  - Creates Tag objects as needed
  - Handles existing posts (update vs. create)
- [ ] Create blog views:
  - `blog_list` - List all posts with search/filter
  - `blog_detail` - Individual post view
- [ ] Create blog templates:
  - `blog/list.html` - Blog index with search
  - `blog/detail.html` - Individual post
  - `blog/components/post_card.html`
  - `blog/components/post_metadata.html`
  - `blog/components/post_navigation.html`
- [ ] Port blog search functionality (title, description, tags) - Use Django's Q objects
- [ ] Port tag filtering - Use Django queryset filtering
- [ ] Create RSS feed view (`/feed.xml`) - Use Django's syndication framework
- [ ] Run migrations: `python manage.py makemigrations` and `python manage.py migrate`

#### 3.3.2 Static Pages Migration
- [ ] Create `pages` app
- [ ] Convert each static page:
  - Home page (`/`) - **Rest Period implementation with Pythia Oracles theme**
  - About (`/about`) - **Includes Active & Rest Periods section**
  - Services (`/services`) - **Rest Period mode with newsletter signup**
  - Resources (`/resources`)
  - Links (`/links`) - **Rest Period colors, no booking links**
  - Support (`/support`)
  - Privacy Policy (`/privacy-policy`)
  - Terms (`/terms`)
  - All resource pages (accessibility, ai-mythbusting, async, back-to-basics, digital-spring-cleaning, mindful-automation, neuroinclusive-design, passwords, privacy-pleasure, sourdough, tech-boundaries, vibe-coding-cheatsheet)
- [ ] Port React components to Django templates:
  - RestPeriodHome → template component (rest period homepage)
  - HeroCard → template component (for active season)
  - ServiceCard → template component
  - AboutCard → template component
  - NewsletterCard → template component
  - PainPointsCard → template component
  - ForeverTopicsCard → template component
- [ ] **Implement Rest Period Logic:**
  - Create template tags or context processors for rest period detection
  - Conditionally show rest period vs. active season content
  - Handle color scheme switching

#### 3.3.3 Interactive Pages
- [ ] **Vibe Coding Cheatsheet:**
  - Convert React components to Django templates
  - Port interactive features (copy-to-clipboard) to vanilla JS or Alpine.js
  - Port data structures from TypeScript to Python
- [ ] **Sourdough Corner:**
  - Convert React components to Django templates
  - Port recipe data structures
  - Maintain interactive features with HTMX/Alpine.js

### Phase 4: Features & Functionality (Week 3-4)

#### 4.1 Search Functionality
- [ ] Blog search (title, description, tags)
- [ ] Resources search (title, description, features)
- [ ] Implement search views and templates

#### 4.2 Resources Page
- [ ] Port resources data from TypeScript to Python
- [ ] Create resources view and template
- [ ] Port search functionality

#### 4.3 Integrations
- [ ] **Beehiiv:** Keep iframe embed (no changes needed)
- [ ] **Cal.com:** 
  - Booking links currently inactive during rest period
  - Implement logic to show/hide booking links based on active/rest period
  - Verify all booking links work when active season resumes (March 2026)
- [ ] **Substack:** Update link from `/podcast` to main Substack (`pythoness.substack.com`) - "AI Generation Experiments Substack"
- [ ] **Hotjar:** Port Hotjar component to Django template
- [ ] **CookieYes:** Port CookieYes component to Django template

#### 4.4 RSS Feed
- [ ] Create Django view for RSS feed
- [ ] Port RSS generation logic
- [ ] Test feed validation

### Phase 5: Content & Layout Improvements (Week 4)

#### 5.1 AI-Assisted Content Review
- [ ] **Site Copy Review:**
  - Use AI prompts to analyze current copy for clarity, tone, and effectiveness
  - Generate improved versions of key sections (hero, services, about)
  - Review and refine AI suggestions
  - Update templates with improved copy
- [ ] **Layout Optimization:**
  - Use AI to suggest layout improvements while maintaining brand colors
  - Analyze user flow and suggest UX improvements
  - Generate alternative layouts for key pages
  - Test and implement approved improvements
- [ ] **SEO Content:**
  - Use AI to optimize meta descriptions
  - Generate alt text suggestions for images
  - Improve heading structure and content hierarchy

#### 5.2 AI Prompt Templates
Create a document with reusable prompts for:
- Copy improvement: "Review this website copy for [clarity/tone/effectiveness]..."
- Layout suggestions: "Suggest layout improvements for [page] that maintain these brand colors..."
- SEO optimization: "Optimize this content for SEO while maintaining the voice..."
- Accessibility: "Review this content for accessibility and suggest improvements..."

### Phase 6: Testing & Optimization (Week 4-5)

#### 6.1 Testing
- [ ] Test all routes/pages
- [ ] Test blog functionality (list, detail, search, tags, admin)
- [ ] Test RSS feed
- [ ] Test responsive design
- [ ] Test integrations (Beehiiv, Cal.com, Hotjar)
- [ ] Cross-browser testing
- [ ] Performance testing
- [ ] Test Django admin interface

#### 6.2 SEO
- [ ] Verify all meta tags
- [ ] Test Open Graph tags
- [ ] Verify sitemap (create if needed)
- [ ] Test structured data (if applicable)

#### 6.3 Security
- [ ] Review Django security settings
- [ ] Set up CSRF protection
- [ ] Configure secure headers
- [ ] Review input validation
- [ ] Set up error handling
- [ ] Review admin security (strong passwords, 2FA if possible)

### Phase 7: Deployment (Week 5)

#### 6.1 Heroku Setup
- [ ] Create Heroku app
- [ ] Configure buildpacks (Python, Node.js if using Tailwind build)
- [ ] Set environment variables:
  - `SECRET_KEY`
  - `DEBUG=False`
  - `ALLOWED_HOSTS`
  - `HOTJAR_ID` (if needed)
  - Database URL (if using Postgres)
- [ ] Set up Heroku Postgres (if needed for future features)
- [ ] Configure static files collection
- [ ] Test deployment

#### 6.2 Domain & DNS
- [ ] Point domain to Heroku
- [ ] Configure SSL (Heroku handles this)
- [ ] Test domain redirects

#### 6.3 Monitoring
- [ ] Set up error logging (Sentry or similar)
- [ ] Configure logging
- [ ] Set up uptime monitoring

### Phase 8: Post-Migration (Week 5+)

#### 7.1 Cleanup
- [ ] Archive Next.js codebase (keep for reference)
- [ ] Update documentation
- [ ] Update README

#### 7.2 Future Enhancements
- [ ] Consider migrating MDX to Django models for admin interface
- [ ] Set up Django admin for content management
- [ ] Explore Beehiiv API integration (if available)
- [ ] Add caching (Redis/Memcached) for blog posts
- [ ] Consider CDN for static files

---

## 4. Technical Decisions

### 4.1 Blog Content Management

**Approach:** Django Models with Admin Interface

```python
# apps/blog/models.py
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()  # Rich text or Markdown
    description = models.TextField(max_length=500)
    tags = models.ManyToManyField(Tag, blank=True)
    image = models.URLField(blank=True, null=True)  # Or ImageField for uploads
    published_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-published_date', '-created_at']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title
```

**MDX Import Command:**
```python
# apps/blog/management/commands/import_mdx_posts.py
from django.core.management.base import BaseCommand
import frontmatter
import markdown
from pathlib import Path
from apps.blog.models import Post, Tag

class Command(BaseCommand):
    help = 'Import MDX blog posts into Django database'
    
    def handle(self, *args, **options):
        # Read MDX files and create Post objects
        # Parse frontmatter, create tags, etc.
```

### 4.2 Template Component System

**Approach:** Django template includes + custom template tags

```django
{# templates/components/service_card.html #}
<div class="service-card">
  <h3>{{ title }}</h3>
  <p>{{ description }}</p>
  <a href="{{ cta_link }}">{{ cta_text }}</a>
</div>

{# Usage #}
{% include 'components/service_card.html' with title="..." description="..." %}
```

### 4.3 Search Implementation

**Approach:** Django QuerySet filtering with Q objects (can upgrade to full-text search later)

```python
# apps/blog/views.py
from django.db.models import Q
from django.views.generic import ListView
from .models import Post

class BlogListView(ListView):
    model = Post
    template_name = 'blog/list.html'
    context_object_name = 'posts'
    paginate_by = 10
    
    def get_queryset(self):
        queryset = Post.objects.filter(is_published=True)
        
        # Search functionality
        search_query = self.request.GET.get('q')
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(tags__name__icontains=search_query)
            ).distinct()
        
        # Tag filtering
        tag_slug = self.request.GET.get('tag')
        if tag_slug:
            queryset = queryset.filter(tags__slug=tag_slug)
        
        return queryset
```

### 4.4 Interactive Features

**Approach:** HTMX + Alpine.js for interactivity

- Copy-to-clipboard: Alpine.js
- Search: HTMX for live search
- Tag filtering: HTMX for dynamic filtering
- Form submissions: Django forms + HTMX

---

## 5. File-by-File Migration Checklist

### 5.1 Components to Convert
- [ ] `Header.tsx` → `templates/components/header.html` (rest period: no Services/Book links)
- [ ] `Footer.tsx` → `templates/components/footer.html` (rest period: Services section with newsletter)
- [ ] `RestPeriodHome.tsx` → `templates/components/rest_period_home.html` (rest period homepage)
- [ ] `HeroCard.tsx` → `templates/components/hero_card.html` (for active season)
- [ ] `ServiceCard.tsx` → `templates/components/service_card.html`
- [ ] `AboutCard.tsx` → `templates/components/about_card.html`
- [ ] `NewsletterCard.tsx` → `templates/components/newsletter_card.html`
- [ ] `PainPointsCard.tsx` → `templates/components/pain_points_card.html`
- [ ] `ForeverTopicsCard.tsx` → `templates/components/forever_topics_card.html`
- [ ] `PostCard.tsx` → `templates/blog/components/post_card.html`
- [ ] `PostMetadata.tsx` → `templates/blog/components/post_metadata.html`
- [ ] `PostNavigation.tsx` → `templates/blog/components/post_navigation.html`
- [ ] `Tag.tsx` → `templates/blog/components/tag.html`
- [ ] `TagFilter.tsx` → `templates/blog/components/tag_filter.html`
- [ ] `TagList.tsx` → `templates/blog/components/tag_list.html`
- [ ] `ResourcesList.tsx` → `templates/resources/components/resources_list.html`
- [ ] `Signature.tsx` → `templates/components/signature.html`
- [ ] `Hotjar.tsx` → `templates/components/hotjar.html`
- [ ] `CookieYes.tsx` → `templates/components/cookie_yes.html`

### 5.2 Pages to Convert
- [ ] `src/app/page.tsx` → `templates/pages/home.html` (Rest Period implementation)
- [ ] `src/app/about/page.tsx` → `templates/pages/about.html` (includes Active & Rest Periods)
- [ ] `src/app/services/page.tsx` → `templates/pages/services.html` (Rest Period mode)
- [ ] `src/app/blog/page.tsx` → `templates/blog/list.html`
- [ ] `src/app/blog/[slug]/page.tsx` → `templates/blog/detail.html`
- [ ] `src/app/resources/page.tsx` → `templates/resources/list.html`
- [ ] `src/app/links/page.tsx` → `templates/pages/links.html` (Rest Period colors)
- [ ] `src/app/support/page.tsx` → `templates/pages/support.html`
- [ ] `src/app/privacy-policy/page.tsx` → `templates/pages/privacy_policy.html`
- [ ] `src/app/terms/page.tsx` → `templates/pages/terms.html`
- [ ] `src/app/accessibility/page.tsx` → `templates/pages/accessibility.html`
- [ ] `src/app/ai-mythbusting/page.tsx` → `templates/pages/ai_mythbusting.html`
- [ ] `src/app/async/page.tsx` → `templates/pages/async.html`
- [ ] `src/app/back-to-basics/page.tsx` → `templates/pages/back_to_basics.html`
- [ ] `src/app/digital-spring-cleaning/page.tsx` → `templates/pages/digital_spring_cleaning.html`
- [ ] `src/app/mindful-automation/page.tsx` → `templates/pages/mindful_automation.html`
- [ ] `src/app/neuroinclusive-design/page.tsx` → `templates/pages/neuroinclusive_design.html`
- [ ] `src/app/passwords/page.tsx` → `templates/pages/passwords.html`
- [ ] `src/app/privacy-pleasure/page.tsx` → `templates/pages/privacy_pleasure.html`
- [ ] `src/app/sourdough/page.tsx` → `templates/pages/sourdough.html`
- [ ] `src/app/tech-boundaries/page.tsx` → `templates/pages/tech_boundaries.html`
- [ ] `src/app/vibe-coding-cheatsheet/page.tsx` → `templates/pages/vibe_coding_cheatsheet.html`

### 5.3 Utilities to Port
- [ ] `src/lib/mdx.ts` → `apps/blog/utils.py`
- [ ] `src/lib/resources.ts` → `apps/resources/data.py`
- [ ] `src/lib/validation.ts` → `apps/core/validators.py`
- [ ] `src/lib/errorHandling.ts` → `apps/core/error_handling.py`
- [ ] `scripts/generate-rss.js` → `apps/blog/management/commands/generate_rss.py`

---

## 6. Dependencies & Requirements

### 6.1 Python Dependencies
```txt
Django>=5.0,<6.0
gunicorn>=21.2.0
whitenoise>=6.6.0
python-frontmatter>=1.0.0  # For MDX import command
markdown>=3.5.0
python-decouple>=3.8
django-extensions>=3.2.0
psycopg2-binary>=2.9.9  # For Postgres
dj-database-url>=2.1.0  # For parsing DATABASE_URL
django-ckeditor>=6.7.0  # Rich text editor for admin (or django-tinymce)
```

### 6.2 Optional Dependencies
```txt
django-tailwind>=3.8.0  # For Tailwind CSS integration
django-compressor>=4.4  # For CSS/JS compression
django-htmx>=1.18.0  # For HTMX integration
```

### 6.3 Node.js Dependencies (if using Tailwind build)
```json
{
  "dependencies": {
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.4"
  }
}
```

---

## 7. Heroku Deployment Configuration

### 7.1 Procfile
```
web: gunicorn pythoness.wsgi --log-file -
release: python manage.py collectstatic --noinput
```

### 7.2 runtime.txt
```
python-3.12.0
```

### 7.3 Environment Variables (Heroku Config Vars)
```
SECRET_KEY=<generate-secure-key>
DEBUG=False
ALLOWED_HOSTS=pythonessprogrammer.com,www.pythonessprogrammer.com,your-app.herokuapp.com
HOTJAR_ID=<your-hotjar-id>
DATABASE_URL=<automatically-set-by-heroku-postgres>
```

**Note:** Heroku Postgres automatically sets `DATABASE_URL`. Use `dj-database-url` to parse it in Django settings.

### 7.4 Buildpacks
1. `heroku/python` (Python buildpack)
2. `heroku/nodejs` (if using Tailwind build process)

---

## 8. Risk Assessment & Mitigation

### 8.1 Risks
1. **SEO Impact:** URL changes could affect rankings
   - **Mitigation:** Set up 301 redirects for all old URLs
2. **Functionality Loss:** Some React features may not translate directly
   - **Mitigation:** Thorough testing, consider HTMX/Alpine.js alternatives
3. **Performance:** Django may have different performance characteristics
   - **Mitigation:** Implement caching, optimize queries
4. **Beehiiv Integration:** Need to verify embed still works
   - **Mitigation:** Test early, Beehiiv embeds are iframe-based (should work)

### 8.2 Rollback Plan
- Keep Next.js codebase until migration is verified
- Can quickly switch back if critical issues arise
- Heroku allows easy rollback of deployments

---

## 9. Timeline Estimate

- **Week 1:** Setup, Postgres configuration, base templates, static pages
- **Week 2:** Blog models, Django admin, MDX import, content migration
- **Week 3:** Interactive pages, features, integrations
- **Week 4:** AI-assisted content/layout improvements, testing, optimization
- **Week 5:** Deployment prep, deployment, monitoring, cleanup

**Total Estimated Time:** 5 weeks (includes time for content/layout improvements)

---

## 10. Success Criteria

- [ ] All pages render correctly
- [ ] Blog functionality works (list, detail, search, tags)
- [ ] RSS feed generates correctly
- [ ] All integrations work (Beehiiv, Cal.com, Hotjar)
- [ ] Site is responsive on all devices
- [ ] Performance is acceptable (< 2s page load)
- [ ] SEO meta tags are correct
- [ ] No broken links
- [ ] Deployed successfully on Heroku
- [ ] Domain points to new site

---

## 11. Next Steps

1. **Review this plan** - Discuss any concerns or changes
2. **Create new branch** - `django-migration` or similar
3. **Set up Django project** - Start with Phase 1
4. **Iterate** - Work through phases systematically
5. **Test thoroughly** - Before final deployment
6. **Deploy** - When ready, deploy to Heroku
7. **Monitor** - Watch for issues post-deployment

---

## 12. Postgres Setup Guide

### 12.1 Local Development Setup

**macOS (using Homebrew):**
```bash
# Install Postgres
brew install postgresql@15

# Start Postgres service
brew services start postgresql@15

# Create database
createdb pythoness_db

# Create user (optional - can use your system user)
createuser pythoness_user -P  # Will prompt for password

# Grant permissions
psql pythoness_db
GRANT ALL PRIVILEGES ON DATABASE pythoness_db TO pythoness_user;
\q
```

**Linux (Ubuntu/Debian):**
```bash
# Install Postgres
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Switch to postgres user
sudo -u postgres psql

# Create database and user
CREATE DATABASE pythoness_db;
CREATE USER pythoness_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE pythoness_db TO pythoness_user;
\q
```

**Windows:**
- Download and install from [postgresql.org](https://www.postgresql.org/download/windows/)
- Use pgAdmin or command line to create database and user

### 12.2 Django Settings Configuration

```python
# settings/base.py
import dj_database_url
from decouple import config

# Database configuration
DATABASES = {
    'default': dj_database_url.config(
        default=config('DATABASE_URL', default='postgresql://pythoness_user:password@localhost:5432/pythoness_db'),
        conn_max_age=600,
        conn_health_checks=True,
    )
}
```

### 12.3 Heroku Postgres Setup

```bash
# Add Postgres addon (free tier for testing, upgrade for production)
heroku addons:create heroku-postgresql:mini

# Check database URL (automatically set)
heroku config:get DATABASE_URL

# Run migrations on Heroku
heroku run python manage.py migrate

# Create superuser on Heroku
heroku run python manage.py createsuperuser
```

### 12.4 Common Postgres Commands

```bash
# Connect to database
psql pythoness_db

# List all databases
\l

# List all tables
\dt

# Describe a table
\d table_name

# Exit psql
\q
```

---

## 13. AI Prompt Templates for Content Improvement

### 13.1 Copy Improvement Prompts

**Hero Section:**
```
Review this hero section copy for clarity, engagement, and conversion effectiveness. 
Maintain the brand voice (professional, empathetic, neurodivergent-friendly, judgment-free).
Current copy: [paste copy]
Suggest 3 improved versions that are more compelling while staying true to the brand.
```

**Service Descriptions:**
```
Analyze these service descriptions for clarity and persuasiveness. 
Suggest improvements that:
- Clearly communicate value
- Address pain points
- Use accessible language
- Maintain professional tone
Current descriptions: [paste descriptions]
```

**About Section:**
```
Review this about section for authenticity and connection. 
Suggest improvements that:
- Build trust
- Show personality
- Demonstrate expertise
- Remain approachable
Current copy: [paste copy]
```

### 13.2 Layout Optimization Prompts

**Page Layout:**
```
Analyze this page layout for UX best practices. 
Suggest improvements that:
- Improve visual hierarchy
- Enhance readability
- Guide user attention
- Maintain these brand colors: [list colors]
Current layout structure: [describe or paste HTML structure]
```

**Mobile Responsiveness:**
```
Review this page for mobile responsiveness and suggest improvements.
Focus on:
- Touch target sizes
- Content stacking order
- Readability on small screens
- Navigation accessibility
```

### 13.3 SEO Optimization Prompts

**Meta Descriptions:**
```
Generate SEO-optimized meta descriptions for these pages:
- Include target keywords naturally
- Stay within 155 characters
- Include a clear call-to-action
- Maintain brand voice
Pages: [list pages]
```

**Content Structure:**
```
Review this content for SEO best practices:
- Heading hierarchy (H1, H2, H3)
- Keyword placement
- Internal linking opportunities
- Content length and depth
Current content: [paste content]
```

---

## 14. Questions to Discuss

1. **Rich Text Editor:** Do you prefer CKEditor, TinyMCE, or Markdown for blog posts?
2. **Image Handling:** Upload to Django/media or continue using external URLs (Beehiiv CDN)?
3. **Caching:** Should we implement caching from the start?
4. **Beehiiv API:** Are there specific Beehiiv features you want to integrate?
5. **Content Review:** Which pages/sections should we prioritize for AI-assisted improvements?

---

## Appendix: Useful Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django Deployment Checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/)
- [Heroku Django Guide](https://devcenter.heroku.com/articles/django-app-configuration)
- [HTMX Documentation](https://htmx.org/)
- [Alpine.js Documentation](https://alpinejs.dev/)
- [python-frontmatter](https://github.com/eyeseast/python-frontmatter)

---

## 15. Complete Site Structure Reference

### 15.1 All Pages & Routes (Complete List)

**Main Navigation Pages:**
- `/` - Home (Rest Period: Pythia Oracles theme, newsletter signup)
- `/about` - About Amanda (includes Active & Rest Periods section)
- `/services` - Services (Rest Period: shows rest mode, newsletter signup)
- `/blog` - Blog listing (search, tag filtering, RSS feed)
- `/blog/[slug]` - Individual blog posts (27 posts total)
- `/resources` - Free resources hub (searchable)
- `/links` - Links page (social media, resources, support)
- `/support` - Support the Pythoness page

**Resource Pages:**
- `/accessibility` - Digital Accessibility Legal Guide
- `/ai-mythbusting` - AI Myth-Busting Critical Thinking Toolkit
- `/async` - Async Project & Web Presence Reading service page
- `/back-to-basics` - Back to Basics: Digital Organization & AI-Ready Workflows
- `/digital-spring-cleaning` - Digital Spring Cleaning resources
- `/mindful-automation` - Mindful Automation: Systems That Work For You
- `/neuroinclusive-design` - Neuroinclusive Design: Building Accessible Tech
- `/passwords` - Password and Multi-Factor Authentication User Guide
- `/privacy-pleasure` - Privacy Pleasure: Your 4-Week Journey to Digital Independence
- `/sourdough` - Sourdough Corner (baking resources with recipes)
- `/tech-boundaries` - Tech Boundaries: Building Brain-Friendly Digital Systems
- `/vibe-coding-cheatsheet` - Vibe Coding Cheatsheet (developer resource)

**Legal Pages:**
- `/privacy-policy` - Privacy Policy
- `/terms` - Terms of Service (also `/terms-of-service`)

**Redirects:**
- `/booknow` - Redirects to Cal.com (currently inactive during rest period)

### 15.2 Blog Posts (27 Total)

All blog posts are located at `/blog/[slug]`:

1. `accommodating-yourself-is-cute`
2. `ai-mythbusting-critical-thinking-toolkit`
3. `back-to-basics-ai-ready-workflows`
4. `digital-accessibility-legal-guide-resource`
5. `digital-spring-cleaning-a-month-of-grit-and-growth`
6. `digital-spring-cleaning-deepening-our-grit-journey`
7. `digital-spring-cleaning-grit-framework-toolkit`
8. `digital-sustainability-that-wont-burn-you-out`
9. `error-proofing-your-automation`
10. `how-to-detect-ai-art`
11. `lunar-new-year-2025`
12. `mindful-automation-systems`
13. `mindful-automation-you-framework-system`
14. `modern-remote-work-communication-etiquette-2026`
15. `monthly-grit-framework-for-your-digital-spring-cleaning`
16. `monthly-grit-reflection-worksheet`
17. `neuroinclusive-design-building-accessible-tech`
18. `on-elon-musk-and-dates`
19. `password-security-complete-guide`
20. `privacy-pleasure-digital-independence`
21. `sawdust-and-sacred-stones`
22. `sourdough-corner-baking-resources`
23. `tech-boundaries-brain-friendly-systems`
24. `tech-is-just-a-tool`
25. `the-you-framework`
26. `todoist-scripts`
27. `vibe-coding-cheatsheet-developer-resource`

### 15.3 Rest Period Implementation Notes

**Pages with Rest Period Modifications:**
- `/` - Rest Period homepage with Pythia Oracles theme
- `/about` - Added Active & Rest Periods section
- `/services` - Rest mode messaging, no booking links
- `/links` - Purple theme, no booking links, rest mode notices
- Header - No Services or Book a Call links
- Footer - Services section replaced with rest mode notice and newsletter

**Color Scheme:**
- Rest Period: Purple dark (`#442b48`) as main, purple light (`#d8b9f7`) as accent
- Active Season: Green dark (`#2e3d2a`) as main, green accent (`#32d24d`) as accent

**Content Changes:**
- All booking links hidden/disabled
- Newsletter signup emphasized
- Return date: March 2026
- Active season: March - November 2026

---

**Document Version:** 2.0  
**Created:** 2025-01-XX  
**Last Updated:** 2025-01-XX  
**Updated for:** Rest Period implementation, complete page inventory
