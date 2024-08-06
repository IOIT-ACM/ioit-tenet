'use client';

import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { GiTimeTrap } from 'react-icons/gi';
import { useIsMobile } from '@/hooks/useismobile';
import { IoCloseCircle } from 'react-icons/io5';

export const Agenda = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex items-center justify-center'>
      {/* Background */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-10 h-screen w-screen bg-black/40 backdrop-blur-sm'
          />
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.div
        className={`fixed z-50 flex cursor-pointer items-center justify-center ${
          (!isScrolled || isHovered) && 'gap-4'
        } overflow-hidden rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-500 hover:shadow-xl md:text-3xl`}
        initial={{ opacity: 0, bottom: 300 }}
        animate={{
          opacity: 1,
          bottom: isScrolled ? (isMobile ? 10 : 20) : isMobile ? 200 : 250,
        }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setActive(true)}
        layoutId='agenda-button'
      >
        <motion.div layoutId='icon' className='text-yellow-300'>
          <GiTimeTrap />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: !isScrolled || isHovered ? 1 : 0,
            width: !isScrolled || isHovered ? 90 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={`m-0 select-none p-0`}
          layoutId='button'
        >
          Agenda
        </motion.h3>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className='fixed inset-0 z-[100] grid place-items-center p-4'>
            <motion.button
              key={`button-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm lg:hidden'
              onClick={() => setActive(false)}
            >
              <IoCloseCircle size={28} />
            </motion.button>
            <motion.div
              layoutId='agenda-button'
              ref={ref}
              className='flex h-full w-full max-w-[700px] flex-col overflow-hidden bg-white shadow-2xl dark:bg-neutral-800 sm:rounded-3xl md:h-fit md:max-h-[80%]'
            >
              <motion.div className='relative h-80'>
                <Image
                  priority
                  fill
                  src='/agenda.jpg'
                  alt={'Agenda image'}
                  className='object-cover object-center sm:rounded-tl-3xl sm:rounded-tr-3xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <motion.h3
                  layoutId='button'
                  className='absolute bottom-4 left-4 text-4xl font-bold text-white'
                >
                  Complete Agenda
                </motion.h3>
              </motion.div>

              <div className='flex-1 overflow-hidden'>
                <div className='flex items-start justify-between p-6'>
                  <motion.p className='text-lg font-semibold text-neutral-600 dark:text-neutral-300'>
                    October 2024
                  </motion.p>

                  <div className='flex items-center gap-3'>
                    <motion.a
                      href={'/agenda'}
                      className='rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-shadow duration-300 hover:shadow-lg'
                    >
                      View full Agenda
                    </motion.a>
                    <motion.a
                      href={'/events'}
                      className='rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-shadow duration-300 hover:shadow-lg'
                    >
                      View Events
                    </motion.a>
                  </div>
                </div>
                <div className='px-6 pb-6'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='h-[calc(100vh-400px)] overflow-auto pr-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:h-[300px] md:text-base'
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent',
                    }}
                  >
                    {/* Agenda component */}
                    {/* TODO!!!! */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
