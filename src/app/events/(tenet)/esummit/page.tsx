import {
  HeroImage,Timeline, Speakers, Sponsors
  } from '@/modules/events/esummit';
  
import "@/styles/speakers.css";



export default function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Welcome to E-Summit"
        subtitle="Join us for an exciting event"
        ctaText="Learn More"
        ctaLink="#timeline"
      />
      <Timeline />
      <Speakers/>
      <Sponsors/>
    </main>
  );
}
