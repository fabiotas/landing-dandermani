'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentChoice,
} from '../lib/cookie-consent'
import styles from './CookieConsent.module.css'

type BannerState = CookieConsentChoice | 'pending' | null

export function CookieConsent() {
  const [state, setState] = useState<BannerState>(null)

  useEffect(() => {
    setState(readCookieConsent() ?? 'pending')
  }, [])

  if (state !== 'pending') return null

  function choose(choice: CookieConsentChoice) {
    writeCookieConsent(choice)
    setState(choice)
  }

  return (
    <div className={styles.bar} role="dialog" aria-labelledby="cookie-consent-title">
      <div className={styles.inner}>
        <p id="cookie-consent-title" className={styles.text}>
          Usamos cookies de análise e publicidade (Microsoft Clarity, Google
          Tag Manager e Pixel da Meta) para entender o uso do site e medir
          campanhas. O conteúdo dos formulários não é enviado ao Pixel.
          Aceita esses cookies?{' '}
          <Link className={styles.link} href="/privacidade">
            Política de privacidade
          </Link>
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.decline}
            onClick={() => choose('denied')}
          >
            Recusar
          </button>
          <button
            type="button"
            className={styles.accept}
            onClick={() => choose('granted')}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
