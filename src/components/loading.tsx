'use client';

import { useState, useEffect } from 'react';

/**
 * WelcomeScreen Component
 *
 * This component displays a full-screen welcome message while the page is loading.
 * The `loading` state ensures that a welcome screen is shown during the initial render,
 * while Framer Motion or other heavy animations are loading in the background.
 *
 * Once the component is mounted, the `loading` state is set to `false`, allowing the
 * rest of the page content to be displayed. This helps to prevent a flash of unstyled
 * content (FOUC) or abrupt transitions, providing a smoother user experience.
 */

const WelcomeScreen = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (loading) {
    return (
      <div className='fixed inset-0 z-[9999999999] flex items-center justify-center bg-slate-900'>
        <div className='animate-pulse text-center'>
          <h1 className='text-6xl font-bold text-white'>TENET 2024</h1>
          <p className='mt-4 text-2xl text-gray-300'>Loading, please wait...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default WelcomeScreen;
