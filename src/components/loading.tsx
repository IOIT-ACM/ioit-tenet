/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';
import styles from './WelcomeScreen.module.scss';

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
  const loading = useStore((state) => state.loading);
  const sceneLoading = useStore((state) => state.sceneLoading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.welcomeScreen} ${loading && sceneLoading ? '' : styles.slideDown}`}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>TENET 2025</h1>
        <p className={styles.subtitle}>Loading, please wait...</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
