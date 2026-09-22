import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ObrigadoRedirect } from '../../components/ObrigadoRedirect'
import { SITE } from '../../content'

export const metadata: Metadata = {
  title: `Agendamento | ${SITE.brand}`,
  description:
    'Aguardamos a sua mensagem para seguirmos com o agendamento pelo WhatsApp.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={null}>
      <ObrigadoRedirect />
    </Suspense>
  )
}
