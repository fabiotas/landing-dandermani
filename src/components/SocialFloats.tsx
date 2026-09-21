import { INSTAGRAM_URL, whatsappUrl } from '../content'
import styles from './SocialFloats.module.css'

type SocialFloatsProps = {
  /** Mensagem opcional do WhatsApp (páginas de campanha). */
  whatsappMessage?: string
}

export function SocialFloats({ whatsappMessage }: SocialFloatsProps) {
  return (
    <div className={styles.floatStack}>
      <a
        className={styles.instagramFloat}
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Dra. Danti Bezerra"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
          />
        </svg>
      </a>
      <a
        className={styles.whatsFloat}
        href={whatsappUrl(whatsappMessage)}
        aria-label="Atendimento pelo WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9C21.94 6.43 17.5 2 12.04 2zm5.82 14.25c-.24.68-1.41 1.25-1.96 1.33-.5.07-1.14.1-1.84-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.37.81-.37h.58c.19 0 .44-.07.69.53.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.08.12.08.71-.16 1.39z"
          />
        </svg>
      </a>
    </div>
  )
}
