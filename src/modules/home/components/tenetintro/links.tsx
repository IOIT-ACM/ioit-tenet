/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Magnets } from '@/components/ui/RoundedButton/magnets';
import { LOADTIME } from '@/config';
import { useIsMobile } from '@/hooks/useismobile';

gsap.registerPlugin(ScrollTrigger);

export const Links: React.FC = () => {
  const linksRef = useRef<HTMLDivElement | null>(null);
  const ismobile = useIsMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray('.link-item');

      gsap.from(links, {
        x: 200,
        opacity: 0,
        duration: ismobile ? 0.5 : 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: ismobile ? LOADTIME - 1.5 : LOADTIME,
      });
    }, linksRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={linksRef}
      className={`absolute z-50 h-fit w-fit md:right-10 md:top-1/2 md:-translate-y-1/2 ${ismobile && 'bottom-0 pb-32'}`}
    >
      <div className='flex w-screen flex-row items-center justify-center gap-5 text-xl drop-shadow-md md:w-fit md:flex-col md:text-2xl'>
        <Magnets link='/24/events' className='link-item text-white'>
          Events
        </Magnets>
        <Magnets link='/schedule' className='link-item text-white'>
          Schedule
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
