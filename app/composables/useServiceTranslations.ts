import type { ComputedRef } from 'vue'
import servicesEn from '../../locales/services.json'
import servicesEs from '../../locales/services-es.json'

export const useServiceTranslations = () => {
  const { locale } = useI18n()

  const services: ComputedRef<typeof servicesEn> = computed(() =>
    locale.value === 'es' ? servicesEs : servicesEn
  )

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = services.value

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return {
    services,
    t
  }
}
