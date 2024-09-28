/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import type { StoreApi, UseBoundStore } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  initialCss,
  initialHtml,
} from './modules/denofcode/components/editor/init';
import type { Bug } from './modules/denofcode/components/editor/bugconfig';

export interface State {
  videoPlayed: boolean;
  showPreview: boolean;
  characters: string[];
  music: boolean;
  playerState: PlayerState;
  htmlcode: string;
  csscode: string;
  showMenu: boolean;
  loading: boolean;
  sceneLoading: boolean;
}

export type Game = 'webmasterwars' | 'catchthebug' | null;
export type Language = 'cpp' | 'python';

export interface PlayerState {
  name: string;
  selectedGame: Game;
  language?: string;
  code?: string;
  bug?: Bug;
}

interface Action {
  setVideoPlayed: (videoPlayed: boolean) => void;
  setShowPreview: (showPreview: boolean) => void;
  setShowMenu: (showMenu: boolean) => void;
  setMusic: (music: boolean) => void;
  setCharacters: (characters: string[]) => void;
  setPlayerState: (player: PlayerState) => void;
  setHTML: (htmlcode: string) => void;
  setCSS: (csscode: string) => void;
  setLoading: (loading: boolean) => void;
  setSceneLoading: (sceneLoading: boolean) => void;
}

export const useStateStore = create<State & Action>()(
  persist(
    (set) => ({
      htmlcode: initialHtml,
      csscode: initialCss,
      videoPlayed: true,
      showPreview: true,
      music: false,
      characters: [],
      showMenu: false,
      loading: true,
      sceneLoading: true,
      playerState: {
        name: '',
        selectedGame: null,
      },

      setVideoPlayed: (videoPlayed) => set(() => ({ videoPlayed })),
      setShowPreview: (showPreview) => set(() => ({ showPreview })),
      setShowMenu: (showMenu) => set(() => ({ showMenu })),
      setMusic: (music) => set(() => ({ music })),
      setCharacters: (characters) => set(() => ({ characters })),
      setPlayerState: (playerState) => set(() => ({ playerState })),
      setHTML: (htmlcode) => set(() => ({ htmlcode })),
      setCSS: (csscode) => set(() => ({ csscode })),
      setLoading: (loading) => set(() => ({ loading })),
      setSceneLoading: (sceneLoading) => set(() => ({ sceneLoading })),
    }),
    {
      name: 'ioit-tenet-storage',
      partialize: (state) => ({
        // characters: state.characters,
        videoPlayed: state.videoPlayed,
        showPreview: state.showPreview,
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
