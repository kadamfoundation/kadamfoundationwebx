'use client';

import Image from 'next/image';
import { useState } from 'react';
import CityTeam from '@/components/CityTeam';
import Icon from '@/components/Icon';
import { CENTRAL_LEADERSHIP, CITY_TEAMS } from '@/lib/team-data';

function LeadershipProfile({ role, member }: (typeof CENTRAL_LEADERSHIP)[number]) {
  const name = member.name?.trim();

  return (
    <article className="flex flex-col items-center gap-4 rounded-xl border border-border-subtle bg-surface-raised p-5 text-center shadow-sm">
      <div
        aria-label={member.image ? `${role} portrait` : `${role} avatar placeholder`}
        className="relative flex h-60 w-60 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-subtle bg-surface-clay-soft text-text-secondary"
        role="img"
      >
        {member.image ? (
          <Image src={member.image} alt="" fill sizes="240px" className="object-cover" />
        ) : (
          <Icon name="diversity_1" className="text-6xl" />
        )}
      </div>
      <div className="min-w-0 max-w-full">
        <p className="font-eyebrow text-eyebrow uppercase text-text-secondary">{role}</p>
        <h3 className="mt-1 break-words font-headline-md text-headline-md font-semibold text-text-primary">
          {name || 'Name pending'}
        </h3>
        {!name && (
          <p className="mt-1 font-body-sm text-body-sm text-text-secondary">
            Awaiting official details
          </p>
        )}
        {name && !member.image && (
          <p className="mt-1 font-body-sm text-body-sm text-text-secondary">
            Portrait pending
          </p>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  const [selectedCitySlug, setSelectedCitySlug] = useState(CITY_TEAMS[0]?.slug ?? '');
  const selectedCity = CITY_TEAMS.find((city) => city.slug === selectedCitySlug);

  return (
    <main className="flex-grow">
      <section className="border-b border-border-subtle bg-surface-canvas px-space-lg py-12 md:px-margin md:py-16">
        <div className="mx-auto max-w-7xl">
          <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
            Kadam Foundation
          </span>
          <h1 className="mt-2 font-display-xl text-display-xl text-primary">Our Team</h1>
          <p className="mt-4 max-w-3xl font-body-lg text-body-lg text-text-secondary">
            Meet Kadam Foundation&apos;s central leadership and city-wise teams across India.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-surface-raised px-space-lg py-12 md:px-margin md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
              Central Leadership
            </span>
            <h2 className="mt-2 font-headline-xl text-headline-xl text-primary">
              Foundation Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CENTRAL_LEADERSHIP.map((leader) => (
              <LeadershipProfile key={leader.id} {...leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-space-lg py-12 md:px-margin md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
              Operational Cities
            </span>
            <h2 className="mt-2 font-headline-xl text-headline-xl text-primary">
              Select a City
            </h2>
          </div>

          <div
            aria-label="Select a city"
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5"
            role="group"
          >
            {CITY_TEAMS.map((city) => {
              const isSelected = city.slug === selectedCitySlug;

              return (
                <button
                  key={city.slug}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCitySlug(city.slug)}
                  className={`flex min-h-11 items-center gap-2 rounded-lg border px-3 py-2 text-left font-label-md text-label-md transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring ${
                    isSelected
                      ? 'border-primary bg-primary text-text-inverse'
                      : 'border-border-subtle bg-surface-raised text-text-primary hover:bg-surface-peach'
                  }`}
                >
                  <Icon name="location_on" className="text-base" />
                  <span className="min-w-0 break-words">{city.name}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            {selectedCity ? (
              <CityTeam city={selectedCity} />
            ) : (
              <div className="rounded-xl border border-border-subtle bg-surface-raised p-6 text-body-md text-text-secondary">
                City team details are not available yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}