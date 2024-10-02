import Image from 'next/image';
import Link from 'next/link';
import { type Sponsor } from '@/types';
import { sponsor } from '@/config/sponsors';
import React from 'react';

type SponsorsByType = Record<string, Sponsor[]>;

export const Sponsors: React.FC = () => {
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
      className='sponsor-card group relative flex flex-col items-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'
    >
      {sponsor.websiteUrl ? (
        <Link
          href={sponsor.websiteUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <div className='relative h-24 w-24 overflow-hidden rounded-lg bg-white p-1 shadow-inner transition-transform duration-300 group-hover:rotate-1'>
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              layout='fill'
              objectFit='contain'
              className='rounded-lg transition-opacity duration-300 group-hover:opacity-90'
            />
          </div>
          <p className='mt-4 text-center text-sm font-medium text-white transition-colors duration-300 group-hover:text-blue-300'>
            {sponsor.name}
          </p>
        </Link>
      ) : (
        <>
          <div className='relative h-24 w-24 overflow-hidden rounded-lg bg-white p-1 shadow-inner transition-transform duration-300 group-hover:rotate-1'>
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              layout='fill'
              objectFit='contain'
              className='rounded-lg transition-opacity duration-300 group-hover:opacity-90'
            />
          </div>
          <p className='mt-4 text-center text-sm font-medium text-white'>
            {sponsor.name}
          </p>
        </>
      )}
    </div>
  );

  const renderSponsorGroup = (type: string, sponsors: Sponsor[]) => (
    <div key={type} className='mb-20'>
      <h3
        className={`mb-8 text-center font-bold text-white md:text-start ${
          type === 'Sponsor' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {type}
      </h3>
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
        {sponsors.map((sponsor, index) => renderSponsor(sponsor, index))}
      </div>
    </div>
  );

  return (
    <section className='bg-neutral-950 py-16'>
      <div className='mx-auto px-6'>
        {mainSponsors.length > 0 && renderSponsorGroup('Sponsor', mainSponsors)}
        {otherTypes.map((type) =>
          renderSponsorGroup(type, sponsorsByType[type] ?? []),
        )}
      </div>
    </section>
  );
};
