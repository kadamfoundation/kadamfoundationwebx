import Image from 'next/image';
import type { CityTeamData, TeamProfile } from '@/lib/team-data';

function ProfileLinks({ profile }: { profile: TeamProfile }) {
  const links = [
    { label: 'Instagram', href: profile.instagramUrl },
    { label: 'LinkedIn', href: profile.linkedinUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  if (links.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-md font-semibold text-primary underline decoration-border-subtle underline-offset-4 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function CityProfileCard({
  profile,
  role,
}: {
  profile: TeamProfile;
  role: string;
}) {
  if (!profile.name?.trim()) return null;

  return (
    <article className="border border-border-subtle bg-surface-raised p-4">
      <div className="flex items-center gap-4">
        {profile.image ? (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-surface-container">
            <Image
              src={profile.image}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        ) : null}
        <div>
          <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
            {role}
          </p>
          <h4 className="mt-1 font-headline-md text-headline-md font-semibold text-primary">
            {profile.honorific ? `${profile.honorific} ` : ''}
            {profile.name}
          </h4>
        </div>
      </div>
      {profile.bio?.trim() ? (
        <p className="mt-4 font-body-sm text-body-sm leading-relaxed text-text-secondary">
          {profile.bio}
        </p>
      ) : null}
      <ProfileLinks profile={profile} />
    </article>
  );
}

export default function CityTeam({ city }: { city: CityTeamData }) {
  const cityHead = city.cityHead?.name?.trim()
    ? city.cityHead
    : undefined;
  const coordinators = (city.departments ?? []).flatMap((department) =>
    (department.coordinators ?? [])
      .filter((coordinator) => coordinator.name?.trim())
      .map((coordinator) => ({
        profile: coordinator,
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
            <CityProfileCard profile={cityHead} role="City head" />
          )}

          {coordinators.map(({ profile, department }, index) => (
            <CityProfileCard
              key={`${department}-${profile.name}-${index}`}
              profile={profile}
              role={profile.role ?? department}
            />
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
