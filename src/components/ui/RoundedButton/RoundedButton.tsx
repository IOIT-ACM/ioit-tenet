'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic/Magnetic';
import styles from './style.module.scss';
import { cn } from '@/lib/utils';
import { KONFHUB_PAGE } from '@/config';

function RoundedButton({
  children,
  backgroundColor,
  className,
  newpage,
  link,
  color,
  ...rest
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  color?: string;
  newpage?: boolean;
  link?: string;
}) {
  const circle = useRef(null);
  let timeoutId: NodeJS.Timeout | null = null;
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter',
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit',
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <a
        className={cn(styles.roundedButton, className)}
        style={{
          overflow: 'hidden',
          backgroundColor: backgroundColor
            ? backgroundColor
            : color
              ? color
              : 'white',
        }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        href={link ? link : KONFHUB_PAGE}
        {...rest}
        target={newpage ? '_blank' : '_self'}
      >
        {children}
        <span
          ref={circle}
          style={{
            backgroundColor: '#455CE9',
          }}
          className={styles.circle}
        ></span>
      </a>
    </Magnetic>
  );
}

export function Button({
  children,
  newpage,
  link,
  color,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  newpage?: boolean;
  link?: string;
}) {
  return (
    <div
      className={cn(styles.main, 'flex items-center justify-center', className)}
    >
      <div className={cn(styles.btnContainer)}>
        <RoundedButton newpage={newpage} link={link} color={color}>
          <span className='flex items-center px-4 py-3'>{children}</span>
        </RoundedButton>
      </div>
    </div>
  );
}

export default RoundedButton;
