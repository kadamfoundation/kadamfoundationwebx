import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { VOLUNTEER_FORM_URL } from '@/lib/site-config';

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

export default function AboutPage() {
  return (
    <main>
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              About Us
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

      <section
        id="story"
        className="bg-primary-container px-space-lg py-20 text-text-inverse sm:px-margin md:py-28"
      >
        <div className="mx-auto max-w-[90rem]">
          <header className="grid gap-8 border-b border-white/20 pb-10 md:grid-cols-12 md:items-end md:pb-14">
            <div className="md:col-span-8">
              <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-primary">
                The story of Kadam · 20 March 2020
              </p>
              <h2 className="mt-4 max-w-4xl font-display-lg text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] text-white">
                One step that travelled miles.
              </h2>
            </div>
            <p className="font-body-md text-body-md leading-relaxed text-white/75 md:col-span-4">
              Kadam began with one encounter near Prachi Dwivedi&apos;s home—and
              the decision not to look away.
            </p>
          </header>

          <article className="grid gap-8 py-10 md:grid-cols-12 md:gap-12 md:py-14">
            <div className="md:col-span-5">
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-primary">
                01 · The encounter
              </p>
              <h3 className="mt-3 font-headline-xl text-headline-xl font-semibold text-white">
                A question about hunger—and another about school.
              </h3>
            </div>
            <div className="space-y-5 font-body-md text-body-md leading-relaxed text-white/80 md:col-span-6 md:col-start-7">
              <p>
                On 20 March 2020, Prachi saw children near her home searching for
                food in a dustbin. She went to speak with them and brought food
                supplies from her home.
              </p>
              <blockquote className="border-l-2 border-primary py-1 pl-5 font-headline-md text-headline-md text-white">
                “Didi, bhookh lagi hai. Humne kuch nahi khaya.”
                <span className="mt-2 block font-body-sm text-body-sm text-white/65">
                  “Sister, we are hungry. We haven&apos;t eaten anything.”
                </span>
              </blockquote>
              <p>
                As they spoke, she asked whether they went to school. They said
                they did not. The moment brought two needs into view: immediate
                hunger, and children missing out on an opportunity to learn.
              </p>
              <p>
                Prachi was still a schoolgirl. She had no organisation, team,
                funding, or roadmap—but she knew she could not let the encounter
                become just a memory.
              </p>
            </div>
          </article>

          <article className="grid items-center gap-8 border-t border-white/20 py-10 md:grid-cols-12 md:gap-12 md:py-14">
            <div className="relative min-h-[18rem] overflow-hidden bg-surface-container sm:min-h-[25rem] md:col-span-6">
              <Image
                src="/images/gallery/classroom-session.jpg"
                alt="Children taking part in a community learning session"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="editorial-image object-cover"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-primary">
                02 · 21 March 2020
              </p>
              <h3 className="mt-3 font-display-lg text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.05] text-white">
                A classroom in the veranda.
              </h3>
              <p className="mt-5 font-body-md text-body-md leading-relaxed text-white/80">
                The next day, Prachi began teaching 10 children in her home&apos;s
                veranda. Barande Wali Kaksha—“a classroom in the veranda”—started
                with a small space, a few children, and the belief that every
                child deserves an opportunity to learn.
              </p>
              <p className="mt-4 font-body-md text-body-md leading-relaxed text-white/80">
                More children gradually joined. Over the next two years, the
                initiative grew into a learning centre that reached approximately
                50–100 people.
              </p>
              <p className="mt-5 border-l-2 border-primary pl-4 font-headline-md text-headline-md text-white">
                “We could start with what we had, where we were.”
              </p>
            </div>
          </article>

          <article className="grid items-center gap-8 border-t border-white/20 py-10 md:grid-cols-12 md:gap-12 md:py-14">
            <div className="md:col-span-5">
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-primary">
                03 · 2022 and beyond
              </p>
              <h3 className="mt-3 font-display-lg text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.05] text-white">
                When one classroom was no longer enough.
              </h3>
              <div className="mt-5 space-y-4 font-body-md text-body-md leading-relaxed text-white/80">
                <p>
                  In 2022, Prachi moved away from the place where the work had
                  begun. Leaving the veranda behind raised a new question: how
                  could the effort reach children who could not come to that
                  classroom?
                </p>
                <p>
                  A WhatsApp group and social media helped connect people across
                  Bhopal. Volunteers joined, shared ideas, and began taking
                  responsibility in their own communities. Over time, Kadam
                  expanded beyond Bhopal to more than 15 cities.
                </p>
              </div>
            </div>
            <div className="relative mx-auto aspect-[9/20] w-full max-w-[22rem] overflow-hidden bg-surface-container md:col-span-5 md:col-start-8">
              <Image
                src="/images/gallery/community-volunteers.jpg"
                alt="Kadam volunteers and community members gathered for an indoor learning session"
                fill
                sizes="(min-width: 768px) 22rem, 90vw"
                className="editorial-image object-cover"
              />
            </div>
          </article>

          <footer className="border-t border-white/20 pt-8 md:pt-10">
            <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-primary">
              A founder&apos;s reflection
            </p>
            <blockquote className="mt-4 max-w-4xl font-display-lg text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] text-white">
              “What can I do, right where I am? Sometimes, all it takes is the
              courage to take one Kadam.”
            </blockquote>
            <p className="mt-5 font-body-sm text-body-sm text-white/65">
              Prachi Dwivedi · Founder &amp; Director, Kadam Foundation
            </p>
          </footer>
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

      <section id="our-work" className="border-t border-border-subtle px-space-lg py-16 sm:px-margin md:py-24">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-9 max-w-3xl">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Our work
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-primary">
              Learning. Leadership. Community.
            </h2>
            <p className="mt-4 font-body-lg text-body-lg text-text-secondary">
              Explore Kadam&apos;s education, youth leadership, women empowerment,
              and community wellbeing initiatives.
            </p>
          </div>
          <nav aria-label="Our work" className="mb-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border-subtle pt-5">
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
      </section>

      <section
        id="heal-with-kadam"
        className="scroll-mt-24 border-t border-border-subtle bg-primary-container px-space-lg py-16 text-text-inverse sm:px-margin md:py-24"
      >
        <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-primary">
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
            <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-primary">
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
              href="#our-work"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Explore our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
