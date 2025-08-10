import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Mengirim...')
    setTimeout(() => setStatus('Terkirim! Kami akan segera menghubungi Anda.'), 800)
  }

  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-10">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-graytext-700 mb-6">
            Konsultasi gratis untuk kebutuhan website Anda. Kami siap membantu dari perencanaan hingga launching.
          </p>
          <div className="space-y-3 text-graytext-700">
            <div>Email: chillcodecs@gmail.com</div>
            <div>WhatsApp: 081228435753</div>
            <div>Alamat: Indonesia</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card" data-aos="fade-left">
          <label className="block mb-3">
            <span className="text-sm text-graytext-500">Nama</span>
            <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-xl border p-3" />
          </label>
          <label className="block mb-3">
            <span className="text-sm text-graytext-500">Email</span>
            <input name="email" type="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl border p-3" />
          </label>
          <label className="block mb-3">
            <span className="text-sm text-graytext-500">Pesan</span>
            <textarea name="message" rows="4" value={form.message} onChange={onChange} required className="mt-1 w-full rounded-xl border p-3" />
          </label>

          <button className="btn-primary" type="submit">Kirim</button>
          {status && <div className="mt-3 text-sm text-primary-800">{status}</div>}
        </form>
      </div>
    </section>
  )
}


