export interface Experience {
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string | 'Current';
  location?: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'Lovely Professional University',
    position: 'B.Tech CSE Student & Developer',
    period: '2024 - Present',
    startDate: '2024-08',
    endDate: 'Current',
    location: 'Punjab, India',
    highlights: [
      'Pursuing B.Tech in Computer Science and Engineering with focus on Full Stack Development and DSA.',
      'Developed IoT-based smart agricultural system AgroGuard using ESP32 and automated sensor controls.',
      'Maintained active Data Structures & Algorithms problem-solving repository in C++ on GitHub.',
      'Participated in university technical workshops, hackathons, and collaborative projects.',
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

export const education: Education[] = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering',
    year: '2024 - 2028',
    description:
      'Focusing on Computer Science core fundamentals: Data Structures, Object-Oriented Programming, Database Systems, Web Engineering, and DevOps.',
    skills: ['C++', 'C', 'Python', 'JavaScript', 'Data Structures', 'Git'],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description?: string;
  image?: string;
  tags?: string[];
  credentialUrl?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    name: "QuizOff 2026 – India's Biggest AI Quiz",
    issuer: 'CampusCrew x Unstop',
    year: '2026',
    description: 'Participated among 5,25,000+ students from 48,500+ institutions worldwide.',
    image: '/certificates/quizoff-2026.jpg',
    tags: ['AI Quiz', 'CampusCrew', 'Unstop', 'QuizOff 2026'],
    credentialUrl: '/certificates/quizoff-2026.jpg',
  },
  {
    name: 'Time Management',
    issuer: 'Infosys Springboard',
    year: '2024',
    credentialId: 'Verified',
  },
];

export const passions = [
  {
    name: 'Full Stack Web Dev',
    description: 'Creating clean, responsive, and functional web applications from scratch.',
    icon: '🌐',
  },
  {
    name: 'Data Structures & Algorithms',
    description: 'Mastering C++ problem solving and algorithmic efficiency.',
    icon: '🧩',
  },
  {
    name: 'DevOps & Linux',
    description: 'Exploring automation, CI/CD pipelines, and cloud deployment.',
    icon: '🤖',
  },
  {
    name: 'Hackathons',
    description: 'Collaborating in high-energy teams to turn ideas into working software.',
    icon: '⚡',
  },
  {
    name: 'Continuous Learning',
    description: 'Consistently picking up new tools, languages, and technical frameworks.',
    icon: '📚',
  },
];
