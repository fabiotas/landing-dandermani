'use client'

import { useEffect, useState } from 'react'
import styles from './HiproPromoSeal.module.css'

/** Fim da promoção: 02/10/2026 23:59:00 (America/Sao_Paulo). */
const EXPIRES_AT = Date.parse('2026-10-02T23:59:00-03:00')

export function HiproPromoSeal() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(Date.now() <= EXPIRES_AT)
  }, [])

  if (!active) return null

  return (
    <a
      className={styles.seal}
      href="/rejuvenescimento-natural-ribeirao"
      aria-label="Aproveite HiPRO com condições especiais — clique para ver"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <span className={styles.ring} aria-hidden="true" />
      <span className={styles.inner}>
        <span className={styles.eyebrow}>Aproveite</span>
        <span className={styles.brand}>
          <span className={styles.hi}>Hi</span>
          <span className={styles.pro}>PRO</span>
        </span>
        <span className={styles.caption}>condições especiais</span>
        <span className={styles.ctaHint}>clique aqui</span>
      </span>
    </a>
  )
}
