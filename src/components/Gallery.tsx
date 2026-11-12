import { useCallback, useEffect, useState } from 'react'
import { GALLERY } from '../data/site'

/** Even 4×4 grid (16 photos) with a keyboard-friendly lightbox. */
export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])
  const step = useCallback((n: number) => setActive((a) => (a === null ? a : (a + n + GALLERY.length) % GALLERY.length)), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-lux">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setActive(i)}
              className="reveal group relative block overflow-hidden"
              style={{ ['--d' as string]: `${(i % 4) * 60}ms` }}
              aria-label={`Open photo: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
              <span className="absolute right-3 bottom-3 grid h-8 w-8 place-items-center bg-white font-serif text-[15px] transition-colors group-hover:bg-rose group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <img src={GALLERY[active].src} alt={GALLERY[active].alt} className="max-h-[86vh] max-w-full object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button type="button" onClick={close} aria-label="Close" className="absolute top-5 right-5 grid h-12 w-12 place-items-center border border-white/30 text-2xl text-white hover:border-rose">
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous photo"
            className="absolute left-3 grid h-12 w-12 place-items-center border border-white/30 text-2xl text-white hover:border-rose sm:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next photo"
            className="absolute right-3 grid h-12 w-12 place-items-center border border-white/30 text-2xl text-white hover:border-rose sm:right-8"
          >
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
            {active + 1} / {GALLERY.length}
          </p>
        </div>
      )}
    </section>
  )
}
