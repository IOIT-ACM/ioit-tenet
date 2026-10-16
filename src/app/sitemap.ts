import { siteConfig } from '@/config';
import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'events',
    'schedule',
    'techfiesta',
    'halloween',
    'register',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}