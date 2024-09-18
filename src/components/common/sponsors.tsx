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

  const sponsorsByType: SponsorsByType = sponsor.reduce((acc, sponsor) => {
    const type = sponsor.type ?? 'Other';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(sponsor);
    return acc;
  }, {} as SponsorsByType);

  const uniqueTypes = Object.keys(sponsorsByType);

  const renderSponsor = (sponsor: Sponsor, index: number) => (
    <div
      key={index}
      ref={(el) => {
        if (el) sponsorRefs.current.push(el);
      }}
      className='flex flex-col items-center rounded-lg p-4 transition-colors hover:bg-slate-700'
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
          <p className='mt-4 text-center text-white'>{sponsor.name}</p>
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
          <p className='mt-4 text-center text-white'>{sponsor.name}</p>
        </>
      )}
    </div>
  );

  return (
    <section className='py-12'>
      <div className='mx-auto px-4'>
        <h2 className='mb-8 text-center text-4xl font-bold text-white'>
          Our Sponsors
        </h2>
        {uniqueTypes.map((type) => (
          <div key={type} className='mb-12'>
            <h3 className='mb-6 text-center text-2xl font-semibold text-white'>
              {type}
            </h3>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
              {sponsorsByType[type]?.map((sponsor, index) =>
                renderSponsor(sponsor, index),
              ) ?? []}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
