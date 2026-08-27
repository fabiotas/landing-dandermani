import { SITE } from '../content'
import { LeadForm } from './LeadForm'
import styles from './Cta.module.css'

export function Cta() {
  return (
    <section
      id="agendamento"
      className={styles.section}
      aria-labelledby="cta-title"
    >
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Agendamento</p>
        <h2 id="cta-title" className={styles.title}>
          Agendar minha avaliação
        </h2>
        <p className={styles.lead}>
          Atendimento em {SITE.city}. Deixe seu contato e combinamos um horário
          para a sua avaliação estética facial.
        </p>
        <LeadForm />
      </div>
    </section>
  )
}
