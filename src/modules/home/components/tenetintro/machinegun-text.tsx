import MachineGunText from './machinegun';
import Link from 'next/link';

export default function Machinegun() {
  return (
    <div className='absolute bottom-44 z-[9999] w-full md:hidden'>
      <MachineGunText text='IOIT TENET 2025'>
        <Link
          href='/24/gallery'
          className='z-[9999] rounded-full bg-gray-200 bg-opacity-75 px-4 py-2 text-xl text-gray-800'
        >
          View gallery
        </Link>
        {/* <Link
          href='/register'
          target='_blank'
          className='z-[9999] rounded-full bg-gray-200 bg-opacity-75 px-4 py-2 text-xl text-gray-800'
        >
          Grab Your Tickets
        </Link> */}
      </MachineGunText>
    </div>
  );
}
