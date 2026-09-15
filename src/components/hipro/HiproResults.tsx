import {
  HIPRO,
  HIPRO_EXAMPLE_PHOTOS,
  type HiproPageContent,
} from '../../hipro-content'
import { HiproCarousel } from './HiproCarousel'
import styles from './HiproResults.module.css'

type HiproResultsProps = {
  content?: HiproPageContent
}

export function HiproResults({ content = HIPRO }: HiproResultsProps) {
  return (
    <section id="avaliacao" className={styles.section} aria-labelledby="hipro-results-title">
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Resultados</p>
        <h2 id="hipro-results-title" className={styles.title}>
          {content.resultsTitle}
        </h2>
        <p className={styles.subtitle}>{content.resultsSubtitle}</p>
        <p className={styles.body}>{content.resultsBody}</p>
        <p className={styles.disclaimer}>{content.resultsDisclaimer}</p>
      </div>

      <HiproCarousel photos={HIPRO_EXAMPLE_PHOTOS} />

      <div className={styles.panel}>
        <p className={styles.eyebrow}>Protocolo</p>
        <h3 className={styles.protocolTitle}>{content.protocolTitle}</h3>
        <p className={styles.body}>{content.protocolBody}</p>
        <p className={styles.script}>{content.protocolScript}</p>
      </div>
    </section>
  )
}
