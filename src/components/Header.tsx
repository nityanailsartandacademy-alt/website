import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BUSINESS, NAV, whatsappLink } from '../data/site'
import { PhoneIcon, WhatsAppIcon } from './Icons'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [open])

  const menuItems = [{ label: 'Home', href: '/' }, ...NAV]

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'border-line py-2 sm:py-2.5 shadow-[0_10px_30px_-20px_rgba(31,25,22,0.35)]' : 'border-transparent py-3 sm:py-4'
        }`}
      >
        <div className="container-lux flex items-center justify-between gap-3 sm:gap-6">
          <Link to="/" aria-label="Nitya Nail Art & Academy — home" className="group shrink-0">
            <Logo size="md" />
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

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose hidden !px-5 !py-3 sm:inline-flex">
              Book appointment ↗
            </a>

            <button
              type="button"
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5.5px] rounded-sm border border-ink/20 bg-paper transition active:scale-95 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Fullscreen Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] flex h-[100dvh] flex-col justify-between bg-paper transition-all duration-400 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Nitya Nail Art & Academy — home">
            <Logo size="sm" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition active:scale-90"
            aria-label="Close menu"
          >
            <span className="font-serif text-[22px] leading-none">✕</span>
          </button>
        </div>

        {/* Scrollable Links & Offers */}
        <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-5">
          <div className="mb-4 flex items-center justify-between rounded border border-[#EDD28A]/40 bg-[#EDD28A]/10 px-3.5 py-2 text-[11px] font-bold tracking-[0.12em] text-[#8C6D23] uppercase">
            <span>✨ Wedding Season Special Live</span>
            <span className="text-rose font-bold">From ₹249</span>
          </div>

          <nav className="flex flex-col" aria-label="Mobile Navigation">
            {menuItems.map((n, i) => (
              <NavLink
                key={n.href}
                to={n.href}
                end={n.href === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline justify-between border-b border-line/60 py-3 text-[26px] font-serif transition-colors ${
                    isActive ? 'text-rose italic' : 'text-ink'
                  }`
                }
              >
                <span>{n.label}</span>
                <span className="text-[12px] font-sans font-bold tracking-[0.14em] text-muted uppercase">0{i + 1}</span>
              </NavLink>
            ))}
          </nav>

          {/* Quick Studio Info in Menu */}
          <div className="mt-6 border-t border-line/70 pt-5 text-[13px] text-muted space-y-1.5">
            <p className="font-semibold text-ink">Nitya Nail Art & Academy</p>
            <p>19 GM & 247 FH, Scheme No. 54, Vijay Nagar</p>
            <p>Opposite Meghdoot Garden, Indore</p>
            <p className="text-rose font-medium pt-1">Open Daily · 11:00 AM – 8:00 PM</p>
          </div>
        </div>

        {/* Drawer Bottom Action Dock */}
        <div className="border-t border-line bg-paper px-5 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg space-y-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="btn-rose w-full flex items-center justify-center gap-2 !py-3.5 text-center active:scale-[0.98]"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp ↗
          </a>
          <a
            href={`tel:${BUSINESS.phone.tel}`}
            className="flex items-center justify-center gap-2 border border-ink/20 py-2.5 text-[11.5px] font-bold tracking-[0.1em] text-ink uppercase transition active:scale-[0.98]"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-rose" /> Call {BUSINESS.phone.display}
          </a>
        </div>
      </div>
    </>
  )
}
