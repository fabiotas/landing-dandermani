import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LandingPage } from '../../components/LandingPage'
import { SITE, TREATMENTS } from '../../content'

// Cada entrada entrega a mesma landing com o texto de abertura próprio.
// O slug é a URL de campanha e é o que fica gravado em landing_page no lead.
export function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({ slug: treatment.slug }))
}

type TreatmentPageProps = {
  params: Promise<{ slug: string }>
}

function findTreatment(slug: string) {
  return TREATMENTS.find((treatment) => treatment.slug === slug)
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params
  const treatment = findTreatment(slug)
  if (!treatment) return {}

  const title = `${treatment.headline} | ${SITE.brand}`

  return {
    title,
    description: treatment.supporting,
    openGraph: {
      title,
      description: treatment.supporting,
    },
  }
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params
  const treatment = findTreatment(slug)
  if (!treatment) notFound()

  return <LandingPage treatment={treatment} />
}
