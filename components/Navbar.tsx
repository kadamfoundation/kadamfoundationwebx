'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/stories', label: 'Stories' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/team', label: 'Our Team' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
];

const BRAND_TAGLINES: Record<string, string> = {
  '/': 'YOUTH-LED NONPROFIT',
  '/about': 'YOUTH-LED NONPROFIT',
  '/contact': 'Young Steps Towards the Nation',
  '/team': 'Youth-Led Nonprofit',
  '/volunteer': 'YOUNG STEPS TOWARDS THE NATION',
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tagline = BRAND_TAGLINES[pathname] ?? '';
  const isDonatePage = pathname === '/donate';

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-space-lg py-3 md:px-margin md:py-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus-ring"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border-subtle bg-[#8F6E64] md:h-12 md:w-12">
            <Image
              src="/assets/aistudio/Image_1_0f0bcb58.jpeg"
              alt="Kadam Foundation circular footprint emblem logo"
              fill
              sizes="48px"
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-none tracking-tight text-primary md:text-xl">
              Kadam Foundation
            </span>
            {tagline && (
              <span className="mt-1 hidden font-eyebrow text-[10px] uppercase tracking-widest text-text-secondary sm:inline md:text-[11px]">
                {tagline}
              </span>
            )}
          </span>
        </Link>

        <nav aria-label="Global Navigation" className="hidden items-center gap-3 lg:flex xl:gap-5">
          {NAV_LINKS.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 text-xs transition-colors xl:text-sm ${
                  active
                    ? 'font-bold text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[""]'
                    : 'font-medium text-text-secondary hover:text-primary'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            aria-current={isDonatePage ? 'page' : undefined}
            className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-text-inverse transition-colors sm:px-6 ${
              isDonatePage ? 'bg-primary' : 'bg-primary-container hover:bg-action-hover'
            }`}
          >
            {isDonatePage ? (
              <>
                <Icon name="volunteer_activism" className="mr-1.5 text-[18px]" />
                Donate
              </>
            ) : (
              <>
                Donate
                <Icon name="favorite" className="ml-1.5 text-[16px]" filled />
              </>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="rounded-lg p-2 text-text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring lg:hidden"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border-subtle bg-surface-canvas px-space-lg pb-6 pt-3 shadow-lg lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5 text-sm">
            {NAV_LINKS.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 font-medium transition-colors ${
                    active
                      ? 'border-l-4 border-primary bg-surface-raised font-bold text-primary'
                      : 'text-text-secondary hover:bg-surface-raised/50 hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-text-inverse hover:bg-action-hover"
            >
              {isDonatePage ? 'Donate (Current Page)' : 'Donate'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
