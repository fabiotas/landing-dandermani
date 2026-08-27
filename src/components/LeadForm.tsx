'use client'

import { useState, type FormEvent } from 'react'
import { whatsappUrl } from '../content'
import { useTracking } from './TrackingProvider'
import styles from './LeadForm.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

const destination = whatsappUrl()

function formatTelefone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function LeadForm() {
  const tracking = useTracking()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [consentimento, setConsentimento] = useState(false)
  const [empresa, setEmpresa] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

      // Só segue para o WhatsApp depois que o lead foi persistido.
      //
      // Ponto de inserção da conversão do Google Ads / GA4: dispare o evento
      // `lead_submitted` exatamente aqui, e não no clique do botão, para que a
      // conversão só conte quando o backend confirmou a gravação. O script da
      // tag entra em src/app/layout.tsx.
      setStatus('success')
      window.location.href = destination
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
        <a className={styles.button} href={destination}>
          Continuar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-nome">
          Nome
        </label>
        <input
          id="lead-nome"
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
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-telefone">
          WhatsApp
        </label>
        <input
          id="lead-telefone"
          className={styles.input}
          name="telefone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="(19) 99999-9999"
          value={telefone}
          onChange={(event) => setTelefone(formatTelefone(event.target.value))}
          required
        />
      </div>

      {/* Armadilha para bots: invisível e fora da ordem de tabulação. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="lead-empresa">Empresa</label>
        <input
          id="lead-empresa"
          name="empresa"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={empresa}
          onChange={(event) => setEmpresa(event.target.value)}
        />
      </div>

      <label className={styles.consent} htmlFor="lead-consentimento">
        <input
          id="lead-consentimento"
          className={styles.checkbox}
          type="checkbox"
          checked={consentimento}
          onChange={(event) => setConsentimento(event.target.checked)}
          required
        />
        <span>
          Autorizo o contato sobre meu agendamento e li a{' '}
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
        className={styles.button}
        type="submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando…' : 'Agendar minha avaliação'}
      </button>

      {/* Saída para quem desistir do formulário: vai ao WhatsApp sem enviar. */}
      <a className={styles.escape} href={destination}>
        Prefiro falar direto no WhatsApp
      </a>

      <p className={styles.note}>
        Usamos seu nome e telefone apenas para falar sobre o agendamento.
      </p>
    </form>
  )
}
