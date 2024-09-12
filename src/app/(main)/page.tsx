import {
  SearchEvents,
  Gallery,
  // TenetSpeakers,
  MUN,
  EventCountdown,
  Navigation,
  Intro,
  ThatsAllFolks,
  FallingCaps,
  TenetHero,
  Schedule,
  Tickets,
} from '@/modules/home';
import { MusicBtn } from '@/components/common/musicplayer';

import { GameLink } from '@/modules/game';

export default async function HomePage() {
  return (
    <main className=''>
      <Navigation />
      <TenetHero />
      <Intro />
      <Tickets />
      <EventCountdown />
      <Schedule />
      {/* <TenetSpeakers /> */}
      <SearchEvents />
      <MUN />
      <Gallery />
      <FallingCaps />
      <ThatsAllFolks />
      <GameLink />
      <MusicBtn className='fixed bottom-7 left-20 hidden md:block' />
    </main>
  );
}
