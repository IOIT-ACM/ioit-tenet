'use client';

import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export const RegisterLinks: React.FC = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 md:p-12'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
          Registration for TENET 2024
        </h1>
        <Link
          href='/'
          className='inline-block text-neutral-400 transition-colors duration-300 hover:text-white'
        >
          Home
        </Link>
        <Separator className='my-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600' />
        <div className='mt-16 space-y-8'>
          <CustomLink
            heading='Tech Fiesta'
            subheading='Register for Technical Events at TENET24'
            imgSrc='/imgs/events/2.jpeg'
            href='#'
          />
          <CustomLink
            heading='E-Sports'
            subheading='Competetive gaming and LAN tournments to showcase your skills'
            imgSrc='/imgs/events/2.jpeg'
            href='#'
          />
          <CustomLink
            heading='MUN'
            subheading='Simulation of the United Nations where students step into the roles of UN delegates'
            imgSrc='/imgs/events/2.jpeg'
            href='#'
          />
          <CustomLink
            heading='E-Summit'
            subheading='Buisness events, pitching competetitions and speaker sessions'
            imgSrc='/imgs/events/2.jpeg'
            href='#'
          />
          <CustomLink
            heading='Creators Conclave'
            subheading='Unleash your inner performer with open mic, stand-up comedy battles, and a theatre showcase'
            imgSrc='/imgs/events/2.jpeg'
            href='#'
          />
        </div>
      </div>
    </section>
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
          className='relative block text-3xl font-bold text-neutral-100 transition-colors duration-500 group-hover:text-purple-400 md:text-6xl'
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
