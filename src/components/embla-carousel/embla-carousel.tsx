/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { type EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './embla-carousel-btn';

type PropType = {
  children: React.ReactNode;
  options: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ children, options }) => {
  // @ts-ignore
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    // @ts-ignore
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {React.Children.map(children, (child, index) => (
            <div className='embla__slide' key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
