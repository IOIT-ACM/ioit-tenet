import Link from 'next/link';

export const Links = () => {
  return (
    <div className='absolute bottom-0 h-fit transform md:right-5 md:top-1/2 md:-translate-y-1/2'>
      <div className='flex w-screen select-none items-center justify-center gap-10 text-center md:w-full md:flex-col md:text-2xl'>
        <Link href='register' className='text-white md:mt-0'>
          Early bird pass
        </Link>
        <Link href='events' className='text-white md:mt-0'>
          Events
        </Link>
        <Link href='speakers' className='text-white md:mt-0'>
          Speakers
        </Link>
      </div>
    </div>
  );
};
