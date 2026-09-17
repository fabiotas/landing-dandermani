import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { SITE } from '../content'
import { TrackingProvider } from '../components/TrackingProvider'
import './globals.css'

const CLARITY_PROJECT_ID = 'yjhibms39o'

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
          Ponto de inserção do Google Tag Manager / gtag.js.
          Adicionar aqui, com next/script e strategy="afterInteractive",
          quando o ID do container existir. O evento de conversão
          `lead_submitted` é disparado em src/components/LeadForm.tsx,
          depois da confirmação do backend.
        */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Great+Vibes&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <TrackingProvider>{children}</TrackingProvider>
      </body>
    </html>
  )
}
