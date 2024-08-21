/* eslint-disable react-hooks/exhaustive-deps */
import {
  Drawer,
  DrawerContent,
  // DrawerFooter,
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

const MobileFooter = () => {
  const allEvents = [...day1, ...day2, ...day3];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (!api) {
      return;
    }

    const currentEventIndex = allEvents.findIndex(
      (event) => `/events/${event.id}` === pathname,
    );

    api.scrollTo(currentEventIndex);

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Drawer>
      <DrawerTrigger className='w-full text-black'>View Agenda</DrawerTrigger>
      <DrawerContent className='text-black'>
        <DrawerHeader>
          <DrawerTitle>View Agenda</DrawerTitle>
        </DrawerHeader>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {allEvents.map((event, index) => (
              <CarouselItem key={index}>
                <Link href={`/events/${event.id}`}>
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
                      <p className='mb-2 text-gray-500'>
                        {event.date} - {event.time}
                      </p>
                      <p className='mb-2'>{event.location}</p>
                      {event.domain && (
                        <span className='rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-600'>
                          {event.domain}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='py-2 text-center text-sm'>
            <p className='text-muted-foreground'>
              {current} of {count}
            </p>
          </div>
        </Carousel>
        {/* <DrawerFooter>
          <div className='flex w-full items-center justify-center gap-2'>
            <div onClick={() => api?.scrollTo(1)}>Day 1</div>
            <div onClick={() => api?.scrollTo(10)}>Day 2</div>
            <div onClick={() => api?.scrollTo(19)}>Day 3</div>
          </div>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFooter;
