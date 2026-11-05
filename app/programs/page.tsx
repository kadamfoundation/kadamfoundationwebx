import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';

const programs = [
  {
    id: 'project-shiksha',
    category: 'Education · Child literacy',
    title: 'Project Shiksha',
    summary:
      'Volunteer educators support children in underserved communities with foundational learning and regular study habits.',
    activities:
      'Weekend learning camps, remedial reading and math circles, student stationery drives, and community parent-teacher dialogues.',
    image: '/images/programs/project-shiksha.jpg',
    imageAlt: 'Children gathered for a Project Shiksha learning session',
  },
  {
    id: 'project-samanvay',
    category: 'Youth leadership · Civic engagement',
    title: 'Project Samanvay',
    summary:
      'The project connects young people across educational institutions with local communities through orientation, workshops, and collaborative grassroots work.',
    activities:
      'Inter-collegiate orientation bootcamps, community field weekends, fellowship circles, and collaborative social action.',
    image: '/images/programs/project-samanvay-field-activity.jpg',
    imageAlt: 'Kadam Foundation team members at a community event',
  },
  {
    id: 'women-empowerment',
    category: 'Women Empowerment',
    title: 'Women Empowerment',
    summary:
      'Kadam’s women-focused work brings together skill-building, vocational learning, and financial literacy.',
    activities:
      'Vocational and handicraft workshops, financial numeracy classes, menstrual hygiene awareness, and savings groups.',
    image: '/images/programs/women-empowerment.jpg',
    imageAlt: 'Women attending a Kadam Foundation empowerment session',
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <section className="px-space-lg pb-14 pt-16 sm:px-margin md:pb-20 md:pt-24">
        <div className="mx-auto max-w-[90rem]">
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
            Our work
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
            <h1 className="font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary lg:col-span-8">
              Learning. Leadership. Community.
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-text-secondary lg:col-span-4">
              Explore Kadam&apos;s education, youth leadership, women empowerment,
              and community wellbeing initiatives.
            </p>
          </div>
          <nav aria-label="Programs" className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border-subtle pt-5">
            {programs.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary"
              >
                {title}
                <Icon
                  name="expand_more"
                  className="text-sm transition-transform group-hover:translate-y-1"
                />
              </a>
            ))}
            <a
              href="#heal-with-kadam"
              className="group inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary"
            >
              Heal with Kadam
              <Icon
                name="expand_more"
                className="text-sm transition-transform group-hover:translate-y-1"
              />
            </a>
          </nav>
        </div>
      </section>

      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`scroll-mt-24 border-t border-border-subtle px-space-lg py-16 sm:px-margin md:py-24 ${
            index === 1 ? 'bg-surface-raised' : ''
          }`}
        >
          <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div
              className={`relative min-h-[22rem] overflow-hidden bg-surface-container sm:min-h-[32rem] lg:col-span-6 ${
                index === 1 ? 'lg:order-2' : ''
              }`}
            >
              <Image
                src={program.image}
                alt={program.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="editorial-image object-cover"
              />
            </div>
            <div
              className={`lg:col-span-5 ${
                index === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'
              }`}
            >
              <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
                {program.category}
              </p>
              <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-primary">
                {program.title}
              </h2>
              <p className="mt-5 font-body-lg text-body-lg text-text-secondary">
                {program.summary}
              </p>
              <div className="mt-7 border-t border-border-subtle pt-5">
                <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                  Activities
                </p>
                <p className="mt-2 font-body-md text-body-md text-text-secondary">
                  {program.activities}
                </p>
              </div>
              <Link
                href="/volunteer"
                className="group mt-7 inline-flex items-center gap-2 border-b border-primary pb-1 font-label-md text-label-md font-semibold text-primary"
              >
                Get involved
                <Icon
                  name="arrow_outward"
                  className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section
        id="heal-with-kadam"
        className="scroll-mt-24 border-t border-border-subtle bg-primary-container px-space-lg py-16 text-text-inverse sm:px-margin md:py-24"
      >
        <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-surface-peach">
              Emotional wellbeing · Listening circles
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-white">
              Heal with Kadam
            </h2>
            <p className="mt-5 font-body-lg text-body-lg text-white/75">
              Peer-listening and emotional support spaces for youth and community
              members experiencing distress, academic pressure, or isolation.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6 lg:col-span-6 lg:col-start-7">
            <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-surface-peach">
              Important to know
            </p>
            <p className="mt-3 font-body-md text-body-md text-white/80">
              Heal with Kadam offers peer listening and emotional first aid. It is
              not a substitute for clinical psychiatric care, formal therapy, or
              medical diagnosis. The initiative maintains escalation channels to
              certified mental healthcare professionals and distress hotlines
              when advanced support is needed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-peach px-space-lg py-16 sm:px-margin md:py-20">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Take part
            </p>
            <h2 className="mt-2 font-display-lg text-display-lg-mobile font-medium text-primary sm:text-display-lg">
              Support the work on the ground.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/volunteer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 font-label-md text-label-md font-semibold text-white transition-colors hover:bg-action-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Volunteer
              <Icon name="arrow_outward" className="text-base" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
