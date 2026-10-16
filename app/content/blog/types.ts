export type BlogLocale = 'en' | 'es'

export interface BlogSection {
  id: string
  heading: string
  paragraphs: string[]
  links?: { slug: string; label: string }[]
  checklist?: string[]
  code?: { language: string; value: string }
}

export interface BlogTranslation {
  seoTitle?: string
  title: string
  description: string
  category: string
  sections: BlogSection[]
}

export interface BlogPost {
  slug: string
  status: 'draft' | 'published'
  publishedOn: string
  updatedOn?: string
  tags: string[]
  translations: Record<BlogLocale, BlogTranslation>
  references: { title: string; url: string }[]
}
