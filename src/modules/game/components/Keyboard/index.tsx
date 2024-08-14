'use client';

import { type FC, useEffect } from 'react';
import { KeyboardKey } from './Key';
import { KeyboardRow } from './Row';
import { globalKeyboard, type HighlightEvent } from './global-keyboard';

export const Keyboard: FC = () => {
  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const keyNodes = document.querySelectorAll(
        `[data-keyboard-key="${(e as HighlightEvent).key}"]`,
      );

      if (keyNodes) {
        keyNodes.forEach((keyNode) => {
          keyNode.classList.add(globalKeyboard.animatedClass);
          setTimeout(() => {
            keyNode.classList.remove(globalKeyboard.animatedClass);
          }, globalKeyboard.animationDuration);
        });
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      globalKeyboard.highlightKey(event.key);
    };

    globalKeyboard.addEventListener('highlight', handleHighlight);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      globalKeyboard.removeEventListener('highlight', handleHighlight);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    globalKeyboard.startAnimation();

    setTimeout(() => {
      globalKeyboard.stopAnimation();
    }, 3000);
  }, []);

  return (
    <div className={'flex w-full select-none flex-col text-white'}>
      {globalKeyboard.keys.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map((key) => (
            <KeyboardKey
              key={`keyboard-${key}`}
              value={key}
              grow={key === 'space'}
            />
          ))}
        </KeyboardRow>
      ))}
    </div>
  );
};

export * from './global-keyboard';
export * from './Key';
export * from './Row';
