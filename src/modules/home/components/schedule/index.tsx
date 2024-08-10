'use client';

import { motion } from 'framer-motion';
import { ScheduleItem } from './scheduleitem';
import { scheduleData } from './data';
import { FollowCursor } from './cursor';

export const Schedule = () => {
  return (
    <section className='relative mx-auto grid max-w-7xl grid-cols-1 justify-center text-white transition-all md:grid-cols-6'>
      <div className='sticky top-10 self-start md:col-span-2'>
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='mb-20 w-full text-4xl font-black uppercase text-zinc-50 md:text-5xl'
        >
          Schedule
        </motion.h1>
      </div>
      <div className='w-full md:col-span-4'>
        {scheduleData.map((item, index) => (
          <FollowCursor key={index} data={item}>
            <div className='border-b'>
              <ScheduleItem
                title={item.title}
                date={item.date}
                location={item.location}
                organizers={item.organizers}
              />
            </div>
          </FollowCursor>
        ))}
      </div>
    </section>
  );
};
