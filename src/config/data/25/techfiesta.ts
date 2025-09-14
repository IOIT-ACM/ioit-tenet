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
    slug: 'capture_the_flag',
    title: 'Capture The Flag',
    logo_img: '/25/techfiesta/logo/ctf.png',
    description: `Get ready to step into the world of hacking, puzzles, and problem-solving !
We present to you, TENET CTF, a National Level cybersecurity competition, a Jeopardy style cybersecurity challenge where teams crack codes, uncover secrets, and race against time.
From web exploits to cryptography, forensics, reverse engineering, and OSINT ; every round tests your skills and strategy.
Whether you’re a beginner curious about hacking or a pro ready to dominate, this is your arena to shine.
Join the hunt, capture the flags, and prove your cyber-prowess! 
Refer to the content file to know more!`,
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: 'Monday 13th October 2025',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'drone_workshop',
    title: 'Drone Workshop',
    logo_img: '/25/techfiesta/logo/drone.png',
    description: `TENET '25 presents Drone Workshop ,
 Back after its grand success last year! this time, we’re bringing even more hands-on learning and fun as you explore the world of drones.
Discover how drones are built, learn to control them, and experience the thrill of flying your own creation.
Perfect for beginners and enthusiasts alike, it’s your chance to take innovation to the skies and be part of an unforgettable journey.
Refer to the content file to know more!`,
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
      'https://raw.githubusercontent.com/IOIT-ACM/static-assets/main/TENET25/techfiesta25_roboworkshop.pdf',
    description: `Step into the future with our 2-day Robotics Workshop at TENET 25!
Get hands-on experience building and programming your own bot, guided by experts who make learning fun and impactful.
Whether you’re a beginner or a tech enthusiast, this workshop is designed to spark creativity, teamwork, and innovation.
Don’t just watch technology ,create it!
Join us and be part of the movement to build a thriving robotics culture in our college.
Refer to the content file to know more.`,
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
    date: `Sunday, 12th October 2025 and,
          Monday 13th October 2025`,
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'robo_race',
    title: 'Robo Race',
    logo_img: '/25/techfiesta/logo/robo-race.png',
    manual:
      'https://raw.githubusercontent.com/IOIT-ACM/static-assets/main/TENET25/techfiesta25_roborace.pdf',
    description: `Get ready to rev up your bots and conquer the ultimate challenge at Robo Race at TENET 25!
Navigate twists, turns, ramps, and obstacles as your robot battles against time and rivals for glory. It’s not just about speed , precision, control, and smart design will decide the champions. Whether you’re a rookie or a pro, the track promises adrenaline, innovation, and nonstop action.
Bring your bot, bring your skills, and race your way into the spotlight!
Refer to the content file to know more.`,
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
    date: 'Monday 13th October 2025',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'robo_soccer',
    title: 'Robo Soccer',
    logo_img: '/25/techfiesta/logo/robosoccer.png',
    manual:
      'https://raw.githubusercontent.com/IOIT-ACM/static-assets/main/TENET25/techfiesta25_robosoccer.pdf',
    link: 'https://unstop.com/o/o1LnDph?lb=Nv7Ojnt1&utm_medium=Share&utm_source=krushson17612&utm_campaign=Competitions',
    description: `Step into the arena of Robo Soccer at TENET 25 and let your bots battle it out on the field!
It’s a high-energy clash where speed, control, and strategy decide the champions.
Score goals, defend smartly, and outplay your rivals in this thrilling 1v1 showdown.
Whether you bring your own bot or play with the ones provided, the excitement is guaranteed.
Join the game where robotics meets football, and every move counts toward victory!
Refer to the content file to know more!`,
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: 'Monday 13th October 2025',
    time: '9:00 am to 10:99 am',
    venue: 'AISSMS IOIT',
  },
  {
    slug: 'bluff_n_bargain',
    title: 'Bluff & Bargain',
    logo_img: '/25/techfiesta/logo/bnb.png',
    description: `TENET' 25 presents Bluff & Bargain , the ultimate showdown of wit, words, and strategy!
Here, it’s not the smartest who wins, but the one who can outsmart, outtalk, and outplay their rivals.
Negotiate, persuade, and bluff your way through tricky deals where every word counts.
Quick thinking, sharp communication, and a bit of boldness will be your greatest weapons.
After all, It’s not the time to play the odds, it’s time to play the man.
Step in, test your game, and see if you can bargain your way to victory!
Refer to the content file to know more about the competition`,
    contacts: [
      {
        name: 'Krushi Soni',
        mobile: '+91 72494 53073',
      },
    ],
    date: 'Sunday, 12th October 2025',
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
];
