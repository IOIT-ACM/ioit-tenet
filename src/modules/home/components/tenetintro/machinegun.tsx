import MachineGunText from '../../head/machinegun';
import { Button } from '@/components/ui/RoundedButton';
import { KONFHUB_PAGE } from '@/config';

export default function Machinegun() {
  return (
    <div className='absolute bottom-14 w-full md:hidden'>
      <MachineGunText text='GET READY FOR TENET 2024'>
        <Button
          link={KONFHUB_PAGE}
          newpage
          className='w-full bg-none text-white md:mt-0'
        >
          Early bird pass
        </Button>
      </MachineGunText>
    </div>
  );
}
