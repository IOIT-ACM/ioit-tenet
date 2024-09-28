import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const EventLinksStructure: React.FC<{ day: number }> = ({ day }) => {
  const events = getEventsForDay(day);

  // Group events by their domain
  const eventsByDomain = events.reduce<Record<string, ScheduleItemType[]>>(
    (acc, event) => {
      if (!acc[event.domain]) {
        acc[event.domain] = [];
      }
      acc[event.domain]?.push(event);
      return acc;
    },
    {},
  );

  return (
    <div className='timeline my-10 md:px-10'>
      {Object.entries(eventsByDomain).map(([domain, domainEvents]) => (
        <div key={domain} className='mb-12'>
          {domain !== 'techfiesta' && (
            <h1 className='mb-6 text-xl font-bold text-gray-800 md:text-2xl md:text-3xl'>
              {domain.toUpperCase()}
            </h1>
          )}

          {/* Render the events under the respective domain */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12'>
            {domainEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function EventCard({ event }: { event: ScheduleItemType }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className='group block transform overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-2xl'
    >
      <div className='relative h-40 w-full overflow-hidden md:h-64'>
        <Image
          src={event.image}
          alt={event.title}
          layout='fill'
          objectFit={event.domain === 'mun' ? 'contain' : 'cover'}
          className='bg-gray-600 transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70'></div>
        <div className='absolute bottom-0 p-4 text-white md:p-6'>
          <h3 className='text-base font-semibold transition-colors duration-300 md:text-2xl'>
            {event.title}
          </h3>
        </div>
      </div>

      <div className='flex items-center justify-between p-4 md:p-6'>
        {event.domain === 'mun' && (
          <Image
            src='https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/mun3.png'
            alt='MUN image'
            height={35}
            width={35}
            className='mr-3 transition-transform duration-300'
          />
        )}
        <div className='flex h-full flex-col'>
          <p className='line-clamp-1 truncate'>{event.location}</p>
          <p className='line-clamp-1 truncate'>{event.time}</p>
        </div>
        <span className='ml-auto rounded-full bg-blue-200 px-3 py-1 text-xs font-medium text-blue-600 group-hover:bg-blue-600 group-hover:text-white'>
          Learn More
        </span>
      </div>
    </Link>
  );
}

const getEventsForDay = (day: number): ScheduleItemType[] => {
  switch (day) {
    case 1:
      return day1.filter((item) => item.imp);
    case 2:
      return day2.filter((item) => item.imp);
    case 3:
      return day3.filter((item) => item.imp);
    default:
      return [];
  }
};
