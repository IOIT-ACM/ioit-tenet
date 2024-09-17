import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KONFHUB_PAGE } from '@/config';
import { Magnets } from '@/components/ui/RoundedButton/magnets';

gsap.registerPlugin(ScrollTrigger);

export const Links: React.FC = () => {
  const linksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray('.link-item');

      gsap.from(links, {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }, linksRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={linksRef}
      className='absolute bottom-0 h-fit transform md:right-10 md:top-1/2 md:-translate-y-1/2'
    >
      <div className='flex w-screen select-none items-center justify-center gap-10 text-center md:w-full md:flex-col md:text-2xl'>
        <Magnets
          link={KONFHUB_PAGE}
          newpage
          className='link-item bg-none text-white md:mt-0'
        >
          Early bird pass
        </Magnets>
        <Magnets link='/events' className='link-item text-white md:mt-0'>
          Events
        </Magnets>
        <Magnets link='/speakers' className='link-item text-white md:mt-0'>
          Speakers
        </Magnets>
      </div>
    </div>
  );
};
