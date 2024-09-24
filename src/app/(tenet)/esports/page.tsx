import { HeroImage } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';
import { GCCarousel } from '@/modules/events/esports';

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
        subtitle='Join Elite Gamers, Influencers, and Innovators at the Ultimate Esports Arena'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <GCCarousel />
    </main>
  );
}
