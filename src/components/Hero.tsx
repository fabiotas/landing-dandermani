import { SITE } from '../content'
import { Logo } from './Logo'
import styles from './Hero.module.css'

type HeroProps = {
  supporting?: string
}

export function Hero({ supporting = SITE.supporting }: HeroProps) {
  return (
    <section id="topo" className={styles.hero} aria-label="Apresentação">
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.portrait} aria-hidden="true">
        <img className={styles.portraitImg} src="/profissional.png" alt="" />
      </div>

      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.content}>
        <Logo className={styles.logo} />
        <h1 className={styles.headline}>{SITE.title}</h1>
        <p className={styles.tagline}>{SITE.tagline}</p>
        <p className={styles.support}>{supporting}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#agendamento">
            Agendar minha avaliação
          </a>
          <a className={styles.secondary} href="#avaliacao">
            Como funciona
          </a>
        </div>
      </div>
    </section>
  )
}
