import { HIPRO, type HiproPageContent } from '../../hipro-content'
import styles from './HiproCta.module.css'

type HiproCtaProps = {
  content?: HiproPageContent
}

export function HiproCta({ content = HIPRO }: HiproCtaProps) {
  return (
    <section className={styles.section} aria-labelledby="hipro-final-title">
      <p className={styles.eyebrow}>{content.finalEyebrow}</p>
      <h2 id="hipro-final-title" className={styles.title}>
        {content.finalTitle}
      </h2>
      <a className={styles.button} href="#agendamento">
        Agendar minha avaliação
      </a>

      <ul className={styles.points}>
        {content.finalPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  )
}
