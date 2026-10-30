import Link from 'next/link';
import Icon from '@/components/Icon';
import { SOCIAL_LINKS } from '@/lib/site-config';

const FOOTER_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/stories', label: 'Stories' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-raised">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-space-lg py-8 md:flex-row md:items-center md:justify-between md:px-margin">
        <div>
          <Link href="/" className="font-serif text-lg font-bold text-primary">
            Kadam Foundation
          </Link>
          <p className="mt-1 text-sm text-text-secondary">
            Young Steps Towards the Nation
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="text-sm font-semibold text-primary transition-colors hover:text-action-hover"
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
              className="rounded-full p-2 text-text-secondary transition-colors hover:bg-surface-canvas hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              <Icon name={icon} className="text-xl" />
            </a>
          ))}
        </nav>

        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Kadam Foundation
        </p>
      </div>
    </footer>
  );
}
