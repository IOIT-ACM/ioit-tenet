import { GameScreen } from '@/modules/game';
import type { Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'TENET Typing Challenge',
  description:
    'Test your typing skills in this fast-paced word game inspired by TENET. Race against time to match palindromes and increase your score!',
  openGraph: {
    title: 'TENET Typing Challenge',
    description:
      'A thrilling typing game where words move in reverse. Can you keep up?',
    type: 'website',
    url: env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/imgs/tenet-game-og.png`,
        width: 1200,
        height: 630,
        alt: 'TENET Typing Challenge game preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TENET Typing Challenge',
    description:
      'Reverse the flow of time with your typing skills in this TENET-inspired game!',
    images: [`${env.NEXT_PUBLIC_APP_URL}/imgs/tenet-game-twitter.png`],
  },
};

const Page = () => {
  return (
    <div>
      <GameScreen />
    </div>
  );
};

export default Page;
