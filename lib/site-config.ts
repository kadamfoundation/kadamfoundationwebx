import type { IconName } from '@/components/Icon';

const officeAddress = 'LIG A2, PMAY Building, Bhanpur Bridge, Bhopal';

export const CONTACT_INFO = {
  officeAddress,
  phone: '+91 90391 05476',
  phoneHref: 'tel:+919039105476',
  email: 'kadamfoundation2020@gmail.com',
  emailHref: 'mailto:kadamfoundation2020@gmail.com',
  whatsappUrl: 'https://chat.whatsapp.com/DHQ7aJLyEVPCg8iUvHhqHb',
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`,
} as const;

type SocialLink = {
  name: string;
  href: string;
  icon: IconName;
};

export const SOCIAL_LINKS = [
  { name: 'YouTube', href: 'https://youtube.com/@kadamsosfoundation', icon: 'youtube' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kadam-sos-foundation-a611923b3/', icon: 'linkedin' },
  { name: 'WhatsApp', href: CONTACT_INFO.whatsappUrl, icon: 'whatsapp' },
  { name: 'X', href: 'https://x.com/kadamfoundatioX', icon: 'x' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1GVsWwrdJW/', icon: 'facebook' },
] satisfies readonly SocialLink[];