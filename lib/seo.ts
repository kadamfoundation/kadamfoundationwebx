import type { Metadata } from 'next';

export const SITE_URL = 'https://kadamfoundation.org';
const SITE_NAME = 'Kadam SOS Foundation';

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const pageTitle = `${title} | ${SITE_NAME}`;
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary',
      title: pageTitle,
      description,
    },
  };
}
