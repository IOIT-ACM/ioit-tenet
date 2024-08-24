import Image from 'next/image';
import { type Sponsor } from '@/types';
import { sponsor } from '@/config/sponsors';
import Link from 'next/link';

export const Sponsors = () => {
  return (
    <section className='bg-black py-12'>
      <div className='mx-auto px-4'>
        <h2 className='mb-8 text-center text-4xl font-bold text-white'>
          Our Sponsors
        </h2>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {sponsor.map((sponsor: Sponsor, index) => (
            <Link
              key={index}
              href={sponsor.websiteUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center rounded-lg p-4 transition-colors hover:bg-slate-700'
            >
              <div className='flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-2'>
                <Image
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  width={128}
                  height={128}
                  style={{ objectFit: 'cover' }}
                  className='rounded-full'
                />
              </div>
              <p className='mt-4 text-center text-white'>{sponsor.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
