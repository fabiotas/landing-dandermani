import type { Metadata } from 'next'
import { REJUVENESCIMENTO } from '../../hipro-content'
import { HiproPage } from '../../components/hipro/HiproPage'

export const metadata: Metadata = {
  title: REJUVENESCIMENTO.metaTitle,
  description: REJUVENESCIMENTO.metaDescription,
  openGraph: {
    title: REJUVENESCIMENTO.metaTitle,
    description: REJUVENESCIMENTO.metaDescription,
    images: [
      { url: '/hipro-profissional.png', alt: 'Rejuvenescimento natural' },
    ],
  },
}

export default function RejuvenescimentoNaturalRibeiraoPage() {
  return <HiproPage content={REJUVENESCIMENTO} />
}
