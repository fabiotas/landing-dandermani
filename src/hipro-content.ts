import { PROFESSIONAL, SITE, whatsappUrl } from './content'

export type HiproExamplePhoto = {
  src: string
  alt: string
  caption?: string
}

export type HiproPageContent = {
  slug: string
  heroVariant: 'hipro-day' | 'natural'
  eventName: string
  eventDate: string
  eventBadge: string
  tagline: string
  locationLine: string
  city: string
  sideLabels: readonly string[]
  heroFeatures: readonly { title: string; description: string }[]
  whatTitle: string
  whatLead: string
  whatFeatures: readonly { title: string; description: string }[]
  possibilitiesTitle: string
  possibilitiesScript: string
  possibilities: readonly string[]
  resultsTitle: string
  resultsSubtitle: string
  resultsBody: string
  resultsDisclaimer: string
  protocolTitle: string
  protocolBody: string
  protocolScript: string
  expertiseTitle: string
  expertisePoints: readonly string[]
  formTitle: string
  formConsentTopic: string
  formQuestionLabel: string
  formInterests: readonly string[]
  faqTitle: string
  faq: readonly { question: string; answer: string }[]
  locationLead: string
  finalEyebrow: string
  finalTitle: string
  finalPoints: readonly string[]
  whatsappMessage: string
  metaTitle: string
  metaDescription: string
}

/** Fotos de exemplo do carrossel na seção de resultados. */
export const HIPRO_EXAMPLE_PHOTOS: HiproExamplePhoto[] = [
  {
    src: '/hipro-exemplo-1.png',
    alt: 'Antes e depois: contorno facial e mandíbula com HIPRO',
    caption: 'Contorno facial',
  },
  {
    src: '/hipro-exemplo-2.png',
    alt: 'Evolução antes, imediato e 60 dias no contorno facial com HIPRO',
    caption: 'Antes · Imediato · 60 dias',
  },
  {
    src: '/hipro-exemplo-3.png',
    alt: 'Antes e depois imediato no dorso da mão com HIPRO',
    caption: 'Mãos — resultado imediato',
  },
  {
    src: '/hipro-exemplo-4.png',
    alt: 'Antes e depois de firmeza facial com HIPRO',
    caption: 'Firmeza e contorno facial',
  },
  {
    src: '/hipro-exemplo-5.png',
    alt: 'Antes e depois de contorno de mandíbula e papada com HIPRO',
    caption: 'Mandíbula e papada',
  },
]

export const HIPRO: HiproPageContent = {
  slug: '/hipro-ribeirao',
  heroVariant: 'hipro-day',
  eventName: 'Dia do HiPRO',
  eventDate: '03/10',
  eventBadge: 'Condição especial Semana do Cliente de 13 a 19 de setembro',
  tagline: 'Tecnologia que realça o seu melhor',
  locationLine: 'em Ribeirão Preto',
  city: 'Ribeirão Preto — São Paulo',
  sideLabels: [
    'Beleza que valoriza você',
    'Mais firmeza',
    'Mais contorno',
    'Mais confiança',
  ],
  heroFeatures: [
    {
      title: 'Foco em firmeza e contorno',
      description: 'Tecnologia voltada a realçar a definição facial e corporal.',
    },
    {
      title: 'Estímulo de colágeno',
      description: 'Ultrassom que favorece a produção natural de colágeno.',
    },
    {
      title: 'Procedimento não cirúrgico',
      description: 'Avaliação individualizada, sem cirurgia.',
    },
  ],
  whatTitle: 'O que é o HIPRO?',
  whatLead:
    'O HIPRO é um aparelho que utiliza a tecnologia HIFU (ultrassom focado de alta intensidade) assim como o Ultraformer. Diferencial: praticamente indolor, exceto em áreas de proeminências ósseas, em que é relatado um pequeno desconforto suportável. Tem como objetivo as camadas mais profundas da pele, atingindo temperaturas entre 65 °C e 75 °C, para estimular colágeno e trabalhar firmeza e contorno, proporcionando aos clientes uma opção de tratamento não invasivo com efeitos semelhantes ao lifting facial cirúrgico.',
  whatFeatures: [
    {
      title: 'Tecnologia avançada',
      description: 'Ultrassom focado para protocolos de firmeza e contorno.',
    },
    {
      title: 'Protocolos personalizados',
      description: 'Indicação conforme avaliação facial e corporal.',
    },
    {
      title: 'Segurança e critério',
      description: 'Atendimento conduzido por enfermeira especialista.',
    },
    {
      title: 'Evolução gradual',
      description: 'Resultados variam conforme o organismo e o protocolo.',
    },
  ],
  possibilitiesTitle: 'Um tratamento, diferentes possibilidades.',
  possibilitiesScript: 'Cuidado em cada fase da sua beleza',
  possibilities: [
    'Flacidez facial e corporal',
    'Rejuvenescimento facial',
    'Rugas e linhas de expressão ao redor dos olhos',
    'Rejuvenescimento de pescoço e colo',
    'Perda do contorno do rosto e mandíbula',
    'Lifting facial',
    'Adiposidade localizada (papada, abdômen, coxa, braço, flanco, joelhos)',
    'Tonificação da pele',
  ],
  resultsTitle: 'Resultados que você percebe',
  resultsSubtitle: 'Sensação de lifting desde a sessão*',
  resultsBody:
    'O HIPRO pode contribuir para a percepção de firmeza e contorno. A evolução depende do organismo, da região tratada e do protocolo indicado após a avaliação, com resultados finais entre 90 a 180 dias.',
  resultsDisclaimer:
    '*A resposta é individual. Não há promessa de resultado ou de duração.',
  protocolTitle: 'Um protocolo individualizado',
  protocolBody:
    'Antes de qualquer conduta, avaliamos suas queixas, histórico e expectativa — para indicar o que faz sentido para o seu caso, com transparência sobre o que cada protocolo alcança e o que não alcança.',
  protocolScript: 'Tecnologia a favor da sua melhor versão.',
  expertiseTitle: 'Tecnologia e experiência em harmonia com a sua beleza',
  expertisePoints: [
    'Formação e especialização',
    'Experiência em estética avançada',
    'Atendimento humanizado',
  ],
  formTitle: 'Quero saber mais sobre o Dia do HiPRO',
  formConsentTopic: 'o Dia do HiPRO',
  formQuestionLabel: 'Você já realizou algum procedimento estético?',
  formInterests: [
    'Nunca fiz',
    'Já fiz algumas vezes',
    'Faço ocasionalmente',
    'Faço procedimentos regularmente',
  ],
  faqTitle: 'Perguntas sobre o HIPRO',
  faq: [
    {
      question: 'O HIPRO é dolorido?',
      answer:
        'A sensação varia conforme a região e a sensibilidade de cada pessoa. Porém a maioria dos pacientes relata pequeno ou nenhum desconforto. Áreas mais doloridas: proeminências ósseas.',
    },
    {
      question: 'Quantas sessões são necessárias?',
      answer:
        'Depende da indicação individual. Porém, exceto em casos de flacidez elevada é considerada a necessidade de mais sessões após reavaliação que ocorre 90 dias após a primeira sessão.',
    },
    {
      question: 'Quem conduz o atendimento?',
      answer: `O atendimento é conduzido por ${PROFESSIONAL.name}, ${PROFESSIONAL.title}, ${PROFESSIONAL.registration}.`,
    },
    {
      question: 'Serve para rosto e corpo?',
      answer:
        'Há protocolos faciais e corporais. A indicação adequada só é feita após avaliação individualizada das suas queixas.',
    },
  ],
  locationLead:
    'Atendimento em Ribeirão Preto, com acolhimento e condução técnica para quem busca conhecer o HIPRO com segurança e naturalidade.',
  finalEyebrow: 'Condição especial Semana do Cliente de 13 a 19 de setembro',
  finalTitle: 'Seu momento de conhecer o HIPRO.',
  finalPoints: [
    'Beleza com propósito',
    'Mais bem-estar no seu dia a dia',
    'A sua melhor versão',
  ],
  whatsappMessage:
    'Oie! Gostaria de saber mais sobre o Dia do HiPRO e agendar uma avaliação.',
  metaTitle: `Dia do HiPRO em Ribeirão Preto | ${SITE.brand}`,
  metaDescription:
    'Conheça o Dia do HiPRO em Ribeirão Preto: ultrassom focado para firmeza e contorno, com avaliação individualizada por enfermeira especialista em estética.',
}

/** Landing de Ads: frase-chave “rejuvenescimento natural” + Ribeirão Preto. */
export const REJUVENESCIMENTO: HiproPageContent = {
  ...HIPRO,
  slug: '/rejuvenescimento-natural-ribeirao',
  heroVariant: 'natural',
  eventName: 'Rejuvenescimento Natural',
  tagline: 'Firmeza e contorno com tecnologia HIPRO em Ribeirão Preto',
  locationLine: 'em Ribeirão Preto',
  formTitle: 'Quero saber mais sobre rejuvenescimento natural',
  formConsentTopic: 'rejuvenescimento natural',
  faqTitle: 'Perguntas sobre rejuvenescimento natural',
  locationLead:
    'Atendimento em Ribeirão Preto para quem busca rejuvenescimento natural com firmeza, contorno e condução técnica individualizada.',
  finalTitle: 'Seu momento de cuidar do rejuvenescimento natural.',
  whatsappMessage:
    'Oie! Gostaria de saber mais sobre rejuvenescimento natural em Ribeirão Preto e agendar uma avaliação.',
  metaTitle: `Rejuvenescimento Natural em Ribeirão Preto | ${SITE.brand}`,
  metaDescription:
    'Rejuvenescimento natural em Ribeirão Preto com HIPRO (HIFU): firmeza, contorno e estímulo de colágeno, com avaliação individualizada por enfermeira especialista em estética.',
}

export type HiproInterest = (typeof HIPRO.formInterests)[number]

export function hiproWhatsappUrl(
  interest?: string,
  message = HIPRO.whatsappMessage,
) {
  const text = interest
    ? `${message} Experiência estética: ${interest}.`
    : message
  return whatsappUrl(text)
}
