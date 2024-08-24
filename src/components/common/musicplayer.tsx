/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { musicConfig } from '@/config/music';
import { useStore } from '@/store';
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from 'react-icons/hi2';
import { cn } from '@/lib/utils';

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();
  const [currentTrack, setCurrentTrack] = useState<string | null | undefined>(
    null,
  );
  const music = useStore((state) => state.music);

  useEffect(() => {
    const currentConfig = musicConfig.find(
      (config) => config.route === pathname,
    );

    if (currentConfig) {
      const randomTrack =
        currentConfig.music[
          Math.floor(Math.random() * currentConfig.music.length)
        ];

      if (randomTrack !== currentTrack) {
        setCurrentTrack(randomTrack);
      }
    } else {
      setCurrentTrack(null);
    }
  }, [pathname]);

  useEffect(() => {
    if (currentTrack && audioRef.current && music) {
      audioRef.current.src = currentTrack;
      audioRef.current
        .play()
        .catch((error) => console.error('Audio playback failed:', error));
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [currentTrack, music]);

  return <audio ref={audioRef} loop style={{ display: 'none' }} />;
};

interface MusicBtnProps {
  className?: string;
  nohide?: boolean;
}

export const MusicBtn: React.FC<MusicBtnProps> = ({
  className = '',
  nohide,
}) => {
  const music = useStore((state) => state.music);
  const setMusic = useStore((state) => state.setMusic);
  const [showIcon, setSetShowicon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const bottomThreshold = 1000;

      if (currentScrollTop >= maxScrollTop - bottomThreshold) {
        setSetShowicon(false);
      } else {
        setSetShowicon(true);
      }
    };

    if (!nohide) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMusic = () => {
    setMusic(!music);
  };

  if (showIcon) {
    return (
      <div
        className={cn(
          'cursor-pointer',
          'rounded-full bg-zinc-100 p-2',
          'z-[99999999] rounded-full bg-black p-2 text-[15px] text-white',
          className,
        )}
        onClick={toggleMusic}
      >
        {music ? <HiMiniSpeakerWave /> : <HiMiniSpeakerXMark />}
      </div>
    );
  }
};
