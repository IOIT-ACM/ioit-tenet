/* eslint-disable react-hooks/exhaustive-deps */
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import { day1, day2, day3 } from '@/config/events';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { speakers } from '@/config/speakers';

const MobileFooter = () => {
  const allEvents = [...day1, ...day2, ...day3];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isEventsPath = pathname.startsWith('/events');

  useEffect(() => {
    if (!api) {
      return;
    }

    let currentIndex = 0;

    if (isEventsPath) {
      currentIndex = allEvents.findIndex(
        (event) => `/events/${event.id}` === pathname,
      );
    } else {
      currentIndex = speakers.findIndex(
        (speaker) => `/speakers/${speaker.id}` === pathname,
      );
    }

    api.scrollTo(currentIndex);

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleItemClick = () => {
    setIsOpen(false); // Close the drawer
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className='w-full text-black'>
        {isEventsPath ? 'View Agenda' : 'View speakers'}
      </DrawerTrigger>
      <DrawerContent className='text-black'>
        <DrawerHeader>
          <DrawerTitle>
            {isEventsPath ? 'View Agenda' : 'View speakers'}
          </DrawerTitle>
        </DrawerHeader>
        <Carousel setApi={setApi}>
          {isEventsPath ? (
            <CarouselContent>
              {allEvents.map((event, index) => (
                <CarouselItem key={index}>
                  <Link href={`/events/${event.id}`} onClick={handleItemClick}>
                    <div className='flex h-full select-none flex-col items-center justify-between px-4 py-10 text-center'>
                      <Image
                        src={event.image}
                        alt={event.title}
                        className='rounded-full border border-black'
                        height={200}
                        width={200}
                      />
                      <h2 className='mb-2 text-xl font-semibold'>
                        {event.title}
                      </h2>
                      <div>
                        <p className='mb-2 text-slate-500'>
                          {event.date} - {event.time}
                        </p>
                        <p className='mb-2'>{event.location}</p>
                        {event.domain && (
                          <span className='rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-600'>
                            {event.domain}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          ) : (
            <CarouselContent>
              {speakers.map((speaker, index) => (
                <CarouselItem key={index}>
                  <Link
                    href={`/speakers/${speaker.id}`}
                    onClick={handleItemClick}
                  >
                    <div className='flex h-full select-none flex-col items-center justify-between px-4 py-10 text-center'>
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        className='rounded-full border border-black'
                        height={200}
                        width={200}
                      />
                      <h2>
                        <p className='mb-2 text-xl font-semibold'>
                          {speaker.name}
                        </p>
                        <p className='mb-2 text-slate-500'>{speaker.title}</p>
                      </h2>
                      <div>
                        <p className='mb-2 line-clamp-3 text-slate-500'>
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          )}
          <div className='py-2 text-center text-sm'>
            <p className='text-muted-foreground'>
              {current} of {count}
            </p>
          </div>
        </Carousel>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFooter;
