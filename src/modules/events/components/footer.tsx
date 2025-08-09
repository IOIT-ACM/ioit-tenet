'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className='border-t bg-slate-900 pb-8 pt-12 text-white'>
      <div className='mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='mb-8 md:mb-0'>
            <Link
              href={'/'}
              className='text-2xl font-bold transition-all hover:underline'
            >
              TENET 2024
            </Link>
            <p className='mt-4 text-slate-400'>
              Empowering innovators, connecting leaders, and shaping the future
              of technology.
            </p>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/game'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  TENET game
                </Link>
              </li>
              <li>
                <Link
                  href='/denofcode'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Den of code
                </Link>
              </li>
              <li>
                <Link
                  href='/24/speakers'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href='/24/events'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>More Info</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/register'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Registrations
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:ioit.tenet@aissmsioit.org'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:adimail2404@gmail.com'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Developers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>Stay Connected</h4>
            <div className='flex space-x-4'>
              <Link
                href='https://chat.whatsapp.com/HUYXxh75M618GNCExQ3NPZ'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 transition-colors hover:text-blue-500'
              >
                <FaWhatsapp size={24} />
              </Link>
              <Link
                href='https://www.instagram.com/ioit_tenet/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 transition-colors hover:text-pink-500'
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href='https://www.linkedin.com/company/ioit-tenet/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 transition-colors hover:text-blue-700'
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-slate-800 pt-8 text-center text-slate-400'>
          <p>&copy; {new Date().getFullYear()} IOIT ACM Student Chapter</p>
        </div>
      </div>
    </footer>
  );
};
