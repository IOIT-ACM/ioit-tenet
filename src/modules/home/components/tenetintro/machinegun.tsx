import MachineGunText from '../../head/machinegun';
import Link from 'next/link';
import { KONFHUB_PAGE } from '@/config';

export default function Machinegun() {
  return (
    <div className='absolute bottom-44 z-[9999] w-full md:hidden'>
      <MachineGunText text='GET READY FOR TENET 2024'>
        <Link
          href={KONFHUB_PAGE}
          target='_blank'
          className='rounded-xl bg-gray-200 px-3 py-2 text-xl text-gray-800'
        >
          Get Early bird pass
        </Link>
      </MachineGunText>
    </div>
  );
}
