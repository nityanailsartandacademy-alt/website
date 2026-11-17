import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BRIDAL_PACKAGE,
  BUSINESS,
  COURSE,
  GALLERY,
  MENU,
  PILLARS,
  REVIEWS,
  REVIEW_TAGS,
  SERVICES,
  SERVICE_CATEGORIES,
  WEDDING_SEASON_SPECIAL,
  whatsappLink,
} from '../data/site'
import { RatingChip, SectionHead } from './Blocks'
import { ArrowRight, ClockIcon, InstagramIcon, PhoneIcon, PinIcon, Stars, WhatsAppIcon } from './Icons'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` }) as React.CSSProperties

/* ---------------- Home hero ---------------- */

export function HomeHero() {
  return (
    <section className="relative grid overflow-hidden bg-ink pt-[76px] text-white lg:min-h-[100svh] lg:grid-cols-[1fr_0.9fr]">
      <div className="relative z-10 flex items-center px-5 pt-14 pb-14 sm:px-8 lg:px-12 lg:py-24 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[620px]">
          <div className="reveal inline-flex items-center gap-2 border border-[#EDD28A]/30 bg-[#EDD28A]/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.18em] text-[#EDD28A] uppercase">
            <span>✨</span> Wedding Season Special Live
          </div>
          <h1 className="reveal display mt-5 text-[clamp(3rem,6.6vw,6.4rem)]" style={d(100)}>
            <span className="block text-[0.55em] leading-tight">Glamour at your</span> Fingertips
          </h1>
          <p className="reveal mt-6 max-w-[500px] text-[16px] leading-relaxed text-white/75" style={d(200)}>
            Wedding Season Special: Extensions from ₹249, Bridal Cat Eye Package @ ₹2,100, and certified Basic to Professional nail course @ ₹8,500 — in Vijay Nagar, Indore.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={d(300)}>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose">
              Book appointment ↗
            </a>
            <Link to="/menu" className="btn-outline-light">
              View offers & menu
            </Link>
          </div>
          <div className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6" style={d(400)}>
            <RatingChip light />
            <div className="flex items-center gap-2.5">
              <img src="/images/logo.jpg" alt="Nitya Nail Art" className="h-6 w-6 rounded-full border border-white/25 object-cover" />
              <span className="text-[12px] font-semibold tracking-[0.06em] text-white/60">Women-owned studio</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[60svh] overflow-hidden lg:h-auto">
        <img
          src="/images/real-nude-gold-contour.jpg"
          alt="Nude pink almond nail extensions with gold contour line art by Nitya Nail Art, Indore"
          className="hero-img absolute inset-0 h-full w-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent lg:from-ink/80" />
        <div className="absolute bottom-5 left-5 border-l-4 border-rose bg-paper/95 px-5 py-4 text-ink shadow-2xl sm:bottom-8 sm:left-8">
          <p className="text-[10px] font-bold tracking-[0.2em] text-rose uppercase">Wedding Season Special</p>
          <p className="display text-[38px] leading-tight">From ₹249</p>
          <p className="text-[11px] font-semibold text-muted">Bridal Package @ ₹2,100</p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Ticker ---------------- */

const TICKER = [
  'Wedding Season Special',
  'Bridal Package @ ₹2,100',
  'Gel Extensions ₹699',
  'Korean Extensions ₹599',
  'Acrylic Extensions ₹1,099',
  'Cat Eye Finish',
  'Overlay with Free Polish',
  'Course Bumper Offer ₹8,500',
  'Certified Academy',
]

export function Marquee() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden bg-rose py-4 text-white" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-[22px] italic">
            {w} <span className="text-[11px] not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------------- Dedicated Bridal Special Package (Image 2) ---------------- */

export function BridalSpecialSection() {
  return (
    <section id="bridal" className="relative overflow-hidden bg-gradient-to-br from-[#2D0D19] via-ink to-[#1a0f14] py-20 sm:py-28 text-white">
      <div className="container-lux">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal relative lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <img
                src={BRIDAL_PACKAGE.image}
                alt="Nitya Nail Art & Academy Bridal Booking Special Package @ ₹2,100 Only"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-rose px-4 py-1 text-[10.5px] font-bold tracking-[0.2em] text-white uppercase shadow-md">
                Bridal Special
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 border border-[#EDD28A]/30 bg-[#EDD28A]/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.18em] text-[#EDD28A] uppercase">
              👑 {BRIDAL_PACKAGE.badge}
            </div>
            <h2 className="reveal display mt-4 text-[clamp(2.8rem,5.5vw,5rem)]">
              Bridal Booking <br />
              <span className="font-serif italic text-rose-light">for Your Special Day</span>
            </h2>
            <div className="reveal mt-3 flex items-baseline gap-3">
              <span className="display text-[52px] text-[#EDD28A]">@ {BRIDAL_PACKAGE.price}</span>
              <span className="text-[20px] font-serif text-white/80 italic">{BRIDAL_PACKAGE.priceSuffix}</span>
            </div>
            <p className="reveal mt-4 text-[16px] leading-relaxed text-white/75" style={d(100)}>
              Your wedding moments deserve breathtaking fingertips and toes. Get our complete Cat Eye bridal set crafted with precision, long-lasting durability, and jewelry-grade shimmer.
            </p>

            <div className="reveal mt-7 grid gap-4 sm:grid-cols-2" style={d(160)}>
              {BRIDAL_PACKAGE.highlights.map((h) => (
                <div key={h.title} className="border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#EDD28A]/50">
                  <span className="text-[26px]">{h.icon}</span>
                  <h3 className="mt-2.5 font-serif text-[22px] text-white">{h.title}</h3>
                  <p className="mt-1 text-[12.5px] font-bold tracking-[0.14em] text-[#EDD28A] uppercase">{h.finish}</p>
                </div>
              ))}
            </div>

            <ul className="reveal mt-7 space-y-2 border-t border-white/10 pt-5" style={d(220)}>
              {BRIDAL_PACKAGE.perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[14px] text-white/85">
                  <span className="text-[#EDD28A]">✦</span> {p}
                </li>
              ))}
            </ul>

            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={d(280)}>
              <a
                href={whatsappLink(BRIDAL_PACKAGE.whatsappMessage)}
                target="_blank"
                rel="noopener"
                className="btn-rose"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book Bridal Appointment Today ↗
              </a>
              <a href={`tel:${BUSINESS.phone.tel}`} className="btn-outline-light">
                Call {BUSINESS.phone.display}
              </a>
            </div>
            <p className="mt-4 text-[12px] text-white/50">
              Studio: {BUSINESS.streetAddress} (Opposite Meghdoot Garden), Indore
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Wedding Season Special Highlights Banner ---------------- */

export function WeddingSpecialBanner() {
  return (
    <div className="border-y border-line bg-gradient-to-r from-cream via-paper to-cream py-6">
      <div className="container-lux flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="bg-rose px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] text-white uppercase">
            Wedding Season Special
          </span>
          <p className="font-serif text-[20px] text-ink italic">
            Premium Nail Services with Professional Finish
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[12px] font-bold tracking-[0.1em] text-ink/75 uppercase">
          {WEDDING_SEASON_SPECIAL.badges.map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <span className="text-rose">✓</span> {b}
            </span>
          ))}
          <span className="hidden text-rose md:inline">·</span>
          <span className="text-rose-deep">{WEDDING_SEASON_SPECIAL.artExtraNote}</span>
        </div>
      </div>
    </div>
  )
}

/* ---------------- About split ---------------- */

export function AboutSplit({ cta = { label: 'Our story', to: '/about' } }: { cta?: { label: string; to: string } }) {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <img src="/images/real-burgundy-polka-silk.jpg" alt="Burgundy polka dot nail extensions crafted at Nitya Nail Art, Indore" loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-8 -left-3 hidden w-[44%] border-[8px] border-paper shadow-2xl sm:block lg:-left-10">
            <img src="/images/real-french-polka-flower.jpg" alt="Hand-painted floral nail art on burgundy French tips" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="absolute top-6 right-0 flex items-center gap-2.5 border border-white/10 bg-ink/95 px-4 py-2.5 shadow-2xl sm:-right-4">
            <img src="/images/logo.jpg" alt="Nitya Nail Art Studio" className="h-6 w-6 rounded-full border border-white/20 object-cover" />
            <p className="text-[10.5px] font-bold tracking-[0.2em] text-white uppercase">Women-owned</p>
          </div>
        </div>
        <div>
          <SectionHead
            eyebrow="Find your Nitya"
            title={
              <>
                Nails, with a more <em className="text-rose">personal</em> touch.
              </>
            }
          />
          <div className="reveal mt-7 space-y-5 text-[16px] leading-[1.8] text-muted" style={d(200)}>
            <p>
              Nitya Nail Art & Academy is a women-owned nail studio in Vijay Nagar, Indore. We create extensions that survive real life — cooking,
              cleaning, typing — and art that looks exactly like the picture you fell in love with.
            </p>
            <p>
              Whether you need our <strong>Wedding Season Special</strong> sets from ₹249, the signature <strong>Bridal Package @ ₹2,100</strong>, or practical professional training at our Academy, we ensure transparent pricing, hygienic tools, and lasting results.
            </p>
          </div>
          <Link to={cta.to} className="btn-outline reveal mt-9" style={d(260)}>
            {cta.label} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Services with category sidebar ---------------- */

export function ServicesShowcase({ onHome = false }: { onHome?: boolean }) {
  const [cat, setCat] = useState<string>('All')
  const cats = ['All', ...SERVICE_CATEGORIES]
  const list = cat === 'All' ? SERVICES : SERVICES.filter((s) => s.category === cat)

  return (
    <section id="services" className="bg-blush py-24 sm:py-32">
      <div className="container-lux">
        <SectionHead
          center
          eyebrow="Wedding Season Special & Menu"
          title="Our signature services"
          text="Precise technique, professional products, hygienic tools, and transparent pricing."
        />

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="reveal h-fit min-w-0 border border-line bg-white">
            <p className="border-b border-line px-6 py-5 text-[12px] font-bold tracking-[0.12em] uppercase">Categories</p>
            <ul className="no-scrollbar flex overflow-x-auto lg:block">
              {cats.map((c) => (
                <li key={c} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setCat(c)}
                    className={`flex w-full items-center justify-between gap-6 border-r border-line px-6 py-4 text-left text-[14px] whitespace-nowrap transition-colors lg:border-r-0 lg:border-b ${
                      cat === c ? 'bg-rose text-white' : 'text-ink/75 hover:bg-blush'
                    }`}
                  >
                    {c} <span aria-hidden="true">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((s, i) => (
              <article key={s.id} id={s.id} className="reveal group flex flex-col border border-line bg-white shadow-sm" style={d((i % 3) * 80)}>
                <div className="relative overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
                  {s.badge && (
                    <span className="absolute top-3 right-3 bg-rose px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase shadow">
                      {s.badge}
                    </span>
                  )}
                  {s.duration && (
                    <span className="absolute bottom-3 left-3 bg-ink/80 px-2.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur-sm">
                      {s.duration}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-[26px] leading-tight transition-colors group-hover:text-rose">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/70 pt-5">
                    <div>
                      <span className="block text-[11px] font-bold tracking-[0.12em] text-rose uppercase">Special rate</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-[24px] text-ink">{s.from}</span>
                        {s.regularPrice && <span className="text-[13px] text-muted line-through">{s.regularPrice}</span>}
                      </div>
                    </div>
                    <a
                      href={whatsappLink(`Hi Nitya, I would like to book ${s.title} (${s.from}).`)}
                      target="_blank"
                      rel="noopener"
                      className="link-arrow border-ink/30 text-ink hover:text-rose"
                    >
                      Book <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <Link to="/menu" className="btn-rose">
            View full menu & rate cards
          </Link>
          <p className="mt-3 text-[12px] text-muted">
            Professional products · Hygienic tools · Nail art extra: ₹30 to ₹50 / finger
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Our work speaks (numbered strip) ---------------- */

export function WorkStrip() {
  const picks = GALLERY.slice(0, 5)
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-lux">
        <SectionHead center eyebrow="Before & after the appointment" title="Our work speaks" />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {picks.map((g, i) => (
            <Link
              key={g.src}
              to="/gallery"
              className={`reveal group relative block overflow-hidden ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              style={d(i * 70)}
              aria-label={`See more: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
              <span className="absolute right-3 bottom-3 grid h-8 w-8 place-items-center bg-white font-serif text-[15px] transition-colors group-hover:bg-rose group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
            </Link>
          ))}
        </div>
        <div className="reveal mt-12 text-center">
          <Link to="/gallery" className="btn-rose">
            View the gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Academy teaser (Image 3 Bumper Offer) ---------------- */

export function AcademyTeaser() {
  return (
    <section className="grid bg-ink text-white lg:grid-cols-2">
      <div className="flex items-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[560px]">
          <div className="reveal flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Nitya Nail Academy Logo" className="h-8 w-8 rounded-full border border-white/20 object-cover shadow-sm" />
            <p className="eyebrow !text-rose-light">Nitya Nail Academy</p>
          </div>
          <span className="mt-3 inline-block bg-rose px-3.5 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-white shadow-sm">
            {COURSE.offerBadge}
          </span>
          <h2 className="reveal display mt-4 text-[clamp(2.6rem,5.2vw,4.8rem)]" style={d(80)}>
            {COURSE.name}
            <br />
            <span className="font-serif italic text-[#EDD28A]">अब सिर्फ {COURSE.price}/-</span>{' '}
            <span className="text-[0.45em] text-white/50 line-through">{COURSE.regular}/-</span>
          </h2>
          <p className="mt-2 font-serif text-[19px] text-white/85 italic">
            "{COURSE.taglineHindi} {COURSE.sublineHindi}"
          </p>
          <p className="reveal mt-5 text-[15.5px] leading-relaxed text-white/75" style={d(160)}>
            Complete practical training on Gel, Acrylic, Korean & Polygel extensions, 40+ nail art techniques, animal prints, live model practice and a certified diploma — all practice products provided!
          </p>
          <ul className="reveal mt-7 grid gap-2.5 sm:grid-cols-2" style={d(220)}>
            {COURSE.perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-white/85">
                <span className="text-[#EDD28A]">✦</span> {p}
              </li>
            ))}
          </ul>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" style={d(280)}>
            <Link to="/academy" className="btn-rose">
              View All 40+ Course Topics
            </Link>
            <a
              href={whatsappLink(`Hi Nitya, I want to enrol in the Basic to Professional nail course under the ${COURSE.price} Bumper Offer. Please share next batch details.`)}
              target="_blank"
              rel="noopener"
              className="btn-outline-light"
            >
              Enrol at {COURSE.price} ↗
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[60svh] overflow-hidden lg:h-auto">
        <img
          src={COURSE.posterImage}
          alt="Nitya Nail Art Academy Basic to Professional Course Bumper Offer ₹8,500"
          className="hero-img absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink/80 lg:via-transparent" />
      </div>
    </section>
  )
}

/* ---------------- Pillars ---------------- */

export function Pillars() {
  return (
    <section className="border-y border-line bg-cream py-20 sm:py-28">
      <div className="container-lux">
        <SectionHead center eyebrow="Why clients keep returning" title="The Nitya difference" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.no} className="reveal border border-line bg-paper p-8" style={d(i * 80)}>
              <span className="font-serif text-[18px] text-rose">{p.no}</span>
              <h3 className="mt-4 font-serif text-[28px] leading-tight">{p.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Reviews ---------------- */

export function ReviewsSection({ full = false }: { full?: boolean }) {
  const [activeTag, setActiveTag] = useState<string>('All')
  const tags = ['All', ...REVIEW_TAGS.map((t) => t.label)]
  const filtered = activeTag === 'All' ? REVIEWS : REVIEWS.filter((r) => r.service.toLowerCase().includes(activeTag.toLowerCase()))
  const list = full ? filtered : filtered.slice(0, 4)

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-lux">
        <div className="flex flex-col items-center text-center">
          <SectionHead
            center
            eyebrow="Client love"
            title="Real reviews from real appointments"
            text="Rated 4.5★ from 107 reviews on Google by salon clients and academy students."
          />
          <div className="reveal mt-6">
            <RatingChip />
          </div>
        </div>

        {full && (
          <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t)}
                className={`border px-4 py-2 text-[12px] font-bold tracking-[0.1em] uppercase transition ${
                  activeTag === t ? 'border-rose bg-rose text-white' : 'border-line bg-white text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r, i) => (
            <div key={r.name + i} className="reveal flex flex-col justify-between border border-line bg-white p-7" style={d((i % 4) * 70)}>
              <div>
                <Stars value={5} className="h-4 w-4 text-[#D4AF37]" />
                <p className="mt-4 text-[14px] leading-relaxed text-ink/80 italic">"{r.text}"</p>
              </div>
              <div className="mt-6 border-t border-line/70 pt-4">
                <p className="font-serif text-[18px] text-ink">{r.name}</p>
                <p className="text-[11.5px] font-semibold text-rose uppercase">{r.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          {full ? (
            <>
              <a href={BUSINESS.googleUrl} target="_blank" rel="noopener" className="btn-rose">
                Read all on Google ↗
              </a>
              <a href={BUSINESS.googleUrl} target="_blank" rel="noopener" className="btn-outline">
                Write a review
              </a>
            </>
          ) : (
            <Link to="/reviews" className="btn-outline">
              Read more reviews <ArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Menu & Prices (Wedding Season Special) ---------------- */

export function MenuSection() {
  const [showPoster, setShowPoster] = useState<'none' | 'light' | 'dark'>('none')

  return (
    <section className="bg-blush py-24 sm:py-32">
      <div className="container-lux">
        <SectionHead
          eyebrow="Published studio pricing"
          title={
            <>
              Wedding Season Special. <em className="text-rose">Transparent rates.</em>
            </>
          }
          text="Every extension set includes free polishing. Nail art is extra (₹30 to ₹50 per finger), so you only pay for what you choose."
        />

        {/* Wedding season trust bar */}
        <div className="reveal mt-10 border border-line bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-rose px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                Offer Active
              </span>
              <p className="font-serif text-[20px] italic text-ink">
                Wedding Season Special — Professional Products · Hygienic Tools · Skilled Artists
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPoster(showPoster === 'light' ? 'none' : 'light')}
                className="border border-line px-3 py-1.5 text-[11px] font-bold tracking-[0.1em] text-ink uppercase hover:bg-cream"
              >
                {showPoster === 'light' ? '✕ Hide Rate Card' : '📷 View Poster Rate Card'}
              </button>
            </div>
          </div>

          {showPoster !== 'none' && (
            <div className="mt-6 border-t border-line pt-6">
              <div className="flex flex-wrap gap-2 pb-4">
                <button
                  type="button"
                  onClick={() => setShowPoster('light')}
                  className={`px-3 py-1 text-[11px] font-bold uppercase ${showPoster === 'light' ? 'bg-rose text-white' : 'bg-cream text-ink'}`}
                >
                  Wedding Special Poster (Cream)
                </button>
                <button
                  type="button"
                  onClick={() => setShowPoster('dark')}
                  className={`px-3 py-1 text-[11px] font-bold uppercase ${showPoster === 'dark' ? 'bg-rose text-white' : 'bg-cream text-ink'}`}
                >
                  Wedding Special Poster (Luxury Dark)
                </button>
              </div>
              <div className="mx-auto max-w-[500px] overflow-hidden border border-line shadow-lg">
                <img
                  src={showPoster === 'light' ? WEDDING_SEASON_SPECIAL.lightPoster : WEDDING_SEASON_SPECIAL.darkPoster}
                  alt="Nitya Nail Art Wedding Season Special Official Rate Card"
                  className="w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Menu Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MENU.map((g, gi) => (
            <div key={g.id} id={g.id} className="reveal flex flex-col border border-line bg-white shadow-sm" style={d(gi * 90)}>
              <div className="border-b border-line p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[18px] text-rose">0{gi + 1}</span>
                  <span className="text-[10.5px] font-bold tracking-[0.16em] text-muted uppercase">Special Rate</span>
                </div>
                <h3 className="mt-2 font-serif text-[32px] leading-tight text-ink">{g.title}</h3>
                <p className="mt-1 text-[13.5px] text-muted">{g.intro}</p>
              </div>

              <ul className="flex-1 divide-y divide-dashed divide-line px-7 py-2 sm:px-8">
                {g.items.map((it) => (
                  <li key={it.name} className="py-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] font-semibold text-ink">{it.name}</p>
                        {it.durability && (
                          <span className="mt-1 inline-block bg-rose/10 px-2 py-0.5 text-[10.5px] font-bold text-rose-deep">
                            {it.durability}
                          </span>
                        )}
                        {it.note && <p className="mt-0.5 text-[12px] text-muted">{it.note}</p>}
                        {it.extra && <p className="mt-0.5 text-[11.5px] font-semibold text-rose">{it.extra}</p>}
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-[24px] whitespace-nowrap text-rose">{it.price}</span>
                        {it.regularPrice && (
                          <span className="block text-[12px] text-muted line-through">{it.regularPrice}</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {g.extra && (
                <div className="border-t border-line bg-blush px-7 py-3.5 text-[11.5px] font-bold tracking-[0.12em] text-rose-deep uppercase sm:px-8">
                  {g.extra}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-[13px] text-muted">
          Official pricing as published on Nitya Nail Art posters. Final details & custom art confirmed on WhatsApp before appointment.
        </p>
      </div>
    </section>
  )
}

/* ---------------- Academy Course Detail (Image 3 Full 40+ Syllabus) ---------------- */

export function CourseSection() {
  const [showFlyer, setShowFlyer] = useState(false)

  return (
    <>
      <section className="bg-paper py-24 sm:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          {/* Sticky Enrollment Card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead eyebrow="Certified Diploma Course" title={COURSE.name} />

              <div className="reveal mt-7 border border-line bg-white p-7 shadow-sm" style={d(150)}>
                {/* Official seal badge */}
                <div className="flex items-center gap-3.5 border-b border-line pb-5">
                  <img src="/images/logo.jpg" alt="Certified by Nitya Nail Academy" className="h-12 w-12 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-ink/10" />
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-rose uppercase">Government / Salon Certified</p>
                    <p className="font-serif text-[18px] leading-tight text-ink">Certified by Nitya Nail Academy</p>
                  </div>
                </div>

                {/* Bumper Offer Callout */}
                <div className="mt-5 border-l-4 border-rose bg-blush p-4">
                  <span className="inline-block bg-rose px-2.5 py-0.5 text-[10px] font-bold tracking-[0.16em] text-white uppercase">
                    {COURSE.offerBadge}
                  </span>
                  <p className="mt-2 font-serif text-[17px] italic text-ink">
                    "{COURSE.taglineHindi} {COURSE.sublineHindi}"
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-muted uppercase">Course fee</p>
                  <p className="mt-1 flex items-baseline gap-3">
                    <span className="display text-[56px] text-rose">{COURSE.price}</span>
                    <span className="text-[18px] text-muted line-through">{COURSE.regular}</span>
                    <span className="rounded bg-rose/10 px-2 py-1 text-[11px] font-bold text-rose-deep">{COURSE.savings}</span>
                  </p>
                  <p className="text-[12.5px] text-muted">Limited seats per batch · All practice products provided free of cost</p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {COURSE.perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[14px] text-ink/90">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-rose text-[10px] text-white">✓</span> {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Hi Nitya, I want to enrol in the Basic to Professional nail course under the ${COURSE.price} Bumper Offer. Please share syllabus and next batch start date.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-rose mt-7 w-full"
                >
                  Enrol on WhatsApp @ {COURSE.price} ↗
                </a>

                <button
                  type="button"
                  onClick={() => setShowFlyer(!showFlyer)}
                  className="mt-3.5 w-full border border-line py-2.5 text-center text-[11px] font-bold tracking-[0.14em] text-ink uppercase hover:bg-cream"
                >
                  {showFlyer ? '✕ Hide Course Poster' : '📷 View Official Course Flyer'}
                </button>

                {showFlyer && (
                  <div className="mt-4 border border-line p-2 shadow-inner">
                    <img
                      src={COURSE.posterImage}
                      alt="Nitya Nail Art & Academy Basic to Professional Course Official Poster"
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Full 40+ Course Topics Syllabus (Right Column) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="eyebrow">Comprehensive 40+ Topics</p>
                <h3 className="display mt-1 text-[36px]">Course Curriculum</h3>
              </div>
              <span className="bg-ink px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                100% Practical
              </span>
            </div>

            <div className="mt-8 space-y-6">
              {COURSE.modules.map((m, i) => (
                <div key={m.title} className="reveal border border-line bg-white p-7 sm:p-8 shadow-sm" style={d(i * 70)}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.18em] text-rose uppercase">Module 0{i + 1}</span>
                      <h4 className="font-serif text-[28px] leading-tight text-ink">{m.title}</h4>
                      {m.description && <p className="mt-1 text-[13px] text-muted">{m.description}</p>}
                    </div>
                  </div>
                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[14px] text-ink/85">
                        <span className="mt-[2px] text-[11px] text-rose">✦</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* In-person training guarantee card */}
            <div className="reveal mt-8 border border-[#EDD28A]/40 bg-gradient-to-br from-cream via-paper to-blush p-7 sm:p-8">
              <h4 className="font-serif text-[26px] text-ink">What's included in every enrolment?</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-[14px] text-muted">
                <p className="flex items-center gap-2"><span className="text-rose">✓</span> Complete practice products provided</p>
                <p className="flex items-center gap-2"><span className="text-rose">✓</span> Live model hands-on sessions</p>
                <p className="flex items-center gap-2"><span className="text-rose">✓</span> In-class written notes & formulas</p>
                <p className="flex items-center gap-2"><span className="text-rose">✓</span> Salon & freelance pricing structure</p>
                <p className="flex items-center gap-2"><span className="text-rose">✓</span> Instagram photography guidance</p>
                <p className="flex items-center gap-2"><span className="text-rose">✓</span> Lifetime doubt clearing & support</p>
              </div>
              <a
                href={whatsappLink(`Hi Nitya, I have questions regarding the Basic to Professional nail course (@ ${COURSE.price}). Please help me with batch timings.`)}
                target="_blank"
                rel="noopener"
                className="btn-rose mt-6 inline-flex"
              >
                Inquire on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Contact Section ---------------- */

export function ContactSection() {
  const rows = [
    { label: 'Studio location', body: BUSINESS.streetAddress, cta: 'Get directions', href: BUSINESS.directionsUrl, icon: <PinIcon /> },
    { label: 'Direct phone', body: BUSINESS.phone.display, cta: 'Call now', href: `tel:${BUSINESS.phone.tel}`, icon: <PhoneIcon /> },
    { label: 'WhatsApp booking', body: 'Quick response for inspiration photos & booking', cta: 'Chat now', href: whatsappLink(), icon: <WhatsAppIcon /> },
    { label: 'Instagram profile', body: `@${BUSINESS.instagram.handle}`, cta: 'Follow', href: BUSINESS.instagram.url, icon: <InstagramIcon /> },
    { label: 'Academy profile', body: `@${BUSINESS.academyInstagram.handle}`, cta: 'Follow', href: BUSINESS.academyInstagram.url, icon: <InstagramIcon /> },
    { label: 'Working hours', body: `${BUSINESS.hours[0].days}: ${BUSINESS.hours[0].time} · ${BUSINESS.hours[1].days}: ${BUSINESS.hours[1].time}`, icon: <ClockIcon /> },
  ]

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-lux grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Visit the studio"
            title={
              <>
                We're here <em className="text-rose">for you.</em>
              </>
            }
            text="Walk in or book ahead on WhatsApp — send your inspiration picture and we'll have everything ready."
          />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {rows.map((r, i) => (
              <li key={r.label} className="reveal flex items-start gap-5 py-5" style={d(i * 60)}>
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center bg-blush text-rose">{r.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10.5px] font-bold tracking-[0.2em] text-rose uppercase">{r.label}</p>
                  <p className="mt-1 text-[15px] leading-relaxed break-words">{r.body}</p>
                </div>
                {r.href && (
                  <a href={r.href} target={r.href.startsWith('tel:') ? undefined : '_blank'} rel="noopener" className="link-arrow mt-3 hidden shrink-0 border-ink/30 text-ink hover:text-rose sm:inline-flex">
                    {r.cta} <span>→</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal lg:col-span-7" style={d(140)}>
          <div className="relative h-full min-h-[440px] overflow-hidden border border-line bg-cream">
            <iframe title="Nitya Nail Art & Academy on Google Maps" src={BUSINESS.mapEmbed} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener"
              className="group absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 bg-ink px-6 py-4 text-white shadow-2xl sm:right-auto"
            >
              <div className="flex items-center gap-3.5">
                <img src="/images/logo.jpg" alt="Nitya Nail Art" className="h-11 w-11 shrink-0 rounded-full border border-white/20 object-cover shadow-md transition-transform duration-300 group-hover:scale-105" />
                <span>
                  <span className="block font-serif text-[24px] leading-tight">Nitya Nail Art & Academy</span>
                  <span className="text-[12px] text-white/65">19 GM & 247 FH, Scheme No. 54 · Opposite Meghdoot Garden</span>
                </span>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-rose transition-colors duration-300 group-hover:bg-rose-deep">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Instagram strip ---------------- */

export function InstagramStrip() {
  const pics = GALLERY.slice(0, 6)
  return (
    <section className="bg-paper pt-24 pb-10 sm:pt-28">
      <div className="container-lux text-center">
        <SectionHead center eyebrow={`@${BUSINESS.instagram.handle}`} title="Follow our latest sets" />
        <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {pics.map((g, i) => (
            <a key={g.src} href={BUSINESS.instagram.url} target="_blank" rel="noopener" className="reveal group relative block aspect-square overflow-hidden" style={d(i * 50)} aria-label="View on Instagram">
              <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-rose/0 text-white opacity-0 transition-all duration-500 group-hover:bg-rose/50 group-hover:opacity-100">
                <InstagramIcon className="h-7 w-7" />
              </span>
            </a>
          ))}
        </div>
        <a href={BUSINESS.instagram.url} target="_blank" rel="noopener" className="btn-outline reveal mt-10">
          <InstagramIcon className="h-4 w-4" /> Follow on Instagram
        </a>
      </div>
    </section>
  )
}
