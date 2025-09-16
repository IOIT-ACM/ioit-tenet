import type { TechfiestaData } from '@/config/data/25/techfiesta';

import Link from 'next/link';

interface TechfiestaProps {
  event: TechfiestaData;
}
export default function EventDetails({ event }: TechfiestaProps) {

  return (
    <div>
      <div className='mt-20 grid w-full gap-10'>
        <div>
          <h2
            className='mb-4 text-3xl font-semibold text-[#FF4DBB] sm:text-4xl'
            style={{ fontFamily: 'BrickSans', textShadow: '0 0 8px #FF4DBB' }}
          >
            Description
          </h2>
          <p className='text-base leading-relaxed text-gray-100 sm:text-xl'>
            {event.description}
          </p>
        </div>

        <div>
          <h3
            className='mb-4 text-3xl font-semibold text-[#FF4DBB] sm:text-4xl'
            style={{ fontFamily: 'BrickSans', textShadow: '0 0 8px #FF4DBB' }}
          >
            Details
          </h3>
          <ul className='list-inside list-none space-y-2 text-gray-100'>
            <li className='flex flex-row items-center gap-2'>
              <p
                className='text-base font-bold sm:text-lg'
                style={{ fontFamily: 'BrickSans' }}
              >
                Date:{' '}
              </p>
              <p className='text-base sm:text-xl'>{event.date}</p>
            </li>
            <li className='flex flex-row items-center gap-2'>
              <p
                className='text-base font-bold sm:text-lg'
                style={{ fontFamily: 'BrickSans' }}
              >
                Time:{' '}
              </p>
              <p className='text-base sm:text-xl'>{event.time}</p>
            </li>
            <li className='flex flex-row items-center gap-2'>
              <p
                className='text-base font-bold sm:text-lg'
                style={{ fontFamily: 'BrickSans' }}
              >
                Venue:{' '}
              </p>
              <p className='text-base sm:text-xl'>{event.venue}</p>
            </li>
          </ul>
        </div>

        <div className='mt-20 flex flex-wrap justify-center gap-6'>
          <Link
            href='/techfiesta'
            className='rounded-lg border border-cyan-400 bg-black/30 px-6 py-3 text-base font-semibold text-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.cyan.400)] sm:text-lg'
          >
            All Events
          </Link>
          {event.manual && (
            <Link
              target='_blank'
              href={event.manual}
              className='rounded-lg border border-cyan-400 bg-black/30 px-6 py-3 text-base font-semibold text-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.cyan.400)] sm:text-lg'
            >
              Rulebook
            </Link>
          )}
          {event.link && (
            <Link
              target='_blank'
              href={event.link}
              className='rounded-lg border border-pink-500 bg-black/30 px-6 py-3 text-base font-semibold text-pink-500 shadow-[0_0_8px_theme(colors.pink.500)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.pink.500)] sm:text-lg'
            >
              Register
            </Link>
          )}
        </div>
      </div>

      <footer className='my-20 w-full rounded-lg border border-[#00F0FF]/50 bg-white/5 p-8 text-center shadow-[0_0_15px_rgba(0,240,255,0.3)] backdrop-blur-lg md:p-10'>
        <div className='flex flex-col items-center justify-around gap-6 sm:gap-10 md:flex-row'>
          {event.contacts.map((contact) => (
            <div key={contact.name} className='flex flex-col gap-1 sm:gap-2'>
              <p
                className='text-base font-bold text-white sm:text-lg'
                style={{ fontFamily: 'BrickSans' }}
              >
                {contact.name}
              </p>
              <Link
                href={`tel:${contact.mobile.split(' ').join('')}`}
                className='text-sm text-gray-300 transition-colors hover:text-cyan-400 sm:text-base'
              >
                {contact.mobile}
              </Link>
            </div>
          ))}
        </div>
      </footer>

      <div className='my-8 flex flex-wrap justify-center gap-6'>
        <a
          href='https://discord.gg/dkVV2VDw'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg border border-blue-500 bg-black/30 px-6 py-3 font-semibold text-blue-400 shadow-[0_0_8px_theme(colors.blue.500)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.blue.500)]'
        >
          Join Discord
        </a>
        <a
          href='https://www.instagram.com/ioit_tenet/'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg border border-pink-500 bg-black/30 px-6 py-3 font-semibold text-pink-500 shadow-[0_0_8px_theme(colors.pink.500)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.pink.500)]'
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
}
