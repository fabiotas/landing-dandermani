import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE } from '../content'
import { TrackingProvider } from '../components/TrackingProvider'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const description =
  'Avaliação estética facial individualizada para suavizar linhas de expressão preservando a naturalidade. Atendimento em Ribeirão Preto.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE.headline} | ${SITE.brand}`,
  description,
  icons: { icon: '/logo.svg' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE.brand,
    title: `${SITE.headline} | ${SITE.brand}`,
    description,
    images: [{ url: '/logo.png', alt: SITE.brand }],
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        {/*
          Ponto de inserção do Google Tag Manager / gtag.js.
          Adicionar aqui, com next/script e strategy="afterInteractive",
          quando o ID do container existir. O evento de conversão
          `lead_submitted` é disparado em src/components/LeadForm.tsx,
          depois da confirmação do backend.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <TrackingProvider>{children}</TrackingProvider>
      </body>
    </html>
  )
}
