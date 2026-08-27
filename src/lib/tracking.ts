export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  // gclid é o padrão; gbraid e wbraid aparecem em campanhas onde o Google
  // não pode usar o gclid. Os três servem à mesma atribuição.
  'gclid',
  'gbraid',
  'wbraid',
] as const

export type TrackingParam = (typeof TRACKING_PARAMS)[number]

export type Tracking = Record<TrackingParam, string | null> & {
  landing_page: string
}

const STORAGE_KEY = 'lead_tracking'

/** Valores acima disso são lixo ou tentativa de abuso — o backend aplica o mesmo limite. */
export const MAX_VALUE_LENGTH = 200

function sanitize(value: string | null | undefined): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim().slice(0, MAX_VALUE_LENGTH)
  return trimmed === '' ? null : trimmed
}

function sanitizePath(value: string | null | undefined): string {
  const path = sanitize(value)
  return path && path.startsWith('/') ? path : '/'
}

function emptyTracking(landingPage: string): Tracking {
  const tracking = { landing_page: sanitizePath(landingPage) } as Tracking
  for (const param of TRACKING_PARAMS) tracking[param] = null
  return tracking
}

function readFromLocation(search: string, pathname: string): Tracking {
  const params = new URLSearchParams(search)
  const tracking = emptyTracking(pathname)
  for (const param of TRACKING_PARAMS) {
    tracking[param] = sanitize(params.get(param))
  }
  return tracking
}

function hasAttribution(tracking: Tracking): boolean {
  return TRACKING_PARAMS.some((param) => tracking[param] !== null)
}

function readStored(): Tracking | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return null

    const source = parsed as Record<string, unknown>
    const tracking = emptyTracking(
      typeof source.landing_page === 'string' ? source.landing_page : '/',
    )
    for (const param of TRACKING_PARAMS) {
      tracking[param] =
        typeof source[param] === 'string' ? sanitize(source[param]) : null
    }
    return tracking
  } catch {
    return null
  }
}

function writeStored(tracking: Tracking): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(tracking))
  } catch {
    // sessionStorage indisponível (modo privado, cookies bloqueados): segue sem persistir
  }
}

/**
 * Lê os parâmetros de origem da URL atual e os mantém pela sessão.
 * A primeira atribuição vence: uma navegação posterior sem parâmetros não apaga a origem.
 */
export function captureTracking(): Tracking {
  const current = readFromLocation(
    window.location.search,
    window.location.pathname,
  )
  const stored = readStored()
  const tracking = hasAttribution(current) || !stored ? current : stored
  writeStored(tracking)
  return tracking
}
