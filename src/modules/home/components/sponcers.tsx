'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { type Sponsor } from '@/types';
import { sponsor } from '@/config/sponsors';

// TODO: Make the cards infinite scrolling
const data = [
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
  ...sponsor,
];

gsap.registerPlugin(ScrollTrigger);

export const Sponsors: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const items = container.children;
      const speed = 100;

      gsap.set(container, { width: items.length * 200 });

      gsap.to(container, {
        xPercent: scrollDirection === 'down' ? -100 : 100,
        duration: speed,
        repeat: -1,
        ease: 'linear',
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: () => {
          gsap.to(container, {
            xPercent: scrollDirection === 'down' ? -100 : 100,
            duration: speed,
            ease: 'linear',
          });
        },
      });
    }
  }, [scrollDirection]);

  return (
    <section className='overflow-hidden bg-neutral-950 py-12'>
      <div className='mx-auto px-4'>
        <h2 className='mb-8 text-center text-4xl font-bold text-white'>
          Sponsors
        </h2>
        <div className='relative'>
          <div
            className='flex space-x-8'
            ref={containerRef}
            style={{ willChange: 'transform' }}
          >
            {data.map((sponsor: Sponsor, index) => (
              <div
                key={index}
                className='flex flex-shrink-0 flex-col items-center rounded-lg p-4 transition-colors hover:bg-slate-700'
              >
                {sponsor.websiteUrl ? (
                  <Link
                    href={sponsor.websiteUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col items-center'
                  >
                    <div className='flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-1'>
                      <Image
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        style={{ objectFit: 'cover' }}
                        className='rounded-full'
                      />
                    </div>
                    <p className='mt-4 text-center text-white'>
                      {sponsor.name}
                    </p>
                  </Link>
                ) : (
                  <>
                    <div className='flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-2'>
                      <Image
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        width={128}
                        height={128}
                        style={{ objectFit: 'cover' }}
                        className='rounded-full'
                      />
                    </div>
                    <p className='mt-4 text-center text-white'>
                      {sponsor.name}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
