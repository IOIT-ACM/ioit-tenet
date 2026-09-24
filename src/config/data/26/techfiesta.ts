export interface Contact {
  name: string;
  mobile: string;
}

export interface RegistrationTier {
  label: string;
  meta: string;
  price: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface PrizeCategory {
  label: string;
  description: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface TechfiestaEventDetail {
  about: string[];
  howItWorks: HowItWorksStep[];
  registration: RegistrationTier[];
  keyRules: string[];
  /** Omit for workshops with no cash prize pool — just a completion certificate. */
  prizePool?: string;
  prizes: PrizeCategory[];
  certificateNote?: string;
  quickFacts: QuickFact[];
  contacts: Contact[];
  rulebook?: string;
}

export interface TechfiestaEvent {
  slug: string;
  title: string;
  tagline: string;
  logo: string;
  /** Short day-of-month badge shown on the landing grid, e.g. "23" or "TBA" */
  day: string;
  /** Full date label, e.g. "23 Oct 2026" or "23–24 Oct 2026" */
  dateLabel: string;
  cardDescription: string;
  registerLink?: string;
  /** Present once the event's own detail page has been rebuilt on the new design */
  detail?: TechfiestaEventDetail;
}

export interface ScheduleItem {
  event: string;
  time: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  weekday: string;
  items: ScheduleItem[];
}

export const festivalDates = '23 – 24 October 2026';

export const schedule: ScheduleDay[] = [
  {
    day: '23',
    date: 'OCT',
    weekday: 'DAY 1 · FRIDAY',
    items: [
      { event: 'Robo Race', time: '9 AM – 5 PM' },
      { event: 'Robo Soccer', time: '9 AM – 5 PM' },
      { event: 'Fox Hunt', time: '11 AM onwards' },
      { event: 'Vibe-a-Thon', time: '10:30 AM – 5 PM' },
      { event: 'Robotics Workshop', time: 'TBD' },
    ],
  },
  {
    day: '24',
    date: 'OCT',
    weekday: 'DAY 2 · SATURDAY',
    items: [
      { event: 'Bluff & Bargain – 2nd Edition', time: '10 AM – 5 PM' },
      { event: 'Drone Workshop', time: '10 AM – 5 PM' },
      { event: 'Robotics Workshop', time: 'TBD' },
    ],
  },
];

export const data: TechfiestaEvent[] = [
  {
    slug: 'robo_race',
    title: 'Robo Race',
    tagline: 'Ready. Set. Race.',
    logo: '/26/techfiesta/logo/robo-race.webp',
    day: '23',
    dateLabel: '23 Oct 2026',
    cardDescription:
      'Guide your robot through an obstacle track of ramps, bridges and hairpin turns. The lowest time, penalties included, wins.',
    registerLink: 'https://unstop.com/p/robo-race-tenet-aissms-institute-of-information-technology-pune-maharashtra-1749369',
    detail: {
      about: [
        'Robo Race is a robotics competition where custom-built robots navigate an obstacle track designed to test speed, balance, maneuverability and control. Guide your robot through every checkpoint without losing control.',
        'The winner is the team with the fastest adjusted completion time: the actual time on the track plus any penalties.',
      ],
      howItWorks: [
        {
          title: 'The track',
          description:
            'Straights, hairpin turns, zig-zags, inclines and ramps, elevated bridges, rough terrain, speed breakers and barriers. Organizers may reveal or modify the exact layout.',
        },
        {
          title: 'Practice and official run',
          description:
            'One practice attempt, then a single official timed run that alone counts for scoring. A robot that flips or gets stuck is reset at the last checkpoint passed.',
        },
        {
          title: 'Checkpoints',
          description: 'Pass every checkpoint in sequence. Missing or bypassing one attracts a penalty.',
        },
        {
          title: 'Scoring',
          description:
            'Final time = completion time + penalties. Bypassing a checkpoint, resetting after a flip or stall, and going off course without crashing each add 10 seconds.',
        },
      ],
      registration: [
        { label: 'Solo, own bot', meta: '1 member', price: 'Rs. 99' },
        { label: 'Solo, organizer bot', meta: '1 member', price: 'Rs. 149' },
        { label: 'Team, own bot', meta: '2 to 4 members', price: 'Rs. 149' },
        { label: 'Team, organizer bot', meta: '2 to 4 members', price: 'Rs. 199' },
      ],
      keyRules: [
        'Only one team member may enter the track and operate the robot during a run.',
        'No maintenance, repairs or component replacement during the official trial.',
        'Robots must move on wheels or tracks. Flying or jumping mechanisms are prohibited.',
        'Maximum size 30 x 30 x 30 cm (plus or minus 5 percent), maximum weight 5 kg, maximum 12V DC on-board power.',
        'Robots must be student built or student integrated. Modified toy cars and fully pre-built commercial robots are not allowed.',
        'Wired or wireless control is permitted, as long as it does not interfere with other teams.',
        'Damage to the track or equipment can mean disqualification and recovery of repair cost.',
        "The organizing committee's decision on scoring, penalties and compliance is final.",
      ],
      prizePool: 'Rs. 10,000',
      prizes: [
        { label: 'Champion', description: 'Team with the lowest adjusted completion time.' },
        { label: 'Runner up', description: 'Team with the second lowest adjusted completion time.' },
      ],
      certificateNote: 'Certificates go to the champion, the runner up and every participant who completes the track.',
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Timing', value: '9:00 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Participation', value: 'Solo or team of 2–4' },
        { label: 'Entry fee', value: 'Rs. 99 to 199' },
        { label: 'Prize pool', value: 'Rs. 10,000' },
        { label: 'Awards', value: 'Trophy & certificate' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Vishakha Shahakar', mobile: '+91 96994 57989' },
      ],
      rulebook: 'https://d8it4huxumps7.cloudfront.net/uploads/attachements/files/d9fdacf8-4d37-4e68-95d2-dd339d6b76ad.pdf',
    },
  },
  {
    slug: 'robo_soccer',
    title: 'Robo Soccer',
    tagline: 'Build. Control. Score. Win.',
    logo: '/26/techfiesta/logo/robo-soccer.webp',
    day: '23',
    dateLabel: '23 Oct 2026',
    cardDescription:
      'A 1v1 knockout football tournament for custom-built robots. Two halves, a Golden Goal and plenty of quick reflexes.',
    registerLink: 'https://unstop.com/p/robo-soccer-tenet-aissms-institute-of-information-technology-pune-maharashtra-1749383',
    detail: {
      about: [
        'Robo Soccer is a 1v1 robotics competition where teams battle it out on a dedicated football arena with custom-built robots. It tests control, speed, maneuverability, strategy and real-time decision making.',
        'Teams compete head to head in a knockout format. The winner of each match advances until the final decides the champion.',
      ],
      howItWorks: [
        {
          title: 'Match format',
          description:
            '1v1 knockout. Each match lasts 6 minutes, in two halves of 3 minutes, and teams switch sides after the first half. Most goals wins.',
        },
        {
          title: 'Tie breaker',
          description: 'If the score is level at full time, a Golden Goal period is played. The first goal ends the match immediately.',
        },
        {
          title: 'Scoring',
          description: 'Every goal scored against the opponent counts as 1 goal. The winner of each match advances to the next round.',
        },
        {
          title: 'Fouls and penalties',
          description:
            'Interference, reckless operation, deliberate damage or unauthorized entry to the arena can bring a warning, a restart, a goal penalty or disqualification.',
        },
      ],
      registration: [
        { label: 'Category 1', meta: 'Your own bot, 1 to 4 members', price: 'Rs. 199 / team' },
      ],
      keyRules: [
        'Every team nominates one operator who controls the robot during the match. Solo teams operate their own robot.',
        'Teams must be ready when their match is called. Delayed teams may face a walkover or disqualification.',
        "Physical interference with the opponent's robot by team members is strictly prohibited.",
        'Nobody enters the arena during a match unless the referee or organizers allow it.',
        'Own-bot teams: maximum 30 x 30 x 30 cm, maximum 5 kg, maximum 12V DC from on-board batteries, wheels or tracks only.',
        'Robots must be student built or student integrated. Completely pre-built commercial robots are not permitted.',
        "The referee's decision on fouls, goals, penalties and results is final.",
      ],
      prizePool: 'Rs. 5,000',
      prizes: [
        { label: 'Champion', description: 'Winner of the final match.' },
        { label: 'Runner up', description: 'Finalist team.' },
      ],
      certificateNote: 'Certificates go to the champion, the runner up and participants as specified by the organizers.',
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Timing', value: '9:00 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Participation', value: 'Solo or team of up to 4' },
        { label: 'Entry fee', value: 'Rs.  199 per team' },
        { label: 'Prize pool', value: 'Rs. 5,000' },
        { label: 'Awards', value: 'Trophy & certificate' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Vishakha Shahakar', mobile: '+91 96994 57989' },
      ],
      rulebook: 'https://d8it4huxumps7.cloudfront.net/uploads/attachements/files/015e9e00-5e1a-43a1-82a5-b67bb215c244.pdf',
    },
  },
  {
    slug: 'fox_hunt',
    title: 'Fox Hunt',
    tagline: 'Decode the Trail. Track the Signal. Find the Fox.',
    logo: '/26/techfiesta/logo/fox-hunt.webp',
    day: '23',
    dateLabel: '23 Oct 2026',
    cardDescription: 'Follow the signals, decode the clues and track down the hidden fox before the other teams do.',
    registerLink: 'https://unstop.com/p/fox-hunt-tenet-aissms-institute-of-information-technology-pune-maharashtra-1749242',
    detail: {
      about: [
        'Fox Hunt is a technical adventure challenge that combines problem solving, navigation, teamwork and RF signal tracking. Teams decode location-based clues across the campus and race to the Receiver Hub.',
        'The first four teams to clear verification move on to hunt a hidden radio transmitter, the Fox, using RF receivers and directional antennas.',
      ],
      howItWorks: [
        {
          title: 'Round 1: Crack the Trail',
          description:
            'Up to 45 minutes. Twenty teams, split into four groups of five, each get a unique sequence of clues and checkpoints. Decode, navigate, verify and reach the Receiver Hub. Only the first 4 verified teams qualify.',
        },
        {
          title: 'Round 2: Track the Fox',
          description:
            'Up to 15 minutes. The four finalists get an RF receiver and a directional antenna and must physically locate the hidden transmitter inside the hunting zone.',
        },
        {
          title: 'How it is won',
          description: 'The first team to locate and successfully verify the Fox wins Fox Hunt.',
        },
      ],
      registration: [
        { label: 'Registration fee', meta: 'Per team', price: 'Rs. 200' },
        { label: 'Team size', meta: 'Compulsory', price: '4 members' },
        { label: 'Teams', meta: 'Participating', price: '20 teams' },
      ],
      keyRules: [
        'Report by 10:30 AM for registration and briefing. The competition begins at 11:00 AM and all teams start Round 1 together.',
        'Follow your assigned clue sequence. Skipping checkpoints or solving clues out of order is not allowed.',
        'Removing, hiding, damaging or tampering with clues or checkpoints is strictly prohibited.',
        'All four members stay together throughout the challenge and stay within the event boundaries.',
        'No outside help and no unauthorized communication with other teams or people outside yours.',
        'Damage to equipment can mean disqualification and recovery of repair or replacement cost.',
        "The Event Lead's decision is final in case of a dispute or unforeseen circumstance.",
      ],
      prizePool: 'Rs. 3,000',
      prizes: [
        { label: 'Winner', description: 'The first qualifying team to locate and verify the Fox.' },
        { label: 'Finalists', description: 'All four teams reaching Round 2 receive Finalist Certificates.' },
      ],
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Reporting', value: '10:30 AM' },
        { label: 'Timing', value: '11:00 AM onwards' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Team size', value: 'Team of 4' },
        { label: 'Entry fee', value: 'Rs. 200 / team' },
        { label: 'Prize pool', value: 'Rs. 3,000' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Parth Kamble', mobile: '+91 80551 50505' },
      ],
      rulebook: 'https://d8it4huxumps7.cloudfront.net/uploads/attachements/files/a1d8d40a-d7e4-4e53-984b-024fe353097b.pdf',
    },
  },
  {
    slug: 'vibe_a_thon',
    title: 'Vibe-a-Thon',
    tagline: 'Think Fast. Build Smart. Code Your Vibe.',
    logo: '/26/techfiesta/logo/vibe-a-thon.webp',
    day: '23',
    dateLabel: '23 Oct 2026',
    cardDescription:
      'A surprise problem statement, five hours and your laptop. Build a working prototype from scratch and demo it to the judges.',
    registerLink: '/register?d=techfiesta',
    detail: {
      about: [
        'Vibe-a-Thon is a fast-paced, on-site build challenge. A surprise problem statement is revealed, and you turn it into a working digital solution in a single continuous session.',
        'Teams go through the full cycle of ideation, development, testing and a live prototype demo. Judges score the prototype itself.',
      ],
      howItWorks: [
        {
          title: 'Round 1: Problem statement reveal',
          description:
            'The problem statement is revealed on the spot. Development can begin only after the official announcement, and everything is built from scratch.',
        },
        {
          title: 'Round 2: Build sprint',
          description:
            'A 5-hour continuous window to ideate, design, develop and test. Create a fresh GitHub repository at the start. Any tech stack is allowed.',
        },
        {
          title: 'Round 3: Prototype demo',
          description: 'Demo your prototype directly to the judges. No slide deck. A strict time limit is announced on the day.',
        },
        {
          title: 'Judging',
          description: 'UI and UX, functionality, solution feasibility, innovation and the clarity of your demonstration.',
        },
      ],
      registration: [{ label: 'Per team', meta: 'Solo or team of 2', price: 'Rs. 150' }],
      keyRules: [
        'Open to enrolled undergraduate and postgraduate students and working professionals. Cross-college teams are allowed.',
        'Register solo or in a team of up to 2. Team members cannot be changed after registration.',
        'Do not build the solution in advance. Only setting up environments, software, accounts and tools is allowed.',
        'Previously created or pre-built repositories cannot be reused.',
        'Bring a charged laptop, its charger and your development tools and accounts, set up beforehand.',
        'The organizers may disqualify any team found breaking the rules.',
      ],
      prizes: [
        { label: '1st place', description: 'Winner. Prize and Certificate of Merit.' },
        { label: '2nd place', description: 'Runner up. Prize and Certificate of Merit.' },
      ],
      certificateNote: 'Every team receives a certificate of participation.',
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Timing', value: '10:30 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Team size', value: 'Solo or team of 2' },
        { label: 'Entry fee', value: 'Rs. 150 / team' },
      ],
      contacts: [
        { name: 'Siddhesh Waghmare', mobile: '+91 70286 63868' },
      ],
      rulebook: '/26/techfiesta/rulebooks/vibe-a-thon-rulebook.pdf',
    },
  },
  {
    slug: 'bluff_n_bargain',
    title: 'Bluff & Bargain – 2nd Edition',
    tagline: 'Deals and deception.',
    logo: '/26/techfiesta/logo/bluff-and-bargain.webp',
    day: '24',
    dateLabel: '24 Oct 2026',
    cardDescription: 'The game of deals and deception is back. Trade smart, read the table and bluff your way past every rival.',
    registerLink: '/register?d=techfiesta',
  },
  {
    slug: 'drone_workshop',
    title: 'Drone Workshop',
    tagline: 'Build. Program. Fly. Explore.',
    logo: '/26/techfiesta/logo/drone-workshop.webp',
    day: '24',
    dateLabel: '24 Oct 2026',
    cardDescription:
      'One hands-on day: assemble a drone, program it, fly it, then finish with a pass-through-the-holes Drone Arena challenge.',
    registerLink: 'https://unstop.com/workshops-webinars/drone-workshop-tenet-aissms-institute-of-information-technology-pune-maharashtra-1752656',
    detail: {
      about: [
        'The Drone Workshop is a one-day, hands-on introduction to drone technology, from assembly and programming to piloting and autonomous operations. You learn by doing, with demonstrations and time on real drone systems.',
        'No prior drone experience is needed. Quadcopter and hexacopter kits are provided and the day closes with a Drone Arena challenge.',
      ],
      howItWorks: [
        {
          title: 'Assembly and programming',
          description: 'Understand drone components, assemble a quadcopter or hexacopter, and learn the basics of programming a drone.',
        },
        {
          title: 'Autonomous and traditional drones',
          description: 'How autonomous drones differ from manually flown ones, and an introduction to autonomous flight.',
        },
        {
          title: 'Piloting',
          description: 'The basics of flight and a supervised practical flying session focused on safe, controlled operation.',
        },
        {
          title: 'Mission Planner and ROS basics',
          description: 'Plan flights and understand autonomous missions, then see how the Robot Operating System is used for drones and robotics.',
        },
        {
          title: 'Drone Arena challenge',
          description: 'A fun closing competition: pilot your drone through designated holes and obstacles in the arena.',
        },
      ],
      registration: [
        { label: 'Registration fee', meta: 'Per participant', price: 'Rs. 600' },
        { label: 'Early bird', meta: 'First 30 registered participants', price: 'Rs. 50 off' },
      ],
      keyRules: [
        'Individual participation. You may be grouped with others to work on a kit, and instructors decide how many share each one.',
        'Follow instructors at all times and never modify, dismantle or operate equipment without permission.',
        'Keep a safe distance from operating drones and rotating propellers. Never fly towards people or outside the designated area.',
        "Practical flying depends on equipment, weather and safety conditions. The instructor's decision is final.",
        'Kits, drones and components stay with the organizers or workshop partner. They cannot be taken home.',
      ],
      prizes: [{ label: 'Certificate', description: 'Everyone who attends and completes the workshop receives a Certificate of Participation.' }],
      quickFacts: [
        { label: 'Date', value: '24 Oct 2026' },
        { label: 'Reporting', value: '9:30 AM' },
        { label: 'Timing', value: '10:00 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Format', value: 'Individual' },
        { label: 'Entry fee', value: 'Rs. 600 / participant' },
        { label: 'Awards', value: 'Certificate' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Vishakha Shahakar', mobile: '+91 96994 57989' },
      ],
      rulebook: 'https://d8it4huxumps7.cloudfront.net/uploads/attachements/files/5d78849a-2a88-4c0e-89b6-d98ec7075315.pdf',
    },
  },
  {
    slug: 'capture_the_flag',
    title: 'Capture the Flag',
    tagline: 'Crack it before they do.',
    logo: '#',
    day: 'TBA',
    dateLabel: 'TBA',
    cardDescription: 'Coming soon.',
    // Was the 2025 Unstop link, carried over by mistake — not confirmed live for '26. Falls
    // back to the generic register page until a real 2026 link is available.
    registerLink: '/register?d=techfiesta',
  },
  {
    slug: 'robotics_workshop',
    title: 'Robotics Workshop',
    tagline: 'Where Ideas Become Robots.',
    logo: '/26/techfiesta/logo/robotics-workshop.webp',
    day: '23–24',
    dateLabel: '23–24 Oct 2026',
    cardDescription: 'Two days from first circuit to a working Robo Soccer bot. Learn electronics, CAD and soldering by building as you go.',
    registerLink: 'https://unstop.com/p/robo-workshop-aissms-institute-of-information-technology-pune-maharashtra-1759652',
    detail: {
      about: [
        'This two day hands-on workshop takes participants from the fundamentals of electronics and mechanical design through to the assembly and testing of a functional Robo Soccer robot.',
        'The learning path moves from concepts and circuit practice to CAD, digital assembly, physical construction, soldering, testing and final preparation.',
      ],
      howItWorks: [
        {
          title: 'Basic electronics and H-bridge theory',
          description: 'Voltage, current, resistance and multimeter measurements, then the purpose of an H-bridge and how it reverses DC motor direction.',
        },
        {
          title: 'DPDT switch and chassis CAD',
          description: 'Wire a DPDT switch as a manual H-bridge, then sketch and model the robot chassis in Fusion 360 using sheet metal tools.',
        },
        {
          title: 'Digital robot assembly',
          description: 'Import the CAD parts, apply joints and constraints, check for interference and validate the movement digitally before building.',
        },
        {
          title: 'Physical assembly and soldering',
          description: 'Assemble the chassis, wheels, motors and supports, then solder motor, switch and power connections with safe technique.',
        },
        {
          title: 'Testing and final preparation',
          description: 'Inspect the robot, correct any loose or unsafe connections, verify movement and prepare the competition-ready soccer bot.',
        },
        {
          title: 'Mini competition',
          description: 'A closing competition after the workshop puts the bots participants built to the test.',
        },
      ],
      registration: [
        { label: 'Solo participant', meta: 'Grouped by organizers, no take-home bot', price: 'Rs. 650' },
        { label: 'Group of 4', meta: 'Take the bot you build home', price: 'Rs. 600 / participant' },
      ],
      keyRules: [
        'Follow the instructions of the workshop coordinators at all times.',
        'Never operate equipment, circuits or robots in an unsafe manner.',
        'Disconnect power before changing, rewiring, modifying or soldering any circuit.',
        'Check circuit connections and polarity before powering the system.',
        'Handle tools, components and equipment carefully, and return them after use.',
        'Report any damaged component, loose connection, overheating or unusual behaviour immediately.',
        'During Robo Soccer, use only approved robots and do not intentionally interfere with or damage another robot or the field.',
        'Groups of 4 may take their bot home; solo participants are grouped by organizers and will not take a bot home.',
        "The referee and coordinators' decisions on safety, discipline and competition conduct are final.",
      ],
      prizes: [
        { label: 'Mini competition', description: 'A closing competition after the workshop tests the bots participants have built.' },
        { label: 'Certificate', description: 'Attend the complete workshop schedule to receive a Certificate of Participation, subject to the organizer’s final policy.' },
      ],
      quickFacts: [
        { label: 'Date', value: '23–24 Oct 2026' },
        { label: 'Reporting', value: '9:30 AM' },
        { label: 'Timing', value: '10:00 AM – 4:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Format', value: 'Solo or group of 4' },
        { label: 'Entry fee', value: 'Rs. 600 to 650' },
        { label: 'Awards', value: 'Certificate' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Parth Kamble', mobile: '+91 80551 50505' },
      ],
      rulebook: '/26/techfiesta/rulebooks/robotics-workshop-rulebook.pdf',
    },
  },
];
