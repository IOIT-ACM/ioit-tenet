import type { Metadata } from 'next';
import { env } from '@/env';
import Hero from './hero';
import EventList from './eventlist';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'TechFiesta | TENET 25’ at AISSMS IOIT | Workshops, Robotics & Esports',
  description: 'Explore TechFiesta at TENET 25’, the flagship tech vertical of AISSMS IOIT. Join workshops, robotics challenges, drone racing, CTF, VR experiences, and more. Discover event details, rules, timelines, prize pools, and resources—all in one futuristic festival of technology.',
  openGraph: {
    images: [
      {
        url: 'https://ioit.acm.org/tenet/25/techfiesta/techfiesta-marketing.jpg',
        width: 800,
        height: 600,
        alt: `Event Image`,
      },
    ],
  },
};

export default function Techfiesta() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 gap-5 text-white pt-12">
      <Hero />
      <EventList />
      <div className="flex flex-wrap justify-center gap-6 my-8">
        <a
          href="https://discord.gg/dkVV2VDw"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 bg-black/30 backdrop-blur-sm border border-blue-500 text-blue-400 shadow-[0_0_8px_theme(colors.blue.500)] hover:shadow-[0_0_20px_theme(colors.blue.500)]"
        >
          Join Discord
        </a>
        <a
          href="https://www.instagram.com/ioit_tenet/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 bg-black/30 backdrop-blur-sm border border-pink-500 text-pink-500 shadow-[0_0_8px_theme(colors.pink.500)] hover:shadow-[0_0_20px_theme(colors.pink.500)]"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
}