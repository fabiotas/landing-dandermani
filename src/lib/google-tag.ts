/**
 * Conversão de lead via dataLayer (GTM).
 * Rótulos AW/G- opcionais se também usar gtag direto.
 */
export const GOOGLE_TAG_ID = ''
/** Ex.: AW-XXXXXXXXX/YYYYYYYYYYY — rótulo da conversão no Google Ads. */
export const GOOGLE_CONVERSION_SEND_TO = ''

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

/** Dispara conversão de lead no dataLayer (e gtag, se existir). */
export function fireLeadConversion(): void {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'lead_submitted' })

  if (!GOOGLE_TAG_ID) return

  const attempt = (triesLeft: number) => {
    if (typeof window.gtag === 'function') {
      if (GOOGLE_CONVERSION_SEND_TO) {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_CONVERSION_SEND_TO,
        })
      }
      window.gtag('event', 'lead_submitted')
      return
    }
    if (triesLeft > 0) {
      window.setTimeout(() => attempt(triesLeft - 1), 200)
    }
  }

  attempt(15)
}
