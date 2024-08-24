import {
  HeroImage,
  Timeline,
  Sponsors,
} from '@/modules/events/creators';

export default function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage='https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Welcome to Creators Conclave'
        subtitle='Join us for an exciting event'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Timeline domain='creators' />
      <Sponsors />
    </main>
  );
}
