import { FAQ } from '../content'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="duvidas" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Dúvidas</p>
        <h2 id="faq-title" className={styles.title}>
          Perguntas frequentes
        </h2>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      <div className={styles.list}>
        {FAQ.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
