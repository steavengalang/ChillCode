import React from 'react'

const packages = [
  {
    name: 'Paket Basic',
    originalPrice: '100K-499K',
    discountedPrice: '80K-399K',
    discount: '20%',
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
    cta: 'Pilih Paket Basic',
    discountNote: 'Diskon Kemerdekaan 20%'
  },
  {
    name: 'Paket Standard',
    originalPrice: '500K-1.5M',
    discountedPrice: '400K-1.2M',
    discount: '20%',
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
    cta: 'Pilih Paket Standard',
    discountNote: 'Diskon Kemerdekaan 20%'
  },
  {
    name: 'Paket Premium',
    originalPrice: '2M-4M',
    discountedPrice: '1.6M-3.2M',
    discount: '20%',
    description: 'Website lengkap dengan fitur premium dan maintenance',
    features: [
      'Website 10-15 halaman (sesuai kebutuhan)',
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
    cta: 'Pilih Paket Premium',
    discountNote: 'Diskon Kemerdekaan 20%'
  },
  {
    name: 'Paket Custom',
    originalPrice: 'Custom',
    discountedPrice: 'Custom',
    discount: '15%',
    description: 'Website custom sesuai kebutuhan khusus',
    features: [
      'Fitur custom sesuai requirement',
      'Design eksklusif & unique',
      'Advanced functionality',
      'Integration dengan sistem existing',
      'Custom database design',
      'API development',
      'Advanced security features',
      'Custom admin panel',
      'Multi-language support',
      'Advanced analytics',
      'Custom payment gateway',
      'Priority development team',
      'Dedicated project manager',
      'Unlimited revisions',
      'Lifetime support'
    ],
    timeline: '2-8 minggu',
    popular: false,
    cta: 'Konsultasi Custom',
    discountNote: 'Diskon Kemerdekaan 15%',
    isCustom: true
  }
]

export default function Services() {
  const isDiscountActive = () => {
    const now = new Date()
    const endDate = new Date('2025-08-24')
    return now <= endDate
  }

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Pilih Paket yang Tepat
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Kami menyediakan 4 paket yang bisa disesuaikan dengan kebutuhan dan budget Anda. 
            Semua paket sudah include hosting dan support.
          </p>
          
          {/* Independence Day Discount Banner */}
          {isDiscountActive() && (
            <div className="mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-3xl">🇮🇩</span>
                <h3 className="text-2xl font-bold">Diskon Kemerdekaan!</h3>
                <span className="text-3xl">🎉</span>
              </div>
              <p className="text-lg mb-3">
                Rayakan kemerdekaan dengan diskon spesial hingga <span className="font-bold text-yellow-300">20%</span> untuk semua paket!
              </p>
              <p className="text-sm opacity-90">
                Berlaku sampai <span className="font-semibold">24 Agustus 2025</span>
              </p>
            </div>
          )}
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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

              {isDiscountActive() && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {pkg.discount} OFF
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-graytext-900 mb-2">{pkg.name}</h3>
                
                {pkg.isCustom ? (
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-primary-700">Custom Price</div>
                    <div className="text-sm text-graytext-500">Sesuai kompleksitas</div>
                  </div>
                ) : (
                  <div className="mb-2">
                    {isDiscountActive() ? (
                      <>
                        <div className="text-4xl font-bold text-primary-700">
                          Rp {pkg.discountedPrice}
                        </div>
                        <div className="text-lg text-graytext-500 line-through">
                          Rp {pkg.originalPrice}
                        </div>
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-primary-700">
                        Rp {pkg.originalPrice}
                      </div>
                    )}
                  </div>
                )}
                
                <p className="text-graytext-600 mb-4">{pkg.description}</p>
                <div className="text-sm text-graytext-500">
                  ⏱️ Pengerjaan: {pkg.timeline}
                </div>
                
                {isDiscountActive() && !pkg.isCustom && (
                  <div className="mt-2 text-sm text-red-600 font-medium bg-red-50 px-3 py-1 rounded-lg">
                    {pkg.discountNote}
                  </div>
                )}
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

        {/* Timeline Complexity Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-graytext-900">
            Timeline Berdasarkan Kompleksitas
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">3-5 Hari</div>
              <div className="text-graytext-600">Landing Page</div>
              <div className="text-sm text-graytext-500 mt-1">Simple & Basic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">7-10 Hari</div>
              <div className="text-graytext-600">Multi-page</div>
              <div className="text-sm text-graytext-500 mt-1">Medium Complexity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">10-14 Hari</div>
              <div className="text-graytext-600">Website Premium</div>
              <div className="text-sm text-graytext-500 mt-1">Paket Premium</div>
              <div className="text-sm text-graytext-400 mt-1">10-15 Halaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">2-8 Minggu</div>
              <div className="text-graytext-600">Custom Project</div>
              <div className="text-sm text-graytext-500 mt-1">Very High Complexity</div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {[
            ['⚡', 'Performance tinggi', 'Website loading <3 detik'],
            ['🔍', 'SEO-friendly', 'Optimized untuk search engine'],
            ['📱', 'Mobile responsive', 'Perfect di semua device'],
            ['🛠️', 'Teknologi terdepan', 'React, Next.js, modern stack'],
            ['💰', 'Harga terjangkau', 'Mulai dari 80K dengan diskon'],
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
            {isDiscountActive() 
              ? 'Manfaatkan diskon kemerdekaan sekarang! Konsultasi gratis.'
              : 'Tidak yakin paket mana yang cocok? Konsultasi gratis dulu!'
            }
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


