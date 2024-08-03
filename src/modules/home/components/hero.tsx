'use client';

import { motion } from 'framer-motion';
import Agenda from './agendabutton';
import { useParallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

export const Landing = () => {
  const title = useParallax<HTMLDivElement>({
    scale: [1, 0.5, 'easeInQuad'],
  });

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <motion.span
        className={`fixed text-6xl font-bold md:text-9xl`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hidden ? 0 : 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={title.ref}
      >
        IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span> 2024
      </motion.span>
      <Agenda />
    </div>
  );
};
