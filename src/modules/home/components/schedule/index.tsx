/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ScheduleItem } from './scheduleitem';
import { scheduleData } from './data';

const FollowCursor = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && contentRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        contentRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const container = containerRef.current;
    if (isHovering && container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovering]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = isHovering ? '0.75' : '0';
      contentRef.current.style.display = isHovering ? 'block' : 'none';
    }
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='relative'
    >
      {children}
      <div
        ref={contentRef}
        className='pointer-events-none absolute z-50'
        style={{ left: 0, top: 0, opacity: 0, display: 'none' }}
      >
        <div className='w-64 rounded-md bg-zinc-800 p-4 text-zinc-100 shadow-lg'>
          {content}
        </div>
      </div>
    </div>
  );
};

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
          <FollowCursor
            key={index}
            content={
              <div>
                <h3 className='font-bold'>{item.title}</h3>
                <p>{item.date}</p>
                <p>{item.location}</p>
              </div>
            }
          >
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
