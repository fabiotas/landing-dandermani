'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './GallerySwipeHint.module.css'

export function GallerySwipeHint() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const element = ref.current
    const gallery = element?.parentElement?.querySelector('[role="region"]')
    if (!element || !gallery) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: .5 })
    observer.observe(gallery)
    const dismiss = () => setDismissed(true)
    gallery.addEventListener('pointerdown', dismiss, { passive: true })
    gallery.addEventListener('scroll', dismiss, { passive: true })
    return () => {
      observer.disconnect()
      gallery.removeEventListener('pointerdown', dismiss)
      gallery.removeEventListener('scroll', dismiss)
    }
  }, [])

  return <div ref={ref} className={`${styles.hint} ${visible && !dismissed ? styles.visible : ''}`} aria-hidden="true">
    <div className={styles.gesture}>
      <svg viewBox="0 0 64 64" fill="none" width="48" height="48">
        <path d="M25 35V14a5 5 0 0 1 10 0v16-4a4 4 0 0 1 8 0v5-2a4 4 0 0 1 8 0v5a4 4 0 0 1 8 0v12c0 10-6 15-16 15H32c-5 0-8-3-11-7L11 41a5 5 0 0 1 7-7l7 7" fill="#fbf6ec" stroke="#ac8850" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
    <span>Deslize para o lado</span>
  </div>
}
