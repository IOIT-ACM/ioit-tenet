'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TARGET_TEXT = 'Register';
const TARGET_LINK = '/register';
const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 60;
const CHARS = '!@#$%^&*():{};|,.<>/?';

export const RegisterButton = () => {
  const router = useRouter();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current ?? undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={() => router.push(TARGET_LINK)}
      className="
        relative hidden md:inline-flex items-center justify-center
        overflow-hidden rounded-full
        border border-neutral-700/70 
        bg-neutral-800/40 backdrop-blur-md
        px-6 py-2.5 text-lg font-semibold tracking-wide
        text-neutral-200 transition-all
        hover:text-indigo-300 hover:border-indigo-400/50
        group
      "
    >
      <span
        className="
          absolute inset-0 rounded-full 
          bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-transparent
          opacity-0 group-hover:opacity-100 blur-xl transition
        "
      />
      <span className="relative z-10 font-mono uppercase">{text}</span>
    </motion.button>
  );
};
