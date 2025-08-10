import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="ChillCode" className="h-10 w-10 rounded" loading="eager" />
          <span className="font-bold text-primary-800 text-xl">ChillCode</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-graytext-700 hover:text-primary-700">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">Get Started</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}


