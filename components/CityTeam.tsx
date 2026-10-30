import Image from 'next/image';
import Icon from '@/components/Icon';
import type { CityDepartment, CityTeamData, TeamProfile } from '@/lib/team-data';

function ProfilePlaceholder({ member, role }: { member?: TeamProfile; role: string }) {
  const name = member?.name?.trim();

  return (
    <article className="flex min-w-0 items-center gap-4 rounded-lg border border-border-subtle bg-surface-raised p-4">
      <div
        aria-label={member?.image ? `${role} portrait` : `${role} avatar placeholder`}
        className="relative flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-subtle bg-surface-clay-soft text-text-secondary"
        role="img"
      >
        {member?.image ? (
          <Image src={member.image} alt="" fill sizes="144px" className="object-cover" />
        ) : (
          <Icon name="diversity_1" className="text-5xl" />
        )}
      </div>
      <div className="min-w-0">
        <p className="font-eyebrow text-eyebrow uppercase text-text-secondary">{role}</p>
        <p className="mt-0.5 break-words font-label-md text-label-md font-semibold text-text-primary">
          {name || 'Name pending'}
        </p>
        {!name && (
          <p className="mt-0.5 font-body-sm text-body-sm text-text-secondary">
            Awaiting official details
          </p>
        )}
        {name && !member?.image && (
          <p className="mt-0.5 font-body-sm text-body-sm text-text-secondary">
            Portrait pending
          </p>
        )}
      </div>
    </article>
  );
}

function DepartmentTeam({ department }: { department: CityDepartment }) {
  const coordinators = department.coordinators ?? [];

  return (
    <section className="border-t border-border-subtle py-5">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-headline-md text-headline-md font-semibold text-primary">
          {department.name}
        </h4>
        <span className="font-body-sm text-body-sm text-text-secondary">
          Reports to City Head
        </span>
      </div>
      {coordinators.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map((coordinator, index) => (
            <ProfilePlaceholder
              key={`${department.id}-coordinator-${index + 1}`}
              member={coordinator}
              role={`Coordinator ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed border-border-subtle px-4 py-3 font-body-sm text-body-sm text-text-secondary">
          No coordinator profiles added yet.
        </p>
      )}
    </section>
  );
}

export default function CityTeam({ city }: { city: CityTeamData }) {
  const departments = city.departments ?? [];

  return (
    <section
      aria-labelledby="selected-city-heading"
      className="rounded-xl border border-border-subtle bg-surface-canvas p-5 md:p-7"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-border-subtle pb-4">
        <div>
          <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
            Selected City
          </span>
          <h3 id="selected-city-heading" className="mt-1 font-headline-xl text-headline-xl text-primary">
            {city.name}
          </h3>
        </div>
        <span className="rounded-full border border-border-subtle bg-surface-raised px-3 py-1 font-label-md text-label-md text-text-secondary">
          City Team
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,2fr)] md:items-center">
        <div>
          <h4 className="font-headline-md text-headline-md font-semibold text-primary">City Head</h4>
          <p className="mt-1 font-body-sm text-body-sm text-text-secondary">
            Leads the city team
          </p>
        </div>
        <ProfilePlaceholder member={city.cityHead} role="City Head" />
      </div>

      <div className="mt-5 flex items-start gap-2 border-y border-border-subtle py-3 font-body-sm text-body-sm text-text-secondary">
        <Icon name="account_tree" className="mt-0.5 text-primary" />
        <p>All five departments report directly to the City Head. There is no separate In-charge role.</p>
      </div>

      {departments.length > 0 ? (
        <div>
          {departments.map((department) => (
            <DepartmentTeam key={department.id} department={department} />
          ))}
        </div>
      ) : (
        <p className="mt-5 rounded-lg border border-dashed border-border-subtle px-4 py-4 font-body-sm text-body-sm text-text-secondary">
          Department teams have not been added yet.
        </p>
      )}
    </section>
  );
}