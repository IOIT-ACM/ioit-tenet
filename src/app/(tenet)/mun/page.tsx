import type { Metadata } from 'next';
import { HeroImage } from '@/components/common';
import { env } from '@/env';
import { MUNLINK } from '@/config';

import { GCCarousel } from '@/modules/events/mun';

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
        backgroundImage='https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg'
        title='IOIT MUN 2024'
        subtitle='Unity through diplomacy'
        ctaText='Learn More'
        ctaLink='#timeline'
        ctaText2='Register now'
        ctaLink2={MUNLINK}
      />
      <GCCarousel />
    </main>
  );
}
