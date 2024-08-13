import { speakers } from '@/config/speakers';
import Image from 'next/image';
import Link from 'next/link';

export const Speakers = () => {
  return (
    <div className='mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8'>
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className='group flex flex-col items-center overflow-hidden rounded-lg text-white transition-all sm:flex-row'
        >
          <Link
            href={`/speakers/${speaker.id}`}
            className='relative h-64 w-full overflow-hidden sm:h-72 sm:w-1/3'
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              layout='fill'
              objectFit='cover'
              className='rounded-t-lg transition-transform duration-300 group-hover:scale-105 sm:rounded-l-lg sm:rounded-tr-none'
            />
          </Link>
          <div className='w-full p-6 sm:w-2/3 sm:p-8'>
            <Link className='h-full' href={`/speakers/${speaker.id}`}>
              <h2 className='mb-2 text-3xl font-bold text-gray-400 group-hover:text-white'>
                {speaker.name}
              </h2>
              <p className='mb-4 text-xl font-medium text-indigo-400'>
                {speaker.title}
              </p>
              <p className='mb-6 line-clamp-3 text-gray-400'>{speaker.bio}</p>
            </Link>
            <a
              href={speaker.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center text-blue-400 hover:text-blue-300'
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
