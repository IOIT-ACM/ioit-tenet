import { type MusicConfig } from '@/types';

export const musicConfig: MusicConfig[] = [
  {
    route: '/',
    music: [
      '/music/tracks/CYBERPUNK2077.mp3',
      '/music/tracks/hero.mp3',
      '/music/tracks/hero2.mp3',
    ],
  },
  {
    route: '/techfiesta',
    music: ['/music/tracks/hero.mp3', '/music/tracks/hero2.mp3'],
  },
  {
    route: '/esports',
    music: ['/music/tracks/CYBERPUNK2077.mp3'],
  },
  {
    route: '/mun',
    music: ['/music/tracks/cornfieldchase.mp3'],
  },
  {
    route: '/esummit',
    music: ['/music/tracks/greenbagboogie.mp3'],
  },
  {
    route: '/creators',
    music: ['/music/tracks/zenzenzense.mp3'],
  },
];
