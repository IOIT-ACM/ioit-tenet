'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import Link from 'next/link';

type Organizer = {
  name: string;
  phone: string;
};

export const ScheduleItem = ({
  title,
  date,
  location,
  organizers,
}: {
  title: string;
  date: string;
  location: string;
  organizers: Organizer[];
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className='flex cursor-cell flex-wrap items-center justify-between border-zinc-800 px-3 py-5'
    >
      <div className='mb-4 w-full sm:mb-0 sm:w-auto'>
        <p className='mb-1.5 text-xl text-zinc-50 md:text-2xl'>{title}</p>
        <p className='text-sm uppercase text-zinc-500'>{date}</p>
      </div>
      <div className='flex w-full flex-col items-end sm:w-auto sm:gap-4'>
        <div className='mb-2 flex items-center gap-1.5 text-sm uppercase text-zinc-500 sm:mb-0'>
          <FiMapPin />
          <p>{location}</p>
        </div>
        <div className='flex gap-2'>
          {organizers.slice(0, 2).map((organizer, index) => (
            <div
              key={index}
              className='flex items-center gap-1.5 text-sm uppercase text-zinc-500'
            >
              <FiPhone />
              <Link
                href={`tel:${organizer.phone}`}
                className='transition-colors hover:text-zinc-300'
              >
                {organizer.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
