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
      'Building <span class="hover-underline-trigger">responsive, modern web applications</span> using clean HTML, CSS, JavaScript, and database backends like Firebase and MySQL. Focused on intuitive UI/UX and efficient code structure.',
    icon: 'code',
    features: [
      'Responsive Web Interfaces',
      'Firebase Backend Integration',
      'Database Modeling (MySQL)',
      'Modern Frontend Layouts',
    ],
  },
  {
    title: 'Data Structures & Problem Solving',
    description:
      'Applying strong algorithmic thinking and <span class="hover-underline-trigger">optimized C++ data structures</span> to solve complex computational problems and build efficient software routines.',
    icon: 'puzzle',
    features: [
      'C++ Algorithmic Problem Solving',
      'Time & Space Complexity Optimization',
      'Pattern-Based Learning',
      'Competitive Coding Practice',
    ],
  },
  {
    title: 'DevOps & Version Control',
    description:
      'Utilizing <span class="hover-underline-trigger">Git and GitHub workflows</span> for clean code management, collaborative version control, and learning continuous delivery principles.',
    icon: 'cloud',
    features: [
      'Git Workflow & GitHub Actions',
      'Repository Structure & Docs',
      'Linux Command Line Basics',
      'DevOps CI/CD Concepts',
    ],
  },
  {
    title: 'AgroGuard Smart Agriculture System',
    description:
      'Designed and developed an IoT-based smart agriculture monitoring system using ESP32, soil moisture sensors, DHT11 temperature & humidity sensor, ultrasonic sensor, and relay-controlled water pump.<br/><br/>The system helps farmers monitor field conditions in real time, automatically detects low soil moisture levels, starts irrigation when needed, and turns the water pump off once sufficient moisture is reached. It can also detect nearby movement or obstacles and provides environmental insights for smarter farming decisions.',
    icon: 'chip',
    features: [
      'Real-time soil moisture monitoring',
      'Automatic irrigation control',
      'Auto ON/OFF water pump using relay',
      'Temperature & humidity tracking',
      'Ultrasonic-based object detection',
      'ESP32 microcontroller integration',
      'Smart farming automation',
    ],
    techStack: [
      'ESP32',
      'DHT11',
      'Soil Moisture Sensor',
      'Ultrasonic Sensor',
      'Relay Module',
      'Embedded Systems',
      'IoT',
    ],
  },
];
