export { type VideoProps } from './video';

export type Experiment = {
  filename: string;
  title: string;
  href: string;
  tags: string[];
  number: number;
  og: string | null;
  contributors: Array<{
    id: string;
    url: string;
    name: string;
    avatarUrl: string;
    email: string;
    company: string;
  }>;
};

export interface MusicConfig {
  route: string;
  music: string[];
}

export type Organizer = {
  name: string;
  phone?: string;
};

export type Speaker = {
  id: string;
  name: string;
  url: string;
  image: string;
  title: string;
  bio?: string;
  domain?: string;
  sessionid: string;
};

export type ScheduleItemType = {
  title: string;
  id: string;
  domain: 'techfiesta' | 'esports' | 'mun' | 'esummit' | 'creators' | 'home';
  description?: string;
  image: string;
  imp: boolean;
  date: string;
  location: string;
  organizers?: Organizer[];
  speakers?: string[];
  color: string;
  start: Date;
  time: string;
  registration?: string;
  icon?: string;
  munpage?: string;
  schedule?: {
    title: string;
    time: string;
  }[];
};

export interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  type?: string;
}
