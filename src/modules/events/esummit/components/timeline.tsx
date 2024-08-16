"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from 'next/image';

// Define types for your event data
interface Event {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  for: string;
  by: string;
  with: string;
  pathwayNumber: string;
  ctaText: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
}

const events: Event[] = [
  // Your event data...
  {
    id: 1,
    title: "Business Marathon",
    subtitle: "VENTURE BY YOUTH",
    description: "An all-night adventure fueling innovation and entrepreneurial thinking. Dive into business challenges through intense brainstorming, making it a must-attend for passionate entrepreneurs!",
    shortDescription: "Overnight Event",
    icon: "https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    for: "STUDENTS",
    by: "E-CELL",
    with: "MENTORS",
    pathwayNumber: "01",
    ctaText: "BUSINESS MARATHON",
    gradientFrom: "from-purple-600",
    gradientTo: "to-blue-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Business Marathon",
    subtitle: "VENTURE BY YOUTH",
    description: "An all-night adventure fueling innovation and entrepreneurial thinking. Dive into business challenges through intense brainstorming, making it a must-attend for passionate entrepreneurs!",
    shortDescription: "Overnight Event",
    icon: "https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    for: "STUDENTS",
    by: "E-CELL",
    with: "MENTORS",
    pathwayNumber: "01",
    ctaText: "BUSINESS MARATHON",
    gradientFrom: "from-purple-600",
    gradientTo: "to-blue-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Business Marathon",
    subtitle: "VENTURE BY YOUTH",
    description: "An all-night adventure fueling innovation and entrepreneurial thinking. Dive into business challenges through intense brainstorming, making it a must-attend for passionate entrepreneurs!",
    shortDescription: "Overnight Event",
    icon: "https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    for: "STUDENTS",
    by: "E-CELL",
    with: "MENTORS",
    pathwayNumber: "01",
    ctaText: "BUSINESS MARATHON",
    gradientFrom: "from-purple-600",
    gradientTo: "to-blue-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Business Marathon",
    subtitle: "VENTURE BY YOUTH",
    description: "An all-night adventure fueling innovation and entrepreneurial thinking. Dive into business challenges through intense brainstorming, making it a must-attend for passionate entrepreneurs!",
    shortDescription: "Overnight Event",
    icon: "https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    for: "STUDENTS",
    by: "E-CELL",
    with: "MENTORS",
    pathwayNumber: "01",
    ctaText: "BUSINESS MARATHON",
    gradientFrom: "from-purple-600",
    gradientTo: "to-blue-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more events as needed
];

export default function Timeline() {
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
    hidden: { opacity: 0 }, // Initially hidden
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren" // Ensure children animate in order
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="flex flex-col items-center bg-black text-white min-h-screen p-4">
      <h1 className="text-5xl font-bold my-24">Events</h1>
      <motion.div 
        ref={containerRef}
        className="relative flex flex-col items-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden" // Start as hidden
        animate={controls}
      >
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-500 w-0.5 h-full"></div>

        {/* Timeline Events */}
        <div className="flex flex-col w-full">
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              className="flex items-start mb-24 relative"
              variants={itemVariants}
              initial="hidden" // Start as hidden
              animate={controls}
            >
              {/* Pathway Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-black border-2 border-green-500 rounded-full p-2 z-10">
                <span className="text-green-500 font-bold">{event.pathwayNumber}</span>
              </div>

              {/* Event Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto md:text-right"}`}>
                <h3 className="text-green-500 text-sm mb-2">{event.subtitle}</h3>
                <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
                <p className="text-gray-400 mb-6">{event.description}</p>
                
                {/* Image */}
                <div className="mb-6 w-full h-64 relative overflow-hidden rounded-lg">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Tags */}
                <div className={`flex gap-4 text-xs mb-6 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                  <span className="text-green-500">For {event.for}</span>
                  <span className="text-green-500">By {event.by}</span>
                  <span className="text-green-500">With {event.with}</span>
                </div>
                
                {/* CTA Card */}
                <div className={`inline-block rounded-lg overflow-hidden ${event.gradientFrom} ${event.gradientTo}`}>
                  <div className="flex items-center p-4">
                    <div className="mr-4">
                      <p className="text-sm">{event.shortDescription}</p>
                      <p className="font-bold">{event.title}</p>
                    </div>
                    <div className="w-12 h-12 relative">
                      <Image 
                        src={event.icon} 
                        alt={`${event.title} icon`} 
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-20 p-2">
                    <span className="text-xs font-bold">{event.ctaText} →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
