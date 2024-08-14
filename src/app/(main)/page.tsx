import {
  SearchEvents,
  Gallery,
  TenetSpeakers,
  MUN,
  EventCountdown,
  Navigation,
  Intro,
  ThatsAllFolks,
  FallingCaps,
  TenetHero,
  Schedule,
} from '@/modules/home';

import { GameLink } from '@/modules/game';

export default async function HomePage() {
  return (
    <main className=''>
      <Navigation />
      <TenetHero />
      <Intro />
      <EventCountdown />
      <Schedule />
      <TenetSpeakers />
      <SearchEvents />
      <MUN />
      <Gallery />
      <FallingCaps />
      <ThatsAllFolks />
      <GameLink />
    </main>
  );
}
