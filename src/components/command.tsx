/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FaWindows } from 'react-icons/fa';
import { MdKeyboardControlKey } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { GALLERY_PAGE } from '@/config';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/hooks/use-search';
import { useStore } from '@/store';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { usePathname } from 'next/navigation';

export function TenetCommandDialog() {
  const router = useRouter();
  const pathname = usePathname();
  const { allItems } = useSearch();
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(true);
  const setMusic = useStore((state) => state.setMusic);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const bottomThreshold = 1000;

      if (currentScrollTop >= maxScrollTop - bottomThreshold) {
        setShowText(false);
      } else {
        setShowText(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.metaKey && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const speakers = allItems.filter((item) => item.type === 'speaker');
  const events = allItems.filter((item) => item.type === 'event');
  const quickLinks = [
    {
      url: '/',
      name: 'Home',
    },
    {
      url: GALLERY_PAGE,
      name: 'View Gallery',
    },
    {
      url: '/register',
      name: 'Get Tickets',
    },
    {
      url: '/game',
      name: 'Typing Game',
    },
    {
      url: '/denofcode',
      name: 'Den of code',
    },
    {
      url: 'https://mun.ioittenet.com/',
      name: 'IOIT MUN website',
    },
    {
      url: '/register',
      name: 'Register for TENET 2025',
    },
    {
      url: '/24/speakers',
      name: 'View all speakers at TENET 2024',
    },
    {
      url: '/24/events',
      name: 'View all events at TENET 2024',
    },
    { url: '/24/techfiesta', name: 'Techfiesta Events Page' },
    { url: '/24/esports', name: 'E-Sports Events Page' },
    { url: '/24/mun', name: 'MUN Events Page' },
    {
      url: 'mailto:ioit.tenet@aissmsioit.org',
      name: 'Contact ACM student chapter',
    },
    {
      url: 'mailto:adimail2404@gmail.com',
      name: 'Contact developer',
    },
    { url: '/24/esummit', name: 'E-Summit Events Page' },
    { url: '/24/creators', name: 'Cultural Night Events Page' },
  ];

  const handleSelect = (item: any) => {
    if (item.type === 'event') {
      router.push(`/24/events/${item.id}`);
    } else if (item.type === 'speaker') {
      router.push(`/24/speakers/${item.id}`);
    } else {
      router.push(item.url);
    }
    setOpen(false);
  };

  const noTextRoutes = [
    '/game',
    '/denofcode',
    '/24/events',
    '/24/speakers',
    '/register',
    GALLERY_PAGE,
  ];
  const shouldShowText = !noTextRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const [WinKey, setWinKey] = useState(<></>);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Mac')) {
      setWinKey(
        <>
          <span>Press </span>
          <MdKeyboardControlKey className='mx-2' />
          <span>+ J </span>
        </>,
      );
    } else if (userAgent.includes('Android')) {
      setWinKey(
        <>
          <CiSearch className='mx-2' />
        </>,
      );
    } else {
      setWinKey(
        <>
          <span>Press </span>
          <FaWindows className='mx-2' />
          <span>+ J </span>
        </>,
      );
    }
  }, []);

  return (
    <>
      {showText && shouldShowText && (
        <p
          className='fixed bottom-3 right-2 z-[99999999] flex cursor-pointer items-center rounded-lg p-4 text-[15px] text-white'
          onClick={() => setOpen(true)}
        >
          <kbd className='flex items-center'>{WinKey}</kbd>
        </p>
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search...' />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading='Actions'>
            <CommandItem
              onSelect={() => {
                setMusic(true);
                setOpen(false);
              }}
            >
              Turn ON the music
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setMusic(false);
                setOpen(false);
              }}
            >
              Turn OFF the music
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          {quickLinks.length > 0 && (
            <>
              <CommandGroup heading='quickLinks'>
                {quickLinks.map((item) => (
                  <CommandItem
                    key={item.url}
                    onSelect={() => handleSelect(item)}
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          {speakers.length > 0 && (
            <>
              <CommandGroup heading='Speakers'>
                {speakers.map((item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelect(item)}
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          {events.length > 0 && (
            <>
              <CommandGroup heading='Events'>
                {events.map((item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelect(item)}
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
