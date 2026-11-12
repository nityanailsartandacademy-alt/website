import { Link } from 'react-router-dom'
import { BookBand, PageHero } from '../components/Blocks'
import { Gallery } from '../components/Gallery'
import {
  AboutSplit,
  AcademyTeaser,
  ContactSection,
  CourseSection,
  HomeHero,
  InstagramStrip,
  Marquee,
  MenuSection,
  Pillars,
  ReviewsSection,
  ServicesShowcase,
  WorkStrip,
} from '../components/Sections'

/* One page per nav button. Home is the summary that leads into the others. */

export function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <AboutSplit />
      <ServicesShowcase onHome />
      <WorkStrip />
      <AcademyTeaser />
      <Pillars />
      <ReviewsSection />
      <BookBand />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About us"
        eyebrow="Our story"
        title="Made by women,"
        accent="made for you."
        text="A women-owned nail studio and academy in Vijay Nagar, Indore — built on clean technique, patient artists and honest prices."
        image="/images/banner-about.webp"
      />
      <AboutSplit cta={{ label: 'See our services', to: '/services' }} />
      <Pillars />
      <AcademyTeaser />
      <ReviewsSection />
      <BookBand />
    </>
  )
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Made around you"
        title="The Nitya"
        accent="signature sets."
        text="Gel, acrylic and Korean extensions, custom nail art, overlays and toe nails — each one shaped and finished by hand."
        image="/images/banner-services.webp"
      />
      <ServicesShowcase />
      <Pillars />
      <BookBand />
    </>
  )
}

export function MenuPage() {
  return (
    <>
      <PageHero
        crumb="Menu & prices"
        eyebrow="Published studio pricing"
        title="The Nitya"
        accent="service menu."
        text="Transparent prices for every extension, overlay and toe service. Nail art is charged per finger, so you only pay for what you choose."
        image="/images/banner-menu.webp"
      />
      <MenuSection />
      <BookBand />
    </>
  )
}

export function AcademyPage() {
  return (
    <>
      <PageHero
        crumb="Academy"
        eyebrow="Nitya Nail Academy"
        title="Learn the craft."
        accent="Build the career."
        text="A practical, certified Basic to Professional nail course in Vijay Nagar, Indore — products provided, live model practice and small batches."
        image="/images/academy.webp"
        position="center 20%"
      />
      <CourseSection />
      <ReviewsSection />
      <BookBand />
    </>
  )
}

export function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Before & after the appointment"
        title="Our work"
        accent="speaks."
        text="Extensions, French tips, ombré, chrome and hand-painted art — all created in our Vijay Nagar studio."
        image="/images/banner-gallery.webp"
      />
      <Gallery />
      <InstagramStrip />
      <BookBand />
    </>
  )
}

export function ReviewsPage() {
  return (
    <>
      <PageHero
        crumb="Reviews"
        eyebrow="Client love"
        title="Why clients"
        accent="keep returning."
        text="Rated 4.5★ from 107 Google reviews — by clients and by students of our academy."
        image="/images/banner-reviews.webp"
      />
      <ReviewsSection full />
      <BookBand />
    </>
  )
}

export function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Visit the studio"
        title="Come say"
        accent="hello."
        text="19 GM, Scheme No. 54, Vijay Nagar — opposite Meghdoot Garden. Open every day from 11 AM."
        image="/images/banner-contact.webp"
      />
      <ContactSection />
      <InstagramStrip />
    </>
  )
}

export function NotFoundPage() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-ink px-6 pt-28 text-center text-white">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-5 text-[clamp(3rem,8vw,6rem)]">
          Page <em className="text-rose-light">not found.</em>
        </h1>
        <p className="mx-auto mt-5 max-w-[420px] text-white/70">The page you're looking for doesn't exist — but your next favourite nail set does.</p>
        <Link to="/" className="btn-rose mt-9">
          Back to home
        </Link>
      </div>
    </section>
  )
}
