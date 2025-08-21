import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import logo from '../assets/logo.png'

export default function Hero() {
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        'Website Profesional Tanpa Ribet, Mulai 100K',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
            Mulai dari 80K
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-graytext-900">
            <span className="text-primary-700">Website Profesional</span><br />
            <span ref={typedRef} />
          </h1>
          
          <p className="text-xl text-graytext-700 leading-relaxed">
            Kami membangun website modern dengan performa tinggi, desain minimalis, dan struktur SEO yang kuat. 
            <span className="font-semibold text-primary-700"> Proses simple, hasil maksimal!</span>
          </p>
          
          {/* Independence Day Discount Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            <span className="text-red-600">🇮🇩</span>
            Diskon Kemerdekaan 20% - Berlaku sampai 24 Agustus 2025
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
              Konsultasi Gratis Sekarang
            </a>
            <a href="#portfolio" className="btn-secondary text-lg px-8 py-4">
              Lihat Portfolio
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <Stat label="Projects Selesai" value="120+" />
            <Stat label="Client Puas" value="80+" />
            <Stat label="Rating" value="4.9/5" />
          </div>
        </div>
        
        <div data-aos="fade-left" className="relative">
          <div className="aspect-[4/3] rounded-3xl glass relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-secondary-100/20"></div>
            <img src={logo} alt="ChillCode" className="absolute inset-0 m-auto w-40 opacity-90" loading="lazy" />
            
            {/* Floating elements for visual appeal */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
            <div className="absolute bottom-8 left-6 w-12 h-12 bg-primary-200/30 rounded-full backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-4 w-8 h-8 bg-secondary-200/40 rounded-full backdrop-blur-sm"></div>
          </div>
          
          {/* Trust badges */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-graytext-700 shadow-lg">
              ⚡ Fast Loading
            </div>
            <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-graytext-700 shadow-lg">
              📱 Mobile First
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary-700">{value}</div>
      <div className="text-graytext-500 text-sm">{label}</div>
    </div>
  )
}


