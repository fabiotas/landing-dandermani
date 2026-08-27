import { PROFESSIONAL, SITE } from '../content'
import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.portrait}>
        <div className={styles.portraitFrame}>
          <img
            src="/profissional.png"
            alt={`${PROFESSIONAL.name}, ${PROFESSIONAL.title}, em seu ambiente de atendimento`}
            width={800}
            height={1000}
          />
        </div>
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>Sobre a profissional</p>
        <h2 className={styles.title}>{PROFESSIONAL.name}</h2>
        <p className={styles.role}>{PROFESSIONAL.title}</p>
        <p className={styles.registration}>{PROFESSIONAL.registration}</p>
        <p className={styles.formation}>{PROFESSIONAL.formation}</p>
        <p className={styles.text}>{SITE.aboutLead}</p>
        <p className={styles.text}>{SITE.aboutBody}</p>
        <a className={styles.button} href="#agendamento">
          Agendar minha avaliação
        </a>
      </div>
    </section>
  )
}
