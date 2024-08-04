import React, { type MouseEvent } from 'react';
import { useAnimate } from 'framer-motion';

export const EventLinks = () => {
  return (
    <div className='flex min-h-[70vh] w-screen items-center justify-center bg-neutral-50 px-4 py-12'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className='divide-y divide-neutral-900 border border-neutral-900'>
      <div className='grid grid-cols-2 divide-x divide-neutral-900'>
        <LinkBox text='Creators Conclave' href='#' />
        <LinkBox text='Tech Fiesta' href='#' />
      </div>
      <div className='grid grid-cols-3 divide-x divide-neutral-900'>
        <LinkBox text='Theater act' href='#' />
        <LinkBox text='E-Sports' href='#' />
        <LinkBox text='Tech Fiesta' href='#' />
      </div>
      <div className='grid grid-cols-4 divide-x divide-neutral-900'>
        <LinkBox text='Open Mic' href='#' />
        <LinkBox text='MUN' href='#' />
        <LinkBox text='E-Sports' href='#' />
        <LinkBox text='Gaming' href='#' />
      </div>
    </div>
  );
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

const LinkBox = ({ text, href }: { text: string; href: string }) => {
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
      <div className='text-xl sm:text-3xl lg:text-4xl'>{text}</div>

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className='absolute inset-0 grid place-content-center bg-neutral-900 text-white'
      >
        <div className='text-xl sm:text-3xl md:text-4xl'>{text}</div>
      </div>
    </a>
  );
};
