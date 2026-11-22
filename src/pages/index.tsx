import { Link } from 'react-router-dom'
import { BookBand, PageHero } from '../components/Blocks'
import { Gallery } from '../components/Gallery'
import {
  AboutSplit,
  AcademyCertificatesShowcase,
  AcademyTeaser,
  BridalSpecialSection,
  ContactSection,
  CourseSection,
  DualVerticalsSection,
  FeaturedDesignsSection,
  HomeHero,
  InstagramStrip,
  Marquee,
  MenuSection,
  Pillars,
  ReviewsSection,
  ServicesShowcase,
  WeddingSpecialBanner,
  WorkStrip,
} from '../components/Sections'

/* One page per nav button. Home is the summary that leads into the others. */

export function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <DualVerticalsSection />
      <FeaturedDesignsSection />
      <WeddingSpecialBanner />
      <BridalSpecialSection />
      <AcademyCertificatesShowcase />
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
        image="/images/real-burgundy-polka-silk.jpg"
      />
      <AboutSplit cta={{ label: 'See our services', to: '/services' }} />
      <DualVerticalsSection />
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
        eyebrow="Wedding Season Special"
        title="The Nitya"
        accent="signature sets."
        text="Gel, acrylic & Korean extensions from ₹249, custom 3D nail art, and our signature Cat Eye Bridal Package @ ₹2,100."
        image="/images/real-art-3d-floral.jpg"
      />
      <DualVerticalsSection />
      <FeaturedDesignsSection />
      <WeddingSpecialBanner />
      <BridalSpecialSection />
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
        crumb="Menu & Offers"
        eyebrow="Wedding Season Special Rates"
        title="The Nitya"
        accent="service menu."
        text="Transparent rates for extensions from ₹249, overlays with free polish from ₹699, toe care from ₹399, and the complete Bridal Package @ ₹2,100."
        image="/images/real-nude-gold-contour.jpg"
      />
      <FeaturedDesignsSection />
      <WeddingSpecialBanner />
      <BridalSpecialSection />
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
        eyebrow="Bumper Offer @ ₹8,500 Only"
        title="Learn the craft."
        accent="Build the career."
        text="Practical Basic to Professional course in Vijay Nagar, Indore — 40+ nail art techniques, all products provided, live models & certificate. Save ₹1,500 on this limited batch."
        image="/images/academy/academy-01.jpeg"
        position="center 20%"
      />
      <DualVerticalsSection />
      <AcademyCertificatesShowcase />
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
        image="/images/real-matte-gloss-black.jpg"
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
        image="/images/real-french-polka-flower.jpg"
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
        text="19 GM & 247 FH, Scheme No. 54, Vijay Nagar — opposite Meghdoot Garden. Open every day from 11 AM."
        image="/images/real-toe-pink-rings.jpg"
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
        <Link to="/" className="group mb-6 inline-block" aria-label="Back to home">
          <img
            src="/images/logo.jpg"
            alt="Nitya Nail Art & Academy"
            className="mx-auto h-20 w-20 rounded-full border border-white/20 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
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
