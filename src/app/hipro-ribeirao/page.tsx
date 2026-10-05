import type { Metadata } from 'next'
import { HIPRO } from '../../hipro-content'
import { HiproPage } from '../../components/hipro/HiproPage'

export const metadata: Metadata = {
  alternates: { canonical: "/hipro-ribeirao" },
  title: HIPRO.metaTitle,
  description: HIPRO.metaDescription,
  openGraph: {
    url: "/hipro-ribeirao",
    title: HIPRO.metaTitle,
    description: HIPRO.metaDescription,
    images: [{ url: '/hipro-profissional.png', alt: 'HiPRO em Ribeirão Preto' }],
  },
}

export default function HiproRibeiraoPage() {
  return <HiproPage />
}
