import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Volunteer',
  'Explore ways to volunteer with Kadam SOS Foundation and participate in community initiatives.',
  '/volunteer',
);

export default function VolunteerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
