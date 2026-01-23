# CLAUDE.MD

## Project Overview
This is a portfolio website for **Juan Miguel Arias Mejias**, a full-stack developer specializing in Go and Vue.js. The site showcases services, projects, tech stack, metrics, testimonials, and provides contact forms for potential clients.

**Live Site**: https://juanmiguel.dev

## Tech Stack
- **Framework**: Nuxt 4 (Vue 3)
- **UI Library**: Vuetify 3
- **Language**: TypeScript (strict mode)
- **Styling**: SCSS + Vuetify grid system
- **i18n**: English & Spanish (default: English)
- **SEO**: @nuxtjs/seo, sitemap, robots.txt
- **Image Optimization**: @nuxt/image (webp, avif)
- **Analytics**: Facebook Pixel (ID: 921009970358099)
- **Deployment**: Vercel/Netlify compatible

## Project Structure
```
app/
├── components/           # Vue components
│   ├── NavigationBar.vue       # Top nav with language/theme toggle
│   ├── HeroSection.vue         # Landing hero section
│   ├── ServicesSection.vue     # Services offered
│   ├── ProjectsSection.vue     # Portfolio projects
│   ├── ProjectCard.vue         # Individual project card
│   ├── MetricsSection.vue      # Stats/achievements
│   ├── TechStackSection.vue    # Technologies used
│   ├── RecomendationsSection.vue # Client testimonials
│   ├── FaqSection.vue          # FAQ section
│   ├── ContactForm.vue         # Contact/lead form
│   └── AppFooter.vue           # Footer with links
├── composables/          # Vue composables
│   └── usePixel.ts      # Facebook Pixel tracking
├── pages/               # Nuxt pages
├── plugins/             # Nuxt plugins (Vuetify setup)
├── layouts/             # Layout templates
├── types/               # TypeScript types
├── assets/              # Styles and static assets
└── utils/               # Utility functions

locales/                 # i18n translation files
├── en.json             # English translations
└── es.json             # Spanish translations

public/                  # Static files
server/                  # Server middleware/API
```

## Key Features
- **Multilingual**: English (default) and Spanish with @nuxtjs/i18n
- **Dark/Light Mode**: Theme toggle in navigation
- **SEO Optimized**: Meta tags, sitemap, robots.txt, social cards
- **Responsive Design**: Mobile-first using Vuetify breakpoints
- **Event Tracking**: Facebook Pixel integration via `usePixel` composable
- **SSR**: Server-side rendering for better SEO and performance
- **Image Optimization**: Automatic webp/avif conversion with lazy loading

## Environment & Configuration
- **Site URL**: https://juanmiguel.dev
- **Facebook Pixel ID**: 921009970358099
- **Production indexing**: Enabled only in production (NODE_ENV=production)
- **Robots**: Blocks all bots in non-production, allows all in production

## Development Commands
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Important Notes for AI Assistants

### Analytics & Tracking
- Facebook Pixel events are tracked using the `usePixel()` composable
- Track events: contact form submissions, project interactions, landing page views
- Event names: 'contact_form_submit', 'project_click', 'landing_page_view', etc.

### Internationalization
- All user-facing text should be in translation files (locales/en.json, locales/es.json)
- Use `$t('key')` in templates for translations
- Language switching doesn't reload the page
- URL strategy: prefix_except_default (English has no prefix, Spanish uses /es)

### Component Patterns
- Use Vuetify components (v-btn, v-card, v-container, etc.)
- Follow mobile-first responsive design
- Use composition API with `<script setup>`
- TypeScript strict mode is enabled

### Styling
- Global styles in `app/assets/styles/main.scss`
- Use Vuetify's theme system for colors
- Responsive breakpoints: xs, sm, md, lg, xl, xxl
- Material Design Icons available via @mdi/font

### SEO Best Practices
- All pages should have proper meta tags
- Use semantic HTML
- Images should have alt text
- Maintain fast load times
- Site is indexable only in production

### Deployment
- Production builds should use `npm run build`
- Environment must set NODE_ENV=production for proper SEO/robots behavior
- Vercel: Auto-detected as Nuxt project
- Netlify: Build command `npm run build`, publish directory `.output/public`

### Content Updates
When updating content:
1. Text changes → Update translation files in `locales/`
2. Projects → Update `ProjectsSection.vue`
3. Services → Update `ServicesSection.vue`
4. Testimonials → Update `RecomendationsSection.vue`
5. Metrics → Update `MetricsSection.vue`
6. Tech stack → Update `TechStackSection.vue`

### Common Tasks
- **Add new language**: Add to `nuxt.config.ts` i18n.locales, create locales/{code}.json
- **Add tracking event**: Use `usePixel().trackEvent('event_name', { data })`
- **Update theme colors**: Modify Vuetify theme in plugins/vuetify.ts
- **Add new page**: Create file in `app/pages/`
- **Add FAQ**: Update FaqSection.vue

## SEO Strategy

### Target Keywords
**Primary Keywords**:
- Golang Developer / Go Developer
- Landing Page Development

**Long-tail Keywords**:
- hire golang developer
- freelance golang developer
- golang api development
- landing page developer
- conversion optimized landing pages

### SEO Optimizations Implemented
✅ Keyword-optimized content throughout
✅ Enhanced JSON-LD structured data (Person, ProfessionalService, WebSite, FAQPage)
✅ Keywords meta tag with 13 relevant terms
✅ Semantic HTML with microdata
✅ Two dedicated service pages with 2000+ words each
✅ Mobile-first, fast-loading (Core Web Vitals optimized)

### Service Pages
- `/services/golang-development` - Golang development services
- `/services/landing-page-development` - Landing page development services

### SEO Documentation
- `SEO-STRATEGY.md` - Comprehensive SEO roadmap and recommendations
- `SEO-IMPROVEMENTS-SUMMARY.md` - Summary of all changes made

### Next SEO Steps
1. Submit sitemap to Google Search Console
2. Create blog section with technical articles
3. Build backlink profile (Dev.to, Medium, directories)
4. Write 20+ blog posts targeting keyword variations
5. Create detailed case studies

## Git Workflow
- Main branch: (check with user)
- Current worktree: xenodochial-matsumoto
- Always commit with descriptive messages
- Follow conventional commit format when possible

## Contact & Deployment Info
This is a personal portfolio site for Juan Miguel Arias Mejias, deployed at https://juanmiguel.dev.
