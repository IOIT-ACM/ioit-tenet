'use client';

import { useState, useEffect, useRef } from 'react';

import type { ScheduleItemType } from '@/types';

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
        <HoverCard data={data} />
      </div>
    </div>
  );
};

const HoverCard = ({ data }: { data: ScheduleItemType }) => {
  return (
    <div className='bg-red-200'>
      <h3 className='font-bold'>{data.title}</h3>
      <p>{data.date}</p>
      <p>{data.location}</p>
    </div>
  );
};
