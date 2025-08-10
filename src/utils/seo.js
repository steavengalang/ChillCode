export const defaultSEO = {
  title: 'ChillCode - Jasa Pembuatan Website Profesional Mulai 100K',
  description:
    'Jasa pembuatan website profesional dengan teknologi modern. Landing page mulai 100K, company profile, e-commerce. Fast loading, SEO-friendly, responsive.',
  keywords:
    'jasa website, pembuatan website, web developer, website murah, landing page, company profile, e-commerce',
}

export function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ChillCode',
    url: 'https://chillcode.example',
    logo: '/logo.png',
    sameAs: [
      'https://facebook.com/chillcode',
      'https://instagram.com/chillcode',
      'https://twitter.com/chillcode',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+62-812-3456-7890',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
  }
}


