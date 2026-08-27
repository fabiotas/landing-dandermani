import type { CSSProperties } from 'react'
import { PROCESS } from '../content'
import styles from './Process.module.css'

export function Process() {
  return (
    <section
      id="avaliacao"
      className={styles.section}
      aria-labelledby="avaliacao-title"
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Avaliação</p>
        <h2 id="avaliacao-title" className={styles.title}>
          Como funciona a avaliação
        </h2>
        <p className={styles.lead}>
          Um caminho simples, sem compromisso de fechar tratamento, para
          entender o que é indicado no seu caso.
        </p>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      <ol className={styles.steps}>
        {PROCESS.map((step, index) => (
          <li
            key={step.title}
            className={styles.step}
            style={{ '--i': index } as CSSProperties}
          >
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
