import type { Metadata } from 'next'
import { HIPRO } from '../../hipro-content'
import { HiproPage } from '../../components/hipro/HiproPage'

export const metadata: Metadata = {
  title: HIPRO.metaTitle,
  description: HIPRO.metaDescription,
  openGraph: {
    title: HIPRO.metaTitle,
    description: HIPRO.metaDescription,
    images: [{ url: '/hipro-profissional.png', alt: 'Dia do HiPRO' }],
  },
}

export default function HiproRibeiraoPage() {
  return <HiproPage />
}
