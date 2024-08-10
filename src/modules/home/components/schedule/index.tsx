'use client';

import { motion } from 'framer-motion';
import { ScheduleItem } from './scheduleitem';
import { day1scheduleData, day2scheduleData, day3scheduleData } from './data';
import { Separator } from '@/components/ui/separator';
import { FollowCursor } from './cursor';
import { useMemo, useState } from 'react';
import { BsArrowsExpand, BsArrowsCollapse } from 'react-icons/bs';

export const Schedule = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const d1 = useMemo(() => {
    const importantItems = day1scheduleData.filter((item) => item.imp);
    if (expanded === 1) {
      return day1scheduleData;
    }
    return importantItems
      .slice(0, 4)
      .concat(
        day1scheduleData
          .filter((item) => !item.imp)
          .slice(0, 4 - importantItems.length),
      );
  }, [expanded]);

  const d2 = useMemo(() => {
    const importantItems = day2scheduleData.filter((item) => item.imp);
    if (expanded === 2) {
      return day2scheduleData;
    }
    return importantItems
      .slice(0, 4)
      .concat(
        day2scheduleData
          .filter((item) => !item.imp)
          .slice(0, 4 - importantItems.length),
      );
  }, [expanded]);

  const d3 = useMemo(() => {
    const importantItems = day3scheduleData.filter((item) => item.imp);
    if (expanded === 3) {
      return day3scheduleData;
    }
    return importantItems
      .slice(0, 4)
      .concat(
        day3scheduleData
          .filter((item) => !item.imp)
          .slice(0, 4 - importantItems.length),
      );
  }, [expanded]);

  return (
    <section className='relative mx-10 mb-56 grid grid-cols-1 justify-center text-white transition-all md:mx-32 md:grid-cols-7'>
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
      <div className='w-full md:col-span-5'>
        <div className='mb-8'>
          <div className='mb-4 flex w-full justify-between text-4xl font-bold text-gray-300'>
            <span>Day 1 Events</span>
            <span>
              {expanded === 1 ? (
                <BsArrowsCollapse
                  onClick={() => setExpanded(null)}
                  className='cursor-pointer transition-all hover:scale-105'
                />
              ) : (
                <BsArrowsExpand
                  onClick={() => setExpanded(1)}
                  className='cursor-pointer transition-all hover:scale-105'
                />
              )}
            </span>
          </div>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-14' />
          {d1.map((item, index) => (
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
          <div className='mb-4 flex w-full justify-between text-4xl font-bold text-gray-300'>
            <span>Day 2 Events</span>
            <span>
              {expanded === 2 ? (
                <BsArrowsCollapse
                  onClick={() => setExpanded(null)}
                  className='cursor-pointer transition-all hover:scale-105'
                />
              ) : (
                <BsArrowsExpand
                  onClick={() => setExpanded(2)}
                  className='cursor-pointer transition-all hover:scale-105'
                />
              )}
            </span>
          </div>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-14' />
          {d2.map((item, index) => (
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
          <div className='mb-4 flex w-full justify-between text-4xl font-bold text-gray-300'>
            <span>Day 3 Events</span>
            <span>
              {expanded === 3 ? (
                <BsArrowsCollapse
                  onClick={() => setExpanded(null)}
                  className='cursor-pointer transition-all hover:scale-105'
                />
              ) : (
                <BsArrowsExpand
                  onClick={() => setExpanded(3)}
                  className='cursor-pointer transition-all hover:scale-105'
                />
              )}
            </span>
          </div>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-14' />
          {d3.map((item, index) => (
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
