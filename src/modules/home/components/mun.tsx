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
          Glimpses from last year
        </span>
        <h3 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl'>
          IOIT MUN&lsquo;23
        </h3>
        <p className='my-3 text-sm text-slate-300 sm:my-4 sm:text-base md:my-6 md:text-lg'>
          Reflecting on the highlights from IOIT MUN 2023, the two-day
          conference commemorating AISSMS IOIT Silver Jubilee featured
          distinguished speakers such as Mr. Abhay Vaidya and Dr. Arjun Deore.
          Read further on the IOIT MUN website
        </p>
        <div className='flex flex-col gap-4 sm:flex-row sm:gap-5'>
          <Link
            href={'https://www.ioitmun.com/'}
            target='_blank'
            className='rounded bg-[#26a7ff] px-3 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-600 active:scale-95 sm:px-4 sm:text-base'
          >
            Visit site
          </Link>
          <Link
            href={MUNLINK}
            target='_blank'
            className='rounded bg-[#26a7ff] px-3 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-600 active:scale-95 sm:px-4 sm:text-base'
          >
            Register for MUN&lsquo;24
          </Link>
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
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/1.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/2.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/3.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/4.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/5.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/6.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/7.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/8.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/9.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/10.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/11.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/12.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/13.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/14.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/15.png',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/2023/16.png',
  },
];

const generateSquares = (ismobile: boolean) => {
  const data = ismobile ? squareData.slice(0, 9) : squareData;
  return shuffleArray(data).map((sq) => (
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
  const ismobile = useIsMobile();
  const [squares, setSquares] = useState(generateSquares(ismobile));

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares(ismobile));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className='grid h-full grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 sm:grid-rows-3 sm:gap-3 md:h-[450px] md:grid-cols-4 md:grid-rows-4'>
      {ismobile ? squares.slice(0, 9) : squares}
    </div>
  );
};
