'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MachineGunTextProps {
  text: string;
}

const MachineGunText: React.FC<MachineGunTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const _sentenceEndExp = /(\.|\?|!)$/g;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const words = text.split(' ');
    const tl = gsap.timeline({ delay: 0.4 });

    let time = 0;

    words.forEach((word) => {
      const isSentenceEnd = _sentenceEndExp.test(word);
      const element = document.createElement('h3');
      element.textContent = word;
      element.className =
        'absolute font-bold w-full text-center invisible text-2xl top-16';
      container.appendChild(element);

      const duration = Math.max(0.5, word.length * 0.08);

      gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });

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
    });

    return () => {
      tl.kill();
      container.innerHTML = '';
    };
  }, [text]);

  return (
    <div
      className='relative mx-auto h-[300px] w-full text-lg text-white'
      ref={containerRef}
    ></div>
  );
};

export default MachineGunText;
