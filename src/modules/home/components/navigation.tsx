'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const links = [
  { name: 'Events', href: '/#events' },
  { name: 'Search', href: '/#search' },
  { name: 'TOP', href: '/#' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'MUN', href: '/#mun' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed -bottom-8 -left-8 z-50'>
      <motion.div
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='flex cursor-pointer items-center justify-center rounded-full bg-blue-600 p-10 text-white shadow-lg'
      >
        <FaBars size={24} />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='relative mt-4'
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -50, y: 50 }}
                transition={{ delay: index * 0.1 }}
                className='mb-2'
              >
                <Link href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-lg transition-colors duration-200 hover:bg-blue-100'
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
