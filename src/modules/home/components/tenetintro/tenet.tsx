import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { KONFHUB_PAGE } from '@/config';
import { LOADTIME } from '@/config';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

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
      className='absolute top-0 hidden h-fit transform flex-col justify-center md:left-10 md:flex md:h-full'
    >
      <h2 className='headline hidden text-5xl font-extrabold text-white md:block'>
        FIRST EDITION <br /> OF TENET <br /> 2024
      </h2>
      <h2 className='date hidden text-lg text-gray-200 md:block'>
        4th - 6th October 2024
      </h2>
      <div className='link-item flex w-screen items-center justify-center text-center md:mt-5 md:w-full md:flex-col md:items-start md:justify-start md:text-right md:text-2xl'>
        <>
          <Separator className='mb-4' />
          <Link
            href={KONFHUB_PAGE}
            target='_blank'
            className='date hidden text-2xl text-gray-200 md:block'
          >
            Get Early bird pass
          </Link>
        </>
      </div>
    </div>
  );
};
