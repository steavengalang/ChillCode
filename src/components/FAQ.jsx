import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Berapa lama pengerjaan website?',
      answer: 'Timeline tergantung paket yang dipilih: Paket Basic (3-5 hari), Paket Standard (7-10 hari), dan Paket Premium (10-14 hari). Kami akan update progress setiap 2-3 hari.'
    },
    {
      question: 'Apakah include hosting dan domain?',
      answer: 'Ya, semua paket sudah include hosting. Untuk Paket Premium, domain juga sudah include. Hosting yang kami gunakan adalah Vercel dengan performa tinggi dan uptime 99.9%.'
    },
    {
      question: 'Bagaimana proses revisi?',
      answer: 'Kami memberikan garansi revisi gratis selama 30 hari setelah project selesai. Revisi bisa berupa perubahan design, content, atau fitur yang sudah disepakati di awal.'
    },
    {
      question: 'Apakah ada maintenance setelah launch?',
      answer: 'Ya, untuk Paket Premium kami memberikan maintenance gratis selama 3 bulan. Setelah itu, maintenance bisa dilanjutkan dengan biaya tambahan atau Anda bisa handle sendiri.'
    },
    {
      question: 'Bisakah website diubah sendiri setelah selesai?',
      answer: 'Tentu! Kami akan training cara menggunakan admin panel. Website menggunakan CMS yang user-friendly, sehingga Anda bisa update content, gambar, dan beberapa fitur tanpa perlu coding.'
    },
    {
      question: 'Apakah website sudah SEO optimized?',
      answer: 'Ya, semua website sudah dioptimasi untuk SEO: meta tags, structured data, sitemap, robots.txt, dan performance optimization. Website siap untuk ranking di Google.'
    },
    {
      question: 'Bagaimana jika ada masalah teknis?',
      answer: 'Kami memberikan support 24/7 untuk troubleshooting. Untuk Paket Premium, support bersifat priority. Kami juga menyediakan dokumentasi lengkap untuk referensi.'
    },
    {
      question: 'Apakah ada kontrak atau perjanjian?',
      answer: 'Ya, kami menggunakan kontrak yang jelas dan fair untuk kedua belah pihak. Semua terms & conditions, timeline, dan deliverables sudah tertulis dengan jelas.'
    },
    {
      question: 'Bisakah request fitur custom?',
      answer: 'Tentu! Kami bisa membuat fitur custom sesuai kebutuhan bisnis Anda. Fitur custom akan dihitung terpisah dan timeline akan disesuaikan dengan kompleksitas fitur.'
    },
    {
      question: 'Apakah ada demo website sebelum bayar?',
      answer: 'Kami akan buat mockup design terlebih dahulu untuk approval. Setelah design disetujui, baru kami mulai development. Ini untuk memastikan hasil sesuai ekspektasi.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Berikut adalah pertanyaan umum yang sering ditanyakan client. 
            Jika ada pertanyaan lain, silakan hubungi kami langsung.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-16">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="mb-4"
              data-aos="fade-up" 
              data-aos-delay={idx * 50}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-graytext-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl text-primary-600 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="bg-white rounded-b-xl p-6 border-t-0 border border-gray-100 shadow-sm">
                  <p className="text-graytext-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Contact */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">
            Masih Ada Pertanyaan?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu menjawab semua pertanyaan Anda. 
            Konsultasi gratis, tidak ada kewajiban untuk order.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Kirim Pertanyaan
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-700 transition-colors">
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h4 className="text-lg font-semibold mb-2 text-graytext-900">Konsultasi Gratis</h4>
            <p className="text-graytext-600 text-sm">
              Diskusi kebutuhan tanpa biaya, tidak ada kewajiban order
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h4 className="text-lg font-semibold mb-2 text-graytext-900">Support 24/7</h4>
            <p className="text-graytext-600 text-sm">
              Tim support siap membantu kapan saja Anda butuh
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <h4 className="text-lg font-semibold mb-2 text-graytext-900">Garansi 100%</h4>
            <p className="text-graytext-600 text-sm">
              Kepuasan client adalah prioritas utama kami
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
