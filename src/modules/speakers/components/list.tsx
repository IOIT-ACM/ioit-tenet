'use client';

import { speakers } from '@/config/speakers';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { Speaker } from '@/types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const groupByDomain = (speakers: Speaker[]) => {
  return speakers.reduce(
    (acc, speaker) => {
      const domain = speaker.domain ?? 'Others';
      if (!acc[domain]) {
        acc[domain] = [];
      }
      acc[domain].push(speaker);
      return acc;
    },
    {} as Record<string, Speaker[]>,
  );
};

export const Speakers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const speakersByDomain = groupByDomain(speakers);

  useEffect(() => {
    if (containerRef.current) {
      const speakers = containerRef.current.querySelectorAll('.speaker-card');

      speakers.forEach((speaker) => {
        gsap.fromTo(
          speaker,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: speaker,
              start: 'top bottom-=100',
              end: 'bottom top+=100',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }
  }, []);

  return (
    <div ref={containerRef} className='mx-auto my-8 px-4 pb-8 pt-5 md:my-10'>
      <h1 className='text-center text-4xl font-bold text-white'>
        Speakers at TENET&apos;24
      </h1>

      {Object.entries(speakersByDomain).map(
        ([domain, domainSpeakers], domainIndex) => (
          <div key={domainIndex} className='my-12'>
            <h2 className='mb-10 mt-20 text-center text-3xl font-semibold capitalize text-indigo-400'>
              {domain}
            </h2>

            <div className='grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {domainSpeakers.map((speaker) => (
                <Link
                  href={`/speakers/${speaker.id}`}
                  key={speaker.id}
                  passHref
                >
                  <div className='speaker-card flex flex-col items-center'>
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
        ),
      )}
    </div>
  );
};
