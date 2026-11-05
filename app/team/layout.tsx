import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Our Team',
  'Meet Kadam SOS Foundation founder Prachi Dwivedi, its central leadership, and city teams.',
  '/team',
);

export default function TeamLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
