import { type MusicConfig } from '@/types';

export const musicConfig: MusicConfig[] = [
  {
    route: '/',
    music: [
      'https://ioit.acm.org/tenet/tracks/CYBERPUNK2077.mp3',
      'https://ioit.acm.org/tenet/tracks/hero.mp3',
      'https://ioit.acm.org/tenet/tracks/hero2.mp3',
    ],
  },
  {
    route: '/techfiesta',
    music: [
      'https://ioit.acm.org/tenet/tracks/hero.mp3',
      'https://ioit.acm.org/tenet/tracks/hero2.mp3',
    ],
  },
  {
    route: '/esports',
    music: ['https://ioit.acm.org/tenet/tracks/CYBERPUNK2077.mp3'],
  },
  {
    route: '/mun',
    music: ['https://ioit.acm.org/tenet/tracks/cornfieldchase.mp3'],
  },
  {
    route: '/esummit',
    music: ['https://ioit.acm.org/tenet/tracks/greenbagboogie.mp3'],
  },
  {
    route: '/creators',
    music: ['https://ioit.acm.org/tenet/tracks/tambdi-chambdi.mp3'],
  },
];
