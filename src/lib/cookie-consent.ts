export const COOKIE_CONSENT_KEY = 'cookie_consent'
export const COOKIE_CONSENT_EVENT = 'cookie-consent-change'

export type CookieConsentChoice = 'granted' | 'denied'

export function readCookieConsent(): CookieConsentChoice | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (value === 'granted' || value === 'denied') return value
    return null
  } catch {
    return null
  }
}

export function writeCookieConsent(choice: CookieConsentChoice): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice)
  } catch {
    // localStorage indisponível: segue só com o estado em memória desta sessão
  }
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }),
  )
}
