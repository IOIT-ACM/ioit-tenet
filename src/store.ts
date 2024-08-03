/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import type { StoreApi, UseBoundStore } from 'zustand';
import { persist } from 'zustand/middleware';

export type SearchMode = 'rooms' | 'roommates';
export type Gender = 'male' | 'female' | 'any';
export type SortOption = 'price' | 'location' | 'rating';
export type FilterOption = 'availableNow' | 'furnished' | 'petsAllowed';
export type Coordinates = { lat: number; lng: number };

export interface State {
  videoPlayed: boolean;
}

interface Action {
  setVideoPlayed: (autoSync: boolean) => void;
}

export const useStateStore = create<State & Action>()(
  persist(
    (set) => ({
      videoPlayed: false,

      setVideoPlayed: (videoPlayed) => set(() => ({ videoPlayed })),
    }),
    {
      name: 'hosteze-storage',
      partialize: () => ({
        autoSync: true,
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
