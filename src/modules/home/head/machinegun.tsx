/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { LOADTIME } from '@/config';

interface MachineGunTextProps {
  text: string;
  children: React.ReactNode; // Children will be rendered after animation
}

const MachineGunText: React.FC<MachineGunTextProps> = ({ text, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const _sentenceEndExp = /(\.|\?|!)$/g;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const words = text.split(' ');
    const tl = gsap.timeline({ delay: LOADTIME + 3.5 });

    let time = 0;

    words.forEach((word, index) => {
      const isSentenceEnd = _sentenceEndExp.test(word);
      const element = document.createElement('h3');
      element.textContent = word;
      element.className =
        'absolute font-bold text-center invisible w-full left-0 p-0 m-0 text-2xl bottom-0';
      container.appendChild(element);

      const duration = Math.max(0.5, word.length * 0.1);

      gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.05 });

      // Animate in
      tl.to(
        element,
        {
          duration: duration / 2,
          scale: 1.2,
          autoAlpha: 1,
          ease: 'slow(0.25, 0.9)',
          opacity: 1,
        },
        time,
      );

      // Animate out
      tl.to(
        element,
        {
          duration: duration / 2,
          opacity: 0,
          autoAlpha: 0,
          ease: 'slow(0.25, 0.9)',
        },
        time + duration / 2,
      );

      time += duration;

      if (isSentenceEnd) {
        time += 0.6;
      }

      if (index === words.length - 1) {
        tl.call(() => setIsComplete(true));
      }
    });

    return () => {
      tl.kill();
      container.innerHTML = '';
    };
  }, [text]);

  return (
    <div
      className='max-w-screen m-0 w-full p-0 text-center text-white'
      ref={containerRef}
    >
      {isComplete && <div>{children}</div>}
    </div>
  );
};

export default MachineGunText;
