export interface SlideData {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const data: SlideData[] = [
    {
        title:'Robotics Workshop',
        slug: 'robotics-workshop',
        description:'Dive into the world of automation! Our Robotics Workshop provides hands-on experience in building and programming robots from scratch. Learn about sensors, motors, and control systems in an interactive and engaging environment.',
        image:'https://ioit.acm.org/tenet/gallery/24/inaugration/11.jpeg'
    },
    {
        title:'Robo Soccer',
        slug: 'robo-soccer',
        description:'Experience the thrill of the beautiful game, reimagined with technology. Design, build, and program autonomous robots to compete in a fast-paced soccer tournament. Strategy and engineering prowess will determine the champion.',
        image:'https://ioit.acm.org/tenet/events/pm.jpeg'
    },
    {
        title:'Robo Sumo',
        slug: 'robo-sumo',
        description:'Enter the dohyō! In this classic robotic showdown, two autonomous robots clash in a test of strength, design, and programming. The goal is simple: push your opponent out of the ring. May the best bot win!',
        image:'https://ioit.acm.org/tenet/events/denofcode.jpeg'
    },
    {
        title:'Drone Workshop',
        slug: 'drone-workshop',
        description:'Take to the skies! Our Drone Workshop covers the fundamentals of drone technology, from assembly and basic aerodynamics to programming autonomous flight paths. Get hands-on experience with piloting and discover the future of aerial innovation.',
        image:'https://ioit.acm.org/tenet/events/ai.jpg'
    },
    {
        title:'Capture The Flag',
        slug: 'ctf',
        description:'Sharpen your cybersecurity skills in our Capture The Flag competition. Tackle a series of challenges in cryptography, web exploitation, and reverse engineering. Race against the clock to find the hidden flags and prove your mettle.',
        image:'https://ioit.acm.org/tenet/events/web3.jpeg'
    },
    {
        title:'Bluff and Bargain',
        slug: 'bluff-and-bargain',
        description:'Test your powers of persuasion and strategic thinking in this high-stakes trading game. Bluff and Bargain challenges you to negotiate deals, manage resources, and outwit your opponents in a battle of wits.',
        image:'https://ioit.acm.org/tenet/events/development.jpeg'
    },
];