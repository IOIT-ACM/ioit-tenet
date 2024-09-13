import { HeroImage } from '@/components/common/heroimage';
import type { Metadata } from 'next';
import { env } from '@/env';
import { Cyllinder } from '@/components/common';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';

const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Model United Nations at AISSMS IOIT TENET 2024',
  description: 'Explore the events happening at MUN in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg',
        width: 800,
        height: 600,
        alt: `Event Image`,
      },
    ],
  },
};

export default function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage='https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Welcome to MUN'
        subtitle='Join us for an exciting event'
        ctaText='Visit Website'
        ctaLink='https://www.ioitmun.com/'
        overlayImage='/mun_logo.png'
      />
      <Cyllinder events={allEvents.filter((event) => event.domain === 'mun')} />
    </main>
  );
}
