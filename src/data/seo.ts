export const seo = {
  siteTitle: 'Tushar Chauhan | B.Tech CSE Student & Aspiring Full Stack Developer',
  siteDescription:
    'Portfolio of Tushar Chauhan, Computer Science student at Lovely Professional University specializing in Full Stack Development, C++ DSA, and DevOps.',
  keywords:
    'Tushar Chauhan, B.Tech CSE, Lovely Professional University, Full Stack Developer, C++, DSA, Firebase, Astro, Web Development, DevOps, AgroGuard',
  themeColor: '#0a0a0f',
} as const;

export const schema = {
  personId: 'https://github.com/Tusharchauhan72#person',
  jobTitle: 'B.Tech CSE Student & Aspiring Full Stack Developer',
  worksFor: {
    type: 'Organization' as const,
    name: 'Lovely Professional University',
    url: 'https://www.lpu.in',
  },
  address: {
    type: 'PostalAddress' as const,
    addressLocality: 'Punjab',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Computer Science',
    'Full Stack Development',
    'Data Structures & Algorithms',
    'C++',
    'C',
    'Python',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Firebase',
    'MySQL',
    'Git',
    'GitHub',
    'DevOps',
    'ESP32',
    'IoT',
    'Astro',
  ],
  sameAs: [
    'https://github.com/Tusharchauhan72',
    'https://www.linkedin.com/in/tushar-chauhan-13504536b',
  ],
} as const;

export type SEO = typeof seo;
export type Schema = typeof schema;
