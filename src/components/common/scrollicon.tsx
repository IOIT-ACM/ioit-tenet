'use client';

import Lottie from 'lottie-react';
import SCROLL from '@/lottie/scroll-down-animation.json';

const ScrollIcon = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className='fixed bottom-10 z-[9999999] flex w-screen flex-col items-center justify-center'
      onClick={handleClick}
    >
      <Lottie
        animationData={SCROLL}
        loop={true}
        className='m-0 h-[40px] p-0 md:h-[52px]'
      />
    </div>
  );
};

export default ScrollIcon;
