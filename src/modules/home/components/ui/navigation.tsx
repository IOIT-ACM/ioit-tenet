'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/#home' },
  { name: 'Intro', href: '/#intro' },
  { name: 'Schedule', href: '/#schedule' },
  { name: 'Search', href: '/#search' },
  { name: 'MUN', href: '/#mun' },
  { name: 'Gallery', href: '/#gallery' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className='fixed right-0 top-0 z-50 flex h-screen w-0 md:w-10 md:min-w-10'
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0.5, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className='flex flex-col justify-around pl-20'
          >
            {links.map((link) => (
              <div key={link.name} className='mb-2'>
                <Link href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-4 py-2 text-xl font-semibold text-gray-300 transition-all duration-200'
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
