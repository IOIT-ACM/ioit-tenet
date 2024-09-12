import { HeroImage, Sponsors } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Creators Conclave at AISSMS IOIT TENET 2024',
  description:
    'Explore the events happening at Creators Conclave in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/creators.jpeg',
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
        backgroundImage='https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Welcome to Creators Conclave'
        subtitle='Join us for an exciting event'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Sponsors />
    </main>
  );
}
