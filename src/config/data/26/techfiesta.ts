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

export const festivalDates = '23 – 25 October 2026';

export const schedule: ScheduleDay[] = [
  {
    day: '23',
    date: 'OCT',
    weekday: 'DAY 1 · FRIDAY',
    items: [
      { event: 'Robo Race', time: '9 AM – 5 PM' },
      { event: 'Robo Soccer', time: '9 AM – 5 PM' },
      { event: 'Fox Hunt', time: '10:30 AM onwards' },
      { event: 'Vibe-a-Thon', time: '10:30 AM – 5 PM' },
    ],
  },
  {
    day: '24',
    date: 'OCT',
    weekday: 'DAY 2 · SATURDAY',
    items: [
      { event: 'Bluff & Bargain – 2nd Edition', time: '10 AM – 5 PM' },
      { event: 'Drone Workshop', time: '10 AM – 5 PM' },
      { event: 'Capture the Flag', time: '10 AM – 4 PM' },
      { event: 'Robotics Workshop', time: '10 AM – 4 PM' },
    ],
  },
  {
    day: '25',
    date: 'OCT',
    weekday: 'DAY 3 · SUNDAY',
    items: [{ event: 'Robotics Workshop', time: '10 AM – 4 PM' }],
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
    registerLink:
      'https://unstop.com/p/robo-race-tenet-aissms-institute-of-information-technology-pune-maharashtra-1749369',
    detail: {
      about: [
        'Robo Race is a robotics competition where custom-built robots navigate an obstacle track designed to test speed, balance, maneuverability and control. Guide your robot through every checkpoint without losing control.',
        'The winner is the team with the fastest adjusted completion time: the actual time on the track plus any penalties.',
        'Compete with your own bot or use a robot provided by the organizers, subject to availability. Teams of 1 to 4 members are welcome.',
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
          description:
            'Pass every checkpoint in sequence. Missing or bypassing one attracts a penalty.',
        },
        {
          title: 'Scoring',
          description:
            'Final time = completion time + penalties. Bypassing a checkpoint, resetting after a flip or stall, and going off course without crashing each add 10 seconds.',
        },
      ],
      registration: [
        {
          label: 'Organizer bot',
          meta: '1 to 4 members',
          price: 'Rs. 149 / team',
        },
        { label: 'Own bot', meta: '1 to 4 members', price: 'Rs. 199 / team' },
      ],
      keyRules: [
        'Choose organizer bot or own bot at registration. The category cannot be changed afterwards without organizer approval.',
        'Only one team member may enter the track and operate the robot during a run.',
        'No maintenance, repairs or component replacement during the official trial.',
        'Own bots must move on wheels or tracks. Flying, jumping or aerial mechanisms are prohibited.',
        'Own bots: maximum size 30 x 30 x 30 cm (plus or minus 5 percent), maximum weight 5 kg including batteries, maximum 12V DC on-board power.',
        'Own bots must be student built or student integrated. Modified toy cars and fully pre-built commercial robots are not allowed.',
        'Organizer bots must be handled with care for the whole competition.',
        'Wired or wireless control is permitted, as long as it does not interfere with other teams.',
        'Damage to the track or equipment can mean disqualification and recovery of repair cost.',
        "The organizing committee's decision on scoring, penalties and compliance is final.",
      ],
      prizePool: 'Rs. 10,000',
      prizes: [
        {
          label: 'Champion',
          description: 'Team with the lowest adjusted completion time.',
        },
        {
          label: 'Runner up',
          description: 'Team with the second lowest adjusted completion time.',
        },
      ],
      certificateNote:
        'Certificates go to the champion, the runner up and every participant who completes the track.',
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Timing', value: '9:00 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Participation', value: 'Solo or team of 1–4' },
        { label: 'Reporting', value: '9:00 AM' },
        { label: 'Robot', value: 'Own bot or organizer bot' },
        { label: 'Entry fee', value: 'Rs. 149 to 199 / team' },
        { label: 'Prize pool', value: 'Rs. 10,000' },
        { label: 'Awards', value: 'Prizes & certificates' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Vishakha Shahakar', mobile: '+91 96994 57989' },
      ],
      rulebook: '/26/techfiesta/rulebooks/robo-race-rulebook.pdf',
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
      'A 1v1 knockout football tournament with your own bot. Two halves, a Golden Goal and plenty of quick reflexes.',
    registerLink:
      'https://unstop.com/p/robo-soccer-tenet-aissms-institute-of-information-technology-pune-maharashtra-1749383',
    detail: {
      about: [
        'Robo Soccer is a 1v1 robotics competition where teams battle it out on a dedicated football arena using their custom-built robots. It tests control, speed, maneuverability, strategy and real-time decision making.',
        'Teams compete head to head in a knockout format. The winner of each match advances until the final decides the champion.',
        'Every team brings its own competition-compliant bot.',
      ],
      howItWorks: [
        {
          title: 'Match format',
          description:
            '1v1 knockout. Each match lasts 6 minutes, in two halves of 3 minutes, and teams switch sides after the first half. Most goals wins.',
        },
        {
          title: 'Tie breaker',
          description:
            'If the score is level at full time, a Golden Goal period is played. The first goal ends the match immediately.',
        },
        {
          title: 'Scoring',
          description:
            'Every goal scored against the opponent counts as 1 goal. The winner of each match advances to the next round.',
        },
        {
          title: 'Fouls and penalties',
          description:
            'Interference, reckless operation, deliberate damage or unauthorized entry to the arena can bring a warning, a restart, a goal penalty or disqualification.',
        },
      ],
      registration: [
        {
          label: 'Registration fee',
          meta: 'Own bot, 1 to 4 members',
          price: 'Rs. 199 / team',
        },
      ],
      keyRules: [
        'Every team nominates one operator who controls the robot during the match. In teams of two or more, the operator may change between matches with organizer approval.',
        'Teams must be ready when their match is called. Delayed teams may face a walkover or disqualification.',
        "Physical interference with the opponent's robot by team members is strictly prohibited.",
        'Nobody enters the arena during a match unless the referee or organizers allow it.',
        'Own bots only: maximum size 30 x 30 x 30 cm, maximum weight 5 kg including batteries, maximum 12V DC on-board power.',
        'Robots must use wheels or tracks. Flying or jumping mechanisms are not permitted. Wired or wireless control is allowed.',
        'Robots must be student built or student integrated. Fully pre-built commercial robots are not permitted, and sharp or dangerous parts are prohibited.',
        'Deliberate damage to the opponent robot or the arena may result in disqualification. Organizers may inspect robots before play.',
        "The referee's decision on fouls, goals, penalties and results is final.",
      ],
      prizePool: 'Rs. 5,000',
      prizes: [
        { label: 'Champion', description: 'Winner of the final match.' },
        { label: 'Runner up', description: 'Finalist team.' },
      ],
      certificateNote:
        'Certificates go to the champion, the runner up and participants as specified by the organizers.',
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Reporting', value: '9:00 AM' },
        { label: 'Competition', value: '9:30 AM onwards' },
        { label: 'Timing', value: '9:00 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Participation', value: 'Solo or team of up to 4' },
        { label: 'Robot', value: 'Bring your own' },
        { label: 'Entry fee', value: 'Rs. 199 per team' },
        { label: 'Prize pool', value: 'Rs. 5,000' },
        { label: 'Awards', value: 'Prizes & certificates' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Vishakha Shahakar', mobile: '+91 96994 57989' },
      ],
      rulebook: '/26/techfiesta/rulebooks/robo-soccer-rulebook.pdf',
    },
  },
  {
    slug: 'fox_hunt',
    title: 'Fox Hunt',
    tagline: 'Decode the Trail. Track the Signal. Find the Fox.',
    logo: '/26/techfiesta/logo/fox-hunt.webp',
    day: '23',
    dateLabel: '23 Oct 2026',
    cardDescription:
      'Follow the signals, decode the clues and track down the hidden fox before the other teams do.',
    registerLink:
      'https://unstop.com/p/fox-hunt-tenet-aissms-institute-of-information-technology-pune-maharashtra-1749242',
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
          description:
            'The first team to locate and successfully verify the Fox wins Fox Hunt.',
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
        {
          label: 'Winner',
          description:
            'The first qualifying team to locate and verify the Fox.',
        },
        {
          label: 'Finalists',
          description:
            'All four teams reaching Round 2 receive Finalist Certificates.',
        },
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
      rulebook:
        'https://d8it4huxumps7.cloudfront.net/uploads/attachements/files/a1d8d40a-d7e4-4e53-984b-024fe353097b.pdf',
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
    registerLink:
      'https://unstop.com/hackathons/vibe-a-thon-aissms-institute-of-information-technology-1758905',
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
          description:
            'Demo your prototype directly to the judges. No slide deck. A strict time limit is announced on the day.',
        },
        {
          title: 'Judging',
          description:
            'UI and UX, functionality, solution feasibility, innovation and the clarity of your demonstration.',
        },
      ],
      registration: [
        { label: 'Per team', meta: 'Solo or team of 2', price: 'Rs. 99' },
      ],
      keyRules: [
        'Open to enrolled undergraduate and postgraduate students and working professionals. Cross-college teams are allowed.',
        'Register solo or in a team of up to 2. Team members cannot be changed after registration.',
        'Do not build the solution in advance. Only setting up environments, software, accounts and tools is allowed.',
        'Previously created or pre-built repositories cannot be reused.',
        'Bring a charged laptop, its charger and your development tools and accounts, set up beforehand.',
        'The organizers may disqualify any team found breaking the rules.',
      ],
      prizes: [
        {
          label: '1st place',
          description: 'Winner. Prize and Certificate of Merit.',
        },
        {
          label: '2nd place',
          description: 'Runner up. Prize and Certificate of Merit.',
        },
      ],
      certificateNote: 'Every team receives a certificate of participation.',
      quickFacts: [
        { label: 'Date', value: '23 Oct 2026' },
        { label: 'Reporting', value: '9:30 AM' },
        { label: 'Timing', value: '10:30 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Team size', value: 'Solo or team of 2' },
        { label: 'Entry fee', value: 'Rs. 99 / team' },
      ],
      contacts: [{ name: 'Siddhesh Waghmare', mobile: '+91 70286 63868' }],
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
    cardDescription:
      'The game of deals and deception is back. Trade smart, read the table and bluff your way past every rival.',
    registerLink:
      'https://unstop.com/p/bluff-bargain-aissms-institute-of-information-technology-pune-maharashtra-1761970',
    detail: {
      about: [
        'Suits meets Shark Tank. Bluff & Bargain, 2nd Edition is a high pressure business simulation that combines pitching, negotiation, strategy, information management and deal making.',
        'Step into the role of a business representative and dealmaker across two rounds: pitch a company with a confidential brief, then analyse a partnership contract in the Boardroom.',
      ],
      howItWorks: [
        {
          title: 'Round 1: The Shark Round',
          description:
            '30 teams are split into 6 business domains, 5 teams each. Every team gets a confidential company brief at least 24 hours before the event, then gives a 5 minute pitch followed by a 2 minute judges Q&A. You may strategically bluff, highlight or hold back information. 6 finalists advance.',
        },
        {
          title: 'Round 2: The Suits Round',
          description:
            'The 6 finalists enter the Boardroom and analyse the same Partnership Contract as the Client Company. Spot flaws, explain their impact and propose practical solutions, all teams simultaneously.',
        },
        {
          title: 'Scoring',
          description:
            'Flaw identified with a practical solution: 2 points. Flaw identified without a practical solution: 1 point. The highest total in Round 2 wins.',
        },
      ],
      registration: [
        { label: 'Per team', meta: 'Team of 2', price: 'Rs. 150' },
      ],
      keyRules: [
        'Open to college students from any discipline. Teams of exactly 2, cross-college teams allowed. No prior legal or business qualification needed.',
        'Team composition cannot be changed after registration, and each participant can be in only one team.',
        'Both members must actively participate. Report by 9:15 AM and attend the official briefing.',
        "Keep your confidential brief confidential. Never access, obtain or share another team's information or materials.",
        'Strategic bluffing is allowed within the format. External assistance, cheating or impersonation may lead to disqualification.',
        "The Event Lead's decision is final in case of disputes.",
      ],
      prizePool: 'Rs. 5,000',
      prizes: [
        { label: 'Winner', description: 'Rs. 2,500 and a certificate.' },
        { label: '1st runner up', description: 'Rs. 1,500 and a certificate.' },
        {
          label: 'Special mention',
          description:
            'Rs. 1,000 for an exceptional or noteworthy performance.',
        },
      ],
      certificateNote:
        'Round 2 qualifiers receive Finalist Certificates, and all participating teams receive certificates.',
      quickFacts: [
        { label: 'Date', value: '24 Oct 2026' },
        { label: 'Reporting', value: '9:15 AM' },
        { label: 'Timing', value: '10:00 AM – 5:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Team size', value: '2 members' },
        { label: 'Teams', value: '30' },
        { label: 'Entry fee', value: 'Rs. 150 / team' },
        { label: 'Prize pool', value: 'Rs. 5,000' },
      ],
      contacts: [
        { name: 'Sujal Gaikwad', mobile: '+91 85309 43237' },
        { name: 'Vishakha Shahakar', mobile: '+91 96994 57989' },
      ],
      rulebook: '/26/techfiesta/rulebooks/bluff-and-bargain-rulebook.pdf',
    },
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
    registerLink:
      'https://unstop.com/workshops-webinars/drone-workshop-tenet-aissms-institute-of-information-technology-pune-maharashtra-1752656',
    detail: {
      about: [
        'The Drone Workshop is a one-day, hands-on introduction to drone technology, from assembly and programming to piloting and autonomous operations. You learn by doing, with demonstrations and time on real drone systems.',
        'No prior drone experience is needed. Quadcopter and hexacopter kits are provided and the day closes with a Drone Arena challenge.',
      ],
      howItWorks: [
        {
          title: 'Assembly and programming',
          description:
            'Understand drone components, assemble a quadcopter or hexacopter, and learn the basics of programming a drone.',
        },
        {
          title: 'Autonomous and traditional drones',
          description:
            'How autonomous drones differ from manually flown ones, and an introduction to autonomous flight.',
        },
        {
          title: 'Piloting',
          description:
            'The basics of flight and a supervised practical flying session focused on safe, controlled operation.',
        },
        {
          title: 'Mission Planner and ROS basics',
          description:
            'Plan flights and understand autonomous missions, then see how the Robot Operating System is used for drones and robotics.',
        },
        {
          title: 'Drone Arena challenge',
          description:
            'A fun closing competition: pilot your drone through designated holes and obstacles in the arena.',
        },
      ],
      registration: [
        {
          label: 'Registration fee',
          meta: 'Per participant',
          price: 'Rs. 600',
        },
        {
          label: 'Early bird',
          meta: 'First 30 registered participants',
          price: 'Rs. 50 off',
        },
      ],
      keyRules: [
        'Individual participation. You may be grouped with others to work on a kit, and instructors decide how many share each one.',
        'Follow instructors at all times and never modify, dismantle or operate equipment without permission.',
        'Keep a safe distance from operating drones and rotating propellers. Never fly towards people or outside the designated area.',
        "Practical flying depends on equipment, weather and safety conditions. The instructor's decision is final.",
        'Kits, drones and components stay with the organizers or workshop partner. They cannot be taken home.',
      ],
      prizes: [
        {
          label: 'Certificate',
          description:
            'Everyone who attends and completes the workshop receives a Certificate of Participation.',
        },
      ],
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
      rulebook:
        'https://d8it4huxumps7.cloudfront.net/uploads/attachements/files/5d78849a-2a88-4c0e-89b6-d98ec7075315.pdf',
    },
  },
  {
    slug: 'capture_the_flag',
    title: 'Capture the Flag',
    tagline: 'Think. Hack. Explore. Capture.',
    logo: '#',
    day: '24',
    dateLabel: '24 Oct 2026',
    cardDescription:
      'A six hour, offline, Jeopardy-style CTF. Crack 25 challenges across web, forensics, crypto, reversing and OSINT.',
    // Was the 2025 Unstop link, carried over by mistake — not confirmed live for '26. Falls
    // back to the generic register page until a real 2026 link is available.
    registerLink:
      'https://unstop.com/competitions/tenet26-ctf-tenet-aissms-institute-of-information-technology-pune-maharashtra-1758898',
    detail: {
      about: [
        'Capture the Flag is a six hour, offline, Jeopardy-style cybersecurity competition. Solve challenges, find the hidden flags and submit them for points.',
        'There are 25 questions across web, forensics, cryptography, reverse engineering, and miscellaneous and OSINT. Compete solo or as a team of 2 to 3.',
      ],
      howItWorks: [
        {
          title: 'Briefing',
          description:
            '9:00 to 10:00 AM: registrations, opening, rules briefing and a walkthrough of the CTF platform.',
        },
        {
          title: 'Competition',
          description:
            '10:00 AM to 4:00 PM: attempt challenges and submit flags. Flags follow the format CTF{...} unless stated otherwise.',
        },
        {
          title: 'Scoring',
          description:
            'Each challenge carries points based on difficulty, and some use dynamic scoring that drops as more teams solve them. The first team to solve a challenge earns a first blood bonus.',
        },
        {
          title: 'Ranking',
          description:
            'Teams are ranked by total points. On a tie, the team that reached the score earlier ranks higher.',
        },
        {
          title: 'Score freeze and results',
          description:
            'Scores freeze at 4:00 PM for verification, followed by the closing ceremony and prize distribution from 4:30 PM.',
        },
      ],
      registration: [
        { label: 'Solo', meta: '1 participant', price: 'Rs. 150' },
        { label: 'Team', meta: '2 to 3 members', price: 'Rs. 300 / team' },
      ],
      keyRules: [
        'Flags must be solved by the team itself. Sharing solutions or flags between teams is strictly prohibited.',
        'No pre-solved write-ups, online solutions or third party help.',
        'Personal laptops, virtual machines and open source tools are allowed unless explicitly restricted.',
        'DDoS attacks, interfering with the infrastructure or brute forcing the platform means immediate disqualification.',
        'Bring your own laptop and chargers. Internet may be provided or restricted to LAN depending on the setup.',
        'Keep backups of your tools and scripts. No extra time is given for technical issues.',
        "The organizers' judgment is final in case of disputes.",
      ],
      prizePool: 'Rs. 12,000',
      prizes: [
        { label: 'Winner', description: 'Rs. 6,000 and a certificate.' },
        {
          label: 'First runner up',
          description: 'Rs. 4,000 and a certificate.',
        },
        {
          label: 'Second runner up',
          description: 'Rs. 2,000 and a certificate.',
        },
      ],
      certificateNote:
        'All participants receive a Certificate of Participation.',
      quickFacts: [
        { label: 'Date', value: '24 Oct 2026' },
        { label: 'Reporting', value: '9:00 AM' },
        { label: 'Competition', value: '10:00 AM – 4:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Format', value: 'Jeopardy style, offline' },
        { label: 'Participation', value: 'Solo or team of 2–3' },
        { label: 'Entry fee', value: 'Rs. 150 to 300' },
        { label: 'Prize pool', value: 'Rs. 12,000' },
      ],
      contacts: [
        { name: 'Siddhesh Waghmare', mobile: '+91 70286 63868' },
        { name: 'Prathamesh Vaydande', mobile: '+91 80108 61038' },
      ],
      rulebook: '/26/techfiesta/rulebooks/capture-the-flag-rulebook.pdf',
    },
  },
  {
    slug: 'robotics_workshop',
    title: 'Robotics Workshop',
    tagline: 'Where Ideas Become Robots.',
    logo: '/26/techfiesta/logo/robotics-workshop.webp',
    day: '24–25',
    dateLabel: '24–25 Oct 2026',
    cardDescription:
      'Two days from first circuit to a working Robo Soccer bot. Learn electronics, CAD and soldering by building as you go.',
    registerLink:
      'https://unstop.com/p/robo-workshop-aissms-institute-of-information-technology-pune-maharashtra-1759652',
    detail: {
      about: [
        'This two day hands-on workshop takes participants from the fundamentals of electronics and mechanical design through to the assembly and testing of a functional Robo Soccer robot.',
        'The learning path moves from concepts and circuit practice to CAD, digital assembly, physical construction, soldering, testing and final preparation.',
        "Day 1 (24 Oct) covers electronics, motor control and CAD. Day 2 (25 Oct) covers physical assembly, soldering and final testing. Sessions run 10:00 AM to 12:00 PM and 1:00 PM to 4:00 PM, and the duration may vary with the participants' learning pace.",
      ],
      howItWorks: [
        {
          title: 'Basic electronics and H-bridge theory',
          description:
            'Voltage, current, resistance and multimeter measurements, then the purpose of an H-bridge and how it reverses DC motor direction.',
        },
        {
          title: 'DPDT switch and chassis CAD',
          description:
            'Wire a DPDT switch as a manual H-bridge, then sketch and model the robot chassis in Fusion 360 using sheet metal tools.',
        },
        {
          title: 'Digital robot assembly',
          description:
            'Import the CAD parts, apply joints and constraints, check for interference and validate the movement digitally before building.',
        },
        {
          title: 'Physical assembly and soldering',
          description:
            'Assemble the chassis, wheels, motors and supports, then solder motor, switch and power connections with safe technique.',
        },
        {
          title: 'Testing and final preparation',
          description:
            'Inspect the robot, correct any loose or unsafe connections, verify movement and prepare the competition-ready soccer bot.',
        },
        {
          title: 'Mini competition',
          description:
            'A closing competition after the workshop puts the bots participants built to the test.',
        },
      ],
      registration: [
        {
          label: 'Solo participant',
          meta: 'Grouped by organizers, no take-home bot',
          price: 'Rs. 650',
        },
        {
          label: 'Group of 4',
          meta: 'Take the bot you build home',
          price: 'Rs. 600 / participant',
        },
      ],
      keyRules: [
        'Attend the safety briefing and bring your own laptop. Bringing your own soldering gun is a bonus.',
        'Keep a notebook for circuit diagrams, measurements and design notes, and save your CAD work regularly.',
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
        {
          label: 'Mini competition',
          description:
            'A closing competition after the workshop tests the bots participants have built.',
        },
        {
          label: 'Certificate',
          description:
            'Attend the complete workshop schedule to receive a Certificate of Participation, subject to the organizer’s final policy.',
        },
      ],
      quickFacts: [
        { label: 'Date', value: '24–25 Oct 2026' },
        { label: 'Reporting', value: '9:30 AM' },
        { label: 'Timing', value: '10:00 AM – 4:00 PM' },
        { label: 'Venue', value: 'AISSMS IOIT, Kennedy Road, Pune' },
        { label: 'Partner', value: 'The Robotics Forum Club' },
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
