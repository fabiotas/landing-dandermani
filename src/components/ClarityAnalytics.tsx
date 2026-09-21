'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentChoice,
} from '../lib/cookie-consent'

const CLARITY_PROJECT_ID = 'ylz8ica5ii'

/**
 * Carrega o Microsoft Clarity somente após consentimento de analytics.
 * Inputs dos formulários usam data-clarity-mask para não gravar o que é digitado.
 */
export function ClarityAnalytics() {
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

  if (consent !== 'granted') return null

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        window.clarity("consent");
      `}
    </Script>
  )
}
