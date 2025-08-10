import React from 'react'

const services = [
  {
    title: 'Paket Landing Page - 100K',
    features: ['Responsive design', 'SEO optimized', 'Contact form', 'Fast loading'],
  },
  {
    title: 'Paket Company Profile - 250K',
    features: ['Multi-page website', 'Admin panel', 'Gallery/portfolio', 'Blog system'],
  },
  {
    title: 'Paket E-Commerce - 500K',
    features: ['Online store', 'Payment gateway', 'Product management', 'Analytics dashboard'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">Layanan Kami</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div className="card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="text-xl font-semibold mb-4 text-primary-800">{svc.title}</h3>
              <ul className="space-y-2 text-graytext-700">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-700" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary mt-6 inline-block">Pilih Paket</a>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            ['⚡', 'Performance tinggi'],
            ['🔍', 'SEO-friendly'],
            ['📱', 'Mobile responsive'],
            ['🛠️', 'Teknologi terdepan'],
            ['💰', 'Harga terjangkau'],
            ['🕒', 'Pengerjaan cepat'],
          ].map(([icon, text], i) => (
            <div className="card" key={text} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="text-2xl">{icon}</div>
              <div className="font-medium text-graytext-700">{text}</div>
            </div>
          ))}
        </div>

        <section id="tech" className="section pt-0">
          <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">Tech Stack</h3>
          <div className="flex flex-wrap gap-3" data-aos="fade-up">
            {['HTML5','CSS3','JavaScript','TypeScript','React','Vite','Next.js','Node.js','MySQL','MongoDB'].map((t)=> (
              <span key={t} className="px-4 py-2 rounded-full border bg-white shadow-sm">{t}</span>
            ))}
          </div>
        </section>

        <section id="process" className="section pt-0">
          <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">Proses Kerja</h3>
          <ol className="grid md:grid-cols-3 gap-4 list-decimal list-inside">
            {[
              'Konsultasi - Diskusi kebutuhan',
              'Design - Mockup dan approval',
              'Development - Coding dengan tech modern',
              'Testing - Quality assurance',
              'Launch - Go live dan training',
              'Support - Maintenance dan update',
            ].map((step, i) => (
              <li key={i} className="card" data-aos="fade-up" data-aos-delay={i*50}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="testimonials" className="section pt-0">
          <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({length:3}).map((_,i)=> (
              <div className="card" key={i} data-aos="fade-up" data-aos-delay={i*100}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-secondary-200" />
                  <div>
                    <div className="font-medium">Client {i+1}</div>
                    <div className="text-xs text-graytext-500">Company {i+1}</div>
                  </div>
                </div>
                <div className="text-yellow-500">★★★★★</div>
                <p className="text-graytext-700 mt-2">Pelayanan cepat dan hasil website memuaskan!</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}


