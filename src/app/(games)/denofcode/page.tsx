import { GameScreen } from '@/modules/denofcode';
import { Footer } from '@/modules/events';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Den of code',
  description:
    'den of code is an game for participants to complete a programming challange in the given time',
  openGraph: {
    title: 'Den of code',
    description: 'A fun programming game',
    type: 'website',
    url: env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/imgs/denofcode-og.png`,
        width: 1200,
        height: 630,
        alt: 'Den of code game preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Den of code',
    description: 'A fun programming game',
    images: [`${env.NEXT_PUBLIC_APP_URL}/imgs/denofcode-og.png`],
  },
};

const Page = () => {
  return (
    <div>
      <GameScreen />
      <Footer />
    </div>
  );
};

export default Page;
