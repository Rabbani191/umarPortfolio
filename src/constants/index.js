import {
  frontend,
  backend,
  aws,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  angular, 
  mongodb, 
  nestjs, 
  awslogo, 

} from '../assets';

export const navLinks = [

  {
  
    id: 'about',
    title: 'About',
  },
  {
  
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
  
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AWS Cloud',
    icon: aws,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [

  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Angular js',
    icon: angular,
  },
  
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'AWS',
    icon: awslogo,
  },

  {
    name: 'Nest js',
    icon: nestjs,
  },
  
  
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Jr Software Developer',
    company_name: 'HT Decisions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'APR 2017 - MAR-2018',
  },
  {
    title: 'Software Engineer ',
    company_name: 'Invite Manager',
    icon: microverse,
    iconBg: '#333333',
    date: 'APR 2018 - JULY 2019',
  },
  {
    title: 'Development Manager',
    company_name: 'Baskt',
    icon: kelhel,
    iconBg: '#333333',
    date: 'JUL 2019 - MAY 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'SSBCIVI',
    icon: dcc,
    iconBg: '#333333',
    date: 'JUNE 2023 - PRESENT',
  },
];

const projects = [
  
  {
    id: 'project-1',
    name: 'SSBCI.VI',
    description: 'A lending platform designed to support business owners with flexible financing options',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    demo: 'https://www.ssbci.vi/',
  },
  {
    id: 'project-3',
    name: 'Monza Plates',
    description:
      'Monza Number Plate is the UK premier provider of high-quality, custom vehicle registration plates, offering everything from standard options to personalized, standout designs',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    demo: 'https://www.monzaplates.com/',
  },
  
  {
    id: 'project-2',
    name: 'Bmorebunks',
    description: 'Bmorebunks is an innovative, fully automated hostel offering keyless entry and easy online booking, providing guests with affordable, hassle-free stays in comfortable rooms',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    demo: 'https://bmorebunks.com/',
  },
  {
    id: 'project-4',
    name: 'Baskt',
    description: `Baskt is an online grocery store that delivers affordable, discounted products using optimized routing to minimize costs.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,

    demo: 'https://baskt.com/',
  },
];

export { services, technologies, experiences, projects };
