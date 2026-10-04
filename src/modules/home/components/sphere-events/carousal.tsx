/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image';
import Link from 'next/link';
import { type ComponentType, useEffect, useState } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useismobile';
import { MUNLINK, MUN_PAGE } from '@/config';
import {
  data as techfiestaEvents,
  type TechfiestaEvent,
} from '@/config/data/26/techfiesta';
import { CtfFlagIcon } from '@/app/techfiesta/components/icons';
import { WitchHatIcon } from '@/app/halloween/components/icons';

const HALLOWEEN_REGISTER_LINK = 'https://halloween.ioittenet.com';

interface CarouselEvent {
  id: string;
  title: string;
  date: string;
  /** Logo or photo for the card. Empty when the event falls back to an icon. */
  image: string;
  /** Drawn instead of `image` when set — used by events without a logo asset. */
  icon?: ComponentType<{ className?: string }>;
  /** Where the card points — the event page for techfiesta, the site for the rest. */
  href: string;
  /** Registration link, rendered as a button on the card. */
  registerLink: string;
}

const carouselEvents: CarouselEvent[] = [
  ...techfiestaEvents.map((event: TechfiestaEvent) => ({
    id: event.slug,
    title: event.title,
    date: event.dateLabel,
    image: event.logo === '#' ? '' : event.logo,
    href: `/techfiesta/${event.slug}`,
    registerLink: event.registerLink ?? '',
  })),
  {
    id: 'mun',
    title: 'IOIT MUN 2026',
    date: '24-25 Oct 2026',
    image: '/mun_logo.png',
    href: MUN_PAGE,
    registerLink: MUNLINK,
  },
  {
    id: 'halloween',
    title: 'Halloween Party',
    date: '24 Oct 2026',
    image: '',
    icon: WitchHatIcon,
    href: '/halloween',
    registerLink: HALLOWEEN_REGISTER_LINK,
  },
];

const isExternal = (href: string) => href.startsWith('http');

export function Carousal() {
  const mobile = useIsMobile();
  const [yTranslations, setYTranslations] = useState<number[]>([]);

  useEffect(() => {
    const translations = carouselEvents.map(
      () => Math.floor(Math.random() * 40) - 40,
    );
    setYTranslations(translations);
  }, []);

  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 flex select-none items-center bg-opacity-50 pb-[5vh] md:px-20 md:pb-[17vh]'>
      <div className='no-scroll-bar flex h-fit gap-10 overflow-x-auto overflow-y-visible px-2 py-[80px] md:gap-16 md:px-10'>
        {carouselEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ scale: mobile ? 0.9 : 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              mass: 0.5,
              velocity: 2,
            }}
            viewport={{ amount: 0.3, once: false }}
            className='relative w-[230px] flex-shrink-0 md:w-[270px]'
          >
            <div
              className='w-full'
              style={{
                transform: `translateY(${yTranslations[index]}px)`,
              }}
            >
              <div className='relative flex h-[170px] w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dotted border-neutral-600 bg-neutral-900/70 p-2 shadow-lg md:h-[200px]'>
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={`${event.title} logo`}
                    fill
                    sizes='270px'
                    className='object-contain p-2'
                  />
                ) : event.icon ? (
                  <event.icon className='h-full w-auto' />
                ) : (
                  <CtfFlagIcon className='h-full w-auto' />
                )}
              </div>
              <div className='mt-2 text-center'>
                {isExternal(event.href) ? (
                  <a
                    href={event.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-2 py-1 text-base font-bold text-white drop-shadow-md md:text-lg'
                  >
                    {event.title}
                  </a>
                ) : (
                  <Link
                    href={event.href}
                    className='block px-2 py-1 text-base font-bold text-white drop-shadow-md md:text-lg'
                  >
                    {event.title}
                  </Link>
                )}
                <p className='flex w-full items-center justify-center px-2 py-1 text-xs font-bold text-white drop-shadow-md'>
                  <HiCalendar className='mr-2 h-5 w-5' />
                  {event.date}
                </p>
                {event.registerLink && (
                  <a
                    href={event.registerLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-1 inline-flex items-center gap-1 rounded-full border border-white/70 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-neutral-900'
                  >
                    Register
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
