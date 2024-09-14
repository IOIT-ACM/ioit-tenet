'use client';

import React, { useEffect, useRef } from 'react';
import type { Speaker } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SpeakerDetails = ({ speaker }: { speaker: Speaker }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' },
      );
    }

    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2',
      );
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2',
      );
    }

    if (bioRef.current) {
      const bioContent = bioRef.current.querySelector('p');
      if (bioContent) {
        // Split the text into individual characters
        const chars = bioContent.textContent?.split('') ?? [];
        bioContent.innerHTML = chars
          .map((char) => `<span>${char}</span>`)
          .join('');

        // Animate each character
        tl.fromTo(
          bioContent.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.001,
            stagger: 0.001,
            ease: 'power2.out',
          },
          '-=0.2',
        );
      }
    }

    if (linkRef.current) {
      tl.fromTo(
        linkRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2',
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='flex w-full flex-col items-center justify-start gap-10 pt-5 text-white md:pt-10'
    >
      <div className='w-full overflow-hidden'>
        <div className='w-full md:flex'>
          <div
            ref={imageRef}
            className='sticky top-0 h-64 w-full overflow-hidden rounded-lg border md:h-[500px] md:w-1/2'
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              layout='fill'
              objectFit='cover'
              className='h-full w-full object-center transition-all duration-1000 hover:scale-105'
            />
          </div>
          <div className='pt-3 md:w-1/2 md:p-8 md:pt-0'>
            <h1 ref={nameRef} className='text-3xl font-bold md:text-4xl'>
              {speaker.name}
            </h1>
            <p ref={titleRef} className='flex items-center text-xl'>
              {speaker.title}
            </p>
            {speaker.bio && (
              <div ref={bioRef}>
                <h2 className='mb-4 mt-10 text-xl font-semibold'>About</h2>
                <p className='text-lg text-slate-400'>{speaker.bio}</p>
              </div>
            )}
            <div id='tenet-button-animation' className='mt-5'>
              <h4>
                <Link ref={linkRef} href={speaker.url} target='_blank'>
                  View LinkedIn
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
