import { ensureLength } from '~/utils/seo'
import type { SeoMetaOptions } from '~/types/seo'

/**
 * Centralized composable to manage SEO meta tags and social data.
 */
export function useSeo() {
  const { public: { siteUrl } } = useRuntimeConfig()

  const setSeo = (opts: SeoMetaOptions) => {
    const title = ensureLength(opts.title, 60)
    const description = ensureLength(opts.description, 160)
    const image = opts.image || '/img/juanmiguelweb.png'
    const url = opts.url || siteUrl
    const siteName = opts.siteName || 'Juan Miguel - Portfolio'

    useHead({
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: opts.type || 'website' },
        { property: 'og:site_name', content: siteName },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:creator', content: '@juan' }
      ],
      script: opts.schema ? [{ type: 'application/ld+json', innerHTML: JSON.stringify(opts.schema) }] : []
    })
  }
  return { setSeo }
}
