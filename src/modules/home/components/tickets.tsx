/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { useState, useEffect, useRef } from 'react';

export function Tickets() {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isHovered && buttonRef.current) {
      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (left + width / 2) / window.innerWidth,
          y: (top + height / 2) / window.innerHeight,
        },
      });
    }
  }, [isHovered]);

  return (
    <div className='flex w-full flex-col items-center justify-between bg-gradient-to-b from-blue-800 to-neutral-950 p-6 px-10 pb-10 sm:flex-row md:bg-gradient-to-r md:pb-6'>
      <div className='text-center sm:text-left'>
        <h1 className='text-4xl font-bold text-indigo-400 sm:text-6xl'>
          Grab your tickets now!
        </h1>
        <p className='mt-4 text-lg text-white sm:text-xl'>
          IOIT ACM STUDENT CHAPTERS FIRST EDITION OF TENET
        </p>
      </div>
      <div id='tenet-button-animation' className='mt-5 md:mt-0'>
        <h4>
          <Link
            className='flex items-center gap-2 font-bold'
            href='register'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={buttonRef}
          >
            GET TICKETS <FaArrowRightLong className='ml-2 h-4 w-4' />
          </Link>
        </h4>
      </div>
    </div>
  );
}
