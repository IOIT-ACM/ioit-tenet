import type { Metadata } from 'next';
import { env } from '@/env';

import { Nav } from '@/modules/speakers';
import { BackgroundLines } from '@/modules/speakers/components/list';
import { Footer } from '@/modules/events';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Speakers at IOIT TENET 2024',
  description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
};

export default async function Page() {
  return (
    <div className='m-0 p-0'>
      <Nav />
      <BackgroundLines className='flex w-full flex-col items-center justify-center px-4'>
        <h2 className='relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-4xl lg:text-7xl'>
          Speakers revealing soon <br /> for TENET&apos;24
        </h2>
        <p className='mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg'>
          Stay tuned for more info.
        </p>
      </BackgroundLines>
      <Footer />
    </div>
  );
}
