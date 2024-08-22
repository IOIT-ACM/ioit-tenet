'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import SCROLL from '@/lottie/scroll-down-animation.json';

const ScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.body.scrollHeight;

    if (pageHeight - scrollPosition <= 200) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isVisible) {
    return (
      <div className='fixed bottom-10 z-[9999999] flex w-screen items-center justify-center'>
        <Lottie
          animationData={SCROLL}
          loop={true}
          className='m-0 h-[40px] p-0 md:h-[52px]'
        />
      </div>
    );
  }
};

export default ScrollIcon;
