/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';
import React, { useRef } from 'react';
import { Button } from '@/components/ui/RoundedButton';
import Link from 'next/link';
import * as Scrollytelling from '@/lib/scrollytelling-client';

export const TenetHero: React.FC = () => {
  const ref = useRef(null);

  return (
    <Scrollytelling.Root start='top bottom' end='bottom top' scrub={1.1}>
      <div className='flex min-h-screen items-center justify-center p-4 sm:p-10'>
        <div ref={ref} className='relative z-10 h-fit pt-8 text-white'>
          <Scrollytelling.Parallax
            tween={{
              start: 0,
              end: 100,
              movementY: { value: -20, unit: 'px' },
            }}
          >
            <Link
              href='https://ioit.acm.org'
              className='ml-4 flex items-center uppercase sm:ml-[500px]'
            >
              <svg
                width='5'
                height='9'
                viewBox='0 0 5 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-3'
              >
                <title>chevron right</title>
                <path
                  d='M5 4.5L-5.28505e-07 8.5L-1.78814e-07 0.5L5 4.5Z'
                  fill='#EFEFEF'
                />
              </svg>
              <span className='ml-4 inline-flex h-[21px] items-center rounded-sm border border-white px-1 text-xs sm:text-[16px]'>
                IOIT ACM STUDENT CHAPTER
              </span>
            </Link>
          </Scrollytelling.Parallax>

          <Scrollytelling.Parallax
            tween={{
              start: 0,
              end: 100,
              movementY: { value: 40, unit: 'px' },
            }}
          >
            <svg
              width='732'
              height='301'
              viewBox='0 0 732 301'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute left-1/2 h-[150px] w-[366px] -translate-x-1/2 sm:left-[815px] sm:h-[301px] sm:w-[732px] sm:translate-x-0'
            >
              <path
                d='M628.193 67.9406C563.929 76.1379 499.499 80.8854 435.955 96.0051C305.698 126.998 179.75 177.007 51.0966 215.747C34.6395 220.702 18.1584 225.379 1.76567 230.636C-1.91449 231.817 8.67902 226.737 12.1913 224.946C45.404 208.006 78.9877 192.231 112.379 175.833C199.078 133.255 284.291 86.7261 369.968 41.2015C398.131 26.2371 431.344 45.0069 460 31.6905C473.381 25.4724 427.33 8.36477 413.578 13.215C358.347 32.6947 302.314 50.0199 247.976 73.0858C237.151 77.6805 246.928 71.8535 250.963 68.5643C267.595 55.0097 284.224 41.5293 302.074 30.4434C319.353 19.7126 337.563 11.1069 356.237 4.79568C359.563 3.67159 362.932 2.68719 366.344 2.0672C367.541 1.84983 370.219 0.850123 369.968 2.30107C369.551 4.71396 367.028 5.67547 365.454 7.21234C362.024 10.5639 358.396 13.605 354.965 16.9569C301.888 68.8149 252.906 130.958 223.882 207.171C216.075 227.674 201.661 266.424 209.452 290.741C215.687 310.204 244.734 293.52 252.998 289.805C346.865 247.615 434.589 183.803 521.012 122.978C525.943 119.508 530.874 116.038 535.824 112.61C539.753 109.889 550.214 100.266 547.839 104.97C544.42 111.743 537.95 115.301 532.964 120.406C518.223 135.498 511.105 143.302 494.821 157.981C465.725 184.208 434.916 206.569 401.245 222.919C375.388 235.474 345.128 247.895 316.823 247.475C296.913 247.18 306.308 232.553 317.331 222.763C366.433 179.154 426.957 148.469 482.234 120.094C546.383 87.1639 611.846 57.9003 679.939 39.8762C694.7 35.969 711.518 32.9041 726.855 31.6908C757.409 29.2734 665.67 34.8845 635.058 35.6665'
                stroke='#FF4D00'
                strokeWidth='1.15257'
                strokeLinecap='round'
                strokeDasharray='7 7'
              />
            </svg>
          </Scrollytelling.Parallax>

          <Scrollytelling.Parallax
            tween={{
              start: 0,
              end: 100,
              movementY: { value: -40, unit: 'px' },
            }}
          >
            <h2 className='relative z-10 mx-auto mt-8 max-w-[1551px] text-center text-4xl font-black leading-[0.91] sm:mt-[52px] sm:text-left sm:text-6xl md:text-8xl lg:text-[128px]'>
              TENET 2024
            </h2>
          </Scrollytelling.Parallax>

          <div className='relative mt-8 text-center text-lg tracking-tight sm:ml-[772px] sm:mt-[64px]'>
            <svg
              width='9'
              height='153'
              viewBox='0 0 9 153'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute left-[-465px] top-1/2 hidden h-[168.3px] w-[10.8px] -translate-y-1/2 transform sm:block'
            >
              <path
                d='M4.14645 152.354C4.34171 152.549 4.65829 152.549 4.85355 152.354L8.03553 149.172C8.2308 148.976 8.2308 148.66 8.03553 148.464C7.84027 148.269 7.52369 148.269 7.32843 148.464L4.5 151.293L1.67157 148.464C1.47631 148.269 1.15973 148.269 0.964466 148.464C0.769204 148.66 0.769204 148.976 0.964466 149.172L4.14645 152.354ZM5 152L4.99999 -2.18557e-08L3.99999 2.18557e-08L4 152L5 152Z'
                fill='#EFEFEF'
              />
            </svg>
            <span className='sm:text-left sm:text-2xl md:text-[32px]'>
              Discover the future of innovation with Tenet. Join us for an
              extraordinary journey.
            </span>
            <Button className='mt-6 sm:mt-10' link='/register'>
              Get your tickets
            </Button>
          </div>
        </div>
      </div>
    </Scrollytelling.Root>
  );
};
