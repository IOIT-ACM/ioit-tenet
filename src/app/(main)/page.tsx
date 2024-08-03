import {
  Hero,
  Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
} from '@/modules/home';

import StackedCards from '@/modules/home/components/stackedcards';

export default function HomePage() {
  return (
    <main className=''>
      <Hero />
      <StackedCards />
      <Events />
      <SearchEvents />
      <Gallery />
      <HorizontalScroll />
      <MUN />
    </main>
  );
}
