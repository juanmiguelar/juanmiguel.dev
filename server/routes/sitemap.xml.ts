import { defineEventHandler, setHeader } from 'h3'
import { useRuntimeConfig } from '#imports'

/**
 * Basic dynamic sitemap generation for portfolio pages.
 */
export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig()

  const urls = [
    '/',
    '/projects',
    '/about',
    '/contact'
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${siteUrl}${u}</loc></url>`).join('\n') +
    `\n</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return body
})
