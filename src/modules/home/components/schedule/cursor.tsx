'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ScheduleItemType } from '@/types';
import { Separator } from '@/components/ui/separator';
import { getEventStatus } from '@/utils';
import { useIsMobile } from '@/hooks/useismobile';

export const FollowCursor = ({
  data,
  children,
}: {
  children: React.ReactNode;
  data: ScheduleItemType;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ismobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && contentRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const cardWidth = contentRef.current.offsetWidth;
        const cardHeight = contentRef.current.offsetHeight;
        const x = e.clientX - rect.left - cardWidth / 2;
        const y = e.clientY - rect.top - cardHeight / 2;

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
    if (contentRef.current && !ismobile) {
      contentRef.current.style.opacity = isHovering ? '0.85' : '0';
      contentRef.current.style.display = isHovering ? 'block' : 'none';
    }
  }, [isHovering, ismobile]);

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
        <HoverCard data={data} />
      </div>
    </div>
  );
};

const HoverCard = ({ data }: { data: ScheduleItemType }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`min-w-[282px] max-w-[300px] rounded-lg ${data.color} p-4`}
      >
        <p className='text-2xl'>{data.title}</p>
        <h3 className='font-bold'>{getEventStatus(data.start)}</h3>
        <div className='mt-20 flex justify-between gap-5'>
          <p>{data.date}</p>
          <p>{data.location}</p>
        </div>
        <Separator className='my-2' />

        <div className='flex justify-between gap-5'>
          {data.organizers.slice(0, 2).map((organizer, index) => (
            <div
              key={index}
              className='flex items-center gap-1.5 text-sm uppercase text-zinc-200'
            >
              <p>{organizer.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
