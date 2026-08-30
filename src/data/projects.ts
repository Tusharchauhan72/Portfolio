export interface SubSubProject {
  title: string;
  description: string;
  image: string;
  live?: string;
}

export interface SubProject {
  title: string;
  description: string;
  image: string;
  live?: string;
  subProjects?: SubSubProject[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
  subProjects?: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Tiki Topple Game',
    description:
      'A browser-based recreation of the popular strategy board game Tiki Topple. Players compete to move their hidden tiki pieces to the top of the island path using strategic action cards such as Tiki Up, Tiki Topple, and Tiki Toast. The project recreates the original gameplay mechanics with an interactive UI, turn-based logic, score tracking, and responsive gameplay experience.',
    image: '/img/featured/tiki-topple.jpg',
    tags: [
      'Game Development',
      'JavaScript',
      'Strategy Game',
      'Frontend',
      'Interactive UI',
    ],
    metrics: [
      'Fully deployed and playable',
      'Custom game logic implementation',
      'Real-time board interaction',
    ],
    github: 'https://github.com/Tusharchauhan72/Maoi-Topple-Game',
    live: 'https://maoi-topple-game-9r6f.onrender.com/',
    featured: true,
  },
  {
    title: 'CampusConnect',
    description:
      'A comprehensive campus marketplace and student collaboration platform connecting university students for peer-to-peer trading, academic Q&A, and campus services.',
    image: '/img/featured/featured-parker.avif',
    tags: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    metrics: ['Role: Lead Developer', 'Status: In Development'],
    github: 'https://github.com/Tusharchauhan72',
    live: 'https://campusconnect-brown.vercel.app',
    featured: true,
  },
  {
    title: 'AgroGuard',
    description:
      'IoT-driven smart agriculture monitoring system using ESP32, soil moisture sensors, DHT11 sensors, and automated irrigation control for precision farming.',
    image: '/img/featured/agroguard-hardware.jpg',
    tags: ['ESP32', 'Arduino', 'IoT', 'Sensors', 'C++'],
    metrics: ['Automated Irrigation', 'Real-Time Climate Data'],
    github: 'https://github.com/Tusharchauhan72',
    live: null,
    featured: true,
  },
  {
    title: 'Personal Portfolio',
    description:
      'Modern retro-arcade developer portfolio built using Astro, React, and TypeScript featuring snap scrolling, micro-animations, and fast performance.',
    image: '/img/featured/featured-navarro.avif',
    tags: ['Astro', 'TypeScript', 'React', 'Tailwind CSS'],
    metrics: ['Fast Performance', 'Arcade Theme'],
    github: 'https://github.com/Tusharchauhan72',
    live: null,
    featured: false,
  },
  {
    title: 'DSA Repository',
    description:
      'A structured C++ repository containing solutions to classic data structures & algorithm challenges with time and space complexity analyses.',
    image: '/img/portfolio/docx-search-replace.webp',
    tags: ['C++', 'Data Structures', 'Algorithms', 'Git'],
    metrics: ['Pattern-Based Solutions', 'Optimized Code'],
    github: 'https://github.com/Tusharchauhan72',
    live: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
