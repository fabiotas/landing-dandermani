import { SITE, whatsappViaObrigado } from '../content'
import { Logo } from './Logo'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <p className={styles.location}>{SITE.city}</p>
        <a className={styles.topLink} href={whatsappViaObrigado()}>
          WhatsApp
        </a>
      </div>
      <div className={styles.bar}>
        <a href="#topo" className={styles.brand}>
          <Logo />
        </a>
        <nav className={styles.nav} aria-label="Principal">
          <a href="#avaliacao">Avaliação</a>
          <a href="#sobre">Sobre</a>
          <a className={styles.cta} href="#agendamento">
            Agendar
          </a>
        </nav>
      </div>
    </header>
  )
}
