'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import SplitType from 'split-type';
import { Button } from '@/components/ui/RoundedButton';

gsap.registerPlugin(ScrollTrigger, Observer);

interface HeroImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaText2?: string;
  ctaLink?: string;
  ctaLink2?: string;
  ctalink1color?: string;
  ctalink2color?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaText2,
  ctaLink,
  ctaLink2,
  ctalink1color,
  ctalink2color,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SplitType animation for title only
      if (titleRef.current) {
        const splitTitle = new SplitType(titleRef.current, { types: 'chars' });

        gsap.from(splitTitle.chars, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.5,
        });
      }

      // "Pop out" animation for subtitle
      if (subtitle && subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 1.0,
          },
        );
      }

      // Stagger animation for buttons
      if (ctaButtonsRef.current) {
        gsap.fromTo(
          ctaButtonsRef.current.children,
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
      }

      // ScrollTrigger animation for background
      if (heroRef.current) {
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
      }
    }, heroRef);

    return () => ctx.revert();
  }, [subtitle]);

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
          className='flex w-full flex-col items-center justify-center gap-3 md:flex-row md:gap-5'
        >
          {ctaText && ctaLink && (
            <Button color={ctalink1color} link={ctaLink}>
              {ctaText}
            </Button>
          )}
          {ctaText2 && ctaLink2 && (
            <Button color={ctalink2color} link={ctaLink2}>
              {ctaText2}
            </Button>
          )}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950/0 to-black sm:h-96' />
    </div>
  );
};
