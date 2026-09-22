'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentChoice,
} from '../lib/cookie-consent'
import { GOOGLE_TAG_ID } from '../lib/google-tag'

/**
 * Carrega gtag.js só com ID preenchido e após consentimento de analytics.
 */
export function GoogleAnalytics() {
  const [consent, setConsent] = useState<CookieConsentChoice | null>(null)

  useEffect(() => {
    setConsent(readCookieConsent())

    function onChange(event: Event) {
      const detail = (event as CustomEvent<CookieConsentChoice>).detail
      setConsent(detail)
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onChange)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange)
  }, [])

  if (!GOOGLE_TAG_ID || consent !== 'granted') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}');
        `}
      </Script>
    </>
  )
}
