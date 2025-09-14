"use client"

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import NextImage from 'next/image';

interface SlideData {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const data: SlideData[] = [
    {
        title:'Robotics Workshop',
        slug: 'robotics-workshop',
        description:'Dive into the world of automation! Our Robotics Workshop provides hands-on experience in building and programming robots from scratch. Learn about sensors, motors, and control systems in an interactive and engaging environment.',
        image:'https://ioit.acm.org/tenet/gallery/24/inaugration/11.jpeg'
    },
    {
        title:'Robo Soccer',
        slug: 'robo-soccer',
        description:'Experience the thrill of the beautiful game, reimagined with technology. Design, build, and program autonomous robots to compete in a fast-paced soccer tournament. Strategy and engineering prowess will determine the champion.',
        image:'https://ioit.acm.org/tenet/events/pm.jpeg'
    },
    {
        title:'Robo Sumo',
        slug: 'robo-sumo',
        description:'Enter the dohyō! In this classic robotic showdown, two autonomous robots clash in a test of strength, design, and programming. The goal is simple: push your opponent out of the ring. May the best bot win!',
        image:'https://ioit.acm.org/tenet/events/denofcode.jpeg'
    },
    {
        title:'Drone Workshop',
        slug: 'drone-workshop',
        description:'Take to the skies! Our Drone Workshop covers the fundamentals of drone technology, from assembly and basic aerodynamics to programming autonomous flight paths. Get hands-on experience with piloting and discover the future of aerial innovation.',
        image:'https://ioit.acm.org/tenet/events/ai.jpg'
    },
    {
        title:'Capture The Flag',
        slug: 'ctf',
        description:'Sharpen your cybersecurity skills in our Capture The Flag competition. Tackle a series of challenges in cryptography, web exploitation, and reverse engineering. Race against the clock to find the hidden flags and prove your mettle.',
        image:'https://ioit.acm.org/tenet/events/web3.jpeg'
    },
    {
        title:'Bluff and Bargain',
        slug: 'bluff-and-bargain',
        description:'Test your powers of persuasion and strategic thinking in this high-stakes trading game. Bluff and Bargain challenges you to negotiate deals, manage resources, and outwit your opponents in a battle of wits.',
        image:'https://ioit.acm.org/tenet/events/development.jpeg'
    },
];

const LandingHero: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailsEvenRef = useRef<HTMLDivElement>(null);
  const detailsOddRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const progressSubForegroundRef = useRef<HTMLDivElement>(null);

  const order = useRef<number[]>([0, 1, 2, 3, 4, 5]);
  const detailsEven = useRef<boolean>(true);
  const isAnimating = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let cardWidth = 200;
      let cardHeight = 300;
      let gap = 40;
      let numberSize = 50;
      const ease = "sine.inOut";

      let offsetTop = 200;
      let offsetLeft = 700;

      const step = (): Promise<void> => {
        return new Promise((resolve) => {
          if (isAnimating.current) {
            resolve();
            return;
          }
          isAnimating.current = true;

          order.current.push(order.current.shift()!);
          detailsEven.current = !detailsEven.current;

          const detailsActive = detailsEven.current ? detailsEvenRef.current : detailsOddRef.current;
          const detailsInactive = detailsEven.current ? detailsOddRef.current : detailsEvenRef.current;
          
          const activeIndex = order.current[0];
          if (activeIndex === undefined) {
            isAnimating.current = false;
            resolve();
            return;
          }
          const activeData = data[activeIndex];

          if (detailsActive && activeData) {
            const titleEl = detailsActive.querySelector<HTMLElement>('.place-box .text');
            const descEl = detailsActive.querySelector<HTMLElement>('.desc');
            if (titleEl) titleEl.textContent = activeData.title;
            if (descEl) descEl.textContent = activeData.description;
            
            gsap.set(detailsActive, { zIndex: 22 });
            gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
            gsap.to(detailsActive.querySelector('.place-box .text'), { y: 0, delay: 0.1, duration: 0.7, ease });
            gsap.to(detailsActive.querySelectorAll('.desc, .cta'), { y: 0, delay: 0.3, duration: 0.4, ease, stagger: 0.05 });
          }
          
          if (detailsInactive) {
            gsap.set(detailsInactive, { zIndex: 12 });
          }

          const [active, ...rest] = order.current;
          if (active === undefined) {
            isAnimating.current = false;
            resolve();
            return;
          }
          const prv = rest[rest.length - 1];

          if (prv !== undefined) {
            const prvCard = cardRefs.current[prv];
            const prvSlideItem = slideItemRefs.current[prv];
            if (prvCard) {
                gsap.set(prvCard, { zIndex: 10 });
                gsap.to(prvCard, { scale: 1.5, ease });
            }
            if (prvSlideItem) {
                gsap.to(prvSlideItem, { x: -numberSize, ease });
            }
          }

          const activeCard = cardRefs.current[active];
          const activeCardContent = cardContentRefs.current[active];
          const activeSlideItem = slideItemRefs.current[active];

          if (activeCard) gsap.set(activeCard, { zIndex: 20 });
          if (activeCardContent) gsap.to(activeCardContent, { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
          if (activeSlideItem) gsap.to(activeSlideItem, { x: 0, ease });
          if (progressSubForegroundRef.current) gsap.to(progressSubForegroundRef.current, { width: `${(100 / order.current.length) * (active + 1)}%`, ease });

          if (activeCard) {
            gsap.to(activeCard, {
              x: 0,
              y: 0,
              ease,
              width: '100vw',
              height: '100vh',
              borderRadius: 0,
              onComplete: () => {
                if (prv !== undefined) {
                  const prvCard = cardRefs.current[prv];
                  const prvCardContent = cardContentRefs.current[prv];
                  const prvSlideItem = slideItemRefs.current[prv];
                  if (prvCard && prvCardContent && prvSlideItem) {
                    const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                    gsap.set(prvCard, { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 });
                    gsap.set(prvCardContent, { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 });
                    gsap.set(prvSlideItem, { x: rest.length * numberSize });
                  }
                }
                if (detailsInactive) {
                  gsap.set(detailsInactive, { opacity: 0 });
                  gsap.set(detailsInactive.querySelector('.place-box .text'), { y: 100 });
                  gsap.set(detailsInactive.querySelectorAll('.desc, .cta'), { y: 50 });
                }
                isAnimating.current = false;
                resolve();
              },
            });
          } else {
            isAnimating.current = false;
            resolve();
          }

          rest.forEach((i, index) => {
            if (i !== prv) {
              const card = cardRefs.current[i];
              const cardContent = cardContentRefs.current[i];
              const slideItem = slideItemRefs.current[i];
              if (card && cardContent && slideItem) {
                const xNew = offsetLeft + index * (cardWidth + gap);
                gsap.set(card, { zIndex: 30 });
                gsap.to(card, { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1) });
                gsap.to(cardContent, { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1) });
                gsap.to(slideItem, { x: (index + 1) * numberSize, ease });
              }
            }
          });
        });
      };

      const stepBack = (): Promise<void> => {
        return new Promise((resolve) => {
            if (isAnimating.current) {
                resolve();
                return;
            }
            isAnimating.current = true;
    
            order.current.unshift(order.current.pop()!);
            detailsEven.current = !detailsEven.current;
    
            const detailsActive = detailsEven.current ? detailsEvenRef.current : detailsOddRef.current;
            const detailsInactive = detailsEven.current ? detailsOddRef.current : detailsEvenRef.current;
    
            const [activeIndex, ...rest] = order.current;
            if (activeIndex === undefined) {
                isAnimating.current = false;
                resolve();
                return;
            }
            const activeData = data[activeIndex];
    
            if (detailsActive && activeData) {
                const titleEl = detailsActive.querySelector<HTMLElement>('.place-box .text');
                const descEl = detailsActive.querySelector<HTMLElement>('.desc');
                if (titleEl) titleEl.textContent = activeData.title;
                if (descEl) descEl.textContent = activeData.description;
                
                gsap.set(detailsActive, { zIndex: 22 });
                gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
                gsap.to(detailsActive.querySelector('.place-box .text'), { y: 0, delay: 0.1, duration: 0.7, ease });
                gsap.to(detailsActive.querySelectorAll('.desc, .cta'), { y: 0, delay: 0.3, duration: 0.4, ease, stagger: 0.05 });
            }
            
            if (detailsInactive) {
                gsap.set(detailsInactive, { zIndex: 12 });
            }
    
            const activeCard = cardRefs.current[activeIndex];
            const activeCardContent = cardContentRefs.current[activeIndex];
            const activeSlideItem = slideItemRefs.current[activeIndex];
    
            if (activeCard) gsap.set(activeCard, { zIndex: 20 });
            if (activeCardContent) gsap.set(activeCardContent, { y: offsetTop + cardHeight - 100, opacity: 1 });
    
            if (activeCard) {
                gsap.to(activeCard, {
                    x: 0, y: 0, ease, width: '100vw', height: '100vh', borderRadius: 0,
                    onComplete: () => {
                        if (detailsInactive) {
                            gsap.set(detailsInactive, { opacity: 0 });
                            gsap.set(detailsInactive.querySelector('.place-box .text'), { y: 100 });
                            gsap.set(detailsInactive.querySelectorAll('.desc, .cta'), { y: 50 });
                        }
                        isAnimating.current = false;
                        resolve();
                    }
                });
            } else {
                isAnimating.current = false;
                resolve();
            }
            if (activeCardContent) gsap.to(activeCardContent, { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
            if (activeSlideItem) gsap.to(activeSlideItem, { x: 0, ease });
            if (progressSubForegroundRef.current) gsap.to(progressSubForegroundRef.current, { width: `${(100 / order.current.length) * (activeIndex + 1)}%`, ease });
    
            rest.forEach((i, index) => {
                const card = cardRefs.current[i];
                const cardContent = cardContentRefs.current[i];
                const slideItem = slideItemRefs.current[i];
                if (card && cardContent && slideItem) {
                    const xNew = offsetLeft + index * (cardWidth + gap);
                    gsap.set(card, { zIndex: 30 });
                    gsap.to(card, { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, scale: 1, borderRadius: 10, delay: 0.1 * (index + 1) });
                    gsap.to(cardContent, { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1) });
                    gsap.to(slideItem, { x: (index + 1) * numberSize, ease });
                }
            });
        });
      };

      const loop = () => {
        const tl = gsap.timeline({
          onComplete: () => {
            void step().then(() => {
              timeoutRef.current = setTimeout(loop, 500);
            });
          },
        });
        if (indicatorRef.current) {
          tl.to(indicatorRef.current, { x: 0, duration: 2, ease: 'none' })
            .to(indicatorRef.current, { x: '100%', duration: 0.8, delay: 0.3, ease: 'none' })
            .set(indicatorRef.current, { x: '-100%' });
        }
      };

      const init = () => {
        const [active, ...rest] = order.current;
        if (active === undefined) return;

        const detailsActive = detailsEven.current ? detailsEvenRef.current : detailsOddRef.current;
        const detailsInactive = detailsEven.current ? detailsOddRef.current : detailsEvenRef.current;
        const { innerHeight: height, innerWidth: width } = window;
        
        if (width < 768) {
            cardWidth = 100;
            cardHeight = 160;
            gap = 15;
            numberSize = 40;
            offsetTop = height - 250;
            offsetLeft = width - (cardWidth * 2 + gap * 1 + 60);
        } else {
            cardWidth = 200;
            cardHeight = 300;
            gap = 40;
            numberSize = 50;
            offsetTop = height - 430;
            offsetLeft = width - 830;
        }

        if (paginationRef.current) gsap.set(paginationRef.current, { top: offsetTop + cardHeight + 30, left: offsetLeft, y: 200, opacity: 0, zIndex: 60 });
        if (navRef.current) gsap.set(navRef.current, { y: -200, opacity: 0 });

        const activeCard = cardRefs.current[active];
        const activeCardContent = cardContentRefs.current[active];
        if (activeCard) gsap.set(activeCard, { x: 0, y: 0, width: '100vw', height: '100vh' });
        if (activeCardContent) gsap.set(activeCardContent, { x: 0, y: 0, opacity: 0 });
        
        if (detailsActive) gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
        if (detailsInactive) {
            gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
            gsap.set(detailsInactive.querySelector('.place-box .text'), { y: 100 });
            gsap.set(detailsInactive.querySelectorAll('.desc, .cta'), { y: 50 });
        }

        if (progressSubForegroundRef.current) gsap.set(progressSubForegroundRef.current, { width: `${(100 / order.current.length) * (active + 1)}%` });

        rest.forEach((i, index) => {
          const card = cardRefs.current[i];
          const cardContent = cardContentRefs.current[i];
          const slideItem = slideItemRefs.current[i];
          if (card) gsap.set(card, { x: offsetLeft + 400 + index * (cardWidth + gap), y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10 });
          if (cardContent) gsap.set(cardContent, { x: offsetLeft + 400 + index * (cardWidth + gap), zIndex: 40, y: offsetTop + cardHeight - 100 });
          if (slideItem) gsap.set(slideItem, { x: (index + 1) * numberSize });
        });

        if (indicatorRef.current) gsap.set(indicatorRef.current, { x: '-100%' });

        const startDelay = 0.6;

        if (coverRef.current) {
            gsap.to(coverRef.current, {
              x: '100%',
              delay: 0.5,
              ease,
              onComplete: () => {
                timeoutRef.current = setTimeout(loop, 500);
              },
            });
        }
        rest.forEach((i, index) => {
          const card = cardRefs.current[i];
          const cardContent = cardContentRefs.current[i];
          if (card) gsap.to(card, { x: offsetLeft + index * (cardWidth + gap), zIndex: 30, ease, delay: startDelay + 0.05 * index });
          if (cardContent) gsap.to(cardContent, { x: offsetLeft + index * (cardWidth + gap), zIndex: 40, ease, delay: startDelay + 0.05 * index });
        });
        if (paginationRef.current) gsap.to(paginationRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
        if (navRef.current) gsap.to(navRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
        if (detailsActive) gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
      };

      const handleNextClick = () => {
        if (isAnimating.current) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (indicatorRef.current) {
            gsap.killTweensOf(indicatorRef.current);
            gsap.set(indicatorRef.current, { x: '-100%' });
        }
        void step().then(() => {
          timeoutRef.current = setTimeout(loop, 500);
        });
      };

      const handlePrevClick = () => {
        if (isAnimating.current) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (indicatorRef.current) {
            gsap.killTweensOf(indicatorRef.current);
            gsap.set(indicatorRef.current, { x: '-100%' });
        }
        void stepBack().then(() => {
          timeoutRef.current = setTimeout(loop, 500);
        });
      };

      document.querySelector('.arrow-right')?.addEventListener('click', handleNextClick);
      document.querySelector('.arrow-left')?.addEventListener('click', handlePrevClick);

      const imagePromises = data.map(item => new Promise(resolve => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
      }));

      void Promise.all(imagePromises).then(init);

    }, mainRef);

    return () => {
      ctx.revert();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const DetailsContent = ({ item, reference }: { item: SlideData; reference: React.RefObject<HTMLDivElement> }) => (
    <div ref={reference} className="details absolute top-28 left-6 z-20 md:top-[240px] md:left-[60px]">
      <div className="place-box relative mb-8 h-auto overflow-visible">
        <div className="text pt-4 font-['Oswald'] text-4xl font-semibold before:absolute before:top-0 before:left-0 before:h-1 before:w-[30px] before:rounded-full before:bg-white before:content-[''] md:text-[72px] md:leading-tight">
          {item.title}
        </div>
      </div>
      <div className="desc mt-4 w-auto max-w-xs pr-6 text-xs md:w-[500px] md:max-w-none md:pr-0 md:text-base">{item.description}</div>
      <div className="cta mt-6 flex w-auto items-center md:w-[500px]">
        <Link href={`/techfiesta/${item.slug}`} className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-md transition hover:bg-white/20 md:px-8 md:py-4 md:text-lg">
            Learn More
        </Link>
      </div>
    </div>
  );

  return (
    <div ref={mainRef} style={{ fontFamily: 'BrickSans' }} className="relative h-screen w-screen overflow-hidden bg-[#1a1a1a] font-['Inter',_sans-serif] text-white/90">
      <div ref={indicatorRef} className="indicator fixed top-0 left-0 z-[60] h-[5px] w-full bg-[#ecad29]"></div>

      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:px-9 px-5 py-5 font-medium">
        <div
        className="flex w-fit items-center justify-center gap-1 md:gap-3"
      >
        <Link href={'/'} className="h-10 w-10 md:h-14 md:w-14">
          <NextImage
            className="h-full w-full rounded-lg transition-transform hover:scale-105"
            src={'/tenet-white-logo.png'}
            alt="Tenet Logo"
            height={70}
            width={70}
          />
        </Link>
        <Link
          href={'https://ioit.acm.org'}
          className="h-10 w-10 md:h-14 md:w-14"
        >
          <NextImage
            className="h-full w-full rounded-lg transition-transform hover:scale-105"
            src={'/acm.png'}
            alt="ACM Logo"
            height={70}
            width={70}
          />
        </Link>
      </div>
      </nav>

      <div className="absolute top-0 left-0 h-full w-full">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="card absolute top-0 left-0 bg-cover bg-center shadow-[6px_6px_10px_2px_rgba(0,0,0,0.6)]"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})` }}
          ></div>
        ))}
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardContentRefs.current[index] = el; }}
            className="card-content absolute top-0 left-0 pl-4 text-white/90"
          >
            <div className="content-start h-[5px] w-[30px] rounded-full bg-white/90"></div>
            <div className="content-place mt-1.5 font-['Oswald'] text-xl font-semibold w-24 md:w-48">{item.title}</div>
          </div>
        ))}
      </div>

      {data[0] && <DetailsContent item={data[0]} reference={detailsEvenRef} />}
      {data[0] && <DetailsContent item={data[0]} reference={detailsOddRef} />}

      <div ref={paginationRef} className="pagination absolute inline-flex">
        <div className="arrow arrow-left grid h-12 w-12 cursor-pointer place-items-center rounded-full border-2 border-white/30 md:h-[50px] md:w-[50px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 stroke-2 text-white/60">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="arrow arrow-right ml-2 grid h-12 w-12 cursor-pointer place-items-center rounded-full border-2 border-white/30 md:ml-5 md:h-[50px] md:w-[50px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 stroke-2 text-white/60">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="progress-sub-container z-[60] ml-2 flex h-[50px] w-[150px] items-center md:ml-6 md:w-[500px]">
          <div className="progress-sub-background h-[3px] w-full bg-white/20">
            <div ref={progressSubForegroundRef} className="progress-sub-foreground h-[3px] bg-[#ecad29]"></div>
          </div>
        </div>
        <div className="slide-numbers relative z-[60] h-[50px] w-[50px] overflow-hidden">
          {data.map((_, index) => (
            <div
              key={index}
              ref={(el) => { slideItemRefs.current[index] = el; }}
              className="item absolute top-0 left-0 grid h-[50px] w-[50px] place-items-center text-2xl font-bold text-white md:text-3xl"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div ref={coverRef} className="cover absolute top-0 left-0 z-[100] h-full w-full bg-white"></div>
    </div>
  );
};

export default LandingHero;