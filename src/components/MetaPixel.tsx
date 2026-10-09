'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { COOKIE_CONSENT_EVENT, readCookieConsent } from '../lib/cookie-consent'

export const META_PIXEL_ID = '879302091839513'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function MetaPixel() {
  const pathname = usePathname()
  const [granted, setGranted] = useState(false)
  const [ready, setReady] = useState(false)
  const lastPage = useRef<string | null>(null)

  useEffect(() => {
    const update = () => {
      const accepted = readCookieConsent() === 'granted'
      setGranted(accepted)
      window.fbq?.('consent', accepted ? 'grant' : 'revoke')
    }
    update()
    window.addEventListener(COOKIE_CONSENT_EVENT, update)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, update)
  }, [])

  useEffect(() => {
    if (!granted || !ready || lastPage.current === pathname) return
    window.fbq?.('trackSingle', META_PIXEL_ID, 'PageView')
    lastPage.current = pathname
  }, [granted, ready, pathname])

  if (!granted) return null

  return <Script id="meta-pixel" strategy="afterInteractive" onReady={() => setReady(true)}>{`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('consent', 'grant');
    fbq('init', '${META_PIXEL_ID}');
  `}</Script>
}
