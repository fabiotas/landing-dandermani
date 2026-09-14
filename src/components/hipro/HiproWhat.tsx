import { HIPRO } from '../../hipro-content'
import styles from './HiproWhat.module.css'

export function HiproWhat() {
  return (
    <section id="o-que-e" className={styles.section} aria-labelledby="hipro-what-title">
      <div className={styles.media}>
        <img
          src="/hipro-tecnologias.png"
          alt="Até onde cada tecnologia atua: comparação entre laser, luz intensa pulsada, radiofrequência e HIFU nas camadas da pele"
          width={1200}
          height={900}
        />
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>Tecnologia</p>
        <h2 id="hipro-what-title" className={styles.title}>
          {HIPRO.whatTitle}
        </h2>
        <span className={styles.rule} aria-hidden="true" />
        <p className={styles.lead}>{HIPRO.whatLead}</p>

        <ul className={styles.grid}>
          {HIPRO.whatFeatures.map((feature, index) => (
            <li key={feature.title} className={styles.item}>
              <span className={styles.index}>0{index + 1}</span>
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
