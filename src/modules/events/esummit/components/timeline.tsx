"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { day1, day2, day3 } from '@/config/events';
import { type ScheduleItemType } from "@/types";

const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];
const esummit_events: ScheduleItemType[] = allEvents.filter((event) => event.domain === 'esummit');

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if container is in viewport
        if (top < viewportHeight && bottom > 0) {
          void controls.start("visible");
        } else {
          void controls.start("hidden");
        }
      }
    };

    handleScroll(); // Check initial visibility
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <main id="timeline" className="flex flex-col items-center bg-black text-white min-h-screen p-4">
      <h1 className="text-5xl font-bold my-24">Events</h1>
      <motion.div 
        ref={containerRef}
        className="relative flex flex-col items-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-500 w-0.5 h-full"></div>

        {/* Timeline Events */}
        <div className="flex flex-col w-full">
          {esummit_events.map((event: ScheduleItemType, index: number) => (
            <motion.div
              key={event.id} 
              className={`flex items-start mb-24 relative transition-transform duration-300 ease-in-out ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              variants={itemVariants}
              initial="hidden"
              animate={controls}
            >
              {/* Pathway Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-black border-2 border-green-500 rounded-full p-2 z-10">
                <p className="text-green-500">Time: {event.time}</p>
              </div>

              {/* Event Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto md:text-right"}`}>
                <Link href={`/events/${event.id}`} passHref>
                  <h3 className="text-green-500 text-md mb-2">{event.date}</h3>
                  <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
                  <p className="text-gray-400 mb-6">{event.description}</p>
                  
                  {/* Image */}
                  <div className="mb-6 w-full h-64 relative overflow-hidden rounded-lg">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                 
                  {/* Location and Time */}
                  <div className="text mb-6">
                    <p className="text-green-500">Location: {event.location}</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};
