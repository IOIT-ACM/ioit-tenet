/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export const MUN = () => {
  return (
    <section
      id='mun'
      className='grid min-h-screen w-screen grid-cols-1 items-center gap-8 px-10 py-12 text-white md:grid-cols-2 md:px-20'
    >
      <div>
        <span className='mb-4 block text-lg font-medium text-[#26a7ff] md:text-xl'>
          Glimpses from last year
        </span>
        <h3 className='text-4xl font-semibold md:text-9xl'>
          IOIT MUN&lsquo;23
        </h3>
        <p className='my-4 text-base text-slate-300 md:my-6 md:text-lg'>
          Reflecting on the highlights from IOIT MUN 2023, the two-day
          conference commemorating AISSMS IOIT Silver Jubilee featured
          distinguished speakers such as Mr. Abhay Vaidya and Dr. Arjun Deore.
          Read further on the IOIT MUN website
        </p>
        <div className='flex gap-5'>
          <Link
            href={'https://www.ioitmun.com/'}
            target='_blank'
            className='rounded bg-[#26a7ff] px-4 py-2 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95'
          >
            Visit site
          </Link>
          <Link
            href={'/events/mun'}
            target='_blank'
            className='rounded bg-[#26a7ff] px-4 py-2 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95'
          >
            Register for MUN&lsquo;24
          </Link>
        </div>
      </div>
      <ShuffleGrid />
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
  id: number;
  src: string;
}

const squareData: SquareData[] = [
  {
    id: 1,
    src: '/imgs/mun/1.png',
  },
  {
    id: 2,
    src: '/imgs/mun/2.png',
  },
  {
    id: 3,
    src: '/imgs/mun/3.png',
  },
  {
    id: 4,
    src: '/imgs/mun/4.png',
  },
  {
    id: 5,
    src: '/imgs/mun/5.png',
  },
  {
    id: 6,
    src: '/imgs/mun/6.png',
  },
  {
    id: 7,
    src: '/imgs/mun/7.png',
  },
  {
    id: 8,
    src: '/imgs/mun/8.png',
  },
  {
    id: 9,
    src: '/imgs/mun/9.png',
  },
  {
    id: 10,
    src: '/imgs/mun/10.png',
  },
  {
    id: 11,
    src: '/imgs/mun/11.png',
  },
  {
    id: 12,
    src: '/imgs/mun/12.png',
  },
  {
    id: 13,
    src: '/imgs/mun/13.png',
  },
  {
    id: 14,
    src: '/imgs/mun/14.png',
  },
  {
    id: 15,
    src: '/imgs/mun/15.png',
  },
  {
    id: 16,
    src: '/imgs/mun/16.png',
  },
];

const generateSquares = () => {
  return shuffleArray(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className='h-full w-full'
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
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
    <div className='grid h-[450px] grid-cols-4 grid-rows-4 gap-3'>
      {squares.map((sq) => sq)}
    </div>
  );
};
