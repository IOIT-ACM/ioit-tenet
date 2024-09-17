import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Magnets } from '@/components/ui/RoundedButton/magnets';
import { LOADTIME } from '@/config';

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
        delay: LOADTIME,
      });
    }, linksRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={linksRef}
      className='absolute bottom-20 h-fit w-fit md:right-10 md:top-1/2 md:-translate-y-1/2'
    >
      <div className='flex w-screen flex-row items-center justify-center gap-5 text-xl md:w-fit md:flex-col md:text-2xl'>
        <Magnets link='/events' className='link-item text-white'>
          Events
        </Magnets>
        <Magnets link='/speakers' className='link-item text-white'>
          Speakers
        </Magnets>
        <Magnets
          link='mailto:ioit.tenet@aissmsioit.org'
          className='link-item text-white'
        >
          Contact
        </Magnets>
      </div>
    </div>
  );
};
