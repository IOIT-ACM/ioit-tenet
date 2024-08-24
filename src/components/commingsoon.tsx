import Link from 'next/link';

const CommingSoon = () => {
  return (
    <div
      className='h-screen w-screen'
      style={{
        backgroundImage: `url(https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex h-screen w-full flex-col items-center justify-between bg-black bg-opacity-70 py-8'>
        <div className='flex flex-1 flex-col items-center justify-center'>
          <h1 className='mt-12 text-center font-serif text-6xl font-bold tracking-wider text-gray-200 lg:text-7xl xl:text-8xl'>
            Coming Soon
          </h1>
        </div>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            href='/'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
