
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const pixelId = config.public.facebookPixelId as string | undefined

  if (!pixelId) {
    return
  }

  useHead({
    script: [
      {
        innerHTML: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
        type: 'text/javascript'
      }
    ],
    noscript: [
      {
        innerHTML: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
        />`
      }
    ]
  })

  const router = useRouter()
  router.afterEach(() => {
    // fbq should be available on window after the script loads
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  })
})
