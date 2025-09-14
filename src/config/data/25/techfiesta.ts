export interface TechfiestaData {
  slug: string;
  title: string;
  link?: string;
  logo_img: string;
  manual?: string;
  description: string;
  contacts: { name: string; mobile: string }[];
  date: string;
  time: string;
  venue: string;
}
export const data: TechfiestaData[] = [
  {
    slug: 'drone_workshop',
    title: 'Drone Workshop',
    logo_img: '/25/techfiesta/logo/drone.png',
    description:
      'Take to the skies with our Drone Workshop! Learn the basics of drone design, flight mechanics, and hands-on piloting skills. Perfect for beginners and enthusiasts who want to explore aerial robotics and future tech applications.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
      {
        name: 'Nilay Bhandari',
        mobile: '+91 98765 43210',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'robotics_workshop',
    title: 'Robotics Workshop',
    logo_img: '/25/techfiesta/logo/robotics-workshop.png',
    manual:
      'https://raw.githubusercontent.com/IOIT-ACM/static-assets/main/TENET/25/techfiesta/logo/techfiesta25_roboworkshop.pdf',
    description:
      'Dive into the exciting world of robotics! This workshop will cover fundamental concepts, sensors, actuators, and programming. Get hands-on experience building robots and understanding how they interact with the real world.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
      {
        name: 'Nilay Bhandari',
        mobile: '+91 98765 43210',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'robo_race',
    title: 'Robo Race',
    logo_img: '/25/techfiesta/logo/robo-race.png',
    manual:
      'https://raw.githubusercontent.com/IOIT-ACM/static-assets/main/TENET/25/techfiesta/logo/techfiesta25_robosoccer.pdf',
    description:
      'Speed, precision, and strategy collide in the ultimate Robo Race! Build and program your bot to navigate tricky tracks and overcome obstacles. Only the fastest and smartest robots will claim the title.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
      {
        name: 'Nilay Bhandari',
        mobile: '+91 98765 43210',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'bluff_n_bargain',
    title: 'Bluff & Bargain',
    logo_img: '/25/techfiesta/logo/bnb.png',
    description:
      'Put your wits and negotiation skills to the test! Bluff & Bargain is a thrilling event of strategy, persuasion, and quick thinking where only the sharpest minds and smoothest talkers can win big.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'experience_zone',
    title: 'Experience Zone',
    logo_img: '/25/techfiesta/logo/experiencezone.png',
    description:
      'Step into the Experience Zone – a space where innovation meets fun! Explore cutting-edge gadgets, interactive demos, and immersive tech showcases designed to spark curiosity and creativity.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'capture_the_flag',
    title: 'Capture The Flag',
    logo_img: '#',
    description:
      'Gear up for a battle of brains in our Capture The Flag (CTF) challenge! Solve puzzles, crack codes, and exploit vulnerabilities in a safe environment. A must for aspiring cybersecurity enthusiasts.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'robo_soccer',
    title: 'Robo Soccer',
    logo_img: '/25/techfiesta/logo/robosoccer.png',
    manual:
      'https://raw.githubusercontent.com/IOIT-ACM/static-assets/main/TENET/25/techfiesta/logo/techfiesta25_robosoccer.pdf',
    link: 'https://unstop.com/o/o1LnDph?lb=Nv7Ojnt1&utm_medium=Share&utm_source=krushson17612&utm_campaign=Competitions',
    description:
      'Soccer with a robotic twist! Build and control your bot to dribble, defend, and score goals in a high-energy competition. Teamwork, coding, and creativity will decide the champions.',
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: '13 October',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
];
