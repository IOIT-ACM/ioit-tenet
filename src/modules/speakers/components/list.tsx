import { speakers } from '@/config/speakers';
import Image from 'next/image';
import Link from 'next/link';

export const Speakers = () => {
  return (
    <div className='mx-auto my-16 px-4 pb-8 pt-5 md:my-24'>
      <h1 className='mb-20 text-center text-4xl font-bold text-white'>
        Speakers at TENET&apos;24
      </h1>
      <div className='grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {speakers.map((speaker) => (
          <Link
            href={`/speakers/${speaker.id}`}
            key={speaker.id}
            className='flex flex-col items-center'
          >
            <div className='mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200 md:h-48 md:w-48'>
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={192}
                height={192}
                className='h-full w-full rounded-full border border-white bg-gray-300 object-cover transition-all hover:scale-105'
              />
            </div>
            <h2 className='text-center text-base font-bold text-white md:text-xl'>
              {speaker.name}
            </h2>
            <p className='text-center text-xs text-indigo-400 md:text-base'>
              {speaker.title}
            </p>
          </Link>
        ))}
      </div>
      <h1 className='mt-36 text-center text-4xl font-bold text-white'>
        More speakers revealing soon...
      </h1>
    </div>
  );
};
