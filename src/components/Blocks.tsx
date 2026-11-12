import { Link } from 'react-router-dom'
import { BUSINESS, whatsappLink } from '../data/site'
import { Stars, WhatsAppIcon } from './Icons'

type D = { ['--d']?: string }
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` }) as React.CSSProperties & D

/** Centered or left-aligned section heading: eyebrow, serif title, optional lead text. */
export function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
  className = '',
}: {
  eyebrow: string
  title: React.ReactNode
  text?: string
  center?: boolean
  light?: boolean
  className?: string
}) {
  return (
    <div className={`${center ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'} ${className}`}>
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 className={`reveal display mt-4 text-[clamp(2.7rem,5.6vw,5rem)] ${light ? 'text-white' : ''}`} style={d(80)}>
        {title}
      </h2>
      {text && (
        <p className={`reveal mt-5 text-[16px] leading-[1.75] ${light ? 'text-white/70' : 'text-muted'}`} style={d(160)}>
          {text}
        </p>
      )}
    </div>
  )
}

/** Split banner opening every inner page: dark text panel on the left, photo on the right (Daisy-style). */
export function PageHero({
  crumb,
  eyebrow,
  title,
  accent,
  text,
  image,
  position = 'center',
}: {
  crumb: string
  eyebrow: string
  title: string
  accent: string
  text: string
  image: string
  position?: string
}) {
  return (
    <section className="grid bg-ink pt-[76px] text-white lg:min-h-[78svh] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="flex items-end px-5 pt-16 pb-14 sm:px-8 lg:px-12 lg:py-20 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[560px]">
          <nav aria-label="Breadcrumb" className="reveal text-[11px] font-bold tracking-[0.16em] text-white/55 uppercase">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2.5">/</span>
            <span className="text-white/85">{crumb}</span>
          </nav>
          <p className="eyebrow reveal mt-8 flex items-center gap-3 !text-rose-light" style={d(60)}>
            <span className="h-px w-8 bg-rose-light" /> {eyebrow}
          </p>
          <h1 className="reveal display mt-5 text-[clamp(3.2rem,7vw,6.2rem)]" style={d(120)}>
            {title}{' '}
            <br />
            <em className="text-rose-light">{accent}</em>
          </h1>
          <p className="reveal mt-6 text-[16px] leading-relaxed text-white/70" style={d(200)}>
            {text}
          </p>
        </div>
      </div>
      <div className="relative h-[52svh] overflow-hidden lg:h-auto">
        <img src={image} alt="" aria-hidden="true" className="hero-img absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} fetchPriority="high" />
      </div>
    </section>
  )
}

/** "Book your Nitya" band with a rose help card — closes most pages. */
export function BookBand() {
  return (
    <section className="bg-blush py-20 sm:py-28">
      <div className="container-lux grid gap-5 lg:grid-cols-[1fr_340px]">
        <div className="reveal border border-line bg-paper p-8 sm:p-12">
          <p className="eyebrow">Appointment</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.4rem)]">
            Book your <em className="text-rose">Nitya</em> set
          </h2>
          <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-muted">
            Send us your inspiration picture on WhatsApp — we'll suggest the right extension, shape and art, and confirm a time that suits you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose">
              <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
            </a>
            <a href={`tel:${BUSINESS.phone.tel}`} className="btn-outline">
              Call {BUSINESS.phone.display}
            </a>
          </div>
        </div>
        <div className="reveal flex flex-col justify-between bg-rose p-8 text-white sm:p-10" style={d(120)}>
          <div>
            <h3 className="display text-[40px]">Need help?</h3>
            <p className="mt-1 font-serif text-[24px] text-white/85 italic">We're here for you.</p>
          </div>
          <div className="mt-10 space-y-4 text-[14px]">
            <p>
              <span className="block text-[10.5px] font-bold tracking-[0.2em] text-white/70 uppercase">Hours</span>
              {BUSINESS.hoursShort}
            </p>
            <p>
              <span className="block text-[10.5px] font-bold tracking-[0.2em] text-white/70 uppercase">Studio</span>
              Vijay Nagar, opposite Meghdoot Garden
            </p>
            <Link to="/contact" className="link-arrow border-white/70 text-white">
              Directions & contact <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Small Google rating chip used in heroes and review blocks. */
export function RatingChip({ light = false }: { light?: boolean }) {
  return (
    <a
      href={BUSINESS.googleUrl}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] ${light ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink'}`}
    >
      <span className={`font-serif text-[22px] ${light ? 'text-white' : 'text-ink'}`}>{BUSINESS.rating.value}</span>
      <Stars value={BUSINESS.rating.value} className="h-3.5 w-3.5" />
      <span>{BUSINESS.rating.count} Google reviews</span>
    </a>
  )
}
