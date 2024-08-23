'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaMicrophone,
  FaSearch,
  FaGlobe,
  FaImages,
} from 'react-icons/fa';

const links = [
  { name: 'Home', href: '/#home', icon: FaHome },
  { name: 'Intro', href: '/#intro', icon: FaInfoCircle },
  { name: 'Timeline', href: '/#timeline', icon: FaCalendarAlt },
  { name: 'Schedule', href: '/#schedule', icon: FaCalendarAlt },
  { name: 'Speakers', href: '/#speakers', icon: FaMicrophone },
  { name: 'Search', href: '/#search', icon: FaSearch },
  { name: 'MUN', href: '/#mun', icon: FaGlobe },
  { name: 'Gallery', href: '/#gallery', icon: FaImages },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX > window.innerWidth - 40) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      onMouseLeave={() => setIsOpen(false)}
      className='fixed right-0 top-0 z-50 flex h-screen'
    >
      <motion.div
        className='flex h-full items-center'
        initial={{ width: '0px' }}
        animate={{ width: isOpen ? '280px' : '0px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='h-full w-full bg-gradient-to-l from-gray-900 to-gray-800 px-6 py-12 shadow-2xl'
            >
              <ul className='flex h-full flex-col justify-center space-y-8'>
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={link.href}>
                      <div className='group flex items-center space-x-4 text-gray-300 transition-all duration-200 hover:text-white'>
                        <span className='text-2xl transition-colors duration-200 group-hover:text-blue-400'>
                          {<link.icon />}
                        </span>
                        <span className='text-lg font-medium'>{link.name}</span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
      <div className='h-full w-1 bg-gradient-to-l from-blue-500 to-transparent' />
    </motion.div>
  );
};
