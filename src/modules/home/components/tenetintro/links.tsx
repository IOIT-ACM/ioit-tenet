import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
      className='absolute h-fit w-full transform md:right-10 md:top-1/2 md:-translate-y-1/2'
    >
      <div className='flex w-full select-none items-center justify-center gap-10 text-center md:w-full md:flex-col md:text-2xl'>
        <Magnets link='/events' className='link-item text-white md:mt-0'>
          Events
        </Magnets>
        <Magnets link='/speakers' className='link-item text-white md:mt-0'>
          Speakers
        </Magnets>
        <Magnets
          link='mailto:ioit.tenet@aissmsioit.org'
          className='link-item text-white md:mt-0'
        >
          Contact
        </Magnets>
      </div>
    </div>
  );
};
