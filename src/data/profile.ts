export const profile = {
  name: 'Tushar Chauhan',
  title: 'B.Tech CSE Student | Full Stack Developer | DSA Enthusiast | Building Real-World Software & IoT Solutions',
  location: 'Punjab, India',
  tagline: 'B.Tech CSE Student | Full Stack Developer | DSA Enthusiast | Building Real-World Software & IoT Solutions',
  description:
    'Computer Science student passionate about Full Stack Development, Data Structures & Algorithms, DevOps, and building real-world software and IoT solutions. Experienced in building interactive web applications, IoT projects, and continuously improving problem-solving skills through DSA and competitive programming.',
  bio: `Computer Science student passionate about Full Stack Development, Data Structures & Algorithms, DevOps, and building real-world software and IoT solutions. Experienced in building interactive web applications, IoT projects, and continuously improving problem-solving skills through DSA and competitive programming.`,

  availability: ['Open to Internships', 'Hackathons & Collaborations'],

  // Anti-spam contact structure
  contact: {
    phone: { area: '19+', number: '1836791799' },
    email: { user: '2527nahuahcrahsut', website: 'moc.liamg' },
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/tushar-chauhan-13504536b',
    github: 'https://github.com/Tusharchauhan72',
    leetcode: 'https://leetcode.com/u/Tusharchauhan32/',
  },

  stats: [
    { value: 1, suffix: 'st Year', label: 'B.Tech CSE @ LPU' },
    { value: 3, suffix: '+', label: 'Projects Built' },
    { value: 100, suffix: '+', label: 'DSA Problems Solved' },
    { value: 1, suffix: '', label: 'Certifications' },
  ],

  resumeUrl: '/Ashcraft-Leo-Resume.pdf',
  photoUrl: '/img/tushar-portrait.jpg',
  avatarUrl: '/img/tushar-portrait.jpg',
} as const;

export type Profile = typeof profile;
