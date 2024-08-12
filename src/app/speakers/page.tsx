import type { Metadata } from 'next';
import { env } from '@/env';
import { speakers } from '@/config/speakers';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Speakers at IOIT TENET 2024',
  description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
};

export default function Page() {
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {speakers.map((speaker) => (
        <Link
          key={speaker.name}
          href={`${speaker.url}`}
          className='group relative h-[400px] cursor-pointer overflow-hidden rounded-2xl border border-white bg-neutral-200'
          style={{
            backgroundImage: `url(${speaker.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6'>
            <h2 className='mb-2 text-2xl font-bold text-white'>
              {speaker.name}
            </h2>
            <p className='mb-4 text-lg text-white'>{speaker.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
