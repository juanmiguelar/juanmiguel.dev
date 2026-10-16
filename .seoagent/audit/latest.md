---
audited_at: 2026-10-16
origin: https://juanmiguel.dev
source_render: false
capture_complete: true
pages_crawled: 16
critical: 0
high: 2
medium: 2
low: 3
---
# SEO audit: juanmiguel.dev

All 16 sitemap-discovered public pages were captured. The automated presence/render rollup found zero baseline issues; the manual checks below found correctness and discovery problems that rollup does not test. The complete generated baseline is preserved in findings.md, including both non-self-canonical legacy pages. No application or hosting settings were changed.

## High

- [ ] **H1 — Confirmed: redirects and canonical URLs disagree site-wide.** Public apex URLs redirect to `www`, but canonical tags and all 16 sitemap entries point back to apex. Align hosting redirects, canonical URLs, sitemap entries and language alternates on one preferred hostname, using permanent redirects for a permanent choice.
  Evidence: `audit/redirects.json`; `audit/live-details.json`; `audit/supplement.md` § Hostname and redirects. Google's guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

- [ ] **H2 — Confirmed: two distinct legacy landing pages canonicalize to the homepage.** `/servicios/landing-pages` and `/es/servicios/landing-pages` serve financial-advisor website content but declare the platform homepage canonical and remain in the sitemap. Decide whether to retain them with matching canonical targets or retire them deliberately; do not assume Google has excluded them.
  Evidence: `audit/evidence.md` sections for those two URLs; `audit/live-details.json`; `audit/supplement.md` § Canonical targets on legacy pages.

## Medium

- [ ] **M1 — Confirmed: eight service-page contact buttons target a nonexistent section.** Four localized `/services/*` pages each contain two `#contact` links without a local `id="contact"`. Point them at the localized homepage contact section or provide an actual on-page target.
  Evidence: `audit/contact-links.json`; `audit/supplement.md` § Contact anchors.

- [ ] **M2 — Confirmed: service pages have no inbound links in the captured site, and articles lack contextual cross-links.** Six service URLs receive no links from the other captured pages; six localized article pages have zero contextual article-to-article links. Decide which services support the platform focus, link retained services from relevant content, and connect the three related articles. The article indexes already provide discovery, so the posts are not orphans.
  Evidence: parsed live anchors in `audit/live-details.json`; `audit/supplement.md` § Internal links. The repo analyzer's zero-page result is not used as a pass.

## Low

- [ ] **L1 — Confirmed: several search snippets are verbose.** Twelve titles exceed the skill's 60-character heuristic; four service descriptions exceed 160 characters. Prioritize service titles at 92-100 characters. These are editorial heuristics, not hard Google limits or verified truncation.
  Evidence: `audit/supplement.md` § Titles and descriptions and its complete per-page table; `audit/live-details.json`. Google title guidance: https://developers.google.com/search/docs/appearance/title-link

- [ ] **L2 — Confirmed: service share previews have incomplete image fields.** Six service/legacy URLs have existing Open Graph fields but no `og:image`. Complete the image field on pages retained after the route decision; preserve their existing tags.
  Evidence: `audit/live-details.json` meta maps; `audit/supplement.md` § Share metadata.

- [ ] **L3 — Likely: non-article sitemap dates are generated timestamps.** Ten non-article entries share one timestamp; article entries use their publication date. Confirm the non-article date source, then retain meaningful modification dates or omit that optional field.
  Evidence: fetched child XML in `audit/live-details.json`; `audit/supplement.md` § Sitemap dates. The observed timestamps are confirmed; their editorial provenance is not.

## What's working

- Confirmed: all 16 discovered URLs return 200 after redirects and have server-rendered page content, a single H1, descriptions and structured data.
  Evidence: `audit/evidence.md` site-wide rollup and all per-page entries.
- Confirmed: all six localized article pages have BlogPosting and BreadcrumbList markup; their links are present in the blog indexes and their URLs are in the sitemap.
  Evidence: `audit/evidence.md` blog entries; `audit/live-details.json` blog links and child XML.
- Confirmed: en/es alternates are present in both child sitemaps; blog pages also publish HTML alternates. Existing image alt coverage passes.
  Evidence: `audit/live-details.json` alternates and child XML; `audit/evidence.md` image rollup.
- Confirmed: the wildcard robots group permits normal crawling, and the fabricated missing article returns 404.
  Evidence: `audit/evidence.md` raw robots; `audit/live-details.json` missing-article request.

## Limits and optional checks

Indexing coverage not verified (needs the free `seoagent login`, which connects Search Console). No local GSC data was available. PageSpeed API returned 429, so Core Web Vitals are unverified. Sync was attempted while logged out; nothing was uploaded or pulled. Missing optional llms/OKF files are documented in supplement.md and are not treated as Google indexing requirements.

Evidence: `audit/supplement.md` § Measurement limits and § AI-readable files; `audit/live-details.json` API/file requests; session `seoagent whoami --json` and `seoagent sync` results.

Full details: audit/supplement.md. Raw capture: audit/evidence.md. Generated baseline: audit/findings.md.
