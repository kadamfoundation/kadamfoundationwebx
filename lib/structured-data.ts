import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/site-config';
import { SITE_URL } from '@/lib/seo';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/founder#person`;

export const organizationStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Kadam SOS Foundation',
  url: SITE_URL,
  logo: new URL('/images/kadam-logo.jpg', SITE_URL).toString(),
  description:
    'A youth-led foundation working alongside communities through education, women’s empowerment, and youth development.',
  foundingDate: '2020-03-20',
  founder: { '@id': FOUNDER_ID },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.officeAddress,
    addressLocality: 'Bhopal',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'general inquiries',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
  },
  sameAs: SOCIAL_LINKS.filter(({ name }) => name !== 'WhatsApp').map(
    ({ href }) => href,
  ),
};

export const founderStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Prachi Dwivedi',
  honorificPrefix: 'Ms.',
  jobTitle: 'Founder',
  image: new URL('/images/leadership/founder.jpg', SITE_URL).toString(),
  url: new URL('/founder', SITE_URL).toString(),
  description:
    'Ms. Prachi Dwivedi began teaching 10 children in her veranda in Bhopal on 21 March 2020, after meeting children in need the previous day. The learning initiative grew into Kadam SOS Foundation and expanded through volunteers and city teams.',
  worksFor: { '@id': ORGANIZATION_ID },
  mainEntityOfPage: new URL('/founder', SITE_URL).toString(),
};
