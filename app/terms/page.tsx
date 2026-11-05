import { CONTACT_INFO } from '@/lib/site-config';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Terms of Use',
  'Read the terms for using the Kadam SOS Foundation website.',
  '/terms',
);

export default function TermsPage() {
  return (
    <main>
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
            Kadam SOS Foundation · Policy
          </p>
          <h1 className="mt-4 font-display-xl text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary">
            Terms of Use
          </h1>
          <p className="mt-5 font-body-md text-body-md text-text-secondary">
            Terms for use of the Kadam SOS Foundation website.
          </p>
        </div>
      </section>

      <section className="px-space-lg pb-20 sm:px-margin md:pb-28">
        <article className="mx-auto max-w-4xl space-y-10">
          <section>
            <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
              Using this website
            </h2>
            <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
              This website shares information about Kadam SOS Foundation, its
              initiatives, events, and ways to get in touch. By using the
              website, visitors are expected to use it lawfully and not
              interfere with its operation or misuse its content or contact
              channels.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
              Information and availability
            </h2>
            <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
              Website content is provided to help visitors understand
              Kadam&apos;s work and contact the organization. Event details and
              activities may change; please contact Kadam to confirm details
              relevant to you.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
              Donation enquiries and contributions
            </h2>
            <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
              The embedded Google Form is a donation enquiry form, not an online
              payment gateway. Submitting an enquiry expresses interest;
              Kadam&apos;s team may contact the visitor with instructions. A
              donation is considered complete only after payment is received
              and verified. Any direct UPI contribution is a separate payment
              flow. The form submission itself does not complete a donation.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
              External services
            </h2>
            <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
              The website may link to or embed third-party services, including
              Google Forms, social networks, and map services. Those services
              operate under their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
              Contact
            </h2>
            <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
              Questions about these terms may be sent to{' '}
              <a
                href={CONTACT_INFO.emailHref}
                className="font-semibold text-primary underline underline-offset-4"
              >
                {CONTACT_INFO.email}
              </a>
              .
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
