'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/#home' },
  { name: 'Events', href: '/#events' },
  { name: 'Search', href: '/#search' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'MUN', href: '/#mun' },
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
      className='fixed right-0 top-0 z-50 flex h-screen min-w-10'
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col justify-around bg-gradient-to-r from-transparent via-transparent to-gray-600 pl-20'
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                className='mb-2'
              >
                <Link href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-4 py-2 text-xl font-semibold text-white transition-all duration-200'
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
