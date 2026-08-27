import type { CSSProperties } from 'react'
import { TREATMENTS } from '../content'
import styles from './Treatments.module.css'

export function Treatments() {
  return (
    <section
      id="tratamentos"
      className={styles.section}
      aria-labelledby="tratamentos-title"
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Avaliação facial</p>
        <h2 id="tratamentos-title" className={styles.title}>
          Regiões e queixas que podem ser avaliadas
        </h2>
        <p className={styles.lead}>
          A indicação de cada conduta acontece somente após avaliação clínica,
          com foco em naturalidade e harmonia facial.
        </p>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      <ul className={styles.grid}>
        {TREATMENTS.map((item, index) => (
          <li
            key={item.name}
            className={styles.card}
            style={{ '--i': index } as CSSProperties}
          >
            <span className={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a className={styles.link} href="#agendamento">
              Agendar minha avaliação
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.footerCta}>
        <a className={styles.button} href="#agendamento">
          Agendar minha avaliação
        </a>
      </div>
    </section>
  )
}
