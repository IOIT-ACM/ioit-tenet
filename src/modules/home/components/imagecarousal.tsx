'use client';

import { day1, day2, day3 } from '@/config/events';
import '@/styles/ImageCarousel.css';

const allEvents = [...day1, ...day2, ...day3];

const ImageCarousel: React.FC = () => {
  return (
    <div className='wrapper'>
      <div className='items'>
        {allEvents
          .filter((item) => item.imp)
          .map((item) => (
            <div
              key={item.id}
              className='item'
              tabIndex={0}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
