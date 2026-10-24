import Link from 'next/link';

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

        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Kadam Foundation
        </p>
      </div>
    </footer>
  );
}
