import {
  HIPRO,
  hiproWhatsappUrl,
  type HiproPageContent,
} from '../../hipro-content'
import styles from './HiproHero.module.css'

type HiproHeroProps = {
  content?: HiproPageContent
}

export function HiproHero({ content = HIPRO }: HiproHeroProps) {
  const [day, month] = content.eventDate.split('/')
  const whatsapp = () => hiproWhatsappUrl(undefined, content.whatsappMessage)

  return (
    <section id="topo" className={styles.hero} aria-label={content.eventName}>
      <div className={styles.media} aria-hidden="true">
        <img
          className={styles.photo}
          src="/hipro-equipamento.png"
          alt=""
          width={1200}
          height={1600}
        />
        <div className={styles.veil} />
        <div className={styles.grain} />
      </div>

      <div className={styles.content}>
        <p className={styles.date}>
          <span className={styles.dateDay}>{day}</span>
          <span className={styles.dateSep}>/</span>
          <span className={styles.dateMonth}>{month}</span>
        </p>

        {content.heroVariant === 'hipro-day' ? (
          <h1 className={styles.title}>
            <span className={styles.titleLead}>Dia do</span>
            <span className={styles.titleAccent}>
              <span className={styles.titleHi}>Hi</span>
              <span className={styles.titlePro}>PRO</span>
            </span>
            <span className={styles.titleLine} aria-hidden="true" />
          </h1>
        ) : (
          <h1 className={styles.titleNatural}>
            <span className={styles.titleNaturalMain}>{content.eventName}</span>
            <span className={styles.titleNaturalLocation}>
              {content.locationLine}
            </span>
            <span className={styles.titleLine} aria-hidden="true" />
          </h1>
        )}

        <span className={styles.badge}>{content.eventBadge}</span>

        <p className={styles.tagline}>{content.tagline}</p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#agendamento">
            Agendar minha avaliação
          </a>
          <a className={styles.secondary} href="#o-que-e">
            Como funciona
          </a>
        </div>
      </div>

      <ul className={styles.features}>
        {content.heroFeatures.map((feature, index) => (
          <li key={feature.title} className={styles.feature}>
            <span className={styles.featureIndex}>0{index + 1}</span>
            <strong>{feature.title}</strong>
          </li>
        ))}
      </ul>

      <ul className={styles.sideLabels} aria-hidden="true">
        {content.sideLabels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>

      <a
        className={styles.whatsFloat}
        href={whatsapp()}
        aria-label="Atendimento pelo WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9C21.94 6.43 17.5 2 12.04 2zm5.82 14.25c-.24.68-1.41 1.25-1.96 1.33-.5.07-1.14.1-1.84-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.37.81-.37h.58c.19 0 .44-.07.69.53.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.08.12.08.71-.16 1.39z"
          />
        </svg>
      </a>
    </section>
  )
}
