export const heroTitles = [
  'B.Tech CSE Student',
  'Aspiring Full Stack Developer',
  'DSA & C++ Enthusiast',
  'DevOps Learner',
] as const;

export type HeroTitle = (typeof heroTitles)[number];
