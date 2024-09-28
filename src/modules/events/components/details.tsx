/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useRef } from 'react';
import type { ScheduleItemType, Speaker } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiUser,
  HiExternalLink,
} from 'react-icons/hi';
import { handleShare } from '@/utils/share';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { speakers } from '@/config/speakers';

gsap.registerPlugin(ScrollTrigger);

export const Details = ({ event }: { event: ScheduleItemType }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const organizersRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const sessionSpeakers = speakers.filter((speaker) =>
    event.speakers?.includes(speaker.id),
  );

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
        { opacity: 1, x: 0, duration: 0.3, ease: 'power3.out' },
      );
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.4',
      );
    }

    if (detailsRef.current) {
      tl.fromTo(
        detailsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, ease: 'power2.out' },
        '-=0.2',
      );
    }

    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.2',
      );
    }

    if (speakersRef.current) {
      tl.fromTo(
        speakersRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.2',
      );
    }

    if (organizersRef.current) {
      tl.fromTo(
        organizersRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.2',
      );
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, ease: 'power2.out' },
        '-=0.2',
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const msg = `
${event.title} at AISSMS IOIT TENET 2024
${
  event.speakers && sessionSpeakers
    ? `
Speakers: ${sessionSpeakers.map((speaker) => speaker.name).join(', ')} will be speaking at the event.\n`
    : ''
} 
${event.location ? `Location: ${event.location}\n` : ''}
${
  event.registration
    ? `Follow this link to register for the event: ${event.registration}\n`
    : ''
}
`;

  return (
    <div
      ref={containerRef}
      className='flex w-full flex-col items-center justify-start gap-10 pt-5 text-white md:pt-10'
    >
      <div className='w-full overflow-hidden'>
        <div className='w-full md:flex'>
          <div
            ref={imageRef}
            className='sticky top-0 h-64 w-full overflow-hidden rounded-lg border bg-gray-200 md:h-[500px] md:w-1/2'
          >
            <img
              src={event.image}
              alt={event.title}
              className='h-full w-full object-cover object-center transition-all duration-1000 hover:scale-105'
            />
          </div>
          <div className='space-y-6 pt-3 md:w-1/2 md:p-8 md:pt-0'>
            <h1 ref={titleRef} className='text-3xl font-bold md:text-4xl'>
              {event.title}
            </h1>
            <div ref={detailsRef} className='flex flex-col space-y-4'>
              <p className='flex items-center'>
                <HiCalendar className='mr-2 h-5 w-5' />
                {event.date}
              </p>
              <p className='flex items-center'>
                <HiClock className='mr-2 h-5 w-5' />
                {event.time}
              </p>
              <p className='flex items-center'>
                <HiLocationMarker className='mr-2 h-5 w-5' />
                {event.location}
              </p>
            </div>
            <p ref={descriptionRef} className='pb-3 text-lg text-slate-400'>
              {event.description}
            </p>

            {event.munpage && (
              <Link
                href={event.munpage}
                target='_blank'
                className='flex items-center text-lg font-semibold underline'
              >
                View more details
                <HiExternalLink className='ml-2 h-5 w-5' />
              </Link>
            )}

            {event.speakers && event.speakers.length > 0 && (
              <div ref={speakersRef}>
                <h2 className='mb-4 text-xl font-semibold'>Speakers</h2>
                <div className='space-y-4'>
                  {sessionSpeakers.map((speaker, index) => (
                    <SpeakerCard key={index} speaker={speaker} />
                  ))}
                </div>
              </div>
            )}

            {event.organizers && event.organizers.length > 0 && (
              <div ref={organizersRef}>
                <h2 className='mb-4 text-xl font-semibold'>Organizers</h2>
                <ul className='space-y-5'>
                  {event.organizers.map((organizer, index) => (
                    <li
                      key={index}
                      className='flex flex-col items-start text-slate-400'
                    >
                      <div className='flex items-center'>
                        <HiUser className='mr-2 h-5 w-5' />
                        <div className='hover:underline'>{organizer.name}</div>
                      </div>
                      {organizer.phone && (
                        <a
                          href={`tel:${organizer.phone}`}
                          className='mt-1 flex items-center text-blue-500 hover:underline'
                        >
                          <FaPhoneAlt className='mr-2 h-4 w-4' />
                          {organizer.phone}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div
              id='tenet-button-animation'
              ref={buttonsRef}
              className='flex gap-3'
            >
              {event.registration && (
                <h4>
                  <Link
                    href={event.registration}
                    rel='noopener noreferrer'
                    className='flex items-center'
                  >
                    Register for Event
                    <HiExternalLink className='ml-2 h-5 w-5' />
                  </Link>
                </h4>
              )}
              <h4>
                <button
                  type='button'
                  className='text-black hover:text-white'
                  onClick={() =>
                    handleShare({ msg, url: `/events/${event.id}` })
                  }
                >
                  Share
                </button>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <Link
      href={`/speakers/${speaker.id}`}
      className='flex w-full items-center space-x-3 p-3 transition-all duration-150 hover:rounded-xl hover:bg-slate-500 md:w-fit'
    >
      <div className='relative h-16 w-16 md:h-20 md:w-20'>
        <Image
          src={speaker.image}
          alt={speaker.name}
          layout='fill'
          objectFit='cover'
          className='rounded-full'
        />
      </div>
      <div className='text-left'>
        <p className='text-base md:text-lg'>{speaker.name}</p>
        <p className='text-xs md:text-sm'>{speaker.title}</p>
      </div>
    </Link>
  );
};
