'use client';

import { useEffect, useState } from 'react';
import { FaKeyboard } from 'react-icons/fa6';
import Link from 'next/link';

export const GameLink = () => {
  const [showGameLink, setShowGameLink] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const bottomThreshold = 1000; // Pixels from the bottom

      if (currentScrollTop >= maxScrollTop - bottomThreshold) {
        setShowGameLink(false);
      } else {
        setShowGameLink(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showGameLink) {
    return (
      <Link
        href={'/game'}
        className='fixed bottom-7 left-10 z-50 hidden rounded-full bg-black p-2 text-[15px] text-white transition-all hover:scale-125 hover:animate-pulse md:block'
      >
        <FaKeyboard />
      </Link>
    );
  }
};
