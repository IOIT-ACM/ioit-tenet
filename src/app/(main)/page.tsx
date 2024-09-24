import {
  SearchEvents,
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
  ZoomParallax,
  MUNtitle,
} from '@/modules/home';
import { MusicBtn } from '@/components/common/musicplayer';

import { GameLink } from '@/modules/game';

export default async function HomePage() {
  return (
    <main className=''>
      <TenetHero />
      <Intro />
      <Tickets />
      <EventCountdown />
      <Schedule />
      <TenetSpeakers />
      <ZoomParallax />
      <SearchEvents />
      <Sponsors />
      <MUNtitle />
      <MUN />
      <FallingCaps />
      <ThatsAllFolks />
      <GameLink />
      <MusicBtn className='fixed bottom-7 left-20 hidden md:block' />
    </main>
  );
}
