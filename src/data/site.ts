export const site = {
  footer: {
    tagline: 'Built with Astro & passion for software engineering.',
    disclaimer:
      'Portfolio of Tushar Chauhan — B.Tech CSE Student at Lovely Professional University.',
  },
  sections: {
    about: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle: 'Full Stack Development || Data Structures & Algorithms || Problem Solving || Real-World Software Solutions',
      availabilityText: 'Open to internships & hackathons',
      skillsTitle: 'Technical',
      skillsTitleHighlight: 'Skills',
      servicesTitle: 'About',
      servicesTitleHighlight: 'Me',
    },
    experience: {
      title: 'Academic &',
      titleHighlight: 'Experience',
      subtitle: 'My journey in computer science & software engineering',
      educationTitle: 'Education &',
      educationTitleHighlight: 'Certifications',
    },
    projects: {
      title: 'Featured',
      titleHighlight: 'Projects',
      subtitle: 'Practical software and hardware projects I have built',
      otherTitle: 'More',
      otherTitleHighlight: 'Work',
    },
    contact: {
      title: 'Get In',
      titleHighlight: 'Touch',
      subtitle: 'Interested in working together or collaborating on hackathons? Let\'s talk!',
      connectTitle: 'Let\'s Connect',
      connectDescription:
        'I\'m open to internships, open-source projects, hackathon teams, and networking with fellow developers. Feel free to reach out!',
      formTitle: 'Send a Message',
    },
  },
} as const;

export type Site = typeof site;
