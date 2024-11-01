'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BsInfo } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import type { Card } from '../types';
import { type GalleryImageGroup } from '../types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function FixedNav({ data }: { data: GalleryImageGroup[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const events: Card[] = Array.from(
    new Map(
      data.map((group) => [group.label, { title: group.label }]),
    ).values(),
  );

  const handleCardClick = (card: Card) => {
    setSearchValue(card.title);
    setIsExpanded(false);
  };

  return (
    <div className='fixed top-5 z-[999] flex w-screen items-start justify-between px-3 md:px-10'>
      {/* Left section: Logos */}
      <div className='flex items-center gap-3'>
        <Link
          className='h-8 w-8 cursor-pointer transition-all hover:scale-105 md:h-10 md:w-10'
          href={'/'}
        >
          <Image
            className='h-full w-full'
            src={'/tenet.png'}
            alt='Tenet Logo'
            height={40}
            width={40}
          />
        </Link>
        <Link
          className='h-8 w-8 cursor-pointer transition-all hover:scale-105 md:h-10 md:w-10'
          href={'https://ioit.acm.org'}
        >
          <Image
            className='h-full w-full'
            src={'/acm.png'}
            alt='ACM Logo'
            height={40}
            width={40}
          />
        </Link>
      </div>

      {/* Center section: Search bar */}
      <motion.div
        layoutId='search-container'
        className={` ${isExpanded ? 'w-[65vw] md:w-[40vw]' : 'w-[50vw] md:w-[25vw]'}`}
      >
        <motion.div
          layout
          className={`rounded-full bg-white bg-opacity-80 shadow-lg backdrop-blur-sm transition-shadow duration-300 ${
            isExpanded ? 'shadow-xl' : 'shadow-md'
          }`}
        >
          {!isExpanded ? (
            <div
              className='textblack flex cursor-pointer items-center justify-center gap-2 overflow-hidden truncate px-6 py-3'
              onClick={() => setIsExpanded(true)}
            >
              <Search size={18} />
              <span>{searchValue ? searchValue : 'Search'}</span>
            </div>
          ) : (
            <motion.div
              layout
              className='flex flex-col items-center justify-between gap-2 px-4 py-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className='flex w-full items-center justify-between gap-2'>
                <div className='flex w-full items-center gap-2'>
                  <Search size={18} className='textblack' />
                  <input
                    type='text'
                    className='w-full border-none bg-transparent text-black placeholder-gray-800 outline-none'
                    placeholder='Type to search...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    maxLength={9}
                    autoFocus
                  />
                </div>
                <IoIosCloseCircle
                  size={18}
                  onClick={() => {
                    setSearchValue('');
                    setIsExpanded(false);
                  }}
                  className='text-gray-400 hover:text-gray-600'
                />
              </div>
            </motion.div>
          )}
        </motion.div>

        {isExpanded && (
          <div className='no-scroll-bar mt-5 grid max-h-[300px] grid-cols-2 gap-4 overflow-y-auto rounded-xl bg-white bg-opacity-60 p-5 shadow-lg backdrop-blur-sm'>
            {events.map((card) => (
              <Link
                key={card.title}
                onClick={() => handleCardClick(card)}
                href={`#${card.title}`}
                className='cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-4 text-center shadow transition-transform duration-200 ease-in-out hover:bg-gray-100 hover:shadow-md md:text-left'
              >
                <h3 className='mb-2 text-sm font-medium text-gray-700 md:text-lg'>
                  {card.title}
                </h3>
              </Link>
            ))}
          </div>
        )}

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='fixed inset-0 z-[-1]'
            onClick={() => setIsExpanded(false)}
          />
        )}
      </motion.div>

      {/* Right section: Info button */}
      <Dialog>
        <DialogTrigger
          className={`hidden cursor-pointer rounded-full bg-white bg-opacity-60 p-2 shadow-lg backdrop-blur-sm md:block`}
        >
          <BsInfo
            color='black'
            className='text-2xl transition-all hover:scale-110'
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>TENET 2024</DialogTitle>
            <DialogDescription>
              Tenet2024 featured the IOIT MUN second edition, Techfiesta, and
              several technical workshops, creating a platform for students to
              showcase their skills and engage in collaborative learning.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger
          className={`fixed bottom-4 right-4 block cursor-pointer rounded-full bg-white bg-opacity-60 p-2 shadow-lg backdrop-blur-sm md:hidden`}
        >
          <BsInfo
            color='black'
            className='text-2xl transition-all hover:scale-110'
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>TENET 2024</DialogTitle>
            <DialogDescription>
              Tenet2024 featured the IOIT MUN second edition, Techfiesta, and
              several technical workshops, creating a platform for students to
              showcase their skills and engage in collaborative learning.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
