/** WhatsApp com DDI + DDD, apenas dígitos. */
export const WHATSAPP_NUMBER = '5519981791019'

/**
 * Identificação profissional. Fica centralizada aqui para não haver título nem
 * registro escritos direto nos componentes.
 * Nenhum título aqui pode sugerir formação médica.
 */
export const PROFESSIONAL = {
  name: 'Dantielen Bezerra',
  title: 'Enfermeira Especialista em Estética',
  registration: 'COREN-SP nº 129.231',
  formation: 'Pós-graduação em Estética · Formada pela USP de Ribeirão Preto',
}

export const SITE = {
  brand: 'Danti Bezerra',
  /** URL canônica, usada como base para Open Graph e metadata. */
  url: 'https://dantibezerraestetica.com.br',
  /** Título principal (h1) da landing. */
  title: 'Em busca da sua melhor versão',
  /** Linha dourada logo abaixo do h1. */
  tagline: 'Estética Avançada',
  city: 'Ribeirão Preto — São Paulo',
  /** Frase da campanha. Usada no <title> e no Open Graph, não no Hero. */
  headline: 'Tratamento para Linhas de Expressão',
  supporting:
    'Avaliação estética facial individualizada para quem busca suavizar linhas de expressão preservando a naturalidade e respeitando as características de cada rosto.',
  aboutLead:
    'Atendimento clínico e cuidadoso, com olhar estético refinado e condutas pensadas para realçar a beleza de forma sutil e personalizada.',
  aboutBody:
    'Cada avaliação considera harmonia facial, histórico e expectativa — para indicar a conduta adequada ao seu caso, com delicadeza e critério técnico. Em Ribeirão Preto, o foco é acolher e conduzir um resultado natural.',
  whatsappMessage:
    'Oie! Gostaria de agendar ou ter mais informações sobre as avaliações !',
}

/** Benefícios e objetivos do tratamento. Sem promessa de resultado. */
export const HIGHLIGHTS = [
  {
    title: 'Naturalidade preservada',
    description:
      'Condutas que respeitam os traços e a mímica do seu rosto, sem alterar a sua identidade.',
  },
  {
    title: 'Avaliação individualizada',
    description:
      'A indicação vem de uma análise facial completa, nunca de um protocolo padronizado.',
  },
  {
    title: 'Enfermeira especialista',
    description:
      'Atendimento conduzido por enfermeira com especialização em estética registrada no COREN-SP.',
  },
  {
    title: 'Ribeirão Preto',
    description:
      'Atendimento discreto e acolhedor no interior de São Paulo.',
  },
] as const

/** Como funciona a avaliação, do primeiro contato ao acompanhamento. */
export const PROCESS = [
  {
    title: 'Contato',
    description:
      'Você deixa nome e WhatsApp e combinamos um horário para conversar sobre o que te incomoda.',
  },
  {
    title: 'Avaliação facial',
    description:
      'Análise dos traços, da mímica e das suas queixas, com espaço para todas as dúvidas.',
  },
  {
    title: 'Plano individual',
    description:
      'Apresentação das condutas indicadas para o seu caso, incluindo o que cada uma não alcança.',
  },
  {
    title: 'Acompanhamento',
    description:
      'Orientações de cuidado e retorno para acompanhar a evolução ao longo do tempo.',
  },
] as const

/**
 * Regiões e queixas que podem ser avaliadas.
 * O slug é a URL de campanha e o valor gravado em `landing_page` no lead;
 * `headline` e `supporting` substituem o texto do topo nessa entrada.
 */
export const TREATMENTS = [
  {
    slug: 'linhas-de-expressao',
    name: 'Linhas de expressão',
    description:
      'Testa, região entre as sobrancelhas e contorno dos olhos — avaliação da mímica facial para suavizar marcas preservando a expressão.',
    headline: 'Tratamento para Linhas de Expressão',
    supporting:
      'Avaliação estética facial individualizada para quem busca suavizar linhas de expressão preservando a naturalidade e respeitando as características de cada rosto.',
  },
  {
    slug: 'preenchimento',
    name: 'Preenchimento',
    description:
      'Volume e contorno avaliados com equilíbrio e proporção facial — lábios, olheiras e estrutura.',
    headline: 'Volume e contorno em equilíbrio com o seu rosto',
    supporting:
      'Avaliação estética facial individualizada para lábios, olheiras e estrutura, com foco em proporção e discrição.',
  },
  {
    slug: 'hifu',
    name: 'HIFU',
    description:
      'Firmeza e definição de contorno por ultrassom focado, com estímulo de colágeno e recuperação discreta.',
    headline: 'Firmeza e contorno sem cirurgia',
    supporting:
      'Avaliação estética facial individualizada para quem busca firmeza e definição de contorno sem procedimento cirúrgico.',
  },
  {
    slug: 'fios-de-pdo',
    name: 'Fios de PDO',
    description:
      'Sustentação e estímulo de colágeno com efeito progressivo e recuperação discreta.',
    headline: 'Sustentação com efeito progressivo',
    supporting:
      'Avaliação estética facial individualizada para quem busca sustentação da pele com resultado gradual e natural.',
  },
] as const

export type Treatment = (typeof TREATMENTS)[number]

/** Perguntas frequentes. Respostas sem promessa de resultado ou de duração. */
export const FAQ = [
  {
    question: 'Quem conduz o atendimento?',
    answer:
      'O atendimento é conduzido por Enfermeira Especialista em Estética, com especialização registrada no COREN-SP. A identificação completa está na seção sobre a profissional.',
  },
  {
    question: 'Como funciona a primeira avaliação?',
    answer:
      'É uma conversa com análise facial, em que você conta o que te incomoda e recebe as condutas possíveis para o seu caso. Nenhuma indicação é feita antes dessa avaliação.',
  },
  {
    question: 'O tratamento é indicado para o meu caso?',
    answer:
      'Somente a avaliação individual responde a isso. Existem situações em que o tratamento não é indicado, e isso é comunicado com clareza.',
  },
  {
    question: 'Quanto tempo dura o resultado?',
    answer:
      'Varia conforme o organismo, a região avaliada e os hábitos de cada pessoa. Por isso não trabalhamos com promessa de duração ou de resultado.',
  },
  {
    question: 'Preciso me afastar das minhas atividades?',
    answer:
      'As orientações de cuidado posterior dependem da conduta indicada e são explicadas durante a avaliação.',
  },
  {
    question: 'Como meus dados são utilizados?',
    answer:
      'Nome e telefone servem apenas para o contato sobre o agendamento. Os detalhes estão na política de privacidade, disponível no rodapé.',
  },
] as const

/**
 * Dados exigidos pela LGPD na política de privacidade.
 * `email` é o canal para solicitações de titulares. Não incluir CPF nem endereço
 * residencial aqui: não há requisito no projeto que justifique publicá-los.
 */
export const LEGAL = {
  controller: PROFESSIONAL.name,
  email: 'elendanti@hotmail.com',
  retention: '24 meses',
  updatedAt: '26 de agosto de 2026',
}

export function whatsappUrl(message = SITE.whatsappMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
