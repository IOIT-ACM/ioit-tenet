import { HeroImage, Timeline } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Techfiesta at AISSMS IOIT TENET 2024',
  description: 'Explore the events happening at Techfiesta in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://ioit.acm.org/tenet/ui/techfiesta.jpeg',
        width: 800,
        height: 600,
        alt: `Event Image`,
      },
    ],
  },
};

export default async function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage='https://ioit.acm.org/tenet/ui/techfiesta.jpeg'
        title='TechFiesta'
        subtitle='Gain insights from renowned community leads, CTOs, and industry pioneers'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Timeline domain='techfiesta' />
    </main>
  );
}
