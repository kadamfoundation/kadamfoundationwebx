import Image from 'next/image';
import type { CityTeamData } from '@/lib/team-data';

export default function CityTeam({ city }: { city: CityTeamData }) {
  const cityHead = city.cityHead?.name?.trim()
    ? city.cityHead
    : undefined;
  const coordinators = (city.departments ?? []).flatMap((department) =>
    (department.coordinators ?? [])
      .filter((coordinator) => coordinator.name?.trim())
      .map((coordinator) => ({
        ...coordinator,
        department: department.name,
      })),
  );

  return (
    <section
      aria-labelledby="selected-city-heading"
      className="border-t border-border-subtle pt-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
            Selected city
          </p>
          <h3
            id="selected-city-heading"
            className="mt-1 font-display-lg text-display-lg-mobile font-medium text-primary sm:text-display-lg"
          >
            {city.name}
          </h3>
        </div>
        <span className="font-body-sm text-body-sm text-text-secondary">
          Kadam city team
        </span>
      </div>

      {cityHead || coordinators.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityHead && (
            <article className="flex items-center gap-4 border border-border-subtle bg-surface-raised p-4">
              {cityHead.image ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-surface-container">
                  <Image
                    src={cityHead.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="h-16 w-16 shrink-0 rounded-full bg-surface-container"
                />
              )}
              <div>
                <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                  City head
                </p>
                <p className="mt-1 font-headline-md text-headline-md font-semibold text-primary">
                  {cityHead.honorific ?? 'Ms.'} {cityHead.name}
                </p>
              </div>
            </article>
          )}

          {coordinators.map((coordinator, index) => (
            <article
              key={`${coordinator.department}-${coordinator.name}-${index}`}
              className="border border-border-subtle bg-surface-raised p-4"
            >
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                {coordinator.department}
              </p>
              <p className="mt-1 font-headline-md text-headline-md font-semibold text-primary">
                {coordinator.name}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 font-body-md text-body-md text-text-secondary">
          Leadership profiles for this city are not currently listed.
        </p>
      )}
    </section>
  );
}
