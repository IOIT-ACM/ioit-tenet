import Link from 'next/link';
import { MdDesktopWindows } from 'react-icons/md';

const DesktopOnly = () => {
  return (
    <div className='fixed inset-0 flex h-screen w-screen items-center justify-center bg-gray-800 md:hidden'>
      <div className='flex flex-col items-center space-x-2 text-center text-white'>
        <MdDesktopWindows className='text-2xl' />
        <span>
          This page is only visible on desktop, not on mobile screens.
        </span>
        <Link
          href={'/'}
          className='mt-5 rounded-sm bg-blue-400 px-3 py-2 text-gray-200'
        >
          Home page
        </Link>
      </div>
    </div>
  );
};

export default DesktopOnly;
