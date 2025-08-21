import React from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#problem-solution', label: 'Masalah & Solusi' },
    { href: '#services', label: 'Paket' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#why-choose', label: 'Kenapa Kami' },
    { href: '#process', label: 'Proses' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontak' }
  ]

  const services = [
    'Landing Page (80K-400K)',
    'Website Multi-page (400K-1.2M)',
    'Website Premium (1.2M-3.2M)',
    'Custom Development',
    'SEO Optimization',
    'Maintenance & Support'
  ]

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'chillcodecs@gmail.com' },
    { icon: '📱', label: 'WhatsApp', value: '+62 812-3456-7890' },
    { icon: '📍', label: 'Lokasi', value: 'Jakarta, Indonesia' },
    { icon: '🕒', label: 'Jam Kerja', value: 'Senin - Jumat: 09:00-18:00 WIB' }
  ]

  return (
    <footer className="mt-24 border-t bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ChillCode" className="h-12 w-12 rounded" />
              <span className="font-bold text-2xl text-primary-400">ChillCode</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Jasa pembuatan website profesional dengan harga terjangkau. 
              Kami membantu UMKM dan startup memiliki website yang modern, 
              SEO-friendly, dan siap mengembangkan bisnis.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
              >
                <span>📱</span>
                Chat WhatsApp
              </a>
              <a 
                href="#contact" 
                className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Informasi Kontak</h3>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-xl">{info.icon}</span>
                  <div>
                    <div className="font-medium text-gray-300">{info.label}</div>
                    <div className="text-gray-400">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Guarantee */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Komitmen Kami</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Garansi Revisi 30 Hari</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Timeline Terjamin</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Support 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Kualitas Premium</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ChillCode. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#sitemap" className="hover:text-primary-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


