'use client';

import { speakers } from '@/config/speakers';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import type { Speaker } from '@/types';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

// Group speakers by their domain
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

export const SpeakersSidePanel = () => {
  const speakersByDomain = groupByDomain(speakers);

  return (
    <div className='z-50 h-fit p-2'>
      {Object.keys(speakersByDomain).map((domain) => (
        <div key={domain} className='mt-6'>
          <h2 className='px-4 text-xl font-semibold capitalize text-white'>
            {domain}
          </h2>
          <Separator className='my-5 w-1/2' />
          {speakersByDomain[domain]?.map((speaker, index) => (
            <SpeakerItem key={index} data={speaker} />
          ))}
        </div>
      ))}
    </div>
  );
};

export const SpeakerItem = ({ data }: { data: Speaker }) => {
  const pathname = usePathname();
  const isActive = pathname.split('/').pop() === data.id;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  return (
    <div ref={itemRef}>
      <Link
        href={`/speakers/${data.id}`}
        className={`mb-5 flex cursor-pointer items-center gap-3 border-b p-4 transition-all hover:text-slate-300 md:mb-0 md:border-none ${
          isActive
            ? 'rounded-xl border-opacity-25 bg-white/10 text-white'
            : 'text-slate-500'
        }`}
      >
        <Image
          src={data.image}
          alt={data.name}
          width={50}
          height={50}
          className='h-[50px] w-[50px] rounded-full bg-contain'
        />
        <div>
          <p className='mb-1 text-lg'>{data.name}</p>
          <p className='line-clamp-2 text-sm'>{data.title}</p>
        </div>
      </Link>
    </div>
  );
};
