import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'
import { leadSchema } from '../../../lib/lead-schema'
import { checkRateLimit } from '../../../lib/rate-limit'

/**
 * X-Forwarded-For é forjável pelo cliente. Só usamos o valor quando o deploy
 * confirma que há um proxy sobrescrevendo o cabeçalho (ver nginx/app.conf).
 */
const TRUST_PROXY = process.env.TRUST_PROXY === 'true'

const IPV4 = /^\d{1,3}(\.\d{1,3}){3}$/
const IPV6 = /^[0-9a-f:]+$/i

function clientIp(request: Request): string | null {
  if (!TRUST_PROXY) return null

  const first = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  if (!first) return null

  return IPV4.test(first) || IPV6.test(first) ? first : null
}

export async function POST(request: Request) {
  if (!checkRateLimit(clientIp(request))) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Corpo inválido.' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Dados inválidos.',
        campos: parsed.error.issues.map((issue) => ({
          campo: String(issue.path[0] ?? ''),
          mensagem: issue.message,
        })),
      },
      { status: 400 },
    )
  }

  const data = parsed.data

  try {
    // convertedAt vem do default do banco: o horário é do servidor, não do cliente.
    const lead = await prisma.lead.create({
      data: {
        nome: data.nome,
        telefone: data.telefone,
        utmSource: data.utm_source,
        utmMedium: data.utm_medium,
        utmCampaign: data.utm_campaign,
        utmTerm: data.utm_term,
        utmContent: data.utm_content,
        gclid: data.gclid,
        gbraid: data.gbraid,
        wbraid: data.wbraid,
        landingPage: data.landing_page,
        consentimento: data.consentimento,
      },
      select: { id: true },
    })

    return NextResponse.json({ id: lead.id }, { status: 201 })
  } catch (error) {
    console.error('Falha ao persistir lead', error)
    return NextResponse.json(
      { error: 'Não foi possível registrar seu contato. Tente novamente.' },
      { status: 500 },
    )
  }
}
