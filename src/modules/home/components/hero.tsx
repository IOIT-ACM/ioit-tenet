'use client';

import { motion } from 'framer-motion';
import Agenda from './agendabutton';

export const Landing = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <motion.span
        className='text-6xl font-bold md:text-9xl'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span> 2024
      </motion.span>
      <Agenda />
    </div>
  );
};
