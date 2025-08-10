import React, { useMemo, useState } from 'react'

const allProjects = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: ['Landing', 'Company', 'E-Commerce'][i % 3],
}))

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Landing', 'Company', 'E-Commerce']

  const projects = useMemo(() => {
    if (filter === 'All') return allProjects
    return allProjects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold" data-aos="fade-up">Portfolio</h2>
          <div className="flex gap-2" data-aos="fade-left">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-lg border ${
                  filter === c ? 'bg-primary-700 text-white' : 'bg-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.id} className="card overflow-hidden" data-aos="zoom-in">
              <div className="aspect-video bg-secondary-200" />
              <figcaption className="mt-3">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-graytext-500">{p.category}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


