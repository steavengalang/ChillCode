import React from 'react'

export default function ProblemSolution() {
  const problems = [
    {
      icon: '💸',
      title: 'Website Mahal',
      description: 'Biaya pembuatan website yang tidak terjangkau untuk UMKM',
      pain: 'Budget terbatas, ROI tidak jelas'
    },
    {
      icon: '⏰',
      title: 'Proses Ribet',
      description: 'Banyak meeting, revisi berulang, timeline tidak jelas',
      pain: 'Waktu terbuang, stress berlebihan'
    },
    {
      icon: '🐌',
      title: 'Pengerjaan Lama',
      description: 'Project stuck di tengah jalan, deadline molor',
      pain: 'Bisnis tidak bisa jalan, opportunity hilang'
    }
  ]

  const solutions = [
    {
      icon: '💰',
      title: 'Harga Terjangkau',
      description: 'Mulai dari 100K dengan kualitas premium',
      benefit: 'ROI cepat, budget efisien'
    },
    {
      icon: '⚡',
      title: 'Proses Simple',
      description: '3 tahap kerja, timeline jelas, revisi gratis',
      benefit: 'Hemat waktu, hasil maksimal'
    },
    {
      icon: '🚀',
      title: 'Delivery Cepat',
      description: 'Landing page 3-5 hari, website lengkap 7-14 hari',
      benefit: 'Bisnis bisa jalan segera'
    }
  ]

  return (
    <section id="problem-solution" className="section bg-gradient-to-r from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Masalah Umum Pembuatan Website
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Kami paham betul masalah yang sering dihadapi UMKM. 
            Itulah kenapa kami hadir dengan solusi yang berbeda.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-red-600">
            ❌ Yang Sering Dialami
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="card border-l-4 border-red-500 hover:border-red-600 transition-colors">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-graytext-900">{problem.title}</h4>
                <p className="text-graytext-700 mb-3">{problem.description}</p>
                <div className="text-sm text-red-600 font-medium">
                  💔 {problem.pain}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-green-600">
            ✅ Solusi dari ChillCode
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="card border-l-4 border-green-500 hover:border-green-600 transition-colors bg-gradient-to-br from-green-50 to-white">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-graytext-900">{solution.title}</h4>
                <p className="text-graytext-700 mb-3">{solution.description}</p>
                <div className="text-sm text-green-600 font-medium">
                  🎯 {solution.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-graytext-900">
            Perbandingan dengan Kompetitor
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-graytext-900">Fitur</th>
                  <th className="text-center py-4 px-4 font-semibold text-red-600">Kompetitor</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-600">ChillCode</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Harga Mulai</td>
                  <td className="py-4 px-4 text-center text-red-600">500K+</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">80K</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Timeline</td>
                  <td className="py-4 px-4 text-center text-red-600">1-3 bulan</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">3-14 hari</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Revisi</td>
                  <td className="py-4 px-4 text-center text-red-600">Berbayar</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">Gratis</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Support</td>
                  <td className="py-4 px-4 text-center text-red-600">Terbatas</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">24/7</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Garansi</td>
                  <td className="py-4 px-4 text-center text-red-600">Tidak ada</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">30 hari</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-lg text-graytext-700 mb-6">
            Sudah siap untuk website yang berbeda?
          </p>
          <a href="#contact" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
