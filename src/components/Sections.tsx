import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ACADEMY_GALLERY,
  BRIDAL_PACKAGE,
  BUSINESS,
  COURSE,
  FEATURED_DESIGNS,
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
    <section className="relative grid overflow-hidden bg-ink pt-[70px] text-white sm:pt-[76px] lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative z-10 flex items-center px-4 pt-8 pb-10 sm:px-8 lg:px-12 lg:py-20 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[640px]">
          <div className="reveal inline-flex items-center gap-2 border border-[#EDD28A]/40 bg-[#EDD28A]/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#EDD28A] uppercase sm:text-[11px]">
            <span>✨</span> Studio Services & Certified Academy · Vijay Nagar
          </div>
          <h1 className="reveal display mt-4 sm:mt-5 text-[clamp(2.3rem,6.2vw,5.6rem)] leading-[1.05]" style={d(100)}>
            <span className="block text-[0.45em] sm:text-[0.48em] font-serif italic text-rose-light">Indore's Premier Nail Destination</span>
            Nail Studio & Academy
          </h1>
          <p className="reveal mt-4 sm:mt-6 max-w-[540px] text-[14.5px] sm:text-[16px] leading-relaxed text-white/80" style={d(200)}>
            Two distinct verticals under one roof: Luxury <strong>Nail Art Services</strong> (extensions from ₹249, bridal sets @ ₹2,100) and an accredited <strong>Nail Art Academy</strong> (certified basic to pro course @ ₹8,500 with 100% practical training).
          </p>
          <div className="reveal mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row" style={d(300)}>
            <Link to="/services" className="btn-rose w-full sm:w-auto text-center active:scale-[0.98] font-bold">
              • Explore Nail Art Services
            </Link>
            <Link to="/academy" className="btn-outline-light w-full sm:w-auto text-center active:scale-[0.98] font-bold">
              • Explore Nail Art Academy
            </Link>
          </div>
          <div className="reveal mt-8 sm:mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 sm:pt-6" style={d(400)}>
            <RatingChip light />
            <div className="flex items-center gap-2">
              <img src="/images/logo.jpg" alt="Nitya Nail Art" className="h-6 w-6 rounded-full border border-white/25 object-cover" />
              <span className="text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] text-white/60">Women-owned studio</span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-[#EDD28A] font-medium">✦ 100% Practical Academy</span>
          </div>
        </div>
      </div>
      <div className="relative h-[45svh] sm:h-[55svh] overflow-hidden lg:h-auto">
        <img
          src="/images/real-nude-gold-contour.jpg"
          alt="Luxury nude pink and gold contour nail extensions at Nitya Nail Art, Indore"
          className="hero-img absolute inset-0 h-full w-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent lg:from-ink/80" />
        
        {/* Floating Vertical 1 badge */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 border-l-4 border-rose bg-paper/95 px-3.5 py-2.5 sm:px-4 sm:py-3 text-ink shadow-2xl backdrop-blur-xs max-w-[260px] sm:max-w-[310px]">
          <p className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.18em] text-rose uppercase">Vertical 01 · Services</p>
          <p className="font-serif text-[15px] sm:text-[19px] font-bold leading-snug mt-0.5">
            Temporary Extensions Starting at Just ₹249/-
          </p>
          <p className="text-[10px] sm:text-[11px] text-muted mt-0.5">Bridal Package @ ₹2,100</p>
        </div>

        {/* Floating Vertical 2 badge */}
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 border-l-4 border-[#D4AF37] bg-ink/95 px-3.5 py-2.5 sm:px-4 sm:py-3 text-white shadow-2xl backdrop-blur-xs">
          <p className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.18em] text-[#EDD28A] uppercase">Vertical 02 · Academy</p>
          <p className="font-serif text-[18px] sm:text-[22px] font-bold leading-tight text-[#EDD28A]">Offer @ ₹8,500/-</p>
          <p className="text-[10px] sm:text-[11px] text-white/70">100% Practical + Certificate</p>
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
    <div className="overflow-hidden bg-rose py-3 text-white sm:py-4" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-6 whitespace-nowrap sm:gap-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-6 font-serif text-[18px] sm:text-[22px] italic sm:gap-8">
            {w} <span className="text-[10px] sm:text-[11px] not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------------- Two Core Business Verticals (Services & Academy) ---------------- */

export function DualVerticalsSection() {
  return (
    <section id="verticals" className="bg-paper py-14 sm:py-20 lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 border border-rose/20 bg-rose/5 px-3 py-1 text-[10.5px] font-bold tracking-[0.16em] text-rose uppercase sm:text-[11px]">
            Two Core Business Verticals
          </div>
          <h2 className="display mt-3 sm:mt-4 text-[clamp(2.2rem,5vw,4.5rem)] text-ink">
            Craftsmanship & <em className="text-rose">Education.</em>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-muted">
            We are both a <strong>Premium Nail Studio</strong> and a <strong>Professional Nail Training Academy</strong> in Vijay Nagar, Indore. Choose your journey below:
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Vertical 1: Nail Art Services */}
          <div
            id="services-vertical"
            className="group relative flex flex-col justify-between overflow-hidden border border-line bg-cream p-6 sm:p-9 shadow-sm transition hover:shadow-xl hover:border-rose/50"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-block bg-rose px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase sm:text-[10.5px]">
                  Vertical 01 · Studio
                </span>
                <span className="font-serif text-[12.5px] sm:text-[13.5px] text-muted italic">Temporary Extensions from ₹249/-</span>
              </div>
              <h3 className="display mt-4 text-[28px] sm:text-[36px] text-ink">
                Nail Art Services
              </h3>
              <p className="mt-1 font-serif text-[15px] sm:text-[16px] italic text-rose font-medium">
                Professional Nail Extensions, Gel, Acrylic, Bridal Nails, Nail Art & Premium Nail Treatments.
              </p>
              <div className="relative mt-5 aspect-[16/10] overflow-hidden border border-line">
                <img
                  src="/images/designs/design-07-burgundy-french-floral.jpg"
                  alt="Handcrafted floral nail art and extensions at Nitya Nail Art, Indore"
                  className="h-full w-full object-cover object-[center_35%] transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 bg-ink/90 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-xs">
                  Wedding Season Special
                </div>
              </div>
              <p className="mt-5 text-[14.5px] sm:text-[15px] leading-relaxed text-muted">
                Indore’s premier destination for flawless extensions, overlays, and bespoke bridal nail artistry. Every set is tailored to your natural nail health and lifestyle.
              </p>
              <ul className="mt-5 space-y-2 border-t border-line/60 pt-5 text-[13.5px] sm:text-[14px] text-ink/85">
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold">✓</span>
                  <span><strong>Temporary Nail Extensions</strong> starting at just ₹249/- (lasts 10 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold">✓</span>
                  <span><strong>Korean Gel Extensions</strong> @ ₹599 & <strong>Gel Extensions</strong> @ ₹699</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold">✓</span>
                  <span><strong>Acrylic Nail Extensions</strong> @ ₹1,099 (flawless 1-month wear)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold">✓</span>
                  <span><strong>Signature Bridal Package @ ₹2,100</strong> (Cat Eye Hands + Toes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold">✓</span>
                  <span>Gel & Acrylic Overlays with Free Polishing from ₹699</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row gap-3">
              <Link to="/services" className="btn-rose flex-1 text-center font-bold active:scale-[0.98]">
                • Explore Nail Art Services
              </Link>
              <a
                href={whatsappLink('Hi Nitya Nail Art, I would like to book a nail service appointment.')}
                target="_blank"
                rel="noopener"
                className="btn-outline text-center text-xs sm:px-4 active:scale-[0.98]"
              >
                Book Appointment ↗
              </a>
            </div>
          </div>

          {/* Vertical 2: Nail Art Academy */}
          <div
            id="academy-vertical"
            className="group relative flex flex-col justify-between overflow-hidden border border-line bg-cream p-6 sm:p-9 shadow-sm transition hover:shadow-xl hover:border-[#D4AF37]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-block bg-[#2D0D19] border border-[#EDD28A]/40 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#EDD28A] uppercase sm:text-[10.5px]">
                  Vertical 02 · Academy
                </span>
                <span className="inline-block bg-rose/10 text-rose font-bold text-[12px] px-2.5 py-0.5 rounded-full">
                  Bumper Offer @ ₹8,500
                </span>
              </div>
              <h3 className="display mt-4 text-[28px] sm:text-[36px] text-ink">
                Nail Art Academy
              </h3>
              <p className="mt-1 font-serif text-[15px] sm:text-[16px] italic text-[#B8860B] font-medium">
                Basic to Professional Nail Courses, Practical Training, Student Certification & Professional Skill Development.
              </p>
              <div className="relative mt-5 aspect-[16/10] overflow-hidden border border-line">
                <img
                  src="/images/academy/academy-01.jpeg"
                  alt="Student receiving certificate at Nitya Nail Art Academy, Indore"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 bg-ink/90 px-2.5 py-1 text-[10px] font-bold text-[#EDD28A] uppercase tracking-wider backdrop-blur-xs">
                  Official Certification
                </div>
              </div>
              <p className="mt-5 text-[14.5px] sm:text-[15px] leading-relaxed text-muted">
                Indore’s leading hands-on training academy. Master 40+ techniques, client handling, salon hygiene, and portfolio building with complete practice products provided.
              </p>
              <ul className="mt-5 space-y-2 border-t border-line/60 pt-5 text-[13.5px] sm:text-[14px] text-ink/85">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] font-bold">✓</span>
                  <span><strong>100% Practical Training</strong> on live models & dummy fingers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] font-bold">✓</span>
                  <span><strong>All Practice Products Provided</strong> in class (Zero extra material cost)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] font-bold">✓</span>
                  <span><strong>Certificate Provided</strong> upon course completion for salon employment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] font-bold">✓</span>
                  <span><strong>In-Class Notes & Pricing Structure</strong> (How to price freelance & salon sets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] font-bold">✓</span>
                  <span><strong>Lifetime Mentor Support</strong> & doubt resolution after completion</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row gap-3">
              <Link to="/academy" className="btn-rose flex-1 text-center font-bold active:scale-[0.98]">
                • Explore Nail Art Academy
              </Link>
              <a
                href={whatsappLink('Hi Nitya Nail Art, I want to inquire about the Basic to Professional Nail Academy course (@ ₹8,500 bumper offer).')}
                target="_blank"
                rel="noopener"
                className="btn-outline text-center text-xs sm:px-4 active:scale-[0.98]"
              >
                Enroll on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Featured Designs with Exact Tiered Pricing ---------------- */

export function FeaturedDesignsSection() {
  return (
    <section id="trending-designs" className="bg-cream py-14 sm:py-20 lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 border border-rose/20 bg-rose/5 px-3 py-1 text-[10.5px] font-bold tracking-[0.16em] text-rose uppercase sm:text-[11px]">
            Trending Client Designs
          </div>
          <h2 className="display mt-3 sm:mt-4 text-[clamp(2.2rem,5vw,4.5rem)] text-ink">
            Popular Sets with <em className="text-rose">Tiered Pricing.</em>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-muted">
            Send us your inspiration! Every signature design can be crafted in your preferred extension style.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-4 py-1.5 text-[12.5px] font-bold text-rose-deep sm:text-[13px]">
            <span>✨</span> Temporary extension starting at just ₹249/-
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_DESIGNS.map((d) => (
            <div
              key={d.id}
              className="group flex flex-col justify-between overflow-hidden border border-line bg-paper shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-ink/5">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {d.badge && (
                    <span className="absolute top-3 left-3 bg-rose px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
                      {d.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-ink leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-[12px] sm:text-[12.5px] text-muted line-clamp-2">
                    {d.style}
                  </p>

                  <div className="mt-4 rounded-md border border-line bg-cream/70 p-3">
                    <p className="text-[10px] font-bold tracking-[0.15em] text-rose uppercase mb-2">
                      Tiered Pricing
                    </p>
                    <div className="space-y-1.5 text-[12px] sm:text-[12.5px]">
                      <div className="flex justify-between border-b border-line/40 pb-1">
                        <span className="text-muted">Temporary:</span>
                        <span className="font-bold text-ink">{d.prices.temporary}</span>
                      </div>
                      <div className="flex justify-between border-b border-line/40 pb-1">
                        <span className="text-muted">Korean:</span>
                        <span className="font-bold text-ink">{d.prices.korean}</span>
                      </div>
                      <div className="flex justify-between border-b border-line/40 pb-1">
                        <span className="text-muted">Soft Gel:</span>
                        <span className="font-bold text-ink">{d.prices.softGel}</span>
                      </div>
                      <div className="flex justify-between border-b border-line/40 pb-1">
                        <span className="text-muted">Gel:</span>
                        <span className="font-bold text-ink">{d.prices.gel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Acrylic:</span>
                        <span className="font-bold text-rose-deep">{d.prices.acrylic}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <a
                  href={whatsappLink(`Hi Nitya Nail Art, I love the "${d.title}" design! Please book an appointment for me.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-rose w-full text-center text-[12.5px] py-2.5 active:scale-[0.98] block"
                >
                  Book this design ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Academy Certificates & Real Training Showcase ---------------- */

export function AcademyCertificatesShowcase() {
  return (
    <section id="academy-certificates" className="bg-paper py-14 sm:py-20 lg:py-28">
      <div className="container-lux">
        <div className="grid items-end justify-between gap-6 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <div className="inline-flex items-center gap-2 border border-[#EDD28A]/40 bg-[#EDD28A]/10 px-3 py-1 text-[10.5px] font-bold tracking-[0.16em] text-[#B8860B] uppercase sm:text-[11px]">
              🎓 Real Students · Real Certificates
            </div>
            <h2 className="display mt-3 sm:mt-4 text-[clamp(2.2rem,5vw,4.5rem)] text-ink">
              Proud Academy Graduates & <em className="text-rose">Practical Training.</em>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-muted">
              See our students in action! From hands-on live model prep to official certificate award ceremonies, our graduates step out as job-ready and freelance-ready professional nail artists.
            </p>
          </div>
          <div className="sm:col-span-4 sm:text-right">
            <Link to="/academy" className="btn-outline w-full sm:w-auto inline-flex text-center justify-center">
              View Course Syllabus <ArrowRight />
            </Link>
          </div>
        </div>

        {/* 8 Academy Images Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-6">
          {ACADEMY_GALLERY.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden border border-line bg-cream shadow-sm transition hover:shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-3.5 bg-paper">
                <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] text-rose uppercase">
                  {item.tag}
                </span>
                <p className="mt-0.5 font-serif text-[13px] sm:text-[15px] font-medium text-ink leading-tight line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real student reviews & accreditation badge */}
        <div className="mt-12 rounded-xl border border-[#EDD28A]/40 bg-gradient-to-br from-[#FFFDF5] to-[#FFF5EB] p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-[12px] font-bold text-ink">5.0 Star Academy Student Feedback</span>
              </div>
              <blockquote className="font-serif text-[17px] sm:text-[19px] italic text-ink leading-snug">
                “I learned nail art here and they teach very well. Students can use all the practice products freely, and trainers patiently solve every doubt. I mastered extensions, 3D art, and salon pricing!”
              </blockquote>
              <p className="text-[13px] font-semibold text-rose-deep">
                — Harshi Jain & Palak Goswami (Verified Academy Students)
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={whatsappLink('Hi Nitya Nail Art Academy, I want to enroll in the Basic to Professional nail course with the ₹8,500 bumper offer!')}
                target="_blank"
                rel="noopener"
                className="btn-rose text-center font-bold"
              >
                Claim Bumper Offer @ ₹8,500 ↗
              </a>
              <a href={`tel:${BUSINESS.phone.tel}`} className="btn-outline text-center text-xs">
                Call {BUSINESS.phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Dedicated Bridal Special Package (Image 2) ---------------- */

export function BridalSpecialSection() {
  return (
    <section id="bridal" className="relative overflow-hidden bg-gradient-to-br from-[#2D0D19] via-ink to-[#1a0f14] py-14 sm:py-20 lg:py-28 text-white">
      <div className="container-lux">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="reveal relative lg:col-span-5">
            <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <img
                src={BRIDAL_PACKAGE.image}
                alt="Nitya Nail Art & Academy Bridal Booking Special Package @ ₹2,100 Only"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-rose px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase shadow-md">
                Bridal Special
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 border border-[#EDD28A]/30 bg-[#EDD28A]/10 px-3 py-1 text-[10.5px] font-bold tracking-[0.16em] text-[#EDD28A] uppercase sm:text-[11px]">
              👑 {BRIDAL_PACKAGE.badge}
            </div>
            <h2 className="reveal display mt-3 sm:mt-4 text-[clamp(2.4rem,5.5vw,5rem)]">
              Bridal Booking <br />
              <span className="font-serif italic text-rose-light">for Your Special Day</span>
            </h2>
            <div className="reveal mt-2 sm:mt-3 flex items-baseline gap-2.5">
              <span className="display text-[44px] sm:text-[52px] text-[#EDD28A]">@ {BRIDAL_PACKAGE.price}</span>
              <span className="text-[18px] sm:text-[20px] font-serif text-white/80 italic">{BRIDAL_PACKAGE.priceSuffix}</span>
            </div>
            <p className="reveal mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed text-white/75" style={d(100)}>
              Your wedding moments deserve breathtaking fingertips and toes. Get our complete Cat Eye bridal set crafted with precision, long-lasting durability, and jewelry-grade shimmer.
            </p>

            <div className="reveal mt-6 grid gap-3 sm:grid-cols-2" style={d(160)}>
              {BRIDAL_PACKAGE.highlights.map((h) => (
                <div key={h.title} className="border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#EDD28A]/50 sm:p-5">
                  <span className="text-[24px] sm:text-[26px]">{h.icon}</span>
                  <h3 className="mt-2 font-serif text-[20px] sm:text-[22px] text-white">{h.title}</h3>
                  <p className="mt-0.5 text-[12px] font-bold tracking-[0.12em] text-[#EDD28A] uppercase">{h.finish}</p>
                </div>
              ))}
            </div>

            <ul className="reveal mt-6 space-y-2 border-t border-white/10 pt-5" style={d(220)}>
              {BRIDAL_PACKAGE.perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] text-white/85">
                  <span className="text-[#EDD28A]">✦</span> {p}
                </li>
              ))}
            </ul>

            <div className="reveal mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center" style={d(280)}>
              <a
                href={whatsappLink(BRIDAL_PACKAGE.whatsappMessage)}
                target="_blank"
                rel="noopener"
                className="btn-rose w-full sm:w-auto text-center active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book Bridal Appointment Today ↗
              </a>
              <a href={`tel:${BUSINESS.phone.tel}`} className="btn-outline-light w-full sm:w-auto text-center active:scale-[0.98]">
                Call {BUSINESS.phone.display}
              </a>
            </div>
            <p className="mt-3 text-[11.5px] sm:text-[12px] text-white/50">
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
    <div className="border-y border-line bg-gradient-to-r from-cream via-paper to-cream py-3.5 sm:py-5">
      <div className="container-lux flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 sm:justify-start">
          <span className="bg-rose px-2.5 py-0.5 text-[10px] font-bold tracking-[0.16em] text-white uppercase sm:text-[10.5px]">
            Wedding Special
          </span>
          <p className="font-serif text-[17px] sm:text-[20px] text-ink italic">
            Premium Nail Services with Professional Finish
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] sm:text-[12px] font-bold tracking-[0.08em] text-ink/75 uppercase">
          {WEDDING_SEASON_SPECIAL.badges.map((b) => (
            <span key={b} className="flex items-center gap-1 border border-ink/10 bg-white/80 px-2 py-0.5 sm:border-0 sm:bg-transparent sm:p-0">
              <span className="text-rose">✓</span> {b}
            </span>
          ))}
          <span className="hidden text-rose md:inline">·</span>
          <span className="text-rose-deep font-semibold">{WEDDING_SEASON_SPECIAL.artExtraNote}</span>
        </div>
      </div>
    </div>
  )
}

/* ---------------- About split ---------------- */

export function AboutSplit({ cta = { label: 'Our story', to: '/about' } }: { cta?: { label: string; to: string } }) {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-32">
      <div className="container-lux grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <img src="/images/real-burgundy-polka-silk.jpg" alt="Burgundy polka dot nail extensions crafted at Nitya Nail Art, Indore" loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-8 -left-3 hidden w-[44%] border-[8px] border-paper shadow-2xl sm:block lg:-left-10">
            <img src="/images/real-french-polka-flower.jpg" alt="Hand-painted floral nail art on burgundy French tips" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="absolute top-3 right-3 sm:top-6 sm:right-0 flex items-center gap-2 border border-white/10 bg-ink/95 px-3 py-2 shadow-2xl backdrop-blur-xs sm:px-4 sm:py-2.5">
            <img src="/images/logo.jpg" alt="Nitya Nail Art Studio" className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-white/20 object-cover" />
            <p className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.18em] text-white uppercase">Women-owned</p>
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
          <div className="reveal mt-5 sm:mt-7 space-y-4 sm:space-y-5 text-[15px] sm:text-[16px] leading-[1.8] text-muted" style={d(200)}>
            <p>
              Nitya Nail Art & Academy is a women-owned nail studio in Vijay Nagar, Indore. We create extensions that survive real life — cooking,
              cleaning, typing — and art that looks exactly like the picture you fell in love with.
            </p>
            <p>
              Whether you need our <strong>Wedding Season Special</strong> sets from ₹249, the signature <strong>Bridal Package @ ₹2,100</strong>, or practical professional training at our Academy, we ensure transparent pricing, hygienic tools, and lasting results.
            </p>
          </div>
          <Link to={cta.to} className="btn-outline reveal mt-7 sm:mt-9 w-full sm:w-auto text-center active:scale-[0.98]" style={d(260)}>
            {cta.label} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Services with category carousel / sidebar ---------------- */

export function ServicesShowcase({ onHome = false }: { onHome?: boolean }) {
  const [cat, setCat] = useState<string>('All')
  const cats = ['All', ...SERVICE_CATEGORIES]
  const list = cat === 'All' ? SERVICES : SERVICES.filter((s) => s.category === cat)

  return (
    <section id="services" className="bg-blush py-14 sm:py-20 lg:py-32">
      <div className="container-lux">
        <SectionHead
          center
          eyebrow="Wedding Season Special & Menu"
          title="Our signature services"
          text="Precise technique, professional products, hygienic tools, and transparent pricing."
        />

        {/* Mobile Filter Chips Strip (Horizontal swipeable carousel) */}
        <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-[11.5px] font-bold tracking-[0.08em] uppercase transition active:scale-95 ${
                cat === c
                  ? 'bg-rose text-white shadow-md'
                  : 'border border-line bg-white text-ink/80 hover:bg-cream'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-14 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* Desktop Filter Sidebar */}
          <aside className="reveal hidden h-fit min-w-0 border border-line bg-white lg:block">
            <p className="border-b border-line px-6 py-5 text-[12px] font-bold tracking-[0.12em] uppercase">Categories</p>
            <ul>
              {cats.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => setCat(c)}
                    className={`flex w-full items-center justify-between gap-6 border-b border-line px-6 py-4 text-left text-[14px] transition-colors ${
                      cat === c ? 'bg-rose text-white' : 'text-ink/75 hover:bg-blush'
                    }`}
                  >
                    {c} <span aria-hidden="true">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Cards Grid */}
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((s, i) => (
              <article key={s.id} id={s.id} className="reveal group flex flex-col border border-line bg-white shadow-xs" style={d((i % 3) * 80)}>
                <div className="relative overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="aspect-[16/10] sm:aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
                  {s.badge && (
                    <span className="absolute top-3 right-3 bg-rose px-2.5 py-0.5 text-[9.5px] font-bold tracking-[0.14em] text-white uppercase shadow">
                      {s.badge}
                    </span>
                  )}
                  {s.duration && (
                    <span className="absolute bottom-3 left-3 bg-ink/85 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-xs">
                      {s.duration}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="font-serif text-[23px] sm:text-[26px] leading-tight transition-colors group-hover:text-rose">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] sm:text-[13.5px] leading-relaxed text-muted">{s.text}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/70 pt-4">
                    <div>
                      <span className="block text-[10.5px] font-bold tracking-[0.12em] text-rose uppercase">Special rate</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-[22px] sm:text-[24px] text-ink">{s.from}</span>
                        {s.regularPrice && <span className="text-[12px] text-muted line-through">{s.regularPrice}</span>}
                      </div>
                    </div>
                    <a
                      href={whatsappLink(`Hi Nitya, I would like to book ${s.title} (${s.from}).`)}
                      target="_blank"
                      rel="noopener"
                      className="link-arrow border-ink/30 text-ink hover:text-rose active:scale-95"
                    >
                      Book <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 sm:mt-12 text-center">
          <Link to="/menu" className="btn-rose w-full sm:w-auto text-center active:scale-[0.98]">
            View full menu & rate cards
          </Link>
          <p className="mt-2.5 text-[11.5px] sm:text-[12px] text-muted">
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
    <section className="bg-paper py-14 sm:py-20 lg:py-32">
      <div className="container-lux">
        <SectionHead center eyebrow="Before & after the appointment" title="Our work speaks" />
        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-5">
          {picks.map((g, i) => (
            <Link
              key={g.src}
              to="/gallery"
              className={`reveal group relative block overflow-hidden ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              style={d(i * 70)}
              aria-label={`See more: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
              <span className="absolute right-2.5 bottom-2.5 sm:right-3 sm:bottom-3 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center bg-white font-serif text-[13px] sm:text-[15px] transition-colors group-hover:bg-rose group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
            </Link>
          ))}
        </div>
        <div className="reveal mt-8 sm:mt-12 text-center">
          <Link to="/gallery" className="btn-rose w-full sm:w-auto text-center active:scale-[0.98]">
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
      <div className="flex items-center px-4 py-14 sm:px-8 lg:px-12 lg:py-28 xl:pl-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div className="max-w-[560px]">
          <div className="reveal flex items-center gap-2.5">
            <img src="/images/logo.jpg" alt="Nitya Nail Academy Logo" className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/20 object-cover shadow-sm" />
            <p className="eyebrow !text-rose-light">Nitya Nail Academy</p>
          </div>
          <span className="mt-2.5 inline-block bg-rose px-3 py-0.5 text-[10px] font-bold tracking-[0.14em] uppercase text-white shadow-sm sm:text-[11px]">
            {COURSE.offerBadge}
          </span>
          <h2 className="reveal display mt-3 sm:mt-4 text-[clamp(2.4rem,5.2vw,4.8rem)]" style={d(80)}>
            {COURSE.name}
            <br />
            <span className="font-serif italic text-[#EDD28A]">अब सिर्फ {COURSE.price}/-</span>{' '}
            <span className="text-[0.45em] text-white/50 line-through">{COURSE.regular}/-</span>
          </h2>
          <p className="mt-2 font-serif text-[17px] sm:text-[19px] text-white/85 italic">
            "{COURSE.taglineHindi} {COURSE.sublineHindi}"
          </p>
          <p className="reveal mt-4 sm:mt-5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/75" style={d(160)}>
            Complete practical training on Gel, Acrylic, Korean & Polygel extensions, 40+ nail art techniques, animal prints, live model practice and a certified diploma — all practice products provided!
          </p>
          <ul className="reveal mt-5 sm:mt-7 grid gap-2 sm:grid-cols-2" style={d(220)}>
            {COURSE.perks.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-white/85">
                <span className="text-[#EDD28A]">✦</span> {p}
              </li>
            ))}
          </ul>
          <div className="reveal mt-7 sm:mt-9 flex flex-col gap-2.5 sm:flex-row" style={d(280)}>
            <Link to="/academy" className="btn-rose w-full sm:w-auto text-center active:scale-[0.98]">
              View All 40+ Course Topics
            </Link>
            <a
              href={whatsappLink(`Hi Nitya, I want to enrol in the Basic to Professional nail course under the ${COURSE.price} Bumper Offer. Please share next batch details.`)}
              target="_blank"
              rel="noopener"
              className="btn-outline-light w-full sm:w-auto text-center active:scale-[0.98]"
            >
              Enrol at {COURSE.price} ↗
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[42svh] sm:h-[50svh] overflow-hidden lg:h-auto">
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
    <section className="border-y border-line bg-cream py-14 sm:py-20 lg:py-28">
      <div className="container-lux">
        <SectionHead center eyebrow="Why clients keep returning" title="The Nitya difference" />
        <div className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.no} className="reveal border border-line bg-paper p-5 sm:p-8" style={d(i * 80)}>
              <span className="font-serif text-[17px] sm:text-[18px] text-rose">{p.no}</span>
              <h3 className="mt-2.5 sm:mt-4 font-serif text-[24px] sm:text-[28px] leading-tight">{p.title}</h3>
              <p className="mt-2 sm:mt-3 text-[14px] sm:text-[14.5px] leading-relaxed text-muted">{p.text}</p>
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
    <section className="bg-paper py-14 sm:py-20 lg:py-32">
      <div className="container-lux">
        <div className="flex flex-col items-center text-center">
          <SectionHead
            center
            eyebrow="Client love"
            title="Real reviews from real appointments"
            text="Rated 4.5★ from 107 reviews on Google by salon clients and academy students."
          />
          <div className="reveal mt-5 sm:mt-6">
            <RatingChip />
          </div>
        </div>

        {full && (
          <div className="no-scrollbar -mx-4 mt-7 flex gap-1.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t)}
                className={`shrink-0 border px-3.5 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase transition active:scale-95 ${
                  activeTag === t ? 'border-rose bg-rose text-white shadow-xs' : 'border-line bg-white text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r, i) => (
            <div key={r.name + i} className="reveal flex flex-col justify-between border border-line bg-white p-5 sm:p-7 shadow-xs" style={d((i % 4) * 70)}>
              <div>
                <Stars value={5} className="h-4 w-4 text-[#D4AF37]" />
                <p className="mt-3.5 text-[13.5px] sm:text-[14px] leading-relaxed text-ink/80 italic">"{r.text}"</p>
              </div>
              <div className="mt-5 border-t border-line/70 pt-3.5">
                <p className="font-serif text-[17px] sm:text-[18px] text-ink">{r.name}</p>
                <p className="text-[11px] font-semibold text-rose uppercase">{r.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 sm:mt-10 flex flex-col justify-center gap-2.5 sm:flex-row">
          {full ? (
            <>
              <a href={BUSINESS.googleUrl} target="_blank" rel="noopener" className="btn-rose w-full sm:w-auto text-center active:scale-[0.98]">
                Read all on Google ↗
              </a>
              <a href={BUSINESS.googleUrl} target="_blank" rel="noopener" className="btn-outline w-full sm:w-auto text-center active:scale-[0.98]">
                Write a review
              </a>
            </>
          ) : (
            <Link to="/reviews" className="btn-outline w-full sm:w-auto text-center active:scale-[0.98]">
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
    <section className="bg-blush py-14 sm:py-20 lg:py-32">
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
        <div className="reveal mt-8 sm:mt-10 border border-line bg-white p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="bg-rose px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-white uppercase shrink-0">
                Offer Active
              </span>
              <p className="font-serif text-[17px] sm:text-[20px] italic text-ink">
                Professional Products · Hygienic Tools · Skilled Artists
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setShowPoster(showPoster === 'light' ? 'none' : 'light')}
                className="w-full sm:w-auto border border-line px-3 py-1.5 text-center text-[11px] font-bold tracking-[0.08em] text-ink uppercase hover:bg-cream active:scale-95 transition"
              >
                {showPoster !== 'none' ? '✕ Hide Rate Card' : '📷 View Poster Rate Card'}
              </button>
            </div>
          </div>

          {showPoster !== 'none' && (
            <div className="mt-5 border-t border-line pt-5">
              <div className="flex flex-wrap gap-2 pb-3.5">
                <button
                  type="button"
                  onClick={() => setShowPoster('light')}
                  className={`px-3 py-1.5 text-[10.5px] font-bold uppercase transition active:scale-95 ${showPoster === 'light' ? 'bg-rose text-white' : 'bg-cream text-ink'}`}
                >
                  Poster (Cream)
                </button>
                <button
                  type="button"
                  onClick={() => setShowPoster('dark')}
                  className={`px-3 py-1.5 text-[10.5px] font-bold uppercase transition active:scale-95 ${showPoster === 'dark' ? 'bg-rose text-white' : 'bg-cream text-ink'}`}
                >
                  Poster (Luxury Dark)
                </button>
              </div>
              <div className="mx-auto max-w-[500px] overflow-hidden border border-line shadow-md">
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
        <div className="mt-8 sm:mt-12 grid gap-5 lg:grid-cols-3">
          {MENU.map((g, gi) => (
            <div key={g.id} id={g.id} className="reveal flex flex-col border border-line bg-white shadow-xs" style={d(gi * 90)}>
              <div className="border-b border-line p-5 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[18px] text-rose">0{gi + 1}</span>
                  <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] text-muted uppercase">Special Rate</span>
                </div>
                <h3 className="mt-1.5 sm:mt-2 font-serif text-[28px] sm:text-[32px] leading-tight text-ink">{g.title}</h3>
                <p className="mt-1 text-[13px] text-muted">{g.intro}</p>
              </div>

              <ul className="flex-1 divide-y divide-dashed divide-line px-4 sm:px-8 py-2">
                {g.items.map((it) => (
                  <li key={it.name} className="py-3.5 sm:py-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[14px] sm:text-[15px] font-semibold text-ink leading-snug">{it.name}</p>
                        {it.durability && (
                          <span className="mt-1 inline-block bg-rose/10 px-2 py-0.5 text-[10px] font-bold text-rose-deep">
                            {it.durability}
                          </span>
                        )}
                        {it.note && <p className="mt-0.5 text-[11.5px] sm:text-[12px] text-muted">{it.note}</p>}
                        {it.extra && <p className="mt-0.5 text-[11px] sm:text-[11.5px] font-semibold text-rose">{it.extra}</p>}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-serif text-[22px] sm:text-[24px] whitespace-nowrap text-rose">{it.price}</span>
                        {it.regularPrice && (
                          <span className="block text-[11.5px] sm:text-[12px] text-muted line-through">{it.regularPrice}</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {g.extra && (
                <div className="border-t border-line bg-blush px-4 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-[11.5px] font-bold tracking-[0.1em] text-rose-deep uppercase">
                  {g.extra}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="reveal mt-6 sm:mt-8 text-center text-[12px] sm:text-[13px] text-muted">
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
      <section className="bg-paper py-14 sm:py-20 lg:py-32">
        <div className="container-lux grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sticky Enrollment Card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead eyebrow="Certified Diploma Course" title={COURSE.name} />

              <div className="reveal mt-6 sm:mt-7 border border-line bg-white p-5 sm:p-7 shadow-xs" style={d(150)}>
                {/* Official seal badge */}
                <div className="flex items-center gap-3 border-b border-line pb-4 sm:pb-5">
                  <img src="/images/logo.jpg" alt="Certified by Nitya Nail Academy" className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-ink/10" />
                  <div>
                    <p className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] text-rose uppercase">Government / Salon Certified</p>
                    <p className="font-serif text-[17px] sm:text-[18px] leading-tight text-ink">Certified by Nitya Nail Academy</p>
                  </div>
                </div>

                {/* Bumper Offer Callout */}
                <div className="mt-4 sm:mt-5 border-l-4 border-rose bg-blush p-3.5 sm:p-4">
                  <span className="inline-block bg-rose px-2 py-0.5 text-[9.5px] font-bold tracking-[0.14em] text-white uppercase sm:text-[10px]">
                    {COURSE.offerBadge}
                  </span>
                  <p className="mt-1.5 font-serif text-[16px] sm:text-[17px] italic text-ink">
                    "{COURSE.taglineHindi} {COURSE.sublineHindi}"
                  </p>
                </div>

                <div className="mt-4 sm:mt-5">
                  <p className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] text-muted uppercase">Course fee</p>
                  <p className="mt-1 flex items-baseline gap-2.5 sm:gap-3">
                    <span className="display text-[48px] sm:text-[56px] text-rose">{COURSE.price}</span>
                    <span className="text-[16px] sm:text-[18px] text-muted line-through">{COURSE.regular}</span>
                    <span className="rounded bg-rose/10 px-2 py-0.5 text-[10.5px] font-bold text-rose-deep">{COURSE.savings}</span>
                  </p>
                  <p className="text-[12px] text-muted">Limited seats per batch · All practice products provided free</p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-line pt-5 sm:mt-6 sm:space-y-2.5 sm:pt-6">
                  {COURSE.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] text-ink/90">
                      <span className="grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full bg-rose text-[9px] sm:text-[10px] text-white shrink-0">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Hi Nitya, I want to enrol in the Basic to Professional nail course under the ${COURSE.price} Bumper Offer. Please share syllabus and next batch start date.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-rose mt-6 w-full text-center active:scale-[0.98]"
                >
                  Enrol on WhatsApp @ {COURSE.price} ↗
                </a>

                <button
                  type="button"
                  onClick={() => setShowFlyer(!showFlyer)}
                  className="mt-3 w-full border border-line py-2 text-center text-[10.5px] sm:text-[11px] font-bold tracking-[0.12em] text-ink uppercase hover:bg-cream active:scale-95 transition"
                >
                  {showFlyer ? '✕ Hide Course Poster' : '📷 View Official Course Flyer'}
                </button>

                {showFlyer && (
                  <div className="mt-3.5 border border-line p-1.5 shadow-inner">
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
            <div className="flex items-center justify-between border-b border-line pb-3.5 sm:pb-4">
              <div>
                <p className="eyebrow">Comprehensive 40+ Topics</p>
                <h3 className="display mt-1 text-[28px] sm:text-[36px]">Course Curriculum</h3>
              </div>
              <span className="bg-ink px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                100% Practical
              </span>
            </div>

            <div className="mt-6 space-y-4 sm:space-y-6">
              {COURSE.modules.map((m, i) => (
                <div key={m.title} className="reveal border border-line bg-white p-5 sm:p-8 shadow-xs" style={d(i * 70)}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3 sm:pb-4">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-rose uppercase">Module 0{i + 1}</span>
                      <h4 className="font-serif text-[24px] sm:text-[28px] leading-tight text-ink">{m.title}</h4>
                      {m.description && <p className="mt-0.5 text-[12.5px] text-muted">{m.description}</p>}
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-ink/85">
                        <span className="mt-[2px] text-[10px] text-rose shrink-0">✦</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* In-person training guarantee card */}
            <div className="reveal mt-6 sm:mt-8 border border-[#EDD28A]/40 bg-gradient-to-br from-cream via-paper to-blush p-5 sm:p-8">
              <h4 className="font-serif text-[22px] sm:text-[26px] text-ink">What's included in every enrolment?</h4>
              <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 text-[13px] sm:text-[14px] text-muted">
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
                className="btn-rose mt-5 w-full sm:w-auto text-center inline-flex active:scale-[0.98]"
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
    <section className="bg-paper py-14 sm:py-20 lg:py-32">
      <div className="container-lux grid gap-10 lg:grid-cols-12 lg:gap-16">
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
          <ul className="mt-7 sm:mt-10 divide-y divide-line border-y border-line">
            {rows.map((r, i) => (
              <li key={r.label} className="reveal flex items-start gap-4 sm:gap-5 py-4 sm:py-5" style={d(i * 60)}>
                <span className="mt-0.5 grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center bg-blush text-rose">{r.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.18em] text-rose uppercase">{r.label}</p>
                  <p className="mt-0.5 sm:mt-1 text-[14px] sm:text-[15px] leading-relaxed break-words">{r.body}</p>
                </div>
                {r.href && (
                  <a href={r.href} target={r.href.startsWith('tel:') ? undefined : '_blank'} rel="noopener" className="link-arrow mt-2 sm:mt-3 hidden shrink-0 border-ink/30 text-ink hover:text-rose sm:inline-flex active:scale-95">
                    {r.cta} <span>→</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal lg:col-span-7" style={d(140)}>
          <div className="relative h-[340px] sm:h-[440px] lg:h-full overflow-hidden border border-line bg-cream">
            <iframe title="Nitya Nail Art & Academy on Google Maps" src={BUSINESS.mapEmbed} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener"
              className="group absolute right-3 bottom-3 left-3 sm:right-5 sm:bottom-5 sm:left-5 flex items-center justify-between gap-3 sm:gap-4 bg-ink px-4 py-3 sm:px-6 sm:py-4 text-white shadow-2xl sm:right-auto active:scale-[0.98] transition"
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <img src="/images/logo.jpg" alt="Nitya Nail Art" className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full border border-white/20 object-cover shadow-md transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <span className="block font-serif text-[20px] sm:text-[24px] leading-tight">Nitya Nail Art & Academy</span>
                  <span className="text-[11px] sm:text-[12px] text-white/65">Scheme No. 54 · Opposite Meghdoot Garden</span>
                </div>
              </div>
              <span className="grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center bg-rose transition-colors duration-300 group-hover:bg-rose-deep">
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
    <section className="bg-paper pt-14 pb-8 sm:pt-28 sm:pb-10">
      <div className="container-lux text-center">
        <SectionHead center eyebrow={`@${BUSINESS.instagram.handle}`} title="Follow our latest sets" />
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-1.5 sm:gap-3 lg:grid-cols-6">
          {pics.map((g, i) => (
            <a key={g.src} href={BUSINESS.instagram.url} target="_blank" rel="noopener" className="reveal group relative block aspect-square overflow-hidden" style={d(i * 50)} aria-label="View on Instagram">
              <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-rose/0 text-white opacity-0 transition-all duration-500 group-hover:bg-rose/50 group-hover:opacity-100">
                <InstagramIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
            </a>
          ))}
        </div>
        <a href={BUSINESS.instagram.url} target="_blank" rel="noopener" className="btn-outline reveal mt-7 sm:mt-10 w-full sm:w-auto text-center active:scale-[0.98]">
          <InstagramIcon className="h-4 w-4" /> Follow on Instagram ↗
        </a>
      </div>
    </section>
  )
}
