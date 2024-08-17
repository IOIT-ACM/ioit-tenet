import { HeroImage, Timeline } from '@/modules/events/techfiesta';

export default async function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Welcome to TechFiesta'
        subtitle='Join us for an exciting event'
        ctaText='Learn More'
        ctaLink='#tracingbeam'
      />
      <Timeline domain='techfiesta' />
    </main>
  );
}
