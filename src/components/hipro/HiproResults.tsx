import { HIPRO, HIPRO_EXAMPLE_PHOTOS } from '../../hipro-content'
import { HiproCarousel } from './HiproCarousel'
import styles from './HiproResults.module.css'

export function HiproResults() {
  return (
    <section id="avaliacao" className={styles.section} aria-labelledby="hipro-results-title">
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Resultados</p>
        <h2 id="hipro-results-title" className={styles.title}>
          {HIPRO.resultsTitle}
        </h2>
        <p className={styles.subtitle}>{HIPRO.resultsSubtitle}</p>
        <p className={styles.body}>{HIPRO.resultsBody}</p>
        <p className={styles.disclaimer}>{HIPRO.resultsDisclaimer}</p>
      </div>

      <HiproCarousel photos={HIPRO_EXAMPLE_PHOTOS} />

      <div className={styles.panel}>
        <p className={styles.eyebrow}>Protocolo</p>
        <h3 className={styles.protocolTitle}>{HIPRO.protocolTitle}</h3>
        <p className={styles.body}>{HIPRO.protocolBody}</p>
        <p className={styles.script}>{HIPRO.protocolScript}</p>
      </div>
    </section>
  )
}
