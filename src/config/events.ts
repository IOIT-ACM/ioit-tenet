import type { ScheduleItemType } from '@/types';
import { MUNLINK } from '@/config';

export const day1: ScheduleItemType[] = [
  {
    title: 'Tenet Inaugration ceremony',
    icon: 'FaCalendar',
    id: 'tenet-inauguration',
    domain: 'techfiesta',
    color: 'bg-green-700',
    date: 'Sept 12th, 2024',
    location: 'Main Hall',
    start: new Date('2024-09-12T09:00:00'),
    imp: false,
    time: '9:00 AM',
    description: 'The official opening ceremony for Tenet event.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
  {
    title: 'Product Management',
    icon: 'FaCalendar',
    id: 'product-management',
    domain: 'techfiesta',
    color: 'bg-blue-700',
    date: 'Sept 12th, 2024',
    location: 'Room A',
    start: new Date('2024-09-12T11:15:00'),
    imp: true,
    time: '11:15 AM',
    description:
      'A session focused on product management strategies and best practices.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/pm.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
  {
    title: 'AI summit panel',
    icon: 'GiArtificialIntelligence',
    id: 'ai-summit-panel',
    domain: 'techfiesta',
    color: 'bg-purple-700',
    date: 'Sept 12th, 2024',
    location: 'Room B',
    start: new Date('2024-09-12T11:15:00'),
    imp: true,
    time: '11:15 AM',
    description:
      'A panel discussion on the latest trends and developments in AI.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/ai.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
    speakers: [
      {
        id: 'pwalimbe',
        name: 'Prasanna Walimbe',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Prasanna+Walimbe.jpeg',
        title: 'Co-founder, CTO at Mohap AI',
        url: 'https://www.linkedin.com/in/pwalimbe/',
        bio: 'Prasanna Walimbe is a co-founder and strategic advisor with over 18 years of experience in solving complex problems through innovative technology and finance solutions. He has successfully built and exited globally adopted SaaS products, including those used by the NYSE. Currently, Prasanna is optimizing supply chain investments using machine learning and developing a stealth generative AI product for financial and retail/e-commerce verticals at Mohap AI Solutions, which he co-founded in 2024. ',
        domain: 'techfiesta',
      },
      {
        id: 'atul-mehra-94475b8',
        name: 'Atul Mehra',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Atul+Mehra.jpeg',
        title: 'Founder vaayushop.com',
        url: 'https://www.linkedin.com/in/atul-mehra-94475b8/',
        bio: 'Atul Mehra is the founder of Vaayushop, an enterprise AI stack designed to transform organizations into AI-assisted entities, driving revenue and profit growth at scale. Vaayushop builds an intelligent AI brain that supports various enterprise roles, from bankers to CFOs and service desks, by sitting on existing stacks and enhancing customer journeys with AI. Similar to how LLMs and ChatGPT assist with audio, video, and text, Vaayushop works with financial data and decision-making. The platform leverages Open Finance, AI, and hyper-scale engineering techniques to offer embedded finance solutions for merchants, solving fundamental business challenges in India with plans to expand globally.',
        domain: 'techfiesta',
      },
      {
        id: 'nishantwelpulwar',
        name: 'Nishant Welpulwar',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Nishant+Welpulwar.jpeg',
        title: 'Founder vaayushop.com',
        url: 'https://www.linkedin.com/in/nishantwelpulwar/',
        bio: 'Nishant is a Senior Data Scientist with over 10 years of experience in data-driven analytics product development. He has more than 5 years of expertise in predictive analysis, specializing in Machine Learning, Deep Learning, Image Processing, Computer Vision, Python, Statistics, OpenCV, and Cloud technologies. Additionally, he has 5.5 years of experience in descriptive analysis, utilizing tools like PowerBI, SSRS Reports, SQL Server, and SSIS. Nishant has worked closely with customers to understand their requirements and deliver actionable insights through AI-powered, cloud-native software solutions. His deep understanding of both predictive and descriptive analytics allows him to provide data-driven strategies that meet complex business needs.',
        domain: 'techfiesta',
      },
    ],
  },
  {
    title: 'Web - 3 panel',
    icon: 'FaRobot',
    id: 'web3-panel',
    domain: 'techfiesta',
    color: 'bg-yellow-700',
    date: 'Sept 12th, 2024',
    location: 'Room C',
    start: new Date('2024-09-12T12:30:00'),
    imp: true,
    time: '12:30 PM',
    description:
      'A discussion on Web 3.0 technologies and their impact on the future of the internet.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/web3.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
  {
    title: "First Steps into Development: A Beginner's Guide",
    icon: 'FaCalendar',
    id: 'beginner-dev-guide',
    domain: 'techfiesta',
    color: 'bg-red-700',
    date: 'Sept 12th, 2024',
    location: 'Room D',
    start: new Date('2024-09-12T12:30:00'),
    imp: true,
    time: '12:30 PM',
    description:
      'An introductory session for those new to software development.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/development.jpeg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
  {
    title: 'Capture the Flag',
    icon: 'FaCalendar',
    id: 'capture-the-flag',
    domain: 'techfiesta',
    color: 'bg-green-700',
    date: 'Sept 12th, 2024',
    location: 'Security Lab',
    start: new Date('2024-09-12T13:45:00'),
    imp: true,
    time: '1:45 PM',
    description:
      'A cybersecurity challenge where participants compete to find and exploit vulnerabilities.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/ctf.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
    registration: 'https://forms.gle/H2p78SKhRZv6YLCZ9',
  },
  {
    title: 'Drone Workshop',
    icon: 'FaCalendar',
    id: 'drone-workshop',
    domain: 'techfiesta',
    color: 'bg-blue-700',
    date: 'Sept 12th, 2024',
    location: 'Outdoor Area',
    start: new Date('2024-09-12T13:45:00'),
    imp: true,
    time: '1:45 PM',
    description: 'Hands-on workshop on drone technology and piloting.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/drone.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
    registration: 'https://forms.gle/PRoAR779QCL4LqyL9',
  },
  {
    title: 'Gen AI (LLM) workshop',
    icon: 'FaCalendar',
    id: 'gen-ai-workshop',
    domain: 'techfiesta',
    color: 'bg-purple-700',
    date: 'Sept 12th, 2024',
    location: 'AI Lab',
    start: new Date('2024-09-12T14:00:00'),
    imp: true,
    time: '2:00 PM',
    description:
      'An in-depth workshop on Generative AI and Large Language Models.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/genai.jpeg',
    organizers: [{ name: 'shreya Kulkarni' }],
    registration: 'https://forms.gle/sNcVRhN458bfKP786',
  },
  {
    title: 'ARVR',
    icon: 'FaCalendar',
    id: 'arvr-session',
    domain: 'techfiesta',
    color: 'bg-yellow-700',
    date: 'Sept 12th, 2024',
    location: 'VR Room',
    start: new Date('2024-09-12T14:00:00'),
    imp: true,
    time: '2:00 PM',
    description:
      'Exploration of Augmented and Virtual Reality technologies and applications.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/arvr.jpeg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
  {
    title: 'What to do in webdev?',
    icon: 'FaCalendar',
    id: 'webdev-guidance',
    domain: 'techfiesta',
    color: 'bg-red-700',
    date: 'Sept 12th, 2024',
    location: 'Web Dev Lab',
    start: new Date('2024-09-12T15:30:00'),
    imp: true,
    time: '3:30 PM',
    description:
      'Guidance session on career paths and opportunities in web development.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/development.jpeg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
  {
    title: 'Drone open space display',
    icon: 'FaCalendar',
    id: 'drone-display',
    domain: 'techfiesta',
    color: 'bg-green-700',
    date: 'Sept 12th, 2024',
    location: 'Open Field',
    start: new Date('2024-09-12T17:00:00'),
    imp: true,
    time: '5:00 PM',
    description:
      'A spectacular drone showcase demonstrating various applications and capabilities.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/dronedisplay.jpg',
    organizers: [{ name: 'shreya Kulkarni' }],
  },
];

export const day2: ScheduleItemType[] = [
  // Esummit
  {
    title: 'HR Summit',
    id: 'hr-summit',
    color: 'bg-blue-500',
    date: 'Oct 6th, 2024',
    location: 'COE',
    start: new Date('2024-10-06T11:15:00'),
    imp: true,
    time: '11:15 AM - 12:15 PM',
    domain: 'esummit',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'Explore the latest trends in Human Resources with industry leaders. Discover the future of HR strategies, talent management, and organizational development.',
    speakers: [
      {
        id: 'akash-sangole',
        name: 'Akash Sangole',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/akashsangole.jpeg',
        title: 'CHRO at Panasonic',
        url: 'https://www.linkedin.com/in/akash-sangole/',
        bio: `Presently, as a CHRO responsible for Human Resources, General Administration and CSR for Panasonic Life Solutions India Pvt. Ltd. having 7 plants, 30 sales branches and more than 8000 employees. Qualified Master in Personnel Management from Pune University with Distinction, Over 20 years of Experience in Human Resources with versatile responsibilities like Corporate, Plant, Setting up Green Field Project, Managing IT Company etc. Good experience in working closely with Top Management on Strategic Initiatives, Leadership Development, Talent Acquisition, OD Intervention, Industrial Relations, Wage Settlement, Designing and implementation of Comp and Benefits, Designing and implementation of PMS, Policies, HR Business Partnering etc.`,
        domain: 'esummit',
      },
    ],
  },
  {
    title: 'D2C Summit',
    id: 'd2c-summit',
    color: 'bg-green-500',
    date: 'Oct 6th, 2024',
    location: 'MBA',
    start: new Date('2024-10-06T13:15:00'),
    imp: true,
    domain: 'esummit',
    time: '1:15 PM - 2:15 PM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'Get insights from D2C pioneers and learn what it takes to build a successful direct-to-consumer brand in today’s competitive market.',
  },
  {
    title: 'Venture Summit',
    id: 'venture-summit',
    color: 'bg-yellow-500',
    date: 'Oct 6th, 2024',
    location: 'MBA',
    start: new Date('2024-10-06T14:15:00'),
    imp: true,
    domain: 'esummit',
    time: '2:15 PM - 3:15 PM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'Explore venture capital, startup ecosystems, and investment opportunities with top industry experts. A must-attend for aspiring entrepreneurs.',
  },
  {
    title: 'Fin-tech Summit',
    id: 'fin-tech-summit',
    color: 'bg-red-500',
    date: 'Oct 6th, 2024',
    location: 'IOIT MPH',
    start: new Date('2024-10-06T11:15:00'),
    imp: true,
    domain: 'esummit',
    time: '11:15 AM - 12:15 PM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'Discover the future of financial technology with insights on digital payments, blockchain, and fintech innovations shaping the financial sector.',
  },
  {
    title: 'Starting up in college',
    id: 'starting-up-in-college',
    color: 'bg-purple-500',
    date: 'Oct 6th, 2024',
    location: 'IOIT MPH',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    domain: 'esummit',
    time: '10:00 AM - 11:15 AM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description: 'An exciting session for college students',
  },

  {
    title: 'Legacy Summit',
    id: 'legacy-summit',
    color: 'bg-orange-500',
    date: 'Oct 6th, 2024',
    location: 'STAGE',
    start: new Date('2024-10-06T17:30:00'),
    imp: true,
    domain: 'esummit',
    time: '5:30 PM - 7:30 PM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'The Legacy Summit brings together pioneers and leaders from various industries to discuss the future of business and innovation. A must-attend for anyone seeking inspiration and strategic insights.',
  },
  {
    title: 'Advisory and Legal',
    id: 'advisory-and-legal',
    color: 'bg-gray-500',
    date: 'Oct 6th, 2024',
    location: 'COE',
    start: new Date('2024-10-06T13:15:00'),
    imp: true,
    domain: 'esummit',
    time: '1:15 PM - 2:15 PM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'This session focuses on the vital aspects of advisory and legal support for startups and businesses. Learn from experts how to navigate legal frameworks and obtain the right advice to fuel your growth.',
  },
  {
    title: 'Incubation and Grants',
    id: 'incubation-and-grants',
    color: 'bg-indigo-500',
    date: 'Oct 6th, 2024',
    location: 'COE',
    start: new Date('2024-10-06T14:15:00'),
    imp: true,
    domain: 'esummit',
    time: '2:15 PM - 3:15 PM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [{ name: 'Laukik Patil' }],
    icon: 'IoRocket',
    description:
      'Explore the opportunities of incubation and grants in this insightful session. Learn how to secure funding and resources to accelerate your startup’s growth from early-stage to success.',
  },

  // MUN
  {
    title: 'UNSC Committee Session',
    icon: 'FcGlobe',
    id: 'unsc-session-day2',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-blue-500',
    date: 'Oct 5th, 2024',
    location: 'Room 25',
    start: new Date('2024-10-05T11:00:00'),
    imp: true,
    time: '11:00 AM',
    description:
      'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unsc.webp',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'UNHRC Committee Session',
    icon: 'FcGlobe',
    id: 'unhrc-session-day2',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-red-500',
    date: 'Oct 5th, 2024',
    location: 'Room 305',
    start: new Date('2024-10-05T11:00:00'),
    imp: true,
    time: '11:00 AM',
    description:
      'The UNHRC promotes and protects human rights globally through dialogue and cooperation. Agenda: Discussing the role of state and non-state actors in the Venezuelan crisis, with emphasis on the humanitarian emergency following the presidential elections.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unhcr.webp',
    organizers: [{ name: 'Chinmay Nakwa' }, { name: 'Shriya Naphade' }],
  },
  {
    title: 'AIPPM Committee Session',
    icon: 'FcGlobe',
    id: 'aippm-session-day2',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-yellow-500',
    date: 'Oct 5th, 2024',
    location: 'Room 206',
    start: new Date('2024-10-05T11:00:00'),
    imp: true,
    time: '11:00 AM',
    description:
      'AIPPM brings together diverse political factions to discuss national policies and reforms. Agenda: Deliberating on the introduction of the Aparajita Bill and the demand for a Central Protection Act.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/aippm.jpg',
    organizers: [{ name: 'Tanisha Londhe' }, { name: 'Atharva Pednekar' }],
  },
  {
    title: 'UNCSW Committee Session',
    icon: 'FcGlobe',
    id: 'uncsw-session-day2',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-pink-500',
    date: 'Oct 5th, 2024',
    location: 'Room 405',
    start: new Date('2024-10-05T11:00:00'),
    imp: true,
    time: '11:00 AM',
    description:
      "UNCSW is dedicated to promoting gender equality and women's empowerment globally. Agenda: Implications of human rights violations on women, with emphasis on religion-driven nations.",
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/uncsw.webp',
    organizers: [{ name: 'Sajal Gulati' }, { name: 'Devang Gandhi' }],
  },
  {
    title: 'UNODC Committee Session',
    icon: 'FcGlobe',
    id: 'unodc-session-day2',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-gray-500',
    date: 'Oct 5th, 2024',
    location: 'Room 409',
    start: new Date('2024-10-05T11:00:00'),
    imp: true,
    time: '11:00 AM',
    description:
      'UNODC combats global drug trafficking and organized crime while promoting justice and integrity. Agenda: Addressing the challenges of money and drug laundering in Special Economic Zones, with special emphasis on the Golden Triangle SEZ.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unodc.jpg',
    organizers: [{ name: 'Aditya Sarade' }, { name: 'Tanisha Londhe' }],
  },
];

export const day3: ScheduleItemType[] = [
  // Creator's Conclave

  // E-Sports
  {
    icon: 'FaCalendar',
    title: 'BGMI LAN Event',
    id: 'bgmi-lan-event',
    domain: 'esports',
    color: 'bg-red-500',
    date: 'Oct 6th, 2024',
    location: 'MPH',
    start: new Date('2024-10-06T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'Join the exciting BGMI LAN tournament as top teams battle it out in a competitive setting.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esports/esports/bgmi.avif',
    organizers: [{ name: 'Ayush Sangole' }, { name: 'Avdhoot Chavan' }],
    registration:
      'https://docs.google.com/forms/d/e/1FAIpQLScsw5pMP3SjBaMcMrs1i1D96Cu7WttNDxu9vBYcPTS9Yr5oag/closedform',
  },
  {
    title: 'FIFA (FC 24) PS5 Console Event',
    icon: 'FaCalendar',
    id: 'fifa-console-event',
    domain: 'esports',
    color: 'bg-green-500',
    date: 'Oct 6th, 2024',
    location: 'Room 105',
    start: new Date('2024-10-06T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'Experience the thrill of FIFA FC 24 on the PS5. Compete with other players for the top spot!',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esports/esports/fifa.webp',
    organizers: [{ name: 'Ayush Sangole' }, { name: 'Avdhoot Chavan' }],
    registration: 'https://forms.gle/dqRBt7KwQF284b2z7',
  },
  {
    title: 'Valorant',
    icon: 'FaCalendar',
    id: 'valorant-online',
    domain: 'esports',
    color: 'bg-purple-500',
    date: 'Oct 6th, 2024',
    location: 'Online',
    start: new Date('2024-10-06T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'Gear up for a competitive Valorant showdown as players from across the globe participate in this online tournament.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esports/esports/valo.webp',
    organizers: [{ name: 'Ayush Sangole' }, { name: 'Avdhoot Chavan' }],
    registration:
      'https://docs.google.com/forms/d/e/1FAIpQLSdr4PZfpLjOrNdW5JFIcW09oYEjoDIPhvumvIWhOX78MeIaZQ/viewform',
  },

  // MUN (Day 2)
  {
    title: 'UNSC Committee Session',
    icon: 'FcGlobe',
    id: 'unsc-session',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-blue-500',
    date: 'Oct 6th, 2024',
    location: 'Room 002',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    time: '10:00 AM',
    description:
      'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unsc.webp',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'UNHRC Committee Session',
    icon: 'FcGlobe',
    id: 'unhrc-session',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-red-500',
    date: 'Oct 6th, 2024',
    location: 'Room 305',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    time: '10:00 AM',
    description:
      'The UNHRC promotes and protects human rights globally through dialogue and cooperation. Agenda: Discussing the role of state and non-state actors in the Venezuelan crisis, with emphasis on the humanitarian emergency following the presidential elections.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unhcr.webp',
    organizers: [{ name: 'Chinmay Nakwa' }, { name: 'Shriya Naphade' }],
  },
  {
    title: 'AIPPM Committee Session',
    icon: 'FcGlobe',
    id: 'aippm-session',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-yellow-500',
    date: 'Oct 6th, 2024',
    location: 'Room 206',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    time: '10:00 AM',
    description:
      'AIPPM brings together diverse political factions to discuss national policies and reforms. Agenda: Deliberating on the introduction of the Aparajita Bill and the demand for a Central Protection Act.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/aippm.jpg',
    organizers: [{ name: 'Tanisha Londhe' }, { name: 'Atharva Pednekar' }],
  },
  {
    title: 'UNCSW Committee Session',
    icon: 'FcGlobe',
    id: 'uncsw-session',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-pink-500',
    date: 'Oct 6th, 2024',
    location: 'Room 405',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    time: '10:00 AM',
    description:
      'UNCSW is dedicated to promoting gender equality and women’s empowerment globally. Agenda: Implications of human rights violations on women, with emphasis on religion-driven nations.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/uncsw.webp',
    organizers: [{ name: 'Sajal Gulati' }, { name: 'Devang Gandhi' }],
  },
  {
    title: 'UNODC Committee Session',
    icon: 'FcGlobe',
    id: 'unodc-session',
    domain: 'mun',
    registration: MUNLINK,
    color: 'bg-gray-500',
    date: 'Oct 6th, 2024',
    location: 'Room 409',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    time: '10:00 AM',
    description:
      'UNODC combats global drug trafficking and organized crime while promoting justice and integrity. Agenda: Addressing the challenges of money and drug laundering in Special Economic Zones, with special emphasis on the Golden Triangle SEZ.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unodc.jpg',
    organizers: [{ name: 'Aditya Sarade' }, { name: 'Tanisha Londhe' }],
  },
];
