import Link from 'next/link'
import { PROFESSIONAL, type Treatment } from '../content'
import styles from './TreatmentDetails.module.css'

const DETAILS = {
  'linhas-de-expressao': {
    title: 'Avaliação das linhas de expressão do rosto',
    body: 'As queixas na testa, entre as sobrancelhas e no contorno dos olhos são avaliadas considerando a expressão e as características de cada rosto. A consulta é o momento de explicar quais marcas incomodam e qual mudança você busca, sem partir de um protocolo igual para todas as pessoas.',
    focus: 'Na avaliação, converse sobre as regiões que deseja suavizar e sobre a importância de preservar sua expressão. A profissional explica as possibilidades e os limites da conduta indicada para o seu caso.',
    question: 'Toda linha de expressão recebe o mesmo tratamento?',
    answer: 'A proposta não é padronizada. A análise facial e a conversa sobre suas expectativas orientam a indicação; o procedimento não é definido apenas pela presença de uma marca.',
  },
  preenchimento: {
    title: 'Preenchimento: avaliação de volume, contorno e proporção',
    body: 'O atendimento para preenchimento em Ribeirão Preto começa pela avaliação da região de interesse, como lábios, olheiras ou estrutura facial. O objetivo da consulta é entender sua expectativa de volume e contorno em relação às proporções do seu rosto.',
    focus: 'Se sua queixa envolve os lábios, explique se busca contorno, volume ou equilíbrio. Para outras regiões, descreva o que deseja mudar. A indicação depende da avaliação e não significa que todas as áreas precisam ser tratadas.',
    question: 'Posso avaliar apenas o preenchimento labial?',
    answer: 'Sim. Você pode trazer uma queixa específica sobre os lábios para a consulta. A profissional considera essa expectativa em conjunto com a análise facial antes de propor uma conduta.',
  },
  hifu: {
    title: 'HIFU: ultrassom focado para firmeza e contorno',
    body: 'HIFU é a sigla para ultrassom focado de alta intensidade. Nesta avaliação, o foco são queixas de firmeza e definição do contorno, com análise individual da região e dos objetivos de cuidado. O HiPRO é a tecnologia apresentada em uma página própria deste site.',
    focus: 'Informe se a sua principal preocupação é o contorno do rosto ou outra região. Antes de agendar um procedimento, peça esclarecimentos sobre a tecnologia utilizada, a proposta de atendimento e os limites esperados para o seu caso.',
    question: 'Onde encontro informações sobre o HiPRO?',
    answer: 'A página de HiPRO reúne informações sobre a tecnologia, possibilidades de avaliação e dúvidas frequentes. A escolha do protocolo acontece após a consulta individualizada.',
  },
  'fios-de-pdo': {
    title: 'Fios de PDO: avaliação de sustentação e qualidade da pele',
    body: 'O atendimento para fios de PDO parte de uma conversa sobre queixas de sustentação e qualidade da pele. A análise facial ajuda a discutir se essa abordagem faz sentido para os seus objetivos e quais expectativas precisam ser esclarecidas antes de qualquer procedimento.',
    focus: 'Traga suas dúvidas sobre a região que deseja avaliar e o tipo de mudança que espera perceber. A consulta deve esclarecer a proposta, suas limitações e as orientações específicas antes e depois do procedimento, caso ele seja indicado.',
    question: 'Como saber se fios de PDO fazem sentido para mim?',
    answer: 'A indicação exige avaliação individual. A profissional considera suas queixas e histórico, explica as possibilidades e informa quando uma conduta não é adequada.',
  },
} satisfies Record<Treatment['slug'], { title: string; body: string; focus: string; question: string; answer: string }>

export function TreatmentDetails({ treatment }: { treatment: Treatment }) {
  const detail = DETAILS[treatment.slug]
  return (
    <section className={styles.section} aria-labelledby="treatment-detail-title">
      <nav aria-label="Caminho da página"><Link href="/">Início</Link> / {treatment.name}</nav>
      <h2 id="treatment-detail-title">{detail.title}</h2>
      <p>{detail.body}</p>
      <h2>O que conversar na sua avaliação</h2>
      <p>{detail.focus}</p>
      <h2>{detail.question}</h2>
      <p>{detail.answer}</p>
      {treatment.slug === 'hifu' && <p><Link href="/hipro-ribeirao">Conheça o HiPRO em Ribeirão Preto</Link></p>}
      <h2>Atendimento em Ribeirão Preto</h2>
      <p>A avaliação é conduzida por {PROFESSIONAL.name}, {PROFESSIONAL.title}, {PROFESSIONAL.registration}, no Metropolitan Business Center, no Jardim América. Histórico, expectativas e orientações de cuidado são discutidos individualmente. Não há promessa de resultado ou de duração.</p>
      <a href="#agendamento">Agendar avaliação de {treatment.name.toLocaleLowerCase('pt-BR')}</a>
    </section>
  )
}
