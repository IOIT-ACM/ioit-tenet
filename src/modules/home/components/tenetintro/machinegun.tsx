import MachineGunText from '../../head/machinegun';
import { Button } from '@/components/ui/RoundedButton';
import { KONFHUB_PAGE } from '@/config';

export default function Machinegun() {
  return (
    <div className='absolute bottom-14 w-full md:hidden'>
      <MachineGunText text='FIRST EDITION OF TENET'>
        <Button
          link={KONFHUB_PAGE}
          newpage
          className='w-full bg-none text-white md:mt-0'
        >
          Get Early bird pass
        </Button>
      </MachineGunText>
    </div>
  );
}
