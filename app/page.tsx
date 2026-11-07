import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import HomeHeroBackground from '@/components/HomeHeroBackground';
import ImpactMetrics from '@/components/ImpactMetrics';
import JsonLd from '@/components/JsonLd';
import { CENTRAL_LEADERSHIP, CITY_TEAMS } from '@/lib/team-data';
import { SOCIAL_LINKS, VOLUNTEER_FORM_URL } from '@/lib/site-config';
import { organizationStructuredData } from '@/lib/structured-data';

const programs = [
  {
    title: 'Education',
    detail: 'Learning support and youth mentorship for children in underserved communities.',
    image: '/images/programs/project-shiksha.jpg',
    imageAlt: 'Children gathered for a Project Shiksha learning session',
    href: '/about#project-shiksha',
    label: 'Project Shiksha',
  },
  {
    title: 'Women Empowerment',
    detail: 'Skills, financial literacy, and community learning for women.',
    image: '/images/programs/women-empowerment.jpg',
    imageAlt: 'Women attending a Kadam Foundation empowerment session',
    href: '/about#women-empowerment',
    label: 'Women Empowerment',
  },
  {
    title: 'Youth Development',
    detail: 'Young people connect with communities through learning and local action.',
    image: '/images/programs/project-samanvay-field-activity.jpg',
    imageAlt: 'Youth leaders conducting a classroom session with school students',
    href: '/about#project-samanvay',
    label: 'Project Samanvay',
  },
];

export default function HomePage() {
  const founder = CENTRAL_LEADERSHIP.find(({ role }) => role === 'Founder');

  return (
    <main>
      <JsonLd data={organizationStructuredData} />
      <section className="relative isolate min-h-[min(760px,calc(100svh-5rem))] overflow-hidden bg-primary-container text-text-inverse">
        <HomeHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100B07]/85 via-[#100B07]/55 to-[#100B07]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100B07]/70 via-transparent to-[#100B07]/15" />

        <div className="relative mx-auto flex min-h-[min(760px,calc(100svh-5rem))] max-w-[90rem] flex-col justify-start px-space-lg pb-12 pt-12 sm:px-margin sm:pt-16 md:pt-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 font-eyebrow text-eyebrow uppercase tracking-[0.2em] text-white/85">
              <span className="h-px w-8 bg-surface-peach" />
              Kadam SOS Foundation · Established March 2020 · Incorporated April 2025
            </p>
            <h1 className="max-w-4xl font-display-xl text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
              Young Steps
              <br />
              Towards the Nation
            </h1>
            <p className="mt-6 max-w-2xl font-body-lg text-lg leading-relaxed text-white/85 sm:text-xl">
              A youth-led foundation working alongside communities through education,
              women&apos;s empowerment, and youth development.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-label-md text-label-md font-semibold text-inverse-primary transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Volunteer with Kadam
                <Icon name="arrow_outward" className="text-base" />
              </a>
              <Link
                href="/donate"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 font-label-md text-label-md font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Donate
                <Icon name="volunteer_activism" className="text-base" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section
        id="our-work"
        className="scroll-mt-24 px-space-lg py-20 sm:px-margin md:py-28"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
                What we do
              </p>
              <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[1.05] text-primary">
                Work rooted in people.
              </h2>
            </div>
            <Link
              href="/about#our-work"
              className="group inline-flex items-center gap-2 self-start border-b border-primary pb-1 font-label-md text-label-md font-semibold text-primary transition-colors hover:text-secondary md:self-auto"
            >
              Explore our work
              <Icon name="arrow_outward" className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <article className="group relative min-h-[30rem] overflow-hidden bg-primary-container text-white sm:min-h-[38rem] lg:col-span-7">
              <Image
                src={programs[0].image}
                alt={programs[0].imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="editorial-image object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100B07]/85 via-[#100B07]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <p className="font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-white/75">
                  {programs[0].label}
                </p>
                <h3 className="mt-2 font-display-lg text-display-lg-mobile text-white sm:text-display-lg">
                  {programs[0].title}
                </h3>
                <p className="mt-3 max-w-lg font-body-md text-body-md text-white/85">
                  {programs[0].detail}
                </p>
                <Link
                  href={programs[0].href}
                  className="mt-5 inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-white"
                >
                  Discover the work
                  <Icon name="arrow_forward" className="text-base transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

            <div className="flex flex-col gap-8 lg:col-span-5">
              {programs.slice(1).map((program, index) => (
                <article
                  key={program.title}
                  className={`group grid items-center gap-5 border-b border-border-subtle pb-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] ${
                    index === 1 ? 'sm:pt-1' : ''
                  }`}
                >
                  <Link
                    href={program.href}
                    aria-label={`Learn about ${program.title}`}
                    className="relative block aspect-[4/3] overflow-hidden bg-surface-container"
                  >
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 100vw"
                      className="editorial-image object-cover"
                    />
                  </Link>
                  <div>
                    <p className="font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-secondary">
                      {program.label}
                    </p>
                    <h3 className="mt-2 font-headline-lg text-headline-lg font-semibold text-primary">
                      {program.title}
                    </h3>
                    <p className="mt-2 font-body-sm text-body-sm text-text-secondary">
                      {program.detail}
                    </p>
                    <Link
                      href={program.href}
                      className="mt-4 inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary"
                    >
                      Learn more
                      <Icon name="arrow_forward" className="text-base transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-raised px-space-lg py-20 sm:px-margin md:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-center">
          <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[32rem] lg:col-span-7">
            <Image
              src="/images/gallery/learning-community.jpg"
              alt="Kadam volunteers and children gathered at a community learning session"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="editorial-image object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-primary-container px-4 py-2 font-eyebrow text-eyebrow uppercase tracking-widest text-text-inverse">
              Bhopal · March 2020
            </span>
          </div>

          <div className="lg:col-span-5 lg:pl-5">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              About Kadam
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.06] text-primary">
              It began in a veranda.
            </h2>
            <p className="mt-6 font-body-md text-body-md text-text-secondary">
              On 20 March 2020, Ms. Prachi Dwivedi met children near her home who were
              hungry and not going to school. The next day, she began teaching 10
              children in her veranda. That small classroom became Kadam&apos;s first
              step.
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 border-b border-primary pb-1 font-label-md text-label-md font-semibold text-primary"
            >
              Read Kadam&apos;s story
              <Icon name="arrow_outward" className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-space-lg py-20 sm:px-margin md:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Leadership
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.06] text-primary">
              A beginning carried forward.
            </h2>
            <div className="mt-7 border-t border-border-subtle">
              {CENTRAL_LEADERSHIP.map(({ id, role, member }) => (
                <div
                  key={id}
                  className="flex items-baseline justify-between gap-4 border-b border-border-subtle py-4"
                >
                  <span className="font-body-sm text-body-sm uppercase tracking-wider text-text-secondary">
                    {role}
                  </span>
                  <span className="text-right font-headline-md text-headline-md font-semibold text-primary">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/founder"
              className="group mt-6 inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary"
            >
              Read the founder&apos;s story
              <Icon name="arrow_outward" className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="relative order-1 min-h-[26rem] overflow-hidden bg-surface-container sm:min-h-[34rem] lg:order-2 lg:col-span-7">
            <Image
              src="/images/leadership/founder.jpg"
              alt="Ms. Prachi Dwivedi, Founder of Kadam Foundation"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="editorial-image object-cover object-[center_38%]"
            />
            <Link
              href="/founder"
              className="absolute bottom-4 left-4 bg-surface-raised px-4 py-2 font-eyebrow text-eyebrow uppercase tracking-widest text-primary hover:text-secondary"
            >
              Ms. Prachi Dwivedi · Founder
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="community-media-heading"
        className="border-t border-border-subtle px-space-lg py-16 sm:px-margin md:py-20"
      >
        <div className="mx-auto grid max-w-[90rem] gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Stories in motion
            </p>
            <h2
              id="community-media-heading"
              className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-primary"
            >
              From our community.
            </h2>
            <p className="mt-4 max-w-2xl font-body-md text-body-md text-text-secondary">
              Watch videos and reels from Kadam&apos;s community activities on
              our official social channels.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            {SOCIAL_LINKS.filter(({ name }) =>
              ['YouTube', 'Instagram'].includes(name),
            ).map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                <Icon name={icon} className="text-lg" />
                Visit {name}
                <Icon name="arrow_outward" className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-container px-space-lg py-20 text-text-inverse sm:px-margin md:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-primary">
              A nationwide movement
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.06] text-white">
              Local action, across India.
            </h2>
            <p className="mt-5 max-w-xl font-body-md text-body-md text-white/75">
              Kadam works through local volunteers and city teams in 15+ cities.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/20 pt-5">
              {CITY_TEAMS.slice(0, 5).map((city) => (
                <span key={city.slug} className="font-body-sm text-body-sm text-white/80">
                  {city.name}
                </span>
              ))}
              <span className="font-body-sm text-body-sm text-primary">and more</span>
            </div>
            <Link
              href="/team"
              className="group mt-7 inline-flex items-center gap-2 border-b border-white/50 pb-1 font-label-md text-label-md font-semibold text-white"
            >
              Explore our city teams
              <Icon name="arrow_outward" className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden bg-surface-container p-3 sm:min-h-[30rem] lg:col-span-7">
            <Image
              src="/images/homepage/operational-cities-map.jpg"
              alt="Map showing Kadam Foundation's operational cities across India"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="dark-map-image object-contain p-2 sm:p-5"
            />
          </div>
          <ImpactMetrics />
        </div>
      </section>

      <section className="bg-surface-peach px-space-lg py-16 sm:px-margin md:py-20">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Take part
            </p>
            <h2 className="mt-2 font-display-lg text-[clamp(2rem,4vw,3.3rem)] font-medium leading-tight text-primary">
              Be part of the next step.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 font-label-md text-label-md font-semibold text-white transition-colors hover:bg-action-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Volunteer
              <Icon name="arrow_outward" className="text-base" />
            </a>
            <Link
              href="/donate"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
