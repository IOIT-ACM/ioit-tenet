import { HeroImage } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Cultural Night at AISSMS IOIT TENET 2024',
  description:
    'Explore the events happening at Cultural Night in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://ioit.acm.org/tenet/ui/creators.jpeg',
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
        backgroundImage='https://ioit.acm.org/tenet/ui/creators.jpeg'
        title='Cultural Night'
        subtitle='Experience Vibrant Performances and Rich Traditions at the Cultural Night Extravaganza'
        // ctaText='Learn More'
        // ctaLink='#timeline'
      />
    </main>
  );
}
