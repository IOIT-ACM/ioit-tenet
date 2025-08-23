import Link from 'next/link';

export function Title() {
  return (
    <div>
      <h1 className='mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
        Registration for TENET 2025
      </h1>
      <Link
        href='/'
        className='inline-block text-neutral-400 transition-colors duration-300 hover:text-white'
      >
        Home
      </Link>
    </div>
  );
}
