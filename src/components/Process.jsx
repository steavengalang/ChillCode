import React from 'react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Konsultasi Gratis',
      description: 'Diskusi kebutuhan, budget, dan timeline project',
      details: [
        'Analisis kebutuhan bisnis',
        'Rekomendasi paket yang cocok',
        'Estimasi budget dan timeline',
        'Penjelasan proses kerja'
      ],
      timeline: '1-2 hari',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Pembuatan mockup dan coding website',
      details: [
        'Wireframe dan mockup design',
        'Approval dari client',
        'Development dengan tech modern',
        'Testing dan optimization'
      ],
      timeline: '3-14 hari',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Review & Revisi',
      description: 'Client review dan revisi sesuai feedback',
      details: [
        'Demo website lengkap',
        'Client review dan feedback',
        'Revisi sesuai permintaan',
        'Final approval'
      ],
      timeline: '1-3 hari',
      icon: '✅'
    },
    {
      number: '04',
      title: 'Launch & Handover',
      description: 'Website go live dan training client',
      details: [
        'Deploy ke hosting',
        'Setup domain dan SSL',
        'Training penggunaan admin',
        'Handover dokumentasi'
      ],
      timeline: '1 hari',
      icon: '🚀'
    }
  ]

  const guarantees = [
    {
      icon: '⏰',
      title: 'Timeline Jelas',
      description: 'Setiap step ada deadline yang dijamin'
    },
    {
      icon: '🔄',
      title: 'Revisi Gratis',
      description: '30 hari garansi revisi tanpa biaya tambahan'
    },
    {
      icon: '📱',
      title: 'Progress Update',
      description: 'Update rutin setiap 2-3 hari'
    },
    {
      icon: '🎯',
      title: 'Quality Assured',
      description: 'Testing menyeluruh sebelum delivery'
    }
  ]

  return (
    <section id="process" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Bagaimana Kami Bekerja?
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Proses kerja yang simple, transparan, dan terjamin. 
            Kami akan update progress setiap step agar Anda selalu tahu status project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative"
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              {/* Connection Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="card bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-700 rounded-full text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-graytext-900">{step.title}</h3>
                  <p className="text-graytext-600 mb-3">{step.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    ⏱️ {step.timeline}
                  </div>
                </div>

                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-graytext-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Visual */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-100 rounded-2xl p-8 mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-graytext-900">
            Flow Project Website
          </h3>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4 text-sm text-graytext-600">
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Konsultasi</span>
              <span className="text-primary-500">→</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Design</span>
              <span className="text-primary-500">→</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Development</span>
              <span className="text-primary-500">→</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Testing</span>
              <span className="text-primary-500">→</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Launch</span>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          {guarantees.map((guarantee, idx) => (
            <div className="card text-center bg-gradient-to-br from-green-50 to-white border-green-200" key={idx}>
              <div className="text-3xl mb-3">{guarantee.icon}</div>
              <h4 className="font-semibold text-graytext-900 mb-2">{guarantee.title}</h4>
              <p className="text-sm text-graytext-600">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-graytext-900">
            Timeline Project Berdasarkan Kompleksitas
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">3-5 Hari</div>
              <div className="text-graytext-600">Landing Page</div>
              <div className="text-sm text-graytext-500 mt-1">Paket Basic</div>
              <div className="text-sm text-graytext-400 mt-1">Simple & Basic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">7-10 Hari</div>
              <div className="text-graytext-600">Website Multi-page</div>
              <div className="text-sm text-graytext-500 mt-1">Paket Standard</div>
              <div className="text-sm text-graytext-400 mt-1">Medium Complexity</div>
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
              <div className="text-sm text-graytext-500 mt-1">Paket Custom</div>
              <div className="text-sm text-graytext-400 mt-1">Very High Complexity</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary-50 rounded-xl">
            <h4 className="font-semibold text-primary-800 mb-2 text-center">💡 Info Timeline</h4>
            <p className="text-sm text-primary-700 text-center">
              Semakin kompleks fitur dan requirement, semakin lama waktu pengerjaan. 
              Tim kami akan memberikan estimasi timeline yang akurat saat konsultasi.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Siap Mulai Project?
            </h3>
            <p className="text-primary-100 mb-6">
              Konsultasi gratis hari ini, website siap dalam 2 minggu!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Mulai Konsultasi
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-700 transition-colors">
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
