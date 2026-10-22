import goPerformance from './go-api-performance'
import go127 from './go-1-27'
import unitTestsAI from './unit-tests-ai'
import reconciliation from './kubernetes-reconciliation'
import crdSelfService from './platform-self-service-with-kubernetes-crds'
import crdDesign from './designing-developer-friendly-kubernetes-crds'
import crdVersioning from './versioning-kubernetes-crd-apis-safely'
import type { BlogLocale, BlogPost, BlogTranslation } from './types'

// Add articles here. Drafts are excluded from all public lists and article routes.
const posts: BlogPost[] = [goPerformance, go127, unitTestsAI, reconciliation, crdSelfService, crdDesign, crdVersioning]
export const publishedPosts = posts
  .filter(post => post.status === 'published')
  .sort((a, b) => b.publishedOn.localeCompare(a.publishedOn))

export const blogLocale = (locale: string): BlogLocale => locale === 'es' ? 'es' : 'en'
export const postTranslation = (post: BlogPost, locale: string): BlogTranslation => post.translations[blogLocale(locale)]
export const readingMinutes = (translation: BlogTranslation): number => {
  const words = translation.sections.flatMap(section => [section.heading, ...section.paragraphs, ...(section.checklist || [])]).join(' ').trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}
export const formatBlogDate = (date: string, locale: string): string => new Intl.DateTimeFormat(blogLocale(locale), {
  dateStyle: 'long', timeZone: 'UTC'
}).format(new Date(`${date}T00:00:00Z`))
