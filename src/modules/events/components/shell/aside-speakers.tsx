'use client';

import { speakers } from '@/config/speakers';
import Link from 'next/link';
import type { Speaker } from '@/types';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export const SpeakersSidePanel = () => {
  return (
    <div className='z-50 h-fit p-4'>
      {speakers.map((speaker, index) => (
        <SpeakerItem key={index} data={speaker} />
      ))}
    </div>
  );
};

export const SpeakerItem = ({ data }: { data: Speaker }) => {
  const pathname = usePathname();
  const isActive = pathname === data.url;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  return (
    <div ref={itemRef}>
      <Link
        href={data.url}
        className={`mb-5 flex cursor-pointer items-center gap-3 border-b pb-2 pt-3 transition-all hover:text-gray-300 md:mb-0 md:border-none ${
          isActive ? 'text-white' : 'text-gray-500'
        }`}
      >
        <Image
          src={data.image}
          alt={data.name}
          width={50}
          height={50}
          className='rounded-full'
        />
        <div>
          <p className='mb-1 text-lg'>{data.name}</p>
          <p className='text-sm'>{data.title}</p>
        </div>
      </Link>
    </div>
  );
};
