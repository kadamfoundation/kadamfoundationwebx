import Link from 'next/link';
import Icon from '@/components/Icon';
import { CONTACT_INFO } from '@/lib/site-config';

export default function PartnershipsPage() {
  return (
    <main>
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto max-w-[90rem]">
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
            Community · Collaboration · Shared action
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 className="font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary lg:col-span-8">
              Partnerships
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-text-secondary lg:col-span-4">
              Explore ways to work alongside Kadam Foundation in support of
              community-led initiatives.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${CONTACT_INFO.emailHref}?subject=Partnership%20Proposal`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 font-label-md text-label-md font-semibold text-white transition-colors hover:bg-action-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Propose a partnership
              <Icon name="arrow_outward" className="text-base" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-surface-raised px-space-lg py-16 sm:px-margin md:py-24">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8 lg:col-start-3">
            <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
              Partnerships
            </p>
            <h2 className="mt-3 font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-primary">
              Build a thoughtful collaboration.
            </h2>
            <p className="mt-5 font-body-md text-body-md text-text-secondary">
              For institutional partnership proposals, corporate CSR enquiries,
              research clearances, or governance queries, contact Kadam through
              its official email.
            </p>
            <a
              href={`${CONTACT_INFO.emailHref}?subject=Partnerships`}
              className="mt-6 inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:underline"
            >
              {CONTACT_INFO.email}
              <Icon name="arrow_outward" className="text-base" />
            </a>
          </article>
        </div>
      </section>

      <section className="px-space-lg py-14 sm:px-margin md:py-20">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-6 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body-md text-body-md text-text-secondary">
            Have a question about taking part or working together?
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-raised focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Contact Kadam
          </Link>
        </div>
      </section>
    </main>
  );
}
