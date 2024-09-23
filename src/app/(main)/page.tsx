import {
  SearchEvents,
  // Gallery,
  TenetSpeakers,
  MUN,
  EventCountdown,
  Intro,
  ThatsAllFolks,
  FallingCaps,
  TenetHero,
  Schedule,
  Tickets,
  Sponsors,
} from '@/modules/home';
import { MusicBtn } from '@/components/common/musicplayer';

import { GameLink } from '@/modules/game';

import ImageCarousel from '@/modules/home/components/imagecarousal';

export default async function HomePage() {
  return (
    <main className=''>
      <TenetHero />
      <Intro />
      <Tickets />
      <EventCountdown />
      <ImageCarousel />
      <Schedule />
      <TenetSpeakers />
      <SearchEvents />
      <Sponsors />
      <MUN />
      {/* <Gallery /> */}
      <FallingCaps />
      <ThatsAllFolks />
      <GameLink />
      <MusicBtn className='fixed bottom-7 left-20 hidden md:block' />
    </main>
  );
}
