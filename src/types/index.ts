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

export type Organizer = {
  name: string;
  phone: string;
};

export type ScheduleItemType = {
  title: string;
  url: string;
  imp: boolean;
  date: string;
  location: string;
  organizers: Organizer[];
  color: string;
  start: Date;
};
