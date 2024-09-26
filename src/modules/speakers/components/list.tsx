'use client';

import { speakers } from '@/config/speakers';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Speakers = () => {
  const sponsorRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sponsorRefs.current.length > 0) {
      gsap.fromTo(
        sponsorRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: sponsorRefs.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );
    }
  }, []);

  return (
    <div className='mx-auto my-8 px-4 pb-8 pt-5 md:my-20'>
      <h1 className='mb-20 text-center text-4xl font-bold text-white'>
        Speakers at TENET&apos;24
      </h1>
      <div className='grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {speakers.map((speaker, index) => (
          <Link href={`/speakers/${speaker.id}`} key={speaker.id} passHref>
            <div
              className='flex flex-col items-center'
              ref={(el) => {
                if (el) sponsorRefs.current[index] = el;
              }}
            >
              <div className='mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200 md:h-48 md:w-48'>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={192}
                  height={192}
                  className='h-full w-full rounded-full border border-white bg-gray-300 object-cover transition-all hover:scale-105'
                />
              </div>
              <h2 className='text-center text-base font-bold text-white md:text-xl'>
                {speaker.name}
              </h2>
              <p className='text-center text-xs text-indigo-400 md:text-base'>
                {speaker.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
