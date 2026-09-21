import { HIPRO, type HiproPageContent } from '../../hipro-content'
import { SocialFloats } from '../SocialFloats'
import styles from './HiproHero.module.css'

type HiproHeroProps = {
  content?: HiproPageContent
}

export function HiproHero({ content = HIPRO }: HiproHeroProps) {
  const [day, month] = content.eventDate.split('/')

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
            {content.eventSubtitle ? (
              <span className={styles.titleNaturalSub}>
                {content.eventSubtitle}
              </span>
            ) : null}
            <span className={styles.titleLine} aria-hidden="true" />
          </h1>
        )}

        {content.eventBadge ? (
          <span className={styles.badge}>{content.eventBadge}</span>
        ) : null}

        <p
          className={
            content.heroVariant === 'natural'
              ? styles.taglineStrong
              : styles.tagline
          }
        >
          {content.tagline}
        </p>

        {content.heroVariant === 'natural' ? (
          <p className={styles.titleNaturalLocation}>{content.locationLine}</p>
        ) : null}

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

      <SocialFloats whatsappMessage={content.whatsappMessage} />
    </section>
  )
}
