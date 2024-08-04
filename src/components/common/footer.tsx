'use client';

import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export const RevealLinks = () => {
  return (
    <section className='grid place-content-center gap-2 px-8 py-24 text-gray-400'>
      <FlipLink href='#'>Twitter</FlipLink>
      <FlipLink href='#'>Linkedin</FlipLink>
      <FlipLink href='#'>Facebook</FlipLink>
      <FlipLink href='#'>Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      href={href}
      className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl'
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

function Footer() {
  const day1Events = [{ href: '/events/tech-fiesta', text: 'Tech-Fiesta' }];

  const day2Events = [
    { href: '/events/e-summit', text: 'E-Summit' },
    { href: '/events/mun', text: 'MUN' },
  ];

  const day3Events = [
    { href: '/events/creators-conclave', text: 'Creators Conclave' },
    { href: '/events/e-sports', text: 'E-Sports' },
    { href: '/events/mun-day2', text: 'MUN Day-2' },
  ];

  return (
    <footer className='min-h-screen bg-gray-900 p-4 text-white md:p-10'>
      <RevealLinks />
      <div className='container mx-auto flex flex-col justify-between px-0 md:flex-row'>
        <div className='mb-6 md:mb-0'>
          <Link
            href='/'
            className='cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text py-2 text-4xl font-extrabold italic text-transparent'
          >
            TENET 2024
          </Link>
          <p className='max-w-md'>
            T.E.N.E.T goes beyond just an abbreviation of 5 niches. This event
            in its inception is an amalgamation of ideas where professionalism
            meets the academia. This is an event where students learn, connect,
            grow and most importantly have an experience worth remembering. From
            E-summit to eSports and from Techfiesta to IOIT MUN&apos;24 and
            Creator&apos;s Conclave, TENET, an event organised by the IOIT ACM
            Student Chapter has something for everyone.
          </p>
          <div className='mt-4 flex'>
            <Link
              href='https://www.instagram.com/ioit_tenet'
              className='mr-4 text-white hover:text-gray-400'
            >
              <BsInstagram />
            </Link>
            <Link
              href='https://www.linkedin.com/company/ioittenet/about/'
              className='text-white hover:text-gray-400'
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>

        <div className='mb-6 w-fit md:mb-0'>
          <h3 className='font-bold text-white'>Day 1 Events</h3>
          <Separator className='my-2' />
          <ul>
            {day1Events.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className='hover:text-gray-400'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='mb-6 w-fit md:mb-0'>
          <h3 className='font-bold text-white'>Day 2 Events</h3>
          <Separator className='my-2' />
          <ul>
            {day2Events.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className='hover:text-gray-400'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='w-fit'>
          <h3 className='mb-2 font-bold text-white'>Day 3 Events</h3>
          <Separator className='my-2' />
          <ul>
            {day3Events.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className='hover:text-gray-400'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='pb-0 pt-16 text-sm text-gray-400 dark:text-gray-400'>
        &copy; 2024 AISSMS Institute of Information Technology. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
