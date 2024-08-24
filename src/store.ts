/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import type { StoreApi, UseBoundStore } from 'zustand';
import { persist } from 'zustand/middleware';

export interface State {
  videoPlayed: boolean;
  showPreview: boolean;
  characters: string[];
  music: boolean;
}

interface Action {
  setVideoPlayed: (videoPlayed: boolean) => void;
  setShowPreview: (showPreview: boolean) => void;
  setMusic: (music: boolean) => void;
  setCharacters: (characters: string[]) => void;
}

export const useStateStore = create<State & Action>()(
  persist(
    (set) => ({
      videoPlayed: true,
      showPreview: true,
      music: false,
      characters: [],

      setVideoPlayed: (videoPlayed) => set(() => ({ videoPlayed })),
      setShowPreview: (showPreview) => set(() => ({ showPreview })),
      setMusic: (music) => set(() => ({ music })),
      setCharacters: (characters) => set(() => ({ characters })),
    }),
    {
      name: 'ioit-tenet-storage',
      partialize: (state) => ({
        // characters: state.characters,
        videoPlayed: state.videoPlayed,
        showPreview: state.showPreview,
        music: state.music,
      }),
    },
  ),
);

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export const useStore = createSelectors(useStateStore);
