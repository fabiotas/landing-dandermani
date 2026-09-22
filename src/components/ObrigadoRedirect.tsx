'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { parseSafeWhatsappRedirect } from '../content'
import { fireLeadConversion } from '../lib/google-tag'
import styles from './ObrigadoRedirect.module.css'

const REDIRECT_MS = 3000

export function ObrigadoRedirect() {
  const searchParams = useSearchParams()
  const whatsappHref = useMemo(
    () => parseSafeWhatsappRedirect(searchParams.get('to')),
    [searchParams],
  )
  const [secondsLeft, setSecondsLeft] = useState(
    Math.ceil(REDIRECT_MS / 1000),
  )

  useEffect(() => {
    fireLeadConversion()
  }, [])

  useEffect(() => {
    if (!whatsappHref) return

    const started = Date.now()
    const tick = window.setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil((REDIRECT_MS - (Date.now() - started)) / 1000),
      )
      setSecondsLeft(remaining)
    }, 250)

    const timer = window.setTimeout(() => {
      window.location.href = whatsappHref
    }, REDIRECT_MS)

    return () => {
      window.clearInterval(tick)
      window.clearTimeout(timer)
    }
  }, [whatsappHref])

  return (
    <main className={styles.main}>
      <p className={styles.eyebrow}>Aproveite para tirar todas as dúvidas</p>
      <h1 className={styles.title}>
        Aguardamos a sua mensagem para seguirmos com o agendamento
      </h1>
      <p className={styles.lead}>
        {whatsappHref
          ? `Em instantes abrimos o WhatsApp para você continuar a conversa (${secondsLeft}s).`
          : 'Recebemos seu interesse. Se preferir, fale conosco pelo WhatsApp quando quiser.'}
      </p>
      {whatsappHref ? (
        <a className={styles.cta} href={whatsappHref}>
          Continuar no WhatsApp agora
        </a>
      ) : null}
      <a className={styles.home} href="/">
        Voltar ao início
      </a>
    </main>
  )
}
