"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { day1, day2, day3 } from '@/config/events';
import { type ScheduleItemType } from "@/types";
const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];

export const Timeline: React.FC<{ domain: string }> = ({ domain }) => {

const esummit_events: ScheduleItemType[] = allEvents.filter((event) => event.domain === domain);
  const containerRef = useRef<HTMLDivElement>(null);
  const beamControls = useAnimation();
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = async () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const { top: containerTop, height: containerHeight } = containerRect;
        const viewportHeight = window.innerHeight;

        const maxBeamHeight = containerHeight;
        const scrollPercentage = Math.max(0, Math.min(1, (viewportHeight - containerTop) / (viewportHeight + containerHeight)));
        const newHeight = scrollPercentage * maxBeamHeight;

        await beamControls.start({
          height: `${newHeight}px`,
          transition: { duration: 0 }
        });

        const itemElements = containerRef.current.querySelectorAll<HTMLDivElement>('.timeline-item');
        let newActiveIndex: number = activeEventIndex;

        itemElements.forEach((item, index) => {

          const timeElement = item.querySelector<HTMLDivElement>('.event-time');
          if (timeElement) {
            const { top: timeTop } = timeElement.getBoundingClientRect();
            const beamTop = containerTop + newHeight;

            if (beamTop >= timeTop) {
              newActiveIndex = index;
            }
          }
        });

        setActiveEventIndex(newActiveIndex);
      }
    };

    const handleScrollWrapper = () => {
      handleScroll().catch(error => {
        console.error('Error in handleScroll:', error);
      });
    };

    handleScrollWrapper();
    window.addEventListener('scroll', handleScrollWrapper);
    window.addEventListener('resize', handleScrollWrapper);

    return () => {
      window.removeEventListener('scroll', handleScrollWrapper);
      window.removeEventListener('resize', handleScrollWrapper);
    };
  }, [beamControls, activeEventIndex]);

  return (
    <main id="timeline" className="flex flex-col items-center bg-black text-white min-h-screen p-4">
      <h1 className="text-5xl font-bold my-24">Events</h1>
      <div 
        ref={containerRef}
        className="relative flex flex-col items-center w-full max-w-6xl"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 w-0.5 h-full" />

        <motion.div
          id="tracing-beam"
          className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-green-300 via-green-500 to-green-700 w-0.5 h-0"
          animate={beamControls}
        />

        <div className="flex flex-col w-full">
          {esummit_events.map((event: ScheduleItemType, index: number) => (
            <motion.div
              key={event.id}
              className={`timeline-item flex items-start mb-24 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${activeEventIndex >= index ? 'opacity-100' : 'opacity-20'}`}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: (activeEventIndex >= index ? 1: 0), y: 0, scale: 1.05 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4, ease: "easeOut" },
                y: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bg-black border-2 rounded-full p-2 z-10 event-time ${(activeEventIndex >= index) ? 'text-green-500 border-green-500' : 'text-gray-400 border-gray-400'}`}
              >
                <p>Time: {event.time}</p>
              </div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto md:text-right"}`}>
                <Link href={`/events/${event.id}`} passHref>
                  <h3 className="text-green-500 text-md mb-2">{event.date}</h3>
                  <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
                  <p className="text-gray-400 mb-6">{event.description}</p>
                  
                  <div className="mb-6 w-full h-64 relative overflow-hidden rounded-lg">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                 
                  <div className="text mb-6">
                    <p className="text-green-500">Location: {event.location}</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};
