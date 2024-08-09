import {
  Hero,
  // Events,
  SearchEvents,
  Gallery,
  TenetSpeakers,
  MUN,
  ShiftingCountdown,
  // Agenda,
  Navigation,
  Intro,
  // HorizontalMarquee,
  LastParallax,
  FallingCaps,
  TenetHero,
  Schedule,
} from '@/modules/home';

export default async function HomePage() {
  return (
    <main className=''>
      {/* <Agenda /> */}
      <Navigation />
      <Hero />
      <TenetHero />
      <Intro />
      <ShiftingCountdown />
      <TenetSpeakers />
      <Schedule />
      {/* <Events /> */}
      {/* <HorizontalMarquee /> */}
      <SearchEvents />
      <MUN />
      <Gallery />
      <FallingCaps />
      <LastParallax />
    </main>
  );
}
