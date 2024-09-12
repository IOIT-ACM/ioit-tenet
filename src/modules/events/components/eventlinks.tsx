import React, { type MouseEvent } from 'react';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';
import { useAnimate } from 'framer-motion';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useismobile';

export const EventLinksStructure: React.FC<{ day: number }> = ({ day }) => {
  const events = getEventsForDay(day);
  const isMobile = useIsMobile();

  const renderEventRows = () => {
    if (isMobile) {
      // For mobile, render all events in a single column
      return events.map((event) => (
        <div key={event.id} className='grid grid-cols-1'>
          <LinkBox text={event.title} href={`/events/${event.id}`} />
        </div>
      ));
    }

    // For desktop, maintain the 3-2-3-2 pattern
    const rows = [];
    let currentIndex = 0;

    while (currentIndex < events.length) {
      const isEvenRow = rows.length % 2 === 0;
      let itemsInRow = isEvenRow ? 3 : 2;

      // Check if there's only one item left and the current row should have 2 columns
      if (events.length - currentIndex === 1 && itemsInRow === 2) {
        itemsInRow = 1;
      }

      const rowEvents = events.slice(currentIndex, currentIndex + itemsInRow);

      rows.push(
        <div
          key={currentIndex}
          className={`grid grid-cols-${itemsInRow} divide-x divide-neutral-900`}
        >
          {rowEvents.map((event) => (
            <LinkBox
              key={event.id}
              text={event.title}
              href={`/events/${event.id}`}
            />
          ))}
        </div>,
      );

      currentIndex += itemsInRow;
    }

    return rows;
  };

  return (
    <div className='mb-8 flex min-h-screen items-center justify-center'>
      <div className='w-screen divide-y divide-neutral-900 border border-neutral-900'>
        {renderEventRows()}
      </div>
    </div>
  );
};

const getEventsForDay = (day: number): ScheduleItemType[] => {
  switch (day) {
    case 1:
      return day1.filter((item) => item.imp);
    case 2:
      return day2.filter((item) => item.imp);
    case 3:
      return day3.filter((item) => item.imp);
    default:
      return [];
  }
};

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

type Side = 'top' | 'left' | 'bottom' | 'right';
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

export const LinkBox = ({ text, href }: { text: string; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: 'left' as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: 'right' as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: 'top' as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: 'bottom' as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity?.[0]?.side ?? 'left';
  };

  const handleMouseEnter = async (e: MouseEvent) => {
    const side = getNearestSide(e);

    if (scope.current) {
      await animate(scope.current, {
        clipPath: ENTRANCE_KEYFRAMES[side],
      });
    }
  };

  const handleMouseLeave = async (e: MouseEvent) => {
    const side = getNearestSide(e);

    if (scope.current) {
      await animate(scope.current, {
        clipPath: EXIT_KEYFRAMES[side],
      });
    }
  };

  return (
    <Link
      href={href}
      onMouseEnter={(e) => {
        void handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        void handleMouseLeave(e);
      }}
      className='relative grid h-20 w-full place-content-center sm:h-28 md:h-36'
    >
      <div className='text-center text-xl sm:text-3xl'>{text}</div>

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className='absolute inset-0 grid place-content-center bg-neutral-900 text-white'
      >
        <div className='text-center text-xl sm:text-3xl md:text-4xl'>
          {text}
        </div>
      </div>
    </Link>
  );
};
