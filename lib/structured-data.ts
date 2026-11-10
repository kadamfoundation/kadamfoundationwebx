import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/site-config';
import { SITE_URL } from '@/lib/seo';
import type { CityTeamData, TeamProfile } from '@/lib/team-data';

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

export function cityTeamStructuredData(
  city: CityTeamData,
): Record<string, unknown> {
  const profiles: { profile: TeamProfile; role: string }[] = [];

  if (city.cityHead?.name?.trim()) {
    profiles.push({ profile: city.cityHead, role: 'City head' });
  }

  for (const department of city.departments ?? []) {
    for (const profile of department.coordinators ?? []) {
      if (profile.name?.trim()) {
        profiles.push({
          profile,
          role: profile.role ?? department.name,
        });
      }
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': profiles.map(({ profile, role }, index) => ({
      '@type': 'Person',
      '@id': new URL(
        `/team#${city.slug}-${index + 1}`,
        SITE_URL,
      ).toString(),
      name: profile.name,
      ...(profile.honorific ? { honorificPrefix: profile.honorific } : {}),
      jobTitle: role,
      ...(profile.bio?.trim() ? { description: profile.bio.trim() } : {}),
      ...(profile.image
        ? { image: new URL(profile.image, SITE_URL).toString() }
        : {}),
      ...(profile.instagramUrl || profile.linkedinUrl
        ? {
            sameAs: [profile.instagramUrl, profile.linkedinUrl].filter(
              (url): url is string => Boolean(url),
            ),
          }
        : {}),
      worksFor: { '@id': ORGANIZATION_ID },
      homeLocation: {
        '@type': 'Place',
        name: city.name,
      },
    })),
  };
}
