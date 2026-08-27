import { Header } from './Header'
import { Hero } from './Hero'
import { Highlights } from './Highlights'
import { Process } from './Process'
import { Treatments } from './Treatments'
import { About } from './About'
import { Faq } from './Faq'
import { Cta } from './Cta'
import { Footer } from './Footer'
import { SITE, type Treatment } from '../content'

type LandingPageProps = {
  /** Presente quando a entrada foi por uma URL de campanha. */
  treatment?: Treatment
}

export function LandingPage({ treatment }: LandingPageProps) {
  return (
    <>
      <Header />
      <main>
        <Hero supporting={treatment?.supporting} />
        <Highlights />
        <Process />
        <Treatments />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer brand={SITE.brand} city={SITE.city} />
    </>
  )
}
