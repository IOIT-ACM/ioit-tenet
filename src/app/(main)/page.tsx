import {
  Hero,
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

export default async function HomePage() {
  return (
    <main className=''>
      <Navigation />
      <Hero />
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
    </main>
  );
}
