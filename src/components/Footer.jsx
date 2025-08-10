import React from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-white">
      <div className="container grid md:grid-cols-4 gap-8 py-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="ChillCode" className="h-8 w-8" />
            <span className="font-bold text-primary-800">ChillCode</span>
          </div>
          <p className="text-sm text-graytext-700">Website profesional, cepat, dan SEO-friendly.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            <li>Landing Page</li>
            <li>Company Profile</li>
            <li>E-Commerce</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>Email: hello@chillcode.dev</li>
            <li>WhatsApp: +62 812-3456-7890</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm">© {new Date().getFullYear()} ChillCode</div>
    </footer>
  )
}


