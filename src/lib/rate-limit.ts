const WINDOW_MS = 10 * 60 * 1000

/** Limite por IP: só é confiável se o proxy sobrescrever X-Forwarded-For. */
const MAX_PER_IP = 5

/**
 * Teto para o endpoint inteiro, independente de IP. É a defesa que continua
 * valendo se alguém forjar o cabeçalho de origem a cada requisição.
 */
const MAX_GLOBAL = 60

const GLOBAL_KEY = '__global__'

// Em memória: reinicia junto com o processo e não é compartilhado entre instâncias.
const hits = new Map<string, number[]>()

function consume(key: string, max: number): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  )

  if (recent.length >= max) {
    hits.set(key, recent)
    return false
  }

  recent.push(now)
  hits.set(key, recent)
  return true
}

/**
 * Aplica o teto global sempre e o limite por IP só quando a origem é conhecida.
 * Com `ip` nulo não há como distinguir clientes, então o global é a única defesa.
 */
export function checkRateLimit(ip: string | null): boolean {
  if (!consume(GLOBAL_KEY, MAX_GLOBAL)) return false
  if (!ip) return true
  return consume(ip, MAX_PER_IP)
}
