import { KONFHUB_PAGE } from '@/config';
import { Magnets } from '@/components/ui/RoundedButton/magnets';

export const Links = () => {
  return (
    <div className='absolute bottom-0 h-fit transform md:right-10 md:top-1/2 md:-translate-y-1/2'>
      <div className='flex w-screen select-none items-center justify-center gap-10 text-center md:w-full md:flex-col md:text-2xl'>
        <Magnets
          link={KONFHUB_PAGE}
          newpage
          className='bg-none text-white md:mt-0'
        >
          Early bird pass
        </Magnets>
        <Magnets link='/events' className='text-white md:mt-0'>
          Events
        </Magnets>
        <Magnets link='/speakers' className='text-white md:mt-0'>
          Speakers
        </Magnets>
      </div>
    </div>
  );
};
