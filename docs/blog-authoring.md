# Publishing a blog article

The blog uses typed, repository-managed content. It requires no CMS account, database, or additional dependency. Articles and their English/Spanish translations live in `app/content/blog/`. Routes are `/blog` and `/blog/{slug}` in English, with `/es` prefixed for Spanish.

## Add an article

1. Copy `app/content/blog/kubernetes-reconciliation.ts` to a new file.
2. Use a unique lowercase hyphenated `slug`. Keep it stable once published; changing a published slug requires a redirect.
3. Set `status: 'draft'` while writing. Set `publishedOn` to the actual publication date (`YYYY-MM-DD`). Drafts do not get public list entries or article pages. There is no draft preview UI. Keep private material out of client-side content files.
4. Write both translations. Each needs a unique title, concise search description, category, and sections. A section contains a stable anchor `id`, heading, paragraphs, and an optional checklist or code block (`code: { language: 'go', value: '...' }`). Text renders as escaped text rather than raw HTML.
5. Add authoritative references. Review technical accuracy and remove confidential client details. Do not invent personal achievements or measurements.
6. Import the new file in `app/content/blog/index.ts` and add it to the `posts` array.
7. When ready, set `status: 'published'`. Only published posts appear in the blog index, homepage preview, sitemap input, and prerender routes. Do not mark future content published until its intended publication date; this is a build-time workflow, not a scheduler.
8. Run `npm run build`, inspect both languages, and deploy through the project's normal release process.

For a meaningful revision, add `updatedOn`. Reading time is calculated from each translation. Posts are sorted by publication date, newest first. Slugs and section IDs are shared across translations so language switching keeps the same article.

## SEO included

- Server-rendered article body and crawlable internal links.
- Per-page titles, descriptions, canonical URLs, and language alternates.
- Open Graph and Twitter metadata using the existing site preview image.
- BlogPosting and breadcrumb JSON-LD with author and publication dates.
- Published article URLs included in prerender and sitemap generation.
- Contextual links back to the portfolio's engineering experience.

The initial controller article is starter editorial content based on official Kubernetes and Kubebuilder references, not a client case study. Review it before production deployment. New articles should answer a specific engineering question and add useful explanations or examples; keyword repetition alone is not a content strategy. No search-ranking outcome is guaranteed by this implementation.

## Implementation verification

Production build: passed, 21 routes prerendered. Nuxt link checker: zero errors and warnings. Generated English and Spanish blog pages were checked for a single h1, unique canonical, language alternates, and valid Blog/BlogPosting JSON-LD. Both blog indexes and article URLs appear in their localized sitemaps. Content metadata, section IDs, and reading times were checked. Browser review covered language switching, light/dark themes, mobile navigation and widths of 320, 768, 1024 and 1440 pixels without horizontal overflow. The final production preview had no browser console warnings or errors after enabling Vuetify SSR and applying theme preferences after hydration.
