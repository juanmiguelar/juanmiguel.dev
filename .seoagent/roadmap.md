# Audit-derived roadmap

These are proposed next steps, not completed fixes or an approved content-writing plan.

- [ ] Align the preferred hostname across hosting redirects, canonical URLs, sitemap and hreflang. Evidence: audit/latest.md H1.
- [ ] Decide the fate of the two legacy financial-advisor pages and resolve their homepage canonical targets. Evidence: audit/latest.md H2.
- [ ] Fix the eight broken page-local contact buttons on service pages. Evidence: audit/latest.md M1.
- [ ] Improve links to retained services and connect the related blog articles contextually. Evidence: audit/latest.md M2.
- [ ] Review verbose snippets and service share-image metadata. Evidence: audit/latest.md L1-L2.
- [ ] Verify non-article sitemap date provenance; obtain Search Console and field performance evidence before making traffic/performance claims. Evidence: audit/latest.md L3 and measurement limits.

## Authorized implementation — 2026-10-16

- [x] Align repository URLs with the served www hostname; production output validated.
- [x] Preserve legacy URLs with correct self-canonicals.
- [x] Repair eight localized contact CTAs.
- [x] Link Go services from the platform homepage and connect all article versions contextually.
- [x] Tighten titles/descriptions and complete service share images.
- [x] Omit unknown sitemap dates; preserve authored article dates; remove duplicate generator.
- [ ] Deploy and verify the live site; change hosting apex redirect from 307 to 301/308.
- [ ] Decide long-term discovery/retention of the four off-focus landing-page URLs without reintroducing them on the homepage.

Evidence for implementation: audit/implementation.md and audit/source-validation.json. Original unchecked findings above describe historical live state, not failed source work.

## Freelance Go positioning — approved first implementation

- [x] Rewrite existing Go service page in EN/ES for focused freelance consulting with verifiable employment examples, scope, process and accurate availability.
- [x] Connect all existing article translations to the service destination and link back to localized technical writing.
- [x] Validate production output and mobile service layout.

Evidence: strategy/golang-freelance.md approved implementation section. Deploy and measure before claiming SEO impact.

## GEO implementation — 2026-10-16

- [x] Publish a bilingual Go diagnostics guide in repository content, with an independent educational example and source references.
- [x] Connect guide, existing technical writing and localized consulting destination.
- [x] Unify professional identity and citations in page schemas and link bylines to professional background.
- [x] Regenerate and validate 18-page output and sitemap, including mobile article layout.
- [ ] Run Go example tests/benchmarks in an environment with Go installed.
- [ ] Deploy, verify public guide/download, connect measurement platforms and establish citation/referral baselines.

Evidence: strategy/geo.md implementation section and audit/geo-source-validation.json.

## Platform engineering content — 2026-10-21

- [x] SUB  platform-self-service-with-kubernetes-crds — "Kubernetes CRD platform self-service"
- [x] SUB  designing-developer-friendly-kubernetes-crds — "developer-friendly Kubernetes CRDs"
- [x] SUB  versioning-kubernetes-crd-apis-safely — "Kubernetes CRD API versioning"

Evidence: `app/content/blog/` bilingual article sources. Repository content is ready; production deployment and search performance measurement remain pending.
