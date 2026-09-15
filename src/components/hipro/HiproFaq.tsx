import {
  HIPRO,
  hiproWhatsappUrl,
  type HiproPageContent,
} from '../../hipro-content'
import styles from './HiproFaq.module.css'

type HiproFaqProps = {
  content?: HiproPageContent
}

export function HiproFaq({ content = HIPRO }: HiproFaqProps) {
  return (
    <section id="duvidas" className={styles.section} aria-labelledby="hipro-faq-title">
      <div className={styles.listWrap}>
        <p className={styles.eyebrow}>Dúvidas frequentes</p>
        <h2 id="hipro-faq-title" className={styles.title}>
          {content.faqTitle}
        </h2>

        <div className={styles.list}>
          {content.faq.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.city}>{content.city}</p>
        <p className={styles.lead}>{content.locationLead}</p>
        <a
          className={styles.button}
          href={hiproWhatsappUrl(undefined, content.whatsappMessage)}
        >
          Agendar pelo WhatsApp
        </a>
      </aside>
    </section>
  )
}
