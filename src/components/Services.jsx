import React from 'react'

const packages = [
  {
    name: 'Paket Basic',
    price: '100K',
    description: 'Landing page simple untuk bisnis baru',
    features: [
      'Landing page responsive (1 halaman)',
      'Design modern & clean',
      'SEO optimized',
      'Contact form',
      'Fast loading (<3 detik)',
      'Mobile friendly',
      'Social media integration',
      'Google Analytics setup'
    ],
    timeline: '3-5 hari',
    popular: false,
    cta: 'Pilih Paket Basic'
  },
  {
    name: 'Paket Standard',
    price: '300K',
    description: 'Multi-page website dengan fitur lengkap',
    features: [
      'Website 3-5 halaman',
      'Design modern & professional',
      'SEO optimized',
      'Contact form + WhatsApp',
      'Fast loading (<3 detik)',
      'Mobile responsive',
      'Social media integration',
      'Google Analytics + Search Console',
      'Blog section',
      'Image optimization',
      'Basic admin panel',
      'Free hosting 1 tahun'
    ],
    timeline: '7-10 hari',
    popular: true,
    cta: 'Pilih Paket Standard'
  },
  {
    name: 'Paket Premium',
    price: '500K',
    description: 'Website lengkap dengan maintenance',
    features: [
      'Website unlimited halaman',
      'Design custom sesuai brand',
      'Advanced SEO optimization',
      'Advanced contact forms',
      'Performance optimization',
      'Mobile-first design',
      'Social media integration',
      'Google Analytics + Tag Manager',
      'Blog dengan CMS',
      'Image & video optimization',
      'Advanced admin panel',
      'Free hosting + domain 1 tahun',
      'Maintenance 3 bulan',
      'Priority support 24/7',
      'Performance monitoring'
    ],
    timeline: '10-14 hari',
    popular: false,
    cta: 'Pilih Paket Premium'
  }
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Pilih Paket yang Tepat
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Kami menyediakan 3 paket yang bisa disesuaikan dengan kebutuhan dan budget Anda. 
            Semua paket sudah include hosting dan support.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`card relative ${pkg.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    ⭐ Paling Populer
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-graytext-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary-700 mb-2">
                  Rp {pkg.price}
                </div>
                <p className="text-graytext-600 mb-4">{pkg.description}</p>
                <div className="text-sm text-graytext-500">
                  ⏱️ Pengerjaan: {pkg.timeline}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                    <span className="text-graytext-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="w-full btn-primary text-center">
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {[
            ['⚡', 'Performance tinggi', 'Website loading <3 detik'],
            ['🔍', 'SEO-friendly', 'Optimized untuk search engine'],
            ['📱', 'Mobile responsive', 'Perfect di semua device'],
            ['🛠️', 'Teknologi terdepan', 'React, Next.js, modern stack'],
            ['💰', 'Harga terjangkau', 'Mulai dari 100K'],
            ['🕒', 'Pengerjaan cepat', 'Timeline jelas & terjamin']
          ].map(([icon, text, desc], i) => (
            <div className="card text-center" key={text} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="text-3xl mb-3">{icon}</div>
              <div className="font-semibold text-graytext-900 mb-2">{text}</div>
              <div className="text-sm text-graytext-600">{desc}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-graytext-900">
            Tech Stack Modern
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
              'Tailwind CSS', 'Node.js', 'MySQL', 'MongoDB', 'Vercel', 'Netlify'
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-graytext-700 hover:border-primary-300 hover:bg-primary-50 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-lg text-graytext-700 mb-6">
            Tidak yakin paket mana yang cocok? Konsultasi gratis dulu!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
              Konsultasi Gratis
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="btn-secondary text-lg px-8 py-4">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


