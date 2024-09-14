'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer);

interface HeroImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaText2?: string;
  ctaLink?: string;
  ctaLink2?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaText2,
  ctaLink,
  ctaLink2,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for title and subtitle on load
      gsap.from([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Stagger animation for buttons
      if (ctaButtonsRef.current)
        gsap.fromTo(
          ctaButtonsRef.current?.children,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: 'back.out(1.7)',
            delay: 1.5,
          },
        );

      // ScrollTrigger animation for background
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
        scale: 1.1,
        ease: 'power1.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleHoverOut = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  return (
    <div
      className='hero relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8'
      ref={heroRef}
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className='hero-bg z-0 select-none opacity-60'
      />

      <div className='relative z-10 rounded-lg bg-opacity-50 p-6 text-center sm:p-8'>
        <h1
          ref={titleRef}
          className='mb-4 text-6xl font-bold text-white sm:text-9xl'
        >
          {title}
        </h1>
        {subtitle && (
          <p ref={subtitleRef} className='mb-8 text-base text-white sm:text-xl'>
            {subtitle}
          </p>
        )}

        <div
          ref={ctaButtonsRef}
          id='tenet-button-animation'
          className='flex w-full flex-col items-center justify-center gap-3 md:flex-row md:gap-5'
        >
          {ctaText && ctaLink && (
            <h4>
              <Link
                href={ctaLink}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                {ctaText}
              </Link>
            </h4>
          )}
          {ctaText2 && ctaLink2 && (
            <h4>
              <Link
                href={ctaLink2}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                {ctaText2}
              </Link>
            </h4>
          )}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950/0 to-black sm:h-96' />
    </div>
  );
};
