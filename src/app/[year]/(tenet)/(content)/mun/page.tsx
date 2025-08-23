import type { Metadata } from 'next';
import { HeroImage } from '@/components/common';
import { env } from '@/env';
import { MUNLINK } from '@/config';
import { Timeline } from '@/components/common';

import { GCCarousel } from '@/modules/events/mun';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Model United Nations at AISSMS IOIT TENET 2024',
  description: 'Explore the events happening at MUN in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://ioit.acm.org/tenet/ui/mun.jpeg',
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
        backgroundImage='https://ioit.acm.org/tenet/ui/mun.jpeg'
        title='IOIT MUN 2024'
        subtitle='Unity through diplomacy. Engage with Global Diplomats, Policy Makers, and Visionaries at MUN 2024'
        ctaText='Learn More'
        ctaLink='https://mun.ioittenet.com/'
        ctaText2='Register now'
        ctaLink2={MUNLINK}
        ctalink1color='#739e9e'
      />
      <GCCarousel />
      <Timeline domain='mun' />
    </main>
  );
}
