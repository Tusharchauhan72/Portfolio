export const profile = {
  name: 'Tushar Chauhan',
  title: 'B.Tech CSE Student | Aspiring Full Stack Developer | DevOps Learner',
  location: 'Punjab, India',
  tagline: 'Building practical software, solving problems, and growing as a developer every day.',
  description:
    'Computer Science student at Lovely Professional University focused on Full Stack Development, Data Structures & Algorithms, and DevOps.',
  bio: `I am a Computer Science student at Lovely Professional University with a strong interest in Full Stack Development, Data Structures & Algorithms, and DevOps. I enjoy building practical software solutions, participating in hackathons, and continuously improving my problem-solving and development skills.`,

  availability: ['Open to Internships', 'Hackathons & Collaborations'],

  // Anti-spam contact structure
  contact: {
    phone: { area: '', number: '' },
    email: { user: 'nahcuhahsruht', website: 'moc.liamg' },
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/tushar-chauhan-13504536b',
    github: 'https://github.com/Tusharchauhan72',
  },

  stats: [
    { value: 1, suffix: 'st Year', label: 'B.Tech CSE @ LPU' },
    { value: 3, suffix: '+', label: 'Projects Built' },
    { value: 100, suffix: '+', label: 'DSA Problems Solved' },
    { value: 1, suffix: '', label: 'Certifications' },
  ],

  resumeUrl: '/Tushar-Chauhan-Resume.pdf',
  photoUrl: '/img/selfie.avif',
  avatarUrl: '/img/pic.webp',
} as const;

export type Profile = typeof profile;
