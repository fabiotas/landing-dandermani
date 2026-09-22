import { SITE } from '../content'
import styles from './Location.module.css'

export function Location() {
  return (
    <section
      id="endereco"
      className={styles.section}
      aria-labelledby="location-title"
    >
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Localização</p>
        <h2 id="location-title" className={styles.title}>
          Onde atender
        </h2>
        <p className={styles.lead}>
          Localizado em uma das melhores regiões e de fácil acesso de Ribeirão
          Preto.
        </p>
        <p className={styles.city}>{SITE.city}</p>
        <p className={styles.address}>{SITE.address}</p>
        <a
          className={styles.link}
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir no Google Maps
        </a>
      </div>

      <div className={styles.mapFrame}>
        <iframe
          className={styles.map}
          src={SITE.mapsEmbedUrl}
          title={`Mapa: ${SITE.address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className={styles.mapVeil} aria-hidden="true" />
      </div>
    </section>
  )
}
