import type { Metadata } from 'next';
import { env } from '@/env';
import { Cyllinder } from '@/components/common';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { MUNLINK } from '@/config';

const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];

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
      <div className='hero relative flex h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        <Image
          src='https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg'
          alt='MUN banner'
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className='z-0 select-none opacity-60'
        />
        <div className='relative z-10 rounded-lg bg-opacity-50 p-6 text-center sm:p-8'>
          <h1 className='mb-4 text-4xl font-bold text-white sm:text-5xl'>
            IOIT MUN 2024
          </h1>
          <p className='mb-8 text-base text-white sm:text-lg'>
            Unity through diplomacy
          </p>
          <div className='flex flex-col gap-3 md:flex-row md:gap-5'>
            <Link
              href='https://www.ioitmun.com/'
              target='_blank'
              className='rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-lg'
            >
              Visit Website
            </Link>
            <Link
              href={MUNLINK}
              target='_blank'
              className='rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-lg'
            >
              Register now
            </Link>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950/0 to-black sm:h-96' />
      </div>
      <Cyllinder events={allEvents.filter((event) => event.domain === 'mun')} />
    </main>
  );
}
