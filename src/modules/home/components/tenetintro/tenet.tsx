import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'; // Import SplitType
import { KONFHUB_PAGE } from '@/config';
import { Button } from '@/components/ui/RoundedButton';
import { LOADTIME } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export const TENET: React.FC = () => {
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

      // Animate the button links
      gsap.from(links, {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: LOADTIME + 2,
        scrollTrigger: {
          trigger: '.link-item',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='absolute hidden h-fit transform md:left-10 md:top-1/2 md:block md:-translate-y-1/2'
    >
      <h2 className='headline hidden text-5xl text-white md:block'>
        FIRST EDITION <br /> OF TENET <br /> 2024
      </h2>
      <h2 className='date hidden text-xl text-gray-200 md:block'>
        4th - 6th October 2024
      </h2>

      <div className='flex w-screen select-none items-center justify-center gap-10 text-center md:mt-5 md:w-full md:flex-col md:text-2xl'>
        <Button
          link={KONFHUB_PAGE}
          newpage
          className='link-item bg-none text-white md:mt-0'
        >
          Get Early bird pass
        </Button>
      </div>
    </div>
  );
};
