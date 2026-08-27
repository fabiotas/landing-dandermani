import Link from 'next/link'
import { PROFESSIONAL } from '../content'
import { Logo } from './Logo'
import styles from './Footer.module.css'

type FooterProps = {
  brand: string
  city: string
}

export function Footer({ brand, city }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} alt="" />

      <p className={styles.professional}>
        {PROFESSIONAL.name} · {PROFESSIONAL.title} ·{' '}
        {PROFESSIONAL.registration}
      </p>

      <p className={styles.meta}>
        © {year} {brand} · {city}
      </p>

      <Link className={styles.legal} href="/privacidade">
        Política de privacidade
      </Link>
    </footer>
  )
}
