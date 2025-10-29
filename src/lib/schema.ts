export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tony Mumu',
  alternateName: 'Tony Yam',
  jobTitle: 'Full-Stack Developer & Tech Consultant',
  url: 'https://tonymumu.vercel.app',
  sameAs: [
    'https://github.com/mrtonymu'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY'
  },
  email: 'timiemarketing@gmail.com',
  description: 'Professional full-stack developer based in Kuala Lumpur, Malaysia. Building solid web solutions from frontend to backend.',
  knowsAbout: [
    'Full-Stack Development',
    'System Architecture',
    'Tech Consulting',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js'
  ]
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Tony Mumu - Full-Stack Development Services',
  provider: {
    '@type': 'Person',
    name: 'Tony Mumu'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Malaysia'
  },
  serviceType: [
    'Web Development',
    'Full-Stack Development',
    'System Architecture',
    'Tech Consulting'
  ],
  description: 'Professional full-stack development services for creators and businesses. From system design to launch, every project is built with care.',
  url: 'https://tonymumu.vercel.app'
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tony Mumu Portfolio',
  url: 'https://tonymumu.vercel.app',
  description: 'Portfolio website of Tony Mumu, Full-Stack Developer & Tech Consultant based in Kuala Lumpur, Malaysia.',
  author: {
    '@type': 'Person',
    name: 'Tony Mumu'
  }
};
