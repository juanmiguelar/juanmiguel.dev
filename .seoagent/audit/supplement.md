---
audited_at: 2026-10-16
origin: https://juanmiguel.dev
pages_captured: 16
capture_complete: true
---

# Supplemental live checks

Evidence for the manual audit. All values below come from fresh public HTTP fetches, persisted in `live-details.json`, `redirects.json` and `contact-links.json`. The source was not substituted for the public site. The CLI crawl independently captured 16/16 discovered pages. Automated rollup findings: zero; that checks tag presence and basic render health, not canonical correctness, conversion anchors or topic relationships.

## Hostname and redirects

Evidence: `redirects.json` records HTTP apex -> HTTPS apex as 308, HTTPS apex -> HTTPS www as 307, then www as 200. The sampled article also redirects apex -> www with 307. `live-details.json` records all 16 discovered page fetches ending on www while their canonical URLs use the apex hostname. All 16 child-sitemap page entries also use apex. This is a confirmed conflict between preferred-host signals, not proof of lost rankings or of Google's selected canonical.

## Canonical targets on legacy pages

Evidence: `evidence.md` entries and `live-details.json` for `/servicios/landing-pages` and `/es/servicios/landing-pages` show financial-advisor website copy but canonical `https://juanmiguel.dev`. Both appear in the fetched child sitemaps. The machine report calls these intentionally excluded; intent and Google exclusion are NOT established by a canonical tag. Their content differs from the platform-engineering homepage. Do not consolidate unrelated content to the homepage automatically. Keep with a matching self-canonical if retained, or choose a deliberate retirement/noindex policy after reviewing any historical traffic.

## Contact anchors

Evidence: `contact-links.json` contains four live 200 service-page fetches, each with two `href="#contact"` buttons but no `id="contact"` in the HTML. These are `/services/golang-development`, `/services/landing-page-development` and their `/es` versions. Navigation links to the homepage contact section are separate and are not broken. The page-local buttons need the localized homepage fragment or a real on-page contact target.

## Internal links

Evidence: links parsed from all 16 captured pages in `live-details.json`. All six service URLs receive zero incoming links from the other captured pages. All six localized article pages have zero contextual links to other blog articles; blog indexes provide discovery, and the homepage previews the newest two. These posts are not orphans. Example useful links: the Go release upgrade checklist -> unit-testing article; the unit-testing platform discussion -> Kubernetes controller article; the controller testing section -> unit-testing article, localized in both languages.

The CLI's repo analyzer reports **0 analyzed pages across 45 files** in `internal-links.md`. Its "no orphan pages" line is not evidence of a complete link audit; the live-page graph was used instead. Unlisted/unlinked URLs outside the captured inventory remain outside this audit.

## Multilingual checks

Evidence: both fetched child sitemaps in `live-details.json` contain reciprocal en/es/x-default alternates for all 16 URLs. Blog pages also have HTML alternates. Home/service HTML lacks alternates, but this is NOT a missing-hreflang finding because sitemap annotations exist. Their hostname conflict is covered above. No duplicate-title issue is inferred merely from the bilingual blog indexes sharing the Juan's Blog brand title.

## Titles and descriptions

Evidence: the per-page table below derives from fresh raw HTML. Twelve titles exceed the skill's 60-character heuristic; four descriptions exceed 160. These are low-priority presentation checks, not hard search limits or proof of truncation. Prioritize the 92-100-character service titles and English Kubernetes title at 86 characters. Suggested shorter editorial titles: "Go API Development | Juan Miguel Arias" and "Kubernetes Controllers: Idempotent Reconciliation"; verify final rendered length after the site's brand suffix is applied.

## Share metadata

Evidence: six service/legacy pages in `live-details.json` have other Open Graph fields but no `og:image`. Four are the localized `/services/*` pages; two are the `/servicios/landing-pages` pages. Complete the image field only for pages retained after the route decision. The blog indexes already have `og:image` and `twitter:card`; they do not include explicit twitter:title/description/image, but that is a lower-priority fallback optimization, not a missing-card finding.

## Sitemap dates

Evidence: the fetched child sitemaps show ten non-article URLs sharing `2026-10-16T17:46:54Z`; six article URLs use `2026-10-16T06:00:00Z`. The observed dates are confirmed. **Likely**, the shared non-article value is generated rather than a tracked editorial modification time (repo clue: `autoLastmod` configuration). Check its provenance; emit real content dates or omit optional lastmod. This audit does not claim a Google penalty.

## Crawlability, rendering and upstreams

Evidence: `evidence.md` captures 16/16 pages with HTTP 200 after redirects, one H1, canonical, description and structured data. Every captured image has an alt attribute. The wildcard robots group allows `/` and `/es/`; disallow rules apply to the named bot group, not Googlebot generally. `live-details.json` shows no HTTP subresources on the captured HTTPS pages. The fabricated missing-article URL returned 404. Repo URL scan found no external CMS/API powering content, and live article bodies are server-rendered. This does not test unknown private services or unpublished pages.

## AI-readable files: optional, not an indexing blocker

Evidence: fresh requests in `live-details.json` return 404 for `/llms.txt`, `/.well-known/okf/index.md` and `/okf/index.md`. These absences are confirmed but are not classified as Google SEO defects. Google's AI-features documentation says no special AI text files or additional schema are required. Do not repeat the bundled checklist's unsupported claim that OKF is a Google-required format. No AI crawler exclusion was inferred from the named non-helpful-bot group.

Source: https://developers.google.com/search/docs/appearance/ai-features

## Measurement limits

- Indexing coverage not verified (needs the free `seoagent login`, which connects Search Console). `whoami --json` returned logged_in:false; no local GSC CSV was found. No indexing, traffic or ranking verdict is inferred from a successful fetch.
- Core Web Vitals not verified: PageSpeed Insights API returned HTTP 429. No LCP, CLS or INP score is reported.
- `seoagent sitemap --json` reports a two-child sitemap index but does not expand the children. The main crawl and supplemental XML parsing did expand them and found 16 page URLs.
- `seoagent sync` was attempted; logged out, so nothing was uploaded or pulled. The local audit is complete without a cloud account.
- Search appearance/rich-result eligibility was not validated with Google's interactive Rich Results Test. Presence of schema alone is not an eligibility promise.

## Page-by-page evidence

| URL | Final status | Title chars | Description chars | Canonical |
|---|---:|---:|---:|---|
| https://juanmiguel.dev/ | 200 | 60 | 152 | https://juanmiguel.dev/ |
| https://juanmiguel.dev/es | 200 | 67 | 160 | https://juanmiguel.dev/es |
| https://juanmiguel.dev/es/blog | 200 | 38 | 117 | https://juanmiguel.dev/es/blog |
| https://juanmiguel.dev/es/blog/go-1-27-improvements-and-fixes | 200 | 70 | 129 | https://juanmiguel.dev/es/blog/go-1-27-improvements-and-fixes |
| https://juanmiguel.dev/es/blog/kubernetes-controllers-idempotent-reconciliation | 200 | 82 | 151 | https://juanmiguel.dev/es/blog/kubernetes-controllers-idempotent-reconciliation |
| https://juanmiguel.dev/es/blog/why-unit-tests-matter-in-the-age-of-ai | 200 | 88 | 147 | https://juanmiguel.dev/es/blog/why-unit-tests-matter-in-the-age-of-ai |
| https://juanmiguel.dev/es/services/golang-development | 200 | 100 | 211 | https://juanmiguel.dev/es/services/golang-development |
| https://juanmiguel.dev/es/services/landing-page-development | 200 | 98 | 210 | https://juanmiguel.dev/es/services/landing-page-development |
| https://juanmiguel.dev/es/servicios/landing-pages | 200 | 63 | 125 | https://juanmiguel.dev |
| https://juanmiguel.dev/blog | 200 | 38 | 104 | https://juanmiguel.dev/blog |
| https://juanmiguel.dev/blog/go-1-27-improvements-and-fixes | 200 | 62 | 119 | https://juanmiguel.dev/blog/go-1-27-improvements-and-fixes |
| https://juanmiguel.dev/blog/kubernetes-controllers-idempotent-reconciliation | 200 | 86 | 135 | https://juanmiguel.dev/blog/kubernetes-controllers-idempotent-reconciliation |
| https://juanmiguel.dev/blog/why-unit-tests-matter-in-the-age-of-ai | 200 | 70 | 150 | https://juanmiguel.dev/blog/why-unit-tests-matter-in-the-age-of-ai |
| https://juanmiguel.dev/services/golang-development | 200 | 93 | 189 | https://juanmiguel.dev/services/golang-development |
| https://juanmiguel.dev/services/landing-page-development | 200 | 92 | 177 | https://juanmiguel.dev/services/landing-page-development |
| https://juanmiguel.dev/servicios/landing-pages | 200 | 60 | 116 | https://juanmiguel.dev |

## Interpretation sources

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/ai-features
