import MachineGunText from './machinegun';
import Link from 'next/link';

export default function Machinegun() {
  return (
    <div className='absolute bottom-44 z-[9999] w-full md:hidden'>
      <MachineGunText text='GET READY FOR TENET 2024'>
        <Link
          href='/register'
          target='_blank'
          className='z-[9999] rounded-xl bg-gray-200 px-3 py-2 text-xl text-gray-800'
        >
          Get Early bird pass
        </Link>
      </MachineGunText>
    </div>
  );
}
