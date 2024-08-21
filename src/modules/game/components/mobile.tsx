import Link from 'next/link';

export const Mobile = () => {
  return (
    <div className='fixed bottom-14 grid w-screen select-none gap-5 p-4 text-center text-2xl text-white md:hidden'>
      <div>Please use a desktop to play this game</div>
      <Link className='text-sm' href={'/'}>
        Go to Home
      </Link>
    </div>
  );
};
