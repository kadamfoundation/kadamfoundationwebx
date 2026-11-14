import type { Metadata } from 'next';

export const SITE_URL = 'https://kadamfoundation.org';
const SITE_NAME = 'Kadam SOS Foundation';
const SOCIAL_IMAGE_URL = new URL('/images/kadam-logo.jpg', SITE_URL).toString();

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
      canonical: url,
    },
    openGraph: {
      type: 'website',
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 475,
          height: 475,
          alt: 'Kadam SOS Foundation logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [SOCIAL_IMAGE_URL],
    },
  };
}
