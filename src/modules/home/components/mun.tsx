/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useismobile';
import { MUNLINK } from '@/config';

export const MUN = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section
      id='mun'
      className='grid min-h-screen w-screen grid-cols-1 items-center gap-8 bg-neutral-950 px-6 py-8 text-white sm:px-10 sm:py-12 md:grid-cols-2 md:px-20'
    >
      <div>
        <span className='mb-3 block text-base font-medium text-[#26a7ff] sm:mb-4 sm:text-lg md:text-xl'>
          Glimpses from this year
        </span>
        <h3 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl'>
          IOIT MUN&lsquo;24
        </h3>
        <p className='my-3 text-sm text-slate-300 sm:my-4 sm:text-base md:my-6 md:text-lg'>
          Reflecting on the highlights from IOIT MUN 2024, the two-day
          conference commemorating AISSMS IOIT Silver Jubilee featured
          distinguished speakers such as Mr. Abhay Vaidya and Dr. Arjun Deore.
          Read further on the IOIT MUN website
        </p>
        <div
          id='tenet-button-animation'
          className='flex flex-col gap-4 sm:flex-row sm:gap-5'
        >
          <h4>
            <Link href={'https://www.ioitmun.com/'} target='_blank'>
              Visit site
            </Link>
          </h4>
          {/* <h4>
            <Link href={MUNLINK} target='_blank'>
              Register for MUN&lsquo;24
            </Link>
          </h4> */}
          <h4>
            <Link href={MUNLINK} target='_blank'>
              Gallery
            </Link>
          </h4>
        </div>
      </div>
      {!loading && <ShuffleGrid />}
    </section>
  );
};

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]] as [T, T];
  }
  return array;
}

interface SquareData {
  src: string;
}

const squareData: SquareData[] = [
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/1.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/2.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/3.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/4.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/5.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/6.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/7.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/8.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/9.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/10.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/11.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/12.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/13.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/14.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/15.jpeg',
  },
  {
    src: 'https://ioit.acm.org/tenet/mun/2024/16.jpeg',
  },
];

const generateSquares = () => {
  return shuffleArray(squareData).map((sq) => (
    <motion.div
      key={sq.src}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className='h-full w-full bg-gray-300'
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const isMobile = useIsMobile();
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div
      className={`grid h-[75vh] gap-2 sm:gap-3 md:h-[450px] ${
        isMobile ? 'grid-cols-2 grid-rows-8' : 'grid-cols-4 grid-rows-4'
      }`}
    >
      {squares}
    </div>
  );
};
