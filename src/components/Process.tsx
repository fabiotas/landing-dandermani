import styles from './Process.module.css'

export function Process() {
  return (
    <section
      id="avaliacao"
      className={styles.section}
      aria-labelledby="avaliacao-title"
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Primeiro encontro</p>
        <h2 id="avaliacao-title" className={styles.title}>
          Agende a primeira avaliação de forma Online gratuita
        </h2>
        <p className={styles.lead}>
          Um momento para ouvir suas queixas, analisar o seu rosto e indicar o
          que faz sentido — sem compromisso de fechar tratamento.
        </p>
        <a className={styles.cta} href="#agendamento">
          Quero agendar
        </a>
        <span className={styles.rule} aria-hidden="true" />
      </div>
    </section>
  )
}
