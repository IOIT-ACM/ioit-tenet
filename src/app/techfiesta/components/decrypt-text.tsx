'use client';

import { useEffect, useRef, useState } from 'react';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=';

interface DecryptTextProps {
  text: string;
  className?: string;
  /** ms between scramble frames */
  speed?: number;
  /** ms it takes each successive character to lock in, left to right */
  revealStep?: number;
}

/**
 * Terminal-style scramble-to-reveal: characters cycle through random glyphs
 * and lock in left-to-right once the text scrolls into view.
 */
export default function DecryptText({ text, className, speed = 32, revealStep = 26 }: DecryptTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        let frame = 0;
        const interval = setInterval(() => {
          frame += 1;
          const revealedCount = Math.floor((frame * speed) / revealStep);
          if (revealedCount >= text.length) {
            setDisplay(text);
            clearInterval(interval);
            return;
          }
          setDisplay(
            text
              .split('')
              .map((char, i) => {
                if (char === ' ') return ' ';
                if (i < revealedCount) return char;
                return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
              })
              .join(''),
          );
        }, speed);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [text, speed, revealStep]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
