import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LandingPage } from '../../components/LandingPage'
import { SITE, TREATMENTS } from '../../content'

// Cada tratamento tem conteúdo próprio e mantém a URL das campanhas.
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

  const title = `${treatment.name} em Ribeirão Preto | ${SITE.brand}`
  const description = `${treatment.name} em Ribeirão Preto com avaliação individualizada por enfermeira especialista em estética. Conheça a proposta e agende sua avaliação.`

  return {
    title,
    alternates: { canonical: `/${slug}` },
    description,
    openGraph: {
      url: `/${slug}`,
      title,
      description,
    },
  }
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params
  const treatment = findTreatment(slug)
  if (!treatment) notFound()

  return <LandingPage treatment={treatment} />
}
