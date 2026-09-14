import { SITE } from '../../content'
import { Footer } from '../Footer'
import { HiproCta } from './HiproCta'
import { HiproExpertise } from './HiproExpertise'
import { HiproFaq } from './HiproFaq'
import { HiproHeader } from './HiproHeader'
import { HiproHero } from './HiproHero'
import { HiproPossibilities } from './HiproPossibilities'
import { HiproResults } from './HiproResults'
import { HiproWhat } from './HiproWhat'

export function HiproPage() {
  return (
    <>
      <HiproHeader />
      <main>
        <HiproHero />
        <HiproWhat />
        <HiproPossibilities />
        <HiproResults />
        <HiproExpertise />
        <HiproFaq />
        <HiproCta />
      </main>
      <Footer brand={SITE.brand} city={SITE.city} />
    </>
  )
}
