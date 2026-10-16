# Repository fixes — 2026-10-16

Status: implemented and production-build validated locally; deployment and live verification pending. Historical live captures remain unchanged.

- H1: Canonicals, site configuration, sitemap, robots and URL fallbacks now use https://www.juanmiguel.dev, matching the destination in audit/redirects.json. Hosting must still replace the apex-to-www 307 with a permanent 308 or 301. No hosting configuration is present in this repository.
- H2: Retained both legacy financial-advisor URLs and assigned matching self-canonicals. No destructive retirement or homepage redirect.
- M1: Repaired all eight service CTA buttons to the localized homepage contact section. Reactive head metadata now follows locale changes.
- M2: Added a localized homepage link to Go API services and six contextual article links. Four legacy landing-page URLs remain outside main navigation; deciding their long-term retention/discovery requires a separate positioning decision. The homepage remains focused on platform engineering.
- L1: Shortened SEO titles and service descriptions, preserving article headings, body text and slugs. Rendered titles are at most 60 characters and descriptions at most 160; these are editorial targets, not Google hard limits.
- L2: Completed legacy/service social image metadata with the existing site image.
- L3: Disabled build-time autoLastmod, retained authored article dates and removed the obsolete manual sitemap route so the sitemap module is the sole generator. Unknown non-article dates are omitted.

## Validation evidence

SOURCE RENDER: npm run build passed; Nuxt link checker reports zero errors/warnings across 18 checked pages. Custom generated-output checks passed across all 16 public pages and 16 sitemap URLs: self-canonicals, www alternate URLs, localized CTA targets, six contextual article links, metadata lengths, one H1 each, absolute OG images, article-only authored dates, and no homepage landing-page links. See source-validation.json. git diff --check passed.

Existing build warning: Nuxt Image reports missing optional sharp binaries for darwin-arm64. No image changes were required by this patch. Live rankings, indexation and field performance remain unmeasured.

## Deployment follow-up

Deploy these repository changes, set the hosting apex-to-www redirect to permanent (301/308), then verify the public canonicals and sitemap. Do not mark the historical live findings resolved until this verification succeeds.
