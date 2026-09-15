import { PROFESSIONAL } from '../../content'
import { HIPRO, type HiproPageContent } from '../../hipro-content'
import { HiproLeadForm } from './HiproLeadForm'
import styles from './HiproExpertise.module.css'

type HiproExpertiseProps = {
  content?: HiproPageContent
}

export function HiproExpertise({ content = HIPRO }: HiproExpertiseProps) {
  return (
    <section id="sobre" className={styles.section} aria-labelledby="hipro-expertise-title">
      <div className={styles.portrait}>
        <img
          src="/hipro-profissional.png"
          alt={`${PROFESSIONAL.name}, ${PROFESSIONAL.title}`}
          width={800}
          height={1000}
        />
        <div className={styles.portraitCaption}>
          <span>{PROFESSIONAL.name}</span>
          <span>{PROFESSIONAL.registration}</span>
        </div>
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>Sobre</p>
        <h2 id="hipro-expertise-title" className={styles.title}>
          {content.expertiseTitle}
        </h2>
        <p className={styles.role}>{PROFESSIONAL.title}</p>
        <p className={styles.formation}>{PROFESSIONAL.formation}</p>

        <ul className={styles.points}>
          {content.expertisePoints.map((point, index) => (
            <li key={point}>
              <span className={styles.pointIndex}>0{index + 1}</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div id="agendamento" className={styles.formWrap}>
        <HiproLeadForm content={content} />
      </div>
    </section>
  )
}
