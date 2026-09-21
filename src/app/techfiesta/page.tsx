import type { Metadata } from 'next';
import { env } from '@/env';
import Hero from './components/hero';
import EventGrid from './components/event-grid';
import Schedule from './components/schedule';
import RegisterCta from './components/register-cta';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'TechFiesta | TENET ’26 at AISSMS IOIT | Workshops, Robotics & Esports',
  description: 'Explore TechFiesta at TENET ’26, the flagship tech vertical of AISSMS IOIT. Join workshops, robotics challenges, drone racing, CTF, and more. Discover event details, rules, timelines and prize pools — all in one place.',
  openGraph: {
    images: [
      {
        url: 'https://ioit.acm.org/tenet/26/techfiesta/techfiesta-marketing.jpg',
        width: 800,
        height: 600,
        alt: `Event Image`,
      },
    ],
  },
};

export default function Techfiesta() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <EventGrid />
      <Schedule />
      <RegisterCta />
    </div>
  );
}
