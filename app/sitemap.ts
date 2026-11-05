import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const publicRoutes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/founder', priority: 0.8 },
  { path: '/stories', priority: 0.8 },
  { path: '/partners', priority: 0.7 },
  { path: '/team', priority: 0.7 },
  { path: '/volunteer', priority: 0.7 },
  { path: '/donate', priority: 0.7 },
  { path: '/contact', priority: 0.6 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map(({ path, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency: 'monthly',
    priority,
  }));
}
