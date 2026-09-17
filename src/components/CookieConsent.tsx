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
          Usamos o Microsoft Clarity para entender como a página é usada — sem
          gravar o que você digita nos formulários. Aceita cookies de
          analytics?{' '}
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
