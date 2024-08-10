'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import type { Organizer } from '@/types';

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
      // initial={{ y: 48, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ ease: 'easeInOut', duration: 0.75 }}
      layoutId='schedule-card'
      className='flex flex-col gap-3 pb-10 pt-3 text-gray-600 transition-all hover:text-white'
    >
      <p className='mb-2 overflow-hidden truncate text-xl md:text-3xl'>
        {title}
      </p>
      <div className='flex items-start justify-between'>
        <div className='flex flex-col gap-2 text-sm uppercase md:flex-row'>
          <div className='flex items-center gap-1.5'>
            <FiMapPin />
            <p>{location}</p>
          </div>
          <p>{date}</p>
        </div>
        <div className='flex flex-col items-end gap-2 md:flex-row'>
          {organizers.slice(0, 1).map((organizer, index) => (
            <div
              key={index}
              className='flex items-center gap-1.5 text-sm uppercase'
            >
              <FiPhone />
              <Link href={`tel:${organizer.phone}`}>{organizer.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
