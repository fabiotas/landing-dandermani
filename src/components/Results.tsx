import { RESULT_PHOTOS } from '../content'
import { HiproCarousel } from './hipro/HiproCarousel'
import styles from './Results.module.css'

export function Results() {
  return (
    <section
      id="resultados"
      className={styles.section}
      aria-labelledby="resultados-title"
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Antes e depois</p>
        <h2 id="resultados-title" className={styles.title}>
          Resultados que respeitam a sua naturalidade
        </h2>
        <p className={styles.lead}>
          Exemplos de condutas em linhas de expressão, perfil e olhar — sempre
          após avaliação individualizada.
        </p>
        <p className={styles.disclaimer}>
          A resposta é individual. Não há promessa de resultado ou de duração.
        </p>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      <div className={styles.carouselWrap}>
        <HiproCarousel photos={RESULT_PHOTOS} />
      </div>
    </section>
  )
}
