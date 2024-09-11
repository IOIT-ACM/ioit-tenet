import type { ScheduleItemType } from '@/types';

export const day1: ScheduleItemType[] = [
  {
    title: 'Product Management/Consulting Conference',
    icon: 'FaCalendar',
    id: 'techfiesta-pmconference',
    domain: 'techfiesta',
    color: 'bg-red-700',
    date: 'Oct 4th, 2024',
    location: 'Room 404',
    start: new Date('2024-10-04T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'An insightful conference focusing on the latest trends and challenges in product management and consulting. Attendees will gain valuable knowledge from industry experts.',
    image:
      'https://plus.unsplash.com/premium_photo-1661593062495-08c945c2e077?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Shreya Mirge', phone: '+919876543210' },
      { name: 'Vivaan Kukreja', phone: '+919876543211' },
    ],
    speakers: [
      {
        name: 'Tushar',
        url: 'https://www.linkedin.com/in/tushar-narokar-29988b25a/',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/ferb.webp',
        title: 'Media Team Head',
        id: 'tushar',
      },
      {
        name: 'Tushar',
        url: 'https://www.linkedin.com/in/tushar-narokar-29988b25a/',
        image:
          'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/speakers/ferb.webp',
        title: 'Media Team Head',
        id: 'tushar',
      },
    ],
  },
  {
    title: 'How Data is used in Business Intelligence Conference',
    icon: 'FaCalendar',
    id: 'techfiesta-dataconference',
    domain: 'techfiesta',
    color: 'bg-blue-700',
    date: 'Oct 4th, 2024',
    location: 'Room 405',
    start: new Date('2024-10-04T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'A comprehensive session exploring the pivotal role of data in driving business intelligence. Ideal for professionals looking to enhance their data-driven decision-making skills.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Madiha Shaikh', phone: '+919876543212' },
      { name: 'Pranav Vetkar', phone: '+919876543213' },
    ],
  },
  {
    title: 'Capture the Flag',
    icon: 'FaCalendar',
    id: 'techfiesta-ctf',
    domain: 'techfiesta',
    color: 'bg-green-700',
    date: 'Oct 4th, 2024',
    location: 'Room 406',
    start: new Date('2024-10-04T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'A thrilling cybersecurity challenge where participants test their hacking skills in a controlled environment. A must-attend for those interested in cybersecurity.',
    image:
      'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Anish Patange', phone: '+919876543214' },
      { name: 'Gauri Amale', phone: '+919876543215' },
    ],
    registration: '/#',
  },
  {
    title: 'Fun games (AR/VR, coding games)',
    icon: 'FaCalendar',
    id: 'techfiesta-fungames',
    domain: 'techfiesta',
    color: 'bg-slate-500',
    date: 'Oct 4th, 2024',
    location: 'Room 407',
    start: new Date('2024-10-04T09:00:00'),
    imp: true,
    time: '9:00 AM',
    description:
      'Engage in interactive and innovative games featuring AR/VR technology and coding challenges. Perfect for tech enthusiasts looking to have fun while learning.',
    image:
      'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Gauri Amale', phone: '+919876543216' },
      { name: 'Swaraj Chavan', phone: '+919876543217' },
    ],
  },
  {
    title: 'Web - 3 Conference',
    icon: 'FaCalendar',
    id: 'techfiesta-web3',
    domain: 'techfiesta',
    color: 'bg-orange-700',
    date: 'Oct 4th, 2024',
    location: 'Room 404',
    start: new Date('2024-10-04T10:30:00'),
    imp: true,
    time: '10:30 AM',
    description:
      'Dive into the future of the internet with this session on Web 3.0, exploring decentralized technologies and their impact on various industries.',
    image:
      'https://images.unsplash.com/photo-1667422380246-3bed910ffae1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Mihir Palatkar', phone: '+919876543218' },
      { name: 'Sejal Karad', phone: '+919876543219' },
    ],
  },
  {
    title: "LLM's Application in Industry Conference",
    icon: 'FaCalendar',
    id: 'techfiesta-llmconference',
    domain: 'techfiesta',
    color: 'bg-yellow-700',
    date: 'Oct 4th, 2024',
    location: 'Room 405',
    start: new Date('2024-10-04T10:30:00'),
    imp: true,
    time: '10:30 AM',
    description:
      'Explore the practical applications of large language models (LLMs) in different industries. A key session for those interested in AI and machine learning.',
    image:
      'https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Aayush Dhotre', phone: '+919876543220' },
      { name: 'Sakshi Kadam', phone: '+919876543221' },
    ],
  },
  {
    title: 'Drone & Robotics Workshop',
    icon: 'FaCalendar',
    id: 'techfiesta-droneworkshop',
    domain: 'techfiesta',
    color: 'bg-pink-700',
    date: 'Oct 4th, 2024',
    location: 'Room 406',
    start: new Date('2024-10-04T13:00:00'),
    imp: true,
    time: '1:00 PM',
    description:
      'Hands-on workshop on the latest advancements in drone and robotics technology. Participants will learn to build and operate these cutting-edge machines.',
    image:
      'https://plus.unsplash.com/premium_photo-1661727577908-1221ff42dcf8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Kamlesh Wattamwar', phone: '+919876543222' },
      { name: 'Sanskruti Wattamwar', phone: '+919876543223' },
    ],
  },
  {
    title: 'Gen AI (LLM) Development Workshop',
    icon: 'FaCalendar',
    id: 'techfiesta-genaiworkshop',
    domain: 'techfiesta',
    color: 'bg-purple-700',
    date: 'Oct 4th, 2024',
    location: 'Room 407',
    start: new Date('2024-10-04T13:00:00'),
    imp: true,
    time: '1:00 PM',
    description:
      'A deep dive into the development of generative AI and large language models. Essential for developers and AI enthusiasts looking to expand their knowledge.',
    image:
      'https://images.unsplash.com/photo-1675557570482-df9926f61d86?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Atharva Satpute', phone: '+919876543224' },
      { name: 'Sejal Karad', phone: '+919876543225' },
    ],
  },
  {
    title: 'Drone & Robotics Display',
    icon: 'FaCalendar',
    id: 'techfiesta-dronedisplay',
    domain: 'techfiesta',
    color: 'bg-teal-700',
    date: 'Oct 4th, 2024',
    location: 'Open Ground',
    start: new Date('2024-10-04T16:45:00'),
    imp: true,
    time: '4:45 PM',
    description:
      'A live demonstration showcasing the capabilities of modern drones and robotics. Witness the future of automation and aerial technology in action.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizers: [
      { name: 'Pritam Rangari', phone: '+919876543226' },
      { name: 'Aayush Musale', phone: '+919876543227' },
    ],
  },
];

export const day2: ScheduleItemType[] = [
  {
    icon: 'FaCalendar',
    title: 'Breakfast and Reporting',
    id: 'esummit-breakfast',
    domain: 'esummit',
    color: 'bg-teal-700',
    date: 'Oct 5th, 2024',
    location: 'Dining Hall',
    start: new Date('2024-10-05T08:00:00'),
    imp: false,
    time: '8:00 AM',
    description:
      "A casual breakfast meeting to kickstart the day, providing an opportunity for networking and discussions on the day's agenda.",
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
  },
  {
    icon: 'FaCalendar',
    title: 'Opening Ceremony',
    id: 'mun-opening',
    domain: 'mun',
    color: 'bg-red-500',
    date: 'Oct 5th, 2024',
    location: 'Main Stage',
    start: new Date('2024-10-05T09:00:00'),
    imp: false,
    time: '9:00 AM',
    description:
      'The official start of the event, featuring keynote speeches and an overview of the activities planned for the summit.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Chinmay Nakwa', phone: '+919876543246' },
      { name: 'Rutuja Salve', phone: '+919876543247' },
    ],
  },
  {
    title: 'Tier 3 Speaker Sessions x 3',
    icon: 'FaCalendar',
    id: 'esummit-speaker1',
    domain: 'esummit',
    color: 'bg-red-700',
    date: 'Oct 5th, 2024',
    location: 'Room 404',
    start: new Date('2024-10-05T10:00:00'),
    imp: true,
    time: '10:00 AM',
    description:
      'A series of insightful talks by industry professionals, covering various topics related to entrepreneurship and innovation.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Sanjana Nagle', phone: '+919876543228' },
      { name: 'Tanvi Sonune', phone: '+919876543229' },
    ],
  },
  {
    title: 'Tier 2 Speaker Session',
    icon: 'FaCalendar',
    id: 'esummit-speaker2',
    domain: 'esummit',
    color: 'bg-purple-700',
    date: 'Oct 5th, 2024',
    location: 'Room 407',
    start: new Date('2024-10-05T11:15:00'),
    imp: true,
    time: '11:15 AM',
    description:
      "A focused session with a prominent speaker discussing advanced topics relevant to the summit's theme.",
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Vaishnav Shinde', phone: '+919876543242' },
      { name: 'Niharika Koul', phone: '+919876543243' },
    ],
  },
  {
    title: 'Tier 3 Speaker Sessions x 2',
    icon: 'FaCalendar',
    id: 'esummit-speaker3',
    domain: 'esummit',
    color: 'bg-blue-700',
    date: 'Oct 5th, 2024',
    location: 'Room 405',
    start: new Date('2024-10-05T12:30:00'),
    imp: true,
    time: '12:30 PM',
    description:
      'Continued discussions from industry experts on crucial topics in business and technology.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Aayush Dhotre', phone: '+919876543230' },
      { name: 'Sakshi Kadam', phone: '+919876543231' },
    ],
  },
  {
    icon: 'FaCalendar',
    title: 'Lunch Break',
    id: 'esummit-lunch',
    color: 'bg-green-700',
    domain: 'esummit',
    date: 'Oct 5th, 2024',
    location: 'Dining Hall',
    start: new Date('2024-10-05T13:30:00'),
    imp: false,
    time: '1:30 PM',
    description:
      'A mid-day break with a catered lunch, allowing attendees to relax and network.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
  },
  {
    title: 'Tier 2 Speaker Sessions x 2',
    icon: 'FaCalendar',
    id: 'esummit-speaker4',
    domain: 'esummit',
    color: 'bg-yellow-700',
    date: 'Oct 5th, 2024',
    location: 'Room 406',
    start: new Date('2024-10-05T14:15:00'),
    imp: true,
    time: '2:15 PM',
    description:
      'Additional speaker sessions diving into advanced subjects, providing deeper insights into emerging trends.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Kamlesh Wattamwar', phone: '+919876543234' },
      { name: 'Sanskruti Wattamwar', phone: '+919876543235' },
    ],
  },
  {
    title: 'Investors Meeting',
    icon: 'FaCalendar',
    id: 'esummit-investors',
    domain: 'esummit',
    color: 'bg-teal-700',
    date: 'Oct 5th, 2024',
    location: 'Room 407',
    start: new Date('2024-10-05T15:30:00'),
    imp: true,
    time: '3:30 PM',
    description:
      'A key session where startups and entrepreneurs meet potential investors. A vital opportunity for networking and funding discussions.',
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Atharva Satpute', phone: '+919876543236' },
      { name: 'Sejal Karad', phone: '+919876543237' },
    ],
  },
  {
    icon: 'FaCalendar',
    title: 'Closing Ceremony and Dinner',
    id: 'esummit-closing',
    color: 'bg-orange-700',
    domain: 'esummit',
    date: 'Oct 5th, 2024',
    location: 'Main Stage',
    start: new Date('2024-10-05T17:45:00'),
    imp: false,
    time: '5:45 PM',
    description:
      "The final event of the day, celebrating the summit's success with an official closing ceremony and a gala dinner.",
    image:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg',
    organizers: [
      { name: 'Gauri Amale', phone: '+919876543238' },
      { name: 'Anish Patange', phone: '+919876543239' },
    ],
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
  },
  {
    title: 'Valorant Online Event',
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
  },

  // MUN (Day 2)
  {
    title: 'UNSC Committee Session',
    icon: 'FaCalendar',
    id: 'unsc-session',
    domain: 'mun',
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
    icon: 'FaCalendar',
    id: 'unhrc-session',
    domain: 'mun',
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
    icon: 'FaCalendar',
    id: 'aippm-session',
    domain: 'mun',
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
    icon: 'FaCalendar',
    id: 'uncsw-session',
    domain: 'mun',
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
    icon: 'FaCalendar',
    id: 'unodc-session',
    domain: 'mun',
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
