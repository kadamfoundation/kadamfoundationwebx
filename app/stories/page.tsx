import Icon from '@/components/Icon';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Stories & Events',
  'Explore community stories and events from Kadam SOS Foundation, including the Samanvay Youth Parliament in Bhopal.',
  '/stories',
);

export default function StoriesPage() {
  return (
    <main>
      <section className="px-space-lg pb-12 pt-16 sm:px-margin md:pb-16 md:pt-24">
        <div className="mx-auto max-w-[90rem]">
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
            Stories &amp; Events
          </p>
          <h1 className="mt-4 max-w-4xl font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary">
            From the Kadam community.
          </h1>
          <p className="mt-5 max-w-2xl font-body-lg text-body-lg text-text-secondary">
            Follow upcoming events and stories from Kadam&apos;s work with
            communities.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="youth-parliament-title"
        className="border-t border-border-subtle bg-surface-raised px-space-lg py-12 sm:px-margin md:py-16"
      >
        <article className="mx-auto grid max-w-[90rem] gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-2 border border-primary/50 px-4 py-2 font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-primary">
              <Icon name="event_note" className="text-base" />
              Event
            </span>
            <p className="mt-4 font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-secondary">
              Project Samanvay
            </p>
          </div>
          <div className="md:col-span-9">
            <h2
              id="youth-parliament-title"
              className="font-display-lg text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.05] text-primary"
            >
              Samanvay Youth Parliament
            </h2>
            <p className="mt-4 max-w-3xl font-body-md text-body-md text-text-secondary">
              An initiative by Kadam Foundation under Project Samanvay, bringing
              together youth leaders from different institutional backgrounds.
            </p>
            <dl className="mt-7 grid gap-5 border-t border-border-subtle pt-5 sm:grid-cols-3">
              <div>
                <dt className="font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-secondary">
                  Date
                </dt>
                <dd className="mt-2 inline-flex items-center gap-2 font-body-md text-body-md text-primary">
                  <Icon name="calendar_month" className="text-base text-secondary" />
                  12–13 December 2026
                </dd>
              </div>
              <div>
                <dt className="font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-secondary">
                  Venue
                </dt>
                <dd className="mt-2 inline-flex items-center gap-2 font-body-md text-body-md text-primary">
                  <Icon name="location_on" className="text-base text-secondary" />
                  Career College, Bhopal
                </dd>
              </div>
              <div>
                <dt className="font-eyebrow text-eyebrow uppercase tracking-[0.16em] text-secondary">
                  Participation fee
                </dt>
                <dd className="mt-2 inline-flex items-center gap-2 font-body-md text-body-md text-primary">
                  <Icon name="payments" className="text-base text-secondary" />
                  ₹499
                </dd>
              </div>
            </dl>
            <a
              href="https://forms.gle/UXuS8jj8MzPSFtEu6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 font-label-md text-label-md font-semibold text-white transition-colors hover:bg-action-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Register for the event
              <Icon name="arrow_outward" className="text-base" />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
