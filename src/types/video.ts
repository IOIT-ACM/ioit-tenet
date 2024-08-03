export interface VideoProps {
  src: string;
  type?: 'video/mp4' | 'video/webm';
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  playsInline?: boolean;
  captions?: {
    src: string;
    srcLang: string;
    label: string;
  }[];
  iframe?: boolean;
}
