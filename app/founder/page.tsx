import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/seo';
import { founderStructuredData } from '@/lib/structured-data';

export const metadata = createPageMetadata(
  'Ms. Prachi Dwivedi, Founder',
  'Read the story of Ms. Prachi Dwivedi, founder of Kadam SOS Foundation, and the veranda classroom that began the organisation’s work.',
  '/founder',
);

export default function FounderPage() {
  return (
    <main>
      <JsonLd data={founderStructuredData} />
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Founder · Kadam SOS Foundation
            </p>
            <h1 className="mt-4 max-w-5xl font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary">
              Ms. Prachi Dwivedi
            </h1>
            <p className="mt-5 max-w-2xl font-body-lg text-body-lg text-text-secondary">
              A classroom in a veranda became the first step in Kadam&apos;s
              community work.
            </p>
          </div>
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-secondary lg:col-span-3 lg:col-start-10">
            Bhopal · 20 March 2020
          </p>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-primary-container px-space-lg py-12 text-text-inverse sm:px-margin md:py-16">
        <div className="mx-auto grid max-w-[90rem] gap-10 md:grid-cols-12 md:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-surface-raised md:col-span-5 md:mx-0">
            <Image
              src="/images/leadership/founder.jpg"
              alt="Ms. Prachi Dwivedi, Founder of Kadam SOS Foundation"
              fill
              priority
              sizes="(min-width: 768px) 42vw, 100vw"
              className="editorial-image object-cover object-[center_38%]"
            />
          </div>
          <article className="space-y-6 font-body-md text-body-md leading-relaxed text-white/80 md:col-span-6 md:col-start-7">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-primary">
              The beginning
            </p>
            <h2 className="font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-white">
              One encounter, then a classroom.
            </h2>
            <p>
              On 20 March 2020, Ms. Prachi Dwivedi met children near her home
              who were searching for food in a dustbin. She spoke with them and
              brought food supplies from home. When she asked whether they went
              to school, they said they did not.
            </p>
            <p>
              The next day, while still a schoolgirl, she began teaching 10
              children in the veranda of her home. Barande Wali Kaksha—a
              classroom in the veranda—started with a small space and the belief
              that every child deserves an opportunity to learn.
            </p>
            <p>
              More children gradually joined. Over the next two years, the
              initiative grew into a learning centre that reached approximately
              50–100 people.
            </p>
            <p>
              In 2022, Ms. Prachi moved away from the place where the work had
              begun. Volunteers and community members helped carry the effort
              forward, and Kadam expanded beyond Bhopal to more than 15 cities.
            </p>
          </article>
        </div>
      </section>

      <section className="px-space-lg py-16 sm:px-margin md:py-24">
        <div className="mx-auto max-w-[90rem]">
          <blockquote className="max-w-4xl font-display-lg text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] text-primary">
            “What can I do, right where I am? Sometimes, all it takes is the
            courage to take one Kadam.”
          </blockquote>
          <p className="mt-5 font-body-sm text-body-sm text-text-secondary">
            Ms. Prachi Dwivedi · Founder, Kadam SOS Foundation
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/about#our-work"
              className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:underline"
            >
              Explore Kadam&apos;s work
              <Icon name="arrow_outward" className="text-base" />
            </Link>
            <Link
              href="/team"
              className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:underline"
            >
              Meet the leadership
              <Icon name="arrow_outward" className="text-base" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
