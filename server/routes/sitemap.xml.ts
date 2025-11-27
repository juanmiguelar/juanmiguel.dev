import { defineEventHandler, setHeader } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler((event) => {
  const { public: publicRuntimeConfig } = useRuntimeConfig()
  const siteUrl = publicRuntimeConfig.siteUrl || 'https://juanmiguel.dev'
  const lastModified = new Date().toISOString()

  const urls = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' }
  ]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, changefreq, priority }) => {
      return [
        '  <url>',
        `    <loc>${siteUrl}${loc}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
        priority ? `    <priority>${priority}</priority>` : null,
        '  </url>'
      ].filter(Boolean).join('\n')
    }),
    '</urlset>'
  ].join('\n')

  setHeader(event, 'content-type', 'application/xml')
  return xml
})
