/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';
import Image from 'next/image';

const WelcomeScreen = () => {
  const loading = useStore((state) => state.loading);
  const sceneLoading = useStore((state) => state.sceneLoading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-transform duration-700 ${loading && sceneLoading ? '' : '-translate-y-full'
        }`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/tenet-logo.png"
          alt="Logo"
          width={90}
          height={90}
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;
