/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Ticket } from 'lucide-react';
import { KONFHUB_PAGE } from '@/config';
import { Button } from '@/components/ui/RoundedButton';

export function KonfHub() {
  const headerRef = useRef(null);
  const vipTicketRef = useRef(null);
  const generalTicketRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = event;
      const movementFactor = 20;

      gsap.to(headerRef.current, {
        x: (clientX / window.innerWidth - 0.7) * movementFactor,
        y: (clientY / window.innerHeight - 0.7) * movementFactor,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.to(vipTicketRef.current, {
        x: (clientX / window.innerWidth - 0.7) * movementFactor * 2.3,
        y: (clientY / window.innerHeight - 0.7) * movementFactor * 1.5,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.to(generalTicketRef.current, {
        x: (clientX / window.innerWidth - 0.7) * movementFactor * 1.9,
        y: (clientY / window.innerHeight - 0.7) * movementFactor * 2.6,
        duration: 0.7,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='mx-auto space-y-8 rounded-xl p-4 text-gray-200 md:p-6'>
      {/* Header Section */}
      <header ref={headerRef} className='space-y-4 text-center'>
        <h1 className='text-5xl font-bold text-white'>Experience TENET</h1>
        <p className='text-lg font-medium'>
          Join us for a celebration of technology, innovation, and networking
          opportunities!
        </p>
        <Button
          newpage
          color='#bcb9f7'
          link={KONFHUB_PAGE}
          className='inline-flex transform cursor-pointer items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 md:px-10 md:py-4 md:text-lg'
        >
          <Ticket className='mr-2 h-5 w-5' />
          Grab Your Tickets Now
        </Button>
      </header>

      {/* Ticket Options Section */}
      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* VIP Ticket */}
        <div
          ref={vipTicketRef}
          className='pmd:-6 rounded-lg border p-4 shadow-lg transition hover:shadow-xl'
        >
          <h2 className='text-2xl font-semibold text-white'>VIP Access</h2>
          <p className='text-lg text-green-400'>₹200</p>
          <h3 className='mt-4 font-bold'>Perks:</h3>
          <ul className='list-inside list-disc space-y-2'>
            <li>Priority Seating Arrangements</li>
            <li>
              Exclusive access to speakers, Investors, and Networking Arena
            </li>
            <li>TENET kit bag with Goodies and Swags</li>
          </ul>
        </div>

        {/* General Access Ticket */}
        <div
          ref={generalTicketRef}
          className='pmd:-6 rounded-lg border p-4 shadow-lg transition hover:shadow-xl'
        >
          <h2 className='text-2xl font-semibold text-white'>General Access</h2>
          <p className='text-lg text-green-400'>FREE</p>
          <h3 className='mt-4 font-bold'>Perks:</h3>
          <ul className='list-inside list-disc space-y-2'>
            <li>General Access to all sessions and Panel discussions</li>
            <li>Networking with delegates and participants</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
