import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE } from '../content'
import { ClarityAnalytics } from '../components/ClarityAnalytics'
import { CookieConsent } from '../components/CookieConsent'
import { GoogleTagManager } from '../components/GoogleTagManager'
import { TrackingProvider } from '../components/TrackingProvider'
import './globals.css'

// Constante em vez de variável de ambiente: NEXT_PUBLIC_* é embutida no build,
// e o .env do compose só existe em tempo de execução.
const siteUrl = SITE.url

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
          GTM (GTM-PCW9ZTZL) e Clarity só após consentimento (CookieConsent).
          Conversão lead_submitted: dataLayer em /obrigado.
        */}
        <GoogleTagManager />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Great+Vibes&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <TrackingProvider>{children}</TrackingProvider>
        <ClarityAnalytics />
        <CookieConsent />
      </body>
    </html>
  )
}
