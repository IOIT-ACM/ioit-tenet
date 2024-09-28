import React, { useCallback, useEffect, useState } from 'react';
import { type EmblaCarouselType } from 'embla-carousel';

type UseSelectedSnapDisplayType = {
  selectedSnap: number;
  snapCount: number;
};

export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined,
): UseSelectedSnapDisplayType => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((api: EmblaCarouselType) => {
    setSnapCount(api.scrollSnapList().length);
    setSelectedSnap(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on('select', updateScrollSnapState);
    emblaApi.on('reInit', updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

type PropType = {
  selectedSnap: number;
  snapCount: number;
};

// eslint-disable-next-line react/function-component-definition
export const SelectedSnapDisplay: React.FC<PropType> = ({
  selectedSnap,
  snapCount,
}) => (
  <div className='embla__selected-snap-display'>
    {selectedSnap + 1} / {snapCount}
  </div>
);
