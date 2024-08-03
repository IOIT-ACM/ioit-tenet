import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

function Footer() {
  const tenetLinks = [
    { href: '/gallery', text: 'Gallery' },
    { href: '/events', text: 'Events' },
    { href: '/contact', text: 'Contact Us' },
    { href: '/about', text: 'About' },
  ];

  const day1Events = [{ href: '/events/tech-fiesta', text: 'Tech-Fiesta' }];

  const day2Events = [
    { href: '/events/e-summit', text: 'E-Summit' },
    { href: '/events/mun', text: 'MUN' },
  ];

  const day3Events = [
    { href: '/events/creators-conclave', text: 'Creator’s Conclave' },
    { href: '/events/e-sports', text: 'E-Sports' },
    { href: '/events/mun-day2', text: 'MUN Day-2' },
  ];

  return (
    <footer className='bg-gray-900 p-4 text-white md:p-10'>
      <div className='container mx-auto flex flex-col justify-between px-0 md:flex-row'>
        <div className='mb-6 md:mb-0'>
          <Link
            href='/'
            className='cursor-pointer bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-4xl font-bold italic text-transparent'
          >
            TENET 2024
          </Link>
          <p className='max-w-md'>
            TENET is the annual cultural fest of AISSMS Institute of Information
            Technology. Scheduled for the 4th, 5th, and 6th of October 2024,
            this event promises a weekend filled with exciting activities,
            including Tech-Fiesta, E-Summit, MUN, Creator’s Conclave, and
            E-Sports. Join us for an unforgettable experience celebrating talent
            and creativity.
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
          <h3 className='font-bold text-white'>TENET Links</h3>
          <Separator className='my-2' />
          <ul>
            {tenetLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className='hover:text-gray-400'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
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
