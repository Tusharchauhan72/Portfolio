export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'platform';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'C++', level: 85, category: 'language' },
      { name: 'C', level: 80, category: 'language' },
      { name: 'Python', level: 75, category: 'language' },
      { name: 'JavaScript', level: 75, category: 'language' },
      { name: 'HTML5/CSS3', level: 85, category: 'language' },
    ],
  },
  {
    name: 'Frontend & Backend',
    skills: [
      { name: 'HTML5', level: 90, category: 'framework' },
      { name: 'CSS3', level: 85, category: 'framework' },
      { name: 'JavaScript', level: 80, category: 'framework' },
      { name: 'Firebase', level: 70, category: 'framework' },
      { name: 'MySQL', level: 75, category: 'framework' },
    ],
  },
  {
    name: 'Tools & Core Areas',
    skills: [
      { name: 'Git & GitHub', level: 85, category: 'tool' },
      { name: 'VS Code', level: 90, category: 'tool' },
      { name: 'Data Structures & Algorithms', level: 85, category: 'tool' },
      { name: 'DevOps Fundamentals', level: 65, category: 'platform' },
    ],
  },
];

export const technologies = [
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
  'VS Code',
  'ESP32',
  'IoT',
  'Data Structures',
  'Algorithms',
  'DevOps',
] as const;

export type Technology = (typeof technologies)[number];

export const services = [
  {
    title: 'Full Stack Web Development',
    description:
      'Building <span class="hover-underline-trigger">responsive, modern web applications</span> using React, clean HTML, CSS, JavaScript, and database backends like Firebase and MySQL. Focused on intuitive UI/UX and efficient code structure.',
    icon: 'code',
    features: [
      'React & Modern Frontend Layouts',
      'Firebase Backend Integration',
      'Database Modeling (MySQL)',
      'Responsive Web Interfaces',
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    description:
      'Applying strong algorithmic thinking and <span class="hover-underline-trigger">optimized C++ data structures</span> to solve complex computational problems and build efficient software routines.',
    icon: 'puzzle',
    features: [
      'C++ Algorithmic Problem Solving',
      'Time & Space Complexity Optimization',
      'Pattern-Based Problem Solving',
      'Competitive Coding Practice',
    ],
  },
  {
    title: 'DevOps & IoT Fundamentals',
    description:
      'Utilizing <span class="hover-underline-trigger">Git and GitHub workflows</span> for clean code management, DevOps CI/CD fundamentals, and IoT development concepts.',
    icon: 'cloud',
    features: [
      'Git Workflow & GitHub Actions',
      'DevOps Fundamentals & CI/CD',
      'IoT Development Concepts',
      'Linux Command Line Basics',
    ],
  },
];
