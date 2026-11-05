import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Donate',
  'Learn how to support Kadam SOS Foundation and submit a donation enquiry. The enquiry form is not an online payment gateway.',
  '/donate',
);

export default function DonateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
