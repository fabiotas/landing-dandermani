/**
 * Preencha quando tiver o snippet do Google Ads / GA4.
 * Enquanto vazio, o fluxo /obrigado funciona sem carregar gtag.
 */
export const GOOGLE_TAG_ID = ''
/** Ex.: AW-XXXXXXXXX/YYYYYYYYYYY — rótulo da conversão no Google Ads. */
export const GOOGLE_CONVERSION_SEND_TO = ''

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/** Dispara conversão de lead; no-op se IDs ou gtag ainda não existirem. */
export function fireLeadConversion(): void {
  if (!GOOGLE_TAG_ID || typeof window === 'undefined') return

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
