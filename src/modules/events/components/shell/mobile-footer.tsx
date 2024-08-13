import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { day1, day2, day3 } from '@/config/events';
import Link from 'next/link';

const MobileFooter = () => {
  const days = [day1, day2, day3];

  const sortedDays = days.map((day) =>
    day.sort((a, b) => a.start.getTime() - b.start.getTime()),
  );

  return (
    <Drawer>
      <DrawerTrigger className='w-full text-black'>View Agenda</DrawerTrigger>
      <DrawerContent className='text-black'>
        <DrawerHeader>
          <DrawerTitle>View Agenda</DrawerTitle>
        </DrawerHeader>
        <div>
          <Carousel>
            <CarouselContent>
              {sortedDays.map((day, dayIndex) => (
                <CarouselItem key={dayIndex}>
                  <h2 className='mb-4 text-center text-xl font-semibold'>
                    Day {dayIndex + 1}
                  </h2>
                  <div className='flex h-[50vh] w-full flex-col gap-2 overflow-y-auto p-4'>
                    {day.map((item, index) => (
                      <Link
                        href={`/events/${item.id}`}
                        key={index}
                        className='mb-3'
                      >
                        <p className='text-lg'>{item.title}</p>
                        <p className='text-sm text-gray-500'>{item.time}</p>
                      </Link>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFooter;
