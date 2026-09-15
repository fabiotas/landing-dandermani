import { SITE } from '../../content'
import { HIPRO, type HiproPageContent } from '../../hipro-content'
import { Footer } from '../Footer'
import { HiproCta } from './HiproCta'
import { HiproExpertise } from './HiproExpertise'
import { HiproFaq } from './HiproFaq'
import { HiproHeader } from './HiproHeader'
import { HiproHero } from './HiproHero'
import { HiproPossibilities } from './HiproPossibilities'
import { HiproResults } from './HiproResults'
import { HiproWhat } from './HiproWhat'

type HiproPageProps = {
  content?: HiproPageContent
}

export function HiproPage({ content = HIPRO }: HiproPageProps) {
  return (
    <>
      <HiproHeader content={content} />
      <main>
        <HiproHero content={content} />
        <HiproWhat content={content} />
        <HiproPossibilities content={content} />
        <HiproResults content={content} />
        <HiproExpertise content={content} />
        <HiproFaq content={content} />
        <HiproCta content={content} />
      </main>
      <Footer brand={SITE.brand} city={SITE.city} />
    </>
  )
}
