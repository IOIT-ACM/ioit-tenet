import { create } from 'zustand';

interface ImageStore {
  randomImage: string;
  setRandomImage: (image: string) => void;
  loadRandomImage: () => void;
}

const imageArray = [
  { path: '/imgs/esports/fifa.jpg' },
  { path: '/imgs/esports/peakpx.jpg' },
];

// Zustand store setup
export const useImageStore = create<ImageStore>((set) => ({
  randomImage: '/imgs/esports/fifa.jpg',
  setRandomImage: (image) => set({ randomImage: image }),
  loadRandomImage: () => {
    if (imageArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImagePath = imageArray[randomIndex]?.path ?? '/imgs/esports/fifa.jpg';
    set({ randomImage: randomImagePath });
  }
}));
