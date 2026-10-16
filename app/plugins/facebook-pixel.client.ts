type PixelQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push?: PixelQueue
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: PixelQueue
    _fbq?: PixelQueue
  }
}

export default defineNuxtPlugin(() => {
  const pixelId = useRuntimeConfig().public.facebookPixelId
  if (!pixelId) return

  // Queue events immediately, but give rendering and hydration priority over analytics.
  if (!window.fbq) {
    const pixel = ((...args: unknown[]) => {
      if (pixel.callMethod) pixel.callMethod(...args)
      else pixel.queue.push(args)
    }) as PixelQueue
    pixel.queue = []
    pixel.push = pixel
    pixel.loaded = true
    pixel.version = '2.0'
    window.fbq = window._fbq = pixel
    pixel('init', pixelId)
    pixel('track', 'PageView')
  }

  const loadPixel = () => {
    if (document.getElementById('facebook-pixel-script')) return
    const script = document.createElement('script')
    script.id = 'facebook-pixel-script'
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }
  const schedulePixel = () => {
    if ('requestIdleCallback' in window) window.requestIdleCallback(loadPixel, { timeout: 3000 })
    else setTimeout(loadPixel, 1000)
  }
  onNuxtReady(() => {
    if (document.readyState === 'complete') schedulePixel()
    else window.addEventListener('load', schedulePixel, { once: true })
  })

  useRouter().afterEach((to, from, failure) => {
    if (!failure && from.matched.length && to.fullPath !== from.fullPath) {
      window.fbq?.('track', 'PageView')
    }
  })
})
