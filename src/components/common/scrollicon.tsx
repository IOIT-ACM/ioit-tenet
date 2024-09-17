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

  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  };

  if (isVisible) {
    return (
      <div
        className='fixed bottom-5 z-[9999999] hidden w-screen items-center justify-center md:bottom-10 md:flex'
        onClick={handleClick}
      >
        <Lottie
          animationData={SCROLL}
          loop={true}
          className='m-0 h-[30px] p-0 md:h-[52px]'
        />
      </div>
    );
  }
};

export default ScrollIcon;
