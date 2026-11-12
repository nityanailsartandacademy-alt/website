import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS, COURSE, GALLERY, MENU, PILLARS, REVIEWS, REVIEW_TAGS, SERVICES, SERVICE_CATEGORIES, whatsappLink } from '../data/site'
import { RatingChip, SectionHead } from './Blocks'
import { ArrowRight, ClockIcon, GoogleG, InstagramIcon, PhoneIcon, PinIcon, Stars, WhatsAppIcon } from './Icons'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` }) as React.CSSProperties

/* ---------------- Home hero ---------------- */

export function HomeHero() {
  return (
    <section className="relative grid overflow-hidden bg-ink pt-[76px] text-white lg:min-h-[100svh] lg:grid-cols-[1fr_0.9fr]">
      <div className="relative z-10 flex items-center px-5 pt-14 pb-14 sm:px-8 lg:px-12 lg:py-24 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[600px]">
          <p className="eyebrow reveal !text-rose-light">Premium nail art · extensions · academy</p>
          <h1 className="reveal display mt-6 text-[clamp(3rem,6.6vw,6.4rem)]" style={d(100)}>
            <span className="block text-[0.55em] leading-tight">Glamour at your</span> Fingertips
          </h1>
          <p className="reveal mt-7 max-w-[470px] text-[16.5px] leading-relaxed text-white/72" style={d(200)}>
            Long-lasting gel, acrylic & Korean extensions, hand-painted nail art and a certified nail course — in Vijay Nagar, Indore.
          </p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" style={d(300)}>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-rose">
              Book appointment
            </a>
            <Link to="/services" className="btn-outline-light">
              Explore services
            </Link>
          </div>
          <div className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6" style={d(400)}>
            <RatingChip light />
            <span className="text-[12px] font-semibold tracking-[0.06em] text-white/60">Women-owned studio</span>
          </div>
        </div>
      </div>
      <div className="relative h-[60svh] overflow-hidden lg:h-auto">
        <img
          src="/images/hero.webp"
          alt="Soft pink almond nail extensions by Nitya Nail Art, Indore"
          className="hero-img absolute inset-0 h-full w-full object-cover object-[center_40%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent lg:from-ink/80" />
        <div className="absolute bottom-5 left-5 bg-paper/95 px-5 py-4 text-ink shadow-xl sm:bottom-8 sm:left-8">
          <p className="text-[10px] font-bold tracking-[0.2em] text-rose uppercase">Extensions from</p>
          <p className="display text-[40px]">₹400</p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Ticker ---------------- */

const TICKER = ['Gel extensions', 'Acrylic extensions', 'Korean extensions', 'French tips', 'Chrome', 'Ombré', 'Cat eye', '3D art', 'Toe extensions', 'Nail course']

export function Marquee() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden bg-rose py-4 text-white" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-[24px] italic">
            {w} <span className="text-[12px] not-italic">✦</span>
          </span>
        ))}
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
          <img src="/images/studio.webp" alt="The Nitya Nail Art studio entrance in Vijay Nagar" loading="lazy" width={838} height={1100} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-8 -left-3 hidden w-[44%] border-[8px] border-paper shadow-2xl sm:block lg:-left-10">
            <img src="/images/svc-french.webp" alt="Powder blue French tip extensions" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
          <p className="absolute top-6 right-0 bg-rose px-5 py-3 text-[10.5px] font-bold tracking-[0.2em] text-white uppercase sm:-right-4">Women-owned</p>
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
              Not sure what suits you? That's what we're here for. We'll help you pick the shape, length, colour and design, and keep the price
              honest — published on our menu, no surprises.
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

/* ---------------- Services with category sidebar (Daisy-style) ---------------- */

export function ServicesShowcase({ onHome = false }: { onHome?: boolean }) {
  const [cat, setCat] = useState<string>('All')
  const cats = ['All', ...SERVICE_CATEGORIES]
  const list = cat === 'All' ? SERVICES : SERVICES.filter((s) => s.category === cat)

  return (
    <section id="services" className="bg-blush py-24 sm:py-32">
      <div className="container-lux">
        <SectionHead
          center
          eyebrow="Made around you"
          title="Our signature services"
          text="Precise technique, quality products and a finish that feels personal."
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
              <article key={s.id} id={s.id} className="reveal group flex flex-col border border-line bg-white" style={d((i % 3) * 80)}>
                <div className="overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-[28px] leading-tight transition-colors group-hover:text-rose">{s.title}</h3>
                  {!onHome && <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.text}</p>}
                  <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                    <span className="text-[13px] font-bold text-rose">From {s.from}</span>
                    <a href={whatsappLink(`Hi Nitya, I'd like to book: ${s.title}.`)} target="_blank" rel="noopener" className="link-arrow border-ink/30 text-ink hover:text-rose">
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
            View menu & prices
          </Link>
          <p className="mt-3 text-[12px] text-muted">Prices as published by the studio. Final details are confirmed when you book.</p>
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

/* ---------------- Academy teaser (dark split) ---------------- */

export function AcademyTeaser() {
  return (
    <section className="grid bg-ink text-white lg:grid-cols-2">
      <div className="flex items-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[540px]">
          <p className="eyebrow reveal">Nitya Nail Academy</p>
          <h2 className="reveal display mt-4 text-[clamp(2.8rem,5.6vw,5rem)]" style={d(80)}>
            Learn the craft.
            <br />
            <em className="text-rose-light">Build the career.</em>
          </h2>
          <p className="reveal mt-6 text-[16px] leading-relaxed text-white/70" style={d(160)}>
            A practical Basic to Professional course — extensions, 40+ nail art techniques, live model practice and a certificate, with every
            practice product provided.
          </p>
          <ul className="reveal mt-8 grid gap-3 sm:grid-cols-2" style={d(220)}>
            {COURSE.perks.slice(0, 4).map((p) => (
              <li key={p} className="flex items-center gap-3 text-[14px] text-white/85">
                <span className="text-rose-light">✦</span> {p}
              </li>
            ))}
          </ul>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row" style={d(280)}>
            <Link to="/academy" className="btn-rose">
              Explore the course
            </Link>
            <a href={whatsappLink("Hi Nitya, I'm interested in the nail course. Please share details.")} target="_blank" rel="noopener" className="btn-outline-light">
              Ask about batches
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[60svh] overflow-hidden lg:h-auto">
        <img src="/images/academy.webp" alt="A Nitya Academy student receiving her certificate" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute bottom-6 left-6 bg-rose px-5 py-4 text-white">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Course fee</p>
          <p className="display text-[36px]">
            {COURSE.price} <span className="font-sans text-[13px] line-through opacity-70">{COURSE.regular}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Why clients return ---------------- */

export function Pillars() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-lux">
        <SectionHead center eyebrow="The Nitya standard" title="Why clients return" />
        <div className="mt-14 grid border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.no} className="reveal border-line p-8 sm:p-9 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r" style={d(i * 80)}>
              <span className="font-serif text-[22px] text-rose">{p.no}</span>
              <h3 className="mt-14 font-serif text-[30px] leading-tight">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Reviews ---------------- */

function ReviewCard({ r, i }: { r: (typeof REVIEWS)[number]; i: number }) {
  return (
    <article className="reveal mb-5 break-inside-avoid border border-line bg-white p-8" style={d((i % 3) * 80)}>
      <div className="flex items-center justify-between">
        <Stars value={5} />
        <GoogleG className="h-4.5 w-4.5" />
      </div>
      <p className="mt-5 font-serif text-[22px] leading-[1.45] text-ink/90">“{r.text}”</p>
      <div className="mt-7 flex items-center gap-3.5 border-t border-line pt-5">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-blush font-serif text-[20px] text-rose">{r.name[0]}</span>
        <div>
          <p className="text-[14px] font-bold">{r.name}</p>
          <p className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{r.service}</p>
        </div>
      </div>
    </article>
  )
}

export function ReviewsSection({ full = false }: { full?: boolean }) {
  const list = full ? REVIEWS : REVIEWS.slice(0, 3)
  return (
    <section className="bg-blush py-24 sm:py-32">
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHead eyebrow="Client love" title={full ? 'Every set, honestly reviewed.' : 'Loved by our clients'} />
          </div>
          <div className="reveal lg:col-span-5" style={d(160)}>
            <div className="flex items-end gap-4">
              <span className="display text-[88px] leading-[0.8]">{BUSINESS.rating.value}</span>
              <div className="pb-1.5">
                <Stars value={BUSINESS.rating.value} className="h-5 w-5" />
                <p className="mt-1.5 text-[13px] text-muted">{BUSINESS.rating.count} Google reviews</p>
              </div>
            </div>
            {full && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {REVIEW_TAGS.map((t) => (
                  <li key={t.label} className="border border-line bg-white px-3.5 py-1.5 text-[12.5px]">
                    {t.label} <span className="text-rose">· {t.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={`mt-14 ${full ? 'columns-1 gap-5 md:columns-2 lg:columns-3' : 'grid gap-5 lg:grid-cols-3'}`}>
          {list.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          {full ? (
            <>
              <a href={BUSINESS.googleUrl} target="_blank" rel="noopener" className="btn-rose">
                Read all on Google
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

/* ---------------- Menu & prices ---------------- */

export function MenuSection() {
  return (
    <section className="bg-blush py-24 sm:py-32">
      <div className="container-lux">
        <SectionHead
          eyebrow="Published studio pricing"
          title={
            <>
              One studio. <em className="text-rose">One honest menu.</em>
            </>
          }
          text="Every extension set includes polishing. Nail art is charged per finger, so you only pay for the design you choose."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {MENU.map((g, gi) => (
            <div key={g.id} id={g.id} className="reveal flex flex-col border border-line bg-white" style={d(gi * 90)}>
              <div className="border-b border-line p-7 sm:p-8">
                <span className="font-serif text-[18px] text-rose">0{gi + 1}</span>
                <h3 className="mt-2 font-serif text-[34px] leading-tight">{g.title}</h3>
                <p className="mt-1 text-[14px] text-muted">{g.intro}</p>
              </div>
              <ul className="flex-1 px-7 py-3 sm:px-8">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-3 border-b border-dashed border-line py-4 last:border-0">
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-semibold">{it.name}</p>
                      {it.note && <p className="mt-0.5 text-[12.5px] text-muted">{it.note}</p>}
                    </div>
                    <span className="font-serif text-[24px] whitespace-nowrap text-rose">{it.price}</span>
                  </li>
                ))}
              </ul>
              {g.extra && <p className="bg-blush px-7 py-4 text-[12px] font-bold tracking-[0.12em] text-rose-deep uppercase sm:px-8">{g.extra}</p>}
            </div>
          ))}
        </div>
        <p className="reveal mt-8 text-center text-[13px] text-muted">
          Prices as published on the studio's Google profile and may change. Final pricing is confirmed on WhatsApp before your appointment.
        </p>
      </div>
    </section>
  )
}

/* ---------------- Academy course detail ---------------- */

export function CourseSection() {
  return (
    <>
      <section className="bg-paper py-24 sm:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead eyebrow="Basic to professional" title={COURSE.name} />
              <div className="reveal mt-8 border border-line bg-white p-7" style={d(200)}>
                <p className="text-[11px] font-bold tracking-[0.2em] text-muted uppercase">Course fee</p>
                <p className="mt-2 flex items-baseline gap-3">
                  <span className="display text-[64px] text-rose">{COURSE.price}</span>
                  <span className="text-[16px] text-muted line-through">{COURSE.regular}</span>
                </p>
                <p className="text-[13px] text-muted">+ {COURSE.registration} registration fee · limited seats per batch</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {COURSE.perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[14.5px]">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-rose text-[10px] text-white">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink("Hi Nitya, I'd like to enrol in the Basic to Professional nail course. Please share the next batch dates.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-rose mt-7 w-full"
                >
                  Enrol on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow reveal">What you'll learn</p>
            <div className="mt-6 space-y-5">
              {COURSE.modules.map((m, i) => (
                <div key={m.title} className="reveal border border-line bg-white p-7 sm:p-9" style={d(i * 70)}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                    <h3 className="font-serif text-[32px] leading-tight">{m.title}</h3>
                    <span className="font-serif text-[18px] text-rose">0{i + 1}</span>
                  </div>
                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[14.5px] text-ink/85">
                        <span className="mt-[3px] text-[11px] text-rose">✦</span> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-white lg:grid-cols-2">
        <div className="relative h-[55svh] overflow-hidden lg:h-auto">
          <img src="/images/students.webp" alt="Certified students of Nitya Nail Academy" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="max-w-[520px]">
            <p className="eyebrow reveal">Certified hands, confident future</p>
            <h2 className="reveal display mt-4 text-[clamp(2.6rem,5vw,4.4rem)]" style={d(80)}>
              Real practice. <em className="text-rose-light">Real certificates.</em>
            </h2>
            <p className="reveal mt-6 text-[16px] leading-relaxed text-white/70" style={d(160)}>
              Small batches mean personal attention. You practise on real products and live models, ask every doubt, and leave with a certificate
              and the confidence to start taking clients.
            </p>
            <blockquote className="reveal mt-8 border-l-2 border-rose pl-5 font-serif text-[22px] leading-snug text-white/90 italic" style={d(220)}>
              “They allow students to use all the products easily and patiently solve every doubt.”
              <footer className="mt-2 font-sans text-[12px] font-bold tracking-[0.12em] text-white/50 not-italic uppercase">— Harshi Jain, student</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Contact ---------------- */

export function ContactSection() {
  const rows = [
    { icon: <PinIcon />, label: 'Studio', body: BUSINESS.addressLines.join(', '), href: BUSINESS.directionsUrl, cta: 'Directions' },
    { icon: <ClockIcon />, label: 'Hours', body: BUSINESS.hours.map((h) => `${h.days}: ${h.time}`).join(' · ') },
    { icon: <PhoneIcon />, label: 'Call', body: BUSINESS.phone.display, href: `tel:${BUSINESS.phone.tel}`, cta: 'Call' },
    { icon: <WhatsAppIcon />, label: 'WhatsApp', body: BUSINESS.whatsapp.display, href: whatsappLink(), cta: 'Chat' },
    { icon: <InstagramIcon />, label: 'Instagram', body: `@${BUSINESS.instagram.handle}`, href: BUSINESS.instagram.url, cta: 'Follow' },
  ]
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-lux grid gap-12 lg:grid-cols-12 lg:gap-16">
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
              className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 bg-ink px-6 py-4 text-white shadow-2xl sm:right-auto"
            >
              <span>
                <span className="block font-serif text-[24px] leading-tight">Nitya Nail Art & Academy</span>
                <span className="text-[12px] text-white/65">Vijay Nagar · opposite Meghdoot Garden</span>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-rose">
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
  const pics = GALLERY.slice(5, 11)
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
