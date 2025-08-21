import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    budget: '',
    message: '' 
  })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Mengirim...')
    setTimeout(() => setStatus('Terkirim! Kami akan segera menghubungi Anda dalam 2 jam kerja.'), 800)
  }

  const contactMethods = [
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Chat langsung dengan tim kami',
      action: 'Chat Sekarang',
      link: 'https://wa.me/6281234567890',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'Kirim detail project lengkap',
      action: 'Kirim Email',
      link: 'mailto:chillcodecs@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ]

  const budgetOptions = [
    '80K - 400K',
    '400K - 1.2M',
    '1.2M - 3.2M',
    '3.2M+',
    'Custom Project',
    'Belum tentu'
  ]

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Mulai Project Website Anda
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Konsultasi gratis, tidak ada kewajiban order. 
            Tim kami siap membantu mewujudkan website impian untuk bisnis Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card bg-white" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6 text-graytext-900">
              📝 Form Konsultasi
            </h3>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-graytext-600 font-medium">Nama Lengkap *</span>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={onChange} 
                    required 
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors" 
                    placeholder="Masukkan nama lengkap"
                  />
                </label>
                
                <label className="block">
                  <span className="text-sm text-graytext-600 font-medium">Email *</span>
                  <input 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={onChange} 
                    required 
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors" 
                    placeholder="email@example.com"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-graytext-600 font-medium">Nomor Telepon</span>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={onChange} 
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors" 
                    placeholder="0812-3456-7890"
                  />
                </label>
                
                <label className="block">
                  <span className="text-sm text-graytext-600 font-medium">Nama Perusahaan</span>
                  <input 
                    name="company" 
                    value={form.company} 
                    onChange={onChange} 
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors" 
                    placeholder="Nama perusahaan/bisnis"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-graytext-600 font-medium">Budget Project</span>
                <select 
                  name="budget" 
                  value={form.budget} 
                  onChange={onChange} 
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                >
                  <option value="">Pilih budget</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm text-graytext-600 font-medium">Detail Project *</span>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={form.message} 
                  onChange={onChange} 
                  required 
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors" 
                  placeholder="Ceritakan kebutuhan website Anda, fitur yang diinginkan, timeline, dll..."
                />
              </label>

              <button 
                className="w-full btn-primary text-lg py-4 hover:scale-105 transition-transform" 
                type="submit"
              >
                Kirim Konsultasi Gratis
              </button>
              
              {status && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl text-center">
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-graytext-900 mb-6">
                💬 Pilih Cara Kontak
              </h3>
              
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noreferrer' : undefined}
                  className={`${method.color} text-white p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-2xl">{method.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold">{method.title}</div>
                    <div className="text-sm opacity-90">{method.description}</div>
                  </div>
                  <div className="font-medium">{method.action}</div>
                </a>
              ))}
            </div>

            {/* Response Time Commitment */}
            <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <h4 className="text-xl font-semibold mb-4">⏰ Komitmen Response Time</h4>
              <div className="space-y-3 text-primary-100">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  WhatsApp: <span className="text-white font-medium">Max 30 menit</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Email: <span className="text-white font-medium">Max 2 jam kerja</span>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="card bg-white">
              <h4 className="text-xl font-semibold mb-4 text-graytext-900">🏢 Tentang ChillCode</h4>
              <div className="space-y-3 text-graytext-700">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">📍</span>
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">🕒</span>
                  <span>Senin - Jumat: 09:00 - 18:00 WIB</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">📱</span>
                  <span>Weekend: WhatsApp 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">✅</span>
                  <span>120+ Project Berhasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-xl p-8 inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-graytext-900">
              Masih Ragu?
            </h3>
            <p className="text-graytext-700 mb-6">
              Konsultasi gratis, tidak ada kewajiban order. 
              Mari diskusikan kebutuhan website Anda tanpa tekanan.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


