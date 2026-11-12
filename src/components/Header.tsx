import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, whatsappLink } from '../data/site'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-all duration-500 ${
          scrolled ? 'border-line py-2.5 shadow-[0_10px_30px_-20px_rgba(31,25,22,0.35)]' : 'border-transparent py-4'
        }`}
      >
        <div className="container-lux flex items-center justify-between gap-6">
          <Link to="/" aria-label="Nitya Nail Art & Academy — home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
            {NAV.map((n) => (
              <NavLink
                key={n.href}
                to={n.href}
                className={({ isActive }) =>
                  `relative text-[12px] font-bold tracking-[0.08em] uppercase transition-colors hover:text-rose after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-rose after:transition-all after:duration-500 ${
                    isActive ? 'text-rose after:w-full' : 'text-ink/85 after:w-0 hover:after:w-full'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose hidden !px-6 !py-3.5 sm:inline-flex">
              Book appointment ↗
            </a>
            <button
              type="button"
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-ink/20 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3.25px] rotate-45' : ''}`} />
              <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3.25px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — outside <header> so the header's backdrop-filter can't trap this fixed overlay. */}
      <div
        className={`fixed inset-0 z-[45] flex h-[100dvh] flex-col justify-between bg-paper px-6 pt-28 pb-10 transition-all duration-500 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {[{ label: 'Home', href: '/' }, ...NAV].map((n, i) => (
            <NavLink
              key={n.href}
              to={n.href}
              end={n.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `display border-b border-line py-2.5 text-[32px] transition-all duration-500 hover:text-rose ${isActive ? 'text-rose italic' : 'text-ink'}`
              }
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms', transform: open ? 'none' : 'translateY(10px)', opacity: open ? 1 : 0 }}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose w-full" onClick={() => setOpen(false)}>
          Book on WhatsApp
        </a>
      </div>
    </>
  )
}
