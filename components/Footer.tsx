import Link from 'next/link';
import Icon from '@/components/Icon';
import { SOCIAL_LINKS } from '@/lib/site-config';

const FOOTER_LINKS = [
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/stories', label: 'Stories' },
  { href: '/team', label: 'Leadership' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-primary-container text-text-inverse">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-space-lg py-8 md:flex-row md:items-center md:justify-between md:px-margin">
        <div>
          <Link href="/" className="font-serif text-lg font-bold text-text-inverse">
            Kadam Foundation
          </Link>
          <p className="mt-1 text-sm text-text-inverse/70">
            Young Steps Towards the Nation
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-text-inverse/75 transition-colors hover:text-text-inverse"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/donate"
          className="text-sm font-semibold text-text-inverse transition-colors hover:text-surface-peach"
          >
            Donate
          </Link>
        </nav>

        <nav aria-label="Social Media Links" className="flex items-center gap-1">
          {SOCIAL_LINKS.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Kadam Foundation on ${name}`}
              title={name}
              className="rounded-full p-2 text-text-inverse/75 transition-colors hover:bg-white/10 hover:text-text-inverse focus:outline-none focus:ring-2 focus:ring-surface-peach"
            >
              <Icon name={icon} className="text-xl" />
            </a>
          ))}
        </nav>

        <p className="text-sm text-text-inverse/65">
          © {new Date().getFullYear()} Kadam Foundation
        </p>
      </div>
    </footer>
  );
}
