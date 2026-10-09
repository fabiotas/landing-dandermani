import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '../../components/Header'
import { SocialFloats } from '../../components/SocialFloats'
import { GallerySwipeHint } from '../../components/GallerySwipeHint'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'
import { Location } from '../../components/Location'
import { Footer } from '../../components/Footer'
import { SITE, whatsappViaObrigado } from '../../content'
import faqStyles from '../../components/Faq.module.css'
import styles from './page.module.css'

const title = 'Especialista em Remoção de linhas de Expressão em Ribeirão Preto | Danti Bezerra'
const description = 'Conheça registros de antes e depois de toxina botulínica para linhas de expressão. Avaliação facial individualizada com Danti Bezerra em Ribeirão Preto.'
const contact = whatsappViaObrigado('Olá! Gostaria de saber mais sobre remoção de rugas (toxina botulínica) e agendar uma avaliação.')
const photos = ['botox1.jpeg', 'botox2.jpeg', 'botox3.jpeg', 'botox4.jpeg', 'botox5.jpeg', 'botox6.jpeg', 'botox4-1.jpeg', 'botox7.jpeg']
const questions = [
  { question: 'Como saber se a toxina botulínica é indicada para mim?', answer: 'A indicação depende da avaliação profissional, considerando suas características faciais, seu histórico e suas expectativas. As regiões e a quantidade são definidas individualmente.' },
  { question: 'Meu resultado será igual ao das fotos?', answer: 'Não é possível garantir o mesmo resultado. As fotos mostram casos individuais, e a resposta de cada pessoa pode variar. Expressão facial, iluminação e ângulo também podem diferir entre os registros.' },
  { question: 'Quais regiões podem ser avaliadas?', answer: 'A avaliação pode considerar queixas na testa, entre as sobrancelhas e no contorno dos olhos. A conduta depende da análise individual.' },
  { question: 'Qual é o valor do atendimento?', answer: 'Entre em contato pelo WhatsApp para esclarecer os valores e as condições de acordo com a avaliação e o planejamento do seu caso.' },
  { question: 'Como funciona o acompanhamento?', answer: 'As orientações posteriores, o acompanhamento e a eventual necessidade de retorno são esclarecidos durante a avaliação.' },
]

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/eliminando-linhas-expressao' },
  openGraph: { title, description, url: '/eliminando-linhas-expressao', images: [{ url: '/profissional.png', alt: 'Danti Bezerra — estética em Ribeirão Preto' }] },
}

export default function BotoxPage() {
  return <>
    <Header />
    <main>
      <Hero headline="Especialista em Remoção de linhas de Expressão" highlightWord="Especialista" mobileSeparatePortrait supporting="Toxina botulínica para linhas de expressão, com avaliação individual e planejamento que respeita as características do seu rosto." showPromo={false} />
      <section id="resultados" className={styles.section} aria-labelledby="resultados-botox">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Toxina botulínica · Antes e depois</p>
        </div>
        <p className={styles.mobileHint}>Deslize para ver os 8 registros de antes e depois →</p>
        <div className={styles.galleryWrap}>
        <GallerySwipeHint />
        <div className={styles.gallery} tabIndex={0} role="region" aria-label="Galeria com oito registros de antes e depois. Use as setas do teclado ou deslize para navegar.">
          {photos.map((photo, index) => <figure className={styles.card} key={photo}>
            <div className={styles.frame}><Image src={`/botox/${photo}`} alt={`Registro ${index + 1}: comparação antes e depois de atendimento com toxina botulínica`} width={1080} height={1350} sizes="(max-width: 760px) 85vw, (max-width: 1100px) 45vw, 380px" /></div>
            <figcaption><span>Antes & depois</span><span>{String(index + 1).padStart(2, '0')} / 08</span></figcaption>
          </figure>)}
        </div>
        </div>
        <div className={`${styles.intro} ${styles.afterGallery}`}>
          <h2 id="resultados-botox">Cada rosto, <em>um cuidado individual.</em></h2>
          <p>Conheça registros dos atendimentos e converse sobre o que pode ser indicado para você.</p>
          <p className={styles.notice}>Os resultados são individuais e não representam garantia de resultado ou de duração. Expressão, iluminação e ângulo podem variar entre as fotos.</p>
          <span className={styles.rule} aria-hidden="true" />
        </div>
        <div className={styles.galleryCta}><a className={styles.button} href={contact}>Quero avaliar minhas linhas de expressão ↗</a></div>
      </section>
      <About photo="/profissional.png" />
      <section className={faqStyles.section} id="duvidas">
        <div className={faqStyles.intro}><p className={faqStyles.eyebrow}>Perguntas frequentes</p><h2 className={faqStyles.title}>Suas dúvidas sobre remoção de rugas</h2></div>
        <div className={faqStyles.list}>{questions.map(item => <details className={faqStyles.item} key={item.question}><summary className={faqStyles.question}>{item.question}</summary><p className={faqStyles.answer}>{item.answer}</p></details>)}</div>
      </section>
      <section id="agendamento" className={styles.cta}>
        <p id="avaliacao" className={styles.eyebrow}>Vamos conversar?</p><h2>O primeiro passo é <em>a sua avaliação.</em></h2><p>Conte suas expectativas e esclareça a indicação, os cuidados e as condições do atendimento.</p><a className={styles.button} href={contact}>Conversar sobre remoção de rugas no WhatsApp ↗</a>
      </section>
      <Location />
    </main>
    <Footer brand={SITE.brand} city={SITE.city} />
    <SocialFloats whatsappMessage="Olá! Gostaria de saber mais sobre remoção de linhas de expressão e agendar uma avaliação." />
  </>
}
