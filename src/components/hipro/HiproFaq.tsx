import { HIPRO, hiproWhatsappUrl } from '../../hipro-content'
import styles from './HiproFaq.module.css'

export function HiproFaq() {
  return (
    <section id="duvidas" className={styles.section} aria-labelledby="hipro-faq-title">
      <div className={styles.listWrap}>
        <p className={styles.eyebrow}>Dúvidas frequentes</p>
        <h2 id="hipro-faq-title" className={styles.title}>
          Perguntas sobre o HIPRO
        </h2>

        <div className={styles.list}>
          {HIPRO.faq.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.city}>{HIPRO.city}</p>
        <p className={styles.lead}>{HIPRO.locationLead}</p>
        <a className={styles.button} href={hiproWhatsappUrl()}>
          Agendar pelo WhatsApp
        </a>
      </aside>
    </section>
  )
}
