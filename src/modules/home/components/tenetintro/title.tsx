import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { LOADTIME } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export const TITLETEXT: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headline = new SplitType('h2.headline', { types: 'chars' });
      const date = new SplitType('h2.date', { types: 'chars' });
      const links = gsap.utils.toArray('.link-item');

      // Animate the headline text
      gsap.fromTo(
        headline.chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.5,
          ease: 'power4.out',
          delay: LOADTIME + 1.5,
          scrollTrigger: {
            trigger: '.headline',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );

      // Animate the date text
      gsap.fromTo(
        date.chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 1.2,
          delay: LOADTIME + 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.date',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='absolute top-20 w-full text-center md:hidden'
    >
      <h2 className='headline text-lg text-white'>
        FIRST EDITION OF TENET 2024
      </h2>
      <h2 className='date text-sm text-gray-200'>4th - 6th October 2024</h2>
    </div>
  );
};
