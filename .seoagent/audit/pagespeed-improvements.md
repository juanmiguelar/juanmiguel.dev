# PageSpeed follow-up — 2026-10-16

Evidence: user-supplied PageSpeed text at /Users/juanmiguelariasmejias/.codex/attachments/7fab7e9f-8e4b-47c3-93b3-5139e5a245b0/Texto pegado.txt, desktop report captured 13:44 GMT-6 for https://www.juanmiguel.dev/. Lab scores: performance 85, accessibility 96, best practices 100, SEO 100; TBT 350ms; no field data. These are historical user-supplied measurements, not new measurements.

## Implemented in source

- Replaced @mdi/font with explicitly imported @mdi/js SVG paths and Vuetify SVG aliases. Existing icon names remain compatible via app/utils/icons.ts. Removes full font CSS and all generated icon-font files. New icons must be registered in the explicit mapping.
- Added fetchpriority=high to the already eager/preloaded hero image.
- Reworked Facebook Pixel to queue events immediately while deferring script insertion until hydration, window load and an idle opportunity. Initial PageView, custom events and navigation events remain queued. Third-party caching/polyfills are controlled by Meta and cannot be fixed locally. Deferred loading can lose queued events if a user exits before the script loads; this is the tradeoff for prioritizing page rendering.
- Added article-specific accessible names to repeated Read article links.

## Verification

SOURCE RENDER only: npm run build passed; link checker zero errors/warnings. All 16-page SEO output checks passed. Generated homepage contains 31 nonempty SVG paths, eager/high-priority hero and zero font files. Main entry stylesheet build output: 31.00 kB gzip versus 80.8 KiB transfer in the supplied older report; this is an artifact comparison, not a repeat lab measurement or guaranteed network saving. SVG code adds about 8.7 kB gzip to the main JS chunk compared with the preceding build.

Targeted mocked-runtime tracking check passed: init, PageView, custom and navigation events queue before script load; no load before load+idle; repeated loader calls insert one script. Browser checks show 31 SVG icons, theme switching and deferred Pixel script present after loading, with no console warnings/errors observed. A lightweight computed text contrast scan found no sub-4.5 ratios in the dark homepage; this is not a full accessibility audit and does not establish that the report’s unidentified contrast issue is resolved.

## Remaining

Deploy and rerun desktop and mobile PageSpeed. No new performance score or field Core Web Vitals claim is made. The pasted contrast warning lacks offending selectors; use a fresh detailed accessibility report to identify remaining elements rather than change colors blindly. Third-party script cache lifetime and legacy JavaScript are outside repository control. Existing optional sharp binary build warning persists.

References: https://web.dev/articles/fetch-priority ; https://web.dev/articles/efficiently-load-third-party-javascript .
