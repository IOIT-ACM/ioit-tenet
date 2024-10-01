import Link from 'next/link';
import { day1, day2, day3 } from '@/config/events';
import { useEffect, useState } from 'react';

export function Carousal() {
  const allEvents = [...day1, ...day2, ...day3]
    .filter((event) => event.imp)
    .filter((event) => event.domain !== 'mun');

  const [yTranslations, setYTranslations] = useState<number[]>([]);

  useEffect(() => {
    const translations = allEvents.map(
      () => Math.floor(Math.random() * 40) - 20,
    );
    setYTranslations(translations);
  }, []);

  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 flex -translate-y-[20vh] items-center bg-opacity-50 p-4 md:px-20'>
      <div className='no-scroll-bar flex h-fit gap-16 overflow-x-auto overflow-y-visible py-20'>
        {allEvents.map((event, index) => (
          <Link
            href={'/events/' + event.id}
            key={index}
            className='relative h-[250px] w-auto min-w-[200px] flex-shrink-0'
            style={{
              transform: `translateY(${yTranslations[index]}px)`,
            }}
          >
            <div
              className='h-full w-full rounded-lg border-2 border-dotted bg-contain bg-center bg-no-repeat shadow-lg'
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
              }}
            />
            <h1 className='mt-2 block rounded-md bg-black bg-opacity-50 px-2 py-1 text-center text-lg font-bold text-white drop-shadow-md'>
              {event.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
