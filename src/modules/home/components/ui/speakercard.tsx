/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */

import type { Speaker } from '@/types';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface Props {
  speaker: Speaker;
}

function SpeakerCard({ speaker }: Props) {
  return (
    <Link href={`/speakers/${speaker.id}`} className='flex justify-center'>
      <Card className='group h-full w-[260px] transform overflow-hidden rounded-3xl border border-gray-200 transition-transform md:w-[300px]'>
        <div className='group relative mx-auto aspect-[6/8] w-full max-w-sm overflow-hidden shadow-lg'>
          <img
            src={speaker.image}
            alt={`${speaker.name}'s Profile`}
            className='h-full w-full select-none object-cover transition-transform duration-300 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent'>
            <div className='absolute bottom-0 left-0 right-0 translate-y-2 p-6 text-white transition-transform duration-300 group-hover:translate-y-0'>
              <h2 className='mb-2 truncate text-2xl font-bold'>
                {speaker.name}
              </h2>
              <p className='line-clamp-3 text-sm opacity-90'>{speaker.title}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default SpeakerCard;
