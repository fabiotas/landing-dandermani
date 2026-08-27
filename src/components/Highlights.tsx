import type { CSSProperties } from 'react'
import { HIGHLIGHTS } from '../content'
import styles from './Highlights.module.css'

export function Highlights() {
  return (
    <section className={styles.section} aria-label="Diferenciais">
      <ul className={styles.grid}>
        {HIGHLIGHTS.map((item, index) => (
          <li
            key={item.title}
            className={styles.item}
            style={{ '--i': index } as CSSProperties}
          >
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.text}>{item.description}</p>
          </li>
        ))}
      </ul>

      <div className={styles.curve} aria-hidden="true" />
    </section>
  )
}
