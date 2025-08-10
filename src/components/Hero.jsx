import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import logo from '../assets/logo.png'

export default function Hero() {
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        'Website Profesional Mulai dari 100K',
        'Cepat, Modern, SEO-friendly',
        'Siap Bantu Bisnis Anda Tumbuh',
      ],
      typeSpeed: 45,
      backSpeed: 25,
      loop: true,
    })
    return () => typedInstance.current?.destroy()
  }, [])

  return (
    <section id="home" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-up" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-graytext-900">
            <span ref={typedRef} />
          </h1>
          <p className="text-graytext-700">
            Kami membangun website modern dengan performa tinggi, desain minimalis, dan struktur SEO yang kuat. Mulai dari landing page, company profile, hingga e-commerce.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Mulai Project</a>
            <a href="#portfolio" className="btn-secondary">Lihat Portfolio</a>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <Stat label="Projects" value="120+" />
            <Stat label="Clients" value="80+" />
            <Stat label="Rating" value="4.9/5" />
          </div>
        </div>
        <div data-aos="fade-left" className="relative">
          <div className="aspect-[4/3] rounded-3xl glass" />
          <img src={logo} alt="ChillCode" className="absolute inset-0 m-auto w-40 opacity-90" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary-700">{value}</div>
      <div className="text-graytext-500">{label}</div>
    </div>
  )
}


