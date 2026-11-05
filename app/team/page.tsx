'use client';

import Image from 'next/image';
import { useState } from 'react';
import CityTeam from '@/components/CityTeam';
import Icon from '@/components/Icon';
import { CENTRAL_LEADERSHIP, CITY_TEAMS } from '@/lib/team-data';

const founder = CENTRAL_LEADERSHIP.find(({ role }) => role === 'Founder');
const directors = CENTRAL_LEADERSHIP.filter(({ role }) => role === 'Director');

export default function TeamPage() {
  const [selectedCitySlug, setSelectedCitySlug] = useState(CITY_TEAMS[0]?.slug ?? '');
  const selectedCity = CITY_TEAMS.find((city) => city.slug === selectedCitySlug);

  return (
    <main>
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto max-w-[90rem]">
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
            Kadam Foundation
          </p>
          <h1 className="mt-4 max-w-5xl font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary">
            The people behind the work.
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-text-secondary">
            Meet Kadam&apos;s central leadership and explore its city teams.
          </p>
        </div>
      </section>

      {founder && (
        <section className="bg-primary-container px-space-lg py-16 text-text-inverse sm:px-margin md:py-24">
          <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-12 lg:items-center">
            <div className="relative min-h-[25rem] overflow-hidden bg-surface-raised sm:min-h-[36rem] lg:col-span-6">
              {founder.member.image && (
                <Image
                  src={founder.member.image}
                  alt="Ms. Prachi Dwivedi, Founder of Kadam Foundation"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="editorial-image object-cover object-[center_38%]"
                />
              )}
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-surface-peach">
                Founder
              </p>
              <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-white">
                {founder.member.name}
              </h2>
              <p className="mt-5 font-body-lg text-body-lg text-white/75">
                Kadam began with Ms. Prachi Dwivedi&apos;s first classroom in the
                veranda of her home in March 2020. Her story remains at the heart
                of the foundation&apos;s work.
              </p>
              <a
                href="/about#story"
                className="group mt-7 inline-flex items-center gap-2 border-b border-white/50 pb-1 font-label-md text-label-md font-semibold text-white"
              >
                Read the story
                <Icon
                  name="arrow_outward"
                  className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="px-space-lg py-16 sm:px-margin md:py-24">
        <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Central leadership
            </p>
            <h2 className="mt-3 font-display-lg text-display-lg-mobile font-medium text-primary sm:text-display-lg">
              Foundation directors.
            </h2>
          </div>
          <div className="border-t border-border-subtle lg:col-span-7 lg:col-start-6">
            {directors.map(({ id, role, member }) => (
              <article
                key={id}
                className="flex items-baseline justify-between gap-5 border-b border-border-subtle py-5"
              >
                <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                  {role}
                </p>
                <h3 className="text-right font-headline-md text-headline-md font-semibold text-primary">
                  {member.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-surface-raised px-space-lg py-16 sm:px-margin md:py-24">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
                Across India
              </p>
              <h2 className="mt-3 font-display-lg text-display-lg-mobile font-medium text-primary sm:text-display-lg">
                City teams.
              </h2>
            </div>
            <p className="max-w-xl font-body-md text-body-md text-text-secondary">
              Choose a city to see the leadership information currently listed.
            </p>
          </div>

          <div
            aria-label="Select a city"
            className="flex flex-wrap gap-2"
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
                  className={`inline-flex min-h-11 items-center gap-2 border px-4 py-2 font-label-md text-label-md transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring ${
                    isSelected
                      ? 'border-primary bg-primary text-inverse-primary'
                      : 'border-border-subtle bg-surface-raised text-text-primary hover:bg-surface-canvas'
                  }`}
                >
                  <Icon name="location_on" className="text-base" />
                  {city.name}
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            {selectedCity ? (
              <CityTeam city={selectedCity} />
            ) : (
              <p className="border-t border-border-subtle py-5 font-body-md text-body-md text-text-secondary">
                City team details are not available yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
