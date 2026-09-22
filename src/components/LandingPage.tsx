import { Header } from './Header'
import { Hero } from './Hero'
import { Process } from './Process'
import { Treatments } from './Treatments'
import { Results } from './Results'
import { About } from './About'
import { Faq } from './Faq'
import { Cta } from './Cta'
import { Location } from './Location'
import { Footer } from './Footer'
import { SocialFloats } from './SocialFloats'
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
        <Results />
        <Process />
        <About />
        <Location />
        <Treatments />
        <Faq />
        <Cta />
      </main>
      <Footer brand={SITE.brand} city={SITE.city} />
      <SocialFloats />
    </>
  )
}
