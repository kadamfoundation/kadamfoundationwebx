import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { VOLUNTEER_FORM_URL } from '@/lib/site-config';

const milestones = [
  {
    date: '20 March 2020',
    title: 'The encounter',
    detail:
      'Prachi Dwivedi met children near her home who were hungry and not going to school.',
  },
  {
    date: '21 March 2020',
    title: 'The first classroom',
    detail:
      'She began teaching 10 children in the veranda of her home. Barande Wali Kaksha became Kadam’s first step.',
  },
  {
    date: '2022',
    title: 'Beyond the veranda',
    detail:
      'After Prachi moved from the original location, volunteers joined and Kadam began reaching other communities.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              About Kadam Foundation
            </p>
            <h1 className="mt-4 max-w-4xl font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary">
              A small step can change the direction of a life.
            </h1>
          </div>
          <p className="max-w-xl font-body-lg text-body-lg text-text-secondary lg:col-span-5 lg:pb-2">
            Kadam is a youth-led foundation working with communities through
            education, women&apos;s empowerment, and youth development.
          </p>
        </div>

        <div className="relative mx-auto mt-12 min-h-[22rem] max-w-[90rem] overflow-hidden bg-surface-container sm:min-h-[34rem]">
          <Image
            src="/images/gallery/learning-community.jpg"
            alt="Kadam volunteers and children gathered at a community learning session"
            fill
            priority
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="editorial-image object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-xl font-headline-md text-headline-md text-white sm:bottom-8 sm:left-8 sm:text-2xl">
            Young people and communities, working side by side.
          </p>
        </div>
      </section>

      <section id="story" className="bg-primary-container px-space-lg py-20 text-text-inverse sm:px-margin md:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-surface-peach">
              Our beginning
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-white">
              One veranda. Ten children. A first step.
            </h2>
            <p className="mt-6 font-body-md text-body-md text-white/75">
              On 20 March 2020, Prachi saw children near her home searching for
              food. When she asked whether they went to school, they said they did
              not. She could not let that encounter become just a memory.
            </p>
            <p className="mt-4 font-body-md text-body-md text-white/75">
              The next day, while still a schoolgirl herself, she began teaching
              children in her veranda. That small classroom was the beginning of
              Kadam Foundation.
            </p>
          </div>

          <div className="border-t border-white/20 pt-2 lg:col-span-7 lg:col-start-6">
            {milestones.map(({ date, title, detail }, index) => (
              <article
                key={date}
                className="grid gap-3 border-b border-white/20 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-surface-peach">
                  {date}
                </p>
                <div>
                  <h3 className="font-headline-lg text-headline-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-2xl font-body-md text-body-md text-white/70">
                    {detail}
                  </p>
                </div>
                <span className="sr-only">Milestone {index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-space-lg py-20 sm:px-margin md:py-28">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-10 max-w-2xl">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              What guides us
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-primary">
              Our mission and vision.
            </h2>
          </div>

          <div className="grid gap-px bg-border-subtle md:grid-cols-2">
            <article className="bg-surface-raised p-7 sm:p-10">
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                Mission
              </p>
              <p className="mt-5 font-headline-md text-headline-md text-primary sm:text-2xl">
                To empower grassroots communities through youth-led initiatives in
                education, ecological action, and social welfare—building
                transparent, decentralized models of empathy and self-reliance
                that foster generational dignity.
              </p>
            </article>
            <article className="bg-surface-raised p-7 sm:p-10">
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                Vision
              </p>
              <p className="mt-5 font-headline-md text-headline-md text-primary sm:text-2xl">
                A resilient, equitable India where every young citizen possesses
                the agency, resources, and civic platform to uplift their
                neighborhood and build a dignified future for all, free from
                systemic neglect and ecological degradation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-surface-peach px-space-lg py-16 sm:px-margin md:py-20">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Continue the journey
            </p>
            <h2 className="mt-2 font-display-lg text-display-lg-mobile font-medium text-primary sm:text-display-lg">
              Take a step with Kadam.
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
              href="/programs"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
