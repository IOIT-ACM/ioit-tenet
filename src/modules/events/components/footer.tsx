'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-slate-900 pb-8 pt-12 text-white'>
      <div className='mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='mb-8 md:mb-0'>
            <h3 className='mb-4 text-2xl font-bold'>TENET 2024</h3>
            <p className='text-slate-400'>
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
                  href='/speakers'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href='/events'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>Useful Info</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/regestrations'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Regestrations
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:aissms.ioit.acm@chatpter.acm.org'
                  className='text-slate-400 transition-colors hover:text-green-400'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold'>Stay Connected</h4>
            <div className='flex space-x-4'>
              <Link
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 transition-colors hover:text-blue-500'
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 transition-colors hover:text-blue-400'
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 transition-colors hover:text-pink-500'
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href='https://linkedin.com'
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
