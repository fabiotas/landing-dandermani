'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { captureTracking, type Tracking } from '../lib/tracking'

const TrackingContext = createContext<Tracking | null>(null)

type TrackingProviderProps = {
  children: ReactNode
}

export function TrackingProvider({ children }: TrackingProviderProps) {
  const [tracking, setTracking] = useState<Tracking | null>(null)

  // A captura roda só no cliente para que a landing continue estática.
  useEffect(() => {
    setTracking(captureTracking())
  }, [])

  return (
    <TrackingContext.Provider value={tracking}>
      {children}
    </TrackingContext.Provider>
  )
}

/** Retorna null até a captura acontecer, logo após a montagem. */
export function useTracking(): Tracking | null {
  return useContext(TrackingContext)
}
