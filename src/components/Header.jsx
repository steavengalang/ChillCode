import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#problem-solution', label: 'Masalah & Solusi' },
    { href: '#services', label: 'Paket' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#why-choose', label: 'Kenapa Kami' },
    { href: '#process', label: 'Proses' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="ChillCode" className="h-10 w-10 rounded group-hover:scale-110 transition-transform" loading="eager" />
          <span className="font-bold text-primary-800 text-xl">ChillCode</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-graytext-700 hover:text-primary-700 font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-graytext-700 hover:text-primary-700 font-medium transition-colors">
            WhatsApp
          </a>
          <a href="#contact" className="btn-primary hover:scale-105 transition-transform">
            Konsultasi Gratis
          </a>
        </div>

        <button 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
          onClick={() => setOpen((v) => !v)} 
          aria-label="Toggle Menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white/95 backdrop-blur">
          <div className="container py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="py-3 px-4 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="border-t border-gray-200 mt-4 pt-4 space-y-3">
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  <span>📱</span>
                  Chat WhatsApp
                </a>
                <a 
                  href="#contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setOpen(false)}
                >
                  Konsultasi Gratis
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


