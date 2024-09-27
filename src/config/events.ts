import type { ScheduleItemType } from '@/types';
import { MUNLINK } from '@/config';

export const day1: ScheduleItemType[] = [
  {
    title: 'Tenet Inaugration ceremony',
    icon: 'FaCalendar',
    id: 'tenet-inauguration',
    domain: 'techfiesta',
    color: 'bg-green-700',
    date: 'Oct 4th, 2024',
    location: 'Multipurpose Hall (MPH)',
    start: new Date('2024-09-12T09:00:00'),
    imp: false,
    time: '8:30 AM',
    description: 'The official opening ceremony for Tenet 2024.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/inaugration.jpeg',
    organizers: [{ name: 'Niranjana Patil' }],
  },
  {
    title: 'Product Management',
    icon: 'FaCalendar',
    id: 'product-management',
    domain: 'techfiesta',
    color: 'bg-blue-700',
    date: 'Oct 4th, 2024',
    location: 'Multipurpose hall (MPH)',
    start: new Date('2024-09-12T11:15:00'),
    imp: true,
    time: '11:15 AM',
    description:
      'A session focused on product management strategies and best practices.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/pm.jpg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    speakers: [
      {
        id: 'himanshi-yaduwanshi',
        name: 'Himanshi Yaduwanshi',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Himanshi+Yaduwanshi.jpeg',
        title: 'Senior Product Manager, Telstra',
        url: 'https://www.linkedin.com/in/himanshi-yaduwanshi/',
        bio: 'Himanshi has good business acumen and is passionate about the financial domain. She also has sound technical knowledge and is great at coordinating and getting things done. Overall she is great to work with.',
        domain: 'techfiesta',
      },
    ],
  },
  {
    title: 'AI summit panel',
    icon: 'GiArtificialIntelligence',
    id: 'ai-summit-panel',
    domain: 'techfiesta',
    color: 'bg-purple-700',
    date: 'Oct 4th, 2024',
    location: 'Multipurpose hall (MPH)',
    start: new Date('2024-09-12T11:15:00'),
    imp: true,
    time: '11:15 AM',
    description:
      'A panel discussion on the latest trends and developments in AI.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/ai.jpg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    speakers: [
      {
        id: 'udaykothari',
        name: 'Uday Kothari',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Uday+Kothari.jpeg',
        title: 'Co-Chair, Tie Pune Angels',
        url: 'https://www.linkedin.com/in/udaykothari/',
        bio: 'Uday is Founder and Director of DLT Geeks, a start-up focused on Blockchain based Enterprise Applications. Prior to initiating DLT Geeks, he was founder & CTO of Compulink Systems which he built from 300 sq ft garage to publicly listed company.  Uday is veteran IT professional with 30+ years’ experience in business & technology, Serial Entrepreneur, Angel Investor, ML/AI (ChatGPT), Blockchain Expert/Consultant, Mentor for startups, TiE Pune Charter Member, Chairperson for TiE Pune Angels. He is also Fintech programme alumni of Saïd Business School, University of Oxford.  Uday is also EU/US patent holder on XBRL (Extensible Business Reporting Language) technology.',
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
        title: 'AI Consultant at Google',
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
    date: 'Oct 4th, 2024',
    location: 'Multipurpose Hall (MPH)',
    start: new Date('2024-09-12T12:30:00'),
    imp: true,
    time: '12:30 PM',
    description:
      'A discussion on Web 3.0 technologies and their impact on the future of the internet.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/web3.jpg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    speakers: [
      {
        id: 'almassayyed',
        name: 'Almas Sayyed',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Almas+Sayyed+.jpeg',
        title: 'Founder, PuneDAO',
        url: 'https://www.linkedin.com/in/almassayyed/',
        bio: 'Technologically inclined digital marketer & community builder with 3+ yrs of experience building organic marketing funnels for early-stage companies and startups. Familiar with digital trends, inclined to help, build and foster relations',
        domain: 'techfiesta',
      },
      {
        id: 'apooravvyas',
        name: 'Apoorav Vyas',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Apoorav+Vyas+.jpeg',
        title: 'Co-Founder, ActualOne',
        url: 'https://www.linkedin.com/in/udaykothari/',
        bio: 'Apoorav Vyas is a Web3 professional specializing in product and market research for blockchain projects. He has extensive experience in designing and implementing go-to-market strategies for various Web3 protocols. Currently, Apoorav is focusing on building community and traction in the blockchain space through his venture called ActualOne. To promote awareness about the industry, he creates purposeful content on his social media handles and has experience working in growth and social media roles with various crypto firms. Apooravs professional background includes collaborations with blockchain startups from India, Germany, the UK, and the US. He has held diverse positions ranging from Research Analyst and Developer Relations to Chief of Growth. His expertise particularly lies in the areas of Digital Identity (DID), Real World Assets (RWAs), and Non-Fungible Tokens (NFTs) within the Web3 ecosystem.',
        domain: 'techfiesta',
      },
      {
        id: 'vishnukorde',
        name: 'Vishnu Korde',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Vishnu.jpeg',
        title: 'Founder and CEO, DeCloud Labs',
        url: 'https://www.linkedin.com/in/udaykothari/',
        bio: 'Experienced leader with over a decade spent in cloud, finance and design industries. Now expanding the frontiers of #DePIN, #DeCloud and #AI. Advisor and investor in several blockchain projects and startups. Skilled in cryptography, product management and business development. Masters in Finance from Harvard University.',
        domain: 'techfiesta',
      },
    ],
  },
  {
    title: "First Steps into Development: A Beginner's Guide",
    icon: 'FaCalendar',
    id: 'beginner-dev-guide',
    domain: 'techfiesta',
    color: 'bg-red-700',
    date: 'Oct 4th, 2024',
    location: 'Multipurposr Hall (MPH)',
    start: new Date('2024-09-12T12:30:00'),
    imp: true,
    time: '12:30 PM',
    description:
      'An introductory session for those new to software development.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/development.jpeg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    speakers: [
      {
        id: 'vishekpratap',
        name: 'Vishek Pratap',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/vishek+pratap.jpeg',
        title: 'Co-Founder TechVP',
        url: 'https://www.linkedin.com/in/vishekpratap/',
        bio: 'Vishek Pratap is a versatile professional combining expertise in technology, entrepreneurship, and education. As the founder of TechValley, he offers consultancy services while also excelling in developer relations, community management, and content creation. His technical skills span Cyber Security, AI-ML, Blockchain, NFTs, and DeFi, alongside proficiency in web development and programming languages. Visheks involvement in the tech community is evident through his roles as a Microsoft Learn Student Ambassador and recognitions from Udacity and the CloudNative Linux Foundation. He has demonstrated his capabilities as a finalist in notable tech competitions and actively engages in digital marketing and mentorship. Visheks professional focus lies in leveraging his diverse skill set to educate, innovate, and empower others, with a particular emphasis on bridging the technological gap in rural India.',
        domain: 'techfiesta',
      },
    ],
  },
  {
    title: 'Capture the Flag',
    icon: 'FaCalendar',
    id: 'ctf',
    domain: 'techfiesta',
    color: 'bg-green-700',
    date: 'Oct 4th, 2024',
    location: '112, 4th floor lab',
    start: new Date('2024-09-12T13:45:00'),
    imp: true,
    time: '1:45 PM',
    description:
      'A cybersecurity challenge where participants compete to find and exploit vulnerabilities.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/ctf.jpg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    registration: '/register/ctf',
  },
  {
    title: 'Drone Workshop',
    icon: 'FaCalendar',
    id: 'drone-workshop',
    domain: 'techfiesta',
    color: 'bg-blue-700',
    date: 'Oct 4th, 2024',
    location: 'Room 407',
    start: new Date('2024-09-12T13:45:00'),
    imp: true,
    time: '1:45 PM',
    description:
      'Master the essentials of drone technology at our hands-on drone workshop. Get crucial training in drone assembly and understand the components used. Exercise drone programming and get a chance to practice flight training.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/drone.jpg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    registration: '/register/drone-workshop',
  },
  {
    title: 'Exploring the Depths of AR/VR',
    icon: 'FaCalendar',
    id: 'arvr-session',
    domain: 'techfiesta',
    color: 'bg-yellow-700',
    date: 'Oct 4th, 2024',
    location: 'Room 016',
    start: new Date('2024-09-12T14:00:00'),
    imp: true,
    time: '2:00 PM',
    description:
      'Exploration of Augmented and Virtual Reality technologies and applications.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/arvr.jpeg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    speakers: [
      {
        id: 'akhtar-faizan',
        name: 'Faizan Akhtar',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Faizan+Akhtar.jpeg',
        title: 'Expert AR/VR Speaker, Software Engineer at Criteo',
        url: 'https://www.linkedin.com/in/akhtar-faizan/',
        bio: 'Faizan Akhtar is a Software Engineer at Criteo, where they focus on building scalable and high-performance web applications using the MERN stack, with expertise in frontend technologies like React, Redux, and REST APIs. Their contributions have led to a 70% improvement in dashboard load times, a 22% increase in media cost efficiency, and a 75% growth in dashboard revenue. They are currently pursuing a Master of Technology in Software Engineering from BITS Pilani, where they delve into advanced software design, development, and maintenance concepts. Beyond their technical prowess, they actively engage with communities as a member of React India and Pune MongoDB User Group, and as a mixed reality evangelist and Microsoft Student Ambassador, promoting emerging technologies. Eager to address real-world challenges, they constantly seek new learning and growth opportunities.',
        domain: 'techfiesta',
      },
    ],
  },
  {
    title: 'Machine Learning unleashed',
    icon: 'FaCalendar',
    id: 'mlunleashed',
    domain: 'techfiesta',
    color: 'bg-red-700',
    date: 'Oct 4th, 2024',
    location: 'Room 407',
    start: new Date('2024-09-12T15:30:00'),
    imp: true,
    time: '3:30 PM',
    description:
      'Machine Learning Unleashed" is excited to present a speaker session featuring Saurabh Shahane, Founder and CEO of The Machine Learning Company. With extensive expertise in data and AI, Saurabh leads a team focused on groundbreaking research in generative AI, NLP, and computer vision. He has also established TMLC Academy, offering specialized AI programs, and The Data Hire, a job portal connecting top AI talent with companies. Join us to hear Saurabh share his insights on harnessing AI for innovation, business optimization, and sustainable growth.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/development.jpeg',
    organizers: [{ name: 'Shreya Kulkarni' }],
    speakers: [
      {
        id: 'saurabh-shahane',
        name: 'Saurabh Shahane',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/saurabh.jpeg',
        title: 'Founder, The Machine Learning Company',
        url: 'https://www.linkedin.com/in/saurabh-shahane/',
        bio: 'Saurabh Shahane is the CEO of The Machine Learning Company (themlco.com), where he leads a dynamic team dedicated to pushing the boundaries of artificial intelligence through groundbreaking research and development. With a deep-rooted expertise in the data and AI domain, Saurabh leverages his knowledge to spearhead transformative AI initiatives, enabling businesses to optimize operations, foster innovation, and deliver exceptional value. Under his leadership, TMLC specializes in cutting-edge technologies like generative AI, natural language processing, and computer vision. Beyond research, he is committed to education through TMLC Academy (themlco.com/academy), which offers industry-focused AI programs for professionals, executives, and students. Over 5,000 learners globally have benefited from these hands-on, project-based programs. To bridge the gap between education and employment, he established The Data Hire (thedatahire.site), a job portal that connects top AI talent with companies. Saurabh’s mission is to harness AI’s potential to drive innovation and sustainable growth for organizations worldwide.',
        domain: 'techfiesta',
      },
    ],
  },
];

export const day2: ScheduleItemType[] = [
  // E-Sports
  {
    icon: 'FaCalendar',
    title: 'BGMI LAN Event',
    id: 'bgmi-lan-event',
    domain: 'esports',
    color: 'bg-red-500',
    date: 'Oct 6th, 2024',
    location: 'MPH',
    start: new Date('2024-10-05T09:00:00'),
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
    start: new Date('2024-10-05T09:00:00'),
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
    start: new Date('2024-10-05T09:00:00'),
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

  // MUN

  {
    title: 'MUN Breakfast and Reporting',
    icon: 'FcGlobe',
    id: 'breakfast-reporting-day1',
    domain: 'mun',
    color: 'bg-blue-500',
    date: 'Oct 5th, 2024',
    location: 'Admin Office',
    start: new Date('2024-10-05T08:00:00'),
    imp: false,
    time: '8:00 AM - 9:00 AM',
    description: 'Start your day with breakfast and reporting.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/breakfast.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'IOIT MUN Opening Ceremony',
    icon: 'FcGlobe',
    id: 'opening-ceremony',
    domain: 'mun',
    color: 'bg-red-500',
    date: 'Oct 5th, 2024',
    location: 'MPH',
    start: new Date('2024-10-05T09:00:00'),
    imp: false,
    time: '9:00 AM - 11:00 AM',
    description: 'The official opening ceremony of IOIT MUN 2024.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/inaugration.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'MUN Lunch',
    icon: 'FcGlobe',
    id: 'lunch-day1',
    domain: 'mun',
    color: 'bg-green-500',
    date: 'Oct 5th, 2024',
    location: '3rd Floor Terrace',
    start: new Date('2024-10-05T14:00:00'),
    imp: false,
    time: '2:00 PM - 3:00 PM',
    description: 'Lunch break for all IOIT MUN 2024 participants.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/munlunch.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'MUN High tea',
    icon: 'FcGlobe',
    id: 'high-tea-day1',
    domain: 'mun',
    color: 'bg-orange-500',
    date: 'Oct 5th, 2024',
    location: 'In hand',
    start: new Date('2024-10-05T17:00:00'),
    imp: false,
    time: '5:00 PM - 5:30 PM',
    description: 'High tea session for all IOIT MUN 2024 attendees.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/hightea.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },

  {
    title: 'UNSC Committee Session',
    icon: 'FcGlobe',
    id: 'unsc-session',
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
    munpage: 'https://www.ioitmun.com/unsc',
  },
  {
    title: 'UNHRC Committee Session',
    icon: 'FcGlobe',
    id: 'unhrc-session',
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
    munpage: 'https://www.ioitmun.com/unhrc',
  },
  {
    title: 'AIPPM Committee Session',
    icon: 'FcGlobe',
    id: 'aippm-session',
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
    munpage: 'https://www.ioitmun.com/aippm',
  },
  {
    title: 'UNCSW Committee Session',
    icon: 'FcGlobe',
    id: 'uncsw-session',
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
    munpage: 'https://www.ioitmun.com/uncsw',
  },
  {
    title: 'UNODC Committee Session',
    icon: 'FcGlobe',
    id: 'unodc-session',
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
    munpage: 'https://www.ioitmun.com/unodc',
  },
];

export const day3: ScheduleItemType[] = [
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
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/hrsummit.jpeg ',
    organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
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
      {
        id: 'mathurneha',
        name: 'Neha Mathur',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/neha+mattur.jpeg',
        title: 'Co-Founder, HYRGPT',
        url: 'https://www.linkedin.com/in/mathurneha/',
        bio: `Neha is an agile thought leader and seasoned professional with over 16 years of industry expertise in managing large-scale operations and corporate strategy. She began her career with Marriott International, quickly rising to become Resident Manager. She went on to hold leadership roles at The Ascott Limited, Della Adventure & Resorts, and Sterling Holidays, where she managed strategic goals across 2,143 units. Neha co-founded WishYogi, an AI-driven guest engagement and upselling platform for hotels, and later launched Personifwy, a SaaS-based employee experience platform focused on real-time employee sentiment and business outcomes for mid-market and enterprise segments. A graduate in Hospitality Management from the University of Huddersfield, she also holds an Executive Program degree from the Haas School of Business, Berkeley.`,
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
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/d2d.jpeg ',
    organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
    icon: 'IoRocket',
    description:
      'Get insights from D2C pioneers and learn what it takes to build a successful direct-to-consumer brand in today’s competitive market.',
    speakers: [
      {
        id: 'jaywant-patil',
        name: 'Jaywant Patil',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/jaywant+patil.jpg',
        title: 'Founder, Humpy Farms',
        url: 'https://www.linkedin.com/in/jaywantpatil/',
        bio: `We are excited to welcome Jaywant Patil to TENET'24. As the founder of Humpy Farms, a Shark Tank India-backed D2C brand, Jaywant is dedicated to revitalizing agriculture as a profession through sustainable organic farming practices. His innovative approach combines traditional wisdom with modern digital technologies to enhance the efficiency and profitability of farming.`,
        domain: 'esummit',
      },
      {
        id: 'dadasahebbhagat',
        name: 'Dadasaheb Bhagat',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Dadasaheb+1.jpg',
        title: 'Founder and CEO, Design Template (SharkTank S3)',
        url: 'https://www.linkedin.com/in/dadasahebbhagat/',
        bio: `Dadasaheb is an accomplished creative leader and entrepreneur with a strong track record in the design industry. He is the founder of DooGraphics, India's first online design and publishing platform, which has rapidly gained traction since its inception in August 2020. With DooGraphics, Dadasaheb is empowering millions of users globally to create impactful social media graphics. His expertise spans business planning, team building, SaaS, leadership, and business development. Prior to DooGraphics, Dadasaheb founded NinthMotion, a company specializing in motion graphics and animation, showcasing his innovative approach to visual storytelling. His ventures reflect a deep commitment to transforming the design landscape and fostering creativity.`,
        domain: 'esummit',
      },
      {
        id: 'sangeeta-sharma-96b882264',
        name: 'Sangeeta Sharma',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Sangeeta+Sharma.jpeg',
        title: 'Co-Founder, Sharma Ji Ka Aata',
        url: 'https://www.linkedin.com/in/sangeeta-sharma-96b882264/',
        bio: `We are thrilled to have Sangeeta Sharma as a speaker at TENET'24. As the founder of Sharma Ji Ka Aata, a brand featured on Shark Tank India, Sangeeta brings a wealth of experience working with startups across the nation. She understands the passion and determination of entrepreneurs striving to succeed in a fast-paced environment.`,
        domain: 'esummit',
      },
    ],
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
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/vc.jpeg ',
    organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
    icon: 'IoRocket',
    description:
      'Explore venture capital, startup ecosystems, and investment opportunities with top industry experts. A must-attend for aspiring entrepreneurs.',
    speakers: [
      {
        id: 'rohit-goyal',
        name: 'Rohit Goyal',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Rohit+Goyal.jpeg',
        title: 'Managing Partner, Windrose Capital',
        url: 'https://www.linkedin.com/in/rohit-goyal/',
        bio: `Rohit is a Managing Partner at Windrose Capital, a venture capital firm that supports India’s fast-transforming economy through early and mid-stage investments in promising start-ups. He has been active in the venture capital space for nearly a decade and has made multiple investments in domestic and international deals, involving diverse stakeholders and nationalities. He is also a Director at TwarIT Mobility, a technology company that provides mobility solutions for urban transportation. He has entrepreneurial experience in manufacturing and technology, having partnered and set up companies in and outside India, with people from China, Sri Lanka, UK, and Germany. He has a Master of Science in Management from City University, London, with a focus on entrepreneurship and finance. He is also certified as an Associate Financial Planner by FPSB. He is passionate about technology, innovation, and value creation.`,
        domain: 'esummit',
      },
      {
        id: 'udaykothari-esummit',
        name: 'Uday Kothari',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Uday+Kothari.jpeg',
        title: 'Co-Chair, Tie Pune Angels',
        url: 'https://www.linkedin.com/in/udaykothari/',
        bio: 'Uday is Founder and Director of DLT Geeks, a start-up focused on Blockchain based Enterprise Applications. Prior to initiating DLT Geeks, he was founder & CTO of Compulink Systems which he built from 300 sq ft garage to publicly listed company.  Uday is veteran IT professional with 30+ years’ experience in business & technology, Serial Entrepreneur, Angel Investor, ML/AI (ChatGPT), Blockchain Expert/Consultant, Mentor for startups, TiE Pune Charter Member, Chairperson for TiE Pune Angels. He is also Fintech programme alumni of Saïd Business School, University of Oxford.  Uday is also EU/US patent holder on XBRL (Extensible Business Reporting Language) technology.',
        domain: 'esummit',
      },
      {
        id: 'rajeevmanjrekar',
        name: 'Rajeev Manjrekar',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Rajeev+Manjrekar.jpg',
        title: 'Founder, DataKatalyst Ventures',
        url: 'https://www.linkedin.com/in/rajeevmanjrekar/',
        bio: 'As the Founder and Chief Advisor at Datakatalyst Ventures, a prominent investment banking firm, this seasoned professional has made a significant impact in the startup ecosystem over the past six years. Under his leadership, Datakatalyst has completed over 150 advisory mandates, facilitated funding for 26+ startups amounting to USD 78 million, closed 8 M&A deals, and established connections with 500+ investors. With over two decades of experience in channel management, banking, and consulting, he is a 3X serial entrepreneur, having successfully exited two of his ventures. In addition to Datakatalyst, he founded Symbi Angels, an early-stage angel syndicate, and has been an active investment banker since 2018, preparing startups for investor readiness and connecting them with equity funding opportunities. His contributions extend to academia and government initiatives, serving on the boards of various entrepreneurship cells of top educational institutions and being a mentor with Startup India, a Government of India initiative. He is also part of the investment committee of MAGIC Seed Fund. Previously, he held leadership roles at Adecco S.A. as a Zonal Business Head and Strategic Account Director, managing the P&L for the staffing business of its Large Corporate Vertical in India. With nearly 11 years in the banking sector, he was a Client Banker with ICICI Bank, providing strategic commercial banking solutions to CXO-level clients, and led regional teams in the bank’s SME and Mortgage Finance business. His extensive experience makes him a trusted advisor and influencer in the startup and investment communities.',
        domain: 'esummit',
      },
      {
        id: 'startupconsultantyogeshthite',
        name: 'Yogesh Thite',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Yogesh+Tithe+sir.jpg',
        title: 'Founder, Entie Angels',
        url: 'https://www.linkedin.com/in/startupconsultantyogeshthite/',
        bio: 'Mr. Yogesh Thite is a dynamic entrepreneur and investor, known for his pivotal role in shaping the startup ecosystem. He is the founder of Meticulous Business Plans and Entie, a unique business dating platform that connects like-minded entrepreneurs. With a B.Tech from MIT and an MBA from Sinhgad, Mr. Thite brings a wealth of knowledge and experience to his ventures. As the leader of Entie Angels, an investment network of over 200 investors, he has supported 13 startups with funding ranging from ₹25 lakhs to ₹2 crores. Personally, he has invested in 10 early-stage, revenue-generating startups, demonstrating his strong belief in nurturing young businesses.  Mr. Thite also offers selective consulting services, focusing on fundraising for seed to pre-Series stages and SME Pre-IPO preparation. Affiliated with several incubation centers, he frequently conducts sessions to help startups become investment-ready. His generosity is well-known in the community, offering free pitch deck reviews and having guided over 100 founders. His support extends to helping startups secure grants and prepare for high-visibility opportunities like Shark Tank India, making him a valued mentor and advisor in the entrepreneurial space.',
        domain: 'esummit',
      },
    ],
  },
  {
    title: 'Governments and startups',
    id: 'starting-up-in-college',
    color: 'bg-purple-500',
    date: 'Oct 6th, 2024',
    location: 'IOIT MPH',
    start: new Date('2024-10-06T10:00:00'),
    imp: true,
    domain: 'esummit',
    time: '10:00 AM - 11:15 AM',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/startupinclg.jpeg ',
    organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
    icon: 'IoRocket',
    description: 'An exciting session for college students',
    speakers: [
      {
        id: 'shyamkerkar',
        name: 'Shyam Kerkar',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Shyam+Kerkar.jpeg',
        title: 'Founder, Pathvisor Ventures',
        url: 'https://www.linkedin.com/in/shyamkerkar/',
        bio: 'With an impressive career spanning over two decades, this accomplished professional is not only a Chartered Accountant and Company Secretary but also an Author, Certified Life Coach, and NLP Coach. They have extensive experience in various facets of the finance function, having worked across different segments of a Universal Bank in both India and global locations. Their expertise covers strategic planning, transformation projects, financial services operations management, and process improvement initiatives. Currently, they lead the business management function for the India Shared Service Entity, serving as the Chief of Staff and business manager to the Executive Leadership Group, working closely with India Co-CEOs. Known for their ability to handle multiple projects in fast-paced and challenging environments, they are highly skilled in managing cross-functional teams and fostering collaboration across culturally diverse and virtual teams. With strong interpersonal skills and a global perspective, they continue to drive strategic initiatives and transformational change in the finance industry.',
        domain: 'esummit',
      },
    ],
  },

  // {
  //   title: 'Legacy Summit',
  //   id: 'legacy-summit',
  //   color: 'bg-orange-500',
  //   date: 'Oct 6th, 2024',
  //   location: 'STAGE',
  //   start: new Date('2024-10-06T17:30:00'),
  //   imp: true,
  //   domain: 'esummit',
  //   time: '5:30 PM - 7:30 PM',
  //   image:
  //     'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/legacysystem.jpeg',
  //   organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
  //   icon: 'IoRocket',
  //   description:
  //     'The Legacy Summit brings together pioneers and leaders from various industries to discuss the future of business and innovation. A must-attend for anyone seeking inspiration and strategic insights.',
  // },
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
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/advisoryandlegal.jpeg',
    organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
    icon: 'IoRocket',
    speakers: [
      {
        id: 'sumit-jha',
        name: 'Sumit Jha',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/sumit+jha.jpeg',
        title: 'CxO Advisor',
        url: 'https://www.linkedin.com/in/sumitkjha/',
        bio: `Sumit Jha is a forward-thinking leader with over 24 years of expertise in service management, particularly in the niche consulting space. Known for being customer-focused and outcome-oriented, they have successfully incubated service management practices at top firms like Wipro, TechM, and <<Confidential>>, while shaping IT strategies for various clients during major transformations. Their career reflects a strong track record in driving innovation, developing service offerings, and creating value through strategic leadership. With a deep understanding of Service Integration and Management (SIAM), they've consistently delivered impactful solutions that optimize processes, reduce costs, and enhance business outcomes across diverse industries.`,
        domain: 'esummit',
      },
      {
        id: 'chetanbulsari',
        name: 'Chetan Bulsari',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/Chetan+Bulsari+.jpeg',
        title: 'Founder, Human Compass Coaching',
        url: 'https://www.linkedin.com/in/chetanbulsari/',
        bio: 'With an impressive career spanning over two decades, this accomplished professional is not only a Chartered Accountant and Company Secretary but also an Author, Certified Life Coach, and NLP Coach. They have extensive experience in various facets of the finance function, having worked across different segments of a Universal Bank in both India and global locations. Their expertise covers strategic planning, transformation projects, financial services operations management, and process improvement initiatives. Currently, they lead the business management function for the India Shared Service Entity, serving as the Chief of Staff and business manager to the Executive Leadership Group, working closely with India Co-CEOs. Known for their ability to handle multiple projects in fast-paced and challenging environments, they are highly skilled in managing cross-functional teams and fostering collaboration across culturally diverse and virtual teams. With strong interpersonal skills and a global perspective, they continue to drive strategic initiatives and transformational change in the finance industry.',
        domain: 'esummit',
      },
    ],
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
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/incubation.jpeg',
    organizers: [{ name: 'Laukik Patil', phone: '9975875657' }],
    icon: 'IoRocket',
    description:
      'Explore the opportunities of incubation and grants in this insightful session. Learn how to secure funding and resources to accelerate your startup’s growth from early-stage to success.',
  },

  // MUN (Day 2)

  {
    title: 'MUN Breakfast and Reporting',
    icon: 'FcGlobe',
    id: 'breakfast-reporting-day2',
    domain: 'mun',
    color: 'bg-blue-500',
    date: 'Oct 6th, 2024',
    location: 'Admin Office, 3rd Floor',
    start: new Date('2024-10-06T09:00:00'),
    imp: false,
    time: '9:00 AM - 10:00 AM',
    description: 'Start your day with breakfast and reporting.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/breakfast.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'MUN Lunch',
    icon: 'FcGlobe',
    id: 'lunch-day2',
    domain: 'mun',
    color: 'bg-green-500',
    date: 'Oct 6th, 2024',
    location: '3rd Floor Terrace',
    start: new Date('2024-10-06T13:00:00'),
    imp: false,
    time: '1:00 PM - 2:00 PM',
    description: 'Lunch break for all IOIT MUN 2024 participants.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/munlunch.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },
  {
    title: 'MUN High tea and Closing Ceremony',
    icon: 'FcGlobe',
    id: 'high-tea-closing-ceremony',
    domain: 'mun',
    color: 'bg-orange-500',
    date: 'Oct 6th, 2024',
    location: 'MPH',
    start: new Date('2024-10-06T16:00:00'),
    imp: false,
    time: '4:00 PM - 5:00 PM',
    description: 'High tea and closing ceremony to conclude IOIT MUN 2024.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/inaugration.jpeg',
    organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
  },

  {
    title: 'UNSC Committee Session',
    icon: 'FcGlobe',
    id: 'unsc-session-day2',
    domain: 'mun',
    munpage: 'https://www.ioitmun.com/unsc',
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
    id: 'unhrc-session-day2',
    domain: 'mun',
    munpage: 'https://www.ioitmun.com/unhrc',
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
    id: 'aippm-session-day2',
    domain: 'mun',
    munpage: 'https://www.ioitmun.com/aippm',
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
    id: 'uncsw-session-day2',
    domain: 'mun',
    munpage: 'https://www.ioitmun.com/uncsw',
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
    id: 'unodc-session-day2',
    domain: 'mun',
    munpage: 'https://www.ioitmun.com/unodc',
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
