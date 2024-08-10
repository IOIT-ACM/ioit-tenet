'use client';

import { motion } from 'framer-motion';
import { ScheduleItem } from './scheduleitem';
import { day1scheduleData, day2scheduleData, day3scheduleData } from './data';
import { Separator } from '@/components/ui/separator';
import { FollowCursor } from './cursor';

export const Schedule = () => {
  return (
    <section className='relative mx-auto mb-56 grid max-w-7xl grid-cols-1 justify-center text-white transition-all md:grid-cols-6'>
      <div className='sticky top-10 self-start md:col-span-2'>
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='mb-10 w-full text-4xl font-black uppercase text-zinc-50 md:mb-20 md:text-5xl'
        >
          Schedule
        </motion.h1>
      </div>
      <div className='w-full md:col-span-4'>
        <div className='mb-8'>
          <span className='mb-4 block text-4xl font-bold text-gray-300'>
            Day 1 Events
          </span>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-14' />
          {day1scheduleData.slice(0, 4).map((item, index) => (
            <FollowCursor key={index} data={item}>
              <ScheduleItem
                title={item.title}
                date={item.date}
                location={item.location}
                organizers={item.organizers}
                url={item.url}
              />
            </FollowCursor>
          ))}
        </div>
        <div className='mb-8'>
          <span className='mb-4 block text-4xl font-bold text-gray-300'>
            Day 2 Events
          </span>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-14' />
          {day2scheduleData.slice(0, 4).map((item, index) => (
            <FollowCursor key={index} data={item}>
              <ScheduleItem
                title={item.title}
                date={item.date}
                location={item.location}
                organizers={item.organizers}
                url={item.url}
              />
            </FollowCursor>
          ))}
        </div>
        <div>
          <span className='mb-4 block text-4xl font-bold text-gray-300'>
            Day 3 Events
          </span>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-14' />
          {day3scheduleData.slice(0, 4).map((item, index) => (
            <FollowCursor key={index} data={item}>
              <ScheduleItem
                title={item.title}
                date={item.date}
                location={item.location}
                organizers={item.organizers}
                url={item.url}
              />
            </FollowCursor>
          ))}
        </div>
      </div>
    </section>
  );
};
