import React from 'react'
import { HiCode, HiLightningBolt, HiHeart, HiUsers } from 'react-icons/hi'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Tentang ChillCode</h2>
          <p className="text-graytext-700 max-w-2xl mx-auto">
            Kami adalah tim developer profesional yang berkomitmen untuk memberikan solusi website terbaik dengan teknologi modern dan performa tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Visi Kami</h3>
            <p className="text-graytext-700 mb-6">
              Menjadi partner terpercaya dalam transformasi digital bisnis Anda. Kami percaya bahwa setiap bisnis berhak memiliki website profesional yang dapat membantu pertumbuhan dan kesuksesan mereka.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiCode className="text-primary-700 text-xl" />
                <span className="text-graytext-700">Teknologi terdepan dan modern</span>
              </div>
              <div className="flex items-center gap-3">
                <HiLightningBolt className="text-primary-700 text-xl" />
                <span className="text-graytext-700">Performa tinggi dan loading cepat</span>
              </div>
              <div className="flex items-center gap-3">
                <HiHeart className="text-primary-700 text-xl" />
                <span className="text-graytext-700">Pelayanan ramah dan profesional</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="aspect-square rounded-3xl glass" />
            <div className="absolute inset-0 flex items-center justify-center">
              <HiUsers className="text-6xl text-primary-700 opacity-60" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold text-primary-700 mb-2">3+</div>
            <div className="text-graytext-700 mb-2">Tahun Pengalaman</div>
            <p className="text-sm text-graytext-500">Mengembangkan website untuk berbagai industri</p>
          </div>
          <div className="card text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold text-primary-700 mb-2">120+</div>
            <div className="text-graytext-700 mb-2">Project Selesai</div>
            <p className="text-sm text-graytext-500">Dari landing page hingga e-commerce</p>
          </div>
          <div className="card text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-bold text-primary-700 mb-2">80+</div>
            <div className="text-graytext-700 mb-2">Client Puas</div>
            <p className="text-sm text-graytext-500">Rating 4.9/5 dari client kami</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Misi Kami</h3>
            <ul className="space-y-3 text-graytext-700">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                Memberikan solusi website yang sesuai dengan kebutuhan dan budget client
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                Menggunakan teknologi terdepan untuk performa optimal
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                Memberikan pelayanan purna jual yang memuaskan
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                Membantu bisnis tumbuh melalui website yang profesional
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Keunggulan Kami</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">1</span>
                </div>
                <div>
                  <div className="font-medium">Tim Berpengalaman</div>
                  <div className="text-sm text-graytext-500">Developer dengan pengalaman 3+ tahun</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">2</span>
                </div>
                <div>
                  <div className="font-medium">Teknologi Modern</div>
                  <div className="text-sm text-graytext-500">React, Next.js, dan tools terdepan</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">3</span>
                </div>
                <div>
                  <div className="font-medium">Support 24/7</div>
                  <div className="text-sm text-graytext-500">Siap membantu kapanpun Anda butuh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
