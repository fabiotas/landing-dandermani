import { z } from 'zod'
import {
  MAX_VALUE_LENGTH,
  TRACKING_PARAMS,
  type TrackingParam,
} from './tracking'

const trackingValue = z
  .string()
  .trim()
  .max(MAX_VALUE_LENGTH)
  .nullish()
  .transform((value) => (value ? value : null))

const trackingShape = Object.fromEntries(
  TRACKING_PARAMS.map((param) => [param, trackingValue]),
) as Record<TrackingParam, typeof trackingValue>

/** Respostas permitidas do questionário — whitelist no servidor. */
export const EXPERIENCIA_ESTETICA_OPTIONS = [
  'Nunca fiz',
  'Já fiz algumas vezes',
  'Faço ocasionalmente',
  'Faço procedimentos regularmente',
] as const

/**
 * Aceita apenas os campos abaixo. `strictObject` rejeita qualquer chave extra,
 * impedindo que o cliente tente gravar id ou converted_at.
 */
export const leadSchema = z.strictObject({
  nome: z
    .string()
    .trim()
    .min(2, 'Informe seu nome')
    .max(120, 'Nome muito longo')
    .transform((value) => value.replace(/\s+/g, ' '))
    .refine((value) => !/https?:\/\/|www\.|<[^>]+>/i.test(value), 'Nome inválido'),
  telefone: z
    .string()
    .trim()
    .max(20, 'Telefone inválido')
    .transform((value) => value.replace(/\D/g, ''))
    .refine(
      (digits) => digits.length === 10 || digits.length === 11,
      'Informe um telefone com DDD',
    ),
  landing_page: z
    .string()
    .trim()
    .max(MAX_VALUE_LENGTH)
    .regex(/^\/[A-Za-z0-9\-_/]*$/, 'Origem inválida')
    .default('/'),
  experiencia_estetica: z
    .enum(EXPERIENCIA_ESTETICA_OPTIONS, {
      message: 'Selecione uma opção válida',
    })
    .nullish()
    .transform((value) => value ?? null),
  consentimento: z
    .boolean()
    .refine(
      (value) => value === true,
      'É necessário aceitar a política de privacidade',
    ),
  /**
   * Honeypot: fica oculto no formulário, então uma pessoa nunca preenche.
   * Qualquer conteúdo aqui indica bot.
   */
  empresa: z.string().max(0, 'Dados inválidos').optional(),
  ...trackingShape,
})

export type LeadInput = z.infer<typeof leadSchema>
