'use client';

import { motion } from 'framer-motion';

export const Landing = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <motion.span
        className='text-6xl font-bold md:text-9xl'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span> 2024
      </motion.span>
      {/* Add other content here */}
    </div>
  );
};
