import type { Metadata } from 'next'
import { LandingPage } from '../components/LandingPage'

const title = 'Danti Bezerra | Estética Avançada em Ribeirão Preto'
const description =
  'Avaliação estética facial individualizada em Ribeirão Preto, com foco em naturalidade, harmonia e cuidados personalizados.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
  },
}

export default function Home() {
  return <LandingPage />
}
