/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import type { StoreApi, UseBoundStore } from 'zustand';
import { persist } from 'zustand/middleware';

export interface State {
  videoPlayed: boolean;
}

interface Action {
  setVideoPlayed: (autoSync: boolean) => void;
}

export const useStateStore = create<State & Action>()(
  persist(
    (set) => ({
      videoPlayed: true,

      setVideoPlayed: (videoPlayed) => set(() => ({ videoPlayed })),
    }),
    {
      name: 'ioit-tenet-storage',
      partialize: () => ({
        autoSync: false,
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
