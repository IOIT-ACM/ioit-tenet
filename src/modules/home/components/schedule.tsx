'use client';

import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

export const Schedule = () => {
  return (
    <section className='relative mx-auto grid max-w-5xl grid-cols-1 justify-center text-white transition-all md:grid-cols-5'>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className='sticky top-10 col-span-5 mb-20 w-full text-4xl font-black uppercase text-zinc-50 md:col-span-2 md:text-5xl'
      >
        Schedule
      </motion.h1>
      <div className='w-full md:col-span-3'>
        <ScheduleItem
          title='Techfiesta'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem title='MUN' date='Oct 4th' location='6th Floor 609' />
        <ScheduleItem
          title='E-Summit'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem
          title='Creators Conclave'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem
          title='E-Sports'
          date='Oct 4th'
          location='1st Floor 112'
        />
        <ScheduleItem
          title='Techfiesta'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem title='MUN' date='Oct 4th' location='6th Floor 609' />
        <ScheduleItem
          title='E-Summit'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem
          title='Creators Conclave'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem
          title='E-Sports'
          date='Oct 4th'
          location='1st Floor 112'
        />
        <ScheduleItem
          title='Techfiesta'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem title='MUN' date='Oct 4th' location='6th Floor 609' />
        <ScheduleItem
          title='E-Summit'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem
          title='Creators Conclave'
          date='Oct 4th'
          location='4th floor 405'
        />
        <ScheduleItem
          title='E-Sports'
          date='Oct 4th'
          location='1st Floor 112'
        />
      </div>
    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className='mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9'
    >
      <div>
        <p className='mb-1.5 text-xl text-zinc-50'>{title}</p>
        <p className='text-sm uppercase text-zinc-500'>{date}</p>
      </div>
      <div className='flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500'>
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
