import { useEffect, useLayoutEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { NOT_FOUND_META, PAGE_META } from './data/site'
import { useReveal } from './hooks/useReveal'
import { AboutPage, AcademyPage, ContactPage, GalleryPage, HomePage, MenuPage, NotFoundPage, ReviewsPage, ServicesPage } from './pages'

// useLayoutEffect warns during server rendering; fall back to useEffect there.
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** On each page change: jump to top (or to #section), and update <title> + meta description. */
function PageChrome() {
  const { pathname, hash } = useLocation()

  useIsoLayoutEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  useEffect(() => {
    const meta = PAGE_META[pathname.replace(/\/$/, '') || '/'] ?? NOT_FOUND_META
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])

  return null
}

function Layout() {
  useReveal()
  return (
    <>
      <PageChrome />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="academy" element={<AcademyPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
