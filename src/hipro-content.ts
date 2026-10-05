import { PROFESSIONAL, SITE, obrigadoUrl, whatsappUrl } from './content'

export type HiproExamplePhoto = {
  src: string
  alt: string
  caption?: string
}

export type HiproPageContent = {
  slug: string
  heroVariant: 'hipro-day' | 'natural'
  eventName: string
  /** Segunda linha do H1 na variante natural (ex.: efeito lifting). */
  eventSubtitle?: string
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
  heroVariant: 'natural',
  eventName: 'HiPRO em Ribeirão Preto',
  eventSubtitle: 'Ultrassom focado para firmeza e contorno',
  eventDate: '',
  eventBadge: '',
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
  formTitle: 'Quero saber mais sobre o HiPRO',
  formConsentTopic: 'o HiPRO',
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
  finalEyebrow: 'Avaliação individualizada em Ribeirão Preto',
  finalTitle: 'Seu momento de conhecer o HIPRO.',
  finalPoints: [
    'Beleza com propósito',
    'Mais bem-estar no seu dia a dia',
    'A sua melhor versão',
  ],
  whatsappMessage:
    'Oie! Gostaria de saber mais sobre o HiPRO e agendar uma avaliação.',
  metaTitle: `HiPRO em Ribeirão Preto | ${SITE.brand}`,
  metaDescription:
    'Conheça o HiPRO em Ribeirão Preto: ultrassom focado para firmeza e contorno, com avaliação individualizada por enfermeira especialista em estética.',
}

/** Landing de Ads: frase-chave “rejuvenescimento” + Ribeirão Preto. */
export const REJUVENESCIMENTO: HiproPageContent = {
  ...HIPRO,
  slug: '/rejuvenescimento-natural-ribeirao',
  heroVariant: 'natural',
  eventName: 'Rejuvenescimento natural em Ribeirão Preto',
  eventSubtitle: 'Efeito lifting sem cirurgia',
  eventBadge: '',
  tagline: 'Cuidado individualizado para firmeza e contorno',
  locationLine: 'Agora disponível em Ribeirão Preto',
  formTitle: 'Quero saber mais sobre rejuvenescimento natural',
  formConsentTopic: 'rejuvenescimento natural',
  faqTitle: 'Perguntas sobre rejuvenescimento natural',
  whatTitle: 'Como planejar o rejuvenescimento natural?',
  whatLead: 'A avaliação de rejuvenescimento natural começa pelas mudanças que você percebe no rosto e pelos traços que deseja preservar. Em Ribeirão Preto, a consulta com a enfermeira especialista considera suas queixas, histórico e expectativas. O HiPRO é uma das tecnologias apresentadas para avaliação de firmeza e contorno; a indicação depende de cada caso.',
  protocolBody: 'Naturalidade é um objetivo discutido na consulta, considerando as características do seu rosto. Antes de propor um protocolo, a profissional explica as possibilidades, limitações e orientações de cuidado. Você pode trazer dúvidas sobre contorno facial, pescoço e outras regiões que deseja avaliar.',
  faq: [
    { question: 'Por onde começar o rejuvenescimento facial?', answer: 'Comece pela avaliação das suas queixas e expectativas. A consulta permite discutir o que deseja preservar, quais mudanças busca e quais condutas podem ser consideradas para o seu caso.' },
    { question: 'Rejuvenescimento natural significa realizar vários procedimentos?', answer: 'Não existe um pacote obrigatório de procedimentos. A proposta é individualizada e a indicação só acontece após a avaliação.' },
    { question: 'Qual é a relação entre HiPRO e rejuvenescimento?', answer: 'O HiPRO utiliza ultrassom focado e é apresentado neste site para avaliação de firmeza e contorno. A profissional esclarece se a tecnologia é adequada às suas queixas e quais são seus limites.' },
    { question: 'Quem realiza a avaliação em Ribeirão Preto?', answer: `O atendimento é conduzido por ${PROFESSIONAL.name}, ${PROFESSIONAL.title}, ${PROFESSIONAL.registration}, no Metropolitan Business Center, no Jardim América.` },
  ],
  locationLead:
    'Atendimento em Ribeirão Preto para quem busca rejuvenescimento natural com firmeza, contorno e condução técnica individualizada.',
  finalTitle: 'Seu momento de cuidar do rejuvenescimento natural.',
  whatsappMessage:
    'Oie! Gostaria de saber mais sobre rejuvenescimento natural em Ribeirão Preto e agendar uma avaliação.',
  metaTitle: `Rejuvenescimento Natural em Ribeirão Preto | ${SITE.brand}`,
  metaDescription:
    'Rejuvenescimento natural em Ribeirão Preto com HIPRO (HIFU): efeito lifting sem cirurgia, firmeza e contorno, com avaliação individualizada por enfermeira especialista em estética.',
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

/** WhatsApp via /obrigado (conversão Google) nas landings HIPRO. */
export function hiproWhatsappViaObrigado(
  interest?: string,
  message = HIPRO.whatsappMessage,
) {
  return obrigadoUrl(hiproWhatsappUrl(interest, message))
}

