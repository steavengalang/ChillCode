import React from 'react'

export default function WhyChoose() {
  const reasons = [
    {
      icon: '👥',
      title: 'Tim Berpengalaman',
      description: 'Tim developer dan designer yang sudah berpengalaman lebih dari 5 tahun di industri web development',
      detail: '120+ project berhasil, 80+ client puas'
    },
    {
      icon: '📋',
      title: 'Proses Kerja yang Jelas',
      description: 'Workflow yang terstruktur dan transparan, dari awal sampai launch',
      detail: 'Timeline jelas, progress update rutin'
    },
    {
      icon: '🛠️',
      title: 'After-Sales Support',
      description: 'Support 24/7 untuk maintenance, update, dan troubleshooting',
      detail: 'Tidak ada yang ditinggal setelah project selesai'
    },
    {
      icon: '✅',
      title: 'Garansi Revisi',
      description: 'Revisi gratis selama 30 hari setelah project selesai',
      detail: 'Kepuasan client adalah prioritas utama'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Pengerjaan cepat dengan kualitas tetap terjaga',
      detail: 'Landing page 3-5 hari, website lengkap 7-14 hari'
    },
    {
      icon: '💎',
      title: 'Kualitas Premium',
      description: 'Menggunakan teknologi terdepan dan best practices industry',
      detail: 'Performance tinggi, SEO optimized, mobile-first'
    }
  ]

  const stats = [
    { label: 'Tahun Pengalaman', value: '5+' },
    { label: 'Project Selesai', value: '120+' },
    { label: 'Client Puas', value: '80+' },
    { label: 'Rating', value: '4.9/5' }
  ]

  return (
    <section id="why-choose" className="section bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Kenapa Pilih ChillCode?
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Kami bukan hanya jasa pembuatan website biasa. 
            Kami adalah partner yang peduli dengan kesuksesan bisnis Anda.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="card bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-graytext-900">{reason.title}</h3>
              <p className="text-graytext-700 mb-3 leading-relaxed">{reason.description}</p>
              <div className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-2 rounded-lg inline-block">
                {reason.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-graytext-900">
            Track Record Kami
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary-700 mb-2">{stat.value}</div>
                <div className="text-graytext-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Building Elements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" data-aos="fade-up">
          <div className="card bg-white">
            <h3 className="text-2xl font-semibold mb-6 text-graytext-900">
              🏆 Komitmen Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <span className="font-medium">Quality Guarantee</span>
                  <p className="text-sm text-graytext-600">Website sesuai standar industry modern</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <span className="font-medium">On-Time Delivery</span>
                  <p className="text-sm text-graytext-600">Deadline dijamin atau uang kembali</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <span className="font-medium">Lifetime Support</span>
                  <p className="text-sm text-graytext-600">Bantuan teknis selamanya</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card bg-white">
            <h3 className="text-2xl font-semibold mb-6 text-graytext-900">
              💼 Keunggulan
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">⚡</span>
                <div>
                  <span className="font-medium">Fast Performance</span>
                  <p className="text-sm text-graytext-600">Loading time <3 detik</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">🔍</span>
                <div>
                  <span className="font-medium">SEO Optimized</span>
                  <p className="text-sm text-graytext-600">Siap ranking di Google</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">📱</span>
                <div>
                  <span className="font-medium">Mobile First</span>
                  <p className="text-sm text-graytext-600">Perfect di semua device</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-xl p-8 inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-graytext-900">
              Siap Mulai Project?
            </h3>
            <p className="text-graytext-700 mb-6">
              Konsultasi gratis, tidak ada kewajiban. Mari diskusikan kebutuhan website Anda.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
                Konsultasi Gratis Sekarang
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="btn-secondary text-lg px-8 py-4">
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
