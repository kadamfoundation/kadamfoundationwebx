'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import VolunteerDialog from '@/components/VolunteerDialog';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/stories', label: 'Stories & Events' },
  { href: '/partners', label: 'Partnerships' },
  { href: '/team', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDonatePage = pathname === '/donate';

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-surface-raised/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-3 px-space-lg py-3 md:px-margin md:py-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus-ring"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white md:h-12 md:w-12">
            <Image
              src="/images/kadam-logo.jpg"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-serif text-base font-bold leading-none tracking-tight text-primary sm:text-lg md:text-xl">
              Kadam Foundation
            </span>
            <span className="mt-1 hidden font-eyebrow text-[10px] uppercase tracking-widest text-text-secondary sm:inline">
              Young Steps Towards the Nation
            </span>
          </span>
        </Link>

        <nav aria-label="Global Navigation" className="hidden items-center gap-4 xl:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-sm transition-colors ${
                  active
                    ? 'font-semibold text-primary'
                    : 'font-medium text-text-secondary hover:text-primary'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <VolunteerDialog />
          <Link
            href="/donate"
            aria-current={isDonatePage ? 'page' : undefined}
            className={`hidden min-h-10 items-center justify-center gap-1.5 rounded-full px-3 py-2 font-label-md text-label-md font-semibold transition-colors sm:inline-flex sm:px-5 ${
              isDonatePage
                ? 'bg-primary text-inverse-primary'
                : 'bg-primary-container text-text-inverse hover:bg-action-hover'
            }`}
          >
            Donate
            <Icon name="favorite" className="hidden text-base sm:inline" filled />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="rounded-full border border-border-subtle p-2 text-text-primary transition-colors hover:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-focus-ring xl:hidden"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border-subtle bg-surface-raised px-space-lg pb-5 pt-3 xl:hidden">
          <nav aria-label="Mobile Navigation" className="mx-auto flex max-w-7xl flex-col gap-1.5">
            {NAV_LINKS.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-md px-3 py-2.5 font-label-md text-label-md transition-colors ${
                    active
                      ? 'bg-surface-canvas font-semibold text-primary'
                      : 'text-text-secondary hover:bg-surface-canvas hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isDonatePage ? 'page' : undefined}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-primary-container px-4 py-2 font-label-md text-label-md font-semibold text-white transition-colors hover:bg-action-hover"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
