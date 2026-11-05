import { CONTACT_INFO } from '@/lib/site-config';

export default function PrivacyPage() {
  return (
    <main>
      <section className="px-space-lg pb-16 pt-16 sm:px-margin md:pb-24 md:pt-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-secondary">
            Kadam SOS Foundation · Policy
          </p>
          <h1 className="mt-4 font-display-xl text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-primary">
            Privacy Notice
          </h1>
          <p className="mt-5 font-body-md text-body-md text-text-secondary">
            Privacy practices for this website and its enquiry forms.
          </p>
        </div>
      </section>

      <section className="px-space-lg pb-20 sm:px-margin md:pb-28">
        <div className="mx-auto max-w-4xl">
          <article className="space-y-10">
            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                About this notice
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                This notice describes how Kadam SOS Foundation handles
                information submitted through this website and its enquiry
                channels.
              </p>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                Information you choose to provide
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                The website links to a volunteer registration form and embeds a
                donation enquiry form provided by Google Forms. If you submit
                either form, the information you enter is handled through that
                service. Responses submitted through those forms are accessible
                only to members of Kadam&apos;s management team. Kadam does not
                share these responses outside the organization. You can also
                contact Kadam through the published email address or phone
                number. The information collected depends on what you choose to
                provide and the questions in each form.
              </p>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                A donation enquiry is not an online payment. Direct UPI
                contributions use a separate payment app or service; its
                collection and processing of payment information are governed
                by that provider&apos;s terms and privacy notice.
              </p>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                How information may be used
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                Kadam uses information you provide to respond to your
                volunteer, donation, partnership, or other enquiry. Kadam does
                not share submitted form responses outside its management team.
              </p>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                Google Forms and other external services
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                Google Forms is a third-party service. When you open or submit
                one of its forms, Google processes information to provide that
                service and may handle it under Google&apos;s own terms and
                privacy practices. This is separate from Kadam sharing form
                responses: Kadam limits access to its management team and does
                not share the responses with other organizations. The website
                also links to external social networks, maps, and other
                services, which operate under their own policies.
              </p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex font-label-md text-label-md font-semibold text-primary underline underline-offset-4"
              >
                Google Privacy Policy
              </a>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                Retention, access, and security
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                Form responses are accessible only to Kadam&apos;s management
                team. If you ask Kadam to delete information you submitted,
                contact the email below; the management team will remove the
                relevant response from records under Kadam&apos;s control.
                Google may retain or process information separately under its
                own policies and systems. Kadam has not specified a fixed
                retention period for submissions that are not the subject of
                a deletion request.
              </p>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                Website technologies
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                Kadam does not currently plan to use analytics or advertising
                cookies, or to collect separate website-usage logs. Google
                Forms and the website hosting provider may use cookies or
                create technical logs needed to provide and protect their
                services. Those providers manage such records under their own
                practices.
              </p>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">
                Contact
              </h2>
              <p className="mt-3 font-body-md text-body-md leading-relaxed text-text-secondary">
                To request deletion or ask a privacy question, contact Kadam
                SOS Foundation at{' '}
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
        </div>
      </section>
    </main>
  );
}
