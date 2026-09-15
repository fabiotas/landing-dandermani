import { HIPRO, type HiproPageContent } from '../../hipro-content'
import styles from './HiproPossibilities.module.css'

type HiproPossibilitiesProps = {
  content?: HiproPageContent
}

export function HiproPossibilities({ content = HIPRO }: HiproPossibilitiesProps) {
  return (
    <section
      id="tratamentos"
      className={styles.section}
      aria-labelledby="hipro-possibilities-title"
    >
      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>Possibilidades</p>
          <h2 id="hipro-possibilities-title" className={styles.title}>
            {content.possibilitiesTitle}
          </h2>
        </div>
        <p className={styles.script}>{content.possibilitiesScript}</p>
      </div>

      <ul className={styles.grid}>
        {content.possibilities.map((item, index) => (
          <li key={item} className={styles.card}>
            <span className={styles.check} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 12.2l2.4 2.4L16.2 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.index}>0{index + 1}</span>
            <p className={styles.label}>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
