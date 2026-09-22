import { SITE } from '../../content'
import {
  HIPRO,
  hiproWhatsappViaObrigado,
  type HiproPageContent,
} from '../../hipro-content'
import { Logo } from '../Logo'
import styles from './HiproHeader.module.css'

type HiproHeaderProps = {
  content?: HiproPageContent
}

export function HiproHeader({ content = HIPRO }: HiproHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <p className={styles.location}>{content.city}</p>
        <a
          className={styles.topLink}
          href={hiproWhatsappViaObrigado(undefined, content.whatsappMessage)}
        >
          Atendimento pelo WhatsApp
        </a>
      </div>
      <div className={styles.bar}>
        <a href="#topo" className={styles.brand} aria-label={SITE.brand}>
          <Logo />
        </a>
        <nav className={styles.nav} aria-label="Principal">
          <a href="#avaliacao">Avaliação</a>
          <a href="#sobre">Sobre</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#duvidas">Dúvidas</a>
          <a className={styles.cta} href="#agendamento">
            Agendar
          </a>
        </nav>
      </div>
    </header>
  )
}
