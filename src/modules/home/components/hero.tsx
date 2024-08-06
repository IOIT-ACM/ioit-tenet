'use client';

import { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { cn } from '@/lib/utils';

export const Landing = () => {
  const title = useParallax({
    scale: [1, 0.5, 'easeInQuad'],
  });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='home' className='flex h-[150vh] w-screen'>
      <div className='fixed top-0 flex h-screen w-screen items-center overflow-hidden'>
        <span
          className={cn(
            `z-10 w-full select-none text-center text-6xl font-extrabold text-gray-200 md:text-9xl`,
            hidden ? 'opacity-0' : 'opacity-100',
          )}
          // style={{ fontFamily: 'Zefani, sans-serif' }}
          ref={title.ref}
        >
          IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span> 2024
        </span>
      </div>
    </div>
  );
};
