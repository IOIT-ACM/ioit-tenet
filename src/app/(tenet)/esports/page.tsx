import { GameSlider } from '@/modules/events/esports';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'E-Sports at AISSMS IOIT TENET 2024',
  description: 'Explore the events happening at E-Sports in IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/techfiesta.jpeg',
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
      <GameSlider />
    </main>
  );
}
