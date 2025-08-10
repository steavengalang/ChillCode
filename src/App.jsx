import React, { Suspense, lazy, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { defaultSEO, buildJsonLd } from './utils/seo'

const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-quart' })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-100 to-white text-graytext-900">
      <Helmet>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta name="keywords" content={defaultSEO.keywords} />
        <script type="application/ld+json">{JSON.stringify(buildJsonLd())}</script>
      </Helmet>

      <Header />

      <Suspense fallback={<div className="container py-24">Loading...</div>}>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </Suspense>

      <Footer />

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 btn-primary rounded-full shadow-lg"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}


