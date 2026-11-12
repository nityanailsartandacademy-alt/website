import { useEffect } from 'react'

/** Adds `is-in` to every `.reveal` element once it scrolls into view (including elements mounted later). */
export function useReveal() {
  useEffect(() => {
    const showAll = () => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'))
    if (!('IntersectionObserver' in window)) return showAll()

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
    )
    const observeAll = () => document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => io.observe(el))
    observeAll()

    // Pick up elements that mount after the first render (lightbox, hot reloads, etc.).
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
