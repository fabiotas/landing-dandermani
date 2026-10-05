import { SITE } from '../content'
import Image from 'next/image'
import { Logo } from './Logo'
import { HiproPromoSeal } from './HiproPromoSeal'
import styles from './Hero.module.css'

type HeroProps = {
  supporting?: string
  headline?: string
}

export function Hero({ supporting = SITE.supporting, headline = 'Estética avançada em Ribeirão Preto' }: HeroProps) {
  return (
    <section id="topo" className={styles.hero} aria-label="Apresentação">
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.portrait} aria-hidden="true">
        <Image className={styles.portraitImg} src="/profissional.png" alt="" width={800} height={1000} sizes="(max-width: 768px) 100vw, 60vw" priority />
      </div>

      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <HiproPromoSeal />

      <div className={styles.content}>
        <Logo className={styles.logo} />
        <h1 className={styles.headline}>{headline}</h1>
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
