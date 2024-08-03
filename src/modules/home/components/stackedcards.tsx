'use client';

import React, { useEffect } from 'react';

const cardData = [
  {
    title: 'T',
    description: 'Technology',
    color: 'bg-blue-600',
    zIndex: 50,
  },
  {
    title: 'E',
    description: 'Entrepreneurship',
    color: 'bg-red-600',
    zIndex: 40,
  },
  {
    title: 'N',
    description: 'Negotations',
    color: 'bg-purple-600',
    zIndex: 30,
  },
  {
    title: 'E',
    description: 'Entrepreneurship',
    color: 'bg-pink-600',
    zIndex: 20,
  },
  {
    title: 'T',
    description: 'Trends',
    color: 'bg-pink-600',
    zIndex: 10,
  },
];

const StackedCards: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>('.card');
    const stackArea = document.querySelector<HTMLDivElement>('.stack-area');

    const rotateCards = () => {
      cards.forEach((card) => {
        if (card.classList.contains('active')) {
          card.style.transform = `translate(0, 0)`;
        } else {
          card.style.transform = `translate(0, 70vh)`;
        }
      });
    };

    rotateCards();

    const handleScroll = () => {
      if (stackArea) {
        const proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
          const n = cards.length;
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          cards.forEach((card, i) => {
            if (i <= index) {
              card.classList.add('active');
            } else {
              card.classList.remove('active');
            }
          });
          rotateCards();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const adjust = () => {
      const windowWidth = window.innerWidth;
      const left = document.querySelector<HTMLDivElement>('.left');
      if (left) {
        const stackArea = document.querySelector<HTMLDivElement>('.stack-area');
        if (windowWidth < 800) {
          stackArea?.insertAdjacentElement('beforebegin', left);
        } else {
          stackArea?.insertAdjacentElement('afterbegin', left);
        }
      }
    };

    adjust();
    window.addEventListener('resize', adjust);
    return () => {
      window.removeEventListener('resize', adjust);
    };
  }, []);

  return (
    <div className='min-w-screen min-h-screen'>
      <div className='stack-area relative flex h-[300vh] w-full justify-center'>
        <div className='sticky top-0 flex h-screen items-center justify-center'>
          <div className='cards grid h-fit w-full gap-3'>
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`card relative z-${card.zIndex} flex h-[100px] w-[250px] flex-col items-end justify-between rounded-xl ${card.color} grid p-3 transition-transform ease-in-out`}
              >
                <div className='absolute right-2 top-2 text-4xl font-bold'>
                  {card.title}
                </div>
                <div className='h-fit w-fit rounded-full bg-white/30 px-3 py-1 text-xl'>
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='sticky top-0 flex h-screen items-center justify-center'>
          <div className='w-[420px] text-8xl font-bold'>TENET</div>
          <div className='mt-8 w-[420px] text-sm'>
            Τ.Ε.Ν.Ε.Τ goes beyond just an abbreviation of 5 niches. This event
            in its inception is an amalgamation of ideas where professionalism
            meets the academia. This is an event where students learn, connect,
            grow and most importantly have an experience worth remembering. From
            E-summit to eSports and from Techfiesta to IOIT MUN&apos;24 and
            Creator&apos;s Conclave, TENET, an event organised by the IOIT ACM
            Student Chapter has something for everyone.
            <br />
            <button className='mt-5 rounded-2xl bg-black px-6 py-3 text-white'>
              See More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
