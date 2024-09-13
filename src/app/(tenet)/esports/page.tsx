import { HeroImage, Sponsors } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';
import { Cyllinder } from '@/components/common';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';

const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'E-Sports at AISSMS IOIT TENET 2024',
  description: 'Explore the events happening at E-Sports in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/esports.jpg',
        width: 800,
        height: 600,
        alt: `Event Image`,
      },
    ],
  },
};

export default async function Page() {
  return (
    <main className=''>
      <HeroImage
        backgroundImage='https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/esports.jpg'
        title='E-Sports'
        subtitle='Join us for an exciting event'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Cyllinder
        events={allEvents.filter((event) => event.domain === 'esports')}
      />
      <Sponsors />
    </main>
  );
}
