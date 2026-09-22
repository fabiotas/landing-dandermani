'use client'

import { useState, type FormEvent } from 'react'
import {
  HIPRO,
  hiproWhatsappUrl,
  type HiproPageContent,
} from '../../hipro-content'
import { obrigadoUrl } from '../../content'
import { useTracking } from '../TrackingProvider'
import styles from './HiproLeadForm.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

type HiproLeadFormProps = {
  content?: HiproPageContent
}

function formatTelefone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function HiproLeadForm({ content = HIPRO }: HiproLeadFormProps) {
  const tracking = useTracking()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [interesse, setInteresse] = useState('')
  const [consentimento, setConsentimento] = useState(false)
  const [empresa, setEmpresa] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const destination = hiproWhatsappUrl(
    interesse || undefined,
    content.whatsappMessage,
  )
  const viaObrigado = obrigadoUrl(destination)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          telefone,
          consentimento,
          empresa,
          experiencia_estetica: interesse || null,
          landing_page: tracking?.landing_page ?? window.location.pathname,
          utm_source: tracking?.utm_source ?? null,
          utm_medium: tracking?.utm_medium ?? null,
          utm_campaign: tracking?.utm_campaign ?? null,
          utm_term: tracking?.utm_term ?? null,
          utm_content: tracking?.utm_content ?? null,
          gclid: tracking?.gclid ?? null,
          gbraid: tracking?.gbraid ?? null,
          wbraid: tracking?.wbraid ?? null,
        }),
      })

      if (!response.ok) {
        const detail = await response.json().catch(() => null)
        setErrorMessage(
          detail?.campos?.[0]?.mensagem ??
            detail?.error ??
            'Não foi possível enviar. Tente novamente.',
        )
        setStatus('error')
        return
      }

      setStatus('success')
      window.location.href = viaObrigado
    } catch {
      setErrorMessage(
        'Falha de conexão. Verifique sua internet e tente novamente.',
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successText}>
          Recebemos seu contato. Abrindo o WhatsApp…
        </p>
        <a className={styles.submit} href={viaObrigado}>
          Continuar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      data-clarity-mask="true"
    >
      <h3 className={styles.title}>{content.formTitle}</h3>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="hipro-nome">
          Nome
        </label>
        <input
          id="hipro-nome"
          className={styles.input}
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Como podemos te chamar"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
          minLength={2}
          maxLength={120}
          data-clarity-mask="true"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="hipro-telefone">
          WhatsApp
        </label>
        <input
          id="hipro-telefone"
          className={styles.input}
          name="telefone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="(16) 99999-9999"
          value={telefone}
          onChange={(event) => setTelefone(formatTelefone(event.target.value))}
          required
          data-clarity-mask="true"
        />
      </div>

      <fieldset className={styles.interests}>
        <legend className={styles.questionLabel}>{content.formQuestionLabel}</legend>
        <div className={styles.interestGrid}>
          {content.formInterests.map((option) => {
            const selected = interesse === option
            return (
              <button
                key={option}
                type="button"
                className={selected ? styles.interestActive : styles.interest}
                aria-pressed={selected}
                onClick={() => setInteresse(option)}
              >
                {option}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="hipro-empresa">Empresa</label>
        <input
          id="hipro-empresa"
          name="empresa"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={empresa}
          onChange={(event) => setEmpresa(event.target.value)}
          data-clarity-mask="true"
        />
      </div>

      <label className={styles.consent} htmlFor="hipro-consentimento">
        <input
          id="hipro-consentimento"
          className={styles.checkbox}
          type="checkbox"
          checked={consentimento}
          onChange={(event) => setConsentimento(event.target.checked)}
          required
        />
        <span>
          Autorizo o contato pelo WhatsApp sobre {content.formConsentTopic} e li
          a{' '}
          <a
            className={styles.link}
            href="/privacidade"
            target="_blank"
            rel="noopener noreferrer"
          >
            política de privacidade
          </a>
          .
        </span>
      </label>

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      <button
        className={styles.submit}
        type="submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando…' : 'Quero consultar as condições'}
      </button>
    </form>
  )
}
