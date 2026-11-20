import { Link } from 'react-router-dom'
import { BUSINESS, NAV, whatsappLink } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-lux grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link to="/" className="group inline-block" aria-label="Nitya Nail Art & Academy — home">
            <Logo tone="light" size="lg" />
          </Link>
          <p className="mt-6 max-w-[360px] text-[14px] leading-relaxed text-white/60">
            Nails, considered down to the last detail. A women-owned studio and academy in Vijay Nagar, Indore.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-rose-light uppercase">Explore</h3>
          <ul className="mt-6 space-y-3 text-[14px] text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-rose-light uppercase">Connect</h3>
          <ul className="mt-6 space-y-3 text-[14px] text-white/70">
            <li>
              <a href={`tel:${BUSINESS.phone.tel}`} className="transition hover:text-white">
                {BUSINESS.phone.display}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="transition hover:text-white">
                WhatsApp Nitya ↗
              </a>
            </li>
            <li>
              <a href={BUSINESS.instagram.url} target="_blank" rel="noopener" className="transition hover:text-white">
                @{BUSINESS.instagram.handle} ↗
              </a>
            </li>
            <li>
              <a href={BUSINESS.academyInstagram.url} target="_blank" rel="noopener" className="transition hover:text-white">
                @{BUSINESS.academyInstagram.handle} ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-rose-light uppercase">Visit</h3>
          <address className="mt-6 space-y-1 text-[14px] leading-relaxed text-white/70 not-italic">
            {BUSINESS.addressLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <ul className="mt-5 space-y-1 text-[14px] text-white/70">
            {BUSINESS.hours.map((h) => (
              <li key={h.days}>
                {h.days} · {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 pt-6 pb-24 xl:pb-6 text-[11px] font-bold tracking-[0.14em] text-white/45 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} Nitya Nail Art & Academy</p>
          <p>
            Designed by{' '}
            <a href="https://firstclickconnects.online" target="_blank" rel="noopener" className="text-white/70 hover:text-white">
              First Click
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
