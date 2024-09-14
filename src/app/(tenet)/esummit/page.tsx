import { HeroImage, Timeline, Sponsors } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'E-Summit at AISSMS IOIT TENET 2024',
  description: 'Explore the events happening at eSummit in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esummit.jpeg',
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
        backgroundImage='https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='E-Summit'
        subtitle='Join us for an exciting event'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Timeline domain='esummit' />
      {/* <Speakers /> */}
      <Sponsors />
    </main>
  );
}
