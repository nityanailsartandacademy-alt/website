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
      <h2 className={`reveal display mt-3 sm:mt-4 text-[clamp(2.1rem,5.6vw,4.6rem)] ${light ? 'text-white' : ''}`} style={d(80)}>
        {title}
      </h2>
      {text && (
        <p className={`reveal mt-3 sm:mt-5 text-[14.5px] sm:text-[16px] leading-[1.75] ${light ? 'text-white/70' : 'text-muted'}`} style={d(160)}>
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
    <section className="grid bg-ink pt-[70px] sm:pt-[76px] text-white lg:min-h-[78svh] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="flex items-end px-4 pt-12 pb-10 sm:px-8 lg:px-12 lg:py-20 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[560px]">
          <nav aria-label="Breadcrumb" className="reveal text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] text-white/55 uppercase">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2.5">/</span>
            <span className="text-white/85">{crumb}</span>
          </nav>
          <p className="eyebrow reveal mt-6 sm:mt-8 flex items-center gap-3 !text-rose-light" style={d(60)}>
            <span className="h-px w-8 bg-rose-light" /> {eyebrow}
          </p>
          <h1 className="reveal display mt-4 sm:mt-5 text-[clamp(2.4rem,6.8vw,5.8rem)]" style={d(120)}>
            {title}{' '}
            <br />
            <em className="text-rose-light">{accent}</em>
          </h1>
          <p className="reveal mt-4 sm:mt-6 text-[14.5px] sm:text-[16px] leading-relaxed text-white/70" style={d(200)}>
            {text}
          </p>
        </div>
      </div>
      <div className="relative h-[40svh] sm:h-[48svh] overflow-hidden lg:h-auto">
        <img src={image} alt="" aria-hidden="true" className="hero-img absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} fetchPriority="high" />
      </div>
    </section>
  )
}

/** "Book your Nitya" band with a rose help card — closes most pages. */
export function BookBand() {
  return (
    <section className="bg-blush py-14 sm:py-20 lg:py-28">
      <div className="container-lux grid gap-5 lg:grid-cols-[1fr_340px]">
        <div className="reveal border border-line bg-paper p-6 sm:p-12 shadow-sm">
          <p className="eyebrow">Appointment</p>
          <h2 className="display mt-3 sm:mt-4 text-[clamp(2.2rem,5vw,4.4rem)]">
            Book your <em className="text-rose">Nitya</em> set
          </h2>
          <p className="mt-4 sm:mt-5 max-w-[520px] text-[14.5px] sm:text-[15.5px] leading-relaxed text-muted">
            Send us your inspiration picture on WhatsApp — we'll suggest the right extension, shape and art, and confirm a time that suits you.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-col gap-2.5 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose w-full sm:w-auto text-center">
              <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp ↗
            </a>
            <a href={`tel:${BUSINESS.phone.tel}`} className="btn-outline w-full sm:w-auto text-center">
              Call {BUSINESS.phone.display}
            </a>
          </div>
        </div>
        <div className="reveal flex flex-col justify-between bg-rose p-6 sm:p-10 text-white shadow-md" style={d(120)}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="display text-[34px] sm:text-[40px]">Need help?</h3>
              <p className="mt-1 font-serif text-[20px] sm:text-[24px] text-white/85 italic">We're here for you.</p>
            </div>
            <img src="/images/logo.jpg" alt="Nitya Nail Art" className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full border border-white/30 object-cover shadow-lg" />
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
