'use client';

import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { MUNLINK } from '@/config';

interface EventLink {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

export const RegisterLinks: React.FC = () => {
  const eventLinks: EventLink[] = [
    {
      heading: 'IOIT-MUN-2024',
      subheading: 'Join us for the IOIT MUN 2024 happening at TENET 2024',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg',
      href: MUNLINK,
    },
    {
      heading: 'CTF',
      subheading:
        'Exciting Capture the Flag event to test your hacking skills.',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/ctf.jpg',
      href: '/register/ctf',
    },
    {
      heading: 'Drone-Workshop',
      subheading: 'Learn the art of building and flying drones from experts.',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/drone.jpg',
      href: 'https://forms.gle/PRoAR779QCL4LqyL9',
    },
    {
      heading: 'Investing-Arena',
      subheading: 'Master the stock market with our Investing Arena challenge.',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/investingarena.jpeg',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSdz4AXaeYZAy7jFUagt3g-zvJJV38If5njMlMiZ-49fMpXWjw/viewform',
    },
  ];

  const esportsLinks: EventLink[] = [
    {
      heading: 'Valorant',
      subheading:
        'Show off your tactical shooter skills in the Valorant tournament.',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/valo.jpeg',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSdr4PZfpLjOrNdW5JFIcW09oYEjoDIPhvumvIWhOX78MeIaZQ/viewform',
    },
    {
      heading: 'BGMI',
      subheading: 'Join the battle royale action in the BGMI tournament.',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/bgmi.jpeg',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLScsw5pMP3SjBaMcMrs1i1D96Cu7WttNDxu9vBYcPTS9Yr5oag/closedform',
    },
    {
      heading: 'FIFA',
      subheading:
        'Score big in the FIFA tournament and show your football skills.',
      imgSrc:
        'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/fifa.jpeg',
      href: 'https://forms.gle/dqRBt7KwQF284b2z7',
    },
  ];

  return (
    <div>
      <div className='text-white'>
        <h1 className='text-2xl italic text-white'>
          *Note: The following mentioned events are not covered under the day
          pass. please find the registration links below:
        </h1>
      </div>
      <div className='mt-16 space-y-8'>
        {eventLinks.map((event, index) => (
          <CustomLink
            key={index}
            heading={event.heading}
            subheading={event.subheading}
            imgSrc={event.imgSrc}
            href={event.href}
          />
        ))}
        <h1 className='text-2xl italic text-white'>
          eSports registration links
        </h1>
        {esportsLinks.map((event, index) => (
          <CustomLink
            key={index}
            heading={event.heading}
            subheading={event.subheading}
            imgSrc={event.imgSrc}
            href={event.href}
          />
        ))}
      </div>
    </div>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const CustomLink: React.FC<LinkProps> = ({
  heading,
  imgSrc,
  subheading,
  href,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial='initial'
      whileHover='whileHover'
      className='group relative flex items-center justify-between rounded-lg border-b-2 border-neutral-700 bg-neutral-800 px-6 py-6 transition-all duration-500 hover:border-purple-500 hover:bg-neutral-700'
    >
      <div className='z-10'>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className='relative block text-2xl font-bold text-neutral-100 transition-colors duration-500 group-hover:text-purple-400 md:text-4xl'
        >
          {heading.split('').map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: 'spring' }}
              className='inline-block'
              key={`Registerheading ${l} - ${i}`}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className='relative mt-2 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-neutral-200'>
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-10.5deg' },
          whileHover: { scale: 1, rotate: '10.5deg' },
        }}
        transition={{ type: 'spring', bounce: 0.2, duration: 1 }}
        src={imgSrc}
        className='absolute z-50 hidden h-24 w-32 rounded-lg object-cover opacity-100 ring-2 ring-purple-500 transition-opacity duration-500 group-hover:opacity-100 md:block md:h-48 md:w-64'
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className='relative z-10 p-4'
      >
        <FiArrowRight className='hidden text-5xl text-purple-400 transition-colors duration-300 group-hover:text-purple-300 md:block' />
      </motion.div>
    </motion.a>
  );
};
