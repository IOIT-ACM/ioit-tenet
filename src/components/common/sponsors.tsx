'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { type Sponsor } from '@/types';
import { sponsor } from '@/config/sponsors';

gsap.registerPlugin(ScrollTrigger);

type SponsorsByType = Record<string, Sponsor[]>;

export const Sponsors: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const sponsorCards =
        containerRef.current.querySelectorAll('.sponsor-card');

      sponsorCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              end: 'bottom top+=100',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }
  }, []);

  const sponsorsByType: SponsorsByType = sponsor.reduce((acc, sponsor) => {
    const type = sponsor.type ?? 'Other';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(sponsor);
    return acc;
  }, {} as SponsorsByType);

  const mainSponsors = sponsorsByType.Sponsor ?? [];
  const otherTypes = Object.keys(sponsorsByType)
    .filter((type) => type !== 'Sponsor')
    .sort();

  const renderSponsor = (sponsor: Sponsor, index: number) => (
    <div
      key={index}
      className='sponsor-card group relative flex flex-col items-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
    >
      {sponsor.websiteUrl ? (
        <Link
          href={sponsor.websiteUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <div className='relative h-40 w-40 overflow-hidden rounded-full bg-white p-2 shadow-inner transition-transform duration-300 group-hover:rotate-3'>
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              layout='fill'
              objectFit='contain'
              className='rounded-full transition-opacity duration-300 group-hover:opacity-90'
            />
          </div>
          <p className='mt-6 text-center text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-300'>
            {sponsor.name}
          </p>
        </Link>
      ) : (
        <>
          <div className='relative h-40 w-40 overflow-hidden rounded-full bg-white p-2 shadow-inner transition-transform duration-300 group-hover:rotate-3'>
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              layout='fill'
              objectFit='contain'
              className='rounded-full transition-opacity duration-300 group-hover:opacity-90'
            />
          </div>
          <p className='mt-6 text-center text-lg font-semibold text-white'>
            {sponsor.name}
          </p>
        </>
      )}
    </div>
  );

  const renderSponsorGroup = (type: string, sponsors: Sponsor[]) => (
    <div key={type} className='mb-16'>
      <h3
        className={`mb-8 text-center font-bold text-white md:text-start ${
          type === 'Sponsor' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {type}
      </h3>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {sponsors.map((sponsor, index) => renderSponsor(sponsor, index))}
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className='py-16'>
      <div className='mx-auto px-4'>
        {mainSponsors.length > 0 && renderSponsorGroup('Sponsor', mainSponsors)}
        {otherTypes.map((type) =>
          renderSponsorGroup(type, sponsorsByType[type] ?? []),
        )}
      </div>
    </section>
  );
};
