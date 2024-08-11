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
  boundaryRef,
}: {
  children: React.ReactNode;
  data: ScheduleItemType;
  boundaryRef: React.RefObject<HTMLElement>;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ismobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && contentRef.current && boundaryRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const boundaryRect = boundaryRef.current.getBoundingClientRect();
        const cardWidth = contentRef.current.offsetWidth;
        const cardHeight = contentRef.current.offsetHeight;

        let x = e.clientX - rect.left - cardWidth / 2;
        let y = e.clientY - rect.top - cardHeight / 2;

        const minX = 0;
        const minY = 0;
        const maxX = boundaryRect.width - cardWidth;
        const maxY = boundaryRect.height - cardHeight;

        x = Math.max(minX, Math.min(x, maxX));
        y = Math.max(minY, Math.min(y, maxY));

        const offsetX = x - (e.clientX - rect.left - cardWidth / 2);
        const offsetY = y - (e.clientY - rect.top - cardHeight / 2);

        contentRef.current.style.transform = `translate(${x}px, ${y}px)`;
        contentRef.current.style.transition = 'transform 0.1s ease-out';

        const innerContent = contentRef.current
          .firstElementChild as HTMLElement;
        if (innerContent) {
          innerContent.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
        }
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
  }, [isHovering, boundaryRef]);

  useEffect(() => {
    if (contentRef.current && !ismobile) {
      contentRef.current.style.opacity = isHovering ? '0.95' : '0';
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
        className={`min-w-[282px] max-w-[300px] rounded-lg ${data.color} z-[99999] p-4`}
      >
        <p className='text-2xl'>{data.title}</p>
        <h3 className='font-bold'>{getEventStatus(data.start)}</h3>
        <div className='mt-20 flex justify-between gap-5'>
          <p>{data.date}</p>
          <p>{data.location}</p>
        </div>
        {data.organizers && (
          <>
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
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
