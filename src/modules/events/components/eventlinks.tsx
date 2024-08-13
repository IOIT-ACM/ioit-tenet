import React, { type MouseEvent } from 'react';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';
import { useAnimate } from 'framer-motion';

export const EventLinksStructure: React.FC<{ day: number }> = ({ day }) => {
  const events = getEventsForDay(day);

  return (
    <div className='divide-y divide-neutral-900 border border-neutral-900'>
      <div className='grid grid-cols-2 divide-x divide-neutral-900'>
        {events.slice(0, 2).map((event) => (
          <LinkBox
            key={event.id}
            text={event.title}
            href={`/events/${event.id}`}
          />
        ))}
      </div>
      <div className='grid grid-cols-3 divide-x divide-neutral-900'>
        {events.slice(2, 5).map((event) => (
          <LinkBox
            key={event.id}
            text={event.title}
            href={`/events/${event.id}`}
          />
        ))}
      </div>
      <div className='grid grid-cols-4 divide-x divide-neutral-900'>
        {events.slice(5, 9).map((event) => (
          <LinkBox
            key={event.id}
            text={event.title}
            href={`/events/${event.id}`}
          />
        ))}
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
    <a
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
    </a>
  );
};
