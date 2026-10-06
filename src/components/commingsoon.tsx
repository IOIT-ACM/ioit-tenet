'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-10-23T00:00:00');

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = TARGET_DATE.getTime() - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    expired: false,
  };
}

const CommingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          <h1 className='mt-12 text-center font-serif text-6xl font-bold tracking-wider text-slate-200 lg:text-7xl xl:text-8xl'>
            Coming Soon
          </h1>
          <p className='mt-4 text-center text-slate-300 text-sm md:text-base'>
            12:00 AM, 23 October 2026
          </p>
          <div className='mt-8 grid grid-cols-4 gap-4 md:gap-6 text-center'>
            <div className='flex flex-col items-center'>
              <div className='text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100'>
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className='text-xs md:text-sm text-slate-400 mt-1'>Days</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100'>
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className='text-xs md:text-sm text-slate-400 mt-1'>Hours</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100'>
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className='text-xs md:text-sm text-slate-400 mt-1'>Minutes</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100'>
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className='text-xs md:text-sm text-slate-400 mt-1'>Seconds</div>
            </div>
          </div>
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
