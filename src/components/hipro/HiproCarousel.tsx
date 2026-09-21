'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './HiproCarousel.module.css'

type CarouselPhoto = {
  src: string
  alt: string
  caption?: string
}

type HiproCarouselProps = {
  photos: readonly CarouselPhoto[]
}

export function HiproCarousel({ photos }: HiproCarouselProps) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback(
    (next: number) => {
      if (photos.length === 0) return
      const total = photos.length
      setIndex(((next % total) + total) % total)
    },
    [photos.length],
  )

  const previous = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (photos.length <= 1) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [photos.length])

  if (photos.length === 0) return null

  const current = photos[index]

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Exemplos de resultados"
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current == null) return
        const delta = event.changedTouches[0].clientX - touchStartX.current
        touchStartX.current = null
        if (Math.abs(delta) < 40) return
        if (delta > 0) previous()
        else next()
      }}
    >
      <div className={styles.frame}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((photo) => (
            <figure key={photo.src} className={styles.slide}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={700}
                height={900}
                draggable={false}
              />
            </figure>
          ))}
        </div>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              className={styles.prev}
              onClick={previous}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.next}
              onClick={next}
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <p className={styles.caption}>{current.caption}</p>
      )}

      {photos.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Selecionar foto">
          {photos.map((photo, photoIndex) => (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-selected={photoIndex === index}
              aria-label={`Ir para foto ${photoIndex + 1}`}
              className={
                photoIndex === index ? styles.dotActive : styles.dot
              }
              onClick={() => goTo(photoIndex)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
