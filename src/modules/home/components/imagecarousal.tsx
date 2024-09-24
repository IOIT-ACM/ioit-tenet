'use client';

import { day1, day2, day3 } from '@/config/events';
import '@/styles/ImageCarousel.css';
import gsap from 'gsap';

const allEvents = [...day1, ...day2, ...day3];

export const ImageCarousel: React.FC = () => {
  const randomEvents = gsap.utils
    .shuffle(allEvents.filter((item) => item.imp))
    .slice(0, 15);

  return (
    <div>
      <div className='wrapper no-scroll-bar'>
        <div className='items no-scroll-bar'>
          {randomEvents.map((item) => (
            <div
              key={item.id}
              className='item'
              tabIndex={0}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
