import { speakers } from '@/config/speakers';
import Image from 'next/image';
import Link from 'next/link';

export const Speakers = () => {
  return (
    <div className='mx-auto px-4 pb-8 pt-5'>
      <h1 className='mb-12 text-center text-4xl font-bold text-white'>
        Our Speakers
      </h1>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className='overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl sm:flex sm:h-64'
          >
            <Link
              href={`/speakers/${speaker.id}`}
              className='relative block h-64 overflow-hidden sm:h-full sm:w-2/3'
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                layout='fill'
                objectFit='cover'
                className='transition-transform duration-300 hover:scale-110'
              />
            </Link>
            <div className='flex flex-col justify-between p-6 sm:w-2/3'>
              <div>
                <Link href={`/speakers/${speaker.id}`}>
                  <h2 className='mb-2 text-xl font-bold text-white transition-colors hover:text-indigo-400'>
                    {speaker.name}
                  </h2>
                </Link>
                <p className='mb-2 text-base font-medium text-indigo-400'>
                  {speaker.title}
                </p>
                <p className='mb-4 line-clamp-3 text-sm text-slate-300'>
                  {speaker.bio}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <Link
                  href={`/speakers/${speaker.id}`}
                  className='text-sm text-blue-400 transition-colors hover:text-blue-300 sm:text-base'
                >
                  Learn More
                </Link>
                <Link
                  href={speaker.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-indigo-600 px-3 py-1 text-sm text-white transition-colors hover:bg-indigo-700 sm:px-4 sm:py-2 sm:text-base'
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
