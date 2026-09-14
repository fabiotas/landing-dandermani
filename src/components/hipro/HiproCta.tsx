import { HIPRO } from '../../hipro-content'
import styles from './HiproCta.module.css'

export function HiproCta() {
  return (
    <section className={styles.section} aria-labelledby="hipro-final-title">
      <p className={styles.eyebrow}>{HIPRO.finalEyebrow}</p>
      <h2 id="hipro-final-title" className={styles.title}>
        {HIPRO.finalTitle}
      </h2>
      <a className={styles.button} href="#agendamento">
        Agendar minha avaliação
      </a>

      <ul className={styles.points}>
        {HIPRO.finalPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  )
}
