'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  /** Seconds between each word's entrance. */
  stagger?: number;
  /** Seconds before the first word starts. */
  delay?: number;
}

/**
 * Word-by-word cascade reveal, each word clipped by its own overflow-hidden
 * mask so it slides up from underneath rather than just fading in place.
 *
 * Uses a manual IntersectionObserver (same mechanism as Reveal) instead of
 * framer-motion's `whileInView`, which was leaving words permanently stuck
 * in their hidden initial state for some visitors — whileInView's own
 * viewport tracking wasn't reliably firing after hydration.
 */
export default function SplitText({ text, className, stagger = 0.055, delay = 0 }: SplitTextProps) {
  const words = text.split(' ');
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em]">
          <motion.span
            className="inline-block"
            initial={false}
            animate={visible ? { y: '0%', opacity: 1 } : { y: '115%', opacity: 0 }}
            transition={{ duration: 0.55, delay: visible ? delay + i * stagger : 0, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
