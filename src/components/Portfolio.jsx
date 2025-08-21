import React, { useMemo, useState } from 'react'

const allProjects = [
  {
    id: 1,
    title: 'Website Toko Online Fashion',
    category: 'E-Commerce',
    client: 'Fashion Store',
    description: 'Website e-commerce lengkap dengan payment gateway dan admin panel',
    image: '/src/assets/logo.png',
    results: ['Traffic naik 300%', 'Penjualan naik 150%', 'Conversion rate 5.2%'],
    testimonial: 'Website yang dibuat sangat profesional dan user-friendly. Penjualan langsung naik signifikan!',
    rating: 5,
    beforeAfter: true
  },
  {
    id: 2,
    title: 'Landing Page Startup Tech',
    category: 'Landing',
    client: 'Tech Startup',
    description: 'Landing page untuk campaign marketing dengan conversion optimization',
    image: '/src/assets/logo.png',
    results: ['Conversion rate 8.5%', 'Cost per lead turun 40%', 'ROI 350%'],
    testimonial: 'Tim ChillCode sangat responsive dan hasilnya beyond expectation. Highly recommended!',
    rating: 5,
    beforeAfter: false
  },
  {
    id: 3,
    title: 'Company Profile Perusahaan',
    category: 'Company',
    client: 'Manufacturing Co.',
    description: 'Website company profile dengan design modern dan SEO optimization',
    image: '/src/assets/logo.png',
    results: ['Organic traffic naik 200%', 'Inquiry naik 80%', 'Brand awareness naik'],
    testimonial: 'Website yang dibuat sangat elegan dan profesional. Banyak client yang terkesan!',
    rating: 5,
    beforeAfter: true
  },
  {
    id: 4,
    title: 'Website Restaurant',
    category: 'Company',
    client: 'Fine Dining',
    description: 'Website restaurant dengan online booking dan menu digital',
    image: '/src/assets/logo.png',
    results: ['Online booking naik 120%', 'Customer engagement naik', 'Social media followers naik'],
    testimonial: 'Website yang user-friendly dan design-nya sangat menarik. Customer langsung suka!',
    rating: 5,
    beforeAfter: false
  },
  {
    id: 5,
    title: 'Landing Page Course Online',
    category: 'Landing',
    client: 'EduTech',
    description: 'Landing page untuk course online dengan high conversion rate',
    image: '/src/assets/logo.png',
    results: ['Enrollment naik 250%', 'Conversion rate 12%', 'Revenue naik 180%'],
    testimonial: 'Tim yang sangat profesional dan hasilnya luar biasa. ROI yang sangat tinggi!',
    rating: 5,
    beforeAfter: true
  },
  {
    id: 6,
    title: 'Website Real Estate',
    category: 'Company',
    client: 'Property Developer',
    description: 'Website property dengan virtual tour dan property listing',
    image: '/src/assets/logo.png',
    results: ['Property views naik 180%', 'Inquiry naik 90%', 'Sales naik 60%'],
    testimonial: 'Website yang sangat informatif dan mudah digunakan. Banyak property yang laku cepat!',
    rating: 5,
    beforeAfter: false
  }
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const categories = ['All', 'Landing', 'Company', 'E-Commerce']

  const projects = useMemo(() => {
    if (filter === 'All') return allProjects
    return allProjects.filter((p) => p.category === filter)
  }, [filter])

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-graytext-900 mb-4">
            Portfolio Project Kami
          </h2>
          <p className="text-xl text-graytext-700 max-w-3xl mx-auto">
            Berikut adalah beberapa project terbaik yang telah kami kerjakan. 
            Setiap project dibuat dengan standar tinggi dan hasil yang memuaskan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12" data-aos="fade-up">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === c 
                  ? 'bg-primary-700 text-white shadow-lg' 
                  : 'bg-white text-graytext-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => openProject(project)}
              data-aos="fade-up" 
              data-aos-delay={project.id * 100}
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                {project.beforeAfter && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Before/After
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-graytext-900">{project.title}</h3>
                <p className="text-graytext-600 mb-3">{project.description}</p>
                
                <div className="text-sm text-graytext-500 mb-4">
                  Client: <span className="font-medium">{project.client}</span>
                </div>

                <div className="space-y-2">
                  {project.results.slice(0, 2).map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-lg text-graytext-700 mb-6">
            Suka dengan portfolio kami? Mari buat website yang sama untuk bisnis Anda!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
              Mulai Project Sekarang
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="btn-secondary text-lg px-8 py-4">
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-graytext-900">{selectedProject.title}</h3>
                  <button 
                    onClick={closeProject}
                    className="text-graytext-500 hover:text-graytext-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full rounded-xl mb-4"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-graytext-900 mb-2">Hasil yang Dicapai:</h4>
                        <ul className="space-y-2">
                          {selectedProject.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-green-600">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-graytext-900 mb-2">Testimonial Client:</h4>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-graytext-700 italic">"{selectedProject.testimonial}"</p>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-semibold">
                            {selectedProject.client.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-graytext-900">{selectedProject.client}</div>
                            <div className="text-sm text-graytext-500">{selectedProject.category}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <a 
                        href="#contact" 
                        className="btn-primary w-full"
                        onClick={closeProject}
                      >
                        Buat Website Serupa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


